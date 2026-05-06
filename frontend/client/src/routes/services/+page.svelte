<script>
	import { onMount } from 'svelte';
	import ScrollAnimation from '$lib/ScrollAnimation.svelte';
	import Navigation from '$lib/Navigation.svelte';
</script>

<svelte:head>
	<title>Services - Terrestrial Property Consulting Limited | TPC Malawi</title>
	<meta name="description" content="Explore our comprehensive property services including valuations, plant & machinery valuations, property management, land surveying, and asset tagging solutions in Malawi." />
</svelte:head>

<Navigation currentPage="services" />

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
	<ScrollAnimation animationType="fade-up" delay={200}>
		<section class="services-overview">
			<div class="container">
				<div class="section-header">
					<h2>Our Core Services</h2>
					<p>Expert solutions for all your property and asset management needs</p>
				</div>
				<div class="services-grid">
					<!-- (a) Asset/property valuations -->
					<a href="/services/property-valuations" class="service-card stagger-item">
						<div class="service-image">
							<img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop&auto=format" alt="Asset/Property Valuations" />
							<div class="service-overlay">
								<div class="service-icon">📊</div>
							</div>
						</div>
						<div class="service-content">
							<div class="service-tag">Professional</div>
							<h3>Asset/Property Valuations</h3>
							<p>Accurate, reliable, and professional valuation services for all types of properties across Malawi.</p>
							<div class="service-link">Learn More <span>→</span></div>
						</div>
					</a>

					<!-- (b) plant and machinery valuation -->
					<a href="/services/plant-machinery-valuations" class="service-card stagger-item">
						<div class="service-image">
							<img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop&auto=format" alt="Plant and Machinery Valuation" />
							<div class="service-overlay">
								<div class="service-icon">🏭</div>
							</div>
						</div>
						<div class="service-content">
							<div class="service-tag">Industrial</div>
							<h3>Plant and Machinery Valuation</h3>
							<p>Specialized valuation services for industrial plants, machinery, and commercial equipment.</p>
							<div class="service-link">Learn More <span>→</span></div>
						</div>
					</a>

					<!-- (c) property management -->
					<a href="/services/property-management" class="service-card stagger-item">
						<div class="service-image">
							<img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&auto=format" alt="Property Management" />
							<div class="service-overlay">
								<div class="service-icon">🏢</div>
							</div>
						</div>
						<div class="service-content">
							<div class="service-tag">Management</div>
							<h3>Property Management</h3>
							<p>End-to-end management solutions for residential and commercial property investments.</p>
							<div class="service-link">Learn More <span>→</span></div>
						</div>
					</a>

					<!-- (d) land lease consultancy -->
					<a href="/services/land-lease-consultancy" class="service-card stagger-item">
						<div class="service-image">
							<img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop&auto=format" alt="Land Lease Consultancy" />
							<div class="service-overlay">
								<div class="service-icon">📄</div>
							</div>
						</div>
						<div class="service-content">
							<div class="service-tag">Consultancy</div>
							<h3>Land Lease Consultancy</h3>
							<p>Expert advice on land leasing negotiations, agreement structuring, and lease management.</p>
							<div class="service-link">Learn More <span>→</span></div>
						</div>
					</a>

					<!-- (e) telecommunications site acquisition services -->
					<a href="/services/telecommunications-site-acquisition" class="service-card stagger-item">
						<div class="service-image">
							<img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=400&h=250&fit=crop&auto=format" alt="Telecommunications Site Acquisition" />
							<div class="service-overlay">
								<div class="service-icon">🗼</div>
							</div>
						</div>
						<div class="service-content">
							<div class="service-tag">Telecomm</div>
							<h3>Telecom Site Acquisition</h3>
							<p>Specialized property solutions for identifying and securing sites for telecom infrastructure.</p>
							<div class="service-link">Learn More <span>→</span></div>
						</div>
					</a>

					<!-- (f) asset tagging solutions -->
					<a href="/services/asset-tagging-tracking" class="service-card stagger-item">
						<div class="service-image">
							<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format" alt="Asset Tagging Solutions" />
							<div class="service-overlay">
								<div class="service-icon">🏷️</div>
							</div>
						</div>
						<div class="service-content">
							<div class="service-tag">Solutions</div>
							<h3>Asset Tagging Solutions</h3>
							<p>Modern asset identification and tracking systems with comprehensive reporting features.</p>
							<div class="service-link">Learn More <span>→</span></div>
						</div>
					</a>

					<!-- (g) land surveying -->
					<a href="/services/land-surveying" class="service-card stagger-item">
						<div class="service-image">
							<img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop&auto=format" alt="Land Surveying" />
							<div class="service-overlay">
								<div class="service-icon">📐</div>
							</div>
						</div>
						<div class="service-content">
							<div class="service-tag">Surveying</div>
							<h3>Land Surveying</h3>
							<p>Precise boundary identification, topographic surveys, and cadastral mapping services.</p>
							<div class="service-link">Learn More <span>→</span></div>
						</div>
					</a>

					<!-- (h) property sales -->
					<a href="/services/property-sales" class="service-card stagger-item">
						<div class="service-image">
							<img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=400&h=250&fit=crop&auto=format" alt="Property Sales" />
							<div class="service-overlay">
								<div class="service-icon">🏠</div>
							</div>
						</div>
						<div class="service-content">
							<div class="service-tag">Real Estate</div>
							<h3>Property Sales</h3>
							<p>Professional brokerage services for the sale and acquisition of real estate properties.</p>
							<div class="service-link">Learn More <span>→</span></div>
						</div>
					</a>

					<!-- (i) building plans and layout planning -->
					<a href="/services/building-plans-layout-planning" class="service-card stagger-item">
						<div class="service-image">
							<img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&auto=format" alt="Building Plans and Layout Planning" />
							<div class="service-overlay">
								<div class="service-icon">🏗️</div>
							</div>
						</div>
						<div class="service-content">
							<div class="service-tag">Architecture</div>
							<h3>Building Plans & Layout</h3>
							<p>Comprehensive design and planning services for optimal field and building layout use.</p>
							<div class="service-link">Learn More <span>→</span></div>
						</div>
					</a>

					<!-- (j) market research -->
					<a href="/services/market-research" class="service-card stagger-item">
						<div class="service-image">
							<img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=250&fit=crop&auto=format" alt="Market Research" />
							<div class="service-overlay">
								<div class="service-icon">📈</div>
							</div>
						</div>
						<div class="service-content">
							<div class="service-tag">Research</div>
							<h3>Market Research</h3>
							<p>In-depth property market analysis and investment research for data-driven decisions.</p>
							<div class="service-link">Learn More <span>→</span></div>
						</div>
					</a>
				</div>
			</div>
		</section>
	</ScrollAnimation>

	<!-- CTA Section -->
	<ScrollAnimation animationType="fade-up" delay={400}>
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
		justify-content: space-between;
		width: 30px;
		height: 21px;
		cursor: pointer;
		z-index: 1001;
		transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	.hamburger:hover {
		transform: scale(1.1);
	}

	.hamburger span {
		display: block;
		height: 3px;
		width: 100%;
		background-color: #000000;
		border-radius: 3px;
		transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		transform-origin: center;
		position: relative;
	}

	.hamburger.active span:nth-child(1) {
		transform: rotate(45deg) translate(8px, 8px);
		background-color: var(--tcp-primary);
	}

	.hamburger.active span:nth-child(2) {
		opacity: 0;
		transform: translateX(20px) scale(0);
	}

	.hamburger.active span:nth-child(3) {
		transform: rotate(-45deg) translate(8px, -8px);
		background-color: var(--tcp-primary);
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

.services-overview {
	padding: var(--spacing-20) 0;
	background: radial-gradient(circle at 10% 20%, rgba(147, 199, 80, 0.05) 0%, transparent 40%),
				radial-gradient(circle at 90% 80%, rgba(147, 199, 80, 0.05) 0%, transparent 40%),
				var(--background);
	position: relative;
}

.section-header {
	text-align: center;
	margin-bottom: var(--spacing-20);
	position: relative;
}

.section-header h2 {
	font-size: var(--text-4xl);
	font-weight: 800;
	color: var(--foreground);
	margin-bottom: var(--spacing-4);
	letter-spacing: -0.02em;
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
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	gap: var(--spacing-10);
	max-width: 1240px;
	margin: 0 auto;
}

.service-card {
	display: flex;
	flex-direction: column;
	background: #ffffff;
	border-radius: 24px;
	text-decoration: none;
	color: inherit;
	transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	border: 1px solid rgba(226, 232, 240, 0.8);
	overflow: hidden;
	position: relative;
}

.service-card::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 24px;
	box-shadow: 0 0 40px rgba(147, 199, 80, 0);
	transition: box-shadow 0.5s ease;
	pointer-events: none;
	z-index: 1;
}

