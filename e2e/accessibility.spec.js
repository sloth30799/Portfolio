import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

const routes = [
  ["/", "Han Ye Htun — Software Engineer", "Portfolio of Han Ye Htun, a software engineer building expressive interfaces and practical product systems."],
  ["/about", "About — Han Ye Htun", "About Han Ye Htun’s engineering background, working principles, and current focus."],
  ["/contact", "Contact — Han Ye Htun", "Contact Han Ye Htun about software engineering, interface, and product work."],
  ["/work/chromatic-affinities", "Chromatic Affinities — Han Ye Htun", "A case study in code-native materials, motion choreography, responsive design, and reduced motion."],
  ["/not-found", "Page not found — Han Ye Htun", "The requested portfolio page was not found."],
]

const configuredViewports = {
  "chromium-1440": { width: 1440, height: 900 },
  "chromium-768": { width: 768, height: 1024 },
  "chromium-390": { width: 390, height: 844 },
  "chromium-320": { width: 320, height: 568 },
}

async function assertConfiguredViewport(page, testInfo) {
  expect(page.viewportSize()).toEqual(configuredViewports[testInfo.project.name])
}

async function materialSignature(study) {
  return study.evaluate((element) => {
    const selectors = [".material-left", ".material-right", ".material-seam"]
    return JSON.stringify({
      grid: getComputedStyle(element).gridTemplateColumns,
      pieces: selectors.map((selector) => {
        const node = element.querySelector(selector)
        const style = getComputedStyle(node)
        const rect = node.getBoundingClientRect()
        return [style.backgroundColor, style.transform, style.left, style.borderRadius, rect.x, rect.width]
      }),
    })
  })
}

async function assertFocusIndicator(page, locator) {
  await locator.scrollIntoViewIfNeeded()
  await locator.focus()
  const state = await locator.evaluate((element) => {
    const style = getComputedStyle(element)
    const rect = element.getBoundingClientRect()
    const points = [[rect.left + 2, rect.top + 2], [rect.right - 2, rect.top + 2], [rect.left + 2, rect.bottom - 2], [rect.right - 2, rect.bottom - 2], [rect.left + rect.width / 2, rect.top + rect.height / 2]]
    function parseColor(color) {
      const match = color.match(/rgba?\(([^)]+)\)/)
      if (!match) return null
      const [red, green, blue, alpha = "1"] = match[1].split(",").map((part) => part.trim())
      return { red: Number(red), green: Number(green), blue: Number(blue), alpha: Number(alpha) }
    }
    function luminance({ red, green, blue }) {
      return [red, green, blue].map((channel) => {
        const normalized = channel / 255
        return normalized <= 0.04045 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4
      }).reduce((total, channel, index) => total + channel * [0.2126, 0.7152, 0.0722][index], 0)
    }
    let background = element.parentElement
    while (background) {
      const color = parseColor(getComputedStyle(background).backgroundColor)
      if (color && color.alpha > 0) break
      background = background.parentElement
    }
    const outline = parseColor(style.outlineColor)
    const backgroundColor = background ? parseColor(getComputedStyle(background).backgroundColor) : null
    const contrast = outline && backgroundColor
      ? (Math.max(luminance(outline), luminance(backgroundColor)) + 0.05) / (Math.min(luminance(outline), luminance(backgroundColor)) + 0.05)
      : 0
    return {
      width: Number.parseFloat(style.outlineWidth),
      style: style.outlineStyle,
      color: style.outlineColor,
      visible: rect.top >= 0 && rect.left >= 0 && rect.right <= innerWidth && rect.bottom <= innerHeight,
      covered: points.some(([x, y]) => {
        const atPoint = document.elementFromPoint(x, y)
        return atPoint && atPoint !== element && !element.contains(atPoint) && !atPoint.contains(element)
      }),
      contrast,
    }
  })
  expect(state.width).toBeGreaterThanOrEqual(2)
  expect(state.style).not.toBe("none")
  expect(state.color).not.toBe("transparent")
  expect(state.contrast).toBeGreaterThanOrEqual(3)
  expect(state.visible).toBe(true)
  expect(state.covered).toBe(false)
}

