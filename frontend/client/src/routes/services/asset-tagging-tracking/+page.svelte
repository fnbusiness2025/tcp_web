<script>
	import ServicePageLayout from '$lib/ServicePageLayout.svelte';

	const serviceDetails = [
		{
			title: 'Inventory Verification',
			text: 'Conducting physical audits to verify the presence and condition of all corporate and industrial assets.'
		},
		{
			title: 'Barcode Solutions',
			text: 'Implementing durable barcoding systems for quick and accurate asset identification and tracking.'
		},
		{
			title: 'Asset Registers',
			text: 'Developing and maintaining comprehensive digital asset registers for improved management and reporting.'
		}
	];
</script>

<ServicePageLayout
	title="Asset Tagging & Tracking"
	subtitle="Full Visibility of Your Tangible Assets"
	description="Comprehensive asset tagging and management solutions in Malawi. Identification and tracking protocols for corporate assets."
	icon="🏷️"
	image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=600&fit=crop&auto=format"
	introText="Managing a large inventory of assets can be complex. Our tagging and tracking solutions provide you with the tools to monitor your assets efficiently, reduce loss, and maintain accurate financial records through modern identification technology."
	details={serviceDetails}
	ctaTitle="Take Control of Your Assets"
	ctaText="Contact our tracking specialists to implement a professional asset management system."
/>
