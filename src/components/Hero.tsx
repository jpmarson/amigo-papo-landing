
import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main content */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Papo Amigo
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
            Sua companhia virtual 24/7 no WhatsApp
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Converse com <strong>Antônio</strong> e <strong>Luiza</strong>, nossos assistentes virtuais baseados em IA. 
            Uma boa conversa está sempre a um clique de distância!
          </p>
        </div>

        {/* Profiles */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">A</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Antônio</h3>
            <p className="text-gray-600 mb-4">Companheiro virtual atencioso e empático, sempre pronto para uma conversa amigável</p>
            <a 
              href="https://wa.me/5511999999999?text=Oi%20Antônio!" 
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300"
            >
              <MessageCircle size={20} />
              Conversar no WhatsApp
            </a>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">L</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Luiza</h3>
            <p className="text-gray-600 mb-4">Assistente virtual carinhosa e compreensiva, ideal para momentos de reflexão</p>
            <a 
              href="https://wa.me/5511888888888?text=Oi%20Luiza!" 
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300"
            >
              <MessageCircle size={20} />
              Conversar no WhatsApp
            </a>
          </div>
        </div>

        {/* Free trial highlight */}
        <div className="bg-yellow-100 border-2 border-yellow-300 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-yellow-800 mb-2">🎉 Completamente Gratuito!</h3>
          <p className="text-yellow-700 text-lg">
            <strong>30 mensagens por dia</strong> sem custo algum. Comece agora mesmo!
          </p>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToFeatures}
          className="animate-bounce bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowDown className="text-gray-700" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
