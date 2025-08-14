import type { Metadata } from 'next'
import Associado from '../../components/pages/Associado'

export const metadata: Metadata = {
  title: 'Área do Associado',
  description: 'Faça login ou cadastre-se como associado. Acesse eventos exclusivos, descontos e benefícios da Associação de Surf.',
  keywords: ['associado', 'login', 'cadastro', 'benefícios', 'planos', 'assinatura'],
  openGraph: {
    title: 'Área do Associado - Associação de Surf',
    description: 'Faça login ou cadastre-se como associado. Acesse eventos exclusivos e benefícios.',
    images: [
      {
        url: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Surfista no pôr do sol',
      },
    ],
  },
}

export default function AssociadoPage() {
  return <Associado />
}