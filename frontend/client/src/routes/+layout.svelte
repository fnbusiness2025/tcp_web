<script>
	import Footer from '$lib/components/Footer.svelte';
	import Chatbot from '$lib/Chatbot.svelte';
</script>

<div class="app">
	<main>
		<slot />
	</main>
	<Footer />
	<Chatbot />
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
