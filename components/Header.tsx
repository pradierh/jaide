// components/Navbar.tsx
'use client';

// components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavItem {
	label: string;
	href: string;
}

const navItems: NavItem[] = [
	{ label: 'Accueil', href: '/' },
	{ label: 'Démo', href: '/demo' },
	{ label: 'A propos', href: '/about' },
	{ label: 'Blog', href: '/blog' },
];

const itemVariants = {
	closed: { opacity: 0, x: -16 },
	open: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 0.1,
		},
	}),
};

const NavLink = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => {
	return (
		<Link href={href} className="relative text-jaide-neutral group">
			<motion.div
				whileHover="hover"
				variants={{
					hover: {
						color: 'rgb(76, 175, 80)', // jaide-primary color
					},
				}}
			>
				{children}
				<motion.span
					className="absolute -bottom-1 left-0 w-full h-0.5 bg-jaide-primary"
					variants={{
						hover: {
							scaleX: 1,
							transition: {
								type: 'spring',
								stiffness: 400,
								damping: 10,
							},
						},
					}}
					initial={{ scaleX: 0 }}
					transition={{
						type: 'spring',
						stiffness: 400,
						damping: 17,
					}}
				/>
			</motion.div>
		</Link>
	);
};

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.nav
			initial={false}
			animate={scrolled ? 'scrolled' : 'top'}
			variants={{
				top: {
					backgroundColor: 'rgba(255, 255, 255, 0)',
					boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
				},
				scrolled: {
					backgroundColor: 'rgba(255, 255, 255, 0.98)',
					boxShadow:
						'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				},
			}}
			className="fixed w-full z-50"
		>
			<div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo avec animation */}
					<motion.div
						className="flex-shrink-0"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Link href="/" className="block">
							<img
								src="jaidelogo.png"
								alt="Jaide Logo"
								className="h-10 w-auto"
							/>
						</Link>
					</motion.div>

					{/* Navigation desktop */}
					<div className="hidden md:flex md:items-center md:space-x-8">
						{navItems.map((item, i) => (
							<motion.div
								key={item.label}
								custom={i}
								initial="closed"
								animate="open"
								variants={itemVariants}
							>
								<NavLink href={item.href}>
									<span className="px-3 py-2 text-sm font-medium">
										{item.label}
									</span>
								</NavLink>
							</motion.div>
						))}

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="bg-jaide-primary hover:bg-jaide-primary-dark text-white px-4 py-2 rounded-lg font-medium"
						>
							Contactez-nous
						</motion.button>
					</div>

					{/* Bouton menu mobile */}
					<motion.button
						whileTap={{ scale: 0.9 }}
						className="md:hidden p-2"
						onClick={() => setIsOpen(!isOpen)}
					>
						<motion.div
							animate={isOpen ? 'open' : 'closed'}
							variants={{
								open: { rotate: 180 },
								closed: { rotate: 0 },
							}}
							transition={{ duration: 0.2 }}
						>
							{isOpen ? (
								<X className="w-6 h-6 text-jaide-neutral" />
							) : (
								<Menu className="w-6 h-6 text-jaide-neutral" />
							)}
						</motion.div>
					</motion.button>
				</div>

				{/* Menu mobile avec AnimatePresence */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							className="md:hidden overflow-hidden bg-white"
						>
							<motion.div className="px-2 pt-2 pb-3 space-y-1">
								{navItems.map((item, i) => (
									<motion.div
										key={item.label}
										variants={itemVariants}
										custom={i}
										initial="closed"
										animate="open"
										exit="closed"
									>
										<Link
											href={item.href}
											className="block px-3 py-2 rounded-md text-base font-medium text-jaide-neutral hover:text-jaide-primary hover:bg-gray-100"
											onClick={() => setIsOpen(false)}
										>
											<motion.div whileHover={{ x: 10 }}>
												{item.label}
											</motion.div>
										</Link>
									</motion.div>
								))}
								<motion.button
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="w-full mt-4 bg-jaide-primary hover:bg-jaide-primary-dark text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
									onClick={() => setIsOpen(false)}
								>
									Contactez-nous
								</motion.button>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
}
