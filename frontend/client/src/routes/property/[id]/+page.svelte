<script>
	import '../../../app.css';
	import { onMount } from 'svelte';
	import ScrollAnimation from '$lib/ScrollAnimation.svelte';
	import Navigation from '$lib/Navigation.svelte';

	export let params;
	
	// Property data (in a real app, this would come from an API)
	const properties = {
		1: {
			id: 1,
			title: 'Modern City Apartment',
			description: 'A stunning modern apartment in the heart of Lilongwe City Center with breathtaking views and premium finishes throughout.',
			location: 'Lilongwe City Center',
			price: 45000000,
			type: 'Residential',
			listingType: 'For Sale',
			city: 'Lilongwe',
			district: 'Lilongwe',
			beds: 3,
			baths: 2,
			sqft: 1200,
			yearBuilt: 2020,
			parking: 2,
			images: [
				'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
			],
			features: [
				'Modern kitchen with granite countertops',
				'Spacious living room with natural light',
				'Master bedroom with en-suite bathroom',
				'Central air conditioning',
				'High-speed internet ready',
				'Secure parking for 2 vehicles',
				'24/7 security service',
				'Proximity to shopping centers'
			],
			amenities: [
				'Swimming Pool',
				'Fitness Center',
				'Children\'s Playground',
				'Community Garden',
				'BBQ Area',
				'Clubhouse'
			],
			agent: {
				name: 'John Banda',
				phone: '+265 888 141 612',
				email: 'john@tpcmalawi.com',
				image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
			}
		},
		2: {
			id: 2,
			title: 'Commercial Office Space',
			description: 'Prime commercial office space located in Blantyre\'s business district, perfect for growing companies.',
			location: 'Blantyre Commercial',
			price: 32500000,
			type: 'Commercial',
			listingType: 'For Lease',
			city: 'Blantyre',
			district: 'Blantyre',
			beds: 0,
			baths: 3,
			sqft: 2500,
			yearBuilt: 2018,
			parking: 10,
			images: [
				'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1497366214041-951636535b7a?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
			],
			features: [
				'Open plan office layout',
				'Conference rooms',
				'Reception area',
				'Kitchenette',
				'High-speed fiber internet',
				'Backup generator',
				'Elevator access',
				'Wheelchair accessible'
			],
			amenities: [
				'Secure Parking',
				'24/7 Access',
				'Mail Services',
				'Cleaning Services',
				'Meeting Rooms',
				'Security System'
			],
			agent: {
				name: 'Sarah Phiri',
				phone: '+265 995 700 234',
				email: 'sarah@tpcmalawi.com',
				image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
			}
		}
	};
	
	let property = properties[params.id] || properties[1];
	let currentImageIndex = 0;
	let showContactForm = false;
	let formData = {
		name: '',
		email: '',
		phone: '',
		message: ''
	};
	let isSubmitting = false;
	let showSuccess = false;

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % property.images.length;
	}

	function prevImage() {
		currentImageIndex = (currentImageIndex - 1 + property.images.length) % property.images.length;
	}

	function selectImage(index) {
		currentImageIndex = index;
	}

	function toggleContactForm() {
		showContactForm = !showContactForm;
	}

	function handleContactSubmit() {
		isSubmitting = true;
		
		setTimeout(() => {
			isSubmitting = false;
			showSuccess = true;
			formData = { name: '', email: '', phone: '', message: '' };
			
			setTimeout(() => {
				showSuccess = false;
				showContactForm = false;
			}, 3000);
		}, 1500);
	}

	function formatPrice(price) {
		return `MWK ${price.toLocaleString()}`;
	}

	onMount(() => {
		// Scroll to top
		window.scrollTo(0, 0);
	});
</script>

<svelte:head>
	<title>{property.title} - TPC Malawi</title>
	<meta name="description" content="{property.description}" />
</svelte:head>

<Navigation currentPage="property" />

