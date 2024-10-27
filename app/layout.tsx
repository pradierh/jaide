// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/components/Header';
import Footer from '@/components/Footer';

import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'Hugo Pradier | Portfolio',
	description: 'Portfolio de Hugo Pradier - Full Stack Developer',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" className={`${inter.variable}`}>
			<body>
				<div className="min-h-screen flex flex-col">
					<NavBar />
					<main className="flex-grow pt-20">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
