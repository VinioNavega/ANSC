import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface News {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  author: string;
}

const Home: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsQuery = query(
          collection(db, 'news'),
          orderBy('createdAt', 'desc'),
          limit(3)
        );
        const snapshot = await getDocs(newsQuery);
        const newsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as News[];
        setNews(newsData);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[70vh] bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Associação de Surf
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Vivendo a paixão pelas ondas e promovendo o esporte que amamos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/associado"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Seja um Associado
              </Link>
              <Link
                to="/eventos"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Ver Eventos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* História da Associação */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Fundada em 2010, a Associação de Surf nasceu do sonho de um grupo de 
                  surfistas apaixonados em promover o esporte e criar uma comunidade 
                  forte em torno da cultura do surf.
                </p>
                <p className="mb-4">
                  Ao longo dos anos, organizamos competições municipais, eventos sociais 
                  e programas de formação que já impactaram centenas de pessoas, desde 
                  iniciantes até atletas profissionais.
                </p>
                <p>
                  Nossa missão é não apenas promover o surf como esporte, mas também 
                  conscientizar sobre a preservação dos oceanos e fortalecer os laços 
                  da nossa comunidade.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Surfistas no pôr do sol"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-90">Anos de história</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notícias */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Últimas Notícias
            </h2>
            <Link 
              to="/noticias"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              Ver todas
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">Nenhuma notícia disponível no momento.</p>
                </div>
              ) : (
                news.map((article) => (
                  <article 
                    key={article.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <img 
                      src={article.imageUrl || 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=400'}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{article.date}</span>
                        <User className="h-4 w-4 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600">
                        <Link to={`/noticia/${article.id}`}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {article.summary}
                      </p>
                      <Link 
                        to={`/noticia/${article.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Leia mais
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte da Nossa Comunidade
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a centenas de surfistas e participe dos nossos eventos, 
            competições e atividades exclusivas para associados.
          </p>
          <Link
            to="/associado"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Tornar-se Associado
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;