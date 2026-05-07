import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const mensaje = (document.getElementById('mensaje') as HTMLTextAreaElement).value;
    const mailtoLink = `mailto:centroleas@gmail.com?subject=Consulta de ${encodeURIComponent(nombre)}&body=${encodeURIComponent(`De: ${nombre}\nEmail: ${email}\n\n${mensaje}`)}`;
    window.location.href = mailtoLink;
  };

  const steps = [
    {
      number: '01',
      title: 'Contacto inicial',
      description: 'Escribinos por mail o completá el formulario para coordinar tu primera consulta.',
    },
    {
      number: '02',
      title: 'Evaluación diagnóstica',
      description: 'Estudiamos tu caso para brindarte el tratamiento más adecuado con nuestros especialistas.',
    },
    {
      number: '03',
      title: 'Inicio del tratamiento',
      description: 'Comenzamos juntos el camino hacia tu bienestar con un plan personalizado.',
    },
  ];

  return (
    <section id="contacto" className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(160deg, #353f2e 0%, #1a2116 100%)',
    }}>
      <div className="blob absolute -top-40 right-0 w-[600px] h-[600px] opacity-5 bg-teal-400" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-teal-400 font-medium text-sm tracking-wider uppercase mb-3">
            Contacto
          </span>
          <h2 className="text-white mb-4">Comenzá tu camino</h2>
          <p className="text-sage-300 text-lg max-w-2xl mx-auto">
            Queremos acompañarte. Coordiná tu primera consulta en simples pasos.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className={`animate-on-scroll delay-${index + 1}`}>
              <div className="glass-card-dark p-6 h-full">
                <span className="text-teal-400 font-display text-3xl font-bold">{step.number}</span>
                <h3 className="text-white font-sans font-semibold text-lg mt-3 mb-2">{step.title}</h3>
                <p className="text-sage-300/80 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="glass-card-dark p-8 animate-on-scroll">
            <h3 className="text-white font-sans font-semibold text-xl mb-6">Envianos tu consulta</h3>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-sage-300 text-sm font-medium mb-2" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-sage-400/50 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sage-300 text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-sage-400/50 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sage-300 text-sm font-medium mb-2" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-sage-400/50 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
                  placeholder="Contanos cómo podemos ayudarte..."
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Enviar consulta
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6 animate-on-scroll delay-2">
            <div className="glass-card-dark p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-teal-400 text-lg" />
              </div>
              <div>
                <h3 className="text-white font-sans font-semibold mb-1">Email</h3>
                <a href="mailto:centroleas@gmail.com" className="text-teal-300 hover:text-teal-200 transition-colors">
                  centroleas@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card-dark p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-teal-400 text-lg" />
              </div>
              <div>
                <h3 className="text-white font-sans font-semibold mb-1">Ubicación</h3>
                <p className="text-sage-300/80">
                  Av. Colón #3073 Piso 2 B<br />
                  Mar del Plata, CP 7600<br />
                  Buenos Aires, Argentina
                </p>
              </div>
            </div>

            {/* Map placeholder with glass card */}
            <div className="glass-card-dark p-6">
              <div className="rounded-xl overflow-hidden">
                <iframe
                  title="Ubicación Centro Leas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.7!2d-57.5575!3d-38.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAwJzAwLjAiUyA1N8KwMzMnMjcuMCJX!5e0!3m2!1ses!2sar!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '0.75rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
