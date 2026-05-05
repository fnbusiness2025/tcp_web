<script>
	import { onMount } from 'svelte';
	import ScrollAnimation from '$lib/ScrollAnimation.svelte';
	import Navigation from '$lib/Navigation.svelte';
</script>

<svelte:head>
	<title>Asset Tagging & Tracking - Terrestrial Property Consulting Limited | TCP Malawi</title>
	<meta name="description" content="Professional asset tagging and tracking solutions in Malawi. Comprehensive asset management with durable tags, software integration, and register reconciliation." />
</svelte:head>

<Navigation currentPage="services" />

<!-- Main Content -->
<main>
	<!-- Hero Section -->
	<section class="service-hero">
		<div class="hero-background">
			<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=600&fit=crop&auto=format" alt="Asset Tagging & Tracking" class="hero-image" />
			<div class="hero-overlay"></div>
		</div>
		<div class="container">
			<div class="hero-content">
				<div class="service-icon">🏷️</div>
				<h1>Asset Tagging & Tracking</h1>
				<p class="hero-subtitle">Comprehensive asset tagging and tracking solutions</p>
			</div>
		</div>
	</section>

	<!-- Service Introduction -->
	<ScrollAnimation animationType="fade-up" delay={200}>
		<section class="service-intro">
			<div class="container">
				<div class="intro-content">
					<p>At Terrestrial Property Consulting Limited, we offer comprehensive asset tagging and tracking solutions designed to improve inventory accuracy, prevent asset loss, and ensure seamless asset audits for both small businesses and large organizations.</p>
				</div>
			</div>
		</section>
	</ScrollAnimation>

	<!-- What We Do -->
	<ScrollAnimation animationType="fade-up" delay={300}>
		<section class="process-section">
			<div class="container">
				<div class="section-header">
					<h2>🔖 What We Do</h2>
				</div>
				<div class="process-grid">
					<div class="process-item stagger-item">
						<div class="process-icon">🏷️</div>
						<h3>Supply of High-Quality Asset Tags</h3>
						<p>We provide anodized aluminum barcodes that are indelible, scratch-resistant, and built to withstand extreme climate conditions — ideal for Malawian and African environments.</p>
					</div>
					<div class="process-item stagger-item">
						<div class="process-icon">🔍</div>
						<h3>Tagging & Physical Verification</h3>
						<p>Our expert team conducts on-site physical audits of all organizational assets. Every verified item is tagged with a permanent barcode for tracking and monitoring.</p>
					</div>
					<div class="process-item stagger-item">
						<div class="process-icon">💻</div>
						<h3>Asset Management Software Integration</h3>
						<p>We supply and configure asset management software and handheld hardware to allow real-time tracking and reconciliation. Integration with your existing fixed asset register ensures smooth transition and minimal disruption.</p>
					</div>
					<div class="process-item stagger-item">
						<div class="process-icon">📊</div>
						<h3>Register Reconciliation & Reporting</h3>
						<p>We reconcile physical assets with your internal records. Final reports include updated registers, reconciliation notes, asset condition summaries, and recommendations.</p>
					</div>
				</div>
			</div>
		</section>
	</ScrollAnimation>

	<!-- Benefits -->
	<ScrollAnimation animationType="fade-up" delay={400}>
		<section class="benefits-section">
			<div class="container">
				<div class="section-header">
					<h2>🧾 Benefits of Our Tagging Services</h2>
				</div>
				<div class="benefits-grid">
					<div class="benefit-card stagger-item">
						<div class="benefit-icon">👻</div>
						<h3>Eliminate Ghost Assets</h3>
						<p>Remove phantom assets from your records and reduce losses</p>
					</div>
					<div class="benefit-card stagger-item">
						<div class="benefit-icon">📱</div>
						<h3>Effortless Tracking</h3>
						<p>Enable real-time tracking and seamless auditing</p>
					</div>
					<div class="benefit-card stagger-item">
						<div class="benefit-icon">📋</div>
						<h3>IFRS Compliance</h3>
						<p>Prepare for international accounting standards compliance</p>
					</div>
					<div class="benefit-card stagger-item">
						<div class="benefit-icon">🎯</div>
						<h3>Better Decision Making</h3>
						<p>Improve decisions through accurate asset visibility</p>
					</div>
				</div>
			</div>
		</section>
	</ScrollAnimation>

	<!-- Major Clients -->
	<section class="clients-section">
		<div class="container">
			<div class="section-header">
				<h2>🌍 Trusted by Major Clients</h2>
			</div>
			<div class="clients-content">
				<p>We've delivered large-scale asset tagging projects for:</p>
				<div class="client-showcase">
					<div class="showcase-item">Ministry of Health</div>
					<div class="showcase-item">Meatco Limited</div>
					<div class="showcase-item">Sunbird Hotels</div>
					<div class="showcase-item">National Oil Company of Malawi</div>
					<div class="showcase-item">Southern Region Water Board</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Why Choose Us -->
	<section class="why-section">
		<div class="container">
			<div class="section-header">
				<h2>✅ Why Choose Us?</h2>
			</div>
			<div class="benefits-list">
				<div class="benefit-item">Use of durable, tamper-proof tags</div>
				<div class="benefit-item">Local and international expertise</div>
				<div class="benefit-item">Full-service approach from supply to software to reconciliation</div>
				<div class="benefit-item">Cost-effective and scalable for any organization</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<ScrollAnimation animationType="fade-up" delay={600}>
		<section class="cta-section">
			<div class="container">
				<div class="cta-content">
					<h2>Ready to Improve Asset Management?</h2>
					<p>Contact us today for professional asset tagging and tracking solutions</p>
					<div class="cta-buttons">
						<a href="/contact" class="btn btn-primary btn-large">Get Started</a>
						<a href="/services" class="btn btn-secondary btn-large">Other Services</a>
					</div>
				</div>
			</div>
		</section>
	</ScrollAnimation>
