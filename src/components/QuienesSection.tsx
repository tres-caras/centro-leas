import React from 'react';

const QuienesSection: React.FC = () => {
  const values = [
    {
      icon: '🌿',
      title: 'Mirada integral',
      description: 'Nos orientamos hacia una comprensión completa del ser humano en todas sus dimensiones.',
    },
    {
      icon: '🤝',
      title: 'Trabajo interdisciplinario',
      description: 'Colaboramos desde múltiples perspectivas para brindarte la mejor atención posible.',
    },
    {
      icon: '📚',
      title: 'Formación continua',
      description: 'Nuestro equipo se mantiene en permanente actualización y perfeccionamiento profesional.',
    },
  ];

  return (
    <section id="quienes" className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 to-cream-100" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-teal-600 font-medium text-sm tracking-wider uppercase mb-3">
            Sobre nosotros
          </span>
          <h2 className="text-sage-900 mb-6">¿Quiénes somos?</h2>
          <p className="text-sage-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Somos un equipo de psicólogos y profesionales de la salud dedicado a la atención
            e investigación que busca desarrollar las potencialidades de los individuos y el
            aumento de los recursos personales para mejorar su calidad de vida.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`glass-card p-8 text-center animate-on-scroll delay-${index + 1}`}
            >
              <div className="text-4xl mb-5">{value.icon}</div>
              <h3 className="text-sage-900 mb-3">{value.title}</h3>
              <p className="text-sage-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission statement */}
        <div className="mt-16 animate-on-scroll">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-sage-400 to-teal-400" />
            <p className="text-sage-700 text-lg md:text-xl leading-relaxed font-light italic max-w-3xl mx-auto">
              &ldquo;Para nosotros es importante el perfeccionamiento continuo, el trabajo
              interdisciplinario y la calidad humana de quienes trabajamos en Leas.
              Nuestro equipo se orienta hacia una mirada integral del ser humano.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSection;
