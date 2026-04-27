<script>
	// Footer component script - can add footer-specific logic here if needed
</script>

<!-- Footer -->
<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<div class="footer-section">
				<div class="footer-logo">
					<img src="/tcp.jpeg" alt="TPC" style="height: 50px; width: 100px; object-fit: contain;" />
					<h3>TPC Malawi</h3>
				</div>
				<p class="footer-description">
					A special mark of property professionals providing first-class real estate services by applying exceptional property skills in Malawi.
				</p>
			</div>

			<div class="footer-section">
				<h4>Quick Links</h4>
				<ul class="footer-links">
					<li><a href="/">Home</a></li>
					<li><a href="/about">About Us</a></li>
					<li><a href="/services">Services</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</div>

			<div class="footer-section">
				<h4>Services</h4>
				<ul class="footer-links">
					<li><a href="/services/property-valuations">Property Valuations</a></li>
					<li><a href="/services/plant-machinery-valuations">Plant & Machinery Valuations</a></li>
					<li><a href="/services/asset-tagging-tracking">Asset Tagging & Tracking</a></li>
					<li><a href="/services/property-management">Property Management</a></li>
				</ul>
			</div>

			<div class="footer-section">
				<h4>Contact Info</h4>
				<div class="contact-info">
					<div class="contact-item">
						<span class="contact-icon">📍</span>
						<span>Blantyre, Malawi</span>
					</div>
					<div class="contact-item">
						<span class="contact-icon">📞</span>
						<span>+265 999 123 456</span>
					</div>
					<div class="contact-item">
						<span class="contact-icon">✉️</span>
						<span>info@tcpmalawi.com</span>
					</div>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<div class="footer-bottom-content">
				<p>&copy; 2024 Terrestrial Property Consulting Limited. All rights reserved.</p>
				<div class="footer-bottom-links">
					<a href="/privacy">Privacy Policy</a>
					<a href="/terms">Terms of Service</a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	/* Footer Styles */
	.footer {
		background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
		color: white;
		padding: var(--spacing-20) 0 var(--spacing-8) 0;
		margin-top: auto;
	}

	.footer-content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--spacing-8);
		margin-bottom: var(--spacing-12);
	}

	.footer-section h3 {
		color: var(--tcp-primary);
		font-size: var(--text-xl);
		font-weight: 600;
		margin-bottom: var(--spacing-3);
	}

	.footer-section h4 {
		color: white;
		font-size: var(--text-lg);
		font-weight: 600;
		margin-bottom: var(--spacing-4);
	}

	.footer-description {
		color: #94a3b8;
		line-height: 1.6;
		margin-bottom: var(--spacing-4);
	}

	.footer-logo {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		margin-bottom: var(--spacing-4);
	}

	.footer-links {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-links li {
		margin-bottom: var(--spacing-2);
	}

	.footer-links a {
		color: #94a3b8;
		text-decoration: none;
		transition: color var(--transition-fast) ease;
	}

	.footer-links a:hover {
		color: var(--tcp-primary);
	}

	.contact-info {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);
	}

	.contact-item {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		color: #94a3b8;
	}

	.contact-icon {
		font-size: var(--text-lg);
	}

	.footer-bottom {
		border-top: 1px solid #475569;
		padding-top: var(--spacing-8);
	}

	.footer-bottom-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--spacing-4);
	}

	.footer-bottom p {
		color: #94a3b8;
		margin: 0;
	}

	.footer-bottom-links {
		display: flex;
		gap: var(--spacing-6);
	}

	.footer-bottom-links a {
		color: #94a3b8;
		text-decoration: none;
		transition: color var(--transition-fast) ease;
	}

	.footer-bottom-links a:hover {
		color: var(--tcp-primary);
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.footer {
			padding: var(--spacing-16) 0 var(--spacing-6) 0;
		}

		.footer-content {
			grid-template-columns: 1fr;
			gap: var(--spacing-6);
		}

		.footer-bottom-content {
			flex-direction: column;
			text-align: center;
			gap: var(--spacing-3);
		}

		.footer-bottom-links {
			justify-content: center;
		}
	}

	@media (max-width: 480px) {
		.footer {
			padding: var(--spacing-12) 0 var(--spacing-4) 0;
		}

		.footer-logo {
			flex-direction: column;
			text-align: center;
		}

		.contact-item {
			justify-content: center;
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
		--transition-fast: 150ms ease;
		--spacing-2: 8px;
		--spacing-3: 12px;
		--spacing-4: 16px;
		--spacing-6: 24px;
		--spacing-8: 32px;
		--spacing-12: 48px;
		--spacing-16: 64px;
		--spacing-20: 80px;
		--text-sm: 14px;
		--text-lg: 18px;
		--text-xl: 20px;
	}
</style>
