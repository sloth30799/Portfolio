import { describe, expect, it } from "vitest"
import {
  actions,
  about,
  capabilities,
  chromaticAffinities,
  contact,
  earlierWork,
  featuredProjects,
  metadata,
  missionControl,
  navigation,
  notFound,
  profile,
  sectionCopy,
} from "../data/portfolio"
import * as portfolio from "../data/portfolio"

const exactMissionControlWhitelist = {
  title: "Mission Control",
  eyebrow: "Featured 02 / Operations product",
  summary: "A single-user dashboard for understanding AI-agent work across status, sessions, attention, recent activity, usage, health, and history.",
  whatWhy: "Built to make long-running agent work legible without turning the interface into a noisy wall of telemetry.",
  role: "Product direction, interface design, and full-stack development.",
  stack: "Next.js, React, TypeScript, Supabase, Zod, Vitest, Playwright.",
  decision: "Separate sanitized hosted event views from a local-only, read-only development viewer so private local artifacts never become hosted content.",
  status: "Active private product. Shown here at product level only.",
  codeUrl: null,
  liveUrl: null,
}

function values(value) {
  if (typeof value === "string") return [value]
  if (Array.isArray(value)) return value.flatMap(values)
  if (value && typeof value === "object") return Object.values(value).flatMap(values)
  return []
}

describe("frozen portfolio content", () => {
  it("keeps the approved identity, signature, and truthful global paths", () => {
    expect(profile).toMatchObject({
      name: "Han Ye Htun",
      title: "Software Engineer",
      signature: "Serving full-fat, extra-sugar, deep-fried ideas—with clean code, thoughtful UX, and zero artificial flavoring.",
      githubUrl: "https://github.com/sloth30799",
      linkedInUrl: "https://linkedin.com/in/hanyehtun30799",
      emailUrl: "mailto:sloth30799@gmail.com",
    })
    expect(actions.projects.href).toBe("/#projects")
    expect(actions.conversation.href).toBe("/contact")
    expect(actions.resume.href).toBe("/contact?intent=resume")
    expect(navigation).toEqual([
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ])
    expect(metadata).toEqual({
      home: { title: "Han Ye Htun — Software Engineer", description: "Portfolio of Han Ye Htun, a software engineer building expressive interfaces and practical product systems." },
      about: { title: "About — Han Ye Htun", description: "About Han Ye Htun’s engineering background, working principles, and current focus." },
      contact: { title: "Contact — Han Ye Htun", description: "Contact Han Ye Htun about software engineering, interface, and product work." },
      chromatic: { title: "Chromatic Affinities — Han Ye Htun", description: "A case study in code-native materials, motion choreography, responsive design, and reduced motion." },
      notFound: { title: "Page not found — Han Ye Htun", description: "The requested portfolio page was not found." },
    })
  })

  it("keeps featured proof in the approved order with every required field", () => {
    expect(featuredProjects).toEqual([chromaticAffinities, missionControl])
    for (const project of featuredProjects) {
      expect(project).toEqual(expect.objectContaining({
        title: expect.any(String),
        eyebrow: expect.any(String),
        summary: expect.any(String),
        role: expect.any(String),
        stack: expect.any(String),
        decision: expect.any(String),
        status: expect.any(String),
      }))
      expect(Object.hasOwn(project, "codeUrl")).toBe(true)
      expect(Object.hasOwn(project, "liveUrl")).toBe(true)
    }
    expect(sectionCopy).toEqual({
      featuredHeading: "Selected proof",
      featuredIntroduction: "Two projects, shown with the decisions behind them.",
      archiveHeading: "Earlier work",
      archiveIntroduction: "A compact index of previous application and interface experiments.",
      capabilitiesHeading: "What I bring",
      contactHeading: "Have a difficult interface or product system?",
      contactLine: "I’m interested in work where engineering quality and visual direction strengthen the same idea.",
    })
  })

  it("keeps Chromatic's public case-study and code policy without inventing a live link", () => {
    expect(chromaticAffinities).toMatchObject({
      title: "Chromatic Affinities",
      caseStudyUrl: "/work/chromatic-affinities",
      codeUrl: "https://github.com/sloth30799/chromatic-affinities",
      liveUrl: null,
      summary: "A self-initiated concept campaign for a fictional materials studio: four opposing color worlds meet in a living split-screen exhibition.",
      whatWhy: "Built to explore how color, finish, and texture can feel tangible through a screen without relying on downloaded imagery or video.",
      role: "Concept, art direction, and development.",
      stack: "Next.js, React, TypeScript, Motion, CSS, inline SVG, Playwright, Vitest.",
      status: "Self-initiated local concept. Fictional studio; not client work or a public commercial launch.",
    })
  })

  it("keeps Mission Control as the exact approved public whitelist", () => {
    expect(missionControl).toEqual(exactMissionControlWhitelist)
    expect(Object.keys(missionControl)).toEqual(Object.keys(exactMissionControlWhitelist))
  })

  it("excludes Grand Line and prohibited Mission Control detail from shipped data", () => {
    const shipped = values(portfolio).join("\n").toLowerCase()
    expect(shipped).not.toContain("grand line")
    for (const prohibited of ["/users/", "control-center", "service_role", "access token", "api token", "provider bypass", "internal agent name"]) {
      expect(values(missionControl).join("\n").toLowerCase()).not.toContain(prohibited)
    }
  })

  it("keeps every earlier-work destination approved and labels it honestly", () => {
    expect(earlierWork).toHaveLength(4)
    expect(earlierWork.map(({ title }) => title)).toEqual(["Wanderer", "Wanderer Store", "Akino Restaurant", "TackleTalk"])
    for (const project of earlierWork) {
      expect(project.status).toBe("Earlier work.")
      expect(project.codeUrl).toMatch(/^https:\/\/github\.com\/sloth30799\//)
      expect(project.liveUrl).toMatch(/^https:\/\//)
    }
    expect(earlierWork.map(({ codeUrl, liveUrl }) => ({ codeUrl, liveUrl }))).toEqual([
      { codeUrl: "https://github.com/sloth30799/Wanderer", liveUrl: "https://wanderer.onrender.com/" },
      { codeUrl: "https://github.com/sloth30799/Wanderer-Store", liveUrl: "https://wanderer-store.vercel.app/" },
      { codeUrl: "https://github.com/sloth30799/Akino", liveUrl: "https://akino-ramen.vercel.app/" },
      { codeUrl: "https://github.com/sloth30799/TackleTalk", liveUrl: "https://tackletalk.onrender.com/" },
    ])
    expect(about).toMatchObject({
      eyebrow: "About / The person behind the systems",
      heading: "Software engineer with an eye for systems and interaction.",
      principles: ["Start with the idea.", "Make the decision visible.", "Verify the unglamorous states."],
    })
    expect(contact).toMatchObject({
      heading: "Let’s make the difficult part legible.",
      missingConfiguration: "The form is not configured right now. Email me directly and I’ll get back to you.",
    })
    expect(notFound).toEqual({
      eyebrow: "Error / 404",
      heading: "That route fell off the grid.",
      body: "The page may have moved, but the work is still here.",
      homeAction: { label: "Back home", href: "/" },
      projectsAction: { label: "View projects", href: "/#projects" },
    })
  })
})
