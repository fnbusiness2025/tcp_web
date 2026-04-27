<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let isAuthenticated = false;

	async function verifySession() {
		try {
			const response = await fetch('http://localhost:3000/api/auth/check', {
				credentials: 'include' // Important for cookies
			});

			if (response.ok) {
				const data = await response.json();
				if (data.success && data.data.authenticated) {
					isAuthenticated = true;
					return true;
				}
			}
		} catch (err) {
			console.error('Session verification failed:', err);
		}

		// If verification fails, clear storage and redirect
		localStorage.removeItem('adminData');
		goto('/');
		return false;
	}

	onMount(async () => {
		// Check authentication on every route except login
		if ($page.url.pathname !== '/') {
			await verifySession();
		}
	});
</script>

<svelte:head>
	<title>Admin Panel - TCP Malawi</title>
	<meta name="description" content="Admin panel for TCP Malawi property management system" />
	<link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<div class="app">
	<slot />
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: #f8fafc;
	}

	:global(*) {
		box-sizing: border-box;
	}

	.app {
		min-height: 100vh;
	}

	:global(button) {
		font-family: inherit;
	}

	:global(input) {
		font-family: inherit;
	}
</style>