.service-card:hover {
	transform: translateY(-12px) scale(1.02);
	border-color: var(--tcp-primary);
	box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
}

.service-card:hover::after {
	box-shadow: 0 0 30px rgba(147, 199, 80, 0.15);
}

.service-image {
	position: relative;
	width: 100%;
	height: 220px;
	overflow: hidden;
}

.service-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .service-image img {
	transform: scale(1.1) rotate(1deg);
}

.service-overlay {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.4) 100%);
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: all 0.5s ease;
	backdrop-filter: blur(0px);
}

.service-card:hover .service-overlay {
	opacity: 1;
	backdrop-filter: blur(4px);
}

.service-icon {
	font-size: 3.5rem;
	transform: scale(0.8) translateY(20px);
	transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.3));
}

.service-card:hover .service-icon {
	transform: scale(1) translateY(0);
}

.service-content {
	padding: var(--spacing-8);
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.service-tag {
	font-size: var(--text-xs);
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	color: var(--tcp-primary);
	margin-bottom: var(--spacing-3);
	display: inline-block;
}

.service-card h3 {
	font-size: var(--text-2xl);
	font-weight: 700;
	margin-bottom: var(--spacing-4);
	color: var(--foreground);
	line-height: 1.2;
}

.service-card p {
	font-size: var(--text-base);
	line-height: 1.6;
	color: var(--muted-foreground);
	margin-bottom: var(--spacing-8);
	flex-grow: 1;
}

.service-link {
	color: var(--tcp-primary);
	font-weight: 700;
	display: inline-flex;
	align-items: center;
	gap: var(--spacing-2);
	font-size: var(--text-base);
	transition: all 0.3s ease;
}

.service-link span {
	transition: transform 0.3s ease;
}

.service-card:hover .service-link {
	gap: var(--spacing-4);
	color: var(--tcp-primary-dark);
}

.service-card:hover .service-link span {
	transform: translateX(8px);
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

