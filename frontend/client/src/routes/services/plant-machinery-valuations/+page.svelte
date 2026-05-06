<script>
	import ServicePageLayout from '$lib/ServicePageLayout.svelte';

	const serviceDetails = [
		{
			title: 'Industrial Equipment',
			text: 'Specialized valuation of manufacturing plants, production lines, and technical heavy machinery.'
		},
		{
			title: 'Mobile Assets',
			text: 'Accurate appraisal of vehicle fleets, agricultural equipment, and construction machinery.'
		},
		{
			title: 'Financial Reporting',
			text: 'Support for asset revaluation, IFRS compliance, and balance sheet inclusion for corporate entities.'
		}
	];
</script>

<ServicePageLayout
	title="Plant & Machinery Valuation"
	subtitle="Specialized Appraisal for Industrial Assets"
	description="Expert plant and machinery valuation services in Malawi. Accurate appraisal of industrial equipment, vehicles, and technical assets."
	icon="🏭"
	image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=600&fit=crop&auto=format"
	introText="Industrial and technical assets require specialized valuation knowledge. Our team provides expert appraisals for plant and machinery, ensuring that each asset is correctly valued according to its condition, utility, and market demand."
	details={serviceDetails}
	ctaTitle="Value Your Industrial Assets"
	ctaText="Consult our technical valuers for precise machinery and plant equipment assessments."
/>
