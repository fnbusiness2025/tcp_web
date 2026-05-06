<script>
	import ServicePageLayout from '$lib/ServicePageLayout.svelte';

	const serviceDetails = [
		{
			title: 'Site Identification',
			text: 'Using advanced spatial analysis and local market knowledge to find the most effective locations for network coverage.'
		},
		{
			title: 'Legal & Regulatory',
			text: 'Managing all permits, zoning requirements, and legal documentation necessary for site deployment.'
		},
		{
			title: 'Landlord Liaison',
			text: 'Building and maintaining positive relationships with property owners to ensure long-term site stability.'
		}
	];
</script>

<ServicePageLayout
	title="Telecom Site Acquisition"
	subtitle="Securing the Future of Connectivity"
	description="Professional telecommunications site acquisition services in Malawi. Expert identification and securing of sites for telecom infrastructure."
	icon="🗼"
	image="https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=1920&h=600&fit=crop&auto=format"
	introText="At TPC, we specialize in identifying and acquiring optimal sites for telecommunications infrastructure. Our expertise spans urban and rural environments, ensuring seamless network expansion for our clients through strategic site selection and efficient acquisition processes."
	details={serviceDetails}
	ctaTitle="Support Your Network Expansion"
	ctaText="Contact our site acquisition specialists to discuss your infrastructure requirements."
/>
