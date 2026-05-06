<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let isAuthenticated = false;

	onMount(async () => {
		// Check session authentication
		try {
			const response = await fetch('http://localhost:3000/api/auth/check', {
				credentials: 'include'
			});

			if (response.ok) {
				const data = await response.json();
				if (data.success && data.data.authenticated) {
					isAuthenticated = true;
				} else {
					goto('/');
				}
			} else {
				goto('/');
			}
		} catch (err) {
			console.error('Session check failed:', err);
			goto('/');
		}
	});

	async function handleLogout() {
		try {
			// Call backend logout endpoint to destroy session
			await fetch('http://localhost:3000/api/auth/logout', {
				method: 'POST',
				credentials: 'include' // Important for cookies
			});
		} catch (err) {
			console.error('Logout error:', err);
		} finally {
			// Clear local storage regardless of API call success
			localStorage.removeItem('adminData');
			goto('/');
		}
	}

	// Mock data for dashboard
	const stats = {
		totalProperties: 24,
		activeValuations: 8,
		pendingRequests: 3,
		totalClients: 45
	};

	const recentActivities = [
		{ id: 1, type: 'valuation', property: 'Commercial Building A', status: 'completed', date: '2024-04-22' },
		{ id: 2, type: 'management', property: 'Residential Complex B', status: 'pending', date: '2024-04-22' },
		{ id: 3, type: 'valuation', property: 'Industrial Site C', status: 'in-progress', date: '2024-04-21' }
	];
</script>

<svelte:head>
	<title>Admin Dashboard - TPC Malawi</title>
	<meta name="description" content="Admin dashboard for TPC Malawi property management system" />
</svelte:head>

