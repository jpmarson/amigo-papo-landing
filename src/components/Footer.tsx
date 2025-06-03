
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Papo Amigo
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Sua companhia virtual 24/7. Antônio e Luiza estão sempre prontos para uma boa conversa no WhatsApp.
            </p>
            <p className="text-gray-400">
              © 2024 Papo Amigo. Todos os direitos reservados.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/termos" className="text-gray-300 hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacidade" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="/termos" className="text-gray-300 hover:text-white transition-colors">Termos de Serviço</a></li>
              <li><a href="/cookies" className="text-gray-300 hover:text-white transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-3 text-yellow-400">⚠️ Aviso Importante</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              O Papo Amigo é um serviço de entretenimento e companhia virtual. Antônio e Luiza são assistentes de inteligência artificial 
              e não substituem profissionais da saúde mental como psicólogos, psiquiatras ou terapeutas. Para questões de saúde mental 
              sérias, sempre procure ajuda profissional qualificada. Em caso de emergência, ligue 188 (CVV) ou 192 (SAMU).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
