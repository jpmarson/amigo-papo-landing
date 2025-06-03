
import React from 'react';

const Termos = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-600 mb-4">
                Ao utilizar o serviço Papo Amigo, você concorda com estes Termos de Uso. 
                Se você não concorda com qualquer parte destes termos, não deve usar nosso serviço.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descrição do Serviço</h2>
              <p className="text-gray-600 mb-4">
                O Papo Amigo é um serviço de conversação via WhatsApp que utiliza assistentes virtuais baseados em 
                inteligência artificial (Antônio e Luiza) para proporcionar companhia virtual e conversas amigáveis.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>IMPORTANTE:</strong> Nossos assistentes virtuais não são profissionais da saúde mental e não 
                substituem psicólogos, psiquiatras ou outros profissionais de saúde.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Uso Gratuito e Limitações</h2>
              <p className="text-gray-600 mb-4">
                O serviço oferece até 30 mensagens gratuitas por dia por assistente virtual. 
                O contador é reiniciado a cada 24 horas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Conduta do Usuário</h2>
              <p className="text-gray-600 mb-4">Você concorda em não usar o serviço para:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Enviar conteúdo ofensivo, discriminatório ou inadequado</li>
                <li>Tentar obter aconselhamento médico ou psicológico profissional</li>
                <li>Compartilhar informações pessoais sensíveis</li>
                <li>Usar linguagem abusiva ou ameaçadora</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitação de Responsabilidade</h2>
              <p className="text-gray-600 mb-4">
                O Papo Amigo é fornecido "como está" para fins de entretenimento e companhia virtual. 
                Não nos responsabilizamos por decisões tomadas com base nas conversas com nossos assistentes virtuais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Emergências</h2>
              <p className="text-gray-600 mb-4">
                Em caso de emergência médica ou psicológica, procure ajuda profissional imediatamente:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>CVV (Centro de Valorização da Vida): 188</li>
                <li>SAMU: 192</li>
                <li>Bombeiros: 193</li>
                <li>Polícia: 190</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Alterações nos Termos</h2>
              <p className="text-gray-600 mb-4">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                As alterações serão publicadas nesta página.
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

export default Termos;