</main>


<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		background: #f8fafc;
		color: #1e293b;
		line-height: 1.6;
	}

	:global(.container) {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	/* CSS Variables */
	:root {
		--tcp-primary: #93c750;
		--tcp-primary-dark: #7fb54c;
		--tcp-success: #93c750;
		--foreground: #1e293b;
		--background: #ffffff;
		--muted-foreground: #64748b;
		--border: #e2e8f0;
		--radius: 8px;
		--radius-lg: 12px;
		--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
		--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
		--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
		--transition-fast: 150ms ease;
		--transition-normal: 300ms ease;
		--transition-slow: 500ms ease;
		--spacing-2: 8px;
		--spacing-3: 12px;
		--spacing-4: 16px;
		--spacing-6: 24px;
		--spacing-8: 32px;
		--spacing-12: 48px;
		--spacing-16: 64px;
		--spacing-20: 80px;
		--text-xs: 12px;
		--text-sm: 14px;
		--text-base: 16px;
		--text-lg: 18px;
		--text-xl: 20px;
		--text-2xl: 24px;
		--text-3xl: 30px;
		--text-4xl: 36px;
		--text-5xl: 48px;
	}

	/* Navigation */
	.navbar {
		background: var(--background);
		border-bottom: 1px solid var(--border);
		position: sticky;
		top: 0;
		z-index: 100;
		backdrop-filter: blur(10px);
	}

	.nav-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--spacing-4) 0;
	}

	.nav-logo {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
	}

	.company-name-nav {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--tcp-primary);
	}

	.nav-menu {
		display: flex;
		align-items: center;
		gap: var(--spacing-8);
		list-style: none;
	}

	.nav-menu a {
		text-decoration: none;
		color: var(--foreground);
		font-weight: 500;
		transition: color var(--transition-fast) ease;
	}

	.nav-menu a:hover,
	.nav-menu a.active {
		color: var(--tcp-primary);
	}

	.hamburger {
		display: none;
		flex-direction: column;
		cursor: pointer;
		gap: 4px;
	}

	.hamburger span {
		width: 24px;
		height: 2px;
		background: var(--foreground);
		transition: all var(--transition-fast) ease;
	}

	/* Buttons */
	.btn {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-2);
		padding: var(--spacing-3) var(--spacing-6);
		border-radius: var(--radius);
		text-decoration: none;
		font-weight: 500;
		transition: all var(--transition-fast) ease;
		border: none;
		cursor: pointer;
		font-size: var(--text-sm);
	}

	.btn-primary {
		background: var(--tcp-primary);
		color: white;
	}

	.btn-primary:hover {
		background: var(--tcp-primary-dark);
		transform: translateY(-1px);
	}

	.btn-secondary {
		background: transparent;
		color: var(--foreground);
		border: 1px solid var(--border);
	}

	.btn-secondary:hover {
		background: var(--border);
	}

	.btn-large {
		padding: var(--spacing-4) var(--spacing-8);
		font-size: var(--text-base);
	}

	/* Service Hero */
	.service-hero {
		position: relative;
		color: white;
		padding: var(--spacing-20) 0;
		text-align: center;
		overflow: hidden;
	}

	.hero-background {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -2;
	}

	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(147, 199, 80, 0.6), rgba(15, 23, 42, 0.98));
		z-index: -1;
	}

	.hero-content .service-icon {
		font-size: 4rem;
		margin-bottom: var(--spacing-6);
	}

	.hero-content h1 {
		font-size: var(--text-4xl);
		font-weight: 700;
		margin-bottom: var(--spacing-4);
	}

	.hero-subtitle {
		font-size: var(--text-xl);
		font-weight: 300;
		max-width: 600px;
		margin: 0 auto;
		opacity: 0.9;
	}

	/* Service Sections */
	.service-intro {
		padding: var(--spacing-16) 0;
		background: var(--background);
	}

	.intro-content {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}

	.intro-content p {
		font-size: var(--text-lg);
		color: var(--foreground);
		line-height: 1.6;
	}

	.process-section,
	.benefits-section,
	.clients-section,
	.why-section {
		padding: var(--spacing-16) 0;
		background: linear-gradient(135deg, rgba(147, 199, 80, 0.05) 0%, rgba(147, 199, 80, 0.1) 100%);
	}

	.process-section:nth-child(even),
	.benefits-section:nth-child(even),
	.clients-section:nth-child(even),
	.why-section:nth-child(even) {
		background: var(--background);
	}

	.section-header {
		text-align: center;
		margin-bottom: var(--spacing-12);
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}

	.section-header h2 {
		font-size: var(--text-3xl);
		font-weight: 700;
		color: var(--tcp-primary);
	}

	.process-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--spacing-6);
		max-width: 1200px;
		margin: 0 auto;
	}

	.process-item {
		text-align: center;
		background: white;
		border-radius: var(--radius-lg);
		padding: var(--spacing-8);
		box-shadow: var(--shadow-md);
		border: 1px solid var(--border);
		transition: all var(--transition-normal) ease;
	}

	.process-item:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--tcp-primary);
	}

	.process-icon {
		font-size: 3rem;
		margin-bottom: var(--spacing-4);
	}

	.process-item h3 {
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-3);
	}

	.process-item p {
		color: var(--muted-foreground);
		line-height: 1.5;
	}

	.benefits-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-6);
		max-width: 1200px;
		margin: 0 auto;
	}

	.benefit-card {
		text-align: center;
		padding: var(--spacing-6);
		background: white;
		border-radius: var(--radius-lg);
		border: 1px solid var(--border);
		transition: all var(--transition-normal) ease;
	}

	.benefit-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--tcp-primary);
	}

	.benefit-icon {
		font-size: 2.5rem;
		margin-bottom: var(--spacing-3);
	}

	.benefit-card h3 {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-2);
	}

	.benefit-card p {
		color: var(--muted-foreground);
		line-height: 1.5;
	}

	.clients-content {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}

	.clients-content p {
		font-size: var(--text-lg);
		color: var(--foreground);
		line-height: 1.6;
		margin-bottom: var(--spacing-6);
	}

	.client-showcase {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-3);
		justify-content: center;
	}

	.showcase-item {
		background: var(--tcp-primary);
		color: white;
		padding: var(--spacing-3) var(--spacing-6);
		border-radius: var(--radius);
		font-weight: 500;
	}

	.benefits-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);
		max-width: 800px;
		margin: 0 auto;
	}

	.benefit-item {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		padding: var(--spacing-4);
		background: rgba(147, 199, 80, 0.05);
		border-radius: var(--radius);
	}

	.benefit-item::before {
		content: '✓';
		color: var(--tcp-primary);
		font-weight: bold;
		font-size: var(--text-lg);
	}

	/* CTA Section */
	.cta-section {
		padding: var(--spacing-20) 0;
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		text-align: center;
	}

	.cta-content h2 {
		font-size: var(--text-3xl);
		font-weight: 700;
		margin-bottom: var(--spacing-4);
	}

	.cta-content p {
		font-size: var(--text-lg);
		margin-bottom: var(--spacing-8);
		opacity: 0.9;
	}

	.cta-buttons {
		display: flex;
		gap: var(--spacing-4);
		justify-content: center;
		flex-wrap: wrap;
	}

	.cta-buttons .btn-secondary {
		color: white;
		border-color: rgba(255, 255, 255, 0.5);
	}

	.cta-buttons .btn-secondary:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: white;
	}

	
	/* Mobile Menu */
	.mobile-menu {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background: var(--background);
		border-bottom: 1px solid var(--border);
		flex-direction: column;
		padding: var(--spacing-4);
		gap: var(--spacing-4);
		box-shadow: var(--shadow-lg);
	}

	.mobile-menu.active {
		display: flex;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.desktop-menu {
			display: none;
		}

		.hamburger {
			display: flex;
		}

		.hero-content h1 {
			font-size: var(--text-3xl);
		}

		.hero-subtitle {
			font-size: var(--text-lg);
		}

		.process-grid,
		.benefits-grid {
			grid-template-columns: 1fr;
		}

		.client-showcase {
			flex-direction: column;
			align-items: center;
		}

		.showcase-item {
			width: 100%;
			max-width: 300px;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}

		.cta-buttons .btn {
			width: 100%;
			max-width: 300px;
		}
	}
</style>
