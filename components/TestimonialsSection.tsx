// components/TestimonialsSection.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star, TrendingUp, Users, Clock, Award } from 'lucide-react';

const testimonials = [
	{
		name: 'Dr. Jean-Emmanuel Bibault',
		role: 'Oncologue Radiothérapeute, AP-HP',
		image: '/api/placeholder/64/64',
		quote:
			'Nos résultats montrent une amélioration significative dans la détection et le suivi des symptômes des patients atteints de cancer.',
		stats: {
			label: 'Amélioration du suivi',
			value: '+35%',
		},
	},
	{
		name: 'David JH Wu',
		role: 'Institut Cancer du Brésil',
		image: '/api/placeholder/64/64',
		quote:
			"L'essai clinique a démontré une réduction significative des erreurs de diagnostic et une amélioration du temps de prise en charge.",
		stats: {
			label: 'Réduction des erreurs',
			value: '-20%',
		},
	},
];

const caseStudies = [
	{
		title: 'Institut Cancer du Brésil',
		description:
			"Implémentation réussie pour le suivi des patients atteints d'un cancer de la prostate",
		metrics: [
			{ label: 'Patients suivis', value: '10k+', icon: Users },
			{ label: 'Temps gagné', value: '40%', icon: Clock },
			{ label: 'Précision', value: '99.9%', icon: TrendingUp },
		],
		tags: ['Oncologie', 'Suivi patient', 'IA'],
	},
];

const awards = [
	{
		title: 'Publication Scientifique',
		description: 'Résultats publiés dans un grand journal de cancérologie',
		icon: Award,
	},
	// Ajoutez d'autres récompenses/reconnaissances si disponibles
];

export default function TestimonialsSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

	return (
		<section ref={containerRef} className="py-20 relative overflow-hidden">
			{/* Background Elements */}
			<motion.div
				className="absolute inset-0 opacity-20"
				style={{
					backgroundImage:
						'radial-gradient(circle at 20% 20%, rgba(76, 175, 80, 0.1) 0%, transparent 50%)',
					y,
				}}
			/>

			<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						<span className="bg-gradient-to-r from-jaide-primary to-jaide-accent bg-clip-text text-transparent">
							Ils nous font confiance
						</span>
					</h2>
					<p className="text-jaide-neutral-light text-lg max-w-2xl mx-auto">
						Découvrez comment Jaide transforme la pratique médicale au quotidien
					</p>
				</motion.div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.name}
							initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="relative"
						>
							<motion.div
								className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
								whileHover={{ y: -5 }}
							>
								<Quote className="w-10 h-10 text-jaide-primary mb-4 opacity-20" />
								<p className="text-jaide-neutral text-lg mb-6 italic">
									"{testimonial.quote}"
								</p>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-4">
										<img
											src={testimonial.image}
											alt={testimonial.name}
											className="w-12 h-12 rounded-full"
										/>
										<div>
											<h4 className="font-semibold text-jaide-neutral">
												{testimonial.name}
											</h4>
											<p className="text-sm text-jaide-neutral-light">
												{testimonial.role}
											</p>
										</div>
									</div>
									<div className="text-right">
										<div className="text-2xl font-bold text-jaide-primary">
											{testimonial.stats.value}
										</div>
										<div className="text-sm text-jaide-neutral-light">
											{testimonial.stats.label}
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>

				{/* Case Studies */}
				<div className="mb-16">
					{caseStudies.map((study, index) => (
						<motion.div
							key={study.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="bg-gradient-to-r from-jaide-primary to-jaide-accent p-1 rounded-2xl"
						>
							<div className="bg-white rounded-2xl p-8">
								<h3 className="text-2xl font-bold text-jaide-neutral mb-4">
									{study.title}
								</h3>
								<p className="text-jaide-neutral-light mb-8">
									{study.description}
								</p>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
									{study.metrics.map((metric, mIndex) => (
										<motion.div
											key={metric.label}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: mIndex * 0.1 }}
											className="bg-jaide-background-alt rounded-xl p-4 text-center"
										>
											<metric.icon className="w-8 h-8 text-jaide-primary mx-auto mb-2" />
											<div className="text-2xl font-bold text-jaide-primary mb-1">
												{metric.value}
											</div>
											<div className="text-sm text-jaide-neutral-light">
												{metric.label}
											</div>
										</motion.div>
									))}
								</div>
								<div className="flex flex-wrap gap-2">
									{study.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 rounded-full bg-jaide-primary/10 text-jaide-primary text-sm"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Awards & Recognition */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{awards.map((award, index) => (
						<motion.div
							key={award.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
						>
							<award.icon className="w-10 h-10 text-jaide-primary mb-4" />
							<h4 className="text-lg font-semibold text-jaide-neutral mb-2">
								{award.title}
							</h4>
							<p className="text-jaide-neutral-light">{award.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
