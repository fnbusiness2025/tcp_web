<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import ScrollAnimation from '$lib/ScrollAnimation.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';

	let heroVisible = false;

	onMount(() => {
		// Trigger hero animations
		setTimeout(() => {
			heroVisible = true;
		}, 300);
	});
</script>

<svelte:head>
	<title>TCP Malawi - Terrestrial Property Consulting Limited</title>
	<meta name="description" content="TPC Malawi - Find trusted property opportunities in Malawi. Discover land and real estate with confidence, transparency, and clarity." />
</svelte:head>

<Navigation currentPage="home" />

<!-- Main Content -->
<main>
	<!-- Hero Section (MAIN FOCUS) -->
	<section id="home" class="hero">
		<div class="hero-background">
			<div class="hero-overlay"></div>
			<div class="animated-particles">
				<div class="particle-1"></div>
				<div class="particle-2"></div>
				<div class="particle-3"></div>
			</div>
			<div class="floating-shapes">
				<div class="shape shape-1"></div>
				<div class="shape shape-2"></div>
				<div class="shape shape-3"></div>
				<div class="shape shape-4"></div>
				<div class="shape shape-5"></div>
				<div class="shape shape-6"></div>
			</div>
		</div>
		<div class="container">
			<div class="hero-content">
				<!-- TCP Malawi Title -->
				<h1 class="hero-title-simple fade-in" class:visible={heroVisible} style="animation-delay: 0.2s;">
					Terrestrial Property Consulting Limited
				</h1>
				
				<!-- Services in Hero - Single Row -->
				<div class="hero-services-single-row fade-in" class:visible={heroVisible} style="animation-delay: 0.4s;">
					<div class="hero-services-grid-single">
						<div class="hero-service-item">
							<div class="hero-service-icon">🏷️</div>
							<h4>Asset Tagging & Tracking</h4>
							<p>Comprehensive asset tagging and tracking solutions designed to improve inventory accuracy, prevent asset loss</p>
						</div>
						<div class="hero-service-item">
							<div class="hero-service-icon">🏭</div>
							<h4>Plant & Machinery Valuations</h4>
							<p>Specialized Valuation for Industrial and Commercial Assets with professional and reliable valuation services</p>
						</div>
						<div class="hero-service-item">
							<div class="hero-service-icon">🏢</div>
							<h4>Property Management</h4>
							<p>End-to-end property management services that give you peace of mind, knowing your investment</p>
						</div>
						<div class="hero-service-item">
							<div class="hero-service-icon">📊</div>
							<h4>Property Valuations</h4>
							<p>Accurate, Reliable, Professional Valuation Services with comprehensive property valuation services tailored</p>
						</div>
					</div>
				</div>
				<div class="hero-services-button-container">
					<a href="/services" class="hero-services-link">View Services →</a>
				</div>
			</div>
		</div>
		
		<div class="scroll-indicator fade-in" class:visible={heroVisible} style="animation-delay: 0.6s;">
			<div class="scroll-text">Scroll to explore</div>
			<div class="scroll-arrow">↓</div>
		</div>
	</section>

	
	<!-- Featured Properties -->
	<ScrollAnimation animationType="fade-up" delay={200}>
		<section id="listings" class="featured">
			<div class="container">
				<div class="featured-header">
					<h2>Featured Properties</h2>
				</div>
			<div class="properties-grid">
				<div class="property-card card">
					<div class="property-image">
						<img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop" alt="Property" />
					</div>
					<div class="property-content">
						<div class="property-location">📍 Lilongwe City Center</div>
						<div class="property-price">MWK 45,000,000</div>
					</div>
				</div>
				
				<div class="property-card card">
					<div class="property-image">
						<img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop" alt="Property" />
					</div>
					<div class="property-content">
						<div class="property-location">📍 Blantyre Commercial</div>
						<div class="property-price">MWK 32,500,000</div>
					</div>
				</div>
				
				<div class="property-card card">
					<div class="property-image">
						<img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop" alt="Property" />
					</div>
					<div class="property-content">
						<div class="property-location">📍 Lake Malawi Shore</div>
						<div class="property-price">MWK 28,750,000</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	</ScrollAnimation>

	<!-- Trust Line / Value Statement -->
	<ScrollAnimation animationType="fade-up" delay={400}>
		<section class="trust">
			<div class="container">
				<div class="trust-content">
					<div class="company-name">TPC Malawi</div>
					<p>Trusted by landowners, investors, and property seekers across Malawi.</p>
				<div class="trust-icons">
					<div class="trust-item">
						<div class="trust-icon">✓</div>
						<span>Verified listings</span>
					</div>
					<div class="trust-item">
						<div class="trust-icon">✓</div>
						<span>Transparent pricing</span>
					</div>
					<div class="trust-item">
						<div class="trust-icon">✓</div>
						<span>Trusted insights</span>
					</div>
				</div>
			</div>
		</section>
	</ScrollAnimation>

	
	</main>

