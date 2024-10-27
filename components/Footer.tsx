// components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import {
	Facebook,
	Twitter,
	Linkedin,
	ArrowRight,
	Mail,
	PhoneCall,
	MessageCircle,
	ArrowUp,
	ChevronRight,
} from 'lucide-react';

const footerLinks = {
	solutions: [
		{ label: 'Pour les médecins', href: '/medecins' },
		{ label: 'Pour les patients', href: '/patients' },
		{ label: 'Pour les institutions', href: '/institutions' },
		{ label: 'Études de cas', href: '/etudes-de-cas' },
	],
	entreprise: [
		{ label: 'À propos', href: '/about' },
		{ label: 'Équipe', href: '/equipe' },
		{ label: 'Carrières', href: '/carrieres' },
		{ label: 'Contact', href: '/contact' },
	],
	resources: [
		{ label: 'Documentation', href: '/docs' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Assistance', href: '/support' },
		{ label: 'API', href: '/api' },
	],
	legal: [
		{ label: 'Mentions légales', href: '/mentions-legales' },
		{ label: 'Politique de confidentialité', href: '/privacy' },
		{ label: 'CGU', href: '/cgu' },
		{ label: 'Conformité RGPD', href: '/rgpd' },
	],
};

const socialLinks = [
	{ icon: Facebook, href: 'https://facebook.com' },
	{ icon: Twitter, href: 'https://twitter.com' },
	{ icon: Linkedin, href: 'https://linkedin.com' },
];

export function FloatingCTA() {
	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 1 }}
			className="fixed bottom-8 right-8 z-50 flex flex-col gap-4"
		>
			{/* Actions principales */}
			<motion.div className="flex flex-col gap-2">
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="bg-jaide-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
				>
					<MessageCircle className="w-6 h-6" />
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="bg-jaide-accent text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
				>
					<PhoneCall className="w-6 h-6" />
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					className="bg-white text-jaide-neutral p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
				>
					<ArrowUp className="w-6 h-6" />
				</motion.button>
			</motion.div>
		</motion.div>
	);
}

export default function Footer() {
	return (
		<footer className="bg-white pt-20 pb-10 relative overflow-hidden">
			{/* Décoration d'arrière-plan */}
			<div className="absolute inset-0 opacity-5">
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
							'radial-gradient(circle at center, rgba(76, 175, 80, 0.4) 0%, transparent 8%)',
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Newsletter */}
				<div className="mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gradient-to-r from-jaide-primary to-jaide-accent rounded-2xl p-8 md:p-12 relative overflow-hidden"
					>
						<div className="relative z-10">
							<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
								Restez informé des dernières avancées
							</h3>
							<p className="text-white/80 mb-8 max-w-2xl">
								Inscrivez-vous à notre newsletter pour recevoir nos actualités
								et nos conseils sur l'IA médicale.
							</p>
							<form className="flex flex-col sm:flex-row gap-4 max-w-xl">
								<input
									type="email"
									placeholder="Votre email professionnel"
									className="flex-1 px-6 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white/20"
								/>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="bg-white text-jaide-primary px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
								>
									S'inscrire
									<ArrowRight className="w-4 h-4" />
								</motion.button>
							</form>
						</div>
					</motion.div>
				</div>

				{/* Liens du footer */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					{Object.entries(footerLinks).map(([category, links]) => (
						<div key={category}>
							<h4 className="text-jaide-neutral font-semibold mb-4 capitalize">
								{category}
							</h4>
							<ul className="space-y-3">
								{links.map((link) => (
									<li key={link.label}>
										<motion.a
											href={link.href}
											className="text-jaide-neutral-light hover:text-jaide-primary flex items-center gap-2 group"
											whileHover={{ x: 5 }}
										>
											<ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
											{link.label}
										</motion.a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Barre inférieure */}
				<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="flex items-center gap-8">
						<img src="/jaidelogo.png" alt="Jaide Logo" className="h-8 w-auto" />
						<p className="text-jaide-neutral-light text-sm">
							© {new Date().getFullYear()} Jaide. Tous droits réservés.
						</p>
					</div>

					{/* Réseaux sociaux */}
					<div className="flex items-center gap-4">
						{socialLinks.map((social) => (
							<motion.a
								key={social.href}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.2, rotate: 5 }}
								className="text-jaide-neutral-light hover:text-jaide-primary transition-colors"
							>
								<social.icon className="w-5 h-5" />
							</motion.a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