for (const [route, title, description] of routes) {
  test(`${route} has semantic landmarks, approved metadata, and no selected WCAG violations`, async ({ page }, testInfo) => {
    await page.goto(route)
    await assertConfiguredViewport(page, testInfo)
    await expect(page).toHaveTitle(title)
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", description)
    await expect(page.locator("h1")).toHaveCount(1)
    await expect(page.locator("header")).toHaveCount(1)
    await expect(page.getByRole("navigation")).toHaveCount(1)
    await expect(page.getByRole("main")).toHaveCount(1)
    await expect(page.locator("footer")).toHaveCount(1)
    await expect(page.locator("footer")).toContainText(String(new Date().getFullYear()))
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze()
    expect(results.violations).toEqual([])
  })
}

test("skip navigation, every footer link, and representative controls have visible unobscured focus", async ({ page }, testInfo) => {
  await page.goto("/contact")
  await assertConfiguredViewport(page, testInfo)
  await page.keyboard.press("Tab")
  const skip = page.getByRole("link", { name: "Skip to main content" })
  await assertFocusIndicator(page, skip)
  await skip.press("Enter")
  await expect(page.getByRole("main")).toBeFocused()
  await assertFocusIndicator(page, page.locator("main a:visible, footer a:visible").first())
  const footerLinks = page.locator("footer a")
  expect(await footerLinks.count()).toBeGreaterThan(0)
  for (let index = 0; index < await footerLinks.count(); index += 1) {
    await assertFocusIndicator(page, footerLinks.nth(index))
  }
  if (await page.evaluate(() => innerWidth < 1024)) {
    await assertFocusIndicator(page, page.getByRole("button", { name: "Open menu" }))
  } else {
    await assertFocusIndicator(page, page.getByRole("link", { name: "About" }))
  }
  await assertFocusIndicator(page, page.getByLabel("Name"))
  await assertFocusIndicator(page, page.getByRole("button", { name: "Send message" }))
})

test("reduced motion stays stable beyond twelve seconds and keeps four distinct manual material states", async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.clock.install({ time: new Date("2026-01-01T00:00:00Z") })
  await page.goto("/work/chromatic-affinities")
  await assertConfiguredViewport(page, testInfo)
  const navigationMotionTarget = page.viewportSize().width < 1024
    ? page.getByRole("button", { name: "Open menu" })
    : page.getByRole("link", { name: "About" })
  await navigationMotionTarget.hover()
  await expect(navigationMotionTarget).toHaveCSS("transform", "none")
  const study = page.getByTestId("chromatic-study")
  await expect(study).toBeVisible()
  const probes = page.locator("[data-testid='chromatic-study'], [data-testid='chromatic-study'] [data-motion-probe]")
  expect(await probes.count()).toBeGreaterThan(1)
  const sample = () => probes.evaluateAll((elements) => elements.map((element) => {
    const style = getComputedStyle(element)
    const rect = element.getBoundingClientRect()
    return {
      animationDuration: style.animationDuration,
      transitionDuration: style.transitionDuration,
      opacity: style.opacity,
      transform: style.transform,
      visibility: style.visibility,
      rect: [rect.x, rect.y, rect.width, rect.height],
      graphicState: element.getAttribute("data-graphic-state"),
      motionState: element.getAttribute("data-motion-state"),
    }
  }))
  const before = await sample()
  await page.clock.fastForward(15000)
  const after = await sample()
  expect(before).toEqual(after)
  for (const probe of before) {
    expect(probe.opacity).not.toBe("0")
    expect(probe.visibility).toBe("visible")
    expect(probe.animationDuration).toMatch(/^0s(, 0s)*$/)
    expect(probe.transitionDuration).toMatch(/^0s(, 0s)*$/)
  }
  await expect.poll(() => page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe("auto")
  const next = page.getByRole("button", { name: "Next material study" })
  const signatures = []
  for (let index = 0; index < 4; index += 1) {
    signatures.push(await materialSignature(study))
    const state = await study.getAttribute("data-graphic-state")
    await next.click()
    await expect(study).not.toHaveAttribute("data-graphic-state", state ?? "")
  }
  expect(new Set(signatures).size).toBe(4)
})
