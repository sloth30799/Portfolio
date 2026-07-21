import { featuredProjects, sectionCopy } from "../../data/portfolio"
import ProjectActions from "../ProjectActions"
import SectionHeader from "../SectionHeader"

function Proof({ label, children }) {
  return <div className="proof-line"><dt>{label}</dt><dd>{children}</dd></div>
}

function ProjectVisual({ project, index }) {
  const isChromatic = project.title === "Chromatic Affinities"
  const projectNumber = String(index + 1).padStart(2, "0")

  return (
    <div className={`project-cover project-cover--${isChromatic ? "chromatic" : "mission"}`} data-decorative-graphic aria-hidden="true" focusable="false">
      <div className="cover-register"><span>Case / {projectNumber}</span><span>{isChromatic ? "Material × motion" : "Signal × system"}</span></div>
      {isChromatic ? (
        <div className="chromatic-poster">
          <span className="material-tile material-tile--orbit" />
          <span className="material-tile material-tile--strata" />
          <span className="material-tile material-tile--fold" />
          <span className="material-tile material-tile--pulse" />
        </div>
      ) : (
        <div className="mission-board">
          <div className="mission-board__header"><span /><span /><span /></div>
          <div className="mission-board__rail"><i /><i /><i /><i /></div>
          <div className="mission-board__signal"><b /><b /><b /><b /><b /></div>
          <div className="mission-board__queue"><span /><span /><span /></div>
          <div className="mission-board__readout">01:24:08</div>
        </div>
      )}
      <div className="cover-footer"><span>{isChromatic ? "04 worlds / 06 beats" : "Status / usage / history"}</span><span>HYH—26</span></div>
    </div>
  )
}

export default function FeaturedWork() {
  return (
    <section id="projects" tabIndex="-1" data-testid="projects-focus-target" className="section featured-section" data-testid-section="projects">
      <div data-testid="source-proof">
        <SectionHeader number="01" heading={sectionCopy.featuredHeading} intro={sectionCopy.featuredIntroduction} />
        <div className="featured-list">
          {featuredProjects.map((project, index) => {
            const includeCaseStudy = project.title === "Chromatic Affinities"
            const hasActions = includeCaseStudy || project.codeUrl || project.liveUrl

            return <article className="featured-project" data-testid="featured-project" data-project={includeCaseStudy ? "chromatic" : "mission"} key={project.title}>
              <div className="project-lead">
                <ProjectVisual project={project} index={index} />
                <div className="project-intro">
                  <p className="eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  {hasActions && <ProjectActions project={project} includeCaseStudy={includeCaseStudy} />}
                </div>
              </div>
              <div className="project-evidence">
                <dl className="project-facts">
                  <Proof label="What / why">{project.whatWhy}</Proof>
                  <Proof label="Role">{project.role}</Proof>
                  <Proof label="Stack">{project.stack}</Proof>
                </dl>
                <div className="project-decision">
                  <p className="eyebrow">Build decision</p>
                  <p>{project.decision}</p>
                  <p className="project-status"><span>Status /</span> {project.status}</p>
                </div>
              </div>
            </article>
          })}
        </div>
      </div>
    </section>
  )
}
