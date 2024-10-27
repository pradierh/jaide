// components/BenefitsSection.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
	Clock,
	Brain,
	FileCheck,
	Users,
	Shield,
	TrendingUp,
	MessageSquare,
	Activity,
	HeartPulse,
	Stethoscope,
	Building,
	ClipboardCheck,
	Lock,
} from 'lucide-react';

const benefitCategories = [
	{
		title: 'Pour les Médecins',
		subtitle: 'Optimisez votre temps et améliorez vos diagnostics',
		color: 'from-jaide-primary to-jaide-primary-light',
		icon: Stethoscope,
		benefits: [
			{
				icon: Clock,
				title: 'Gain de temps',
				description: 'Réduisez de 40% le temps consacré à la documentation',
			},
			{
				icon: Brain,
				title: 'Aide à la décision',
				description: 'IA générative pour des recommandations personnalisées',
			},
			{
				icon: FileCheck,
				title: 'Documentation automatisée',
				description: 'Rapports médicaux générés automatiquement',
			},
			{
				icon: Users,
				title: 'Suivi optimisé',
				description: "Vue d'ensemble claire de tous vos patients",
			},
		],
	},
	{
		title: 'Pour les Patients',
		subtitle: 'Un suivi personnalisé et une meilleure prise en charge',
		color: 'from-jaide-accent to-jaide-accent-light',
		icon: HeartPulse,
		benefits: [
			{
				icon: MessageSquare,
				title: 'Communication facilitée',
				description:
					'Déclarez vos symptômes facilement entre les consultations',
			},
			{
				icon: Activity,
				title: 'Suivi continu',
				description: "Monitoring constant de l'évolution de votre état",
			},
			{
				icon: Shield,
				title: 'Prise en charge améliorée',
				description: 'Détection précoce des complications potentielles',
			},
			{
				icon: TrendingUp,
				title: 'Meilleurs résultats',
				description: "35% d'amélioration du taux de survie globale",
			},
		],
	},
	{
		title: 'Pour les Institutions',
		subtitle: "Améliorez l'efficacité et la qualité des soins",
		color: 'from-jaide-primary-dark to-jaide-accent-dark',
		icon: Building,
		benefits: [
			{
				icon: ClipboardCheck,
				title: 'Conformité garantie',
				description: 'Respect des normes et réglementations en vigueur',
			},
			{
				icon: TrendingUp,
				title: 'Performance accrue',
				description: 'Optimisation des ressources et des processus',
			},
			{
				icon: Lock,
				title: 'Sécurité des données',
				description: 'Protection maximale des données sensibles',
			},
			{
				icon: Shield,
				title: 'Réduction des risques',
				description: 'Diminution des erreurs médicales de 25%',
			},
		],
	},
];

export default function BenefitsSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

	return (
		<section
			ref={containerRef}
			className="py-20 relative bg-gradient-to-b from-white to-jaide-background-alt overflow-hidden"
		>
			{/* Arrière-plan animé */}
			<motion.div
				className="absolute inset-0 opacity-30"
				style={{
					backgroundImage:
						'radial-gradient(circle at 20% 20%, rgba(76, 175, 80, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(33, 150, 243, 0.1) 0%, transparent 50%)',
					y,
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
							Les bénéfices Jaide
						</span>
					</h2>
					<p className="text-jaide-neutral-light text-lg max-w-2xl mx-auto">
						Une solution qui profite à tous les acteurs du parcours de soin
					</p>
				</motion.div>

				{/* Catégories de bénéfices */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{benefitCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: categoryIndex * 0.2 }}
							className="relative"
						>
							{/* En-tête de la catégorie */}
							<motion.div
								className={`bg-gradient-to-r ${category.color} rounded-2xl p-6 text-white mb-8`}
								whileHover={{ y: -5 }}
							>
								<category.icon className="w-12 h-12 mb-4" />
								<h3 className="text-2xl font-bold mb-2">{category.title}</h3>
								<p className="text-white/80">{category.subtitle}</p>
							</motion.div>

							{/* Liste des bénéfices */}
							<div className="space-y-6">
								{category.benefits.map((benefit, benefitIndex) => (
									<motion.div
										key={benefit.title}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{
											delay: categoryIndex * 0.2 + benefitIndex * 0.1,
										}}
										className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
									>
										<div
											className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-r ${category.color}`}
										>
											<benefit.icon className="w-6 h-6 text-white" />
										</div>
										<div>
											<h4 className="text-lg font-semibold text-jaide-neutral mb-1">
												{benefit.title}
											</h4>
											<p className="text-sm text-jaide-neutral-light">
												{benefit.description}
											</p>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
