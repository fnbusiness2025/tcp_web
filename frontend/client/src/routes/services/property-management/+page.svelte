<script>
	import ServicePageLayout from '$lib/ServicePageLayout.svelte';

	const serviceDetails = [
		{
			title: 'Residential Management',
			text: 'From single-family homes to large apartment complexes, we handle everything from tenant screening to maintenance.'
		},
		{
			title: 'Commercial Management',
			text: 'Professional management of office high-rises, retail spaces, and industrial parks to maximize ROI.'
		},
		{
			title: 'Financial Reporting',
			text: 'Transparent financial tracking, rent collection, and detailed monthly reports for property owners.'
		}
	];
</script>

<ServicePageLayout
	title="Property Management"
	subtitle="Maximizing the Value of Your Assets"
	description="Complete property management services in Malawi. Expert handling of residential and commercial properties for maximum returns."
	icon="🏢"
	image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=600&fit=crop&auto=format"
	introText="Effective property management is essential for long-term investment success. We provide comprehensive solutions that ensure your properties are well-maintained, tenants are satisfied, and your investment returns are maximized through professional oversight."
	details={serviceDetails}
	ctaTitle="Secure Your Investment Today"
	ctaText="Let our professional management team take the hassle out of owning property."
/>
