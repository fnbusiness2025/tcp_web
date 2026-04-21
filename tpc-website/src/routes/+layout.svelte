<script>
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="app">
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	
	main {
		flex: 1;
	}
</style>
