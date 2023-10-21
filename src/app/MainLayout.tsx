import Footer from '../components/Footer';
import React, { ReactNode } from 'react';
import Header from '@/components/Header';


type MainLayoutProps = {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='parallax-container'>
      <div className="main-container">
        <picture>
          <source media="(min-width: 736px)" srcSet="/FullColor_TransparentBg_1280x1024_72dpi.png" />
          <source media="(max-width: 736px)" srcSet="/website_logo_transparent_background.png" />
          <img
            className="image-on-banner fadeInScale"
            alt="Logo Leas"
            src="/website_logo_transparent_background.png"
          />
        </picture>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
