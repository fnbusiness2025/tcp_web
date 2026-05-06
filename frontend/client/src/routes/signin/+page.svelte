<script>
	import Navigation from '$lib/Navigation.svelte';
	
	let isSignIn = true;
	let signInEmail = '';
	let signInPassword = '';
	let signUpEmail = '';
	let signUpPassword = '';
	let signUpFirstName = '';
	let signUpLastName = '';
	let signUpPhone = '';
	let loading = false;
	let message = '';
	let messageType = '';
	let showPassword = false;
	let showSignUpPassword = false;
	
	const API_BASE = 'http://localhost:3001/api/v1';
	
	async function handleSignIn() {
		if (!signInEmail || !signInPassword) {
			showMessage('Please fill in all fields', 'error');
			return;
		}
		
		loading = true;
		message = '';
		
		try {
			const response = await fetch(`${API_BASE}/auth/signin`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: signInEmail,
					password: signInPassword
				})
			});
			
			const data = await response.json();
			
			if (data.success) {
				// Store token and user data
				localStorage.setItem('tcp_token', data.data.token);
				localStorage.setItem('tcp_user', JSON.stringify(data.data.user));
				
				showMessage('Sign in successful! Redirecting...', 'success');
				
				// Redirect to dashboard after successful sign in
				setTimeout(() => {
					window.location.href = '/dashboard';
				}, 1500);
			} else {
				showMessage(data.message || 'Sign in failed', 'error');
			}
		} catch (error) {
			console.error('Sign in error:', error);
			showMessage('Network error. Please try again.', 'error');
		} finally {
			loading = false;
		}
	}
	
	async function handleSignUp() {
		if (!signUpFirstName || !signUpLastName || !signUpPhone || !signUpEmail || !signUpPassword) {
			showMessage('Please fill in all fields', 'error');
			return;
		}
		
		loading = true;
		message = '';
		
		try {
			const response = await fetch(`${API_BASE}/auth/signup`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					firstName: signUpFirstName,
					lastName: signUpLastName,
					phone: signUpPhone,
					email: signUpEmail,
					password: signUpPassword
				})
			});
			
			const data = await response.json();
			
			if (data.success) {
				// Store token and user data
				localStorage.setItem('tcp_token', data.data.token);
				localStorage.setItem('tcp_user', JSON.stringify(data.data.user));
				
				showMessage('Account created successfully! Redirecting...', 'success');
				
				// Redirect to dashboard after successful sign up
				setTimeout(() => {
					window.location.href = '/dashboard';
				}, 1500);
			} else {
				showMessage(data.message || 'Sign up failed', 'error');
			}
		} catch (error) {
			console.error('Sign up error:', error);
			showMessage('Network error. Please try again.', 'error');
		} finally {
			loading = false;
		}
	}
	
	function toggleForm() {
		isSignIn = !isSignIn;
		message = '';
	}
	
	function showMessage(msg, type) {
		message = msg;
		messageType = type;
	}
</script>

<svelte:head>
	<title>Sign In - Terrestrial Property Consulting Limited | TPC Malawi</title>
	<meta name="description" content="Sign in or create an account to access TPC Malawi property services." />
</svelte:head>

<Navigation currentPage="signin" />

