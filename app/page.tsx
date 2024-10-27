import Hero from '@/components/Hero';
import TestimonialsSection from '@/components/TestimonialsSection';
import VideoShowcase from '@/components/VideoShowcase';
import HowItWorks from '@/components/HowItWorks';
import BenefitsSection from '@/components/BenefitsSection';
import TechnologySection from '@/components/TechnologySection';
import FAQContactSection from '@/components/FAQContactSection';

export default function Home() {
	return (
		<main className="min-h-screen">
			<Hero />
			<VideoShowcase />
			<HowItWorks />
			<BenefitsSection />
			<TestimonialsSection />
			<TechnologySection />
			<FAQContactSection />

			{/* Contenu de la page */}
		</main>
	);
}
