export const profile = Object.freeze({
  name: "Han Ye Htun",
  title: "Software Engineer",
  supportingTitle: "Creative technologist working across interaction, visual systems, frontend engineering, automation, and local-first AI tooling.",
  signature: "Serving full-fat, extra-sugar, deep-fried ideas—with clean code, thoughtful UX, and zero artificial flavoring.",
  homeSupportingSentence: "I build expressive interfaces, practical product systems, and local-first tools—then verify the details across screens and states.",
  emailUrl: "mailto:sloth30799@gmail.com",
  githubUrl: "https://github.com/sloth30799",
  linkedInUrl: "https://linkedin.com/in/hanyehtun30799",
})

export const actions = Object.freeze({
  projects: { label: "View projects", href: "/#projects" },
  conversation: { label: "Start a conversation", href: "/contact" },
  github: { label: "GitHub", href: profile.githubUrl },
  linkedIn: { label: "LinkedIn", href: profile.linkedInUrl },
  resume: { label: "Request résumé", href: "/contact?intent=resume" },
})

export const navigation = Object.freeze([
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
])

export const sectionCopy = Object.freeze({
  featuredHeading: "Selected proof",
  featuredIntroduction: "Two projects, shown with the decisions behind them.",
  archiveHeading: "Earlier work",
  archiveIntroduction: "A compact index of previous application and interface experiments.",
  capabilitiesHeading: "What I bring",
  contactHeading: "Have a difficult interface or product system?",
  contactLine: "I’m interested in work where engineering quality and visual direction strengthen the same idea.",
})

export const chromaticAffinities = Object.freeze({
  title: "Chromatic Affinities",
  eyebrow: "Featured 01 / Interactive system",
  summary: "A self-initiated concept campaign for a fictional materials studio: four opposing color worlds meet in a living split-screen exhibition.",
  whatWhy: "Built to explore how color, finish, and texture can feel tangible through a screen without relying on downloaded imagery or video.",
  role: "Concept, art direction, and development.",
  stack: "Next.js, React, TypeScript, Motion, CSS, inline SVG, Playwright, Vitest.",
  decision: "Built the material studies as code-native CSS and SVG forms, then synchronized them to one twelve-second, six-beat motion score. Reduced-motion mode replaces automatic progression with an immediate composed state and manual navigation.",
  status: "Self-initiated local concept. Fictional studio; not client work or a public commercial launch.",
  caseStudyUrl: "/work/chromatic-affinities",
  codeUrl: "https://github.com/sloth30799/chromatic-affinities",
  liveUrl: null,
})

// This object is intentionally the complete public Mission Control whitelist.
export const missionControl = Object.freeze({
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
})

export const featuredProjects = Object.freeze([chromaticAffinities, missionControl])

export const earlierWork = Object.freeze([
  { title: "Wanderer", summary: "A full-stack travel-planning and community project.", status: "Earlier work.", codeUrl: "https://github.com/sloth30799/Wanderer", liveUrl: "https://wanderer.onrender.com/" },
  { title: "Wanderer Store", summary: "An e-commerce interface for adventure gear.", status: "Earlier work.", codeUrl: "https://github.com/sloth30799/Wanderer-Store", liveUrl: "https://wanderer-store.vercel.app/" },
  { title: "Akino Restaurant", summary: "A restaurant concept focused on ramen and Japanese visual cues.", status: "Earlier work.", codeUrl: "https://github.com/sloth30799/Akino", liveUrl: "https://akino-ramen.vercel.app/" },
  { title: "TackleTalk", summary: "A football community and discussion project.", status: "Earlier work.", codeUrl: "https://github.com/sloth30799/TackleTalk", liveUrl: "https://tackletalk.onrender.com/" },
])

export const capabilities = Object.freeze([
  { heading: "Product & interface engineering", detail: "React and Next.js interfaces, responsive systems, typed component architecture, API integration, and product behavior that survives edge cases." },
  { heading: "Visual & motion systems", detail: "Art direction, editorial layout, Motion choreography, CSS, inline SVG, and interaction that carries narrative purpose." },
  { heading: "Backend & automation", detail: "Node.js, Supabase, structured validation, event-driven workflows, and local-first tooling with explicit privacy boundaries." },
  { heading: "Verification & accessibility", detail: "Vitest, Playwright, keyboard and focus behavior, reduced motion, responsive state coverage, and rendered-state inspection." },
])

export const about = Object.freeze({
  eyebrow: "About / The person behind the systems",
  heading: "Software engineer with an eye for systems and interaction.",
  paragraphs: [
    "I’m Han Ye Htun, a software engineer with a background in medicine. I bring the same problem-solving discipline to interfaces, product systems, and the details that make software feel considered.",
    "My current work moves between frontend engineering, motion and visual systems, backend automation, and local-first AI tooling. I care about clean implementation, thoughtful UX, accessible behavior, and proof that survives beyond the screenshot.",
    "I’m looking for teams and collaborators who value both technical rigor and an authored point of view.",
  ],
  principles: ["Start with the idea.", "Make the decision visible.", "Verify the unglamorous states."],
})

export const contact = Object.freeze({
  heading: "Let’s make the difficult part legible.",
  intro: "Tell me what you’re building, where it feels stuck, and what a strong outcome would look like.",
  availability: "Email is the most direct route. You can also find my work on GitHub and connect on LinkedIn.",
  resumeIntent: "You’re asking about my résumé. I don’t publish a file from this site yet—send me a note and I’ll follow up directly.",
  fields: { name: "Name", email: "Email", message: "Message" },
  submit: "Send message",
  loading: "Sending…",
  requiredError: "This field is required.",
  invalidEmailError: "Enter a valid email address.",
  missingConfiguration: "The form is not configured right now. Email me directly and I’ll get back to you.",
  success: "Message sent. Thanks—I’ll be in touch.",
  deliveryError: "The message could not be sent. Please email me directly instead.",
})

export const notFound = Object.freeze({
  eyebrow: "Error / 404",
  heading: "That route fell off the grid.",
  body: "The page may have moved, but the work is still here.",
  homeAction: { label: "Back home", href: "/" },
  projectsAction: { label: "View projects", href: "/#projects" },
})

export const metadata = Object.freeze({
  home: { title: "Han Ye Htun — Software Engineer", description: "Portfolio of Han Ye Htun, a software engineer building expressive interfaces and practical product systems." },
  about: { title: "About — Han Ye Htun", description: "About Han Ye Htun’s engineering background, working principles, and current focus." },
  contact: { title: "Contact — Han Ye Htun", description: "Contact Han Ye Htun about software engineering, interface, and product work." },
  chromatic: { title: "Chromatic Affinities — Han Ye Htun", description: "A case study in code-native materials, motion choreography, responsive design, and reduced motion." },
  notFound: { title: "Page not found — Han Ye Htun", description: "The requested portfolio page was not found." },
})
