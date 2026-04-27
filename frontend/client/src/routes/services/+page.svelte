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
	<title>Services - Terrestrial Property Consulting Limited | TCP Malawi</title>
	<meta name="description" content="Explore our comprehensive property services including valuations, plant & machinery valuations, asset tagging & tracking, and property management in Malawi." />
</svelte:head>

<!-- Navigation -->
<nav class="navbar">
	<div class="container">
		<div class="nav-content">
			<div class="nav-logo">
				<img src="/tcp.jpeg" alt="TPC" style="height: 60px; width: 120px; object-fit: contain;" />
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
	<section class="services-hero">
		<div class="hero-background">
			<img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop&auto=format" alt="Professional services" class="hero-image" />
			<div class="hero-overlay"></div>
		</div>
		<div class="container">
			<div class="hero-content">
				<div class="hero-badge">Our Services</div>
				<h1>Professional Property Solutions</h1>
				<p class="hero-subtitle">Comprehensive real estate services tailored to meet your specific needs across Malawi</p>
			</div>
		</div>
	</section>

	<!-- Services Overview -->
	<section class="services-overview">
		<div class="container">
			<div class="section-header">
				<h2>Our Core Services</h2>
				<p>Expert solutions for all your property and asset management needs</p>
			</div>
			<div class="services-grid">
				<a href="/services/property-valuations" class="service-card">
					<div class="service-image">
						<img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop&auto=format" alt="Property Valuations" />
						<div class="service-overlay">
							<div class="service-icon">📊</div>
						</div>
					</div>
					<div class="service-content">
						<h3>Property Valuations</h3>
						<p>Accurate, reliable, and professional valuation services for all types of properties</p>
						<div class="service-link">Learn More →</div>
					</div>
				</a>
				<a href="/services/plant-machinery-valuations" class="service-card">
					<div class="service-image">
						<img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop&auto=format" alt="Plant & Machinery Valuations" />
						<div class="service-overlay">
							<div class="service-icon">🏭</div>
						</div>
					</div>
					<div class="service-content">
						<h3>Plant & Machinery Valuations</h3>
						<p>Specialized valuation services for industrial and commercial assets</p>
						<div class="service-link">Learn More →</div>
					</div>
				</a>
				<a href="/services/asset-tagging-tracking" class="service-card">
					<div class="service-image">
						<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format" alt="Asset Tagging & Tracking" />
						<div class="service-overlay">
							<div class="service-icon">🏷️</div>
						</div>
					</div>
					<div class="service-content">
						<h3>Asset Tagging & Tracking</h3>
						<p>Comprehensive asset management solutions with modern tracking technology</p>
						<div class="service-link">Learn More →</div>
					</div>
				</a>
				<a href="/services/property-management" class="service-card">
					<div class="service-image">
						<img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&auto=format" alt="Property Management" />
						<div class="service-overlay">
							<div class="service-icon">🏢</div>
						</div>
					</div>
					<div class="service-content">
						<h3>Property Management</h3>
						<p>End-to-end property management services for maximum investment returns</p>
						<div class="service-link">Learn More →</div>
					</div>
				</a>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="cta-section">
		<div class="container">
			<div class="cta-content">
				<h2>Need Professional Property Services?</h2>
				<p>Contact our expert team today to discuss how we can help with your specific requirements</p>
				<div class="cta-buttons">
					<a href="/contact" class="btn btn-primary btn-large">Get Started</a>
					<a href="/about" class="btn btn-secondary btn-large">About Us</a>
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

	/* Services Overview */
	.services-overview {
		padding: var(--spacing-20) 0;
		background: var(--background);
	}

	.overview-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--spacing-6);
	}

	.overview-card {
		background: white;
		border-radius: var(--radius-lg);
		padding: var(--spacing-8);
		box-shadow: var(--shadow-md);
		border: 1px solid var(--border);
		cursor: pointer;
		transition: all var(--transition-normal) ease;
		position: relative;
		text-decoration: none;
		color: inherit;
		display: block;
	}

	.overview-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--tcp-primary);
	}

	.overview-icon {
		font-size: 3rem;
		margin-bottom: var(--spacing-4);
	}

	.overview-card h3 {
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-3);
	}

	.overview-card p {
		color: var(--muted-foreground);
		line-height: 1.5;
		margin-bottom: var(--spacing-4);
	}

	.overview-arrow {
		position: absolute;
		top: var(--spacing-6);
		right: var(--spacing-6);
		font-size: var(--text-lg);
		color: var(--tcp-primary);
		transition: transform var(--transition-fast) ease;
	}

	.overview-card:hover .overview-arrow {
		transform: translateX(4px);
	}

	/* Service Detail Sections */
	.service-detail {
		padding: var(--spacing-20) 0;
		background: linear-gradient(135deg, rgba(147, 199, 80, 0.05) 0%, rgba(147, 199, 80, 0.1) 100%);
		display: block;
	}

	.service-header {
		text-align: center;
		margin-bottom: var(--spacing-16);
	}

	.service-icon {
		font-size: 4rem;
		margin-bottom: var(--spacing-6);
	}

	.service-header h2 {
		font-size: var(--text-3xl);
		font-weight: 700;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-4);
	}

	.service-tagline {
		font-size: var(--text-xl);
		font-weight: 500;
		color: var(--foreground);
		max-width: 600px;
		margin: 0 auto;
	}

	.service-content {
		max-width: 900px;
		margin: 0 auto;
	}

	.service-intro {
		background: white;
		border-radius: var(--radius-lg);
		padding: var(--spacing-8);
		box-shadow: var(--shadow-md);
		margin-bottom: var(--spacing-8);
	}

	.service-intro p {
		color: var(--foreground);
		line-height: 1.6;
		margin-bottom: var(--spacing-4);
	}

	.service-intro p:last-child {
		margin-bottom: 0;
	}

	.service-section {
		background: white;
		border-radius: var(--radius-lg);
		padding: var(--spacing-8);
		box-shadow: var(--shadow-md);
		margin-bottom: var(--spacing-8);
	}

	.service-section h3 {
		font-size: var(--text-2xl);
		font-weight: 600;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-4);
	}

	.service-section p {
		color: var(--foreground);
		line-height: 1.6;
		margin-bottom: var(--spacing-4);
	}

	/* Lists and Grids */
	.service-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
	}

	.list-item {
		display: flex;
		gap: var(--spacing-4);
		align-items: flex-start;
	}

	.list-icon {
		font-size: var(--text-lg);
		flex-shrink: 0;
		margin-top: 2px;
	}

	.report-features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-4);
	}

	.feature-item {
		background: rgba(147, 199, 80, 0.1);
		padding: var(--spacing-4);
		border-radius: var(--radius);
		border-left: 4px solid var(--tcp-primary);
	}

	.client-grid,
	.client-categories {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--spacing-4);
	}

	.client-item,
	.client-category {
		background: var(--background);
		padding: var(--spacing-4);
		border-radius: var(--radius);
		text-align: center;
		border: 1px solid var(--border);
	}

	.benefits-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);
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

	/* Specialized Grids */
	.importance-grid,
	.equipment-list,
	.report-list,
	.countries-grid,
	.clients-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-3);
	}

	.importance-item,
	.equipment-item,
	.report-item,
	.country-item,
	.client-item {
		background: var(--background);
		padding: var(--spacing-3);
		border-radius: var(--radius);
		border: 1px solid var(--border);
	}

	.process-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--spacing-6);
	}

	.process-item {
		text-align: center;
	}

	.process-icon {
		font-size: 3rem;
		margin-bottom: var(--spacing-4);
	}

	.process-item h4 {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-3);
	}

	.benefits-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-6);
	}

	.benefit-card {
		text-align: center;
		padding: var(--spacing-6);
		background: var(--background);
		border-radius: var(--radius-lg);
		border: 1px solid var(--border);
	}

	.benefit-icon {
		font-size: 2.5rem;
		margin-bottom: var(--spacing-3);
	}

	.benefit-card h4 {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-2);
	}

	.client-showcase {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-3);
	}

	.showcase-item {
		background: var(--tcp-primary);
		color: white;
		padding: var(--spacing-3) var(--spacing-6);
		border-radius: var(--radius);
		font-weight: 500;
	}

	/* Property Management Specific */
	.property-types {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-6);
	}

	.property-type {
		text-align: center;
		padding: var(--spacing-6);
		background: var(--background);
		border-radius: var(--radius-lg);
		border: 1px solid var(--border);
	}

	.property-icon {
		font-size: 3rem;
		margin-bottom: var(--spacing-3);
	}

	.property-type h4 {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-2);
	}

	.services-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-6);
	}

	.service-item {
		display: flex;
		gap: var(--spacing-4);
		align-items: flex-start;
	}

	.service-item-icon {
		font-size: 2rem;
		flex-shrink: 0;
	}

	.service-item h4 {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-2);
	}

	.trust-reasons {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-6);
	}

	.trust-item {
		text-align: center;
		padding: var(--spacing-6);
		background: var(--background);
		border-radius: var(--radius-lg);
		border: 1px solid var(--border);
	}

	.trust-icon {
		font-size: 2.5rem;
		margin-bottom: var(--spacing-3);
	}

	.trust-item h4 {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-2);
	}

	.testimonial {
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		padding: var(--spacing-8);
		border-radius: var(--radius-lg);
		text-align: center;
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

		.overview-grid {
			grid-template-columns: 1fr;
		}

		.process-grid,
		.benefits-grid,
		.property-types,
		.trust-reasons {
			grid-template-columns: 1fr;
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

/* Services Hero Section */
.services-hero {
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
z-index: -1;
}

.hero-image {
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
}

.hero-overlay {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(147, 199, 80, 0.3));
}

.hero-badge {
display: inline-block;
background: rgba(255, 255, 255, 0.2);
color: white;
padding: var(--spacing-2) var(--spacing-4);
border-radius: var(--radius-lg);
font-size: var(--text-sm);
font-weight: 600;
margin-bottom: var(--spacing-4);
backdrop-filter: blur(10px);
}

.hero-content h1 {
font-size: var(--text-5xl);
font-weight: 700;
margin-bottom: var(--spacing-4);
line-height: 1.2;
}

.hero-subtitle {
font-size: var(--text-xl);
font-weight: 400;
max-width: 600px;
margin: 0 auto;
line-height: 1.6;
opacity: 0.9;
}

/* Services Overview Section */
.services-overview {
padding: var(--spacing-20) 0;
background: var(--background);
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
max-width: 600px;
margin: 0 auto;
line-height: 1.6;
}

.services-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
gap: var(--spacing-8);
max-width: 1200px;
margin: 0 auto;
}

