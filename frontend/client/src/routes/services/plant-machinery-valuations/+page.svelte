<script>
	import { onMount } from 'svelte';
	import ScrollAnimation from '$lib/ScrollAnimation.svelte';
	import Navigation from '$lib/Navigation.svelte';
</script>

<svelte:head>
	<title>Plant & Machinery Valuations - Terrestrial Property Consulting Limited | TCP Malawi</title>
	<meta name="description" content="Specialized plant and machinery valuation services in Malawi. Professional valuations for industrial assets, manufacturing equipment, and commercial machinery." />
</svelte:head>

<Navigation currentPage="services" />

<!-- Main Content -->
<main>
	<!-- Hero Section -->
	<section class="service-hero">
		<div class="hero-background">
			<img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=600&fit=crop&auto=format" alt="Plant & Machinery Valuations" class="hero-image" />
			<div class="hero-overlay"></div>
		</div>
		<div class="container">
			<div class="hero-content">
				<div class="service-icon">🏭</div>
				<h1>Plant & Machinery Valuations</h1>
				<p class="hero-subtitle">Specialized Valuation for Industrial and Commercial Assets</p>
			</div>
		</div>
	</section>

	<!-- Service Introduction -->
	<ScrollAnimation animationType="fade-up" delay={200}>
		<section class="service-intro">
			<div class="container">
				<div class="intro-content">
					<p>At Terrestrial Property Consulting Limited, we specialize in professional plant and machinery valuations for industrial assets, manufacturing equipment, and commercial machinery. Our expert valuers provide accurate assessments that support financial decisions, insurance, and asset management strategies.</p>
				</div>
			</div>
		</section>
	</ScrollAnimation>

	<!-- Why Important -->
	<section class="importance-section">
		<div class="container">
			<div class="section-header">
				<h2>⚙️ Why Plant & Machinery Valuation is Important:</h2>
			</div>
			<div class="importance-content">
				<p>Valuing your machinery and plant assets accurately is critical for:</p>
				<div class="importance-grid">
					<div class="importance-item">Financial Reporting (IFRS compliant)</div>
					<div class="importance-item">Loan Security & Collateral Use</div>
					<div class="importance-item">Insurance Coverage & Risk Assessment</div>
					<div class="importance-item">Mergers, Acquisitions & Business Sales</div>
					<div class="importance-item">Asset Disposal or Auctioning</div>
					<div class="importance-item">Compliance with Tax & Audit Requirements</div>
				</div>
			</div>
		</div>
	</section>

	<!-- What We Value -->
	<section class="equipment-section">
		<div class="container">
			<div class="section-header">
				<h2>🔧 What We Value:</h2>
			</div>
			<div class="equipment-list">
				<div class="equipment-item">Factory Equipment & Industrial Installations</div>
				<div class="equipment-item">Manufacturing Plants & Assembly Lines</div>
				<div class="equipment-item">Specialized Production Machinery</div>
				<div class="equipment-item">Mobile Machinery (e.g., Construction Equipment)</div>
				<div class="equipment-item">Agricultural Equipment & Processing Machinery</div>
				<div class="equipment-item">Hospitality Equipment (e.g., Hotel Kitchens, Laundry Units)</div>
				<div class="equipment-item">Medical Equipment & Laboratory Tools</div>
				<div class="equipment-item">Fuel Depots & Storage Tanks</div>
				<div class="equipment-item">Brewery and Bottling Plant Equipment</div>
				<div class="equipment-item">Telecommunications Towers & Support Gear</div>
			</div>
		</div>
	</section>

	<!-- Report Contents -->
	<section class="report-section">
		<div class="container">
			<div class="section-header">
				<h2>📝 What Our Valuation Report Includes:</h2>
			</div>
			<div class="report-list">
				<div class="report-item">Full Asset Inventory</div>
				<div class="report-item">Physical Inspection Summary</div>
				<div class="report-item">Technical Asset Descriptions</div>
				<div class="report-item">Age, Condition & Residual Life Estimates</div>
				<div class="report-item">Replacement & Depreciated Values</div>
				<div class="report-item">Market Comparables (where applicable)</div>
				<div class="report-item">Insurance & Reinstatement Values</div>
				<div class="report-item">Final Value Opinion from Certified Valuer</div>
				<div class="report-item">Photographic Evidence & Tag Numbers (if tagged)</div>
			</div>
		</div>
	</section>

	<!-- International Experience -->
	<section class="international-section">
		<div class="container">
			<div class="section-header">
				<h2>🌍 International Experience:</h2>
			</div>
			<div class="international-content">
				<p>We've conducted plant & machinery valuations for projects in:</p>
				<div class="countries-grid">
					<div class="country-item">Malawi</div>
					<div class="country-item">Botswana</div>
					<div class="country-item">Zimbabwe</div>
					<div class="country-item">Kenya</div>
					<div class="country-item">Tanzania</div>
					<div class="country-item">Ethiopia</div>
				</div>
				<p>For major firms like Tanzania Breweries, National Oil Company of Malawi, East African Breweries, and more.</p>
			</div>
		</div>
	</section>

	<!-- Who Needs These -->
	<section class="clients-section">
		<div class="container">
			<div class="section-header">
				<h2>🤝 Who Needs These Valuations?</h2>
			</div>
			<div class="clients-grid">
				<div class="client-item">Manufacturing Companies</div>
				<div class="client-item">Construction & Civil Engineering Firms</div>
				<div class="client-item">Breweries and Food Processors</div>
				<div class="client-item">Hospitals & Healthcare Facilities</div>
				<div class="client-item">Hotels and Hospitality Groups</div>
				<div class="client-item">Fuel Storage & Distribution Companies</div>
				<div class="client-item">Government Departments</div>
				<div class="client-item">NGOs and Embassies</div>
			</div>
		</div>
	</section>

	<!-- Why Choose Us -->
	<section class="why-section">
		<div class="container">
			<div class="section-header">
				<h2>🛡️ Why Choose Terrestrial?</h2>
			</div>
			<div class="benefits-list">
				<div class="benefit-item">Chartered Valuation Experts</div>
				<div class="benefit-item">Over 10 years of experience across industries</div>
				<div class="benefit-item">International partnerships (e.g., INTERVAL Botswana)</div>
				<div class="benefit-item">Compliant with professional and statutory standards</div>
				<div class="benefit-item">Fast turnaround and clear reporting</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<ScrollAnimation animationType="fade-up" delay={600}>
		<section class="cta-section">
			<div class="container">
				<div class="cta-content">
					<h2>Need Professional Plant & Machinery Valuation?</h2>
					<p>Contact our expert team today for specialized industrial asset valuations</p>
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

	.importance-section,
	.equipment-section,
	.report-section,
	.international-section,
	.clients-section,
	.why-section {
		padding: var(--spacing-16) 0;
		background: linear-gradient(135deg, rgba(147, 199, 80, 0.05) 0%, rgba(147, 199, 80, 0.1) 100%);
	}

	.importance-section:nth-child(even),
	.equipment-section:nth-child(even),
	.report-section:nth-child(even),
	.international-section:nth-child(even),
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
		max-width: 1000px;
		margin: 0 auto;
		text-align: center;
	}

	.importance-content p {
		font-size: var(--text-lg);
		color: var(--foreground);
		line-height: 1.6;
		margin-bottom: var(--spacing-6);
	}

	.importance-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-4);
	}

	.importance-item {
		background: rgba(147, 199, 80, 0.1);
		padding: var(--spacing-4);
		border-radius: var(--radius);
		border-left: 4px solid var(--tcp-primary);
		font-weight: 500;
	}

	.equipment-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-3);
		max-width: 1000px;
		margin: 0 auto;
	}

	.equipment-item {
		background: var(--background);
		padding: var(--spacing-3);
		border-radius: var(--radius);
		border: 1px solid var(--border);
		font-weight: 500;
	}

	.report-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-3);
		max-width: 1000px;
		margin: 0 auto;
	}

	.report-item {
		background: rgba(147, 199, 80, 0.1);
		padding: var(--spacing-3);
		border-radius: var(--radius);
		border-left: 4px solid var(--tcp-primary);
		font-weight: 500;
	}

	.international-content {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}

	.international-content p {
		font-size: var(--text-lg);
		color: var(--foreground);
		line-height: 1.6;
		margin-bottom: var(--spacing-6);
	}

	.countries-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: var(--spacing-3);
		margin-bottom: var(--spacing-6);
	}

	.country-item {
		background: var(--tcp-primary);
		color: white;
		padding: var(--spacing-3);
		border-radius: var(--radius);
		font-weight: 500;
		text-align: center;
	}

	.clients-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--spacing-4);
		max-width: 1000px;
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

		.importance-grid,
		.equipment-list,
		.report-list,
		.countries-grid,
		.clients-grid {
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
</style>
