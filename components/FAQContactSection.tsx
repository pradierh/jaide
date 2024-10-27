// components/FAQContactSection.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
	Plus,
	Minus,
	Mail,
	Phone,
	MessageSquare,
	Building,
	Send,
} from 'lucide-react';

const faqs = [
	{
		category: 'Général',
		questions: [
			{
				question: 'Comment fonctionne Jaide au quotidien ?',
				answer:
					"Jaide permet aux patients de déclarer leurs symptômes via une interface intuitive. L'IA analyse ces données et génère des rapports structurés pour les médecins, optimisant ainsi le suivi et la prise en charge.",
			},
			{
				question: "Quelle est la fiabilité des analyses de l'IA ?",
				answer:
					'Notre IA a été entraînée sur des données médicales validées et atteint une précision de 99.9%. Les résultats ont été publiés dans un grand journal de cancérologie.',
			},
		],
	},
	{
		category: 'Technique & Sécurité',
		questions: [
			{
				question: 'Comment sont protégées les données des patients ?',
				answer:
					'Toutes les données sont chiffrées de bout en bout et hébergées sur des serveurs certifiés HDS (Hébergeur de Données de Santé). Nous sommes totalement conformes au RGPD et aux normes de sécurité médicales.',
			},
			{
				question: "Est-il possible d'intégrer Jaide à notre système existant ?",
				answer:
					'Oui, Jaide propose une API sécurisée permettant une intégration simple avec vos systèmes existants. Notre équipe technique vous accompagne dans ce processus.',
			},
		],
	},
	{
		category: 'Installation & Support',
		questions: [
			{
				question: 'Combien de temps prend la mise en place ?',
				answer:
					"Le déploiement prend généralement 2 à 4 semaines, incluant la formation du personnel et l'intégration technique. Nous vous accompagnons à chaque étape.",
			},
			{
				question: 'Quel support est fourni ?',
				answer:
					"Nous proposons un support technique 24/7, des formations régulières, et un accompagnement personnalisé pour optimiser l'utilisation de Jaide.",
			},
		],
	},
];

const contactInfo = {
	email: 'contact@jaide.ai',
	phone: '+33 1 23 45 67 89',
	address: 'Paris, France',
};

