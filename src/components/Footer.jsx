import { Link } from "react-router-dom"
import { actions, profile } from "../data/portfolio"

function ExternalLink({ href, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${children} opens in a new tab`}>{children}</a>
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <p><strong>{profile.name}</strong><br />© {new Date().getFullYear()} / Software Engineer</p>
      <div className="footer-links" aria-label="Portfolio links">
        <Link to={actions.projects.href}>Projects</Link>
        <Link to={actions.resume.href}>Request résumé</Link>
        <a href={profile.emailUrl}>Email</a>
        <ExternalLink href={profile.githubUrl}>GitHub</ExternalLink>
        <ExternalLink href={profile.linkedInUrl}>LinkedIn</ExternalLink>
      </div>
    </footer>
  )
}
