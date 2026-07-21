import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProjectActions from "../components/ProjectActions"
import { actions, chromaticAffinities } from "../data/portfolio"

function reducedMotionPreference() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
}

export default function ChromaticCaseStudy() {
  const [material, setMaterial] = useState(0)
  const [reduced, setReduced] = useState(reducedMotionPreference)
  const studies = ["grain / gloss", "mesh / bloom", "ink / sheen", "field / seam"]

  useEffect(() => {
    const query = window.matchMedia?.("(prefers-reduced-motion: reduce)")
    if (!query) return undefined
    const update = () => setReduced(query.matches)
    query.addEventListener?.("change", update)
    return () => query.removeEventListener?.("change", update)
  }, [])

  useEffect(() => {
    if (reduced) return undefined
    const timer = window.setInterval(() => {
      setMaterial((current) => (current + 1) % studies.length)
    }, 3000)
    return () => window.clearInterval(timer)
  }, [reduced, studies.length])

  const graphicState = `${material}-${reduced ? "static" : "ready"}`
  return (
    <article className="page chromatic-page">
      <p className="eyebrow">{chromaticAffinities.eyebrow}</p>
      <h1>{chromaticAffinities.title}</h1>
      <p className="lead">{chromaticAffinities.summary}</p>
      <section className="chromatic-study" data-testid="chromatic-study" data-graphic-state={graphicState} data-material-index={material}>
        <div className="material material-left" data-motion-probe data-motion-state={reduced ? "static" : "ready"} aria-hidden="true" focusable="false"><span /></div>
        <div className="material material-right" data-motion-probe data-motion-state={reduced ? "static" : "ready"} aria-hidden="true" focusable="false"><span /></div>
        <div className="material-seam" data-motion-probe data-motion-state={reduced ? "static" : "ready"} aria-hidden="true" focusable="false" />
        <div className="study-copy">
          <p className="section-number">Material study / {String(material + 1).padStart(2, "0")}</p>
          <p>{studies[material]}</p>
          <button type="button" onClick={() => setMaterial((current) => (current + 1) % studies.length)}>Next material study</button>
        </div>
      </section>
      <div className="case-grid">
        <section><h2>Premise</h2><p>{chromaticAffinities.whatWhy}</p></section>
        <section><h2>Role</h2><p>{chromaticAffinities.role}</p></section>
        <section><h2>Stack</h2><p>{chromaticAffinities.stack}</p></section>
        <section><h2>Choreography</h2><p>{chromaticAffinities.decision}</p></section>
        <section><h2>Status</h2><p>{chromaticAffinities.status}</p></section>
      </div>
      <div className="action-row"><ProjectActions project={chromaticAffinities} /><Link to={actions.projects.href}>View projects</Link></div>
    </article>
  )
}
