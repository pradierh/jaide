// components/HeroSection.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Users, Brain } from 'lucide-react';

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 },
};

const staggerChildren = {
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

export default function HeroSection() {
	return (
		<section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-white to-jaide-background-alt">
			{/* Cercles décoratifs animés */}
			<motion.div
				className="absolute top-20 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-jaide-primary-light/10 to-jaide-accent-light/10 blur-3xl"
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
			<motion.div
				className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-jaide-accent-light/10 to-jaide-primary-light/10 blur-3xl"
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.3, 0.4, 0.3],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					repeatType: 'reverse',
					delay: 1,
				}}
			/>

			<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
				<motion.div
					className="text-center"
					variants={staggerChildren}
					initial="initial"
					animate="animate"
				>
					{/* Badge animé */}
					<motion.div
						variants={fadeInUp}
						className="inline-flex items-center px-4 py-1.5 rounded-full border border-jaide-primary/20 bg-white/50 backdrop-blur-sm shadow-sm mb-6"
					>
						<span className="text-jaide-primary text-sm font-medium mr-2">
							Nouveau
						</span>
						<span className="text-jaide-neutral-light text-sm">
							L'IA au service de la santé
						</span>
					</motion.div>

					{/* Titre principal avec dégradé */}
					<motion.h1
						variants={fadeInUp}
						className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
					>
						<span className="inline-block bg-gradient-to-r from-jaide-primary via-jaide-accent to-jaide-primary-dark bg-clip-text text-transparent">
							L'intelligence artificielle
						</span>
						<br />
						<span className="text-jaide-neutral">au service des médecins</span>
					</motion.h1>

					{/* Sous-titre */}
					<motion.p
						variants={fadeInUp}
						className="text-jaide-neutral-light text-lg md:text-xl max-w-2xl mx-auto mb-8"
					>
						Optimisez le suivi de vos patients et améliorez leur prise en charge
						grâce à notre solution d'IA générative
					</motion.p>

					{/* Boutons d'action */}
					<motion.div
						variants={fadeInUp}
						className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
					>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center px-6 py-3 rounded-lg bg-jaide-primary text-white font-medium shadow-lg shadow-jaide-primary/25 hover:bg-jaide-primary-dark transition-colors"
						>
							Commencer maintenant
							<ArrowRight className="ml-2 h-4 w-4" />
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-jaide-neutral font-medium shadow-lg hover:bg-gray-50 transition-colors"
						>
							En savoir plus
						</motion.button>
					</motion.div>

					{/* Statistiques */}
					<motion.div
						variants={fadeInUp}
						className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
					>
						{[
							{ icon: Activity, label: 'Suivi optimisé', value: '+35%' },
							{ icon: Users, label: 'Patients suivis', value: '10k+' },
							{ icon: Brain, label: 'Précision IA', value: '99.9%' },
						].map((stat, index) => (
							<motion.div
								key={stat.label}
								whileHover={{ y: -5 }}
								className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg"
							>
								<div className="flex items-center justify-center mb-3">
									<stat.icon className="w-8 h-8 text-jaide-primary" />
								</div>
								<h3 className="text-2xl font-bold text-jaide-primary mb-1">
									{stat.value}
								</h3>
								<p className="text-jaide-neutral-light">{stat.label}</p>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>

			{/* Effet de scroll */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
			>
				<motion.div
					animate={{
						y: [0, 10, 0],
					}}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
					className="w-6 h-10 rounded-full border-2 border-jaide-neutral/20 flex justify-center p-2"
				>
					<motion.div className="w-1 h-1 rounded-full bg-jaide-primary" />
				</motion.div>
			</motion.div>
		</section>
	);
}
