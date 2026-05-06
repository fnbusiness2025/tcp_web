<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import ScrollAnimation from '$lib/ScrollAnimation.svelte';
	import Navigation from '$lib/Navigation.svelte';

	let heroVisible = false;
	
	// Contact form state
	let formData = {
		name: '',
		email: '',
		phone: '',
		service: '',
		message: ''
	};
	
	let formErrors = {
		name: false,
		email: false,
		message: false
	};
	
	let isSubmitting = false;
	let showSuccess = false;
	
	// Search and filter state
	let searchQuery = '';
	let selectedCity = '';
	let selectedDistrict = '';
	let selectedPropertyType = '';
	let selectedListingType = '';
	let priceRange = '';
	
	// Malawi Cities and Districts Library
	const malawiLocations = {
		northern: [
			{ city: 'Mzuzu', district: 'Mzimba' },
			{ city: 'Karonga', district: 'Karonga' },
			{ city: 'Rumphi', district: 'Rumphi' },
			{ city: 'Nkhata Bay', district: 'Nkhata Bay' },
			{ city: 'Likoma', district: 'Likoma' },
			{ city: 'Chitipa', district: 'Chitipa' }
		],
		central: [
			{ city: 'Lilongwe', district: 'Lilongwe' },
			{ city: 'Salima', district: 'Salima' },
			{ city: 'Dedza', district: 'Dedza' },
			{ city: 'Ntcheu', district: 'Ntcheu' },
			{ city: 'Ntchisi', district: 'Ntchisi' },
			{ city: 'Kasungu', district: 'Kasungu' },
			{ city: 'Mchinji', district: 'Mchinji' },
			{ city: 'Dowa', district: 'Dowa' }
		],
		southern: [
			{ city: 'Blantyre', district: 'Blantyre' },
			{ city: 'Zomba', district: 'Zomba' },
			{ city: 'Mangochi', district: 'Mangochi' },
			{ city: 'Machinga', district: 'Machinga' },
			{ city: 'Balaka', district: 'Balaka' },
			{ city: 'Nsanje', district: 'Nsanje' },
			{ city: 'Chikwawa', district: 'Chikwawa' },
			{ city: 'Thyolo', district: 'Thyolo' },
			{ city: 'Mulanje', district: 'Mulanje' },
			{ city: 'Phalombe', district: 'Phalombe' },
			{ city: 'Chiradzulu', district: 'Chiradzulu' },
			{ city: 'Neno', district: 'Neno' }
		]
	};
	
	// Extract all cities and districts for dropdowns
	const allCities = ['All Cities', ...new Set(
		[...malawiLocations.northern, ...malawiLocations.central, ...malawiLocations.southern]
			.map(loc => loc.city)
	)];
	
	const allDistricts = ['All Districts', ...new Set(
		[...malawiLocations.northern, ...malawiLocations.central, ...malawiLocations.southern]
			.map(loc => loc.district)
	)];
	
	// Filter options
	const propertyTypes = ['All Types', 'Residential', 'Commercial', 'Industrial', 'Agricultural', 'Land'];
	const listingTypes = ['All Types', 'For Sale', 'For Rent', 'For Lease'];
	const priceRanges = ['Any Price', 'Under MWK 10M', 'MWK 10M - 30M', 'MWK 30M - 50M', 'Over MWK 50M'];
	
	// Sample properties data
	let properties = [
		{
			id: 1,
			title: 'Modern City Apartment',
			location: 'Lilongwe City Center',
			price: 45000000,
			type: 'Residential',
			listingType: 'For Sale',
			city: 'Lilongwe',
			district: 'Lilongwe',
			image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
			beds: 3,
			baths: 2,
			sqft: 1200,
			badge: 'Featured'
		},
		{
			id: 2,
			title: 'Commercial Office Space',
			location: 'Blantyre Commercial',
			price: 32500000,
			type: 'Commercial',
			listingType: 'For Lease',
			city: 'Blantyre',
			district: 'Blantyre',
			image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
			beds: 0,
			baths: 3,
			sqft: 2500,
			badge: 'Hot Deal'
		},
		{
			id: 3,
			title: 'Lakefront Property',
			location: 'Lake Malawi Shore',
			price: 28750000,
			type: 'Residential',
			listingType: 'For Sale',
			city: 'Mangochi',
			district: 'Mangochi',
			image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
			beds: 5,
			baths: 4,
			sqft: 3200,
			badge: 'New'
		},
		{
			id: 4,
			title: 'Industrial Warehouse',
			location: 'Lilongwe Industrial',
			price: 55000000,
			type: 'Industrial',
			listingType: 'For Sale',
			city: 'Lilongwe',
			district: 'Lilongwe',
			image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
			beds: 0,
			baths: 2,
			sqft: 5000,
			badge: 'Featured'
		},
		{
			id: 5,
			title: 'Agricultural Land',
			location: 'Rural Blantyre',
			price: 15000000,
			type: 'Agricultural',
			listingType: 'For Sale',
			city: 'Blantyre',
			district: 'Blantyre',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
			beds: 0,
			baths: 0,
			sqft: 10000,
			badge: 'New'
		},
		{
			id: 6,
			title: 'Luxury Villa',
			location: 'Mzuzu Heights',
			price: 75000000,
			type: 'Residential',
			listingType: 'For Rent',
			city: 'Mzuzu',
			district: 'Mzimba',
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
			beds: 6,
			baths: 5,
			sqft: 4500,
			badge: 'Hot Deal'
		},
		{
			id: 7,
			title: 'Downtown Apartment',
			location: 'Blantyre City Center',
			price: 25000000,
			type: 'Residential',
			listingType: 'For Rent',
			city: 'Blantyre',
			district: 'Blantyre',
			image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
			beds: 2,
			baths: 1,
			sqft: 800,
			badge: 'New'
		},
		{
			id: 8,
			title: 'Beach House',
			location: 'Senga Bay',
			price: 35000000,
			type: 'Residential',
			listingType: 'For Sale',
			city: 'Salima',
			district: 'Salima',
			image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
			beds: 4,
			baths: 3,
			sqft: 2800,
			badge: 'Featured'
		},
		{
			id: 9,
			title: 'Shop Space',
			location: 'Zomba Town',
			price: 8000000,
			type: 'Commercial',
			listingType: 'For Lease',
			city: 'Zomba',
			district: 'Zomba',
			image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
			beds: 0,
			baths: 1,
			sqft: 600,
			badge: 'Hot Deal'
		}
	];
	
	let filteredProperties = properties;
	let sliderIndex = 0;
	let sliderInterval;

	function startSlider() {
		stopSlider();
		sliderInterval = setInterval(() => {
			if (filteredProperties.length > 0) {
				sliderIndex = (sliderIndex + 1) % filteredProperties.length;
			}
		}, 5000);
	}

	function stopSlider() {
		if (sliderInterval) clearInterval(sliderInterval);
	}

	function resetSlider() {
		sliderIndex = 0;
		startSlider();
	}

	// Filter functions
	function applyFilters() {
		filteredProperties = properties.filter(property => {
			// Search query filter
			const matchesSearch = searchQuery === '' || 
				property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				property.location.toLowerCase().includes(searchQuery.toLowerCase());
			
			// City filter
			const matchesCity = selectedCity === '' || selectedCity === 'All Cities' || property.city === selectedCity;
			
			// District filter
			const matchesDistrict = selectedDistrict === '' || selectedDistrict === 'All Districts' || property.district === selectedDistrict;
			
			// Property type filter
			const matchesType = selectedPropertyType === '' || selectedPropertyType === 'All Types' || property.type === selectedPropertyType;
			
			// Listing type filter (Buy/Sell/Rent)
			const matchesListingType = selectedListingType === '' || selectedListingType === 'All Types' || property.listingType === selectedListingType;
			
			// Price range filter
			let matchesPrice = true;
			if (priceRange && priceRange !== 'Any Price') {
				switch(priceRange) {
					case 'Under MWK 10M':
						matchesPrice = property.price < 10000000;
						break;
					case 'MWK 10M - 30M':
						matchesPrice = property.price >= 10000000 && property.price <= 30000000;
						break;
					case 'MWK 30M - 50M':
						matchesPrice = property.price > 30000000 && property.price <= 50000000;
						break;
					case 'Over MWK 50M':
						matchesPrice = property.price > 50000000;
						break;
				}
			}
			
			return matchesSearch && matchesCity && matchesDistrict && matchesType && matchesListingType && matchesPrice;
		});
		resetSlider();
	}

	function resetFilters() {
		searchQuery = '';
		selectedCity = '';
		selectedDistrict = '';
		selectedPropertyType = '';
		selectedListingType = '';
		priceRange = '';
		applyFilters();
	}

	onMount(() => {
		// Trigger hero animations
		setTimeout(() => {
			heroVisible = true;
		}, 300);
		startSlider();
		return () => stopSlider();
	});

	// Contact form submission
	function handleSubmit() {
		// Reset errors
		formErrors = { name: false, email: false, message: false };
		
		// Validate form
		let isValid = true;
		
		if (!formData.name.trim()) {
			formErrors.name = true;
			isValid = false;
		}
		
		if (!formData.email.trim() || !formData.email.includes('@')) {
			formErrors.email = true;
			isValid = false;
		}
		
		if (!formData.message.trim()) {
			formErrors.message = true;
			isValid = false;
		}
		
		if (!isValid) return;
		
		// Simulate form submission
		isSubmitting = true;
		
		setTimeout(() => {
			isSubmitting = false;
			showSuccess = true;
			
			// Reset form
			formData = {
				name: '',
				email: '',
				phone: '',
				service: '',
				message: ''
			};
			
			// Hide success message after 3 seconds
			setTimeout(() => {
				showSuccess = false;
			}, 3000);
		}, 1500);
	}

