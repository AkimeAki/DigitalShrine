import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { localPort, site } from "./src/define";

// https://astro.build/config
export default defineConfig({
	server: {
		port: localPort,
		host: "0.0.0.0"
	},
	site,
	trailingSlash: "never",
	integrations: [sitemap(), react()],
	build: {
		format: "file"
	},
	prefetch: true,
	vite: {
		define: {
			global: "window"
		},
		// Cloudflareの「Error: Failed to publish your Function. Got error: Uncaught ReferenceError: MessageChannel is not defined」対策
		// 参考：https://github.com/withastro/astro/issues/12824
		resolve: {
			alias: import.meta.env.PROD && {
				"react-dom/server": "react-dom/server.edge"
			}
		}
	},
	output: "static"
});
