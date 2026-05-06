<script>
	import { onMount } from 'svelte';
	import ScrollAnimation from '$lib/ScrollAnimation.svelte';
	import Navigation from '$lib/Navigation.svelte';

	function handleSubmit(event) {
		// In a real application, you would handle form submission here
		// For now, we'll just show an alert
		alert('Thank you for your message! We will get back to you soon.');
		event.target.reset();
	}
</script>

<svelte:head>
	<title>Contact Us - Terrestrial Property Consulting Limited | TPC Malawi</title>
	<meta name="description" content="Contact Terrestrial Property Consulting Limited in Blantyre, Malawi. Visit our office at Reunion House or call us for professional property consulting services." />
</svelte:head>

<Navigation currentPage="contact" />

<!-- Main Content -->
<main>
	<!-- Hero Section -->
	<section class="contact-hero">
		<div class="hero-background">
			<img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=600&fit=crop&auto=format" alt="Contact us" class="hero-image" />
			<div class="hero-overlay"></div>
		</div>
		<div class="container">
			<div class="hero-content">
				<div class="hero-badge">Get in Touch</div>
				<h1>Contact TPC Malawi</h1>
				<p class="hero-subtitle">Connect with our expert team for professional property consulting services across Malawi</p>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<ScrollAnimation animationType="fade-up" delay={200}>
		<section class="contact">
			<div class="container">
				<div class="contact-header">
					<h2>Contact Us</h2>
					<p>Get in touch with Terrestrial Property Consulting Limited</p>
			</div>
			
			<div class="contact-content">
				<div class="contact-grid">
					<!-- Contact Information Card -->
					<div class="contact-info-card">
						<div class="card-header">
							<div class="company-logo">
								<img src="/tcp.jpeg" alt="TCP" />
							</div>
							<div class="company-info">
								<h3>Terrestrial Property Consulting Limited</h3>
								<p>Your trusted property consulting partner in Malawi</p>
							</div>
						</div>
						
						<div class="contact-items">
							<div class="contact-item">
								<div class="item-icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
										<circle cx="12" cy="10" r="3"></circle>
									</svg>
								</div>
								<div class="item-content">
									<h4>Office Address</h4>
									<p>Reunion House, Office No. 22<br>P.O. Box 1883, Blantyre, Malawi</p>
								</div>
							</div>
							
							<div class="contact-item">
								<div class="item-icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
									</svg>
								</div>
								<div class="item-content">
									<h4>Phone Numbers</h4>
									<p>+265 888 141 612<br>+265 995 700 234</p>
								</div>
							</div>
							
							<div class="contact-item">
								<div class="item-icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
										<polyline points="22,6 12,13 2,6"></polyline>
									</svg>
								</div>
								<div class="item-content">
									<h4>Email Address</h4>
									<p>tpcmalawi@gmail.com</p>
								</div>
							</div>
							
							<div class="contact-item">
								<div class="item-icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<circle cx="12" cy="12" r="10"></circle>
										<path d="M2 12h20"></path>
										<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
									</svg>
								</div>
								<div class="item-content">
									<h4>Website</h4>
									<p>www.tpcmalawi.com</p>
								</div>
							</div>
						</div>
					</div>
					
					<!-- Office Hours Card -->
					<div class="office-hours-card">
						<div class="hours-header">
							<div class="hours-icon">🕐</div>
							<h3>Office Hours</h3>
							<p>We're here to serve you</p>
						</div>
						<div class="hours-content">
							<div class="hours-item">
								<div class="day-info">
									<span class="hours-day">Monday – Friday</span>
									<span class="hours-label">Business Days</span>
								</div>
								<span class="hours-time">8:00 AM – 5:00 PM</span>
							</div>
							<div class="hours-item">
								<div class="day-info">
									<span class="hours-day">Saturday</span>
									<span class="hours-label">Half Day</span>
								</div>
								<span class="hours-time">8:00 AM – 12:00 PM</span>
							</div>
							<div class="hours-item closed">
								<div class="day-info">
									<span class="hours-day">Sunday</span>
									<span class="hours-label">Closed</span>
								</div>
								<span class="hours-time">Closed</span>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Contact Form Section -->
				<div class="contact-form-section">
					<div class="form-card">
						<div class="form-header">
							<h3>Send Us a Message</h3>
							<p>Fill out the form below and we'll get back to you as soon as possible</p>
						</div>
						<form class="contact-form" on:submit|preventDefault={handleSubmit}>
							<div class="form-row">
								<div class="form-group">
									<label for="name">Full Name *</label>
									<input type="text" id="name" name="name" required placeholder="John Doe" />
								</div>
								<div class="form-group">
									<label for="email">Email Address *</label>
									<input type="email" id="email" name="email" required placeholder="john@example.com" />
								</div>
							</div>
							<div class="form-row">
								<div class="form-group">
									<label for="phone">Phone Number</label>
									<input type="tel" id="phone" name="phone" placeholder="+265 XXX XXX XXX" />
								</div>
								<div class="form-group">
									<label for="service">Service Interested In</label>
									<select id="service" name="service">
										<option value="">Select a service</option>
										<option value="property-valuations">Property Valuations</option>
										<option value="plant-machinery">Plant & Machinery Valuations</option>
										<option value="asset-tagging">Asset Tagging & Tracking</option>
										<option value="property-management">Property Management</option>
										<option value="other">Other</option>
									</select>
								</div>
							</div>
							<div class="form-group">
								<label for="message">Message *</label>
								<textarea id="message" name="message" required placeholder="Tell us about your property consulting needs..." rows="5"></textarea>
							</div>
							<button type="submit" class="btn btn-primary btn-large btn-full">
								<span class="btn-content">
									<span class="btn-text">Send Message</span>
									<span class="btn-icon">�</span>
								</span>
							</button>
						</form>
					</div>
				</div>

				<!-- Quick Actions -->
				<div class="contact-actions">
					<div class="action-card">
						<div class="action-icon">📧</div>
						<h4>Email Us</h4>
						<p>Send us an email for general inquiries</p>
						<a href="mailto:tpcmalawi@gmail.com" class="btn btn-primary">
							Send Email
						</a>
					</div>
					
					<div class="action-card">
						<div class="action-icon">📞</div>
						<h4>Call Us</h4>
						<p>Speak directly with our team</p>
						<a href="tel:+265888141612" class="btn btn-secondary">
							Call Now
						</a>
					</div>
					
					<div class="action-card">
						<div class="action-icon">📍</div>
						<h4>Visit Us</h4>
						<p>Stop by our office in Blantyre</p>
						<a href="#map" class="btn btn-outline">
							Get Directions
						</a>
					</div>
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

	.nav-menu a:hover {
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

	.btn-content {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
	}

	.btn-icon {
		font-size: 1.1em;
	}

	/* Contact Section */
	/* Contact Hero Section */
	.contact-hero {
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
		background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(147, 199, 80, 0.4));
	}

	.hero-badge {
		display: inline-block;
		background: rgba(255, 255, 255, 0.2);
		color: white;
		padding: var(--spacing-2) var(--spacing-4);
		border-radius: var(--radius-full);
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
	}

	.contact {
		padding: var(--spacing-20) 0;
		background: var(--background);
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

	.contact-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--spacing-8);
		margin-bottom: var(--spacing-16);
	}

	.contact-info-card {
		background: white;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
		padding: var(--spacing-8);
		border: 1px solid var(--border);
	}

	.card-header {
		display: flex;
		align-items: center;
		gap: var(--spacing-4);
		margin-bottom: var(--spacing-8);
		padding-bottom: var(--spacing-6);
		border-bottom: 1px solid var(--border);
	}

	.company-logo img {
		width: 50px;
		height: 50px;
		object-fit: contain;
		border-radius: var(--radius-md);
	}

	.company-info h3 {
		font-size: var(--text-xl);
		font-weight: 700;
		color: var(--foreground);
		margin-bottom: var(--spacing-2);
	}

	.company-info p {
		color: var(--muted-foreground);
		font-size: var(--text-sm);
	}

	.contact-items {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-6);
	}

	.contact-item {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-4);
		padding: var(--spacing-4);
		border-radius: var(--radius-md);
		transition: background-color 0.3s ease;
	}

	.contact-item:hover {
		background-color: var(--muted);
	}

	.item-icon {
		width: 40px;
		height: 40px;
		border-radius: var(--radius-md);
		overflow: hidden;
		flex-shrink: 0;
	}

	.item-icon img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.item-content h4 {
		font-size: var(--text-base);
		font-weight: 600;
		color: var(--foreground);
		margin-bottom: var(--spacing-1);
	}

	.item-content p {
		color: var(--muted-foreground);
		font-size: var(--text-sm);
		line-height: 1.5;
	}

	/* Office Hours Card */
	.office-hours-card {
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		border-radius: var(--radius-lg);
		padding: var(--spacing-6);
		height: fit-content;
	}

	.hours-header {
		text-align: center;
		margin-bottom: var(--spacing-6);
	}

	.hours-icon {
		font-size: var(--text-3xl);
		margin-bottom: var(--spacing-3);
	}

	.hours-header h3 {
		font-size: var(--text-xl);
		font-weight: 700;
		margin-bottom: var(--spacing-2);
	}

	.hours-header p {
		opacity: 0.9;
		font-size: var(--text-sm);
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
		padding: var(--spacing-3);
		background: rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-md);
		backdrop-filter: blur(10px);
	}

	.hours-item.closed {
		opacity: 0.7;
	}

	.day-info {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-1);
	}

	.hours-day {
		font-weight: 600;
		font-size: var(--text-sm);
	}

	.hours-label {
		font-size: var(--text-xs);
		opacity: 0.8;
	}

	.hours-time {
		font-weight: 600;
		font-size: var(--text-sm);
	}

	.contact-logo {
		text-align: center;
		margin-bottom: var(--spacing-6);
		padding-bottom: var(--spacing-6);
		border-bottom: 1px solid var(--border);
	}

	/* Contact Form Section */
	.contact-form-section {
		margin-bottom: var(--spacing-16);
	}

	.form-card {
		background: white;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
		padding: var(--spacing-8);
		border: 1px solid var(--border);
		max-width: 800px;
		margin: 0 auto;
	}

	.form-header {
		text-align: center;
		margin-bottom: var(--spacing-8);
	}

	.form-header h3 {
		font-size: var(--text-2xl);
		font-weight: 700;
		color: var(--foreground);
		margin-bottom: var(--spacing-3);
	}

	.form-header p {
		color: var(--muted-foreground);
		font-size: var(--text-base);
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-6);
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-6);
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-2);
	}

	.form-group label {
		font-weight: 600;
		color: var(--foreground);
		font-size: var(--text-sm);
	}

	.form-group input,
	.form-group select,
	.form-group textarea {
		padding: var(--spacing-3);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		font-size: var(--text-base);
		transition: border-color 0.3s ease, box-shadow 0.3s ease;
		background: white;
	}

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--tcp-primary);
		box-shadow: 0 0 0 3px rgba(147, 199, 80, 0.1);
	}

	.form-group textarea {
		resize: vertical;
		min-height: 120px;
	}

	.btn-full {
		width: 100%;
		justify-content: center;
	}

	/* Contact Actions */
	.contact-actions {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--spacing-6);
	}

	.action-card {
		background: white;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
		padding: var(--spacing-6);
		text-align: center;
		border: 1px solid var(--border);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.action-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}

	.action-icon {
		font-size: var(--text-3xl);
		margin-bottom: var(--spacing-4);
	}

	.action-card h4 {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--foreground);
		margin-bottom: var(--spacing-2);
	}

	.action-card p {
		color: var(--muted-foreground);
		font-size: var(--text-sm);
		margin-bottom: var(--spacing-4);
		line-height: 1.5;
	}

	.btn-outline {
		background: transparent;
		color: var(--tcp-primary);
		border: 2px solid var(--tcp-primary);
		padding: var(--spacing-2) var(--spacing-4);
		border-radius: var(--radius-md);
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
		display: inline-block;
	}

	.btn-outline:hover {
		background: var(--tcp-primary);
		color: white;
		text-decoration: none;
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

	/* Hamburger Menu */
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

	/* Responsive Design */
	@media (max-width: 1024px) {
		.desktop-menu {
			display: none;
		}
		.hamburger {
			display: flex;
		}
		
		.contact-grid {
			grid-template-columns: 1fr;
		}

		.contact-actions {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.desktop-menu {
			display: none;
		}

		.hero-content h1 {
			font-size: var(--text-3xl);
		}

		.hero-subtitle {
			font-size: var(--text-lg);
		}

		.form-row {
			grid-template-columns: 1fr;
		}

		.card-header {
			flex-direction: column;
			text-align: center;
		}

		.contact-item {
			flex-direction: column;
			text-align: center;
		}

		.form-card {
			padding: var(--spacing-6);
		}

		.contact-info-card {
			padding: var(--spacing-6);
		}

		.office-hours-card {
			padding: var(--spacing-6);
		}

		.contact-actions {
			gap: var(--spacing-4);
		}
	}

	@media (max-width: 480px) {
		.hero-content h1 {
			font-size: var(--text-2xl);
		}

		.hero-subtitle {
			font-size: var(--text-base);
		}

		.contact-info-card,
		.form-card {
			padding: var(--spacing-4);
		}

		.action-card {
			padding: var(--spacing-4);
		}
	}
</style>
