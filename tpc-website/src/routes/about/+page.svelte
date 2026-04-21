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
	<title>About Us - Terrestrial Property Consulting Limited | TCP Malawi</title>
	<meta name="description" content="Learn about Terrestrial Property Consulting Limited - our vision, mission, core values, and legacy of professionalism in real estate services in Malawi." />
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
				<li><a href="/about" class="active">About</a></li>
				<li><a href="/services">Services</a></li>
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
			<li><a href="/about" class="active" on:click={closeMobileMenu}>About</a></li>
			<li><a href="/services" on:click={closeMobileMenu}>Services</a></li>
			<li><a href="/#listings" on:click={closeMobileMenu}>Properties</a></li>
			<li><a href="/contact" on:click={closeMobileMenu}>Contact</a></li>
			<li><a href="/contact" class="btn btn-primary" on:click={closeMobileMenu}>Get Started</a></li>
		</ul>
	</div>
</nav>

<!-- Main Content -->
<main>
	<!-- Hero Section -->
	<section class="about-hero">
		<div class="container">
			<div class="hero-content">
				<h1>About Terrestrial Property Consulting Limited</h1>
				<p class="hero-subtitle">A Legacy of Professionalism in Real Estate Services</p>
			</div>
		</div>
	</section>

	<!-- Vision Section -->
	<section class="vision-section">
		<div class="container">
			<div class="section-content">
				<div class="vision-icon">👁️</div>
				<h2>Our Vision</h2>
				<p class="vision-text">To be a special mark of property professionals.</p>
			</div>
		</div>
	</section>

	<!-- Core Values Section -->
	<section class="values-section">
		<div class="container">
			<div class="section-header">
				<h2>Core Values</h2>
				<p>The principles that guide our every action</p>
			</div>
			
			<div class="values-grid">
				<div class="value-card">
					<div class="value-icon">🤝</div>
					<h3>Integrity</h3>
					<p>We conduct business with honesty and transparency in all our dealings</p>
				</div>
				
				<div class="value-card">
					<div class="value-icon">👔</div>
					<h3>Professionalism</h3>
					<p>We maintain the highest standards of professional conduct and expertise</p>
				</div>
				
				<div class="value-card">
					<div class="value-icon">⭐</div>
					<h3>Excellence</h3>
					<p>We strive for excellence in every service we deliver to our clients</p>
				</div>
				
				<div class="value-card">
					<div class="value-icon">🎯</div>
					<h3>Client-Centric Service</h3>
					<p>We put our clients' needs at the center of everything we do</p>
				</div>
				
				<div class="value-card">
					<div class="value-icon">💡</div>
					<h3>Innovation</h3>
					<p>We embrace innovative solutions to meet modern real estate challenges</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Mission Section -->
	<section class="mission-section">
		<div class="container">
			<div class="mission-content">
				<div class="mission-icon">🎯</div>
				<h2>Our Mission</h2>
				<p class="mission-text">Providing first-class real estate services by applying exceptional property skills.</p>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="cta-section">
		<div class="container">
			<div class="cta-content">
				<h2>Ready to Work With Us?</h2>
				<p>Experience the difference of working with Malawi's premier property consulting firm</p>
				<div class="cta-buttons">
					<a href="/contact" class="btn btn-primary btn-large">Contact Us</a>
					<a href="/#listings" class="btn btn-secondary btn-large">View Properties</a>
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

	/* About Hero */
	.about-hero {
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		padding: var(--spacing-20) 0;
		text-align: center;
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

	/* Vision Section */
	.vision-section {
		padding: var(--spacing-20) 0;
		background: var(--background);
	}

	.section-content {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.vision-icon {
		font-size: 4rem;
		margin-bottom: var(--spacing-6);
	}

	.vision-section h2 {
		font-size: var(--text-3xl);
		font-weight: 700;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-6);
	}

	.vision-text {
		font-size: var(--text-xl);
		font-weight: 500;
		color: var(--foreground);
		line-height: 1.5;
	}

	/* Values Section */
	.values-section {
		padding: var(--spacing-20) 0;
		background: linear-gradient(135deg, rgba(147, 199, 80, 0.05) 0%, rgba(147, 199, 80, 0.1) 100%);
	}

	.section-header {
		text-align: center;
		margin-bottom: var(--spacing-16);
	}

	.section-header h2 {
		font-size: var(--text-3xl);
		font-weight: 700;
		color: var(--foreground);
		margin-bottom: var(--spacing-4);
	}

	.section-header p {
		font-size: var(--text-lg);
		color: var(--muted-foreground);
	}

	.values-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--spacing-8);
		max-width: 1200px;
		margin: 0 auto;
	}

	.value-card {
		background: white;
		border-radius: var(--radius-lg);
		padding: var(--spacing-8);
		box-shadow: var(--shadow-md);
		border: 1px solid var(--border);
		text-align: center;
		transition: all var(--transition-normal) ease;
	}

	.value-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--tcp-primary);
	}

	.value-icon {
		font-size: 3rem;
		margin-bottom: var(--spacing-4);
	}

	.value-card h3 {
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-3);
	}

	.value-card p {
		color: var(--muted-foreground);
		line-height: 1.5;
	}

	/* Mission Section */
	.mission-section {
		padding: var(--spacing-20) 0;
		background: var(--background);
	}

	.mission-content {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.mission-icon {
		font-size: 4rem;
		margin-bottom: var(--spacing-6);
	}

	.mission-section h2 {
		font-size: var(--text-3xl);
		font-weight: 700;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-6);
	}

	.mission-text {
		font-size: var(--text-xl);
		font-weight: 500;
		color: var(--foreground);
		line-height: 1.5;
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

		.values-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-6);
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
