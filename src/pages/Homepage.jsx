import Capabilities from "../components/homepage/Capabilities"
import FeaturedWork from "../components/homepage/FeaturedWork"
import Hero from "../components/homepage/Hero"
import ProjectIndex from "../components/homepage/ProjectIndex"

export default function Homepage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <div data-testid="source-supporting">
        <ProjectIndex />
        <Capabilities />
      </div>
    </>
  )
}
