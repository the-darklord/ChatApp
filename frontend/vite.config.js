import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: Number(import.meta.env.VITE_PORT) || 3000,
		proxy: {
			"/api": {
				target:
					import.meta.env.VITE_BACKEND_URL || "http://localhost:5000",
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
