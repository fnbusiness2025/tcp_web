<script>
	export let currentPage = '';
	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<!-- Simple Navigation - No Transitions, No Animations -->
<nav style="background: white; border-bottom: 1px solid #e2e8f0; padding: 1rem 0; position: sticky; top: 0; z-index: 100; display: block;" class="desktop-nav">
	<div style="max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
		<!-- Logo -->
		<div style="display: flex; align-items: center; gap: 12px;">
			<img src="/tcp.jpeg" alt="TPC" style="height: 50px; width: 100px; object-fit: contain;" />
			<span style="font-size: 1.2rem; font-weight: 700; color: #93c750;">TPC Malawi</span>
		</div>
		
		<!-- Navigation Links - Fixed Width, No Animations -->
		<div style="display: flex; align-items: center; gap: 2rem;">
			<a href="/" style="color: {currentPage === 'home' ? '#93c750' : '#1a1a1a'}; text-decoration: none; font-weight: 500; width: 60px; text-align: center;">Home</a>
			<a href="/about" style="color: {currentPage === 'about' ? '#93c750' : '#1a1a1a'}; text-decoration: none; font-weight: 500; width: 60px; text-align: center;">About</a>
			<a href="/services" style="color: {currentPage === 'services' ? '#93c750' : '#1a1a1a'}; text-decoration: none; font-weight: 500; width: 70px; text-align: center;">Services</a>
			<a href="/contact" style="color: {currentPage === 'contact' ? '#93c750' : '#1a1a1a'}; text-decoration: none; font-weight: 500; width: 70px; text-align: center;">Contact</a>
			<a href="/signin" style="background: #93c750; color: white; padding: 0.5rem 1rem; border-radius: 6px; text-decoration: none; font-weight: 500; width: 100px; text-align: center;">Sign In</a>
		</div>
	</div>
</nav>

<!-- Mobile Navigation -->
<nav style="background: white; border-bottom: 1px solid #e2e8f0; padding: 1rem 0; display: none;" class="mobile-nav">
	<div style="max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
		<!-- Logo -->
		<div style="display: flex; align-items: center; gap: 12px;">
			<img src="/tcp.jpeg" alt="TPC" style="height: 50px; width: 100px; object-fit: contain;" />
			<span style="font-size: 1.2rem; font-weight: 700; color: #93c750;">TPC Malawi</span>
		</div>
		
		<!-- Hamburger Menu Button -->
		<button on:click={toggleMobileMenu} style="background: none; border: none; font-size: 1.5rem; cursor: pointer; display: flex; flex-direction: column; gap: 4px;">
			<div style="width: 25px; height: 3px; background: #1a1a1a; border-radius: 2px;"></div>
			<div style="width: 25px; height: 3px; background: #1a1a1a; border-radius: 2px;"></div>
			<div style="width: 25px; height: 3px; background: #1a1a1a; border-radius: 2px;"></div>
		</button>
	</div>
	
	<!-- Mobile Menu Items -->
	{#if mobileMenuOpen}
	<div style="background: white; border-top: 1px solid #e2e8f0; padding: 1rem 0;">
		<div style="max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; flex-direction: column; gap: 1rem;">
			<a href="/" on:click={closeMobileMenu} style="color: {currentPage === 'home' ? '#93c750' : '#1a1a1a'}; text-decoration: none; font-weight: 500; padding: 0.5rem 0;">Home</a>
			<a href="/about" on:click={closeMobileMenu} style="color: {currentPage === 'about' ? '#93c750' : '#1a1a1a'}; text-decoration: none; font-weight: 500; padding: 0.5rem 0;">About</a>
			<a href="/services" on:click={closeMobileMenu} style="color: {currentPage === 'services' ? '#93c750' : '#1a1a1a'}; text-decoration: none; font-weight: 500; padding: 0.5rem 0;">Services</a>
			<a href="/contact" on:click={closeMobileMenu} style="color: {currentPage === 'contact' ? '#93c750' : '#1a1a1a'}; text-decoration: none; font-weight: 500; padding: 0.5rem 0;">Contact</a>
			<a href="/signin" on:click={closeMobileMenu} style="background: #93c750; color: white; padding: 0.5rem 1rem; border-radius: 6px; text-decoration: none; font-weight: 500; text-align: center; display: block;">Sign In</a>
		</div>
	</div>
	{/if}
</nav>

<style>
	/* Desktop navigation - hide on mobile */
	.desktop-nav {
		display: block;
	}
	
	/* Mobile navigation - show on mobile */
	.mobile-nav {
		display: none;
	}
	
	@media (max-width: 768px) {
		.desktop-nav {
			display: none !important;
		}
		.mobile-nav {
			display: block !important;
		}
	}
</style>
