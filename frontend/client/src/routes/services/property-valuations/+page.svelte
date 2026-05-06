<script>
	import ServicePageLayout from '$lib/ServicePageLayout.svelte';

	const serviceDetails = [
		{
			title: 'Loan Security',
			text: 'Reliable valuations for mortgage purposes and collateral verification by banks and financial institutions.'
		},
		{
			title: 'Insurance Valuation',
			text: 'Determining appropriate cover for buildings and assets in case of damage or loss to ensure full protection.'
		},
		{
			title: 'Tax & Legal',
			text: 'Accurate assessments for estate duty, capital gains tax, and probate proceedings in compliance with MRA standards.'
		}
	];
</script>

<ServicePageLayout
	title="Property Valuations"
	subtitle="Accurate, Reliable, Professional Valuation Services"
	description="Professional property valuation services in Malawi. Accurate, reliable valuations for loans, insurance, estate duty, and more."
	icon="📊"
	image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=600&fit=crop&auto=format"
	introText="At TPC, we provide professional property valuation services that are accurate, reliable, and compliant with international standards. Our experienced valuers deliver comprehensive reports for various purposes including financing, insurance, and legal compliance."
	details={serviceDetails}
	ctaTitle="Need a Professional Valuation?"
	ctaText="Contact our licensed valuers today for a comprehensive assessment of your property assets."
/>
