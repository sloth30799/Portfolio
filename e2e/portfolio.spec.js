import { expect, test } from "@playwright/test"

const routes = [
  ["/", "Han Ye Htun"],
  ["/about", "Software engineer with an eye for systems and interaction."],
  ["/contact", "Let’s make the difficult part legible."],
  ["/work/chromatic-affinities", "Chromatic Affinities"],
  ["/this-route-does-not-exist", "That route fell off the grid."],
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

async function assertNavigationExclusivity(page) {
  const mobile = await page.evaluate(() => innerWidth < 1024)
  const trigger = page.getByRole("button", { name: "Open menu" })
  const desktop = page.locator(".desktop-nav")
  const dialog = page.getByRole("dialog", { name: "Site navigation" })
  if (mobile) {
    await expect(trigger).toBeVisible()
    await expect(desktop).toBeHidden()
    await expect(dialog).toHaveCount(0)
  } else {
    await expect(page.getByRole("link", { name: "About" })).toBeVisible()
    await expect(trigger).toBeHidden()
    await expect(dialog).toHaveCount(0)
  }
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

async function assertNoHorizontalOverflow(page) {
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
}

async function assertFocusIsVisibleAndUnobscured(page, locator) {
  await locator.focus()
  await expect(locator).toBeFocused()
  const result = await locator.evaluate((element) => {
    const rect = element.getBoundingClientRect()
    const style = getComputedStyle(element)
    const points = [
      [rect.left + 2, rect.top + 2], [rect.right - 2, rect.top + 2],
      [rect.left + 2, rect.bottom - 2], [rect.right - 2, rect.bottom - 2],
      [rect.left + rect.width / 2, rect.top + rect.height / 2],
    ]
    return {
      outlineWidth: Number.parseFloat(style.outlineWidth),
      outlineStyle: style.outlineStyle,
      outlineColor: style.outlineColor,
      withinViewport: rect.top >= 0 && rect.left >= 0 && rect.right <= innerWidth && rect.bottom <= innerHeight,
      unobscured: points.every(([x, y]) => {
        const top = document.elementFromPoint(x, y)
        return top === element || element.contains(top) || top?.contains(element)
      }),
    }
  })
  expect(result.outlineWidth).toBeGreaterThanOrEqual(2)
  expect(result.outlineStyle).not.toBe("none")
  expect(result.outlineColor).not.toBe("transparent")
  expect(result.withinViewport).toBe(true)
  expect(result.unobscured).toBe(true)
}

test.describe("portfolio routes, proof, and interaction", () => {
  for (const [route, heading] of routes) {
    test(`${route} renders one route heading and no horizontal overflow`, async ({ page }, testInfo) => {
      await page.goto(route)
      await assertConfiguredViewport(page, testInfo)
      await assertNavigationExclusivity(page)
      await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible()
      await expect(page.locator("h1")).toHaveCount(1)
      await assertNoHorizontalOverflow(page)
    })
  }

  test("home presents frozen proof in order, readable capabilities, and honest archive", async ({ page }, testInfo) => {
    await page.goto("/")
    await assertConfiguredViewport(page, testInfo)
    await assertNavigationExclusivity(page)
    await expect(page.getByText("Software Engineer", { exact: true })).toBeVisible()
    await expect(page.getByText("Serving full-fat, extra-sugar, deep-fried ideas—with clean code, thoughtful UX, and zero artificial flavoring.")).toBeVisible()
    await expect(page.getByRole("heading", { name: "Selected proof" })).toBeVisible()
    const featured = page.locator("[data-testid='featured-project']")
    await expect(featured).toHaveCount(2)
    await expect(featured.nth(0)).toContainText("Chromatic Affinities")
    await expect(featured.nth(1)).toContainText("Mission Control")
    await expect(page.getByRole("heading", { name: "What I bring" })).toBeVisible()
    for (const capability of ["Product & interface engineering", "Visual & motion systems", "Backend & automation", "Verification & accessibility"]) {
      await expect(page.getByRole("heading", { name: capability })).toBeVisible()
    }
    for (const work of ["Wanderer", "Wanderer Store", "Akino Restaurant", "TackleTalk"]) {
      await expect(page.getByText(work, { exact: true })).toBeVisible()
    }
  })

  test("supports skip, ordinary route, résumé query, direct hash, and 404 recovery focus", async ({ page }, testInfo) => {
    await page.goto("/")
    await assertConfiguredViewport(page, testInfo)
    await assertNavigationExclusivity(page)
    await page.keyboard.press("Tab")
    const skip = page.getByRole("link", { name: "Skip to main content" })
    await expect(skip).toBeFocused()
    await skip.press("Enter")
    await expect(page.getByRole("main")).toBeFocused()

    if (await page.evaluate(() => innerWidth < 1024)) {
      await page.getByRole("button", { name: "Open menu" }).click()
      await page.getByRole("dialog", { name: "Site navigation" }).getByRole("link", { name: "About" }).click()
    } else {
      await page.getByRole("link", { name: "About" }).click()
    }
    await expect(page.getByRole("main")).toBeFocused()
    await page.getByRole("link", { name: "Request résumé" }).click()
    await expect(page).toHaveURL(/\/contact\?intent=resume$/)
    await expect(page.getByRole("main")).toBeFocused()

    await page.goto("/#projects")
    const projects = page.getByTestId("projects-focus-target")
    await expect(projects).toBeFocused()
    await expect(projects).toBeInViewport()
    await page.goto("/unknown-route")
    await page.getByRole("link", { name: "Back home" }).click()
    await expect(page.getByRole("main")).toBeFocused()
  })

  test("provides mutually exclusive configured navigation and cleans mobile modal state", async ({ page }, testInfo) => {
    await page.goto("/")
    await assertConfiguredViewport(page, testInfo)
    await assertNavigationExclusivity(page)
    if (await page.evaluate(() => innerWidth >= 1024)) return
    const trigger = page.getByRole("button", { name: "Open menu" })
    await trigger.click()
    const dialog = page.getByRole("dialog", { name: "Site navigation" })
    const close = page.getByRole("button", { name: "Close menu" })
    await expect(dialog).toHaveAttribute("aria-modal", "true")
    await expect(close).toBeFocused()
    const main = page.locator("#main-content")
    await expect(main).toHaveAttribute("inert", "")
    await expect(page.locator("body")).toHaveCSS("overflow", "hidden")
    await close.press("Shift+Tab")
    await expect(page.getByRole("link", { name: "Contact" })).toBeFocused()
    await page.keyboard.press("Escape")
    await expect(dialog).toBeHidden()
    await expect(trigger).toBeFocused()
    await expect(main).not.toHaveAttribute("inert", "")
    await trigger.click()
    await expect(dialog).toBeVisible()
    await page.getByRole("dialog", { name: "Site navigation" }).getByRole("link", { name: "About" }).click()
    await expect(page.getByRole("main")).toBeFocused()
    await expect(page.getByRole("dialog", { name: "Site navigation" })).toHaveCount(0)
    await expect(main).not.toHaveAttribute("inert", "")
    await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden")
  })

  test("uses qualified links, decorative semantics, and a deterministic normal-motion material cycle", async ({ page }, testInfo) => {
    await page.clock.install({ time: new Date("2026-01-01T00:00:00Z") })
    await page.addInitScript(() => {
      const active = new Set()
      const setInterval = window.setInterval.bind(window)
      const clearInterval = window.clearInterval.bind(window)
      window.__portfolioActiveIntervals = active
      window.setInterval = (...args) => {
        const id = setInterval(...args)
        active.add(id)
        return id
      }
      window.clearInterval = (id) => {
        active.delete(id)
        return clearInterval(id)
      }
    })
    await page.goto("/")
    await assertConfiguredViewport(page, testInfo)
    await assertNavigationExclusivity(page)
    const externalLinks = page.locator("a[target='_blank']")
    expect(await externalLinks.count()).toBeGreaterThan(0)
    for (let index = 0; index < await externalLinks.count(); index += 1) {
      const link = externalLinks.nth(index)
      await expect(link).toHaveAttribute("rel", /noopener/)
      await expect(link).toHaveAttribute("rel", /noreferrer/)
      await expect(link).toHaveAccessibleName(/opens in a new tab/i)
      await expect(link.locator("button, a, input, select, textarea")).toHaveCount(0)
    }
    await expect(page.getByRole("link", { name: "View projects" }).first()).not.toHaveAttribute("target", "_blank")
    const decorations = page.locator("[data-decorative-graphic]")
    for (let index = 0; index < await decorations.count(); index += 1) {
      await expect(decorations.nth(index)).toHaveAttribute("aria-hidden", "true")
      await expect(decorations.nth(index)).toHaveAttribute("focusable", "false")
    }
    await page.goto("/work/chromatic-affinities")
    const study = page.getByTestId("chromatic-study")
    const signatures = [await materialSignature(study)]
    await expect(study).toHaveAttribute("data-graphic-state", "0-ready")
    for (const state of ["1-ready", "2-ready", "3-ready"]) {
      await page.clock.fastForward(3000)
      await expect(study).toHaveAttribute("data-graphic-state", state)
      signatures.push(await materialSignature(study))
    }
    expect(new Set(signatures).size).toBe(4)
    await page.clock.fastForward(3000)
    await expect(study).toHaveAttribute("data-graphic-state", "0-ready")
    const beforeManual = await materialSignature(study)
    await page.getByRole("button", { name: "Next material study" }).click()
    await expect(study).toHaveAttribute("data-graphic-state", "1-ready")
    expect(await materialSignature(study)).not.toBe(beforeManual)
    await page.getByRole("link", { name: "View projects" }).click()
    await expect(page).toHaveURL(/\/#projects$/)
    await expect.poll(() => page.evaluate(() => window.__portfolioActiveIntervals.size)).toBe(0)
  })

  test("contact validation and the exact missing configuration path make no EmailJS request", async ({ page }, testInfo) => {
    const emailJsRequests = []
    page.on("request", (request) => {
      if (/emailjs/i.test(`${request.url()} ${request.resourceType()}`)) emailJsRequests.push(request.url())
    })
    await page.goto("/contact")
    await assertConfiguredViewport(page, testInfo)
    await assertNavigationExclusivity(page)
    await page.getByRole("button", { name: "Send message" }).click()
    await expect(page.getByText("This field is required.").first()).toBeVisible()
    await page.getByLabel("Name").fill("Han")
    await page.getByLabel("Email").fill("han@example.com")
    await page.getByLabel("Message").fill("A considered product question.")
    await page.getByRole("button", { name: "Send message" }).click()
    await expect(page.getByRole("status")).toHaveText("The form is not configured right now. Email me directly and I’ll get back to you.")
    await expect.poll(() => emailJsRequests).toEqual([])
  })

  test("retains source order, reflow, text-resize reachability, and navigation exclusivity at the configured viewport", async ({ page }, testInfo) => {
    await page.goto("/")
    await assertConfiguredViewport(page, testInfo)
    await page.addStyleTag({ content: "html { font-size: 200% !important; }" })
    await assertNavigationExclusivity(page)
    await assertNoHorizontalOverflow(page)
    const reflow = await page.evaluate(() => {
      const sourceOrder = ["source-identity", "source-signature", "source-actions", "source-proof", "source-supporting"]
        .map((id) => document.querySelector(`[data-testid='${id}']`))
      const textClipping = Array.from(document.querySelectorAll("main *"))
        .filter((element) => element.children.length === 0 && element.textContent.trim().length > 0)
        .filter((element) => {
          const style = getComputedStyle(element)
          const fixedHeight = style.height !== "auto" || style.maxHeight !== "none"
          const clipsOverflow = ["hidden", "clip", "scroll", "auto"].includes(style.overflowY)
          return fixedHeight && clipsOverflow && element.scrollHeight > element.clientHeight + 1
        })
        .map((element) => element.tagName)
      const visualOrder = Array.from(document.querySelectorAll("main *"))
        .filter((element) => Number.parseInt(getComputedStyle(element).order, 10) !== 0)
        .map((element) => element.tagName)
      const actions = document.querySelector("[data-testid='source-actions']")
      const actionRows = actions
        ? new Set(Array.from(actions.querySelectorAll("a, button")).map((element) => Math.round(element.getBoundingClientRect().top))).size
        : 0
      return {
        sourceOrder: sourceOrder.every(Boolean) && sourceOrder.every((node, index) => index === 0 || Boolean(sourceOrder[index - 1].compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING)),
        textClipping,
        visualOrder,
        actionRows,
        horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
      }
    })
    expect(reflow.sourceOrder).toBe(true)
    expect(reflow.textClipping).toEqual([])
    if (await page.evaluate(() => innerWidth <= 700)) expect(reflow.visualOrder).toEqual([])
    expect(reflow.horizontalOverflow).toBe(false)
    if (await page.evaluate(() => innerWidth < 1024)) expect(reflow.actionRows).toBeGreaterThanOrEqual(2)
    const focusable = page.locator("main a:visible, main button:visible, main input:visible, main textarea:visible")
    expect(await focusable.count()).toBeGreaterThan(0)
    for (let index = 0; index < await focusable.count(); index += 1) {
      const control = focusable.nth(index)
      await control.scrollIntoViewIfNeeded()
      await assertFocusIsVisibleAndUnobscured(page, control)
    }
    if (await page.evaluate(() => innerWidth >= 1024)) return
    await page.getByRole("button", { name: "Open menu" }).click()
    const dialog = page.getByRole("dialog", { name: "Site navigation" })
    await expect(dialog).toBeVisible()
    await expect(dialog).toHaveCSS("overflow-y", /auto|scroll/)
    const dialogFocusables = dialog.locator("a:visible, button:visible")
    expect(await dialogFocusables.count()).toBeGreaterThan(0)
    for (let index = 0; index < await dialogFocusables.count(); index += 1) {
      const control = dialogFocusables.nth(index)
      await control.scrollIntoViewIfNeeded()
      await assertFocusIsVisibleAndUnobscured(page, control)
    }
  })
})
