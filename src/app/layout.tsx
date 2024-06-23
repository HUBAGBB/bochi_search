import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../styles/globals.css'
import Footer from '@/components/Footer'
import Providers from './Providers'
import { Noto_Sans_KR } from 'next/font/google';

/**적용하고자 하는 font*/
const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '봇치 더 검색',
	description: 'Google Clone build with React + Next Js13 + TypeScript',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={notoSansKr.className}>
			<body className="relative flex min-h-screen flex-col">
				<Providers>
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
