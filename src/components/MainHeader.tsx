// MainHeader.tsx
import React from 'react';
import Header from '@/components/Header';

const MainHeader: React.FC = () => {
  return (
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
    </div>
  );
};

export default MainHeader;
