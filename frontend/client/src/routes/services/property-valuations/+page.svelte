<script>
	import { onMount } from 'svelte';
	import ScrollAnimation from '$lib/ScrollAnimation.svelte';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// Smooth scroll for anchor links
	function smoothScroll(event, targetId) {
		event.preventDefault();
		const element = document.getElementById(targetId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		closeMobileMenu();
	}
</script>

<svelte:head>
	<title>Property Valuations - Terrestrial Property Consulting Limited | TPC Malawi</title>
	<meta name="description" content="Professional property valuation services in Malawi. Accurate, reliable valuations for loans, insurance, estate duty, tax clearance, and more." />
</svelte:head>

<!-- Navigation -->
<nav class="navbar">
	<div class="container">
		<div class="nav-content">
			<div class="nav-logo">
				<img src="/tcp.jpeg" alt="TPC" style="height: 60px; width: 200px; object-fit: fill;" />
				<span class="company-name-nav">TPC Malawi</span>
			</div>
			
			<!-- Desktop Navigation -->
			<ul class="nav-menu desktop-menu">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/services" class="active">Services</a></li>
				<li><a href="/#listings">Properties</a></li>
				<li><a href="/contact">Contact</a></li>
				<li><a href="/contact" class="btn btn-primary">Get Started</a></li>
			</ul>

			<!-- Mobile Menu Toggle -->
			<div class="hamburger" class:active={mobileMenuOpen} on:click={toggleMobileMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>

		<!-- Mobile Menu -->
		<ul class="nav-menu mobile-menu" class:active={mobileMenuOpen}>
			<li><a href="/" on:click={closeMobileMenu}>Home</a></li>
			<li><a href="/about" on:click={closeMobileMenu}>About</a></li>
			<li><a href="/services" class="active" on:click={closeMobileMenu}>Services</a></li>
			<li><a href="/#listings" on:click={closeMobileMenu}>Properties</a></li>
			<li><a href="/contact" on:click={closeMobileMenu}>Contact</a></li>
			<li><a href="/contact" class="btn btn-primary" on:click={closeMobileMenu}>Get Started</a></li>
		</ul>
	</div>
</nav>

<!-- Main Content -->
<main>
	<!-- Hero Section -->
	<section class="service-hero">
		<div class="container">
			<div class="hero-content">
				<div class="service-icon">📊</div>
				<h1>Property Valuations</h1>
				<p class="hero-subtitle">Accurate, Reliable, Professional Valuation Services</p>
			</div>
		</div>
	</section>

	<!-- Service Introduction -->
	<ScrollAnimation animationType="fade-up" delay={200}>
		<section class="service-intro">
			<div class="container">
				<div class="intro-content">
					<p>At Terrestrial Property Consulting Limited, we provide professional property valuation services that are accurate, reliable, and compliant with international standards. Our experienced valuers deliver comprehensive reports for various purposes including loans, insurance, estate duty, and tax clearance.</p>
				</div>
			</div>
		</section>
	</ScrollAnimation>

	<!-- Why Valuation Matters -->
	<section class="importance-section">
		<div class="container">
			<div class="section-header">
				<h2>🔍 Why Property Valuation Matters:</h2>
			</div>
			<div class="importance-content">
				<p>Valuation plays a critical role in financial planning, decision-making, legal compliance, and risk management. Whether you're selling, buying, investing, or insuring a property — a professional valuation gives you a clear, evidence-based picture of the asset's true worth.</p>
			</div>
		</div>
	</section>

	<!-- Types of Valuations -->
	<section class="types-section">
		<div class="container">
			<div class="section-header">
				<h2>✅ Types of Valuations We Offer:</h2>
			</div>
			<div class="valuation-types">
				<div class="valuation-item">
					<div class="valuation-icon">📋</div>
					<h3>Loan Security Valuations</h3>
					<p>For mortgage purposes and collateral verification by banks and financial institutions.</p>
				</div>
				<div class="valuation-item">
					<div class="valuation-icon">🛡️</div>
					<h3>Insurance Valuations</h3>
					<p>To determine appropriate cover for buildings and assets in case of damage or loss.</p>
				</div>
				<div class="valuation-item">
					<div class="valuation-icon">📜</div>
					<h3>Estate Duty & Inheritance</h3>
					<p>For probate, estate distribution, or legal inheritance proceedings.</p>
				</div>
				<div class="valuation-item">
					<div class="valuation-icon">💰</div>
					<h3>Tax Clearance & Capital Gains</h3>
					<p>For submission to the Malawi Revenue Authority or in tax compliance cases.</p>
				</div>
				<div class="valuation-item">
					<div class="valuation-icon">📊</div>
					<h3>Accounting & Financial Reporting</h3>
					<p>For asset revaluation, IFRS reporting, or balance sheet inclusion.</p>
				</div>
				<div class="valuation-item">
					<div class="valuation-icon">🤝</div>
					<h3>Shareholding & Business Valuations</h3>
					<p>In support of mergers, acquisitions, or corporate restructuring.</p>
				</div>
				<div class="valuation-item">
					<div class="valuation-icon">💼</div>
					<h3>Sale & Purchase Negotiations</h3>
					<p>To determine fair market value before buying or selling a property.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Report Contents -->
	<section class="report-section">
		<div class="container">
			<div class="section-header">
				<h2>📊 What You Get in Our Valuation Report:</h2>
			</div>
			<div class="report-features">
				<div class="feature-item">Legal property description</div>
				<div class="feature-item">Physical inspection summary</div>
				<div class="feature-item">Comparable sales analysis</div>
				<div class="feature-item">Income approach (for commercial rentals)</div>
				<div class="feature-item">Replacement cost estimates</div>
				<div class="feature-item">Final professional opinion of value</div>
				<div class="feature-item">Maps, photos & asset register (where applicable)</div>
			</div>
		</div>
	</section>

	<!-- Who We Work With -->
	<section class="clients-section">
		<div class="container">
			<div class="section-header">
				<h2>🌍 Who We Work With:</h2>
			</div>
			<div class="client-grid">
				<div class="client-item">Commercial banks</div>
				<div class="client-item">Insurance companies</div>
				<div class="client-item">NGOs and Embassies</div>
				<div class="client-item">Legal professionals</div>
				<div class="client-item">Government departments</div>
				<div class="client-item">Individual property owners</div>
			</div>
		</div>
	</section>

	<!-- Why Choose Us -->
	<section class="why-section">
		<div class="container">
			<div class="section-header">
				<h2>🏅 Why Choose Us?</h2>
			</div>
			<div class="benefits-list">
				<div class="benefit-item">Licensed & Registered Valuers (SIM & Valuers Board)</div>
				<div class="benefit-item">Over 15 years of experience in Malawi & beyond</div>
				<div class="benefit-item">Reports that meet legal, financial & compliance needs</div>
				<div class="benefit-item">Fast turnaround time & professional presentation</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<ScrollAnimation animationType="fade-up" delay={600}>
		<section class="cta-section">
			<div class="container">
				<div class="cta-content">
					<h2>Need Professional Property Valuation?</h2>
					<p>Contact our expert team today for accurate and reliable valuation services</p>
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
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		padding: var(--spacing-20) 0;
		text-align: center;
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
		margin-bottom: var(--spacing-4);
	}

	.importance-section,
	.types-section,
	.report-section,
	.clients-section,
	.why-section {
		padding: var(--spacing-16) 0;
		background: linear-gradient(135deg, rgba(147, 199, 80, 0.05) 0%, rgba(147, 199, 80, 0.1) 100%);
	}

	.importance-section:nth-child(even),
	.types-section:nth-child(even),
	.report-section:nth-child(even),
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

	.importance-content {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}

	.importance-content p {
		font-size: var(--text-lg);
		color: var(--foreground);
		line-height: 1.6;
	}

	.valuation-types {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--spacing-6);
		max-width: 1200px;
		margin: 0 auto;
	}

	.valuation-item {
		background: white;
		border-radius: var(--radius-lg);
		padding: var(--spacing-8);
		box-shadow: var(--shadow-md);
		border: 1px solid var(--border);
		text-align: center;
		transition: all var(--transition-normal) ease;
	}

	.valuation-item:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--tcp-primary);
	}

	.valuation-icon {
		font-size: 3rem;
		margin-bottom: var(--spacing-4);
	}

	.valuation-item h3 {
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-3);
	}

	.valuation-item p {
		color: var(--muted-foreground);
		line-height: 1.5;
	}

	.report-features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-4);
		max-width: 1000px;
		margin: 0 auto;
	}

	.feature-item {
		background: rgba(147, 199, 80, 0.1);
		padding: var(--spacing-4);
		border-radius: var(--radius);
		border-left: 4px solid var(--tcp-primary);
		font-weight: 500;
	}

	.client-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--spacing-4);
		max-width: 800px;
		margin: 0 auto;
	}

	.client-item {
		background: var(--background);
		padding: var(--spacing-4);
		border-radius: var(--radius);
		text-align: center;
		border: 1px solid var(--border);
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

		.valuation-types {
			grid-template-columns: 1fr;
		}

		.report-features {
			grid-template-columns: 1fr;
		}

		.client-grid {
			grid-template-columns: repeat(2, 1fr);
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
