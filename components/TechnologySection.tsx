// components/TechnologySection.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
	Shield,
	Lock,
	Server,
	Cloud,
	Key,
	FileCheck,
	Binary,
	Database,
	Scale,
	RefreshCw,
	ShieldCheck,
	Cpu,
} from 'lucide-react';

const features = [
	{
		category: 'Sécurité & Confidentialité',
		color: 'from-jaide-primary to-jaide-primary-light',
		items: [
			{
				icon: Shield,
				title: 'Chiffrement de bout en bout',
				description: 'Toutes les données sont chiffrées en transit et au repos',
			},
			{
				icon: Lock,
				title: 'Conformité RGPD',
				description:
					'Respect total des réglementations européennes sur la protection des données',
			},
			{
				icon: Key,
				title: 'Authentification forte',
				description: "Double authentification et contrôle d'accès granulaire",
			},
			{
				icon: FileCheck,
				title: 'Certifications',
				description:
					'Conformité aux normes de sécurité les plus strictes du secteur médical',
			},
		],
	},
	{
		category: 'Infrastructure & Performance',
		color: 'from-jaide-accent to-jaide-accent-light',
		items: [
			{
				icon: Server,
				title: 'Hébergement sécurisé',
				description: 'Infrastructure hébergée sur des serveurs certifiés HDS',
			},
			{
				icon: Cloud,
				title: 'Haute disponibilité',
				description: '99.99% de temps de fonctionnement garanti',
			},
			{
				icon: Binary,
				title: 'IA Générative avancée',
				description:
					"Algorithmes d'IA de dernière génération pour des analyses précises",
			},
			{
				icon: Database,
				title: 'Protection des données',
				description: "Sauvegarde automatique et plan de reprise d'activité",
			},
		],
	},
	{
		category: 'Conformité & Intégration',
		color: 'from-jaide-primary-dark to-jaide-accent',
		items: [
			{
				icon: Scale,
				title: 'Cadre légal',
				description: 'Conforme aux réglementations médicales en vigueur',
			},
			{
				icon: RefreshCw,
				title: 'API sécurisée',
				description: 'Intégration simple avec les systèmes existants',
			},
			{
				icon: ShieldCheck,
				title: 'Audit régulier',
				description: 'Contrôles de sécurité et tests de pénétration réguliers',
			},
			{
				icon: Cpu,
				title: 'Traçabilité complète',
				description: 'Historique détaillé de toutes les actions',
			},
		],
	},
];

export default function TechnologySection() {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<section className="py-20 relative bg-gradient-to-b from-white to-jaide-background-alt overflow-hidden">
			{/* Particules animées en arrière-plan */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute w-full h-full"
					initial={false}
					animate={{
						backgroundPosition: ['0% 0%', '100% 100%'],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
					style={{
						backgroundImage:
							'radial-gradient(circle at center, rgba(76, 175, 80, 0.1) 0%, transparent 8%)',
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative">
				{/* En-tête de section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-20"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						<span className="bg-gradient-to-r from-jaide-primary to-jaide-accent bg-clip-text text-transparent">
							Technologie de pointe & Sécurité maximale
						</span>
					</h2>
					<p className="text-jaide-neutral-light text-lg max-w-2xl mx-auto">
						Une infrastructure robuste et sécurisée pour la gestion de vos
						données médicales
					</p>
				</motion.div>

				{/* Grille des fonctionnalités */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((category, categoryIndex) => (
						<motion.div
							key={category.category}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: categoryIndex * 0.2 }}
						>
							{/* En-tête de catégorie */}
							<div
								className={`bg-gradient-to-r ${category.color} rounded-2xl p-6 text-white mb-6`}
							>
								<h3 className="text-xl font-bold mb-2">{category.category}</h3>
							</div>

							{/* Items */}
							<div className="space-y-4">
								{category.items.map((item, itemIndex) => (
									<motion.div
										key={item.title}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{
											delay: categoryIndex * 0.2 + itemIndex * 0.1,
										}}
										className="group"
									>
										<motion.div
											whileHover={{ y: -5 }}
											className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
										>
											<div className="flex items-start gap-4">
												<div
													className={`p-2 rounded-lg bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}
												>
													<item.icon className="w-6 h-6 text-white" />
												</div>
												<div>
													<h4 className="text-lg font-semibold text-jaide-neutral mb-2">
														{item.title}
													</h4>
													<p className="text-sm text-jaide-neutral-light">
														{item.description}
													</p>
												</div>
											</div>
										</motion.div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<button className="inline-flex items-center px-6 py-3 rounded-lg bg-jaide-primary text-white font-medium shadow-lg hover:bg-jaide-primary-dark transition-colors">
						<Shield className="w-5 h-5 mr-2" />
						Demander une démonstration sécurisée
					</button>
				</motion.div>
			</div>
		</section>
	);
}
