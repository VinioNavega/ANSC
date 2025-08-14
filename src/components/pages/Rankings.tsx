'use client'

import React from 'react';
import { ExternalLink } from 'lucide-react';

const Rankings: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Rankings Municipais
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Acompanhe todos os rankings e resultados das competições municipais
          </p>
          <a 
            href="https://www.liveheats.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Visitar LiveHeats
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* Iframe do LiveHeats */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.liveheats.com.br"
              title="LiveHeats Rankings"
              className="w-full h-full border-0"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>

        {/* Informações adicionais */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Rankings Atualizados
            </h3>
            <p className="text-gray-600">
              Resultados em tempo real de todas as competições municipais
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Histórico Completo
            </h3>
            <p className="text-gray-600">
              Acesso a todos os rankings dos anos anteriores
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Estatísticas Detalhadas
            </h3>
            <p className="text-gray-600">
              Análises completas de performance dos atletas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rankings;