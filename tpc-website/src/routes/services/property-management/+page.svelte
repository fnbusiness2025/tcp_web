<script>
	import { onMount } from 'svelte';

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
	<title>Property Management - Terrestrial Property Consulting Limited | TCP Malawi</title>
	<meta name="description" content="End-to-end property management services in Malawi. Professional residential, commercial, and industrial property management with tenant relations and maintenance." />
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
				<div class="service-icon">🏢</div>
				<h1>Property Management</h1>
				<p class="hero-subtitle">End-to-end property management services</p>
			</div>
		</div>
	</section>

	<!-- Service Introduction -->
	<section class="service-intro">
		<div class="container">
			<div class="intro-content">
				<p>At Terrestrial Property Consulting Limited, we offer end-to-end property management services that give you peace of mind, knowing your investment is in expert hands. Our professional team ensures your property is well-maintained, tenants are satisfied, and your returns are maximized.</p>
			</div>
		</div>
	</section>

	<!-- What We Manage -->
	<section class="property-types-section">
		<div class="container">
			<div class="section-header">
				<h2>🏢 What We Manage</h2>
			</div>
			<div class="property-types">
				<div class="property-type">
					<div class="property-icon">🏠</div>
					<h3>Residential Properties</h3>
					<p>Apartments, houses, estates</p>
				</div>
				<div class="property-type">
					<div class="property-icon">🏬</div>
					<h3>Commercial Buildings</h3>
					<p>Offices, retail centers, mixed-use developments</p>
				</div>
				<div class="property-type">
					<div class="property-icon">🏭</div>
					<h3>Industrial Premises</h3>
					<p>Warehouses, factories, logistics hubs</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Our Services Include -->
	<section class="services-section">
		<div class="container">
			<div class="section-header">
				<h2>🔧 Our Services Include:</h2>
			</div>
			<div class="services-list">
				<div class="service-item">
					<div class="service-item-icon">💰</div>
					<div>
						<h3>Rent Collection & Financial Reporting</h3>
						<p>We ensure timely rent collection and provide clear monthly reports with income and expense breakdowns.</p>
					</div>
				</div>
				<div class="service-item">
					<div class="service-item-icon">👥</div>
					<div>
						<h3>Tenant Management</h3>
						<p>From screening tenants to handling disputes and renewals, we act as the professional link between landlord and tenant.</p>
					</div>
				</div>
				<div class="service-item">
					<div class="service-item-icon">🔧</div>
					<div>
						<h3>Maintenance & Repairs</h3>
						<p>We coordinate all maintenance work through our trusted contractors, ensuring your property remains in top condition.</p>
					</div>
				</div>
				<div class="service-item">
					<div class="service-item-icon">📢</div>
					<div>
						<h3>Vacancy Marketing</h3>
						<p>We market vacant units using both traditional and digital channels to ensure minimal downtime.</p>
					</div>
				</div>
				<div class="service-item">
					<div class="service-item-icon">📄</div>
					<div>
						<h3>Lease Management</h3>
						<p>We handle lease agreements, renewals, compliance with local property laws, and ensure smooth transitions between tenants.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Why Our Clients Trust Us -->
	<section class="trust-section">
		<div class="container">
			<div class="section-header">
				<h2>📈 Why Our Clients Trust Us</h2>
			</div>
			<div class="trust-reasons">
				<div class="trust-item">
					<div class="trust-icon">🌍</div>
					<h3>Hands-on local expertise</h3>
					<p>Deep knowledge of Malawi's property market</p>
				</div>
				<div class="trust-item">
					<div class="trust-icon">💬</div>
					<h3>Transparent communication</h3>
					<p>Clear updates for both landlords and tenants</p>
				</div>
				<div class="trust-item">
					<div class="trust-icon">🛠️</div>
					<h3>Modern tools and systems</h3>
					<p>Professional reporting and tracking systems</p>
				</div>
				<div class="trust-item">
					<div class="trust-icon">👨‍💼</div>
					<h3>Expert support</h3>
					<p>Qualified property economists and surveyors</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Who We Serve -->
	<section class="clients-section">
		<div class="container">
			<div class="section-header">
				<h2>🧾 Who We Serve</h2>
			</div>
			<div class="clients-content">
				<p>We manage properties for:</p>
				<div class="client-categories">
					<div class="client-category">Corporate investors</div>
					<div class="client-category">Private landlords</div>
					<div class="client-category">Non-profit organizations</div>
					<div class="client-category">Government departments</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonial -->
	<section class="testimonial-section">
		<div class="container">
			<div class="testimonial">
				<div class="testimonial-content">
					<p>"Terrestrial has made owning property stress-free. Their team is responsive, professional, and results-driven."</p>
					<p class="testimonial-author">– Client Testimonial</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="cta-section">
		<div class="container">
			<div class="cta-content">
				<h2>Ready for Professional Property Management?</h2>
				<p>Let us take care of your property while you focus on what matters most</p>
				<div class="cta-buttons">
					<a href="/contact" class="btn btn-primary btn-large">Get Started</a>
					<a href="/services" class="btn btn-secondary btn-large">Other Services</a>
				</div>
			</div>
		</div>
	</section>
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
	}

	.property-types-section,
	.services-section,
	.trust-section,
	.clients-section,
	.testimonial-section {
		padding: var(--spacing-16) 0;
		background: linear-gradient(135deg, rgba(147, 199, 80, 0.05) 0%, rgba(147, 199, 80, 0.1) 100%);
	}

	.property-types-section:nth-child(even),
	.services-section:nth-child(even),
	.trust-section:nth-child(even),
	.clients-section:nth-child(even),
	.testimonial-section:nth-child(even) {
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

	.property-types {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-6);
		max-width: 1000px;
		margin: 0 auto;
	}

	.property-type {
		text-align: center;
		padding: var(--spacing-6);
		background: white;
		border-radius: var(--radius-lg);
		border: 1px solid var(--border);
		transition: all var(--transition-normal) ease;
	}

	.property-type:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--tcp-primary);
	}

	.property-icon {
		font-size: 3rem;
		margin-bottom: var(--spacing-3);
	}

	.property-type h3 {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-2);
	}

	.property-type p {
		color: var(--muted-foreground);
	}

	.services-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-6);
		max-width: 1000px;
		margin: 0 auto;
	}

	.service-item {
		display: flex;
		gap: var(--spacing-4);
		align-items: flex-start;
		background: white;
		border-radius: var(--radius-lg);
		padding: var(--spacing-6);
		border: 1px solid var(--border);
		transition: all var(--transition-normal) ease;
	}

	.service-item:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-lg);
		border-color: var(--tcp-primary);
	}

	.service-item-icon {
		font-size: 2rem;
		flex-shrink: 0;
	}

	.service-item h3 {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-2);
	}

	.service-item p {
		color: var(--muted-foreground);
		line-height: 1.5;
	}

	.trust-reasons {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-6);
		max-width: 1000px;
		margin: 0 auto;
	}

	.trust-item {
		text-align: center;
		padding: var(--spacing-6);
		background: white;
		border-radius: var(--radius-lg);
		border: 1px solid var(--border);
		transition: all var(--transition-normal) ease;
	}

	.trust-item:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--tcp-primary);
	}

	.trust-icon {
		font-size: 2.5rem;
		margin-bottom: var(--spacing-3);
	}

	.trust-item h3 {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-2);
	}

	.trust-item p {
		color: var(--muted-foreground);
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

	.client-categories {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--spacing-4);
	}

	.client-category {
		background: var(--background);
		padding: var(--spacing-4);
		border-radius: var(--radius);
		text-align: center;
		border: 1px solid var(--border);
		font-weight: 500;
	}

	.testimonial {
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		padding: var(--spacing-8);
		border-radius: var(--radius-lg);
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.testimonial-content p {
		font-size: var(--text-lg);
		font-style: italic;
		margin-bottom: var(--spacing-4);
	}

	.testimonial-author {
		font-weight: 600;
		opacity: 0.9;
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

		.property-types,
		.trust-reasons,
		.client-categories {
			grid-template-columns: 1fr;
		}

		.service-item {
			flex-direction: column;
			text-align: center;
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
