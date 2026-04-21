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
	<title>Contact Us - Terrestrial Property Consulting Limited | TCP Malawi</title>
	<meta name="description" content="Contact Terrestrial Property Consulting Limited in Blantyre, Malawi. Visit our office at Reunion House or call us for professional property consulting services." />
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
				<li><a href="/services">Services</a></li>
				<li><a href="/#listings">Properties</a></li>
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
			<li><a href="/services" on:click={closeMobileMenu}>Services</a></li>
			<li><a href="/#listings" on:click={closeMobileMenu}>Properties</a></li>
			<li><a href="/contact" class="btn btn-primary" on:click={closeMobileMenu}>Get Started</a></li>
		</ul>
	</div>
</nav>

<!-- Main Content -->
<main>
	<!-- Contact Section -->
	<section class="contact">
		<div class="container">
			<div class="contact-header">
				<h2>Contact Us</h2>
				<p>Get in touch with Terrestrial Property Consulting Limited</p>
			</div>
			
			<div class="contact-content">
				<div class="contact-main">
					<div class="contact-card">
						<div class="contact-logo">
							<img src="/tcp.jpeg" alt="TCP" style="height: 60px; width: auto;" />
							<h3>Terrestrial Property Consulting Limited</h3>
						</div>
						
						<div class="contact-info">
							<div class="contact-item">
								<div class="contact-icon">📍</div>
								<div class="contact-details">
									<h4>Office Address</h4>
									<p>Reunion House, Office No. 22<br>P.O. Box 1883, Blantyre, Malawi</p>
								</div>
							</div>
							
							<div class="contact-item">
								<div class="contact-icon">📞</div>
								<div class="contact-details">
									<h4>Phone</h4>
									<p>+265 888 141 612<br>+265 995 700 234</p>
								</div>
							</div>
							
							<div class="contact-item">
								<div class="contact-icon">📧</div>
								<div class="contact-details">
									<h4>Email</h4>
									<p>tpcmalawi@gmail.com</p>
								</div>
							</div>
							
							<div class="contact-item">
								<div class="contact-icon">🌐</div>
								<div class="contact-details">
									<h4>Website</h4>
									<p>www.tpcmalawi.com</p>
								</div>
							</div>
						</div>
					</div>
					
					<div class="office-hours-card">
						<div class="hours-header">
							<div class="hours-icon">🕐</div>
							<h3>Office Hours</h3>
						</div>
						<div class="hours-content">
							<div class="hours-item">
								<span class="hours-day">Monday – Friday</span>
								<span class="hours-time">8:00 AM – 5:00 PM</span>
							</div>
							<div class="hours-item">
								<span class="hours-day">Saturday</span>
								<span class="hours-time">8:00 AM – 12:00 PM</span>
							</div>
							<div class="hours-item closed">
								<span class="hours-day">Sunday</span>
								<span class="hours-time">Closed</span>
							</div>
						</div>
					</div>
				</div>
				
				<div class="contact-actions">
					<div class="action-card">
						<h4>Ready to Get Started?</h4>
						<p>Contact us today for professional property consulting services</p>
						<a href="mailto:tpcmalawi@gmail.com" class="btn btn-primary btn-large">
							<span class="btn-content">
								<span class="btn-text">Send Email</span>
								<span class="btn-icon">📧</span>
							</span>
						</a>
					</div>
					
					<div class="action-card">
						<h4>Visit Our Office</h4>
						<p>Stop by our office in Blantyre for in-person consultation</p>
						<a href="tel:+265888141612" class="btn btn-secondary btn-large">
							<span class="btn-content">
								<span class="btn-text">Call Now</span>
								<span class="btn-icon">📞</span>
							</span>
						</a>
					</div>
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

	.nav-menu a:hover {
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

	.btn-content {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
	}

	.btn-icon {
		font-size: 1.1em;
	}

	/* Contact Section */
	.contact {
		padding: var(--spacing-20) 0;
		background: linear-gradient(135deg, rgba(25, 135, 84, 0.02) 0%, rgba(25, 135, 84, 0.05) 100%);
		min-height: calc(100vh - 200px);
	}

	.contact-header {
		text-align: center;
		margin-bottom: var(--spacing-16);
	}

	.contact-header h2 {
		font-size: var(--text-4xl);
		font-weight: 700;
		margin-bottom: var(--spacing-4);
		color: var(--tcp-primary);
	}

	.contact-header p {
		font-size: var(--text-lg);
		color: var(--muted-foreground);
		max-width: 600px;
		margin: 0 auto;
	}

	.contact-content {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--spacing-8);
		max-width: 1200px;
		margin: 0 auto;
	}

	.contact-main {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--spacing-6);
	}

	.contact-card {
		background: white;
		border-radius: var(--radius-lg);
		padding: var(--spacing-8);
		box-shadow: var(--shadow-lg);
		border: 1px solid var(--border);
	}

	.contact-logo {
		text-align: center;
		margin-bottom: var(--spacing-6);
		padding-bottom: var(--spacing-6);
		border-bottom: 1px solid var(--border);
	}

	.contact-logo h3 {
		font-size: var(--text-xl);
		font-weight: 700;
		color: var(--tcp-primary);
		margin-top: var(--spacing-3);
	}

	.contact-info {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-6);
	}

	.contact-item {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-4);
	}

	.contact-icon {
		font-size: 1.5rem;
		width: 40px;
		height: 40px;
		background: var(--tcp-primary);
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.contact-details h4 {
		font-size: var(--text-base);
		font-weight: 600;
		color: var(--foreground);
		margin-bottom: var(--spacing-2);
	}

	.contact-details p {
		color: var(--muted-foreground);
		line-height: 1.5;
	}

	.office-hours-card {
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		border-radius: var(--radius-lg);
		padding: var(--spacing-6);
		box-shadow: var(--shadow-lg);
		height: fit-content;
	}

	.hours-header {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		margin-bottom: var(--spacing-6);
	}

	.hours-icon {
		font-size: 1.5rem;
	}

	.hours-header h3 {
		font-size: var(--text-lg);
		font-weight: 600;
	}

	.hours-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);
	}

	.hours-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--spacing-2) 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	.hours-item:last-child {
		border-bottom: none;
	}

	.hours-item.closed .hours-time {
		color: rgba(255, 255, 255, 0.7);
	}

	.hours-day {
		font-weight: 500;
	}

	.hours-time {
		font-weight: 600;
	}

	.contact-actions {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-6);
	}

	.action-card {
		background: white;
		border-radius: var(--radius-lg);
		padding: var(--spacing-6);
		box-shadow: var(--shadow-md);
		border: 1px solid var(--border);
		text-align: center;
	}

	.action-card h4 {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--foreground);
		margin-bottom: var(--spacing-3);
	}

	.action-card p {
		color: var(--muted-foreground);
		margin-bottom: var(--spacing-4);
		line-height: 1.5;
	}

	.action-card .btn {
		width: 100%;
		justify-content: center;
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

		.contact-content {
			grid-template-columns: 1fr;
			gap: var(--spacing-6);
		}

		.contact-main {
			grid-template-columns: 1fr;
			gap: var(--spacing-4);
		}

		.contact-card {
			padding: var(--spacing-6);
		}

		.contact-item {
			gap: var(--spacing-3);
		}

		.contact-icon {
			width: 32px;
			height: 32px;
			font-size: 1.2rem;
		}

		.contact-actions {
			gap: var(--spacing-4);
		}
	}
</style>
