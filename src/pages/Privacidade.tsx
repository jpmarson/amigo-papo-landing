
import React from 'react';

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informações que Coletamos</h2>
              <p className="text-gray-600 mb-4">
                Coletamos apenas as informações necessárias para fornecer nosso serviço:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Número de telefone do WhatsApp para comunicação</li>
                <li>Mensagens trocadas com nossos assistentes virtuais</li>
                <li>Dados de uso básicos (frequência de uso, horários)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Como Usamos suas Informações</h2>
              <p className="text-gray-600 mb-4">Utilizamos suas informações para:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Fornecer respostas dos assistentes virtuais</li>
                <li>Melhorar a qualidade das conversas</li>
                <li>Monitorar o uso para manter o limite gratuito</li>
                <li>Garantir a segurança e prevenir abusos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Compartilhamento de Informações</h2>
              <p className="text-gray-600 mb-4">
                <strong>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros</strong> 
                para fins comerciais. Suas conversas permanecem privadas.
              </p>
              <p className="text-gray-600 mb-4">
                Podemos compartilhar informações apenas quando:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Exigido por lei ou autoridades competentes</li>
                <li>Necessário para proteger nossos direitos legais</li>
                <li>Com seu consentimento explícito</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Segurança dos Dados</h2>
              <p className="text-gray-600 mb-4">
                Implementamos medidas de segurança técnicas e administrativas para proteger suas informações 
                contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Retenção de Dados</h2>
              <p className="text-gray-600 mb-4">
                Mantemos suas conversas pelo tempo necessário para fornecer o serviço e melhorar 
                a experiência do usuário. Você pode solicitar a exclusão de seus dados a qualquer momento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seus Direitos</h2>
              <p className="text-gray-600 mb-4">Você tem o direito de:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Retirar seu consentimento a qualquer momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies e Tecnologias Similares</h2>
              <p className="text-gray-600 mb-4">
                Nosso site pode usar cookies para melhorar sua experiência de navegação. 
                Você pode desabilitar cookies nas configurações do seu navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Alterações nesta Política</h2>
              <p className="text-gray-600 mb-4">
                Podemos atualizar esta Política de Privacidade periodicamente. 
                Notificaremos sobre mudanças significativas através do nosso site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contato</h2>
              <p className="text-gray-600 mb-4">
                Para dúvidas sobre esta Política de Privacidade, entre em contato:
              </p>
              <p className="text-gray-600">
                <strong>E-mail:</strong> privacidade@papoamigo.com.br
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              ← Voltar ao Papo Amigo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacidade;
