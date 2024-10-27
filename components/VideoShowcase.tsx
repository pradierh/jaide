'use client';

// components/VideoShowcase.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function VideoShowcase() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
	const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
	const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

	return (
		<section
			ref={sectionRef}
			className="relative min-h-screen py-20 bg-gradient-to-b from-white to-jaide-background-alt overflow-hidden"
		>
			{/* Cercles décoratifs */}
			<motion.div
				className="absolute top-1/4 right-[-20%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-jaide-primary/10 to-jaide-accent/10 blur-3xl"
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
				className="absolute bottom-1/4 left-[-20%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-jaide-accent/10 to-jaide-primary/10 blur-3xl"
				animate={{
					scale: [1.2, 1, 1.2],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					repeatType: 'reverse',
					delay: 4,
				}}
			/>

			<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Texte d'introduction */}
				<motion.div style={{ opacity, y }} className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						<span className="bg-gradient-to-r from-jaide-primary to-jaide-accent bg-clip-text text-transparent">
							Une interface intuitive
						</span>
					</h2>
					<p className="text-jaide-neutral-light text-lg max-w-2xl mx-auto">
						Découvrez comment notre solution simplifie le suivi des patients et
						améliore leur prise en charge grâce à une interface moderne et
						efficace.
					</p>
				</motion.div>

				{/* Laptop Frame avec Video */}
				<motion.div
					style={{ scale, opacity }}
					className="relative max-w-5xl mx-auto"
				>
					{/* Laptop Frame */}
					<div className="relative pt-[56.25%] rounded-2xl bg-jaide-neutral-dark">
						{/* Écran */}
						<div className="absolute inset-[2%] top-[2%] bottom-[8%] bg-white rounded-lg overflow-hidden shadow-2xl">
							{/* Barre du haut */}
							<div className="h-6 bg-gray-100 flex items-center px-4 space-x-2">
								<div className="w-3 h-3 rounded-full bg-red-400"></div>
								<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
								<div className="w-3 h-3 rounded-full bg-green-400"></div>
							</div>

							{/* Vidéo */}
							<video
								autoPlay
								loop
								muted
								playsInline
								className="w-full h-[calc(100%-24px)] object-cover"
							>
								<source
									src="https://cdn.prod.website-files.com/6608325ae825fc2c60156916/67055cd3eb4461476472c6bc_Video%20website%20-%20laptop2-transcode.mp4"
									type="video/mp4"
								/>
								<source
									src="https://cdn.prod.website-files.com/6608325ae825fc2c60156916/67055cd3eb4461476472c6bc_Video%20website%20-%20laptop2-transcode.webm"
									type="video/webm"
								/>
							</video>
						</div>

						{/* Base du laptop */}
						<div className="absolute bottom-0 inset-x-[15%] h-[3%] bg-jaide-neutral-dark rounded-b-xl"></div>
						<div className="absolute -bottom-[2%] inset-x-[10%] h-[2%] bg-jaide-neutral-dark/80 rounded-b-xl blur-sm"></div>
					</div>

					{/* Points forts flottants */}
					<motion.div
						className="absolute -right-8 top-1/4 bg-white p-4 rounded-xl shadow-lg"
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.5 }}
					>
						<p className="text-jaide-primary font-medium">
							Interface intuitive
						</p>
					</motion.div>

					<motion.div
						className="absolute -left-8 top-2/3 bg-white p-4 rounded-xl shadow-lg"
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.8 }}
					>
						<p className="text-jaide-accent font-medium">Suivi en temps réel</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
