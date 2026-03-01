import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  base: mode === 'github'
    ? '/Nxfox/'
    : '/',
  server: {
    port: 5173,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'dashboard.html'),
        sobre: resolve(__dirname, 'clientes.html'),
        contato: resolve(__dirname, 'licencas.html')
      }
    }
  }
}))
