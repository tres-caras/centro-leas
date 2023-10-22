import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white p-6">
      <div className="flex flex-col flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg mb-2 font-semibold text-center">Síguenos</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/Centro-Leas-101446614992029" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.instagram.com/centroleas" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="mailto:centroleas@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="flex text-center pt-4">
          <address>
            <p className="font-medium">Av. Colón #3073 Piso 2 B</p>
            <p>Mar del Plata, CP 7600</p>
            <p>Buenos Aires, Argentina</p>
          </address>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
