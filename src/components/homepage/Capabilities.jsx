import { Link } from "react-router-dom"
import { actions, capabilities, sectionCopy } from "../../data/portfolio"
import SectionHeader from "../SectionHeader"

export default function Capabilities() {
  return <section className="section capabilities"><SectionHeader number="03" heading={sectionCopy.capabilitiesHeading} />
    <div className="capability-grid">{capabilities.map((capability, index) => <article key={capability.heading}><p className="section-number">{String(index + 1).padStart(2, "0")}</p><h3>{capability.heading}</h3><p>{capability.detail}</p></article>)}</div>
    <div className="home-contact"><h2>{sectionCopy.contactHeading}</h2><p>{sectionCopy.contactLine}</p><Link className="action-primary" to={actions.conversation.href}>{actions.conversation.label}</Link></div>
  </section>
}
