import CTASection from "@/components/CTASection";
import FeaturedJobsSection from "@/components/FeaturedJobsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";

export default function Home() {
	return (
		<>
			<HeroSection></HeroSection>
			<FeaturedJobsSection></FeaturedJobsSection>
			<FeaturesSection></FeaturesSection>
			<PricingSection></PricingSection>
			<CTASection></CTASection>
		</>
	);
}
