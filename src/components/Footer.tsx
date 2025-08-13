import React from 'react';
import { Waves, Instagram, MessageCircle, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Associação de Surf</span>
            </div>
            <p className="text-gray-300 mb-4">
              Promovendo o surf e a cultura marítima em nossa comunidade. 
              Junte-se a nós nas ondas!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/rankings" className="text-gray-300 hover:text-white transition-colors">Rankings</a></li>
              <li><a href="/eventos" className="text-gray-300 hover:text-white transition-colors">Eventos</a></li>
              <li><a href="/associado" className="text-gray-300 hover:text-white transition-colors">Associado</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://instagram.com/associacaosurf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
              <a 
                href="mailto:contato@associacaosurf.com.br"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Associação de Surf. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;