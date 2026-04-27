<script>
	export let currentPage = '';
	
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

<!-- Navigation -->
<nav class="navbar">
	<div class="container">
		<div class="nav-content">
			<div class="nav-logo">
				<img src="/tcp.jpeg" alt="TPC" style="height: 60px; width: 120px; object-fit: contain;" />
				<span class="company-name-nav">TPC Malawi</span>
			</div>
			
			<!-- Desktop Navigation -->
			<ul class="nav-menu desktop-menu">
				<li><a href="/" class:active={currentPage === 'home'}>Home</a></li>
				<li><a href="/about" class:active={currentPage === 'about'}>About</a></li>
				<li><a href="/services" class:active={currentPage === 'services'}>Services</a></li>
				<li><a href="/#listings" on:click={smoothScroll}>Properties</a></li>
				<li><a href="/contact" class:active={currentPage === 'contact'}>Contact</a></li>
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
			<li><a href="/" on:click={closeMobileMenu} class:active={currentPage === 'home'}>Home</a></li>
			<li><a href="/about" on:click={closeMobileMenu} class:active={currentPage === 'about'}>About</a></li>
			<li><a href="/services" on:click={closeMobileMenu} class:active={currentPage === 'services'}>Services</a></li>
			<li><a href="/#listings" on:click={smoothScroll}>Properties</a></li>
			<li><a href="/contact" on:click={closeMobileMenu} class:active={currentPage === 'contact'}>Contact</a></li>
			<li><a href="/contact" class="btn btn-primary" on:click={closeMobileMenu}>Get Started</a></li>
		</ul>
	</div>
</nav>

<style>
	/* Navigation Styles */
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
		height: 72px;
	}

	.nav-logo {
		display: flex;
		align-items: center;
		gap: 0;
	}

	.company-name-nav {
		font-size: var(--text-lg);
		font-weight: 700;
		color: var(--tcp-primary);
	}

	.nav-menu {
		display: flex;
		align-items: center;
		gap: var(--spacing-8);
		list-style: none;
		margin: 0;
		padding: 0;
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

	/* Mobile Menu */
	.mobile-menu {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background: rgba(255, 255, 255, 0.98);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--border);
		flex-direction: column;
		padding: var(--spacing-4);
		gap: var(--spacing-3);
		transform: translateY(-20px);
		opacity: 0;
		transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		box-shadow: var(--shadow-lg);
		visibility: hidden;
	}

	.mobile-menu.active {
		display: flex;
		transform: translateY(0);
		opacity: 1;
		visibility: visible;
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

	/* Responsive Design */
	@media (max-width: 768px) {
		.desktop-menu {
			display: none;
		}
		.mobile-menu.active {
			display: flex;
		}
		.hamburger {
			display: flex;
		}
	}

	/* CSS Variables */
	:global(:root) {
		--tcp-primary: #93c750;
		--tcp-primary-dark: #7fb54c;
		--foreground: #1e293b;
		--background: #ffffff;
		--border: #e2e8f0;
		--radius: 8px;
		--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
		--transition-fast: 150ms ease;
		--spacing-2: 8px;
		--spacing-3: 12px;
		--spacing-4: 16px;
		--spacing-6: 24px;
		--spacing-8: 32px;
		--text-sm: 14px;
		--text-lg: 18px;
	}
</style>
