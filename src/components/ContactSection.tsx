import React from 'react';

const ContactSection = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const nombreElement = document.getElementById('nombre') as HTMLInputElement;
    const nombre = nombreElement.value;
    const emailElement = document.getElementById('nombre') as HTMLInputElement;
    const email = emailElement.value;
    const mensajeElement = document.getElementById('nombre') as HTMLInputElement;
    const mensaje = emailElement.value;
  
    const mailtoLink = `mailto:centroleas@gmail.com?subject=Consulta de ${nombre}&body=${email}%0D%0A%0D%0A${mensaje}`;
    window.location.href = mailtoLink;  // Abre el cliente de correo predeterminado
  }
  return (
    <div className="bg-pictonBlue-950 text-pictonBlue-50 py-12 px-8">
      {/* Cómo coordinar un turno */}
      <div className="mb-10">
        <h2 className="text-2xl mb-4">Cómo coordinar un turno</h2>
        <p>
          <strong>Contacto inicial:</strong> Envíanos un mail a 
          <a href="mailto:centroleas@gmail.com" className="text-pictonBlue-300 underline ml-1"> centroleas@gmail.com</a>
          <a href="#contact-form" className="text-pictonBlue-300 underline ml-1"> o completá el formulario</a>
        </p>
        <p className="mt-2">
          <strong>Evaluación diagnóstica:</strong> Estudiaremos tu caso para brindarte el tratamiento más adecuado con nuestros especialistas.
        </p>
        <p className="mt-2">
          <strong>Comienzo de tratamiento</strong>
        </p>
      </div>

      {/* Contacto */}
      <div className="mb-10">
        <h2 className="text-2xl mb-4">Contacto</h2>
        <p>Queremos que puedas comunicarte con nosotros para cualquier consulta o información que podamos brindarte.</p>
        <form id="contact-form" className="mt-4" onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" className="w-full px-4 py-2 bg-pictonBlue-400 text-pictonBlue-950" />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 bg-pictonBlue-400 text-pictonBlue-950" />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" className="w-full px-4 py-2 bg-pictonBlue-400 text-pictonBlue-950" rows={5}></textarea>
          </div>
          <div className="flex gap-4">
            <button type="submit" className="py-2 px-4 bg-pictonBlue-300 text-pictonBlue-950">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
