import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  photos?: string[];
}

const Eventos: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsQuery = query(
          collection(db, 'events'),
          orderBy('date', 'desc')
        );
        const snapshot = await getDocs(eventsQuery);
        const eventsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Event[];
        setEvents(eventsData);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
        // Mock data for demonstration
        setEvents([
          {
            id: '1',
            title: 'Campeonato Municipal de Surf 2024',
            description: 'A maior competição de surf da cidade com atletas de todas as categorias.',
            date: '2024-03-15',
            location: 'Praia Central',
            imageUrl: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800'
          },
          {
            id: '2',
            title: 'Festival de Verão Surf & Música',
            description: 'Evento cultural combinando surf, música e gastronomia local.',
            date: '2024-01-20',
            location: 'Praia do Sol',
            imageUrl: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800'
          },
          {
            id: '3',
            title: 'Clínica de Surf para Iniciantes',
            description: 'Workshop gratuito para quem está começando no mundo do surf.',
            date: '2023-12-10',
            location: 'Escola de Surf da Associação',
            imageUrl: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=800'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Eventos da Associação
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confira todos os eventos que já realizamos e fique por dentro das próximas atividades
          </p>
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-300 h-64 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">Nenhum evento disponível no momento.</p>
              </div>
            ) : (
              events.map((event) => (
                <article 
                  key={event.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                      {formatDate(event.date)}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{formatDate(event.date)}</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      <Link to={`/evento/${event.id}`}>
                        {event.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <Link 
                      to={`/evento/${event.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Ver detalhes
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Não Perca Nossos Próximos Eventos!
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Seja um associado e tenha acesso antecipado a todos os eventos e atividades.
          </p>
          <Link
            to="/associado"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Tornar-se Associado
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Eventos;