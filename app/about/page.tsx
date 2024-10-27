// app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import {
	Heart,
	Brain,
	Target,
	Users,
	ArrowRight,
	Link as LinkIcon,
} from 'lucide-react';

interface TeamMember {
	name: string;
	role: string;
	subRole: string;
	description?: string;
	image: string;
	linkedin: string;
}

interface Value {
	icon: React.ElementType;
	title: string;
	description: string;
}

interface Milestone {
	year: string;
	title: string;
	description: string;
}

interface Publication {
	title: string;
	description: string;
	authors: string;
	journal: string;
	link: string;
}

const teamMembers: TeamMember[] = [
	{
		name: 'Camille Thiénot',
		role: 'Co-founder',
		subRole: 'Chief Executive Officer',
		image:
			'https://cdn.prod.website-files.com/6608325ae825fc2c60156916/66fb02a3a3903ba586b8b713_Camille%20green%20bckgrnd.png',
		linkedin: 'https://www.linkedin.com/in/camille-thi%C3%A9not-1147ba65/',
	},
	{
		name: 'Pr Jean-Emmanuel Bibault',
		role: 'Co-founder',
		subRole: 'Chief Scientific Advisor',
		description: 'Physician (APHP)\nAI Researcher (Stanford, INSERM)',
		image:
			'https://cdn.prod.website-files.com/6608325ae825fc2c60156916/66fb0310feed78d33f230ea2_JE%20green%20bckgrnd.png',
		linkedin: 'https://www.linkedin.com/in/jebibault/',
	},
	{
		name: 'Danil Savine',
		role: 'Co-founder',
		subRole: 'Chief Technology Officer',
		image:
			'https://cdn.prod.website-files.com/6608325ae825fc2c60156916/6717df0caa2fc79a9e837582_Danil%20Savine.png',
		linkedin: 'https://www.linkedin.com/in/danilsavine/',
	},
	{
		name: 'Dr David JH Wu',
		role: 'Co-founder',
		subRole: 'Product',
		description: 'Physician (Stanford)',
		image:
			'https://cdn.prod.website-files.com/6608325ae825fc2c60156916/66fb0382a528a689a9959416_David%20green%20bckgrnd.png',
		linkedin: 'https://www.linkedin.com/in/djhwu/',
	},
];

const values: Value[] = [
	{
		icon: Heart,
		title: 'Excellence médicale',
		description:
			"Nous nous engageons à améliorer les soins de santé grâce à l'innovation technologique.",
	},
	{
		icon: Brain,
		title: 'Innovation responsable',
		description:
			'Notre IA est développée de manière éthique et transparente avec les praticiens.',
	},
	{
		icon: Target,
		title: 'Impact concret',
		description:
			"Nous mesurons notre succès à travers l'amélioration réelle des résultats patients.",
	},
	{
		icon: Users,
		title: 'Collaboration',
		description:
			'Nous travaillons main dans la main avec les professionnels de santé.',
	},
];

const publications: Publication[] = [
	{
		title:
			'Pilot applications of GPT-4 in radiation oncology: Summarizing patient symptom intake and targeted applications',
		description:
			'This study explores using GPT-4 for radiation toxicity monitoring in prostate cancer treatments.',
		authors: 'David JH Wu, Jean-Emmanuel Bibault',
		journal: 'Radiotherapy & Oncology (The Green Journal)',
		link: 'https://www.thegreenjournal.com/article/S0167-8140(23)89872-3/abstract',
	},
	{
		title:
			'A web-based, LLM-powered AI symptom summarization tool (ASST) for monitoring of breast cancer treatment toxicity',
		description:
			'This study developed and tested a GPT-4-based web app for monitoring cancer treatment toxicity in breast cancer patients.',
		authors: 'Jean-Emmanuel Bibault, David JH Wu',
		journal: 'Journal of Clinical Oncology - ASCO',
		link: 'https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.e13622',
	},
	{
		title:
			'A Comparative Study of Large Language Models for Generating Summaries of Breast Cancer Patient-Reported Treatment Toxicities',
		description:
			'This study aims to compare four leading open-source and proprietary LLMs in generating summaries of PROs using PDQI.',
		authors: 'David JH Wu, Jean-Emmanuel Bibault',
		journal:
			'International Journal of Radiation Oncology - Biology - Physics (The Red Journal) - ASTRO',
		link: 'https://www.redjournal.org/article/S0360-3016(24)02223-5/fulltext',
	},
	{
		title:
			'Development and Validation of an Interpretable Artificial Intelligence Model to Predict 10-Year Prostate Cancer evolution',
		description:
			'This study introduces a gradient-boosted model that can predict 10-year prostate cancer evolution with high accuracy',
		authors:
			'Jean-Emmanuel Bibault, Steven Hancock, Mark K Buyyounouski, Hilary Bagshaw, John T Leppert, Joseph C Liao, Lei Xing',
		journal: 'Cancers',
		link: 'https://www.mdpi.com/2072-6694/13/12/3064',
	},
	{
		title:
			'Development and validation of a model to predict evolution in colorectal cancer using a gradient-boosted machine',
		description:
			'This study introduces a gradient-boosted model that can predict 10-year colorectal cancer evolution with high accuracy',
		authors: 'Jean-Emmanuel Bibault, Daniel T Chang, Lei Xing',
		journal: 'Gut',
		link: 'https://gut.bmj.com/content/70/5/884',
	},
];

