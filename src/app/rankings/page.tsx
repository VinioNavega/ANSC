import type { Metadata } from 'next'
import Rankings from '../../components/pages/Rankings'

export const metadata: Metadata = {
  title: 'Rankings Municipais',
  description: 'Acompanhe todos os rankings e resultados das competições municipais de surf. Resultados em tempo real via LiveHeats.',
  keywords: ['rankings', 'competições', 'surf', 'municipal', 'resultados', 'liveheats'],
  openGraph: {
    title: 'Rankings Municipais - Associação de Surf',
    description: 'Acompanhe todos os rankings e resultados das competições municipais de surf.',
    images: [
      {
        url: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Competição de surf',
      },
    ],
  },
}

export default function RankingsPage() {
  return <Rankings />
}