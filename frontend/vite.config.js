import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
	plugins: [react()],
	server: {
		port: Number(process.env.VITE_PORT) || 3000,
		proxy: {
			"/api": {
				target:
					process.env.VITE_BACKEND_URL + "/api" ||
					"http://localhost:5000/api",
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});
