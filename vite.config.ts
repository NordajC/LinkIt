import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { Client } from 'appwrite';

export default defineConfig({
	plugins: [sveltekit()],
	// server: {
  //   port: 3000, // Force Vite to use port 3000 for dev server
  //   host: '0.0.0.0', // Make the server accessible on all network interfaces (important for Docker)
  // }
});
