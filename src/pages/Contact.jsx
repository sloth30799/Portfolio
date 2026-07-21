import { Link, useSearchParams } from "react-router-dom"
import ContactForm from "../components/ContactForm"
import { actions, contact, profile } from "../data/portfolio"

function ExternalLink({ href, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${children} opens in a new tab`}>{children}</a>
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const resumeIntent = searchParams.get("intent") === "resume"
  return (
    <article className="page page-contact">
      <p className="eyebrow">Contact / Let’s talk</p>
      <h1>{contact.heading}</h1>
      <div className="contact-layout">
        <div className="contact-intro">
          <p>{contact.intro}</p>
          {resumeIntent && <p className="resume-notice">{contact.resumeIntent}</p>}
          <p>{contact.availability}</p>
          <div className="direct-links">
            <a href={profile.emailUrl}>Email Han Ye Htun</a>
            <ExternalLink href={profile.githubUrl}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedInUrl}>LinkedIn</ExternalLink>
            <Link to={actions.projects.href}>View projects</Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </article>
  )
}
