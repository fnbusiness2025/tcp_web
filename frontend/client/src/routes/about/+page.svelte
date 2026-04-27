<script>
	import { onMount } from 'svelte';
	import ScrollAnimation from '$lib/ScrollAnimation.svelte';
	import Navigation from '$lib/Navigation.svelte';
</script>

<svelte:head>
	<title>About Us - Terrestrial Property Consulting Limited | TCP Malawi</title>
	<meta name="description" content="Learn about Terrestrial Property Consulting Limited - our vision, mission, core values, and legacy of professionalism in real estate services in Malawi." />
</svelte:head>

<Navigation currentPage="about" />

<!-- Main Content -->
<main>
	<!-- Hero Section -->
	<section class="about-hero">
		<div class="hero-background">
			<img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=600&fit=crop&auto=format" alt="Professional building" class="hero-image" />
			<div class="hero-overlay"></div>
		</div>
		<div class="container">
			<div class="hero-content">
				<div class="hero-badge">About TCP Malawi</div>
				<h1>Terrestrial Property Consulting Limited</h1>
				<p class="hero-subtitle">Leading the way in professional real estate services across Malawi with integrity, expertise, and excellence.</p>
			</div>
		</div>
	</section>

	<!-- Company Overview -->
	<ScrollAnimation animationType="fade-up" delay={200}>
		<section class="overview-section">
			<div class="container">
				<div class="overview-content">
					<div class="overview-text">
						<h2>Who We Are</h2>
						<p>Terrestrial Property Consulting Limited (TCP Malawi) is a premier property consulting firm dedicated to providing exceptional real estate services throughout Malawi. With years of expertise in the local market, we combine deep industry knowledge with innovative solutions to deliver outstanding results for our clients.</p>
						<p>Our team of experienced professionals is committed to maintaining the highest standards of integrity, professionalism, and client service in every transaction and consultation.</p>
					</div>
					<div class="overview-stats">
						<div class="stat-item">
							<div class="stat-number">10+</div>
							<div class="stat-label">Years Experience</div>
						</div>
						<div class="stat-item">
							<div class="stat-number">500+</div>
							<div class="stat-label">Properties Valued</div>
						</div>
						<div class="stat-item">
							<div class="stat-number">100%</div>
							<div class="stat-label">Client Satisfaction</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</ScrollAnimation>

	<!-- Vision & Mission -->
	<ScrollAnimation animationType="fade-up" delay={300}>
		<section class="vision-mission-section">
			<div class="container">
				<div class="vm-grid">
					<div class="vm-card vision-card">
						<div class="vm-icon">👁️</div>
						<h3>Our Vision</h3>
						<p>To be the distinguished mark of property professionals in Malawi, setting the standard for excellence and innovation in real estate consulting.</p>
					</div>
					<div class="vm-card mission-card">
						<div class="vm-icon">🎯</div>
						<h3>Our Mission</h3>
						<p>Providing first-class real estate services by applying exceptional property skills, ensuring client success through professional expertise and unwavering commitment.</p>
					</div>
				</div>
			</div>
		</section>
	</ScrollAnimation>

	<!-- Core Values -->
	<ScrollAnimation animationType="fade-up" delay={400}>
		<section class="values-section">
			<div class="container">
				<div class="section-header">
					<h2>Our Core Values</h2>
					<p>The fundamental principles that guide our business and define our commitment to excellence</p>
				</div>
				
				<div class="values-grid">
					<div class="value-card">
						<div class="value-icon-wrapper">
							<div class="value-icon">🤝</div>
						</div>
						<h3>Integrity</h3>
						<p>We conduct business with unwavering honesty and transparency in all our dealings, building trust through ethical practices.</p>
					</div>
					
					<div class="value-card">
						<div class="value-icon-wrapper">
							<div class="value-icon">👔</div>
						</div>
						<h3>Professionalism</h3>
						<p>We maintain the highest standards of professional conduct and expertise, delivering services with precision and reliability.</p>
					</div>
					
					<div class="value-card">
						<div class="value-icon-wrapper">
							<div class="value-icon">⭐</div>
						</div>
						<h3>Excellence</h3>
						<p>We strive for excellence in every service we deliver, continuously improving and exceeding client expectations.</p>
					</div>
					
					<div class="value-card">
						<div class="value-icon-wrapper">
							<div class="value-icon">🎯</div>
						</div>
						<h3>Client Focus</h3>
						<p>We put our clients' needs at the center of everything we do, ensuring personalized solutions and exceptional service.</p>
					</div>
					
					<div class="value-card">
						<div class="value-icon-wrapper">
							<div class="value-icon">💡</div>
						</div>
						<h3>Innovation</h3>
						<p>We embrace innovative solutions and modern approaches to meet evolving real estate challenges in Malawi.</p>
					</div>
					
					<div class="value-card">
						<div class="value-icon-wrapper">
							<div class="value-icon">�</div>
						</div>
						<h3>Sustainability</h3>
						<p>We promote sustainable development practices that benefit our clients and contribute to Malawi's future growth.</p>
					</div>
				</div>
			</div>
		</section>
	</ScrollAnimation>

	<!-- CTA Section -->
	<ScrollAnimation animationType="fade-up" delay={600}>
		<section class="cta-section">
			<div class="container">
				<div class="cta-content">
					<h2>Partner With Malawi's Property Experts</h2>
					<p>Experience the difference of working with a team that combines local expertise with international standards of excellence.</p>
					<div class="cta-buttons">
						<a href="/contact" class="btn btn-primary btn-large">Get Started Today</a>
						<a href="/services" class="btn btn-secondary btn-large">Our Services</a>
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
		max-width: 600px;
		margin: 0 auto;
		opacity: 0.9;
	}

	/* Overview Section */
	.overview-section {
		padding: var(--spacing-20) 0;
		background: var(--background);
	}

	.overview-content {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--spacing-16);
		align-items: center;
	}

	.overview-text h2 {
		font-size: var(--text-3xl);
		font-weight: 700;
		color: var(--foreground);
		margin-bottom: var(--spacing-6);
	}

	.overview-text p {
		font-size: var(--text-base);
		line-height: 1.7;
		color: var(--muted-foreground);
		margin-bottom: var(--spacing-4);
	}

	.overview-stats {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-6);
	}

	.stat-item {
		text-align: center;
		padding: var(--spacing-6);
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		border-radius: var(--radius-lg);
		color: white;
	}

	.stat-number {
		font-size: var(--text-3xl);
		font-weight: 700;
		margin-bottom: var(--spacing-2);
	}

	.stat-label {
		font-size: var(--text-sm);
		opacity: 0.9;
	}

	/* Vision & Mission Section */
	.vision-mission-section {
		padding: var(--spacing-20) 0;
		background: #f8fafc;
	}

	.vm-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-8);
	}

	.vm-card {
		padding: var(--spacing-8);
		background: white;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
		text-align: center;
		transition: all 0.3s ease;
	}

	.vm-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-xl);
	}

	.vm-icon {
		font-size: var(--text-4xl);
		margin-bottom: var(--spacing-4);
	}

	.vm-card h3 {
		font-size: var(--text-xl);
		font-weight: 600;
		margin-bottom: var(--spacing-4);
		color: var(--foreground);
	}

	.vm-card p {
		font-size: var(--text-base);
		line-height: 1.6;
		color: var(--muted-foreground);
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
		background: var(--background);
	}

	.section-header {
		text-align: center;
		margin-bottom: var(--spacing-16);
	}

	.section-header p {
		font-size: var(--text-lg);
		color: var(--muted-foreground);
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.values-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--spacing-6);
	}

	.value-card {
		padding: var(--spacing-8);
		background: white;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
		text-align: center;
		transition: all 0.3s ease;
		border: 1px solid var(--border);
	}

	.value-icon-wrapper {
		width: 80px;
		height: 80px;
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto var(--spacing-4);
	}

	.value-icon {
		font-size: var(--text-2xl);
	}

	.value-card h3 {
		font-size: var(--text-xl);
		font-weight: 600;
		margin-bottom: var(--spacing-3);
		color: var(--foreground);
	}

	.value-card p {
		font-size: var(--text-base);
		line-height: 1.6;
		color: var(--muted-foreground);
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

	
	/* CTA Section */
	.cta-section {
		padding: var(--spacing-20) 0;
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		text-align: center;
	}

	.cta-content {
		max-width: 600px;
		margin: 0 auto;
	}

	.cta-content h2 {
		font-size: var(--text-3xl);
		font-weight: 600;
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
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		
		.hero-content h1 {
			font-size: var(--text-3xl);
		}

		.hero-subtitle {
			font-size: var(--text-lg);
		}

		.overview-content {
			grid-template-columns: 1fr;
			gap: var(--spacing-8);
		}

		.vm-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-6);
		}

		.values-grid {
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			gap: var(--spacing-4);
		}

		.value-card {
			padding: var(--spacing-6);
		}

		.cta-content h2 {
			font-size: var(--text-2xl);
		}

		.cta-buttons {
			flex-direction: column;
			gap: var(--spacing-3);
		}

		.btn-large {
			width: 100%;
			text-align: center;
		}

		.overview-stats {
			flex-direction: column;
			gap: var(--spacing-4);
		}

		.value-icon-wrapper {
			width: 60px;
			height: 60px;
		}

		.value-icon {
			font-size: var(--text-xl);
		}

		.cta-content h2 {
			font-size: var(--text-xl);
		}
	}
</style>
