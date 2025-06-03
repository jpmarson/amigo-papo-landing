
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Escolha seu Companheiro",
      description: "Clique no botão do Antônio ou da Luiza para iniciar uma conversa",
      color: "bg-green-500"
    },
    {
      number: "2", 
      title: "Abra o WhatsApp",
      description: "Você será redirecionado automaticamente para o WhatsApp",
      color: "bg-blue-500"
    },
    {
      number: "3",
      title: "Comece a Conversar",
      description: "Digite sua mensagem e receba uma resposta carinhosa imediatamente",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Em apenas 3 passos simples você já estará conversando com seus novos amigos virtuais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className={`${step.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pronto para começar?</h3>
            <p className="text-gray-600 mb-6">Escolha com quem você gostaria de conversar primeiro:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5511999999999?text=Oi%20Antônio!"
                className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Conversar com Antônio
              </a>
              <a 
                href="https://wa.me/5511888888888?text=Oi%20Luiza!"
                className="bg-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Conversar com Luiza
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
