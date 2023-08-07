import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteRequire } from 'vite-require'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), viteRequire(/* options */)]
})