export default function FAQContactSection() {
	const [openQuestions, setOpenQuestions] = useState<{
		[key: string]: boolean;
	}>({});
	const [activeCategory, setActiveCategory] = useState('Général');

	const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
		const key = `${categoryIndex}-${questionIndex}`;
		setOpenQuestions((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	return (
		<section className="py-20 relative bg-white overflow-hidden">
			{/* Background decoration */}
			<motion.div
				className="absolute inset-0"
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
						'radial-gradient(circle at center, rgba(76, 175, 80, 0.05) 0%, transparent 8%)',
					backgroundSize: '40px 40px',
				}}
			/>

			<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
				{/* FAQ Section */}
				<div className="mb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							<span className="bg-gradient-to-r from-jaide-primary to-jaide-accent bg-clip-text text-transparent">
								Questions fréquentes
							</span>
						</h2>
						<p className="text-jaide-neutral-light text-lg max-w-2xl mx-auto">
							Tout ce que vous devez savoir sur Jaide
						</p>
					</motion.div>

					{/* FAQ Categories Navigation */}
					<div className="flex flex-wrap justify-center gap-4 mb-8">
						{faqs.map((category) => (
							<motion.button
								key={category.category}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => setActiveCategory(category.category)}
								className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
									activeCategory === category.category
										? 'bg-jaide-primary text-white'
										: 'bg-gray-100 text-jaide-neutral hover:bg-gray-200'
								}`}
							>
								{category.category}
							</motion.button>
						))}
					</div>

					{/* FAQ Questions */}
					<div className="max-w-3xl mx-auto">
						{faqs.map((category, categoryIndex) => (
							<AnimatePresence key={category.category}>
								{activeCategory === category.category && (
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										className="space-y-4"
									>
										{category.questions.map((faq, questionIndex) => {
											const key = `${categoryIndex}-${questionIndex}`;
											const isOpen = openQuestions[key];

											return (
												<motion.div
													key={faq.question}
													initial={false}
													animate={{
														backgroundColor: isOpen
															? 'rgb(255, 255, 255)'
															: 'rgb(249, 250, 251)',
													}}
													className="rounded-xl overflow-hidden shadow-sm"
												>
													<button
														onClick={() =>
															toggleQuestion(categoryIndex, questionIndex)
														}
														className="w-full px-6 py-4 flex items-center justify-between text-left"
													>
														<span className="font-medium text-jaide-neutral">
															{faq.question}
														</span>
														<motion.div
															animate={{ rotate: isOpen ? 180 : 0 }}
															className="flex-shrink-0 ml-4"
														>
															{isOpen ? (
																<Minus className="w-5 h-5 text-jaide-primary" />
															) : (
																<Plus className="w-5 h-5 text-jaide-neutral" />
															)}
														</motion.div>
													</button>

													<AnimatePresence>
														{isOpen && (
															<motion.div
																initial={{ height: 0 }}
																animate={{ height: 'auto' }}
																exit={{ height: 0 }}
																transition={{ duration: 0.3 }}
																className="overflow-hidden"
															>
																<div className="px-6 pb-4 text-jaide-neutral-light">
																	{faq.answer}
																</div>
															</motion.div>
														)}
													</AnimatePresence>
												</motion.div>
											);
										})}
									</motion.div>
								)}
							</AnimatePresence>
						))}
					</div>
				</div>

				{/* Contact Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-2xl p-8 shadow-xl"
					>
						<h3 className="text-2xl font-bold text-jaide-neutral mb-6">
							Contactez-nous
						</h3>
						<form className="space-y-6">
							<div>
								<label className="block text-sm font-medium text-jaide-neutral mb-2">
									Nom complet
								</label>
								<input
									type="text"
									className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-jaide-primary focus:ring-2 focus:ring-jaide-primary/20 outline-none transition-colors"
									placeholder="Dr. John Doe"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-jaide-neutral mb-2">
									Email
								</label>
								<input
									type="email"
									className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-jaide-primary focus:ring-2 focus:ring-jaide-primary/20 outline-none transition-colors"
									placeholder="john@example.com"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-jaide-neutral mb-2">
									Message
								</label>
								<textarea
									rows={4}
									className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-jaide-primary focus:ring-2 focus:ring-jaide-primary/20 outline-none transition-colors"
									placeholder="Comment pouvons-nous vous aider ?"
								/>
							</div>
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="w-full px-6 py-3 bg-gradient-to-r from-jaide-primary to-jaide-accent text-white font-medium rounded-lg shadow-lg shadow-jaide-primary/25 hover:shadow-xl transition-shadow"
							>
								<span className="flex items-center justify-center">
									<Send className="w-4 h-4 mr-2" />
									Envoyer le message
								</span>
							</motion.button>
						</form>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div>
							<h3 className="text-2xl font-bold text-jaide-neutral mb-6">
								Informations de contact
							</h3>
							<p className="text-jaide-neutral-light mb-8">
								Notre équipe est là pour vous accompagner dans la transformation
								numérique de votre pratique médicale.
							</p>
						</div>

						<div className="space-y-6">
							<motion.a
								href={`mailto:${contactInfo.email}`}
								whileHover={{ scale: 1.05 }}
								className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md"
							>
								<div className="p-2 bg-jaide-primary/10 rounded-lg">
									<Mail className="w-6 h-6 text-jaide-primary" />
								</div>
								<div>
									<div className="font-medium text-jaide-neutral">Email</div>
									<div className="text-jaide-neutral-light">
										{contactInfo.email}
									</div>
								</div>
							</motion.a>

							<motion.a
								href={`tel:${contactInfo.phone}`}
								whileHover={{ scale: 1.05 }}
								className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md"
							>
								<div className="p-2 bg-jaide-accent/10 rounded-lg">
									<Phone className="w-6 h-6 text-jaide-accent" />
								</div>
								<div>
									<div className="font-medium text-jaide-neutral">
										Téléphone
									</div>
									<div className="text-jaide-neutral-light">
										{contactInfo.phone}
									</div>
								</div>
							</motion.a>

							<motion.div
								whileHover={{ scale: 1.05 }}
								className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md"
							>
								<div className="p-2 bg-jaide-primary/10 rounded-lg">
									<Building className="w-6 h-6 text-jaide-primary" />
								</div>
								<div>
									<div className="font-medium text-jaide-neutral">Adresse</div>
									<div className="text-jaide-neutral-light">
										{contactInfo.address}
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
