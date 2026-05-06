<script>
	import ServicePageLayout from '$lib/ServicePageLayout.svelte';

	const serviceDetails = [
		{
			title: 'Strategic Negotiations',
			text: 'We represent your interests in lease negotiations to secure favorable terms, rental rates, and lease durations.'
		},
		{
			title: 'Agreement Structuring',
			text: 'Drafting and reviewing lease agreements to ensure all legal requirements are met and risks are mitigated.'
		},
		{
			title: 'Lease Management',
			text: 'Ongoing monitoring of lease compliance, renewals, and rent reviews across your portfolio.'
		}
	];
</script>

<ServicePageLayout
	title="Land Lease Consultancy"
	subtitle="Expert Guidance in Land Leasing & Negotiations"
	description="Expert land lease consultancy services in Malawi. Specialist advice on negotiations, agreement structuring, and lease management."
	icon="📄"
	image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop&auto=format"
	introText="Navigating land lease agreements requires specialized knowledge and strategic negotiation skills. At TPC, we provide comprehensive consultancy services to ensure your land lease arrangements are legally sound, financially beneficial, and strategically aligned with your goals."
	details={serviceDetails}
	ctaTitle="Ready to Discuss Your Land Lease Needs?"
	ctaText="Contact our expert consultants for a professional assessment of your requirements."
/>