{#if isAuthenticated}
	<div class="dashboard-container">
		<!-- Header -->
		<header class="dashboard-header">
			<div class="header-content">
				<div class="logo-section">
					<img src="/tcp.jpeg" alt="TCP Malawi" class="logo" />
					<h1>Admin Dashboard</h1>
				</div>
				<button class="logout-btn" on:click={handleLogout}>
					Logout
				</button>
			</div>
		</header>

		<!-- Main Content -->
		<main class="dashboard-main">
			<!-- Welcome Section -->
			<section class="welcome-section">
				<h2>Welcome back, Admin!</h2>
				<p>Here's an overview of your property management system</p>
			</section>

			<!-- Stats Grid -->
			<section class="stats-grid">
				<div class="stat-card">
					<div class="stat-icon">🏢</div>
					<div class="stat-content">
						<h3>{stats.totalProperties}</h3>
						<p>Total Properties</p>
					</div>
				</div>

				<div class="stat-card">
					<div class="stat-icon">📊</div>
					<div class="stat-content">
						<h3>{stats.activeValuations}</h3>
						<p>Active Valuations</p>
					</div>
				</div>

				<div class="stat-card">
					<div class="stat-icon">⏳</div>
					<div class="stat-content">
						<h3>{stats.pendingRequests}</h3>
						<p>Pending Requests</p>
					</div>
				</div>

				<div class="stat-card">
					<div class="stat-icon">👥</div>
					<div class="stat-content">
						<h3>{stats.totalClients}</h3>
						<p>Total Clients</p>
					</div>
				</div>
			</section>

			<!-- Recent Activities -->
			<section class="activities-section">
				<h2>Recent Activities</h2>
				<div class="activities-list">
					{#each recentActivities as activity}
						<div class="activity-item">
							<div class="activity-icon">
								{#if activity.type === 'valuation'}
									📊
								{:else if activity.type === 'management'}
									🏢
								{:else}
									📋
								{/if}
							</div>
							<div class="activity-content">
								<h4>{activity.property}</h4>
								<p>{activity.type} - {activity.status}</p>
							</div>
							<div class="activity-date">
								{activity.date}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Quick Actions -->
			<section class="quick-actions">
				<h2>Quick Actions</h2>
				<div class="actions-grid">
					<button class="action-btn">
						<span class="action-icon">➕</span>
						<span>Add Property</span>
					</button>
					<button class="action-btn">
						<span class="action-icon">📊</span>
						<span>New Valuation</span>
					</button>
					<button class="action-btn">
						<span class="action-icon">👥</span>
						<span>Manage Clients</span>
					</button>
					<button class="action-btn">
						<span class="action-icon">📈</span>
						<span>View Reports</span>
					</button>
				</div>
			</section>
		</main>
	</div>
{/if}

<style>
	.dashboard-container {
		min-height: 100vh;
		background: #f8fafc;
	}

	.dashboard-header {
		background: white;
		border-bottom: 1px solid #e2e8f0;
		padding: 0;
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.header-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 16px 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo-section {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.logo {
		width: 40px;
		height: 40px;
		object-fit: contain;
	}

	.logo-section h1 {
		color: #1a202c;
		font-size: 20px;
		font-weight: 700;
		margin: 0;
	}

	.logout-btn {
		background: #ef4444;
		color: white;
		border: none;
		padding: 8px 16px;
		border-radius: 6px;
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	.logout-btn:hover {
		background: #dc2626;
	}

	.dashboard-main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 24px;
	}

	.welcome-section {
		margin-bottom: 32px;
	}

	.welcome-section h2 {
		color: #1a202c;
		font-size: 28px;
		font-weight: 700;
		margin-bottom: 8px;
	}

	.welcome-section p {
		color: #64748b;
		font-size: 16px;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 24px;
		margin-bottom: 32px;
	}

	.stat-card {
		background: white;
		border-radius: 12px;
		padding: 24px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		gap: 16px;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.stat-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.stat-icon {
		font-size: 32px;
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f1f5f9;
		border-radius: 12px;
	}

	.stat-content h3 {
		color: #1a202c;
		font-size: 32px;
		font-weight: 700;
		margin: 0 0 4px 0;
	}

	.stat-content p {
		color: #64748b;
		font-size: 14px;
		margin: 0;
	}

	.activities-section {
		background: white;
		border-radius: 12px;
		padding: 24px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		margin-bottom: 32px;
	}

	.activities-section h2 {
		color: #1a202c;
		font-size: 20px;
		font-weight: 700;
		margin-bottom: 20px;
	}

	.activities-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.activity-item {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 16px;
		background: #f8fafc;
		border-radius: 8px;
		transition: background-color 0.2s ease;
	}

	.activity-item:hover {
		background: #f1f5f9;
	}

	.activity-icon {
		font-size: 24px;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;
		border-radius: 8px;
	}

	.activity-content {
		flex: 1;
	}

	.activity-content h4 {
		color: #1a202c;
		font-size: 16px;
		font-weight: 600;
		margin: 0 0 4px 0;
	}

	.activity-content p {
		color: #64748b;
		font-size: 14px;
		margin: 0;
	}

	.activity-date {
		color: #94a3b8;
		font-size: 12px;
	}

	.quick-actions h2 {
		color: #1a202c;
		font-size: 20px;
		font-weight: 700;
		margin-bottom: 20px;
	}

	.actions-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 16px;
	}

	.action-btn {
		background: white;
		border: 2px solid #e2e8f0;
		border-radius: 8px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		cursor: pointer;
		transition: all 0.2s ease;
		font-size: 14px;
		font-weight: 600;
		color: #1a202c;
	}

	.action-btn:hover {
		border-color: #3b82f6;
		background: #eff6ff;
		transform: translateY(-2px);
	}

	.action-icon {
		font-size: 24px;
	}

	@media (max-width: 768px) {
		.dashboard-main {
			padding: 16px;
		}

		.stats-grid {
			grid-template-columns: 1fr;
		}

		.actions-grid {
			grid-template-columns: 1fr 1fr;
		}

		.activity-item {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
