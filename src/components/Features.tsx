
import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MessageCircle className="text-green-600" size={48} />,
      title: "Disponível 24/7",
      description: "Antônio e Luiza estão sempre prontos para conversar, independente do horário ou dia da semana."
    },
    {
      icon: <Phone className="text-blue-600" size={48} />,
      title: "Direto no WhatsApp",
      description: "Use o aplicativo que você já conhece. Sem downloads ou cadastros complicados."
    },
    {
      icon: <Mail className="text-purple-600" size={48} />,
      title: "Conversas Naturais",
      description: "Tecnologia avançada de IA para conversas fluidas e envolventes, como se fosse com um amigo real."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher o <span className="text-green-600">Papo Amigo</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Criamos uma experiência única de conversação que combina tecnologia avançada com o calor humano
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Important disclaimer */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-amber-800 mb-4 text-center">⚠️ Importante</h3>
          <p className="text-amber-700 text-lg text-center mb-4">
            <strong>Antônio e Luiza são assistentes virtuais baseados em inteligência artificial.</strong>
          </p>
          <p className="text-amber-600 text-center">
            Eles não são profissionais da saúde mental como psicólogos ou psiquiatras. 
            Para questões de saúde mental sérias, sempre procure um profissional qualificado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
