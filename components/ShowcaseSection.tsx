'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ZoomIn } from 'lucide-react';

// Définition du type pour un showcase
interface Showcase {
	title: string;
	description: string;
	image: string;
}

const ShowcaseSection = () => {
	const [selectedImage, setSelectedImage] = useState<Showcase | null>(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const showcases: Showcase[] = [
		{
			title: 'Palais des Congrès Paris Virtual',
			description:
				'Une reproduction fidèle du célèbre centre de congrès parisien, adaptée aux événements virtuels.',
			image: '/palais/palais1.jpg',
		},
		{
			title: 'Virtual Medical Center Brussels',
			description:
				'Un espace virtuel innovant conçu pour les conférences médicales internationales.',
			image: '/palais/palais2.jpg',
		},
		{
			title: 'Healthcare Summit Virtual Venue',
			description:
				'Une plateforme immersive pour les grands sommets de la santé.',
			image: '/palais/palais3.jpg',
		},
		{
			title: 'Digital Medical Conference Hub',
			description:
				'Un hub digital moderne pour les conférences médicales de nouvelle génération.',
			image: '/palais/palais4.jpg',
		},
	];

	const nextImage = () => {
		setCurrentIndex((prev) => (prev + 1) % showcases.length);
	};

	const previousImage = () => {
		setCurrentIndex((prev) => (prev - 1 + showcases.length) % showcases.length);
	};

	return (
		<section className="py-20 bg-gradient-to-br from-white to-talos-blue/5 overflow-hidden">
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
							Nos Réalisations
						</span>
					</h2>
					<p className="max-w-3xl mx-auto text-gray-600 text-lg">
						Découvrez nos palais des congrès virtuels, où l'innovation rencontre
						l'excellence
					</p>
				</motion.div>

				<div className="relative">
					{/* Main Showcase */}
					<div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentIndex}
								initial={{ opacity: 0, scale: 1.1 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.5 }}
								className="relative aspect-video"
							>
								<Image
									src={showcases[currentIndex].image}
									alt={showcases[currentIndex].title}
									fill
									className="object-cover"
								/>
								{/* Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

								{/* Content Overlay */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
									className="absolute bottom-0 left-0 right-0 p-8 text-white"
								>
									<h3 className="text-2xl font-bold mb-2">
										{showcases[currentIndex].title}
									</h3>
									<p className="text-white/80">
										{showcases[currentIndex].description}
									</p>
								</motion.div>

								{/* Zoom Button */}
								<button
									onClick={() => setSelectedImage(showcases[currentIndex])}
									className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
								>
									<ZoomIn className="w-6 h-6 text-white" />
								</button>
							</motion.div>
						</AnimatePresence>

						{/* Navigation Buttons */}
						<button
							onClick={previousImage}
							className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
						>
							<ArrowLeft className="w-6 h-6 text-white" />
						</button>
						<button
							onClick={nextImage}
							className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
						>
							<ArrowRight className="w-6 h-6 text-white" />
						</button>
					</div>

					{/* Thumbnails */}
					<div className="flex justify-center mt-8 gap-4">
						{showcases.map((showcase, index) => (
							<motion.button
								key={index}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => setCurrentIndex(index)}
								className={`relative w-20 h-20 rounded-lg overflow-hidden ${
									currentIndex === index ? 'ring-2 ring-talos-blue' : ''
								}`}
							>
								<Image
									src={showcase.image}
									alt={showcase.title}
									fill
									className="object-cover"
								/>
							</motion.button>
						))}
					</div>
				</div>
			</div>

			{/* Fullscreen Modal */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedImage(null)}
						className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
					>
						<motion.div
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
							className="relative max-w-7xl w-full aspect-video"
						>
							<Image
								src={selectedImage.image}
								alt={selectedImage.title}
								fill
								className="object-contain"
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default ShowcaseSection;
