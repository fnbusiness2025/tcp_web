<script>
	import ServicePageLayout from '$lib/ServicePageLayout.svelte';

	const serviceDetails = [
		{
			title: 'Boundary Surveys',
			text: 'Expert identification and marking of property boundaries to prevent or resolve encroachment disputes.'
		},
		{
			title: 'Topographic Surveys',
			text: 'Detailed mapping of land features, elevations, and contours for architectural and engineering design.'
		},
		{
			title: 'Cadastral Mapping',
			text: 'Preparation of standard maps and plans for property registration and legal land documentation.'
		}
	];
</script>

<ServicePageLayout
	title="Land Surveying"
	subtitle="Precision & Accuracy in Every Measurement"
	description="Accurate land surveying services in Malawi. Boundary identification, topographic surveys, and cadastral mapping."
	icon="📐"
	image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=600&fit=crop&auto=format"
	introText="Our land surveying services provide the foundation for successful property development and legal clarity. Using state-of-the-art surveying equipment and methodologies, we deliver precise data for boundary disputes, construction planning, and cadastral mapping across Malawi."
	details={serviceDetails}
	ctaTitle="Need Precise Land Data?"
	ctaText="Contact our registered surveyors for professional land surveying services."
/>
