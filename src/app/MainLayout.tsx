import Footer from '../components/Footer';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

const fadeInScale = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    width: '-webkit-fill-available;'
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1
    },
    width: '-webkit-fill-available;'
  }
};

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
        <motion.img
          className="image-on-banner"
          alt="Logo Leas"
          src="/website_logo_transparent_background.png"
          initial="hidden"
          animate="visible"
          variants={fadeInScale}
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
