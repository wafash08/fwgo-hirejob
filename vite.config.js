// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				home: resolve(__dirname, 'home/index.html'),
				portofolio: resolve(__dirname, 'portofolio/index.html'),
				'edit-profile': resolve(__dirname, 'pekerja/edit-profile/index.html'),
			},
		},
	},
});
