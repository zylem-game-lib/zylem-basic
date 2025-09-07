import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		target: 'esnext',
		rollupOptions: {
			treeshake: true
		}
	},
}); 