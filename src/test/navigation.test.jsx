import { render, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import App from "../App"

function renderAt(path) {
  window.history.replaceState({}, "", path)
  return render(<App />)
}

function resizeTo(width) {
  Object.defineProperty(window, "innerWidth", { configurable: true, value: width })
  window.dispatchEvent(new Event("resize"))
}

function mainContent() {
  const main = document.querySelector("#main-content")
  if (!main) throw new Error("Expected the persistent #main-content landmark.")
  return main
}

beforeEach(() => {
  window.scrollTo = vi.fn()
  resizeTo(1440)
})

afterEach(() => {
  window.history.replaceState({}, "", "/")
})

describe("shared navigation and focus contract", () => {
  it("makes the skip link the first tab stop and focuses main when activated", async () => {
    const user = userEvent.setup()
    renderAt("/")
    await user.tab()
    const skip = screen.getByRole("link", { name: "Skip to main content" })
    expect(skip).toHaveFocus()
    expect(skip).toHaveAttribute("href", "#main-content")
    await user.keyboard("{Enter}")
    expect(screen.getByRole("main")).toHaveFocus()
  })

  it("does not steal focus on an ordinary initial page load and marks the current route", () => {
    renderAt("/about")
    expect(document.body).toHaveFocus()
    const primary = screen.getByRole("navigation", { name: "Primary navigation" })
    expect(within(primary).getByRole("link", { name: "Home" })).toHaveAttribute("href", "/")
    expect(within(primary).getByRole("link", { name: "About" })).toHaveAttribute("href", "/about")
    expect(within(primary).getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact")
    expect(within(primary).getByRole("link", { name: "About" })).toHaveAttribute("aria-current", "page")
  })

  it("focuses main after ordinary and résumé-query route changes", async () => {
    const user = userEvent.setup()
    renderAt("/")
    await user.click(screen.getByRole("link", { name: "About" }))
    await waitFor(() => expect(screen.getByRole("main")).toHaveFocus())
    await user.click(screen.getByRole("link", { name: "Request résumé" }))
    await waitFor(() => expect(screen.getByRole("main")).toHaveFocus())
    expect(window.location.pathname + window.location.search).toBe("/contact?intent=resume")
  })

  it("gives direct, same-route, cross-route, and history hash navigation precedence over main focus", async () => {
    const user = userEvent.setup()
    renderAt("/#projects")
    let projects = await screen.findByTestId("projects-focus-target")
    await waitFor(() => expect(projects).toHaveFocus())
    expect(projects).toHaveAttribute("id", "projects")
    expect(projects).toHaveAttribute("tabindex", "-1")
    await user.click(screen.getByRole("link", { name: "Contact" }))
    await waitFor(() => expect(screen.getByRole("main")).toHaveFocus())
    await user.click(screen.getByRole("link", { name: "View projects" }))
    projects = await screen.findByTestId("projects-focus-target")
    await waitFor(() => expect(projects).toHaveFocus())
    window.history.back()
    await waitFor(() => expect(window.location.pathname).toBe("/contact"))
    await waitFor(() => expect(screen.getByRole("main")).toHaveFocus())
  })

  it("uses destination focus rather than trigger restoration when recovering from 404", async () => {
    const user = userEvent.setup()
    renderAt("/missing-page")
    await user.click(screen.getByRole("link", { name: "Back home" }))
    await waitFor(() => expect(screen.getByRole("main")).toHaveFocus())
  })

  it("implements a labelled modal navigation dialog with containment, inert background, and manual close restoration", async () => {
    const user = userEvent.setup()
    resizeTo(390)
    renderAt("/")
    const trigger = screen.getByRole("button", { name: "Open menu" })
    await user.click(trigger)
    const dialog = screen.getByRole("dialog", { name: "Site navigation" })
    const close = screen.getByRole("button", { name: "Close menu" })
    expect(dialog).toHaveAttribute("aria-modal", "true")
    expect(within(dialog).getByRole("link", { name: "Home" })).toHaveAttribute("href", "/")
    expect(within(dialog).getByRole("link", { name: "About" })).toHaveAttribute("href", "/about")
    expect(within(dialog).getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact")
    expect(close).toHaveFocus()
    expect(mainContent()).toHaveAttribute("inert")
    expect(document.body.style.overflow).toBe("hidden")
    await user.tab({ shift: true })
    expect(within(dialog).getByRole("link", { name: "Contact" })).toHaveFocus()
    await user.tab()
    expect(close).toHaveFocus()
    await user.keyboard("{Escape}")
    expect(dialog).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
    expect(mainContent()).not.toHaveAttribute("inert")
    expect(document.body.style.overflow).not.toBe("hidden")
  })

  it("does not restore the menu trigger after link activation and cleans mobile state on resize and unmount", async () => {
    const user = userEvent.setup()
    resizeTo(390)
    const view = renderAt("/")
    const trigger = screen.getByRole("button", { name: "Open menu" })
    await user.click(trigger)
    const dialog = screen.getByRole("dialog", { name: "Site navigation" })
    await user.click(within(dialog).getByRole("link", { name: "About" }))
    await waitFor(() => expect(screen.getByRole("main")).toHaveFocus())
    expect(trigger).not.toHaveFocus()
    await user.click(trigger)
    resizeTo(1440)
    await waitFor(() => expect(screen.queryByRole("dialog", { name: "Site navigation" })).not.toBeInTheDocument())
    expect(document.body.style.overflow).not.toBe("hidden")
    expect(mainContent()).not.toHaveAttribute("inert")
    resizeTo(390)
    await user.click(trigger)
    view.unmount()
    expect(document.body.style.overflow).not.toBe("hidden")
    expect(document.querySelector("#main-content")).toBeNull()
  })
})
