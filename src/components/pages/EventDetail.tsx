'use client'

import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Calendar, MapPin, Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Event {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  date: string;
  location: string;
  imageUrl: string;
  photos?: string[];
  participants?: number;
  category?: string;
}

interface EventDetailProps {
  eventId: string;
}

const EventDetail: React.FC<EventDetailProps> = ({ eventId }) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventDoc = await getDoc(doc(db, 'events', eventId));
        if (eventDoc.exists()) {
          setEvent({ id: eventDoc.id, ...eventDoc.data() } as Event);
        } else {
          // Mock data for demonstration
          const mockEvents: Record<string, Event> = {
            '1': {
              id: '1',
              title: 'Campeonato Municipal de Surf 2024',
              description: 'A maior competição de surf da cidade com atletas de todas as categorias.',
              fullDescription: 'O Campeonato Municipal de Surf 2024 foi um evento espetacular que reuniu os melhores surfistas da região. Com ondas perfeitas e condições ideais, os atletas puderam demonstrar toda sua habilidade e paixão pelo esporte. O evento contou com várias categorias, desde iniciantes até profissionais, promovendo a inclusão e o desenvolvimento do surf local.',
              date: '2024-03-15',
              location: 'Praia Central',
              imageUrl: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200',
              participants: 85,
              category: 'Competição',
              photos: [
                'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
                'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=800',
                'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800'
              ]
            },
            '2': {
              id: '2',
              title: 'Festival de Verão Surf & Música',
              description: 'Evento cultural combinando surf, música e gastronomia local.',
              fullDescription: 'O Festival de Verão foi uma celebração única que combinou o melhor do surf com a rica cultura musical local. Durante dois dias, a praia se transformou em um grande palco onde atletas competiram enquanto bandas locais animaram o público. Food trucks ofereceram o melhor da gastronomia local, criando uma atmosfera festiva e acolhedora para toda a família.',
              date: '2024-01-20',
              location: 'Praia do Sol',
              imageUrl: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1200',
              participants: 150,
              category: 'Festival',
              photos: [
                'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
                'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800'
              ]
            }
          };
          
          if (mockEvents[eventId]) {
            setEvent(mockEvents[eventId]);
          }
        }
      } catch (error) {
        console.error('Erro ao buscar evento:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Evento não encontrado</h1>
          <Link href="/eventos" className="text-blue-600 hover:text-blue-700">
            Voltar aos eventos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative h-96 bg-gray-900 overflow-hidden">
        <Image 
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link 
              href="/eventos"
              className="inline-flex items-center text-white mb-6 hover:text-gray-200 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos eventos
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {event.title}
            </h1>
            <div className="flex flex-wrap items-center text-white text-lg space-x-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {formatDate(event.date)}
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {event.location}
              </div>
              {event.participants && (
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  {event.participants} participantes
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sobre o Evento</h2>
              <div className="prose prose-lg text-gray-700">
                <p>{event.fullDescription || event.description}</p>
              </div>
            </div>

            {/* Photo Gallery */}
            {event.photos && event.photos.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Galeria de Fotos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.photos.map((photo, index) => (
                    <Image 
                      key={index}
                      src={photo}
                      alt={`${event.title} - Foto ${index + 1}`}
                      width={400}
                      height={256}
                      className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Detalhes do Evento</h3>
              
              <div className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Data</dt>
                  <dd className="text-lg text-gray-900">{formatDate(event.date)}</dd>
                </div>
                
                <div>
                  <dt className="text-sm font-medium text-gray-500">Local</dt>
                  <dd className="text-lg text-gray-900">{event.location}</dd>
                </div>
                
                {event.category && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Categoria</dt>
                    <dd className="text-lg text-gray-900">{event.category}</dd>
                  </div>
                )}
                
                {event.participants && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Participantes</dt>
                    <dd className="text-lg text-gray-900">{event.participants}</dd>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="/associado"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Seja um Associado
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;