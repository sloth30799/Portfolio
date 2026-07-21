import emailjs from "@emailjs/browser"

export class ContactConfigurationError extends Error {
  constructor() {
    super("EmailJS configuration is incomplete.")
    this.name = "ContactConfigurationError"
    this.code = "EMAILJS_CONFIGURATION_ERROR"
  }
}

function requiredValue(value) {
  return typeof value === "string" && value.trim().length > 0
}

export function assertContactConfiguration(config) {
  if (!config || !requiredValue(config.serviceId) || !requiredValue(config.templateId) || !requiredValue(config.publicKey)) {
    throw new ContactConfigurationError()
  }

  return {
    serviceId: config.serviceId.trim(),
    templateId: config.templateId.trim(),
    publicKey: config.publicKey.trim(),
  }
}

export async function sendContactForm({ config, form, client = emailjs }) {
  const { serviceId, templateId, publicKey } = assertContactConfiguration(config)

  if (!client || typeof client.sendForm !== "function") {
    throw new TypeError("EmailJS client must provide sendForm.")
  }

  return client.sendForm(serviceId, templateId, form, publicKey)
}
