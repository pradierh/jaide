'use client';
// app/about/page.tsx
import { motion } from 'framer-motion';
import {
	Award,
	Heart,
	Brain,
	Target,
	TrendingUp,
	Users,
	Building,
	FileText,
	Link as LinkIcon,
	ArrowRight,
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
	icon: any;
	title: string;
	description: string;
}

interface Milestone {
	year: string;
	title: string;
	description: string;
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

const milestones: Milestone[] = [
	{
		year: '2023',
		title: 'Création de Jaide',
		description: "Lancement du projet par l'équipe fondatrice",
	},
	{
		year: '2023',
		title: 'Premiers tests',
		description:
			"Test réussi basé sur GPT4 pour le suivi des patients atteints d'un cancer de la prostate",
	},
	{
		year: '2024',
		title: 'Publication scientifique',
		description: 'Résultats publiés dans un grand journal de cancérologie',
	},
	{
		year: '2024',
		title: 'Partenariat majeur',
		description: "Collaboration avec l'Institut Cancer du Brésil",
	},
];

export default function AboutPage() {
	return (
		<main className="pt-20 min-h-screen bg-gradient-to-b from-white to-jaide-background-alt overflow-x-hidden">
			{/* Hero Section */}
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

			{/* Milestones Section */}
			<section className="py-16">
				<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold mb-4">Notre histoire</h2>
						<p className="text-jaide-neutral-light">
							Le parcours de Jaide depuis sa création
						</p>
					</motion.div>

					<div className="relative">
						<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-jaide-primary to-jaide-accent rounded-full opacity-20" />

						<div className="space-y-12">
							{milestones.map((milestone, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									className={`flex ${
										index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
									} items-center gap-8`}
								>
									<div className="flex-1">
										<motion.div
											whileHover={{ y: -5 }}
											className="bg-white rounded-xl p-6 shadow-lg"
										>
											<div className="text-jaide-primary font-bold mb-2">
												{milestone.year}
											</div>
											<h3 className="text-xl font-bold text-jaide-neutral mb-2">
												{milestone.title}
											</h3>
											<p className="text-jaide-neutral-light">
												{milestone.description}
											</p>
										</motion.div>
									</div>
									<div className="relative flex-shrink-0">
										<motion.div
											className="w-4 h-4 rounded-full bg-jaide-primary"
											whileHover={{ scale: 1.5 }}
										/>
									</div>
									<div className="flex-1" />
								</motion.div>
							))}
						</div>
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
							className="inline-flex items-center px-6 py-3 bg-white text-jaide-primary rounded-lg font-medium shadow-lg"
						>
							Demander une démo
							<ArrowRight className="ml-2 w-5 h-5" />
						</motion.button>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
