'use client';

import { motion } from 'framer-motion';
import { Monitor, Users, Globe } from 'lucide-react';

const ServicesSection = () => {
	const services = [
		{
			icon: Monitor,
			title: 'HealthWebEvents',
			description:
				'Plateforme de congrès virtuel sécurisée et immersive pour les professionnels de santé.',
			features: [
				'Streaming HD',
				'Chat en direct',
				'Sessions interactives',
				'Analytics en temps réel',
			],
		},
		{
			icon: Users,
			title: 'Engagement Communautaire',
			description:
				"Solutions innovantes pour faciliter l'interaction et l'engagement de la communauté médicale.",
			features: [
				"Networking virtuel', 'Forums spécialisés', 'Groupes d'intérêt', 'Événements thématiques",
			],
		},
		{
			icon: Globe,
			title: 'Accessibilité Totale',
			description:
				"Accès sans contrainte à l'information médicale et aux ressources essentielles.",
			features: [
				'Disponible 24/7',
				'Multi-devices',
				'Interface intuitive',
				'Support multilingue',
			],
		},
	];

	return (
		<section className="py-20 bg-white">
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
							Nos Services
						</span>
					</h2>
					<p className="max-w-3xl mx-auto text-gray-600 text-lg">
						Des solutions innovantes pour transformer l'expérience des
						événements médicaux virtuels
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="group"
						>
							<div className="bg-gray-50 p-8 rounded-2xl hover:bg-talos-blue/5 transition-colors duration-300">
								<div className="mb-6">
									<service.icon className="w-12 h-12 text-talos-blue" />
								</div>
								<h3 className="text-xl font-semibold mb-4">{service.title}</h3>
								<p className="text-gray-600 mb-6">{service.description}</p>
								<ul className="space-y-3">
									{service.features.map((feature) => (
										<li
											key={feature}
											className="flex items-center text-gray-600"
										>
											<motion.div
												initial={false}
												animate={{ scale: [1, 1.2, 1] }}
												transition={{ duration: 0.3 }}
												className="w-2 h-2 bg-talos-blue rounded-full mr-3"
											/>
											{feature}
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
