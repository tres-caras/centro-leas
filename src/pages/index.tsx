import MainHeader from "@/components/MainHeader";
import ContactSection from "@/components/ContactSection";
import EquipoSection from "@/components/EquipoSection";
import QuienesSection from "@/components/QuienesSection";
import ReactFullpage from '@fullpage/react-fullpage';
import MainFooter from "@/components/MainFooter";
import Team from "@/components/Team";

const Home: React.FC = () => {
  const teamMembers = [
    { id: 1, imageSrc: '/lucia_c.png', name: 'Lic. Lucía Garibotti', role: 'Coordinadora' },
    { id: 2, imageSrc: '/vanesa_c.png', name: 'Lic. Vanesa Arana', role: 'Coordinadora' },
    { id: 3, imageSrc: '/cecilia.jpeg', name: 'Lic. Cecilia Borelli', role: 'Psicóloga' },
    { id: 4, imageSrc: '/miriam.jpeg', name: 'Lic. Miriam Fernandez', role: 'Psicóloga' },
    { id: 5, imageSrc: '/agustina.jpeg', name: 'Lic. Agustina Irigoyen', role: 'Psicóloga' },
    { id: 6, imageSrc: '/micaela.jpeg', name: 'Lic. Micaela Juarez', role: 'Psicóloga' },
    { id: 7, imageSrc: '/denise.jpeg', name: 'Lic. Denise Asana', role: 'Psicóloga' },
  ];
  return (
    <div className='parallax-container'>
      <ReactFullpage
        licenseKey={'gplv3-license'}
        credits={{enabled: true}}
        render={({ fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section header-section">
              <MainHeader />
            </div>
            <div className="section quienes-section">
              <QuienesSection />
            </div>
            <div className="section equipo-section">
              <EquipoSection />
            </div>
            <div className="section contact-section">
              <ContactSection />
            </div>
            <div className="section equipo-section">
              <Team members={teamMembers} />
            </div>
            <div className="section footer-section">
              <MainFooter />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Home;