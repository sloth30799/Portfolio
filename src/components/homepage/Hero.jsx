import { Link } from "react-router-dom"
import { actions, profile } from "../../data/portfolio"

export default function Hero() {
  return (
    <section className="hero page">
      <div data-testid="source-identity" className="hero-identity">
        <p className="eyebrow">Issue 02 / Portfolio</p>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.title}</p>
        <p className="hero-supporting">{profile.supportingTitle}</p>
      </div>
      <div data-testid="source-signature" className="hero-signature"><p>{profile.signature}</p><p>{profile.homeSupportingSentence}</p></div>
      <div data-testid="source-actions" className="action-row hero-actions">
        <Link className="action-primary" to={actions.projects.href}>{actions.projects.label}</Link>
        <Link to={actions.conversation.href}>{actions.conversation.label}</Link>
        <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub opens in a new tab">GitHub</a>
        <a href={profile.linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn opens in a new tab">LinkedIn</a>
        <Link to={actions.resume.href}>{actions.resume.label}</Link>
      </div>
      <div className="hero-register" data-decorative-graphic aria-hidden="true" focusable="false"><span>01</span><span>12</span><span>24</span></div>
    </section>
  )
}
