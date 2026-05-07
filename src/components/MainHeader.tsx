import React from 'react';

const MainHeader: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f6f7f4 0%, #effefa 40%, #fdf8f6 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div
        className="blob absolute -top-20 -right-20 w-96 h-96 opacity-20"
        style={{ background: 'linear-gradient(135deg, #91fee6, #b5c0a4)' }}
      />
      <div
        className="blob absolute -bottom-32 -left-32 w-[500px] h-[500px] opacity-15"
        style={{
          background: 'linear-gradient(135deg, #c8fff2, #d4dac9)',
          animationDelay: '4s',
        }}
      />
      <div
        className="blob absolute top-1/3 right-1/4 w-64 h-64 opacity-10"
        style={{
          background: 'linear-gradient(135deg, #52f6d7, #96a67e)',
          animationDelay: '2s',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8" style={{ animation: 'fadeInScale 1s ease-out' }}>
          <picture>
            <source media="(min-width: 736px)" srcSet="/FullColor_TransparentBg_1280x1024_72dpi.png" />
            <source media="(max-width: 736px)" srcSet="/website_logo_transparent_background.png" />
            <img
              className="mx-auto w-auto"
              alt="Logo Leas"
              src="/website_logo_transparent_background.png"
              style={{ maxHeight: '280px' }}
            />
          </picture>
        </div>

        <h1
          className="font-display text-sage-900 mb-4"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}
        >
          Psicología y Salud
        </h1>

        <p
          className="text-lg md:text-xl text-sage-600 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.5s both' }}
        >
          Un equipo de profesionales comprometidos con tu bienestar integral en Mar del Plata
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.7s both' }}
        >
          <a href="#contacto" className="btn-primary">
            Agendar una consulta
          </a>
          <a href="#quienes" className="btn-secondary">
            Conocenos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ animation: 'float 3s ease-in-out infinite' }}>
        <div className="w-7 h-12 rounded-full border-2 border-sage-300 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-sage-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