<!-- Main Content -->
<main style="min-height: 100vh; background: #f8fafc; padding: 2rem 0;">
	<div style="max-width: 600px; margin: 0 auto; padding: 0 20px;">
		<!-- Sign In Form -->
		{#if isSignIn}
		<div style="background: white; border-radius: 12px; padding: 2.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
			<div style="text-align: center; margin-bottom: 2rem;">
				<h1 style="color: #1a1a1a; font-size: 1.875rem; font-weight: 700; margin-bottom: 0.5rem;">Sign In</h1>
				<p style="color: #64748b; font-size: 1rem;">Welcome back to TPC Malawi</p>
			</div>
			
			{#if message}
			<div style="margin-bottom: 1rem; padding: 0.75rem; border-radius: 6px; text-align: center; background: {messageType === 'error' ? '#fef2f2' : '#f0fdf4'}; color: {messageType === 'error' ? '#dc2626' : '#16a34a'}; border: 1px solid {messageType === 'error' ? '#fecaca' : '#bbf7d0'};">
				{message}
			</div>
			{/if}
			
			<form on:submit|preventDefault={handleSignIn}>
				<div style="margin-bottom: 1.5rem;">
					<label for="signin-email" style="display: block; color: #374151; font-weight: 500; margin-bottom: 0.5rem;">Email</label>
					<input 
						id="signin-email"
						type="email" 
						bind:value={signInEmail}
						placeholder="Enter your email"
						required
						style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem; outline: none; box-sizing: border-box;"
					/>
				</div>
				
				<div style="margin-bottom: 1.5rem;">
					<label for="signin-password" style="display: block; color: #374151; font-weight: 500; margin-bottom: 0.5rem;">Password</label>
					<div style="position: relative;">
						<input 
							id="signin-password"
							type={showPassword ? 'text' : 'password'} 
							bind:value={signInPassword}
							placeholder="Enter your password"
							required
							style="width: 100%; padding: 0.75rem; padding-right: 2.5rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem; outline: none; box-sizing: border-box;"
						/>
						<button 
							type="button"
							on:click={() => showPassword = !showPassword}
							style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; color: #6b7280; padding: 0.25rem;"
							title={showPassword ? 'Hide password' : 'Show password'}
						>
							{#if showPassword}
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
									<line x1="1" y1="1" x2="23" y2="23"></line>
								</svg>
							{:else}
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
									<circle cx="12" cy="12" r="3"></circle>
								</svg>
							{/if}
						</button>
					</div>
				</div>
				
				<button 
					type="submit"
					disabled={loading}
					style="width: 100%; background: {loading ? '#9ca3af' : '#93c750'}; color: white; padding: 0.75rem; border: none; border-radius: 6px; font-size: 1rem; font-weight: 500; cursor: {loading ? 'not-allowed' : 'pointer'}; margin-bottom: 1rem;"
				>
					{loading ? 'Signing In...' : 'Sign In'}
				</button>
			</form>
			
			<div style="text-align: center;">
				<p style="color: #64748b; font-size: 0.875rem;">
					Don't have an account? 
					<button on:click={toggleForm} style="background: none; border: none; color: #93c750; font-weight: 500; cursor: pointer; text-decoration: underline;">
						Sign Up
					</button>
				</p>
			</div>
		</div>
		
		<!-- Sign Up Form -->
		{:else}
		<div style="background: white; border-radius: 12px; padding: 2.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
			<div style="text-align: center; margin-bottom: 2rem;">
				<h1 style="color: #1a1a1a; font-size: 1.875rem; font-weight: 700; margin-bottom: 0.5rem;">Sign Up</h1>
				<p style="color: #64748b; font-size: 1rem;">Create your TPC Malawi account</p>
			</div>
			
			{#if message}
			<div style="margin-bottom: 1rem; padding: 0.75rem; border-radius: 6px; text-align: center; background: {messageType === 'error' ? '#fef2f2' : '#f0fdf4'}; color: {messageType === 'error' ? '#dc2626' : '#16a34a'}; border: 1px solid {messageType === 'error' ? '#fecaca' : '#bbf7d0'};">
				{message}
			</div>
			{/if}
			
			<form on:submit|preventDefault={handleSignUp}>
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
					<div>
						<label for="signup-firstname" style="display: block; color: #374151; font-weight: 500; margin-bottom: 0.5rem;">First Name</label>
						<input 
							id="signup-firstname"
							type="text" 
							bind:value={signUpFirstName}
							placeholder="First name"
							required
							style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem; outline: none; box-sizing: border-box;"
						/>
					</div>
					
					<div>
						<label for="signup-lastname" style="display: block; color: #374151; font-weight: 500; margin-bottom: 0.5rem;">Last Name</label>
						<input 
							id="signup-lastname"
							type="text" 
							bind:value={signUpLastName}
							placeholder="Last name"
							required
							style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem; outline: none; box-sizing: border-box;"
						/>
					</div>
				</div>
				
				<div style="margin-bottom: 1rem;">
					<label for="signup-phone" style="display: block; color: #374151; font-weight: 500; margin-bottom: 0.5rem;">Phone Number</label>
					<input 
						id="signup-phone"
						type="tel" 
						bind:value={signUpPhone}
						placeholder="+265 999 000 000"
						required
						style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem; outline: none; box-sizing: border-box;"
					/>
				</div>
				
				<div style="margin-bottom: 1rem;">
					<label for="signup-email" style="display: block; color: #374151; font-weight: 500; margin-bottom: 0.5rem;">Email</label>
					<input 
						id="signup-email"
						type="email" 
						bind:value={signUpEmail}
						placeholder="Enter your email"
						required
						style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem; outline: none; box-sizing: border-box;"
					/>
				</div>
				
				<div style="margin-bottom: 1.5rem;">
					<label for="signup-password" style="display: block; color: #374151; font-weight: 500; margin-bottom: 0.5rem;">Password</label>
					<div style="position: relative;">
						<input 
							id="signup-password"
							type={showSignUpPassword ? 'text' : 'password'} 
							bind:value={signUpPassword}
							placeholder="Create a password"
							required
							style="width: 100%; padding: 0.75rem; padding-right: 2.5rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem; outline: none; box-sizing: border-box;"
						/>
						<button 
							type="button"
							on:click={() => showSignUpPassword = !showSignUpPassword}
							style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; color: #6b7280; padding: 0.25rem;"
							title={showSignUpPassword ? 'Hide password' : 'Show password'}
						>
							{#if showSignUpPassword}
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
									<line x1="1" y1="1" x2="23" y2="23"></line>
								</svg>
							{:else}
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
									<circle cx="12" cy="12" r="3"></circle>
								</svg>
							{/if}
						</button>
					</div>
				</div>
				
				<button 
					type="submit"
					disabled={loading}
					style="width: 100%; background: {loading ? '#9ca3af' : '#93c750'}; color: white; padding: 0.75rem; border: none; border-radius: 6px; font-size: 1rem; font-weight: 500; cursor: {loading ? 'not-allowed' : 'pointer'}; margin-bottom: 1rem;"
				>
					{loading ? 'Creating Account...' : 'Sign Up'}
				</button>
			</form>
			
			<div style="text-align: center;">
				<p style="color: #64748b; font-size: 0.875rem;">
					Already have an account? 
					<button on:click={toggleForm} style="background: none; border: none; color: #93c750; font-weight: 500; cursor: pointer; text-decoration: underline;">
						Sign In
					</button>
				</p>
			</div>
		</div>
		{/if}
	</div>
</main>
