<script>
	import ServicePageLayout from '$lib/ServicePageLayout.svelte';

	const serviceDetails = [
		{
			title: 'Architectural Design',
			text: 'Creating detailed building plans that balance aesthetic appeal with practical functionality and structural integrity.'
		},
		{
			title: 'Spatial Planning',
			text: 'Optimizing the layout of rooms, amenities, and external spaces to maximize utility and enhance the user experience.'
		},
		{
			title: 'Compliance Check',
			text: 'Ensuring all plans meet local authority standards and planning permission requirements for a smooth approval process.'
		}
	];
</script>

<ServicePageLayout
	title="Building Plans & Layout"
	subtitle="Innovative Design for Sustainable Spaces"
	description="Professional building plans and layout planning services in Malawi. Expert design for optimal land and building use."
	icon="🏗️"
	image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop&auto=format"
	introText="At TPC, we provide comprehensive building plans and layout planning services tailored to your specific project needs. Our team ensures that every design optimizes land use, enhances functionality, and adheres to all local building codes and regulations."
	details={serviceDetails}
	ctaTitle="Start Your Design Journey"
	ctaText="Contact our planning experts to transform your vision into professional architectural plans."
/>
