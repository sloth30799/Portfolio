import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import ContactForm from "../components/ContactForm"
import { ContactConfigurationError, sendContactForm } from "../lib/contact"

const configured = { serviceId: "service-id", templateId: "template-id", publicKey: "public-key" }

async function fillValidForm(user) {
  await user.type(screen.getByLabelText("Name"), "Han")
  await user.type(screen.getByLabelText("Email"), "han@example.com")
  await user.type(screen.getByLabelText("Message"), "A considered product question.")
}

describe("EmailJS contact boundary", () => {
  it("rejects incomplete configuration before calling a client", async () => {
    const client = { sendForm: vi.fn() }
    await expect(sendContactForm({ config: { ...configured, publicKey: "   " }, form: document.createElement("form"), client }))
      .rejects.toMatchObject({ name: "ContactConfigurationError", code: "EMAILJS_CONFIGURATION_ERROR" })
    expect(client.sendForm).not.toHaveBeenCalled()
  })

  it("calls an explicit configured client once with the exact legacy EmailJS FormData mapping", async () => {
    const user = userEvent.setup()
    const client = { sendForm: vi.fn().mockResolvedValue({ status: 200 }) }
    render(<ContactForm config={configured} client={client} />)
    await fillValidForm(user)
    await user.click(screen.getByRole("button", { name: "Send message" }))
    await waitFor(() => expect(client.sendForm).toHaveBeenCalledTimes(1))
    const [, , form] = client.sendForm.mock.calls[0]
    expect(Object.fromEntries(new FormData(form))).toEqual({
      user_name: "Han",
      user_email: "han@example.com",
      message: "A considered product question.",
    })
    expect(client.sendForm).toHaveBeenCalledTimes(1)
    expect(client.sendForm).toHaveBeenCalledWith("service-id", "template-id", form, "public-key")
  })

  it("exposes a recognizable configuration error type", () => {
    expect(new ContactConfigurationError()).toMatchObject({ name: "ContactConfigurationError", code: "EMAILJS_CONFIGURATION_ERROR" })
  })
})

describe("ContactForm contract", () => {
  it("binds persistent labels, keeps a polite live region, and validates trimmed fields", async () => {
    const user = userEvent.setup()
    const client = { sendForm: vi.fn() }
    render(<ContactForm config={configured} client={client} />)
    const name = screen.getByLabelText("Name")
    const email = screen.getByLabelText("Email")
    const message = screen.getByLabelText("Message")
    expect(name).toHaveAttribute("id", "contact-name")
    expect(name).toHaveAttribute("name", "user_name")
    expect(email).toHaveAttribute("id", "contact-email")
    expect(email).toHaveAttribute("name", "user_email")
    expect(message).toHaveAttribute("id", "contact-message")
    expect(message).toHaveAttribute("name", "message")
    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite")
    await user.type(name, "   ")
    await user.type(email, "not-an-email")
    await user.click(screen.getByRole("button", { name: "Send message" }))
    expect(name).toHaveAttribute("aria-invalid", "true")
    expect(email).toHaveAttribute("aria-invalid", "true")
    expect(message).toHaveAttribute("aria-invalid", "true")
    expect(name).toHaveAttribute("aria-describedby", "contact-name-error")
    expect(email).toHaveAttribute("aria-describedby", "contact-email-error")
    expect(message).toHaveAttribute("aria-describedby", "contact-message-error")
    expect(document.getElementById("contact-name-error")).toHaveTextContent("This field is required.")
    expect(document.getElementById("contact-email-error")).toHaveTextContent("Enter a valid email address.")
    expect(document.getElementById("contact-message-error")).toHaveTextContent("This field is required.")
    expect(name).toHaveFocus()
    expect(client.sendForm).not.toHaveBeenCalled()
  })

  it("uses the default production boundary safely when configuration is absent", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await fillValidForm(user)
    await user.click(screen.getByRole("button", { name: "Send message" }))
    const status = screen.getByRole("status")
    await waitFor(() => expect(status).toHaveTextContent("The form is not configured right now. Email me directly and I’ll get back to you."))
  })

  it("announces loading, guards rapid submits, and announces success from the real boundary", async () => {
    const user = userEvent.setup()
    let resolveDelivery
    const client = { sendForm: vi.fn(() => new Promise((resolve) => { resolveDelivery = resolve })) }
    render(<ContactForm config={configured} client={client} />)
    await fillValidForm(user)
    const submit = screen.getByRole("button", { name: "Send message" })
    await user.click(submit)
    await user.click(submit)
    expect(client.sendForm).toHaveBeenCalledTimes(1)
    expect(screen.getByRole("form", { name: "Contact form" })).toHaveAttribute("aria-busy", "true")
    expect(submit).toBeDisabled()
    expect(screen.getByRole("status")).toHaveTextContent("Sending…")
    resolveDelivery({ status: 200 })
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Message sent. Thanks—I’ll be in touch."))
  })

  it("preserves values after rejection and permits a successful retry", async () => {
    const user = userEvent.setup()
    const client = { sendForm: vi.fn().mockRejectedValueOnce(new Error("delivery failure")).mockResolvedValueOnce({ status: 200 }) }
    render(<ContactForm config={configured} client={client} />)
    await fillValidForm(user)
    await user.click(screen.getByRole("button", { name: "Send message" }))
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("The message could not be sent. Please email me directly instead."))
    expect(screen.getByLabelText("Name")).toHaveValue("Han")
    expect(screen.getByRole("button", { name: "Send message" })).toBeEnabled()
    await user.click(screen.getByRole("button", { name: "Send message" }))
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Message sent. Thanks—I’ll be in touch."))
    expect(client.sendForm).toHaveBeenCalledTimes(2)
  })
})
