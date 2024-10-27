// components/HowItWorks.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
	ClipboardCheck,
	Stethoscope,
	Brain,
	FileText,
	Activity,
	ArrowRight,
} from 'lucide-react';

const steps = [
	{
		icon: ClipboardCheck,
		title: 'Déclaration des symptômes',
		description:
			'Les patients remplissent un questionnaire détaillé sur leurs symptômes via une interface intuitive',
		color: 'from-jaide-primary to-jaide-primary-light',
	},
	{
		icon: Brain,
		title: 'Analyse par IA',
		description:
			'Notre IA analyse les données et génère un pré-diagnostic précis basé sur les symptômes déclarés',
		color: 'from-jaide-accent to-jaide-accent-light',
	},
	{
		icon: FileText,
		title: 'Rapport automatisé',
		description:
			"Génération automatique d'un rapport médical structuré pour le praticien",
		color: 'from-jaide-primary-dark to-jaide-primary',
	},
	{
		icon: Stethoscope,
		title: 'Consultation optimisée',
		description:
			"Le médecin dispose d'informations claires pour une consultation plus efficace",
		color: 'from-jaide-accent-dark to-jaide-accent',
	},
	{
		icon: Activity,
		title: 'Suivi continu',
		description:
			"Surveillance continue des symptômes et alertes en cas d'évolution significative",
		color: 'from-jaide-primary to-jaide-accent',
	},
];

export default function HowItWorks() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

	return (
		<section
			className="py-20 relative overflow-hidden bg-white"
			ref={containerRef}
		>
			{/* Cercle décoratif */}
			<motion.div
				className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-jaide-primary/5 to-jaide-accent/5 blur-3xl"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
			/>

			<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
				{/* En-tête de section */}
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						<span className="bg-gradient-to-r from-jaide-primary to-jaide-accent bg-clip-text text-transparent">
							Comment ça marche ?
						</span>
					</h2>
					<p className="text-jaide-neutral-light text-lg max-w-2xl mx-auto">
						Un processus simple et efficace pour améliorer la prise en charge
						des patients
					</p>
				</motion.div>

				{/* Timeline des étapes */}
				<div className="relative">
					{/* Ligne de connexion */}
					<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-jaide-primary to-jaide-accent rounded-full opacity-20" />

					{/* Étapes */}
					{steps.map((step, index) => (
						<motion.div
							key={step.title}
							className={`relative flex items-center gap-8 mb-16 ${
								index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
							}`}
							initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
						>
							{/* Contenu */}
							<div className="flex-1">
								<motion.div
									className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
									whileHover={{ y: -5 }}
								>
									<div
										className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} mb-4`}
									>
										<step.icon className="w-6 h-6 text-white" />
									</div>
									<h3 className="text-xl font-bold text-jaide-neutral mb-2">
										{step.title}
									</h3>
									<p className="text-jaide-neutral-light">{step.description}</p>
								</motion.div>
							</div>

							{/* Point central */}
							<div className="relative flex-shrink-0">
								<motion.div
									className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} shadow-lg`}
									whileHover={{ scale: 1.2 }}
								>
									<div className="absolute inset-0 flex items-center justify-center text-white font-bold">
										{index + 1}
									</div>
								</motion.div>
							</div>

							{/* Espace pour l'autre côté */}
							<div className="flex-1" />
						</motion.div>
					))}
				</div>

				{/* Call to Action */}
				<motion.div
					className="text-center mt-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center px-6 py-3 rounded-lg bg-jaide-primary text-white font-medium shadow-lg shadow-jaide-primary/25 hover:bg-jaide-primary-dark transition-colors"
					>
						Demander une démo
						<ArrowRight className="ml-2 h-4 w-4" />
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
}
