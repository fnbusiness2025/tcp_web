<script>
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let loading = false;
	let error = '';

	async function handleLogin() {
		loading = true;
		error = '';

		try {
			const response = await fetch('http://localhost:3000/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include', // Important for cookies
				body: JSON.stringify({
					email,
					password
				})
			});

			const data = await response.json();

			if (data.success) {
				// Session is automatically handled by cookies
				// Store minimal admin data for UI purposes
				localStorage.setItem('adminData', JSON.stringify(data.data.admin));
				await goto('/dashboard');
			} else {
				error = data.message || 'Login failed';
			}
		} catch (err) {
			console.error('Login error:', err);
			error = 'Network error. Please check if the backend server is running.';
		}

		loading = false;
	}
</script>

<svelte:head>
	<title>Admin Login - TCP Malawi</title>
	<meta name="description" content="Admin login for TCP Malawi property management system" />
</svelte:head>

<div class="login-container">
	<div class="login-card">
		<div class="login-header">
			<img src="/tcp.jpeg" alt="TCP Malawi" class="logo" />
			<h1>Admin Login</h1>
			<p>TCP Malawi Property Management System</p>
		</div>

		<form on:submit|preventDefault={handleLogin} class="login-form">
			<div class="form-group">
				<label for="email">Email Address</label>
				<input
					id="email"
					type="email"
					bind:value={email}
					placeholder="admin@tcpmalawi.com"
					required
				/>
			</div>

			<div class="form-group">
				<label for="password">Password</label>
				<input
					id="password"
					type="password"
					bind:value={password}
					placeholder="Enter your password"
					required
				/>
			</div>

			{#if error}
				<div class="error-message">
					{error}
				</div>
			{/if}

			<button type="submit" class="login-btn" disabled={loading}>
				{#if loading}
					<span class="spinner"></span>
					Signing in...
				{:else}
					Sign In
				{/if}
			</button>
		</form>

		<div class="login-footer">
			<p>Default credentials: admin@tcpmalawi.com / admin123</p>
		</div>
	</div>
</div>

<style>
	.login-container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		padding: 20px;
	}

	.login-card {
		background: white;
		border-radius: 12px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
		padding: 40px;
		width: 100%;
		max-width: 400px;
	}

	.login-header {
		text-align: center;
		margin-bottom: 30px;
	}

	.logo {
		width: 60px;
		height: 60px;
		object-fit: contain;
		margin-bottom: 16px;
	}

	.login-header h1 {
		color: #333;
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 8px;
	}

	.login-header p {
		color: #666;
		font-size: 14px;
	}

	.login-form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.form-group label {
		color: #333;
		font-weight: 600;
		font-size: 14px;
	}

	.form-group input {
		padding: 12px 16px;
		border: 2px solid #e1e5e9;
		border-radius: 8px;
		font-size: 16px;
		transition: border-color 0.3s ease;
	}

	.form-group input:focus {
		outline: none;
		border-color: #667eea;
	}

	.error-message {
		background: #fee;
		color: #c33;
		padding: 12px;
		border-radius: 8px;
		font-size: 14px;
		text-align: center;
	}

	.login-btn {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border: none;
		padding: 14px 20px;
		border-radius: 8px;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		transition: transform 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.login-btn:hover:not(:disabled) {
		transform: translateY(-2px);
	}

	.login-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.spinner {
		width: 16px;
		height: 16px;
		border: 2px solid #ffffff;
		border-top: 2px solid transparent;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	.login-footer {
		margin-top: 30px;
		text-align: center;
	}

	.login-footer p {
		color: #999;
		font-size: 12px;
	}

	@media (max-width: 480px) {
		.login-card {
			padding: 30px 20px;
		}

		.login-header h1 {
			font-size: 20px;
		}
	}
</style>
