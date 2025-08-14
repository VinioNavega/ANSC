'use client'

import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Login from '../Login';
import Register from '../Register';
import MemberProfile from '../MemberProfile';
import { UserCircle, Star, Shield } from 'lucide-react';

const Associado: React.FC = () => {
  const { currentUser } = useAuth();
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  if (currentUser) {
    return <MemberProfile />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits Section */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Seja um Associado
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Faça parte da maior comunidade de surf da região e aproveite benefícios exclusivos.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <UserCircle className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Acesso aos Eventos</h3>
                  <p className="text-gray-600">Participe de todos os eventos, competições e atividades da associação.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Descontos Especiais</h3>
                  <p className="text-gray-600">Descontos em lojas parceiras, equipamentos e serviços relacionados ao surf.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Seguro de Acidentes</h3>
                  <p className="text-gray-600">Cobertura de seguro para acidentes durante a prática do surf nos nossos eventos.</p>
                </div>
              </div>
            </div>

            {/* Plans */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Planos de Assinatura</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mensal</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    R$ 29,90<span className="text-sm text-gray-500 font-normal">/mês</span>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Acesso a todos os eventos</li>
                    <li>• Descontos em lojas parceiras</li>
                    <li>• Suporte prioritário</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Anual</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    R$ 299,90<span className="text-sm text-gray-500 font-normal">/ano</span>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Todos os benefícios do mensal</li>
                    <li>• 2 meses grátis</li>
                    <li>• Seguro de acidentes</li>
                    <li>• Kit exclusivo de boas-vindas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Auth Forms */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-center mb-8">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setAuthMode('login')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    authMode === 'login'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Entrar
                </button>
                <button
                  onClick={() => setAuthMode('register')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    authMode === 'register'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Cadastrar
                </button>
              </div>
            </div>

            {authMode === 'login' ? (
              <Login onSwitchMode={() => setAuthMode('register')} />
            ) : (
              <Register onSwitchMode={() => setAuthMode('login')} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Associado;