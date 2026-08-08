import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// LET OP: pas 'base' aan naar de naam van jouw GitHub-repository.
// Voorbeeld: als je repo heet "harder-coaching-website", wordt dit '/harder-coaching-website/'.
// Als je een custom domain gebruikt (CNAME), zet dit dan op '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
