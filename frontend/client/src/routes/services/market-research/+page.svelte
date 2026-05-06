<script>
	import ServicePageLayout from '$lib/ServicePageLayout.svelte';

	const serviceDetails = [
		{
			title: 'Trend Analysis',
			text: 'Monitoring rental yields, property values, and demand patterns to provide a clear picture of the current market state.'
		},
		{
			title: 'Feasibility Studies',
			text: 'Comprehensive evaluations of potential development projects to determine their financial and operational viability.'
		},
		{
			title: 'Investment Advisory',
			text: 'Data-driven recommendations to help institutional and individual investors optimize their property portfolios.'
		}
	];
</script>

<ServicePageLayout
	title="Market Research"
	subtitle="Insights for Informed Property Decisions"
	description="In-depth property market research in Malawi. Strategic analysis and investment studies for informed real estate decisions."
	icon="📈"
	image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&h=600&fit=crop&auto=format"
	introText="In a dynamic real estate environment, accurate data is key to success. At TPC, we provide in-depth market research services that help you understand trends, mitigate risks, and identify lucrative opportunities within the Malawi property market."
	details={serviceDetails}
	ctaTitle="Need Strategic Insights?"
	ctaText="Contact our market analysts today for customized research reports tailored to your goals."
/>
