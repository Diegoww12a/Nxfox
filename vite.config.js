import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig(({ mode }) => ({
  base: mode === 'github'
    ? '/Nxfox/'
    : '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        clientes: resolve(__dirname, 'clientes.html'),
        licencas: resolve(__dirname, 'licencas.html'),
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
}))