<script>
	import ServicePageLayout from '$lib/ServicePageLayout.svelte';

	const serviceDetails = [
		{
			title: 'Strategic Marketing',
			text: 'Showcasing your property to the right audience through professional listings, photography, and targeted outreach.'
		},
		{
			title: 'Expert Valuation',
			text: 'Ensuring properties are priced correctly based on current market trends to attract serious buyers and fast-track sales.'
		},
		{
			title: 'Transaction Support',
			text: 'Guiding you through legal requirements, documentation, and negotiations for a smooth and secure closing.'
		}
	];
</script>

<ServicePageLayout
	title="Property Sales"
	subtitle="Connecting Buyers & Sellers with Confidence"
	description="Professional property sales and brokerage services in Malawi. Expert assistance in buying and selling real estate."
	icon="🏠"
	image="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&h=600&fit=crop&auto=format"
	introText="Buying or selling property is a significant financial decision. At TPC, we provide professional brokerage services that simplify the process, maximize value, and ensure secure transactions for both buyers and sellers across the Malawi real estate market."
	details={serviceDetails}
	ctaTitle="Looking to Buy or Sell?"
	ctaText="Contact our real estate experts for a personalized assessment of your property needs."
/>
