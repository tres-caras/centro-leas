import React from 'react';

const EquipoSection: React.FC = () => {
  const features = [
    {
      title: 'Ateneos clínicos',
      description: 'Intercambio constante de experiencias y casos para enriquecer la práctica profesional.',
    },
    {
      title: 'Seguimiento personalizado',
      description: 'Cada proyecto se acompaña de forma individual, adaptando el tratamiento a tus necesidades.',
    },
    {
      title: 'Crecimiento profesional',
      description: 'Cada profesional del staff desarrolla sus proyectos y propuestas dentro de la institución.',
    },
    {
      title: 'Actualización permanente',
      description: 'Un equipo de salud comprometido con su quehacer profesional, siempre a la vanguardia.',
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(160deg, #0f524c 0%, #087e71 50%, #0c645b 100%)',
    }}>
      {/* Decorative elements */}
      <div className="blob absolute -top-40 -right-40 w-[500px] h-[500px] opacity-10 bg-teal-300" />
      <div className="blob absolute -bottom-32 -left-32 w-80 h-80 opacity-10 bg-sage-300" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="animate-on-scroll">
            <span className="inline-block text-teal-300 font-medium text-sm tracking-wider uppercase mb-3">
              Nuestra metodología
            </span>
            <h2 className="text-white mb-6">Equipo Leas</h2>
            <p className="text-teal-100/90 text-lg leading-relaxed mb-8">
              El equipo interdisciplinario Leas se mantiene en permanente intercambio
              a través de ateneos y reuniones donde se comparten experiencias, realizando
              el seguimiento de cada proyecto de forma personalizada.
            </p>
            <a href="#contacto" className="btn-primary !bg-white/15 !backdrop-blur-sm border border-white/20 hover:!bg-white/25">
              Conocé nuestro equipo
            </a>
          </div>

          {/* Right - Feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`glass-card-dark p-6 animate-on-scroll delay-${index + 1}`}
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-teal-400" />
                </div>
                <h3 className="text-white text-base font-sans font-semibold mb-2">{feature.title}</h3>
                <p className="text-teal-100/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipoSection;
