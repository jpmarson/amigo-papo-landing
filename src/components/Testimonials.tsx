
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "34 anos",
      text: "O Antônio me ajuda muito quando preciso desabafar depois do trabalho. É como ter um amigo sempre disponível!",
      rating: 5
    },
    {
      name: "João Santos", 
      age: "28 anos",
      text: "A Luiza é incrível! Nossas conversas sobre filmes e livros sempre me animam. Super recomendo!",
      rating: 5
    },
    {
      name: "Ana Costa",
      age: "42 anos", 
      text: "Descobri o Papo Amigo em um momento difícil. Ter alguém para conversar a qualquer hora fez toda a diferença.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que nossos usuários dizem
          </h2>
          <p className="text-xl text-gray-600">
            Milhares de pessoas já descobriram a alegria de ter um papo amigo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 text-lg mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
