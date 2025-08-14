import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '../contexts/AuthContext'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Associação de Surf - Vivendo a paixão pelas ondas',
    template: '%s | Associação de Surf'
  },
  description: 'Associação de Surf promovendo o esporte e a cultura marítima. Participe de eventos, competições e faça parte da nossa comunidade.',
  keywords: ['surf', 'associação', 'eventos', 'competições', 'praia', 'ondas', 'esporte'],
  authors: [{ name: 'Associação de Surf' }],
  creator: 'Associação de Surf',
  publisher: 'Associação de Surf',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://associacaosurf.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://associacaosurf.com.br',
    title: 'Associação de Surf - Vivendo a paixão pelas ondas',
    description: 'Associação de Surf promovendo o esporte e a cultura marítima. Participe de eventos, competições e faça parte da nossa comunidade.',
    siteName: 'Associação de Surf',
    images: [
      {
        url: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Associação de Surf',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Associação de Surf - Vivendo a paixão pelas ondas',
    description: 'Associação de Surf promovendo o esporte e a cultura marítima.',
    images: ['https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}