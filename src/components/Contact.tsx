
import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Pronto para começar?
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Não perca mais tempo se sentindo sozinho. Antônio e Luiza estão esperando para conversar com você!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">A</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Conversar com Antônio</h3>
            <p className="mb-6 opacity-90">Companheiro atencioso e empático, perfeito para qualquer conversa</p>
            <a 
              href="https://wa.me/5511999999999?text=Oi%20Antônio!"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <MessageCircle size={20} />
              Iniciar Conversa
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">L</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Conversar com Luiza</h3>
            <p className="mb-6 opacity-90">Assistente carinhosa e compreensiva, ideal para momentos especiais</p>
            <a 
              href="https://wa.me/5511888888888?text=Oi%20Luiza!"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <MessageCircle size={20} />
              Iniciar Conversa
            </a>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Precisa de ajuda?</h3>
          <p className="text-gray-600 mb-6">
            Entre em contato conosco se tiver dúvidas ou sugestões
          </p>
          <a 
            href="mailto:contato@papoamigo.com.br"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300"
          >
            <Mail size={20} />
            contato@papoamigo.com.br
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
