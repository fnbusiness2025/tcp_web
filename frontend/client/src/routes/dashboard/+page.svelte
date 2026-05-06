<script>
	import { onMount } from 'svelte';
	
	let user = null;
	let activeSection = 'properties';
	let sidebarOpen = true; 
	
	onMount(() => {
		// Get user data from localStorage
		const userData = localStorage.getItem('tcp_user');
		if (userData) {
			user = JSON.parse(userData);
		} else {
			// Redirect to sign in if no user data
			window.location.href = '/signin';
		}
		
		// Handle screen resize to close sidebar on smaller screens
		const handleResize = () => {
			if (window.innerWidth < 1024) {
				sidebarOpen = false;
			} else {
				sidebarOpen = true;
			}
		};
		
		handleResize();
		window.addEventListener('resize', handleResize);
		
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
	
	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}
	
	function handleLogout() {
		localStorage.removeItem('tcp_token');
		localStorage.removeItem('tcp_user');
		window.location.href = '/signin';
	}
	
	function setActiveSection(section) {
		activeSection = section;
		// On mobile, close sidebar after selection
		if (window.innerWidth < 1024) {
			sidebarOpen = false;
		}
	}
</script>

<svelte:head>
	<title>Dashboard - TPC Malawi</title>
	<meta name="description" content="TPC Malawi Dashboard - Manage properties and approvals." />
</svelte:head>

<div class="dashboard-wrapper" class:sidebar-collapsed={!sidebarOpen}>
	
	<!-- Mobile Overlay -->
	{#if sidebarOpen}
		<div class="mobile-overlay" on:click={toggleSidebar} aria-hidden="true"></div>
	{/if}

	<!-- Sidebar -->
	<aside class="sidebar">
		<div class="sidebar-inner">
			<div class="sidebar-header">
				<div class="logo">
					<span class="logo-icon">🏠</span>
					<div class="logo-text">
						<h3>TPC Malawi</h3>
						<span>Management</span>
					</div>
				</div>
			</div>

			{#if user}
				<div class="user-profile">
					<div class="avatar">
						{(user.firstName || user.first_name || 'U').charAt(0)}
						{(user.lastName || user.last_name || 'U').charAt(0)}
					</div>
					<div class="info">
						<p class="name">
							{user.firstName || user.first_name || ''} 
							{user.lastName || user.last_name || ''}
						</p>
						<p class="email">{user.email || ''}</p>
					</div>
				</div>
			{/if}

			<nav class="nav-menu">
				<button 
					class="nav-item" 
					class:active={activeSection === 'properties'}
					on:click={() => setActiveSection('properties')}
				>
					<span class="icon">📊</span>
					<span class="label">Properties</span>
				</button>
				
				<button 
					class="nav-item" 
					class:active={activeSection === 'approvals'}
					on:click={() => setActiveSection('approvals')}
				>
					<span class="icon">✅</span>
					<span class="label">Approvals</span>
				</button>
				
				<button 
					class="nav-item" 
					class:active={activeSection === 'settings'}
					on:click={() => setActiveSection('settings')}
				>
					<span class="icon">⚙️</span>
					<span class="label">Settings</span>
				</button>
			</nav>

			<div class="sidebar-footer">
				<button class="logout-btn" on:click={handleLogout}>
					<span class="icon">🚪</span>
					<span class="label">Logout</span>
				</button>
			</div>
		</div>
	</aside>

	<!-- Main Content Area -->
	<main class="main-content">
		<!-- Header -->
		<header class="content-header">
			<div class="header-left">
				<button class="hamburger-toggle" on:click={toggleSidebar} aria-label="Toggle Menu">
					<div class="hamburger-icon" class:open={sidebarOpen}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</button>
				<h1 class="page-title">
					{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
				</h1>
			</div>

			<div class="header-right">
				<div class="header-actions">
					<button class="action-btn notification">
						🔔 <span class="badge"></span>
					</button>
					<div class="user-greeting">
						Hi, {user?.firstName || user?.first_name || 'User'}
					</div>
				</div>
			</div>
		</header>

		<!-- Dynamic Section Content -->
		<div class="content-body">
			{#if activeSection === 'properties'}
				<div class="section-container fade-in">
					<header class="section-header">
						<h2>Properties Overview</h2>
						<button class="btn-create">+ Add New Property</button>
					</header>

					<div class="stats-grid">
						<div class="stat-card">
							<div class="stat-icon blue">🏠</div>
							<div class="stat-info">
								<p class="stat-label">Total Properties</p>
								<p class="stat-value">0</p>
							</div>
						</div>
						<div class="stat-card">
							<div class="stat-icon green">📈</div>
							<div class="stat-info">
								<p class="stat-label">Active Listings</p>
								<p class="stat-value">0</p>
							</div>
						</div>
						<div class="stat-card">
							<div class="stat-icon orange">⏳</div>
							<div class="stat-info">
								<p class="stat-label">Pending Review</p>
								<p class="stat-value">0</p>
							</div>
						</div>
					</div>

					<div class="table-container">
						<div class="empty-state">
							<div class="empty-icon">📂</div>
							<h3>No properties found</h3>
							<p>Get started by adding your first property listing.</p>
						</div>
					</div>
				</div>

			{:else if activeSection === 'approvals'}
				<div class="section-container fade-in">
					<header class="section-header">
						<h2>Approvals Queue</h2>
					</header>
					<div class="stats-grid">
						<div class="stat-card">
							<div class="stat-icon">🔔</div>
							<div class="stat-info">
								<p class="stat-label">Pending</p>
								<p class="stat-value">0</p>
							</div>
						</div>
					</div>
					<div class="empty-state">
						<p>Your approval queue is empty.</p>
					</div>
				</div>
			{:else}
				<div class="section-container fade-in">
					<p>Section under development.</p>
				</div>
			{/if}
		</div>
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #f8fafc;
		overflow-x: hidden;
	}

	.dashboard-wrapper {
		display: grid;
		grid-template-columns: 280px 1fr;
		min-height: 100vh;
		transition: all 0.3s ease;
	}

	.dashboard-wrapper.sidebar-collapsed {
		grid-template-columns: 0px 1fr;
	}

	/* Mobile Overlay */
	.mobile-overlay {
		display: none;
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(2px);
		z-index: 1000;
	}

	/* Sidebar Styles */
	.sidebar {
		background: white;
		border-right: 1px solid #e2e8f0;
		height: 100vh;
		position: sticky;
		top: 0;
		z-index: 1001;
		overflow: hidden;
		transition: all 0.3s ease;
	}

	.sidebar-inner {
		width: 280px;
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
	}

	.sidebar-header {
		margin-bottom: 2rem;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.logo-icon {
		font-size: 1.5rem;
		background: #f0fdf4;
		padding: 0.5rem;
		border-radius: 12px;
	}

	.logo-text h3 {
		margin: 0;
		font-size: 1.125rem;
		color: #1e293b;
	}

	.logo-text span {
		font-size: 0.75rem;
		color: #94a3b8;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.user-profile {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: #f8fafc;
		border-radius: 16px;
		margin-bottom: 2rem;
	}

	.avatar {
		width: 40px;
		height: 40px;
		background: #93c750;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
	}

	.user-profile .name {
		font-weight: 600;
		font-size: 0.875rem;
		color: #334155;
		margin: 0;
	}

	.user-profile .email {
		font-size: 0.75rem;
		color: #64748b;
		margin: 0;
		max-width: 140px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.nav-menu {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.nav-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1rem;
		border: none;
		background: transparent;
		color: #64748b;
		border-radius: 12px;
		cursor: pointer;
		font-weight: 500;
		transition: all 0.2s;
		text-align: left;
		width: 100%;
	}

	.nav-item:hover {
		background: #f1f5f9;
		color: #1e293b;
	}

	.nav-item.active {
		background: #f0fdf4;
		color: #93c750;
	}

	.sidebar-footer {
		margin-top: auto;
		padding-top: 1rem;
		border-top: 1px solid #f1f5f9;
	}

	.logout-btn {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1rem;
		border: none;
		background: transparent;
		color: #ef4444;
		border-radius: 12px;
		cursor: pointer;
		font-weight: 500;
		transition: all 0.2s;
	}

	.logout-btn:hover {
		background: #fef2f2;
	}

	/* Main Content Styles */
	.main-content {
		width: 100%;
		min-width: 0;
		display: flex;
		flex-direction: column;
	}

	.content-header {
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 2rem;
		background: white;
		border-bottom: 1px solid #e2e8f0;
		position: sticky;
		top: 0;
		z-index: 999;
	}

	.header-left {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.hamburger-toggle {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 8px;
		background: #f8fafc;
	}

	.hamburger-icon {
		width: 20px;
		height: 14px;
		position: relative;
	}

	.hamburger-icon span {
		display: block;
		position: absolute;
		height: 2px;
		width: 100%;
		background: #64748b;
		border-radius: 2px;
		transition: all 0.25s ease-in-out;
	}

	.hamburger-icon span:nth-child(1) { top: 0; }
	.hamburger-icon span:nth-child(2) { top: 6px; }
	.hamburger-icon span:nth-child(3) { top: 12px; }

	.page-title {
		font-size: 1.25rem;
		font-weight: 700;
		color: #1e293b;
		margin: 0;
	}

	.header-right .header-actions {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.action-btn {
		background: none;
		border: none;
		font-size: 1.25rem;
		cursor: pointer;
		position: relative;
	}

	.badge {
		position: absolute;
		top: -2px;
		right: -2px;
		width: 8px;
		height: 8px;
		background: #ef4444;
		border-radius: 50%;
		border: 2px solid white;
	}

	.user-greeting {
		font-weight: 500;
		color: #64748b;
		font-size: 0.875rem;
	}

	/* Section Content */
	.content-body {
		padding: 2rem;
		flex: 1;
	}

	.section-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	.btn-create {
		background: #93c750;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 12px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s;
	}

	.btn-create:hover {
		background: #7fb045;
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(147, 199, 80, 0.2);
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.stat-card {
		background: white;
		padding: 1.5rem;
		border-radius: 20px;
		display: flex;
		align-items: center;
		gap: 1.25rem;
		border: 1px solid #f1f5f9;
		box-shadow: 0 2px 4px rgba(0,0,0,0.02);
	}

	.stat-icon {
		width: 54px;
		height: 54px;
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		background: #f8fafc;
	}

	.stat-value {
		font-size: 1.5rem;
		font-weight: 700;
		color: #1e293b;
		margin: 0;
	}

	.stat-label {
		font-size: 0.875rem;
		color: #64748b;
		margin: 0;
	}

	.table-container {
		background: white;
		border-radius: 20px;
		padding: 2rem;
		border: 1px solid #f1f5f9;
		min-height: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.empty-state {
		text-align: center;
		color: #94a3b8;
	}

	.empty-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	/* Responsive Transitions */
	@media (max-width: 1023px) {
		.dashboard-wrapper {
			grid-template-columns: 1fr;
		}
		
		.sidebar {
			position: fixed;
			left: 0;
			bottom: 0;
			transform: translateX(-100%);
		}

		.dashboard-wrapper:not(.sidebar-collapsed) .sidebar {
			transform: translateX(0);
		}

		.dashboard-wrapper:not(.sidebar-collapsed) .mobile-overlay {
			display: block;
		}

		.content-header {
			padding: 0 1rem;
		}
	}

	.fade-in {
		animation: fadeIn 0.4s ease-out;
	}

	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>
