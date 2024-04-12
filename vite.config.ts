import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { comlink } from 'vite-plugin-comlink'
import { VitePWA } from 'vite-plugin-pwa'

import pcg from './package.json'


// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: 'dist',
		emptyOutDir: true,
	},

	plugins: [
		comlink(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				name: "TSplacement",
				short_name: "TSplacement",
				description: "TSplacement – a tool to make displacement maps",
				theme_color: "#101217",
				background_color: "#1a1b20",
				icons: [
					{ src: "/app-icons/icon-192.png", type: "image/png", sizes: "192x192" },
					{ src: "/app-icons/icon-512.png", type: "image/png", sizes: "512x512" },
					{ src: "/app-icons/icon-512.svg", type: "image/svg+xml", sizes: "512x512" },
					{ src: "/app-icons/icon-512.png", type: "image/png", sizes: "512x512", purpose: 'maskable' },
				],
				screenshots: [
					{ src: "/screenshots/desktop.jpg", type: "image/jpeg", sizes: "800x583", form_factor: "wide" },
					{ src: "/screenshots/mobile.jpg", type: "image/jpeg", sizes: "530x700", form_factor: "narrow" },
				],
			},
		}),
		react(),
		svgr(),
	],
	
	worker: {
		plugins: () => ([
			comlink(),
		])
	},

	define: { // > vite-env.d.ts
		__VERSION__: JSON.stringify(pcg.version),
		__REPO__: JSON.stringify(pcg.repository.url),
	},

	resolve: {
		alias: { // > tsconfig.json
			'@': path.resolve(__dirname, './src'),
		},
	},
})
