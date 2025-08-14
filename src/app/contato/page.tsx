import type { Metadata } from 'next'
import Contato from '../../components/pages/Contato'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Associação de Surf. WhatsApp, Instagram, email e horários de atendimento.',
  keywords: ['contato', 'whatsapp', 'instagram', 'email', 'telefone', 'endereço'],
  openGraph: {
    title: 'Contato - Associação de Surf',
    description: 'Entre em contato conosco através dos nossos canais de comunicação.',
    images: [
      {
        url: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Contato Associação de Surf',
      },
    ],
  },
}

export default function ContatoPage() {
  return <Contato />
}