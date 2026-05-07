import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import MainHeader from '@/components/MainHeader';
import QuienesSection from '@/components/QuienesSection';
import EquipoSection from '@/components/EquipoSection';
import Team from '@/components/Team';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  const teamMembers = [
    { id: 1, imageSrc: '/lucia_c.png', name: 'Lic. Lucía Garibotti', role: 'Coordinadora' },
    { id: 2, imageSrc: '/vanesa_c.png', name: 'Lic. Vanesa Arana', role: 'Coordinadora' },
    { id: 3, imageSrc: '/cecilia.jpeg', name: 'Lic. Cecilia Borellini', role: 'Psicóloga' },
    { id: 4, imageSrc: '/miriam.jpeg', name: 'Lic. Miriam Fernandez', role: 'Psicóloga' },
    { id: 5, imageSrc: '/agustina.jpeg', name: 'Lic. Agustina Irigoyen', role: 'Psicóloga' },
    { id: 6, imageSrc: '/natalia.jpeg', name: 'Lic. Natalia Silva', role: 'Psicóloga' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <MainHeader />
        <QuienesSection />
        <EquipoSection />
        <Team members={teamMembers} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
