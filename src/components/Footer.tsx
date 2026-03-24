import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <FaFacebookF size={18} />,
      href: 'https://www.facebook.com/Centro-Leas-101446614992029',
      label: 'Facebook',
    },
    {
      icon: <FaInstagram size={18} />,
      href: 'https://www.instagram.com/centroleas',
      label: 'Instagram',
    },
    {
      icon: <FaEnvelope size={18} />,
      href: 'mailto:centroleas@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-sage-950 text-sage-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-display text-white text-xl font-semibold">Centro Leas</span>
            <p className="text-sage-400 text-sm mt-1">Psicología y Salud</p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sage-300 hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Address */}
          <address className="not-italic text-center md:text-right text-sm">
            <p>Av. Colón #3073 Piso 2 B</p>
            <p>Mar del Plata, Buenos Aires</p>
          </address>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sage-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Centro Leas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
