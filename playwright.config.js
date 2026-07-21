import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig, devices } from "@playwright/test"

const repositoryRoot = path.dirname(fileURLToPath(import.meta.url))
const suppliedRoot = process.env.PORTFOLIO_E2E_OUTPUT || "./e2e-output"
const outputRoot = path.resolve(repositoryRoot, suppliedRoot)

export default defineConfig({
  testDir: "./e2e",
  outputDir: path.join(outputRoot, "test-results"),
  reporter: [
    ["line"],
    ["blob", { outputDir: path.join(outputRoot, "blob-report") }],
    ["html", { outputFolder: path.join(outputRoot, "html-report"), open: "never" }],
  ],
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    { name: "chromium-1440", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
    { name: "chromium-768", use: { ...devices["Desktop Chrome"], viewport: { width: 768, height: 1024 } } },
    { name: "chromium-390", use: { ...devices["Desktop Chrome"], viewport: { width: 390, height: 844 } } },
    { name: "chromium-320", use: { ...devices["Desktop Chrome"], viewport: { width: 320, height: 568 } } },
  ],
  webServer: {
    command: "pnpm preview --host 127.0.0.1 --port 4173",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: false,
  },
})
