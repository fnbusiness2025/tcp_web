<script>
	import { onMount } from 'svelte';
	
	export let animationType = 'fade-up';
	export let delay = 0;
	export let duration = 800;
	export let threshold = 0.1;
	export let once = true;
	
	let element;
	
	onMount(() => {
		if (!element) return;
		
		// Set initial state
		element.classList.add('scroll-hidden');
		
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							element.classList.remove('scroll-hidden');
							element.classList.add('scroll-visible');
						}, delay);
						
						if (once) {
							observer.unobserve(element);
						}
					} else if (!once) {
						element.classList.add('scroll-hidden');
						element.classList.remove('scroll-visible');
					}
				});
			},
			{
				threshold: threshold,
				rootMargin: '0px 0px -50px 0px'
			}
		);
		
		observer.observe(element);
		
		// Fallback: make element visible after a delay if observer doesn't work
		const fallbackTimer = setTimeout(() => {
			element.classList.remove('scroll-hidden');
			element.classList.add('scroll-visible');
		}, 2000);
		
		return () => {
			observer.unobserve(element);
			clearTimeout(fallbackTimer);
		};
	});
	
	function getAnimationClass() {
		return `scroll-${animationType}`;
	}
</script>

<div bind:this={element} class="scroll-animation {getAnimationClass()}">
	<slot />
</div>

<style>
	.scroll-animation {
		opacity: 0;
		transition: opacity 800ms ease, transform 800ms ease;
	}
	
	.scroll-animation.scroll-hidden {
		opacity: 0;
	}
	
	.scroll-animation.scroll-visible {
		opacity: 1;
	}
	
	/* Animation types */
	.scroll-fade-up.scroll-hidden {
		transform: translateY(60px);
	}
	
	.scroll-fade-up.scroll-visible {
		transform: translateY(0);
	}
	
	.scroll-fade-down.scroll-hidden {
		transform: translateY(-60px);
	}
	
	.scroll-fade-down.scroll-visible {
		transform: translateY(0);
	}
	
	.scroll-fade-left.scroll-hidden {
		transform: translateX(60px);
	}
	
	.scroll-fade-left.scroll-visible {
		transform: translateX(0);
	}
	
	.scroll-fade-right.scroll-hidden {
		transform: translateX(-60px);
	}
	
	.scroll-fade-right.scroll-visible {
		transform: translateX(0);
	}
	
	.scroll-scale-up.scroll-hidden {
		transform: scale(0.8);
	}
	
	.scroll-scale-up.scroll-visible {
		transform: scale(1);
	}
	
	.scroll-scale-down.scroll-hidden {
		transform: scale(1.2);
	}
	
	.scroll-scale-down.scroll-visible {
		transform: scale(1);
	}
	
	/* Stagger animation delays for child elements */
	.scroll-animation :global(.stagger-item) {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.6s ease, transform 0.6s ease;
	}
	
	.scroll-animation.scroll-visible :global(.stagger-item:nth-child(1)) {
		opacity: 1;
		transform: translateY(0);
		transition-delay: 0ms;
	}
	
	.scroll-animation.scroll-visible :global(.stagger-item:nth-child(2)) {
		opacity: 1;
		transform: translateY(0);
		transition-delay: 100ms;
	}
	
	.scroll-animation.scroll-visible :global(.stagger-item:nth-child(3)) {
		opacity: 1;
		transform: translateY(0);
		transition-delay: 200ms;
	}
	
	.scroll-animation.scroll-visible :global(.stagger-item:nth-child(4)) {
		opacity: 1;
		transform: translateY(0);
		transition-delay: 300ms;
	}
	
	.scroll-animation.scroll-visible :global(.stagger-item:nth-child(5)) {
		opacity: 1;
		transform: translateY(0);
		transition-delay: 400ms;
	}
	
	.scroll-animation.scroll-visible :global(.stagger-item:nth-child(6)) {
		opacity: 1;
		transform: translateY(0);
		transition-delay: 500ms;
	}
</style>
