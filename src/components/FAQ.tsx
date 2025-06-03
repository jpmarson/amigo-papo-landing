
import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "O Papo Amigo é realmente gratuito?",
      answer: "Sim! Você pode trocar até 30 mensagens por dia completamente gratuito com cada um dos nossos assistentes."
    },
    {
      question: "Antônio e Luiza são pessoas reais?",
      answer: "Não, eles são assistentes virtuais baseados em inteligência artificial avançada, criados para oferecer conversas naturais e empáticas."
    },
    {
      question: "Posso usar o Papo Amigo para questões de saúde mental?",
      answer: "Nossos assistentes podem oferecer uma conversa amigável, mas não substituem profissionais da saúde mental. Para questões sérias, sempre procure um psicólogo ou psiquiatra."
    },
    {
      question: "Como funciona o limite de 30 mensagens?",
      answer: "O contador reinicia a cada 24 horas. Você pode trocar 30 mensagens com Antônio e outras 30 com Luiza no mesmo dia."
    },
    {
      question: "Minhas conversas são privadas?",
      answer: "Sim, levamos sua privacidade muito a sério. Todas as conversas são protegidas e não compartilhamos suas informações pessoais."
    },
    {
      question: "Posso conversar sobre qualquer assunto?",
      answer: "Nossos assistentes estão preparados para conversas respeitosas sobre diversos temas do dia a dia, hobbies, sentimentos e dúvidas gerais."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tudo que você precisa saber sobre o Papo Amigo
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