<Footer />

<style>

	/* Hero Section */
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden;
		padding-top: 72px;
	}

	.hero-background {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		z-index: -3;
		animation: heroZoom 20s ease-in-out infinite alternate;
	}

	@keyframes heroZoom {
		0% { transform: scale(1); }
		100% { transform: scale(1.1); }
	}

	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(147, 199, 80, 0.2) 100%);
		z-index: -2;
	}

	/* Enhanced Animated Particles */
	.animated-particles {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		overflow: hidden;
	}

	.animated-particles::before,
	.animated-particles::after {
		content: '';
		position: absolute;
		width: 6px;
		height: 6px;
		background: linear-gradient(45deg, rgba(255, 255, 255, 0.8), var(--tcp-primary));
		border-radius: 50%;
		animation: floatUp 12s infinite linear;
		box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
	}

	.animated-particles::before {
		left: 20%;
		animation-delay: 0s;
	}

	.animated-particles::after {
		left: 80%;
		animation-delay: 4s;
	}

	/* Additional floating particles */
	.animated-particles .particle-1,
	.animated-particles .particle-2,
	.animated-particles .particle-3 {
		position: absolute;
		width: 3px;
		height: 3px;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 50%;
		animation: floatUp 10s infinite linear;
	}

	.animated-particles .particle-1 {
		left: 35%;
		animation-delay: 2s;
	}

	.animated-particles .particle-2 {
		left: 65%;
		animation-delay: 6s;
	}

	.animated-particles .particle-3 {
		left: 50%;
		animation-delay: 8s;
	}

	@keyframes floatUp {
		0% {
			transform: translateY(100vh) rotate(0deg);
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			transform: translateY(-100vh) rotate(360deg);
			opacity: 0;
		}
	}

	/* Floating Shapes */
	.floating-shapes {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		overflow: hidden;
	}

	.shape {
		position: absolute;
		border-radius: 50%;
		background: linear-gradient(135deg, rgba(25, 135, 84, 0.2), rgba(255, 255, 255, 0.1));
		animation: floatShape 20s infinite ease-in-out;
	}

	.shape-1 {
		width: 100px;
		height: 100px;
		top: 20%;
		left: 10%;
		animation-delay: 0s;
	}

	.shape-2 {
		width: 150px;
		height: 150px;
		top: 60%;
		right: 10%;
		animation-delay: 5s;
	}

	.shape-3 {
		width: 80px;
		height: 80px;
		top: 80%;
		left: 30%;
		animation-delay: 10s;
	}

	.shape-4 {
		width: 120px;
		height: 120px;
		top: 10%;
		right: 30%;
		animation-delay: 15s;
	}

	.shape-5 {
		width: 60px;
		height: 60px;
		top: 40%;
		left: 5%;
		animation-delay: 3s;
	}

	.shape-6 {
		width: 90px;
		height: 90px;
		top: 70%;
		right: 5%;
		animation-delay: 12s;
	}

	@keyframes floatShape {
		0%, 100% {
			transform: translateY(0px) rotate(0deg) scale(1);
		}
		25% {
			transform: translateY(-20px) rotate(90deg) scale(1.1);
		}
		50% {
			transform: translateY(10px) rotate(180deg) scale(0.9);
		}
		75% {
			transform: translateY(-15px) rotate(270deg) scale(1.05);
		}
	}

	.hero-content {
		max-width: 900px;
		text-align: center;
		color: white;
		position: relative;
		z-index: 1;
	}

	/* Hero Badge */
	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-2);
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		padding: var(--spacing-2) var(--spacing-4);
		border-radius: 50px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		margin-bottom: var(--spacing-6);
		font-size: var(--text-sm);
		font-weight: 500;
	}

	.badge-icon {
		font-size: var(--text-base);
	}

	/* Hero Title */
	.hero-title {
		margin-bottom: var(--spacing-6);
		line-height: 1.1;
	}

	.title-line {
		display: block;
		font-size: var(--text-5xl);
		font-weight: 800;
		text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
		margin-bottom: var(--spacing-2);
		color: #ffffff;
	}

	.highlight-text {
		color: var(--tcp-primary);
		text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
		position: relative;
	}

	/* Hero Subtitle */
	.hero-subtitle {
		font-size: var(--text-xl);
		margin-bottom: var(--spacing-6);
		line-height: 1.6;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
		color: rgba(255, 255, 255, 0.95);
	}

	.subtitle-word {
		display: inline-block;
		margin: 0 4px;
		transition: all var(--transition-normal) ease;
		color: rgba(255, 255, 255, 0.95);
	}

	.subtitle-word.highlight {
		color: var(--tcp-primary);
		font-weight: 600;
		transform: scale(1.1);
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
	}

	/* Hero Stats */
	.hero-stats {
		display: flex;
		justify-content: center;
		gap: var(--spacing-6);
		margin-bottom: var(--spacing-6);
	}

	.stat-item {
		text-align: center;
	}

	.stat-number {
		font-size: var(--text-2xl);
		font-weight: 800;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-1);
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
	}

	.stat-label {
		font-size: var(--text-sm);
		color: rgba(255, 255, 255, 0.9);
		text-transform: uppercase;
		letter-spacing: 1px;
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
	}

	/* Hero Features */
	.hero-features {
		display: flex;
		justify-content: center;
		gap: var(--spacing-4);
		margin-top: var(--spacing-4);
	}

	.feature-item {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		font-size: var(--text-sm);
		color: rgba(255, 255, 255, 0.9);
	}

	.feature-icon {
		width: 20px;
		height: 20px;
		background: var(--tcp-primary);
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		font-weight: 600;
	}

	/* Simple Hero Title */
	.hero-title-simple {
		font-size: var(--text-4xl);
		font-weight: 800;
		color: white;
		text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
		margin-bottom: var(--spacing-8);
		text-align: center;
		position: relative;
		display: inline-block;
	}

	.hero-title-simple::after {
		content: '';
		position: absolute;
		bottom: -10px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 3px;
		background: linear-gradient(90deg, transparent, var(--tcp-primary), transparent);
		animation: titleUnderline 2s ease-in-out infinite;
	}

	@keyframes titleUnderline {
		0%, 100% {
			width: 0;
		}
		50% {
			width: 100%;
		}
	}

	/* Hero Services - Single Row */
	.hero-services-single-row {
		text-align: center;
	}

	.hero-services-grid-single {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--spacing-3);
		margin-bottom: var(--spacing-6);
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.hero-service-item {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
		backdrop-filter: blur(15px);
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 12px;
		padding: var(--spacing-4);
		transition: all var(--transition-normal) ease;
		position: relative;
		overflow: hidden;
		height: auto;
		min-height: 220px;
		display: flex;
		flex-direction: column;
	}

	.hero-service-item::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
		transform: rotate(45deg);
		transition: all 0.6s ease;
		opacity: 0;
	}

	.hero-service-item:hover::before {
		animation: shimmer 0.6s ease;
	}

	@keyframes shimmer {
		0% {
			transform: translateX(-100%) translateY(-100%) rotate(45deg);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			transform: translateX(100%) translateY(100%) rotate(45deg);
			opacity: 0;
		}
	}

	.hero-service-item:hover {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1));
		transform: translateY(-8px) scale(1.02);
		box-shadow: 0 20px 40px rgba(25, 135, 84, 0.3), 0 0 20px rgba(255, 255, 255, 0.1);
		border-color: var(--tcp-primary);
	}

	.hero-service-icon {
		font-size: 2rem;
		margin-bottom: var(--spacing-2);
		display: block;
		animation: float 3s ease-in-out infinite;
		filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
		transition: transform var(--transition-normal) ease;
	}

	.hero-service-item:hover .hero-service-icon {
		transform: scale(1.1) rotate(5deg);
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-5px);
		}
	}

	.hero-service-item h4 {
		font-size: var(--text-base);
		font-weight: 700;
		margin-bottom: var(--spacing-2);
		color: white;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
		transition: color var(--transition-normal) ease;
		line-height: 1.2;
	}

	.hero-service-item:hover h4 {
		color: var(--tcp-primary);
	}

	.hero-service-item p {
		font-size: var(--text-xs);
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.3;
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
		transition: all var(--transition-normal) ease;
		flex-grow: 1;
	}

	.hero-services-button-container {
		text-align: center;
		margin-top: var(--spacing-16);
	}

	.hero-services-link {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-2);
		color: white;
		font-weight: 500;
		text-decoration: none;
		padding: var(--spacing-2) var(--spacing-4);
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: var(--radius);
		transition: all var(--transition-fast) ease;
	}

	.hero-services-link:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.5);
		gap: var(--spacing-3);
	}

	/* Scroll Indicator */
	.scroll-indicator {
		position: absolute;
		bottom: var(--spacing-10);
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		color: rgba(255, 255, 255, 0.7);
		z-index: 10;
	}

	.scroll-text {
		font-size: var(--text-sm);
		margin-bottom: var(--spacing-2);
	}

	.scroll-arrow {
		font-size: var(--text-xl);
		animation: bounce 2s infinite;
	}

	@keyframes bounce {
		0%, 20%, 50%, 80%, 100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}

	/* Animated Buttons */
	.btn-animated {
		position: relative;
		overflow: hidden;
	}

	.btn-content {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		position: relative;
		z-index: 1;
	}

	.btn-icon {
		transition: transform var(--transition-normal) ease;
	}

	.btn-animated:hover .btn-icon {
		transform: translateX(4px);
	}

	.btn-ripple {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.3);
		transform: translate(-50%, -50%);
		transition: width 0.6s, height 0.6s;
	}

	.btn-animated:hover .btn-ripple {
		width: 300px;
		height: 300px;
	}

	.hero-buttons {
		display: flex;
		gap: var(--spacing-4);
		justify-content: center;
		flex-wrap: wrap;
	}

	.hero-buttons .btn {
		color: white;
		border-color: white;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		border: 2px solid rgba(255, 255, 255, 0.8);
		font-weight: 600;
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
	}

	.hero-buttons .btn-primary {
		background: var(--tcp-primary);
		border-color: var(--tcp-primary);
		box-shadow: 0 4px 12px rgba(25, 135, 84, 0.4);
	}

	.hero-buttons .btn-primary:hover {
		background: var(--tcp-primary-dark);
		border-color: var(--tcp-primary-dark);
		box-shadow: 0 6px 16px rgba(25, 135, 84, 0.6);
		transform: translateY(-2px);
	}

	.hero-buttons .btn-secondary {
		background: rgba(255, 255, 255, 0.15);
		border-color: rgba(255, 255, 255, 0.9);
	}

	.hero-buttons .btn-secondary:hover {
		background: rgba(255, 255, 255, 0.9);
		color: var(--foreground);
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(255, 255, 255, 0.3);
	}

	/* Services Section */
	.services {
		padding: var(--spacing-20) 0;
		background: linear-gradient(135deg, rgba(25, 135, 84, 0.02) 0%, rgba(25, 135, 84, 0.05) 100%);
	}

	.services-header {
		text-align: center;
		margin-bottom: var(--spacing-16);
	}

	.services-header h2 {
		font-size: var(--text-4xl);
		font-weight: 700;
		margin-bottom: var(--spacing-4);
		color: var(--foreground);
	}

	.services-header p {
		font-size: var(--text-lg);
		color: var(--muted-foreground);
		max-width: 600px;
		margin: 0 auto;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--spacing-8);
	}

	.service-card {
		padding: var(--spacing-8);
		text-align: left;
		border: 1px solid var(--border);
		transition: all var(--transition-fast) ease;
		position: relative;
		overflow: hidden;
	}

	.service-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, var(--tcp-primary), var(--tcp-primary-dark));
		transform: scaleX(0);
		transition: transform var(--transition-normal) ease;
	}

	.service-card:hover::before {
		transform: scaleX(1);
	}

	.service-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-xl);
		border-color: var(--tcp-primary);
	}

	.service-icon {
		font-size: 3rem;
		margin-bottom: var(--spacing-4);
		display: block;
	}

	.service-card h3 {
		font-size: var(--text-xl);
		font-weight: 600;
		margin-bottom: var(--spacing-3);
		color: var(--tcp-primary);
	}

	.service-card p {
		color: var(--muted-foreground);
		margin-bottom: var(--spacing-4);
		line-height: 1.6;
	}

	.service-card ul {
		list-style: none;
		padding: 0;
		margin-bottom: var(--spacing-6);
	}

	.service-card li {
		padding: var(--spacing-2) 0;
		color: var(--foreground);
		position: relative;
		padding-left: var(--spacing-4);
		font-size: var(--text-sm);
	}

	.service-card li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--tcp-primary);
		font-weight: bold;
	}

	.service-link {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-2);
		color: var(--tcp-primary);
		font-weight: 500;
		text-decoration: none;
		transition: all var(--transition-fast) ease;
	}

	.service-link:hover {
		gap: var(--spacing-3);
		color: var(--tcp-primary-dark);
	}

	/* Featured Section */
	.featured {
		padding: var(--spacing-20) 0;
		background: linear-gradient(135deg, rgba(25, 135, 84, 0.05) 0%, rgba(25, 135, 84, 0.1) 100%);
	}

	.featured-header {
		text-align: center;
		margin-bottom: var(--spacing-12);
	}

	.featured-header h2 {
		font-size: var(--text-3xl);
		font-weight: 600;
		color: var(--foreground);
	}

	.properties-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: var(--spacing-8);
		max-width: 1000px;
		margin: 0 auto;
	}

	.property-card {
		transition: all var(--transition-fast) ease;
		cursor: pointer;
		border: 1px solid transparent;
	}

	.property-card:hover {
		transform: translateY(-8px);
		box-shadow: var(--shadow-xl);
		border-color: var(--tcp-primary);
	}

	.property-image {
		width: 100%;
		height: 200px;
		overflow: hidden;
	}

	.property-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--transition-slow) ease;
	}

	.property-card:hover .property-image img {
		transform: scale(1.05);
	}

	.property-content {
		padding: var(--spacing-4);
	}

	.property-location {
		font-size: var(--text-sm);
		color: var(--muted-foreground);
		margin-bottom: var(--spacing-2);
	}

	.property-price {
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--tcp-primary);
	}

	/* Trust Section */
	.trust {
		padding: var(--spacing-16) 0;
		background: linear-gradient(135deg, rgba(25, 135, 84, 0.02) 0%, rgba(25, 135, 84, 0.05) 100%);
	}

	.trust-content {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.trust-content > p {
		font-size: var(--text-xl);
		font-weight: 500;
		color: var(--foreground);
		margin-bottom: var(--spacing-4);
	}

	.trust-content .company-name {
		font-size: var(--text-2xl);
		font-weight: 700;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-6);
	}

	.trust-icons {
		display: flex;
		justify-content: center;
		gap: var(--spacing-12);
		flex-wrap: wrap;
	}

	.trust-item {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		font-size: var(--text-base);
		color: var(--muted-foreground);
	}

	.trust-icon {
		width: 24px;
		height: 24px;
		background: var(--tcp-success);
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--text-sm);
		font-weight: 600;
	}

	/* Final CTA Section */
	.final-cta {
		padding: var(--spacing-20) 0;
		background: var(--tcp-primary);
		color: white;
		text-align: center;
	}

	.cta-content h2 {
		font-size: var(--text-4xl);
		font-weight: 600;
		margin-bottom: var(--spacing-8);
	}

	.cta-buttons {
		display: flex;
		gap: var(--spacing-4);
		justify-content: center;
		flex-wrap: wrap;
	}

	.cta-buttons .btn {
		background: white;
		color: var(--tcp-primary);
		border-color: white;
	}

	.cta-buttons .btn-primary {
		background: white;
		color: var(--tcp-primary);
	}

	.cta-buttons .btn-secondary {
		background: transparent;
		color: white;
		border-color: white;
	}

	.cta-buttons .btn-secondary:hover {
		background: white;
		color: var(--tcp-primary);
	}

	/* Basic hover effects */
	.property-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
		transition: all 0.3s ease;
	}

	.trust-item:hover {
		transform: translateY(-2px);
		transition: all 0.3s ease;
	}

	.trust-item:hover .trust-icon {
		background: var(--tcp-primary-dark);
		transform: scale(1.1);
		transition: all 0.3s ease;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.hero-title-simple {
			font-size: var(--text-3xl);
		}

		.hero-services-grid-single {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--spacing-2);
		}

		.hero-service-item {
			padding: var(--spacing-3);
			height: auto;
			min-height: 200px;
		}

		.hero-service-item h4 {
			font-size: var(--text-sm);
		}

		.hero-service-item p {
			font-size: 10px;
		}

		
		.properties-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-6);
		}

		.trust-icons {
			flex-direction: column;
			gap: var(--spacing-4);
		}

		.cta-content h2 {
			font-size: var(--text-3xl);
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}

		.footer-content {
			flex-direction: column;
			text-align: center;
		}

		.featured {
			padding: var(--spacing-16) 0;
		}

		.trust {
			padding: var(--spacing-12) 0;
		}

		.final-cta {
			padding: var(--spacing-16) 0;
		}
	}

	@media (max-width: 480px) {
		.hero-title {
			font-size: var(--text-3xl);
		}

		.featured-header h2 {
			font-size: var(--text-2xl);
		}

		.cta-content h2 {
			font-size: var(--text-2xl);
		}
	}
</style>