<!-- Property Details Hero -->
<section class="property-hero">
	<div class="container">
		<div class="property-breadcrumb">
			<a href="/">Home</a> / <a href="/#listings">Properties</a> / {property.title}
		</div>
		
		<div class="property-hero-content">
			<div class="property-gallery">
				<div class="main-image-container">
					<img src={property.images[currentImageIndex]} alt={property.title} class="main-image" />
					<button class="gallery-nav prev" on:click={prevImage}>‹</button>
					<button class="gallery-nav next" on:click={nextImage}>›</button>
				</div>
				
				<div class="thumbnail-grid">
					{#each property.images as image, index}
						<img 
							src={image} 
							alt={`Property view ${index + 1}`} 
							class="thumbnail"
							class:active={index === currentImageIndex}
							on:click={() => selectImage(index)}
						/>
					{/each}
				</div>
			</div>
			
			<div class="property-info">
				<div class="property-header">
					<h1>{property.title}</h1>
					<div class="property-meta">
						<span class="location">📍 {property.location}</span>
						<span class="type">{property.type}</span>
						<span class="listing-type">{property.listingType}</span>
					</div>
				</div>
				
				<div class="property-price">
					{formatPrice(property.price)}
					{#if property.listingType === 'For Rent'}
						<span class="price-period">/ month</span>
					{/if}
				</div>
				
				<p class="property-description">{property.description}</p>
				
				<div class="property-specs">
					<div class="spec-item">
						<span class="spec-icon">🏠</span>
						<span class="spec-value">{property.beds}</span>
						<span class="spec-label">Bedrooms</span>
					</div>
					<div class="spec-item">
						<span class="spec-icon">🚿</span>
						<span class="spec-value">{property.baths}</span>
						<span class="spec-label">Bathrooms</span>
					</div>
					<div class="spec-item">
						<span class="spec-icon">📐</span>
						<span class="spec-value">{property.sqft.toLocaleString()}</span>
						<span class="spec-label">sqft</span>
					</div>
					<div class="spec-item">
						<span class="spec-icon">🚗</span>
						<span class="spec-value">{property.parking}</span>
						<span class="spec-label">Parking</span>
					</div>
				</div>
				
				<div class="property-actions">
					<button class="contact-btn" on:click={toggleContactForm}>Contact Agent</button>
					<button class="save-btn">❤️ Save Property</button>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Property Details Section -->
<ScrollAnimation animationType="fade-up" delay={200}>
	<section class="property-details">
		<div class="container">
			<div class="details-grid">
				<div class="details-main">
					<!-- Features Section -->
					<div class="details-section">
						<h2>Property Features</h2>
						<div class="features-list">
							{#each property.features as feature}
								<div class="feature-item">
									<span class="feature-icon">✓</span>
									<span>{feature}</span>
								</div>
							{/each}
						</div>
					</div>
					
					<!-- Amenities Section -->
					<div class="details-section">
						<h2>Building Amenities</h2>
						<div class="amenities-grid">
							{#each property.amenities as amenity}
								<div class="amenity-item">
									<span class="amenity-icon">🏢</span>
									<span>{amenity}</span>
								</div>
							{/each}
						</div>
					</div>
					
					<!-- Location Section -->
					<div class="details-section">
						<h2>Location</h2>
						<div class="location-info">
							<p><strong>City:</strong> {property.city}</p>
							<p><strong>District:</strong> {property.district}</p>
							<p><strong>Year Built:</strong> {property.yearBuilt}</p>
							<div class="map-placeholder">
								<span class="map-icon">🗺️</span>
								<p>Interactive map will be displayed here</p>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Sidebar -->
				<div class="details-sidebar">
					<!-- Agent Card -->
					<div class="agent-card">
						<h3>Property Agent</h3>
						<div class="agent-info">
							<img src={property.agent.image} alt={property.agent.name} class="agent-photo" />
							<div class="agent-details">
								<h4>{property.agent.name}</h4>
								<p>📞 {property.agent.phone}</p>
								<p>✉️ {property.agent.email}</p>
							</div>
						</div>
						<button class="agent-contact-btn" on:click={toggleContactForm}>Contact Agent</button>
					</div>
					
					<!-- Quick Info -->
					<div class="quick-info-card">
						<h3>Property Information</h3>
						<div class="info-grid">
							<div class="info-item">
								<span class="info-label">Property ID:</span>
								<span class="info-value">TPC-{String(property.id).padStart(4, '0')}</span>
							</div>
							<div class="info-item">
								<span class="info-label">Type:</span>
								<span class="info-value">{property.type}</span>
							</div>
							<div class="info-item">
								<span class="info-label">Status:</span>
								<span class="info-value">{property.listingType}</span>
							</div>
							<div class="info-item">
								<span class="info-label">Year Built:</span>
								<span class="info-value">{property.yearBuilt}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</ScrollAnimation>

<!-- Contact Form Modal -->
{#if showContactForm}
	<div class="contact-modal" on:click|self={toggleContactForm}>
		<div class="modal-content">
			<div class="modal-header">
				<h3>Contact Agent</h3>
				<button class="close-btn" on:click={toggleContactForm}>✕</button>
			</div>
			
			<div class="agent-summary">
				<img src={property.agent.image} alt={property.agent.name} class="agent-photo" />
				<div>
					<h4>{property.agent.name}</h4>
					<p>Regarding: {property.title}</p>
				</div>
			</div>
			
			<form on:submit|preventDefault={handleContactSubmit}>
				<div class="form-group">
					<label>Your Name *</label>
					<input type="text" required bind:value={formData.name} placeholder="John Doe" />
				</div>
				
				<div class="form-group">
					<label>Email Address *</label>
					<input type="email" required bind:value={formData.email} placeholder="john@example.com" />
				</div>
				
				<div class="form-group">
					<label>Phone Number</label>
					<input type="tel" bind:value={formData.phone} placeholder="+265 XXX XXX XXX" />
				</div>
				
				<div class="form-group">
					<label>Message *</label>
					<textarea required bind:value={formData.message} placeholder="I'm interested in this property..." rows="4"></textarea>
				</div>
				
				<div class="form-actions">
					<button type="submit" class="submit-btn" disabled={isSubmitting}>
						{isSubmitting ? 'Sending...' : 'Send Message'}
					</button>
					{#if showSuccess}
						<span class="success-message">✓ Message sent successfully!</span>
					{/if}
				</div>
			</form>
		</div>
	</div>
{/if}

<style>
	/* Property Hero Section */
	.property-hero {
		padding: var(--spacing-8) 0;
		background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
	}

	.property-breadcrumb {
		margin-bottom: var(--spacing-6);
		color: var(--muted-foreground);
		font-size: var(--text-sm);
	}

	.property-breadcrumb a {
		color: var(--tcp-primary);
		text-decoration: none;
	}

	.property-breadcrumb a:hover {
		text-decoration: underline;
	}

	.property-hero-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-12);
		align-items: start;
	}

	/* Gallery */
	.property-gallery {
		position: sticky;
		top: var(--spacing-8);
	}

	.main-image-container {
		position: relative;
		border-radius: 16px;
		overflow: hidden;
		margin-bottom: var(--spacing-4);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
	}

	.main-image {
		width: 100%;
		height: 400px;
		object-fit: cover;
	}

	.gallery-nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		font-size: 1.5rem;
		cursor: pointer;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.gallery-nav:hover {
		background: rgba(0, 0, 0, 0.7);
		transform: translateY(-50%) scale(1.1);
	}

	.gallery-nav.prev {
		left: var(--spacing-4);
	}

	.gallery-nav.next {
		right: var(--spacing-4);
	}

	.thumbnail-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--spacing-2);
	}

	.thumbnail {
		width: 100%;
		height: 80px;
		object-fit: cover;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s ease;
		border: 2px solid transparent;
	}

	.thumbnail:hover {
		transform: scale(1.05);
	}

	.thumbnail.active {
		border-color: var(--tcp-primary);
		box-shadow: 0 0 0 2px rgba(147, 199, 80, 0.2);
	}

	/* Property Info */
	.property-header h1 {
		font-size: var(--text-4xl);
		font-weight: 700;
		color: var(--foreground);
		margin-bottom: var(--spacing-4);
	}

	.property-meta {
		display: flex;
		gap: var(--spacing-4);
		margin-bottom: var(--spacing-6);
		flex-wrap: wrap;
	}

	.location {
		color: var(--muted-foreground);
	}

	.type {
		background: #f1f5f9;
		padding: var(--spacing-1) var(--spacing-3);
		border-radius: 20px;
		font-size: var(--text-sm);
		color: var(--foreground);
	}

	.listing-type {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		padding: var(--spacing-1) var(--spacing-3);
		border-radius: 20px;
		font-size: var(--text-sm);
		font-weight: 600;
	}

	.property-price {
		font-size: var(--text-3xl);
		font-weight: 700;
		color: var(--tcp-primary);
		margin-bottom: var(--spacing-6);
	}

	.price-period {
		font-size: var(--text-lg);
		font-weight: 400;
		color: var(--muted-foreground);
	}

	.property-description {
		font-size: var(--text-lg);
		line-height: 1.6;
		color: var(--foreground);
		margin-bottom: var(--spacing-8);
	}

	.property-specs {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--spacing-6);
		margin-bottom: var(--spacing-8);
	}

	.spec-item {
		text-align: center;
		padding: var(--spacing-4);
		background: white;
		border-radius: 12px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
	}

	.spec-icon {
		font-size: 2rem;
		margin-bottom: var(--spacing-2);
		display: block;
	}

	.spec-value {
		font-size: var(--text-2xl);
		font-weight: 700;
		color: var(--foreground);
		display: block;
		margin-bottom: var(--spacing-1);
	}

	.spec-label {
		font-size: var(--text-sm);
		color: var(--muted-foreground);
	}

	.property-actions {
		display: flex;
		gap: var(--spacing-4);
	}

	.contact-btn {
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		border: none;
		padding: var(--spacing-4) var(--spacing-8);
		border-radius: 8px;
		font-weight: 600;
		font-size: var(--text-lg);
		cursor: pointer;
		transition: all 0.3s ease;
		flex: 1;
	}

	.contact-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 25px rgba(147, 199, 80, 0.3);
	}

	.save-btn {
		background: white;
		color: var(--tcp-primary);
		border: 2px solid var(--tcp-primary);
		padding: var(--spacing-4) var(--spacing-6);
		border-radius: 8px;
		font-weight: 600;
		font-size: var(--text-lg);
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.save-btn:hover {
		background: var(--tcp-primary);
		color: white;
		transform: translateY(-2px);
	}

	/* Property Details Section */
	.property-details {
		padding: var(--spacing-20) 0;
	}

	.details-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--spacing-12);
	}

	.details-section {
		margin-bottom: var(--spacing-12);
	}

	.details-section h2 {
		font-size: var(--text-2xl);
		font-weight: 600;
		color: var(--foreground);
		margin-bottom: var(--spacing-6);
		padding-bottom: var(--spacing-3);
		border-bottom: 2px solid var(--tcp-primary);
	}

	.features-list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--spacing-4);
	}

	.feature-item {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		padding: var(--spacing-3);
		background: #f8fafc;
		border-radius: 8px;
	}

	.feature-icon {
		color: var(--tcp-primary);
		font-weight: bold;
		font-size: var(--text-lg);
	}

	.amenities-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--spacing-4);
	}

	.amenity-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: var(--spacing-4);
		background: white;
		border-radius: 12px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
		transition: all 0.3s ease;
	}

	.amenity-item:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
	}

	.amenity-icon {
		font-size: 2rem;
		margin-bottom: var(--spacing-2);
	}

	.location-info p {
		margin-bottom: var(--spacing-3);
		font-size: var(--text-lg);
	}

	.map-placeholder {
		background: #f1f5f9;
		border-radius: 12px;
		padding: var(--spacing-8);
		text-align: center;
		margin-top: var(--spacing-6);
	}

	.map-icon {
		font-size: 3rem;
		margin-bottom: var(--spacing-3);
		display: block;
	}

	/* Sidebar */
	.agent-card, .quick-info-card {
		background: white;
		padding: var(--spacing-6);
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		margin-bottom: var(--spacing-6);
	}

	.agent-card h3, .quick-info-card h3 {
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--foreground);
		margin-bottom: var(--spacing-4);
	}

	.agent-info {
		display: flex;
		align-items: center;
		gap: var(--spacing-4);
		margin-bottom: var(--spacing-6);
	}

	.agent-photo {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		object-fit: cover;
	}

	.agent-details h4 {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--foreground);
		margin-bottom: var(--spacing-2);
	}

	.agent-details p {
		color: var(--muted-foreground);
		margin-bottom: var(--spacing-1);
	}

	.agent-contact-btn {
		width: 100%;
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		border: none;
		padding: var(--spacing-3) var(--spacing-6);
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.agent-contact-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(147, 199, 80, 0.3);
	}

	.info-grid {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);
	}

	.info-item {
		display: flex;
		justify-content: space-between;
		padding: var(--spacing-3) 0;
		border-bottom: 1px solid #e2e8f0;
	}

	.info-item:last-child {
		border-bottom: none;
	}

	.info-label {
		color: var(--muted-foreground);
		font-weight: 500;
	}

	.info-value {
		color: var(--foreground);
		font-weight: 600;
	}

	/* Contact Modal */
	.contact-modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: var(--spacing-4);
	}

	.modal-content {
		background: white;
		border-radius: 16px;
		max-width: 500px;
		width: 100%;
		max-height: 90vh;
		overflow-y: auto;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--spacing-6);
		border-bottom: 1px solid #e2e8f0;
	}

	.modal-header h3 {
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--foreground);
	}

	.close-btn {
		background: none;
		border: none;
		font-size: var(--text-xl);
		color: var(--muted-foreground);
		cursor: pointer;
		padding: var(--spacing-2);
	}

	.agent-summary {
		display: flex;
		align-items: center;
		gap: var(--spacing-4);
		padding: var(--spacing-6);
		background: #f8fafc;
	}

	.agent-summary h4 {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--foreground);
		margin-bottom: var(--spacing-1);
	}

	.agent-summary p {
		color: var(--muted-foreground);
		font-size: var(--text-sm);
	}

	.modal-content form {
		padding: var(--spacing-6);
	}

	.form-group {
		margin-bottom: var(--spacing-4);
	}

	.form-group label {
		display: block;
		font-weight: 600;
		color: var(--foreground);
		margin-bottom: var(--spacing-2);
	}

	.form-group input,
	.form-group textarea {
		width: 100%;
		padding: var(--spacing-3);
		border: 2px solid #e2e8f0;
		border-radius: 8px;
		font-size: var(--text-base);
		transition: all 0.3s ease;
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--tcp-primary);
		box-shadow: 0 0 0 3px rgba(147, 199, 80, 0.1);
	}

	.form-actions {
		display: flex;
		align-items: center;
		gap: var(--spacing-4);
	}

	.submit-btn {
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		border: none;
		padding: var(--spacing-3) var(--spacing-6);
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		flex: 1;
	}

	.submit-btn:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(147, 199, 80, 0.3);
	}

	.submit-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.success-message {
		color: var(--tcp-primary);
		font-weight: 600;
	}

	/* Responsive Design */
	@media (max-width: 1024px) {
		.property-hero-content {
			grid-template-columns: 1fr;
			gap: var(--spacing-8);
		}

		.property-gallery {
			position: static;
		}

		.details-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-8);
		}
	}

	@media (max-width: 768px) {
		.property-hero {
			padding: var(--spacing-6) 0;
		}

		.property-header h1 {
			font-size: var(--text-2xl);
		}

		.property-specs {
			grid-template-columns: repeat(2, 1fr);
		}

		.features-list {
			grid-template-columns: 1fr;
		}

		.amenities-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.property-actions {
			flex-direction: column;
		}

		.thumbnail-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 480px) {
		.property-meta {
			flex-direction: column;
			gap: var(--spacing-2);
		}

		.property-specs {
			grid-template-columns: 1fr;
		}

		.amenities-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
