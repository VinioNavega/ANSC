import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import EventDetail from '../../../components/pages/EventDetail'

interface Props {
  params: { id: string }
}

// Mock data for metadata generation
const mockEvents: Record<string, any> = {
  '1': {
    title: 'Campeonato Municipal de Surf 2024',
    description: 'A maior competição de surf da cidade com atletas de todas as categorias.',
    imageUrl: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  '2': {
    title: 'Festival de Verão Surf & Música',
    description: 'Evento cultural combinando surf, música e gastronomia local.',
    imageUrl: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  'festival-verao-2024': {
    title: 'Festival de Verão Surf & Música 2024',
    description: 'Dois dias de surf, música e diversão na Praia do Sol com bandas locais e competições.',
    imageUrl: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  'campeonato-municipal-2023': {
    title: 'Campeonato Municipal de Surf 2023',
    description: 'A maior competição de surf da cidade com atletas de todas as categorias e idades.',
    imageUrl: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = mockEvents[params.id]
  
  if (!event) {
    return {
      title: 'Evento não encontrado',
      description: 'O evento solicitado não foi encontrado.',
    }
  }

  return {
    title: event.title,
    description: event.description,
    keywords: ['evento', 'surf', 'competição', 'associação'],
    openGraph: {
      title: `${event.title} - Associação de Surf`,
      description: event.description,
      images: [
        {
          url: event.imageUrl,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.description,
      images: [event.imageUrl],
    },
  }
}

export default function EventDetailPage({ params }: Props) {
  return <EventDetail eventId={params.id} />
}