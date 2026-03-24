import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#quienes', label: 'Nosotros' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/website_logo_transparent_background.png"
            alt="Centro Leas"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className={`font-display font-semibold text-lg transition-colors duration-300 ${
            scrolled ? 'text-sage-900' : 'text-sage-900'
          }`}>
            Centro Leas
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-sage-700 hover:text-teal-600' : 'text-sage-700 hover:text-teal-600'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary text-sm !py-2.5 !px-5">
            Agendar turno
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-sage-700 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl px-6 py-4 space-y-3 border-t border-sage-100">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sage-700 hover:text-teal-600 font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn-primary text-sm !py-2.5 w-full justify-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Agendar turno
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
