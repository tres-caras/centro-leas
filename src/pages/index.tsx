import MainHeader from "@/components/MainHeader";
import ContactSection from "@/components/ContactSection";
import EquipoSection from "@/components/EquipoSection";
import QuienesSection from "@/components/QuienesSection";
import ReactFullpage from '@fullpage/react-fullpage';
import MainFooter from "@/components/MainFooter";

const Home: React.FC = () => {
  return (
    <div className='parallax-container'>
      <ReactFullpage
        credits={{
          enabled: false
        }}
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