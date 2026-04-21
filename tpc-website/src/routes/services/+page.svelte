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
	<section class="services-hero">
		<div class="container">
			<div class="hero-content">
				<h1>Our Professional Services</h1>
				<p class="hero-subtitle">Comprehensive property solutions tailored to your needs</p>
			</div>
		</div>
	</section>

	<!-- Services Overview -->
	<section class="services-overview">
		<div class="container">
			<div class="overview-grid">
				<a href="/services/property-valuations" class="overview-card">
					<div class="overview-icon">📊</div>
					<h3>Property Valuations</h3>
					<p>Accurate, Reliable, Professional Valuation Services</p>
					<div class="overview-arrow">→</div>
				</a>
				
				<a href="/services/plant-machinery-valuations" class="overview-card">
					<div class="overview-icon">🏭</div>
					<h3>Plant & Machinery Valuations</h3>
					<p>Specialized Valuation for Industrial and Commercial Assets</p>
					<div class="overview-arrow">→</div>
				</a>
				
				<a href="/services/asset-tagging-tracking" class="overview-card">
					<div class="overview-icon">🏷️</div>
					<h3>Asset Tagging & Tracking</h3>
					<p>Comprehensive asset tagging and tracking solutions</p>
					<div class="overview-arrow">→</div>
				</a>
				
				<a href="/services/property-management" class="overview-card">
					<div class="overview-icon">🏢</div>
					<h3>Property Management</h3>
					<p>End-to-end property management services</p>
					<div class="overview-arrow">→</div>
				</a>
			</div>
		</div>
	</section>

	<!-- Property Valuations Section -->
	<section class="service-detail" id="valuations">
		<div class="container">
			<div class="service-header">
				<div class="service-icon">📊</div>
				<h2>Property Valuations</h2>
				<p class="service-tagline">Accurate, Reliable, Professional Valuation Services</p>
			</div>
			
			<div class="service-content">
				<div class="service-intro">
					<p>At Terrestrial Property Consulting Limited, we offer comprehensive property valuation services tailored to meet a variety of client needs — from individuals and businesses to government institutions and NGOs.</p>
					<p>With over a decade of industry experience and a team of registered valuation surveyors, we deliver valuation reports that adhere to local laws and international standards, including IFRS compliance where required.</p>
				</div>

				<div class="service-section">
					<h3>🔍 Why Property Valuation Matters:</h3>
					<p>Valuation plays a critical role in financial planning, decision-making, legal compliance, and risk management. Whether you're selling, buying, investing, or insuring a property — a professional valuation gives you a clear, evidence-based picture of the asset's true worth.</p>
				</div>

				<div class="service-section">
					<h3>✅ Types of Valuations We Offer:</h3>
					<div class="service-list">
						<div class="list-item">
							<span class="list-icon">📋</span>
							<div>
								<strong>Loan Security Valuations:</strong> For mortgage purposes and collateral verification by banks and financial institutions.
							</div>
						</div>
						<div class="list-item">
							<span class="list-icon">🛡️</span>
							<div>
								<strong>Insurance Valuations:</strong> To determine appropriate cover for buildings and assets in case of damage or loss.
							</div>
						</div>
						<div class="list-item">
							<span class="list-icon">📜</span>
							<div>
								<strong>Estate Duty & Inheritance:</strong> For probate, estate distribution, or legal inheritance proceedings.
							</div>
						</div>
						<div class="list-item">
							<span class="list-icon">💰</span>
							<div>
								<strong>Tax Clearance & Capital Gains:</strong> For submission to the Malawi Revenue Authority or in tax compliance cases.
							</div>
						</div>
						<div class="list-item">
							<span class="list-icon">📊</span>
							<div>
								<strong>Accounting & Financial Reporting:</strong> For asset revaluation, IFRS reporting, or balance sheet inclusion.
							</div>
						</div>
						<div class="list-item">
							<span class="list-icon">🤝</span>
							<div>
								<strong>Shareholding & Business Valuations:</strong> In support of mergers, acquisitions, or corporate restructuring.
							</div>
						</div>
						<div class="list-item">
							<span class="list-icon">💼</span>
							<div>
								<strong>Sale & Purchase Negotiations:</strong> To determine fair market value before buying or selling a property.
							</div>
						</div>
					</div>
				</div>

				<div class="service-section">
					<h3>📊 What You Get in Our Valuation Report:</h3>
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

				<div class="service-section">
					<h3>🌍 Who We Work With:</h3>
					<div class="client-grid">
						<div class="client-item">Commercial banks</div>
						<div class="client-item">Insurance companies</div>
						<div class="client-item">NGOs and Embassies</div>
						<div class="client-item">Legal professionals</div>
						<div class="client-item">Government departments</div>
						<div class="client-item">Individual property owners</div>
					</div>
				</div>

				<div class="service-section">
					<h3>🏅 Why Choose Us?</h3>
					<div class="benefits-list">
						<div class="benefit-item">Licensed & Registered Valuers (SIM & Valuers Board)</div>
						<div class="benefit-item">Over 15 years of experience in Malawi & beyond</div>
						<div class="benefit-item">Reports that meet legal, financial & compliance needs</div>
						<div class="benefit-item">Fast turnaround time & professional presentation</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Plant & Machinery Valuations Section -->
	<section class="service-detail" id="machinery">
		<div class="container">
			<div class="service-header">
				<div class="service-icon">🏭</div>
				<h2>Plant & Machinery Valuations</h2>
				<p class="service-tagline">Specialized Valuation for Industrial and Commercial Assets</p>
			</div>
			
			<div class="service-content">
				<div class="service-intro">
					<p>At Terrestrial Property Consulting Limited, we offer professional and reliable valuation services for plant, machinery, and other fixed industrial assets. Our team includes qualified Chartered Plant & Machinery Valuation Surveyors, ensuring your reports meet both local and international standards.</p>
				</div>

				<div class="service-section">
					<h3>⚙️ Why Plant & Machinery Valuation is Important:</h3>
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

				<div class="service-section">
					<h3>🔧 What We Value:</h3>
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

				<div class="service-section">
					<h3>📝 What Our Valuation Report Includes:</h3>
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

				<div class="service-section">
					<h3>🌍 International Experience:</h3>
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

				<div class="service-section">
					<h3>🤝 Who Needs These Valuations?</h3>
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

				<div class="service-section">
					<h3>🛡️ Why Choose Terrestrial?</h3>
					<div class="benefits-list">
						<div class="benefit-item">Chartered Valuation Experts</div>
						<div class="benefit-item">Over 10 years of experience across industries</div>
						<div class="benefit-item">International partnerships (e.g., INTERVAL Botswana)</div>
						<div class="benefit-item">Compliant with professional and statutory standards</div>
						<div class="benefit-item">Fast turnaround and clear reporting</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Asset Tagging & Tracking Section -->
	<section class="service-detail" id="tagging">
		<div class="container">
			<div class="service-header">
				<div class="service-icon">🏷️</div>
				<h2>Asset Tagging & Tracking</h2>
				<p class="service-tagline">Comprehensive asset tagging and tracking solutions</p>
			</div>
			
			<div class="service-content">
				<div class="service-intro">
					<p>At Terrestrial Property Consulting Limited, we offer comprehensive asset tagging and tracking solutions designed to improve inventory accuracy, prevent asset loss, and ensure seamless asset audits for both small businesses and large organizations.</p>
				</div>

				<div class="service-section">
					<h3>🔖 What We Do</h3>
					<div class="process-grid">
						<div class="process-item">
							<div class="process-icon">🏷️</div>
							<h4>Supply of High-Quality Asset Tags</h4>
							<p>We provide anodized aluminum barcodes that are indelible, scratch-resistant, and built to withstand extreme climate conditions — ideal for Malawian and African environments.</p>
						</div>
						<div class="process-item">
							<div class="process-icon">🔍</div>
							<h4>Tagging & Physical Verification</h4>
							<p>Our expert team conducts on-site physical audits of all organizational assets. Every verified item is tagged with a permanent barcode for tracking and monitoring.</p>
						</div>
						<div class="process-item">
							<div class="process-icon">💻</div>
							<h4>Asset Management Software Integration</h4>
							<p>We supply and configure asset management software and handheld hardware to allow real-time tracking and reconciliation. Integration with your existing fixed asset register ensures smooth transition and minimal disruption.</p>
						</div>
						<div class="process-item">
							<div class="process-icon">📊</div>
							<h4>Register Reconciliation & Reporting</h4>
							<p>We reconcile physical assets with your internal records. Final reports include updated registers, reconciliation notes, asset condition summaries, and recommendations.</p>
						</div>
					</div>
				</div>

				<div class="service-section">
					<h3>🧾 Benefits of Our Tagging Services</h3>
					<div class="benefits-grid">
						<div class="benefit-card">
							<div class="benefit-icon">👻</div>
							<h4>Eliminate Ghost Assets</h4>
							<p>Remove phantom assets from your records and reduce losses</p>
						</div>
						<div class="benefit-card">
							<div class="benefit-icon">📱</div>
							<h4>Effortless Tracking</h4>
							<p>Enable real-time tracking and seamless auditing</p>
						</div>
						<div class="benefit-card">
							<div class="benefit-icon">📋</div>
							<h4>IFRS Compliance</h4>
							<p>Prepare for international accounting standards compliance</p>
						</div>
						<div class="benefit-card">
							<div class="benefit-icon">🎯</div>
							<h4>Better Decision Making</h4>
							<p>Improve decisions through accurate asset visibility</p>
						</div>
					</div>
				</div>

				<div class="service-section">
					<h3>🌍 Trusted by Major Clients</h3>
					<p>We've delivered large-scale asset tagging projects for:</p>
					<div class="client-showcase">
						<div class="showcase-item">Ministry of Health</div>
						<div class="showcase-item">Meatco Limited</div>
						<div class="showcase-item">Sunbird Hotels</div>
						<div class="showcase-item">National Oil Company of Malawi</div>
						<div class="showcase-item">Southern Region Water Board</div>
					</div>
				</div>

				<div class="service-section">
					<h3>✅ Why Choose Us?</h3>
					<div class="benefits-list">
						<div class="benefit-item">Use of durable, tamper-proof tags</div>
						<div class="benefit-item">Local and international expertise</div>
						<div class="benefit-item">Full-service approach from supply to software to reconciliation</div>
						<div class="benefit-item">Cost-effective and scalable for any organization</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Property Management Section -->
	<section class="service-detail" id="management">
		<div class="container">
			<div class="service-header">
				<div class="service-icon">🏢</div>
				<h2>Property Management</h2>
				<p class="service-tagline">End-to-end property management services</p>
			</div>
			
			<div class="service-content">
				<div class="service-intro">
					<p>At Terrestrial Property Consulting Limited, we offer end-to-end property management services that give you peace of mind, knowing your investment is in expert hands. Our professional team ensures your property is well-maintained, tenants are satisfied, and your returns are maximized.</p>
				</div>

				<div class="service-section">
					<h3>🏢 What We Manage</h3>
					<div class="property-types">
						<div class="property-type">
							<div class="property-icon">🏠</div>
							<h4>Residential Properties</h4>
							<p>Apartments, houses, estates</p>
						</div>
						<div class="property-type">
							<div class="property-icon">🏬</div>
							<h4>Commercial Buildings</h4>
							<p>Offices, retail centers, mixed-use developments</p>
						</div>
						<div class="property-type">
							<div class="property-icon">🏭</div>
							<h4>Industrial Premises</h4>
							<p>Warehouses, factories, logistics hubs</p>
						</div>
					</div>
				</div>

				<div class="service-section">
					<h3>🔧 Our Services Include:</h3>
					<div class="services-list">
						<div class="service-item">
							<div class="service-item-icon">💰</div>
							<div>
								<h4>Rent Collection & Financial Reporting</h4>
								<p>We ensure timely rent collection and provide clear monthly reports with income and expense breakdowns.</p>
							</div>
						</div>
						<div class="service-item">
							<div class="service-item-icon">👥</div>
							<div>
								<h4>Tenant Management</h4>
								<p>From screening tenants to handling disputes and renewals, we act as the professional link between landlord and tenant.</p>
							</div>
						</div>
						<div class="service-item">
							<div class="service-item-icon">🔧</div>
							<div>
								<h4>Maintenance & Repairs</h4>
								<p>We coordinate all maintenance work through our trusted contractors, ensuring your property remains in top condition.</p>
							</div>
						</div>
						<div class="service-item">
							<div class="service-item-icon">📢</div>
							<div>
								<h4>Vacancy Marketing</h4>
								<p>We market vacant units using both traditional and digital channels to ensure minimal downtime.</p>
							</div>
						</div>
						<div class="service-item">
							<div class="service-item-icon">📄</div>
							<div>
								<h4>Lease Management</h4>
								<p>We handle lease agreements, renewals, compliance with local property laws, and ensure smooth transitions between tenants.</p>
							</div>
						</div>
					</div>
				</div>

				<div class="service-section">
					<h3>📈 Why Our Clients Trust Us</h3>
					<div class="trust-reasons">
						<div class="trust-item">
							<div class="trust-icon">🌍</div>
							<h4>Hands-on local expertise</h4>
							<p>Deep knowledge of Malawi's property market</p>
						</div>
						<div class="trust-item">
							<div class="trust-icon">💬</div>
							<h4>Transparent communication</h4>
							<p>Clear updates for both landlords and tenants</p>
						</div>
						<div class="trust-item">
							<div class="trust-icon">🛠️</div>
							<h4>Modern tools and systems</h4>
							<p>Professional reporting and tracking systems</p>
						</div>
						<div class="trust-item">
							<div class="trust-icon">👨‍💼</div>
							<h4>Expert support</h4>
							<p>Qualified property economists and surveyors</p>
						</div>
					</div>
				</div>

				<div class="service-section">
					<h3>🧾 Who We Serve</h3>
					<p>We manage properties for:</p>
					<div class="client-categories">
						<div class="client-category">Corporate investors</div>
						<div class="client-category">Private landlords</div>
						<div class="client-category">Non-profit organizations</div>
						<div class="client-category">Government departments</div>
					</div>
				</div>

				<div class="service-section">
					<div class="testimonial">
						<div class="testimonial-content">
							<p>"Terrestrial has made owning property stress-free. Their team is responsive, professional, and results-driven."</p>
							<p class="testimonial-author">– Client Testimonial</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="cta-section">
		<div class="container">
			<div class="cta-content">
				<h2>Ready to Get Started?</h2>
				<p>Contact us today to discuss how our professional services can meet your needs</p>
				<div class="cta-buttons">
					<a href="/contact" class="btn btn-primary btn-large">Contact Us</a>
					<a href="/about" class="btn btn-secondary btn-large">Learn More</a>
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

	/* Services Hero */
	.services-hero {
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
</style>
