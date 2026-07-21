import { earlierWork, sectionCopy } from "../../data/portfolio"
import ProjectActions from "../ProjectActions"
import SectionHeader from "../SectionHeader"

export default function ProjectIndex() {
  return <section className="section project-index"><SectionHeader number="02" heading={sectionCopy.archiveHeading} intro={sectionCopy.archiveIntroduction} />
    <ol>{earlierWork.map((project, index) => <li key={project.title}>
      <span className="index-number">{String(index + 1).padStart(2, "0")}</span>
      <div><h3>{project.title}</h3><p>{project.summary}</p><small>{project.status}</small></div>
      <ProjectActions project={project} />
    </li>)}</ol>
  </section>
}
