<script>
	import ScrollAnimation from '$lib/ScrollAnimation.svelte';
	import Navigation from '$lib/Navigation.svelte';

	export let title = '';
	export let subtitle = '';
	export let description = '';
	export let icon = '';
	export let image = '';
	export let introText = '';
	export let details = []; // Array of { title: string, text: string }
	export let ctaTitle = 'Need Professional Assistance?';
	export let ctaText = 'Contact our expert team today for professional guidance and solutions.';
</script>

<svelte:head>
	<title>{title} - Terrestrial Property Consulting Limited | TPC Malawi</title>
	<meta name="description" content={description} />
</svelte:head>

<Navigation currentPage="services" />

<main class="service-page-layout">
	<!-- Hero Section -->
	<section class="service-hero">
		<div class="hero-background">
			<img src={image} alt={title} class="hero-image" />
			<div class="hero-overlay"></div>
		</div>
		<div class="container">
			<div class="hero-content">
				<div class="service-icon">{icon}</div>
				<h1>{title}</h1>
				{#if subtitle}
					<p class="hero-subtitle">{subtitle}</p>
				{/if}
			</div>
		</div>
	</section>

	<!-- Service Introduction -->
	<ScrollAnimation animationType="fade-up" delay={200}>
		<section class="service-intro">
			<div class="container">
				<div class="intro-content">
					<p>{introText}</p>
				</div>
			</div>
		</section>
	</ScrollAnimation>

	<!-- Details Section -->
	{#if details.length > 0}
		<section class="details-section">
			<div class="container">
				<div class="details-grid">
					{#each details as item}
						<div class="details-card">
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Slot for any extra content specific to a page -->
	<slot />

	<!-- CTA Section -->
	<ScrollAnimation animationType="fade-up" delay={400}>
		<section class="cta-section">
			<div class="container">
				<div class="cta-content">
					<h2>{ctaTitle}</h2>
					<p>{ctaText}</p>
					<div class="cta-buttons">
						<a href="/contact" class="btn btn-primary btn-large">Get in Touch</a>
						<a href="/services" class="btn btn-secondary btn-large">View All Services</a>
					</div>
				</div>
			</div>
		</section>
	</ScrollAnimation>
</main>

<style>
	:global(.service-page-layout) {
		--tcp-primary: #93c750;
		--tcp-primary-dark: #7fb54c;
		--foreground: #1e293b;
		--background: #ffffff;
		--muted-foreground: #64748b;
		--border: #e2e8f0;
		--radius-lg: 24px;
	}

	.service-hero {
		position: relative;
		color: white;
		padding: 120px 0;
		text-align: center;
		background: #0f172a;
		overflow: hidden;
	}

	.hero-background {
		position: absolute;
		top: 0; left: 0; right: 0; bottom: 0;
		z-index: 1;
	}

	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 10s ease;
	}

	.service-hero:hover .hero-image {
		transform: scale(1.1);
	}

	.hero-overlay {
		position: absolute;
		top: 0; left: 0; right: 0; bottom: 0;
		background: linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95));
		z-index: 2;
	}

	.hero-content {
		position: relative;
		z-index: 3;
		text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
	}

	.service-icon {
		font-size: 5rem;
		margin-bottom: 24px;
		filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
	}

	.hero-content h1 {
		font-size: clamp(2.5rem, 8vw, 4rem);
		font-weight: 800;
		margin-bottom: 16px;
		letter-spacing: -0.02em;
	}

	.hero-subtitle {
		font-size: clamp(1.125rem, 3vw, 1.5rem);
		font-weight: 300;
		opacity: 0.9;
		max-width: 700px;
		margin: 0 auto;
	}

	.service-intro {
		padding: 100px 0;
		background: white;
		position: relative;
	}

	.intro-content {
		max-width: 850px;
		margin: 0 auto;
		text-align: center;
	}

	.intro-content p {
		font-size: 1.25rem;
		line-height: 1.8;
		color: var(--foreground);
		font-weight: 400;
	}

	.details-section {
		padding: 100px 0;
		background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
	}

	.details-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 40px;
	}

	.details-card {
		background: white;
		padding: 48px;
		border-radius: var(--radius-lg);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
		border: 1px solid var(--border);
		transition: all 0.4s ease;
	}

	.details-card:hover {
		transform: translateY(-8px);
		border-color: var(--tcp-primary);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
	}

	.details-card h3 {
		color: var(--tcp-primary);
		margin-bottom: 24px;
		font-size: 1.75rem;
		font-weight: 700;
	}

	.details-card p {
		font-size: 1.125rem;
		line-height: 1.7;
		color: var(--muted-foreground);
	}

	.cta-section {
		padding: 120px 0;
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		text-align: center;
		position: relative;
		overflow: hidden;
	}

	.cta-content h2 {
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 800;
		margin-bottom: 24px;
	}

	.cta-content p {
		font-size: 1.25rem;
		opacity: 0.95;
		max-width: 600px;
		margin: 0 auto 48px;
	}

	.cta-buttons {
		display: flex;
		gap: 24px;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		padding: 18px 48px;
		border-radius: 12px;
		text-decoration: none;
		font-weight: 700;
		font-size: 1.125rem;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		border: none;
		cursor: pointer;
	}

	.btn-primary {
		background: white;
		color: var(--tcp-primary);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
		background: #f8fafc;
	}

	.btn-secondary {
		background: rgba(255, 255, 255, 0.1);
		color: white;
		border: 2px solid rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(10px);
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.2);
		border-color: white;
	}

	@media (max-width: 768px) {
		.hero-content h1 { font-size: 2.5rem; }
		.cta-buttons { flex-direction: column; align-items: center; }
		.btn { width: 100%; max-width: 320px; }
		.details-card { padding: 32px; }
	}
</style>
