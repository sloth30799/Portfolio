import { configDefaults, defineConfig } from "vitest/config"
import { fileURLToPath, URL } from "node:url"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    globals: true,
    css: true,
    exclude: [...configDefaults.exclude, "e2e/**"],
  },
})
