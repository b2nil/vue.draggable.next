import { defineConfig } from 'vite'
import vuePlugin from "@vitejs/plugin-vue"

export default defineConfig({
  root: "example",
  base: "",
  plugins: [
    vuePlugin()
  ]
})