import type { Metadata } from 'next'
import Home from '../components/pages/Home'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Página inicial da Associação de Surf. Conheça nossa história, últimas notícias e faça parte da nossa comunidade.',
  openGraph: {
    title: 'Associação de Surf - Home',
    description: 'Página inicial da Associação de Surf. Conheça nossa história, últimas notícias e faça parte da nossa comunidade.',
    images: [
      {
        url: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Surfistas na praia',
      },
    ],
  },
}

export default function HomePage() {
  return <Home />
}