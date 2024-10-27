// app/blog/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';

// Types
interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	category: string;
	image: string;
	author: {
		name: string;
		role: string;
		avatar: string;
	};
	date: string;
	readTime: string;
	tags: string[];
}

// Données des articles
const blogPosts: BlogPost[] = [
	{
		id: '1',
		title:
			"L'IA générative au service du suivi des patients atteints de cancer",
		excerpt:
			"Découvrez comment l'intelligence artificielle améliore le suivi et la prise en charge des patients en oncologie.",
		category: 'Innovation',
		image: '/api/placeholder/800/400',
		author: {
			name: 'Pr Jean-Emmanuel Bibault',
			role: 'Chief Scientific Advisor',
			avatar:
				'https://cdn.prod.website-files.com/6608325ae825fc2c60156916/66fb0310feed78d33f230ea2_JE%20green%20bckgrnd.png',
		},
		date: '2024-01-15',
		readTime: '5 min',
		tags: ['IA', 'Oncologie', 'Suivi patient'],
	},
	{
		id: '2',
		title: "Résultats de l'étude clinique : amélioration du suivi de 35%",
		excerpt:
			'Les résultats de notre étude montrent une amélioration significative dans la détection et le suivi des symptômes.',
		category: 'Recherche',
		image: '/api/placeholder/800/400',
		author: {
			name: 'Dr David JH Wu',
			role: 'Product',
			avatar:
				'https://cdn.prod.website-files.com/6608325ae825fc2c60156916/66fb0382a528a689a9959416_David%20green%20bckgrnd.png',
		},
		date: '2024-02-01',
		readTime: '8 min',
		tags: ['Étude clinique', 'Résultats', 'Innovation'],
	},
];

const categories = [
	'Tous',
	'Innovation',
	'Recherche',
	'Technologie',
	'Médecine',
];

export default function BlogPage() {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('Tous');

	const filteredPosts = blogPosts.filter((post) => {
		const matchesSearch =
			post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			selectedCategory === 'Tous' || post.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	return (
		<main className="pt-20 min-h-screen bg-gradient-to-b from-white to-jaide-background-alt">
			{/* Hero Section */}
			<section className="py-16 md:py-24 relative overflow-hidden">
				<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center max-w-3xl mx-auto mb-16"
					>
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							<span className="bg-gradient-to-r from-jaide-primary to-jaide-accent bg-clip-text text-transparent">
								Blog & Actualités
							</span>
						</h1>
						<p className="text-jaide-neutral-light text-lg">
							Découvrez nos dernières actualités, études et innovations dans le
							domaine de l'IA médicale
						</p>
					</motion.div>

					{/* Search and Filters */}
					<div className="mb-12">
						<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
							<div className="relative w-full md:w-96">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-jaide-neutral-light w-5 h-5" />
								<input
									type="text"
									placeholder="Rechercher un article..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-jaide-primary focus:ring-2 focus:ring-jaide-primary/20 outline-none transition-colors"
								/>
							</div>
							<div className="flex flex-wrap gap-2">
								{categories.map((category) => (
									<motion.button
										key={category}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={() => setSelectedCategory(category)}
										className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
											selectedCategory === category
												? 'bg-jaide-primary text-white'
												: 'bg-white text-jaide-neutral hover:bg-gray-50'
										}`}
									>
										{category}
									</motion.button>
								))}
							</div>
						</div>
					</div>

					{/* Blog Posts Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{filteredPosts.map((post) => (
							<motion.article
								key={post.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								whileHover={{ y: -5 }}
								className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
							>
								<div className="relative aspect-[16/9] overflow-hidden">
									<img
										src={post.image}
										alt={post.title}
										className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
									/>
									<div className="absolute top-4 left-4">
										<span className="bg-jaide-primary text-white px-3 py-1 rounded-full text-sm font-medium">
											{post.category}
										</span>
									</div>
								</div>

								<div className="p-6">
									<div className="flex items-center gap-4 mb-4">
										<img
											src={post.author.avatar}
											alt={post.author.name}
											className="w-10 h-10 rounded-full"
										/>
										<div>
											<p className="text-jaide-neutral font-medium">
												{post.author.name}
											</p>
											<p className="text-jaide-neutral-light text-sm">
												{post.author.role}
											</p>
										</div>
									</div>

									<h2 className="text-xl font-bold text-jaide-neutral mb-3">
										{post.title}
									</h2>
									<p className="text-jaide-neutral-light mb-4">
										{post.excerpt}
									</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{post.tags.map((tag) => (
											<span
												key={tag}
												className="bg-jaide-primary/10 text-jaide-primary px-3 py-1 rounded-full text-sm"
											>
												{tag}
											</span>
										))}
									</div>

									<div className="flex items-center justify-between pt-4 border-t border-gray-100">
										<div className="flex items-center gap-4 text-jaide-neutral-light text-sm">
											<span className="flex items-center gap-1">
												<Calendar className="w-4 h-4" />
												{new Date(post.date).toLocaleDateString('fr-FR', {
													day: 'numeric',
													month: 'long',
													year: 'numeric',
												})}
											</span>
											<span className="flex items-center gap-1">
												<Clock className="w-4 h-4" />
												{post.readTime}
											</span>
										</div>
										<motion.button
											whileHover={{ x: 5 }}
											className="text-jaide-primary font-medium flex items-center gap-2"
										>
											Lire plus
											<ArrowRight className="w-4 h-4" />
										</motion.button>
									</div>
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