.service-card {
display: block;
background: white;
border-radius: var(--radius-lg);
box-shadow: var(--shadow-md);
text-decoration: none;
color: inherit;
transition: all 0.3s ease;
border: 1px solid var(--border);
overflow: hidden;
position: relative;
}

.service-card:hover {
transform: translateY(-8px);
box-shadow: var(--shadow-xl);
text-decoration: none;
color: inherit;
}

.service-image {
position: relative;
width: 100%;
height: 200px;
overflow: hidden;
}

.service-image img {
width: 100%;
height: 100%;
object-fit: cover;
transition: transform 0.3s ease;
}

.service-card:hover .service-image img {
transform: scale(1.05);
}

.service-overlay {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(147, 199, 80, 0.3));
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
transition: opacity 0.3s ease;
}

.service-card:hover .service-overlay {
opacity: 1;
}

.service-icon {
font-size: var(--text-3xl);
filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.service-content {
padding: var(--spacing-6);
text-align: center;
}

.service-card h3 {
font-size: var(--text-xl);
font-weight: 600;
margin-bottom: var(--spacing-3);
color: var(--foreground);
}

.service-card p {
font-size: var(--text-base);
line-height: 1.6;
color: var(--muted-foreground);
margin-bottom: var(--spacing-4);
}

.service-link {
color: var(--tcp-primary);
font-weight: 600;
display: inline-flex;
align-items: center;
gap: var(--spacing-2);
transition: gap 0.3s ease;
}

.service-card:hover .service-link {
gap: var(--spacing-3);
}

/* Responsive Design for Services Page */
@media (max-width: 768px) {
.hero-content h1 {
font-size: var(--text-3xl);
}

.hero-subtitle {
font-size: var(--text-lg);
}

.services-grid {
grid-template-columns: 1fr;
gap: var(--spacing-6);
}

.service-image {
height: 180px;
}

.service-content {
padding: var(--spacing-4);
}

.service-icon {
font-size: var(--text-2xl);
}

.cta-content h2 {
font-size: var(--text-2xl);
}
}

@media (max-width: 480px) {
.hero-content h1 {
font-size: var(--text-2xl);
}

.hero-subtitle {
font-size: var(--text-base);
}

.service-image {
height: 160px;
}

.service-content {
padding: var(--spacing-3);
}

.cta-content h2 {
font-size: var(--text-xl);
}
}
</style>

