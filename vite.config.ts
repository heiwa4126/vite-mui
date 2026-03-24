import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";

// https://vitejs.dev/config/
export default ({ mode }) => {
	// Load app-level env vars to node-level env vars.
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		plugins: [react(), ViteMinifyPlugin({})],
		// base: process.env.VITE_BASE_URL || "/",
		base: process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "./", // for GitHUb Actions
		build: {
			rolldownOptions: {
				output: {
					minify: {
						compress: {
							dropConsole: true,
							dropDebugger: true,
						},
					},
					codeSplitting: {
						groups: [
							{
								name: "d",
								test: /node_modules[\\/](react-dom|react-router-dom)([\\/]|$)/,
								priority: 30,
							},
							{
								name: "r",
								test: /node_modules[\\/]react([\\/]|$)/,
								priority: 20,
							},
							{
								name: "e",
								test: /node_modules[\\/]@emotion[\\/]/,
								priority: 10,
							},
							{
								name: "m",
								test: /node_modules[\\/]@mui[\\/]material([\\/]|$)/,
								priority: 5,
							},
						],
					},
				},
			},
		},
	});
};
