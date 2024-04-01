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
				login: resolve(__dirname, 'login/index.html'),
				'edit-profile-perusahaan': resolve(
					__dirname,
					'edit-profile-perusahaan/index.html'
				),
				'edit-profile-pekerja': resolve(
					__dirname,
					'edit-profile-pekerja/index.html'
				),
			},
		},
	},
});
