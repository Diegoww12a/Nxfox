import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Nxfox/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'dashboard.html'),
        sobre: resolve(__dirname, 'clientes.html'),
        contato: resolve(__dirname, 'licencas.html')
      }
    }
  }
})