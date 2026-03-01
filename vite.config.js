import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  base: mode === 'github'
    ? '/Nxfox/'
    : '/',
  server: {
    port: 5173,
    open: true
  }
}))
