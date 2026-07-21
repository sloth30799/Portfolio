import { Link } from "react-router-dom"
import { about, actions } from "../data/portfolio"

export default function About() {
  return (
    <article className="page page-about">
      <p className="eyebrow">{about.eyebrow}</p>
      <h1>{about.heading}</h1>
      <div className="about-layout">
        <div className="about-copy">
          {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <aside className="principles" aria-label="Working principles">
          <p className="section-number">Working notes</p>
          <ol>
            {about.principles.map((principle, index) => <li key={principle}><span>{String(index + 1).padStart(2, "0")}</span>{principle}</li>)}
          </ol>
        </aside>
      </div>
      <div className="action-row">
        <Link to={actions.projects.href}>View projects</Link>
        <Link className="action-primary" to={actions.conversation.href}>Start a conversation</Link>
      </div>
    </article>
  )
}