export default function AboutPage() {
	return (
		<main className="pt-20 min-h-screen bg-gradient-to-b from-white to-jaide-background-alt overflow-x-hidden">
			{/* Hero Section with Team */}
			<section className="py-16 md:py-24 relative overflow-hidden">
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
							'radial-gradient(circle at center, rgba(76, 175, 80, 0.1) 0%, transparent 8%)',
						backgroundSize: '40px 40px',
					}}
				/>

				<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center max-w-3xl mx-auto mb-16"
					>
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							<span className="bg-gradient-to-r from-jaide-primary to-jaide-accent bg-clip-text text-transparent">
								L'équipe Jaide
							</span>
						</h1>
						<p className="text-xl text-jaide-neutral-light">
							Une équipe pluridisciplinaire d'experts en IA, en médecine et en
							technologie, unis pour transformer la prise en charge médicale.
						</p>
					</motion.div>

					{/* Team Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
						{teamMembers.map((member, index) => (
							<motion.div
								key={member.name}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2 }}
								className="text-center"
							>
								<motion.div
									whileHover={{ scale: 1.05 }}
									className="relative mb-6 group"
								>
									<div className="aspect-square overflow-hidden rounded-2xl bg-jaide-primary/5">
										<img
											src={member.image}
											alt={member.name}
											className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
										/>
									</div>
								</motion.div>

								<motion.a
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.2, rotate: 5 }}
									className="inline-block mb-4"
								>
									<img
										src="https://cdn.prod.website-files.com/6608325ae825fc2c60156916/66fb0d091f626afdac7b2e01_Linkedin%20green.png"
										alt="LinkedIn"
										className="w-8 h-8"
									/>
								</motion.a>

								<h3 className="text-xl font-bold text-jaide-neutral mb-2">
									{member.name}
								</h3>
								<p className="text-jaide-primary font-medium mb-1">
									{member.role}
								</p>
								<p className="text-jaide-primary">{member.subRole}</p>
								{member.description && (
									<p className="text-jaide-neutral-light mt-2 text-sm">
										{member.description.split('\n').map((line, i) => (
											<span key={i} className="block">
												{line}
											</span>
										))}
									</p>
								)}
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-16 bg-white">
				<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold mb-4">Nos valeurs</h2>
						<p className="text-jaide-neutral-light">
							Les principes qui guident nos actions au quotidien
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2 }}
								whileHover={{ y: -5 }}
								className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
							>
								<div className="p-3 bg-jaide-primary/10 rounded-xl w-fit mb-4">
									<value.icon className="w-6 h-6 text-jaide-primary" />
								</div>
								<h3 className="text-xl font-bold text-jaide-neutral mb-2">
									{value.title}
								</h3>
								<p className="text-jaide-neutral-light">{value.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Publications Section */}
			<section className="py-16">
				<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold mb-4">
							Publications scientifiques
						</h2>
						<p className="text-jaide-neutral-light">
							Nos recherches publiées dans des revues scientifiques
							prestigieuses
						</p>
					</motion.div>

					<div className="grid grid-cols-1 gap-6">
						{publications.map((pub, index) => (
							<motion.a
								key={index}
								href={pub.link}
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
							>
								<motion.div
									whileHover={{ y: -5 }}
									className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
								>
									<h3 className="text-xl font-bold text-jaide-primary mb-3">
										{pub.title}
									</h3>
									<p className="text-jaide-neutral-light mb-4">
										{pub.description}
									</p>
									<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
										<span className="text-jaide-neutral font-medium">
											{pub.authors}
										</span>
										<span className="text-jaide-primary">{pub.journal}</span>
									</div>
								</motion.div>
							</motion.a>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-white">
				<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gradient-to-r from-jaide-primary to-jaide-accent rounded-2xl p-8 md:p-12 text-white text-center"
					>
						<h2 className="text-3xl font-bold mb-4">
							Rejoignez l'aventure Jaide
						</h2>
						<p className="text-white/90 mb-8 max-w-2xl mx-auto">
							Découvrez comment notre solution peut transformer votre pratique
							médicale
						</p>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center px-6 py-3 bg-white text-jaide-primary rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
						>
							Demander une démo
							<ArrowRight className="ml-2 w-5 h-5" />
						</motion.button>
					</motion.div>
				</div>
			</section>

			{/* Background Animation */}
			<motion.div
				className="fixed inset-0 pointer-events-none -z-10"
				animate={{
					background: [
						'radial-gradient(circle at 20% 20%, rgba(76, 175, 80, 0.05) 0%, transparent 70%)',
						'radial-gradient(circle at 80% 80%, rgba(76, 175, 80, 0.05) 0%, transparent 70%)',
					],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
			/>
		</main>
	);
}
