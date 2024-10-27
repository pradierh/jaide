// app/demo/page.tsx
'use client'; // Ajout de cette ligne pour utiliser les hooks côté client

import { motion } from 'framer-motion';
import {
	Calendar,
	Clock,
	Video,
	Users,
	Check,
	Building,
	Phone,
	Mail,
	ArrowRight,
} from 'lucide-react';

// Types pour la sécurité du typage
interface DemoType {
	icon: React.ElementType;
	title: string;
	description: string;
	duration: string;
	benefits: string[];
}

interface Step {
	number: string;
	title: string;
	description: string;
}

const demoTypes: DemoType[] = [
	{
		icon: Video,
		title: 'Démo en ligne',
		description: 'Session personnalisée de 30 minutes avec un expert produit',
		duration: '30 min',
		benefits: [
			'Présentation complète de la plateforme',
			'Questions & réponses en direct',
			'Recommandations personnalisées',
		],
	},
	{
		icon: Users,
		title: 'Démo sur site',
		description: 'Présentation détaillée dans vos locaux avec votre équipe',
		duration: '1 heure',
		benefits: [
			'Démonstration avec cas pratiques',
			"Formation initiale de l'équipe",
			'Évaluation des besoins spécifiques',
		],
	},
];

const steps: Step[] = [
	{
		number: '01',
		title: 'Choisissez votre type de démo',
		description: 'En ligne ou sur site selon vos besoins',
	},
	{
		number: '02',
		title: 'Sélectionnez un créneau',
		description: 'Dates disponibles dans les 7 prochains jours',
	},
	{
		number: '03',
		title: 'Confirmation immédiate',
		description: 'Recevez les détails par email',
	},
];

export default function DemoPage() {
	return (
		<main className="pt-20 min-h-screen bg-gradient-to-b from-white to-jaide-background-alt">
			{/* Hero Section */}
			<section className="py-16 md:py-24">
				<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center max-w-3xl mx-auto"
					>
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							<span className="bg-gradient-to-r from-jaide-primary to-jaide-accent bg-clip-text text-transparent">
								Découvrez Jaide en action
							</span>
						</h1>
						<p className="text-jaide-neutral-light text-lg mb-8">
							Planifiez une démonstration personnalisée et découvrez comment
							Jaide peut transformer votre pratique médicale.
						</p>
					</motion.div>

					{/* Process Steps */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
						{steps.map((step, index) => (
							<motion.div
								key={step.number}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2 }}
								className="relative"
							>
								<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
									<span className="text-4xl font-bold text-jaide-primary/20 mb-4 block">
										{step.number}
									</span>
									<h3 className="text-xl font-bold text-jaide-neutral mb-2">
										{step.title}
									</h3>
									<p className="text-jaide-neutral-light">{step.description}</p>
								</div>
								{index !== steps.length - 1 && (
									<div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-jaide-primary/20">
										<ArrowRight className="w-8 h-8" />
									</div>
								)}
							</motion.div>
						))}
					</div>

					{/* Le reste du code reste inchangé */}
					{/* Demo Types */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
						{demoTypes.map((type, index) => (
							<motion.div
								key={type.title}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.5 + index * 0.2 }}
								className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
							>
								<div className="p-8">
									<div className="flex items-start justify-between mb-6">
										<div className="flex items-center gap-4">
											<div className="p-3 bg-jaide-primary/10 rounded-xl">
												<type.icon className="w-8 h-8 text-jaide-primary" />
											</div>
											<div>
												<h3 className="text-xl font-bold text-jaide-neutral">
													{type.title}
												</h3>
												<p className="text-jaide-neutral-light">
													{type.description}
												</p>
											</div>
										</div>
										<span className="flex items-center text-jaide-neutral-light">
											<Clock className="w-4 h-4 mr-1" />
											{type.duration}
										</span>
									</div>
									<ul className="space-y-3 mb-6">
										{type.benefits.map((benefit) => (
											<li key={benefit} className="flex items-center gap-3">
												<Check className="w-5 h-5 text-jaide-primary flex-shrink-0" />
												<span className="text-jaide-neutral-light">
													{benefit}
												</span>
											</li>
										))}
									</ul>
									<motion.button
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className="w-full py-3 px-6 bg-gradient-to-r from-jaide-primary to-jaide-primary-dark text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
									>
										Réserver cette démo
									</motion.button>
								</div>
							</motion.div>
						))}
					</div>

					{/* Booking Form */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
						className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8"
					>
						<h2 className="text-2xl font-bold text-jaide-neutral mb-6">
							Planifiez votre démo
						</h2>
						<form className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-jaide-neutral mb-2">
										Nom complet
									</label>
									<input
										type="text"
										className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-jaide-primary focus:ring-2 focus:ring-jaide-primary/20 outline-none transition-colors"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-jaide-neutral mb-2">
										Établissement
									</label>
									<input
										type="text"
										className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-jaide-primary focus:ring-2 focus:ring-jaide-primary/20 outline-none transition-colors"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-jaide-neutral mb-2">
										Email professionnel
									</label>
									<input
										type="email"
										className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-jaide-primary focus:ring-2 focus:ring-jaide-primary/20 outline-none transition-colors"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-jaide-neutral mb-2">
										Téléphone
									</label>
									<input
										type="tel"
										className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-jaide-primary focus:ring-2 focus:ring-jaide-primary/20 outline-none transition-colors"
									/>
								</div>
							</div>

							<div>
								<label className="block text-sm font-medium text-jaide-neutral mb-2">
									Message (optionnel)
								</label>
								<textarea
									rows={4}
									className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-jaide-primary focus:ring-2 focus:ring-jaide-primary/20 outline-none transition-colors"
									placeholder="Parlez-nous de vos besoins spécifiques..."
								/>
							</div>

							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="w-full py-3 px-6 bg-gradient-to-r from-jaide-primary to-jaide-primary-dark text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
							>
								Planifier ma démo
							</motion.button>
						</form>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
