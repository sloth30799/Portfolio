import { Link } from "react-router-dom"

function Mark() {
  return <span data-decorative-graphic aria-hidden="true" focusable="false" className="action-mark">↗</span>
}

export default function ProjectActions({ project, includeCaseStudy = false }) {
  return (
    <div className="project-actions">
      {includeCaseStudy && project.caseStudyUrl && <Link to={project.caseStudyUrl}>Read case study <Mark /></Link>}
      {project.codeUrl && <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} code opens in a new tab`}>{project.title} code <Mark /></a>}
      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live site opens in a new tab`}>{project.title} live site <Mark /></a>}
    </div>
  )
}