</script>

<svelte:head>
	<title>TPC Malawi - Terrestrial Property Consulting Limited</title>
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
				<!-- TPC Malawi Title -->
				<h1 class="hero-title-simple fade-in" class:visible={heroVisible} style="animation-delay: 0.2s;">
					Terrestrial Property Consulting Limited
				</h1>
				
				<!-- Services in Hero - Single Row -->
				<div class="hero-services-single-row fade-in" class:visible={heroVisible} style="animation-delay: 0.4s;">
					<div class="hero-services-grid-single">
						<a href="/services/property-valuations" class="hero-service-item">
							<div class="hero-service-icon">📊</div>
							<h4>Asset/Property Valuations</h4>
							<p>Accurate and professional valuation services for all types of properties across Malawi.</p>
							<span class="hero-item-link">Learn more</span>
						</a>
						<a href="/services/plant-machinery-valuations" class="hero-service-item">
							<div class="hero-service-icon">🏭</div>
							<h4>Plant and Machinery Valuation</h4>
							<p>Specialized valuation services for industrial plants, machinery, and commercial equipment.</p>
							<span class="hero-item-link">Learn more</span>
						</a>
						<a href="/services/property-management" class="hero-service-item">
							<div class="hero-service-icon">🏢</div>
							<h4>Property Management</h4>
							<p>End-to-end management solutions for residential and commercial property investments.</p>
							<span class="hero-item-link">Learn more</span>
						</a>
						<a href="/services/land-lease-consultancy" class="hero-service-item">
							<div class="hero-service-icon">�</div>
							<h4>Land Lease Consultancy</h4>
							<p>Expert advice on land leasing negotiations, agreement and lease management.</p>
							<span class="hero-item-link">Learn more</span>
						</a>
					</div>
				</div>
				<div class="hero-services-button-container">
					<a href="/services" class="hero-services-link">View more services →</a>
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
					<h2>Find Your Perfect Property</h2>
					<p>Search from our extensive collection of premium properties across Malawi</p>
				</div>
				
				<!-- Search and Filter Section -->
				<div class="search-filter-section">
					<div class="search-bar-container">
						<div class="search-bar">
							<span class="search-icon">🔍</span>
							<input 
								type="text" 
								placeholder="Search by location, property name, or keywords..." 
								bind:value={searchQuery}
								on:input={applyFilters}
							/>
							<button class="search-btn" on:click={applyFilters}>Search</button>
						</div>
					</div>
					
					<div class="filters-container">
						<div class="filter-group">
							<label>Looking to</label>
							<select bind:value={selectedListingType} on:change={applyFilters}>
								{#each listingTypes as type}
									<option value={type}>{type}</option>
								{/each}
							</select>
						</div>
						
						<div class="filter-group">
							<label>City</label>
							<select bind:value={selectedCity} on:change={applyFilters}>
								{#each allCities as city}
									<option value={city}>{city}</option>
								{/each}
							</select>
						</div>
						
						<div class="filter-group">
							<label>District</label>
							<select bind:value={selectedDistrict} on:change={applyFilters}>
								{#each allDistricts as district}
									<option value={district}>{district}</option>
								{/each}
							</select>
						</div>
						
						<div class="filter-group">
							<label>Property Type</label>
							<select bind:value={selectedPropertyType} on:change={applyFilters}>
								{#each propertyTypes as type}
									<option value={type}>{type}</option>
								{/each}
							</select>
						</div>
						
						<div class="filter-group">
							<label>Price Range</label>
							<select bind:value={priceRange} on:change={applyFilters}>
								{#each priceRanges as range}
									<option value={range}>{range}</option>
								{/each}
							</select>
						</div>
						
						<div class="filter-group">
							<label>&nbsp;</label>
							<button class="reset-btn" on:click={resetFilters}>Reset Filters</button>
						</div>
					</div>
				</div>
				
				<!-- Results Summary -->
				<div class="results-summary">
					<span class="results-count">{filteredProperties.length} properties found</span>
					<div class="sort-options">
						<span>Sort by:</span>
						<select>
							<option>Featured</option>
							<option>Price: Low to High</option>
							<option>Price: High to Low</option>
							<option>Newest First</option>
						</select>
					</div>
				</div>
				
				<!-- Stepped Slider Properties Section -->
				<div class="properties-slider-container" on:mouseenter={stopSlider} on:mouseleave={startSlider}>
					<div class="slider-track" style="transform: translateX(calc(-{sliderIndex} * (380px + 32px)))">
						{#each filteredProperties as property (property.id)}
							<div class="property-card animated-card">
								<div class="property-image">
									<img src={property.image} alt={property.title} />
									<div class="property-overlay">
										<div class="property-stats">
											{#if property.beds > 0}<span class="stat">🏠 {property.beds} Beds</span>{/if}
											{#if property.baths > 0}<span class="stat">🚿 {property.baths} Baths</span>{/if}
											<span class="stat">📐 {property.sqft.toLocaleString()} sqft</span>
										</div>
									</div>
								</div>
								<div class="property-content">
									<div class="property-title">{property.title}</div>
									<div class="property-location">📍 {property.location}</div>
									<div class="property-price">
										MWK {property.price.toLocaleString()}
										<span class="listing-type-badge">{property.listingType}</span>
									</div>
									<div class="property-type">{property.type}</div>
									<div class="property-actions">
										<a href="/property/{property.id}" class="view-btn">View Details</a>
										<button class="save-btn">❤️</button>
									</div>
								</div>
							</div>
						{/each}
					</div>

					<!-- Slider Navigation -->
					{#if filteredProperties.length > 1}
						<div class="slider-nav">
							{#each filteredProperties as _, i}
								<button 
									class="nav-dot" 
									class:active={sliderIndex === i}
									on:click={() => sliderIndex = i}
								></button>
							{/each}
						</div>
					{/if}
				</div>
				
				<!-- No Results Message -->
				{#if filteredProperties.length === 0}
					<div class="no-results">
						<div class="no-results-icon">🔍</div>
						<h3>No properties found</h3>
						<p>Try adjusting your search criteria or filters to find more properties.</p>
						<button class="reset-btn-large" on:click={resetFilters}>Reset All Filters</button>
					</div>
				{/if}
			</div>
		</section>
	</ScrollAnimation>

	<!-- Contact Form Section -->
	<ScrollAnimation animationType="fade-up" delay={250}>
		<section class="contact-form-section">
			<div class="container">
				<div class="contact-form-wrapper">
					<div class="contact-form-content">
						<div class="contact-form-header">
							<h2>Get in Touch</h2>
							<p>Ready to find your perfect property? Let's start the conversation.</p>
						</div>
						<form class="contact-form" on:submit|preventDefault={handleSubmit}>
							<div class="form-row">
								<div class="form-group">
									<label for="name">Full Name *</label>
									<input type="text" id="name" name="name" required placeholder="John Doe" bind:value={formData.name} />
									<span class="form-error" class:hidden={!formErrors.name}>Please enter your name</span>
								</div>
								<div class="form-group">
									<label for="email">Email Address *</label>
									<input type="email" id="email" name="email" required placeholder="john@example.com" bind:value={formData.email} />
									<span class="form-error" class:hidden={!formErrors.email}>Please enter a valid email</span>
								</div>
							</div>
							<div class="form-row">
								<div class="form-group">
									<label for="phone">Phone Number</label>
									<input type="tel" id="phone" name="phone" placeholder="+265 XXX XXX XXX" bind:value={formData.phone} />
								</div>
								<div class="form-group">
									<label for="service">Service Interested In</label>
									<select id="service" name="service" bind:value={formData.service}>
										<option value="">Select a service</option>
										<option value="property-valuations">Property Valuations</option>
										<option value="plant-machinery">Plant & Machinery Valuations</option>
										<option value="asset-tagging">Asset Tagging & Tracking</option>
										<option value="property-management">Property Management</option>
									</select>
								</div>
							</div>
							<div class="form-group">
								<label for="message">Message *</label>
								<textarea id="message" name="message" required placeholder="Tell us about your property needs..." rows="4" bind:value={formData.message}></textarea>
								<span class="form-error" class:hidden={!formErrors.message}>Please enter your message</span>
							</div>
							<div class="form-actions">
								<button type="submit" class="submit-btn" class:loading={isSubmitting}>
									{isSubmitting ? 'Sending...' : 'Send Message'}
								</button>
								<span class="form-success" class:hidden={!showSuccess}>✓ Message sent successfully!</span>
							</div>
						</form>
					</div>
					<div class="contact-form-info">
						<div class="info-card">
							<div class="info-icon">📍</div>
							<div class="info-content">
								<h3>Visit Our Office</h3>
								<p>Reunion House, Office No. 22<br>P.O. Box 1883, Blantyre, Malawi</p>
							</div>
						</div>
						<div class="info-card">
							<div class="info-icon">📞</div>
							<div class="info-content">
								<h3>Call Us</h3>
								<p>+265 888 141 612<br>+265 995 700 234</p>
							</div>
						</div>
						<div class="info-card">
							<div class="info-icon">✉️</div>
							<div class="info-content">
								<h3>Email Us</h3>
								<p>tpcmalawi@gmail.com</p>
							</div>
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
		text-decoration: none;
		color: white;
	}

	.hero-item-link {
		font-size: 0.85rem;
		font-weight: 800;
		color: white;
		background: var(--tcp-primary);
		margin-top: 15px;
		padding: 10px 24px;
		border-radius: 99px;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		box-shadow: 0 4px 15px rgba(147, 199, 80, 0.5);
		transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		letter-spacing: 0.05em;
		font-family: 'Inter', system-ui, -apple-system, sans-serif;
	}

	.hero-service-item:hover .hero-item-link {
		background: white;
		color: var(--tcp-primary);
		transform: scale(1.05);
		box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
	}

	.hero-item-link::after {
		content: '➤';
		font-size: 0.7rem;
		transition: transform 0.3s ease;
	}

	.hero-service-item:hover .hero-item-link::after {
		transform: translateX(4px);
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
		font-size: 1.1rem;
		font-weight: 800;
		margin-bottom: var(--spacing-2);
		color: white;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
		transition: color var(--transition-normal) ease;
		line-height: 1.2;
		height: 2.4em;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		font-family: 'Inter', system-ui, -apple-system, sans-serif;
	}

	.hero-service-item:hover h4 {
		color: var(--tcp-primary);
	}

	.hero-service-item p {
		font-size: var(--text-xs);
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.4;
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
		transition: all var(--transition-normal) ease;
		flex-grow: 1;
		font-family: 'Inter', system-ui, -apple-system, sans-serif;
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
		margin-bottom: var(--spacing-8);
	}

	.featured-header h2 {
		font-size: var(--text-3xl);
		font-weight: 600;
		color: var(--foreground);
		margin-bottom: var(--spacing-3);
	}

	.featured-header p {
		font-size: var(--text-lg);
		color: var(--muted-foreground);
		max-width: 600px;
		margin: 0 auto;
	}

	/* Search and Filter Section */
	.search-filter-section {
		background: white;
		border-radius: 16px;
		padding: var(--spacing-8);
		margin-bottom: var(--spacing-12);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(147, 199, 80, 0.1);
	}

	.search-bar-container {
		margin-bottom: var(--spacing-6);
	}

	.search-bar {
		display: flex;
		align-items: center;
		background: #f8fafc;
		border: 2px solid #e2e8f0;
		border-radius: 12px;
		padding: var(--spacing-2);
		transition: all 0.3s ease;
		position: relative;
	}

	.search-bar:focus-within {
		border-color: var(--tcp-primary);
		box-shadow: 0 0 0 4px rgba(147, 199, 80, 0.1);
		background: white;
	}

	.search-icon {
		color: var(--muted-foreground);
		font-size: 1.2rem;
		margin: 0 var(--spacing-3);
	}

	.search-bar input {
		flex: 1;
		border: none;
		background: transparent;
		outline: none;
		font-size: var(--text-lg);
		padding: var(--spacing-3) 0;
		color: var(--foreground);
	}

	.search-bar input::placeholder {
		color: var(--muted-foreground);
	}

	.view-btn {
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		border: none;
		padding: var(--spacing-2) var(--spacing-4);
		border-radius: 6px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		font-size: var(--text-sm);
		text-decoration: none;
		display: inline-block;
		text-align: center;
	}

	.search-btn {
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		border: none;
		padding: 12px 32px;
		border-radius: 8px;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s ease;
		font-size: 1rem;
		margin-left: 12px;
		box-shadow: 0 4px 15px rgba(147, 199, 80, 0.3);
	}

	.search-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(147, 199, 80, 0.4);
		filter: brightness(1.1);
	}

	.filters-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: var(--spacing-4);
	}

	.filter-group {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-2);
	}

	.filter-group label {
		font-weight: 600;
		color: var(--foreground);
		font-size: var(--text-sm);
	}

	.filter-group select,
	.reset-btn {
		padding: var(--spacing-3) var(--spacing-4);
		border: 2px solid #e2e8f0;
		border-radius: 8px;
		font-size: var(--text-base);
		background: white;
		color: var(--foreground);
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.filter-group select:focus,
	.reset-btn:focus {
		outline: none;
		border-color: var(--tcp-primary);
		box-shadow: 0 0 0 3px rgba(147, 199, 80, 0.1);
	}

	.reset-btn {
		background: #f8fafc;
		border-color: #e2e8f0;
		color: var(--muted-foreground);
	}

	.reset-btn:hover {
		background: var(--tcp-primary);
		color: white;
		border-color: var(--tcp-primary);
	}

	/* Results Summary */
	.results-summary {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--spacing-8);
		padding: var(--spacing-4) 0;
		border-bottom: 1px solid #e2e8f0;
	}

	.results-count {
		font-weight: 600;
		color: var(--foreground);
	}

	.sort-options {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		color: var(--muted-foreground);
		font-size: var(--text-sm);
	}

	.sort-options select {
		padding: var(--spacing-2) var(--spacing-3);
		border: 1px solid #e2e8f0;
		border-radius: 6px;
		font-size: var(--text-sm);
		background: white;
		color: var(--foreground);
	}

	/* No Results */
	.no-results {
		text-align: center;
		padding: var(--spacing-16) var(--spacing-8);
		background: white;
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	}

	.no-results-icon {
		font-size: 4rem;
		margin-bottom: var(--spacing-4);
		opacity: 0.5;
	}

	.no-results h3 {
		font-size: var(--text-2xl);
		font-weight: 600;
		color: var(--foreground);
		margin-bottom: var(--spacing-3);
	}

	.no-results p {
		color: var(--muted-foreground);
		margin-bottom: var(--spacing-6);
		max-width: 400px;
		margin-left: auto;
		margin-right: auto;
	}

	.reset-btn-large {
		background: linear-gradient(135deg, var(--tcp-primary), var(--tcp-primary-dark));
		color: white;
		border: none;
		padding: var(--spacing-4) var(--spacing-8);
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.reset-btn-large:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(147, 199, 80, 0.3);
	}

	.properties-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: var(--spacing-8);
		max-width: 1000px;
		margin: 0 auto;
	}

	/* Stepped Slider Section */
	.properties-slider-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		padding: 40px 0;
		position: relative;
	}

	.slider-track {
		display: flex;
		gap: 32px;
		transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
		pointer-events: auto;
	}

	.slider-nav {
		display: flex;
		justify-content: center;
		gap: 12px;
		margin-top: 40px;
	}

	.nav-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #e2e8f0;
		border: none;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.nav-dot.active {
		background: var(--tcp-primary);
		transform: scale(1.3);
		box-shadow: 0 0 10px rgba(147, 199, 80, 0.5);
	}

	.property-card {
		width: 380px;
		flex-shrink: 0;
		background: white;
		border-radius: 24px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
		border: 1px solid rgba(147, 199, 80, 0.1);
		transition: all 0.4s ease;
		overflow: hidden;
	}

	.property-card:hover {
		transform: translateY(-12px) scale(1.02);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
		border-color: var(--tcp-primary);
		background: white;
	}

	.property-image {
		width: 100%;
		height: 240px;
		overflow: hidden;
		position: relative;
	}

	.property-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.property-card:hover .property-image img {
		transform: scale(1.15) rotate(2deg);
	}

	.property-content {
		padding: 24px;
	}

	.property-title {
		font-size: 1.25rem;
		font-weight: 700;
		color: #1a202c;
		margin-bottom: 8px;
		line-height: 1.3;
	}

	.property-location {
		font-size: 0.9rem;
		color: #718096;
		margin-bottom: 12px;
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.property-price {
		font-size: 1.5rem;
		font-weight: 800;
		color: var(--tcp-primary);
		margin-bottom: 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.listing-type-badge {
		font-size: 0.75rem;
		font-weight: 700;
		padding: 4px 12px;
		border-radius: 99px;
		background: linear-gradient(135deg, #93c750 0%, #7fb54c 100%);
		color: white;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.property-type {
		font-size: 0.85rem;
		color: #4a5568;
		background: #edf2f7;
		padding: 6px 12px;
		border-radius: 8px;
		display: inline-block;
		font-weight: 600;
		margin-bottom: 16px;
	}

	/* Animated Property Cards */
	.animated-card {
		animation: float 6s ease-in-out infinite;
		position: relative;
		overflow: hidden;
	}

	.animated-card:nth-child(2) {
		animation-delay: 2s;
	}

	.animated-card:nth-child(3) {
		animation-delay: 4s;
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.animated-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
		transition: left 0.5s;
	}

	.animated-card:hover::before {
		left: 100%;
	}

	/* Property Badges */
	.property-badge {
		position: absolute;
		top: 12px;
		left: 12px;
		padding: 6px 12px;
		border-radius: 20px;
		font-size: 12px;
		font-weight: 600;
		z-index: 10;
		animation: pulse 2s infinite;
	}

	.featured-badge {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
	}

	.hot-badge {
		background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
		color: white;
	}

	.new-badge {
		background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
		color: white;
	}

	@keyframes pulse {
		0%, 100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	/* Property Overlay */
	.property-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
		opacity: 0;
		transition: opacity 0.3s ease;
		display: flex;
		align-items: flex-end;
		padding: 16px;
	}

	.property-card:hover .property-overlay {
		opacity: 1;
	}

	.property-stats {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}

	.stat {
		background: rgba(255, 255, 255, 0.9);
		padding: 4px 8px;
		border-radius: 12px;
		font-size: 11px;
		font-weight: 600;
		color: #333;
		backdrop-filter: blur(10px);
	}

	/* Property Actions */
	.property-actions {
		display: flex;
		gap: 8px;
		margin-top: 12px;
		opacity: 0;
		transform: translateY(10px);
		transition: all 0.3s ease;
	}

	.property-card:hover .property-actions {
		opacity: 1;
		transform: translateY(0);
	}

	.view-btn, .save-btn {
		padding: 8px 16px;
		border: none;
		border-radius: 8px;
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.view-btn {
		background: var(--tcp-primary);
		color: white;
		flex: 1;
	}

	.view-btn:hover {
		background: var(--tcp-primary-dark);
		transform: translateY(-2px);
	}

	.save-btn {
		background: white;
		color: var(--tcp-primary);
		border: 2px solid var(--tcp-primary);
		width: 40px;
		height: 36px;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.save-btn:hover {
		background: var(--tcp-primary);
		color: white;
		transform: translateY(-2px) scale(1.1);
	}

	/* Enhanced hover effects */
	.animated-card:hover {
		transform: translateY(-12px) scale(1.02);
		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
		border-color: var(--tcp-primary);
	}

	.animated-card:hover .property-image img {
		transform: scale(1.1);
		filter: brightness(1.1);
	}

	/* Enhanced Hero Particles */
	.animated-particles {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}

	.particle-1, .particle-2, .particle-3 {
		position: absolute;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 50%;
		animation: float-particle 15s infinite ease-in-out;
	}

	.particle-1 {
		width: 80px;
		height: 80px;
		top: 20%;
		left: 10%;
		animation-delay: 0s;
	}

	.particle-2 {
		width: 60px;
		height: 60px;
		top: 60%;
		right: 15%;
		animation-delay: 5s;
	}

	.particle-3 {
		width: 100px;
		height: 100px;
		bottom: 20%;
		left: 20%;
		animation-delay: 10s;
	}

	@keyframes float-particle {
		0%, 100% {
			transform: translateY(0px) rotate(0deg);
			opacity: 0.3;
		}
		25% {
			transform: translateY(-20px) rotate(90deg);
			opacity: 0.6;
		}
		50% {
			transform: translateY(-40px) rotate(180deg);
			opacity: 0.4;
		}
		75% {
			transform: translateY(-20px) rotate(270deg);
			opacity: 0.7;
		}
	}

	/* Additional floating shapes */
	.floating-shapes {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}

	.shape {
		position: absolute;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
		border-radius: 50%;
		animation: float-shape 20s infinite ease-in-out;
	}

	.shape-1 {
		width: 120px;
		height: 120px;
		top: 10%;
		right: 10%;
		animation-delay: 0s;
	}

	.shape-2 {
		width: 80px;
		height: 80px;
		bottom: 15%;
		right: 25%;
		animation-delay: 7s;
	}

	.shape-3 {
		width: 150px;
		height: 150px;
		top: 50%;
		left: 5%;
		animation-delay: 14s;
	}

	.shape-4 {
		width: 60px;
		height: 60px;
		top: 30%;
		left: 30%;
		animation-delay: 3s;
	}

	.shape-5 {
		width: 90px;
		height: 90px;
		bottom: 10%;
		left: 15%;
		animation-delay: 11s;
	}

	.shape-6 {
		width: 110px;
		height: 110px;
		top: 70%;
		right: 5%;
		animation-delay: 6s;
	}

	@keyframes float-shape {
		0%, 100% {
			transform: translateY(0px) translateX(0px) rotate(0deg);
			opacity: 0.2;
		}
		33% {
			transform: translateY(-30px) translateX(20px) rotate(120deg);
			opacity: 0.4;
		}
		66% {
			transform: translateY(20px) translateX(-30px) rotate(240deg);
			opacity: 0.3;
		}
	}

	
	/* Contact Form Section */
	.contact-form-section {
		padding: var(--spacing-20) 0;
		background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
	}

	.contact-form-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-12);
		max-width: 1200px;
		margin: 0 auto;
	}

	.contact-form-content {
		background: white;
		padding: var(--spacing-8);
		border-radius: 16px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(147, 199, 80, 0.1);
	}

	.contact-form-header {
		text-align: center;
		margin-bottom: var(--spacing-8);
	}

	.contact-form-header h2 {
		font-size: var(--text-3xl);
		font-weight: 700;
		color: var(--foreground);
		margin-bottom: var(--spacing-4);
	}

	.contact-form-header p {
		font-size: var(--text-lg);
		color: var(--muted-foreground);
		max-width: 500px;
		margin: 0 auto;
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
		padding: var(--spacing-3) var(--spacing-4);
		border: 2px solid #e2e8f0;
		border-radius: 8px;
		font-size: var(--text-base);
		transition: all 0.3s ease;
		background: white;
	}

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--tcp-primary);
		box-shadow: 0 0 0 3px rgba(147, 199, 80, 0.1);
	}

	.form-group input.error,
	.form-group select.error,
	.form-group textarea.error {
		border-color: #ef4444;
	}

	.form-error {
		color: #ef4444;
		font-size: var(--text-sm);
		margin-top: var(--spacing-1);
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
		padding: var(--spacing-4) var(--spacing-8);
		border-radius: 8px;
		font-weight: 600;
		font-size: var(--text-base);
		cursor: pointer;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.submit-btn:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: 0 10px 25px rgba(147, 199, 80, 0.3);
	}

	.submit-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.submit-btn.loading {
		background: linear-gradient(135deg, #94a3b8, #64748b);
	}

	.form-success {
		color: var(--tcp-primary);
		font-weight: 600;
		font-size: var(--text-sm);
	}

	.contact-form-info {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-6);
	}

	.info-card {
		background: white;
		padding: var(--spacing-6);
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		border: 1px solid rgba(147, 199, 80, 0.1);
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-4);
		transition: all 0.3s ease;
	}

	.info-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 30px rgba(147, 199, 80, 0.15);
		border-color: var(--tcp-primary);
	}

	.info-icon {
		font-size: 2rem;
		flex-shrink: 0;
	}

	.info-content h3 {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--foreground);
		margin-bottom: var(--spacing-2);
	}

	.info-content p {
		color: var(--muted-foreground);
		line-height: 1.6;
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

		.hero-buttons {
			flex-direction: column;
			align-items: center;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}

		.properties-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-6);
		}

		/* Search and Filter Responsive */
		.search-filter-section {
			padding: var(--spacing-6);
		}

		.search-bar {
			flex-direction: column;
			align-items: stretch;
		}

		.search-icon {
			margin: var(--spacing-2) 0;
			text-align: center;
		}

		.search-btn {
			margin-left: 0;
			margin-top: var(--spacing-2);
		}

		.filters-container {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--spacing-3);
		}

		.results-summary {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-3);
		}

		/* Contact Form Responsive */
		.contact-form-wrapper {
			grid-template-columns: 1fr;
			gap: var(--spacing-8);
		}

		.form-row {
			grid-template-columns: 1fr;
			gap: var(--spacing-4);
		}

		.contact-form-content {
			padding: var(--spacing-6);
		}

		/* Chatbot Responsive */
		.chatbot-container {
			bottom: 20px;
			right: 20px;
		}

		.chatbot-toggle {
			width: 50px;
			height: 50px;
		}

		.chatbot-window {
			width: 300px;
			height: 450px;
			right: -10px;
		}

		.trust {
			padding: var(--spacing-12) 0;
		}

		.trust-icons {
			flex-direction: column;
			align-items: center;
			gap: var(--spacing-4);
		}

		.trust-item {
			text-align: center;
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

		.filters-container {
			grid-template-columns: 1fr;
			gap: var(--spacing-3);
		}
	}
</style>
