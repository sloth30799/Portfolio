import { useRef, useState } from "react"
import { contact } from "../data/portfolio"
import { ContactConfigurationError, sendContactForm } from "../lib/contact"

const defaultConfig = {
  serviceId: import.meta.env.VITE_EMAIL_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = contact.requiredError
  if (!values.email.trim()) errors.email = contact.requiredError
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = contact.invalidEmailError
  if (!values.message.trim()) errors.message = contact.requiredError
  return errors
}

export default function ContactForm({ config = defaultConfig, client }) {
  const formRef = useRef(null)
  const pending = useRef(false)
  const [values, setValues] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("")
  const [isPending, setIsPending] = useState(false)

  function updateValue(field, value) {
    setValues((current) => ({ ...current, [field]: value }))
  }

  async function submit(event) {
    event.preventDefault()
    if (pending.current) return
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus("")
      const first = ["name", "email", "message"].find((field) => nextErrors[field])
      document.getElementById(`contact-${first}`)?.focus()
      return
    }
    pending.current = true
    setIsPending(true)
    setStatus(contact.loading)
    try {
      await sendContactForm({ config, form: formRef.current, ...(client ? { client } : {}) })
      setStatus(contact.success)
    } catch (error) {
      setStatus(error instanceof ContactConfigurationError ? contact.missingConfiguration : contact.deliveryError)
    } finally {
      pending.current = false
      setIsPending(false)
    }
  }

  const fields = [
    ["name", "user_name", contact.fields.name, "text"],
    ["email", "user_email", contact.fields.email, "email"],
    ["message", "message", contact.fields.message, "textarea"],
  ]

  return (
    <form ref={formRef} className="contact-form" aria-label="Contact form" aria-busy={isPending} onSubmit={submit} noValidate>
      {fields.map(([field, name, label, type]) => {
        const error = errors[field]
        const id = `contact-${field}`
        const inputProps = { id, name, value: values[field], onChange: (event) => updateValue(field, event.target.value), "aria-invalid": Boolean(error), "aria-describedby": error ? `${id}-error` : undefined }
        return <div className="field" key={field}>
          <label htmlFor={id}>{label}</label>
          {type === "textarea" ? <textarea rows="6" {...inputProps} /> : <input type={type} {...inputProps} />}
          {error && <p className="field-error" id={`${id}-error`}>{error}</p>}
        </div>
      })}
      <div className="form-actions">
        <button type="submit" disabled={isPending}>{isPending ? contact.loading : contact.submit}</button>
        <p className="form-status" role="status" aria-live="polite">{status}</p>
      </div>
    </form>
  )
}
