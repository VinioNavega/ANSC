import type { Metadata } from 'next'
import Eventos from '../../components/pages/Eventos'

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Confira todos os eventos da Associação de Surf. Competições, festivais, clínicas e ações sociais para toda a comunidade.',
  keywords: ['eventos', 'competições', 'festivais', 'surf', 'clínicas', 'ações sociais'],
  openGraph: {
    title: 'Eventos - Associação de Surf',
    description: 'Confira todos os eventos da Associação de Surf. Competições, festivais, clínicas e ações sociais.',
    images: [
      {
        url: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Eventos de surf',
      },
    ],
  },
}

export default function EventosPage() {
  return <Eventos />
}