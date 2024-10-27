'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const TrustSection = () => {
	// Premier groupe de partenaires
	const partners1 = [
		{ name: 'Pfizer', logo: '/logos/pfizer.svg' },
		{ name: 'Novartis', logo: '/logos/novartis.png' },
		{ name: 'Sanofi', logo: '/logos/sanofi.svg' },
		{ name: 'Gilead', logo: '/logos/gilead.svg' },
		{ name: 'GSK', logo: '/logos/gsk.svg' },
		{ name: 'AstraZeneca', logo: '/logos/astrazeneca.png' },
	];

	// Second groupe de partenaires (pour l'animation continue)
	const partners2 = [
		{ name: 'Merck', logo: '/logos/merck.svg' },
		{ name: 'Johnson & Johnson', logo: '/logos/jnj.svg' },
		{ name: 'Bayer', logo: '/logos/bayer.svg' },
		{ name: 'Bristol Myers Squibb', logo: '/logos/bms.svg' },
		{ name: 'Eli Lilly', logo: '/logos/lilly.svg' },
		{ name: 'Abbott', logo: '/logos/abbott.svg' },
	];

	return (
		<section className="py-20 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold mb-6">
						<span className="bg-gradient-to-r from-talos-blue to-talos-orange bg-clip-text text-transparent">
							They Trust Us
						</span>
					</h2>
					<p className="max-w-3xl mx-auto text-gray-600 text-lg">
						Nous collaborons avec les plus grands noms de l'industrie
						pharmaceutique pour transformer l'expérience des événements virtuels
					</p>
				</motion.div>

				<div className="relative">
					{/* Effet de fondu sur les côtés */}
					<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
					<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

					{/* Premier groupe de logos avec animation */}
					<div className="flex gap-16 items-center justify-center mb-12">
						<motion.div
							className="flex gap-16 items-center"
							animate={{
								x: [-100, -1000],
							}}
							transition={{
								duration: 20,
								repeat: Infinity,
								ease: 'linear',
							}}
						>
							{[...partners1, ...partners1].map((partner, index) => (
								<div
									key={`${partner.name}-${index}`}
									className="flex items-center justify-center w-32 h-20 grayscale hover:grayscale-0 transition-all duration-300"
								>
									<div className="relative w-full h-full">
										<Image
											src={partner.logo}
											alt={`${partner.name} logo`}
											fill
											className="object-contain"
										/>
									</div>
								</div>
							))}
						</motion.div>
					</div>

					{/* Second groupe de logos avec animation en sens inverse */}
					<div className="flex gap-16 items-center justify-center">
						<motion.div
							className="flex gap-16 items-center"
							animate={{
								x: [-1000, -100],
							}}
							transition={{
								duration: 20,
								repeat: Infinity,
								ease: 'linear',
							}}
						>
							{[...partners2, ...partners2].map((partner, index) => (
								<div
									key={`${partner.name}-${index}`}
									className="flex items-center justify-center w-32 h-20 grayscale hover:grayscale-0 transition-all duration-300"
								>
									<div className="relative w-full h-full">
										<Image
											src={partner.logo}
											alt={`${partner.name} logo`}
											className="object-contain"
											fill
										/>
									</div>
								</div>
							))}
						</motion.div>
					</div>
				</div>

				{/* Section statistiques */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
				>
					<div className="text-center">
						<div className="text-4xl font-bold text-talos-blue mb-2">500+</div>
						<div className="text-gray-600">Événements réalisés</div>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold text-talos-blue mb-2">50K+</div>
						<div className="text-gray-600">Participants connectés</div>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold text-talos-blue mb-2">12+</div>
						<div className="text-gray-600">Pays représentés</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TrustSection;
