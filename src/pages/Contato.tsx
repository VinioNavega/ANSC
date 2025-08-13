import React from 'react';
import { MessageCircle, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Contato: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos sempre prontos para ajudar. Entre em contato conosco através dos canais abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Nossos Canais</h2>
            
            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600">Resposta rápida para dúvidas gerais</p>
                  <p className="text-sm text-gray-500">(11) 99999-9999</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/associacaosurf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:from-purple-600 group-hover:to-pink-600 transition-colors">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Instagram</h3>
                  <p className="text-gray-600">Acompanhe nossas atividades e eventos</p>
                  <p className="text-sm text-gray-500">@associacaosurf</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contato@associacaosurf.com.br"
                className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">Para assuntos mais formais</p>
                  <p className="text-sm text-gray-500">contato@associacaosurf.com.br</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-gray-500 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Endereço</h3>
                  <p className="text-gray-600">Rua das Ondas, 123 - Praia Central</p>
                  <p className="text-sm text-gray-500">CEP: 11000-000</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Telefone</h3>
                  <p className="text-gray-600">Para ligações convencionais</p>
                  <p className="text-sm text-gray-500">(11) 3333-3333</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form and Hours */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="h-6 w-6 mr-2" />
                Horário de Atendimento
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Segunda - Sexta</span>
                  <span className="font-medium">8h - 18h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Sábado</span>
                  <span className="font-medium">8h - 14h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Domingo</span>
                  <span className="font-medium">9h - 12h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Feriados</span>
                  <span className="font-medium text-red-600">Fechado</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="membership">Dúvidas sobre associação</option>
                    <option value="events">Informações sobre eventos</option>
                    <option value="general">Dúvidas gerais</option>
                    <option value="support">Suporte técnico</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Escreva sua mensagem..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Siga-nos nas Redes Sociais</h2>
              <p className="mb-6 opacity-90">
                Fique por dentro de todas as novidades, eventos e dicas sobre surf!
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://instagram.com/associacaosurf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-colors"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;