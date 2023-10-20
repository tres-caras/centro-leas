import MainLayout from "@/app/MainLayout";
import ContactSection from "@/components/ContactSection";
import EquipoSection from "@/components/EquipoSection";
import QuienesSection from "@/components/QuienesSection";
import Head from 'next/head';
// import styled from 'styled-components';

// const StyledH1 = styled.h1`
//   font-size: 3rem; // Un tamaño más grande para hacerlo llamativo.
//   color: #e4cfb6; // Un color claro que contraste con el fondo.
//   text-align: center;
//   margin-bottom: 1rem; // Espaciado para separarlo del párrafo.
//   text-shadow: 2px 6px 4px #283455, 1px 0px 0px #00aff0, 0 0 5px #272c45;
//   @media (max-width: 768px) {
//     font-size: 2.5rem; // Ajuste para pantallas más pequeñas.
//   }
// `;

// const StyledP = styled.p`
//   font-size: 1.5rem;
//   color: #f5e3c8; // Un color un poco diferente al h1 para dar contraste.
//   text-align: center;
//   margin-top: 0; // Quitar el margen superior para que esté cerca del h1.
// `;

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>{'Centro Leas - Psicología y Salud en Mar del Plata'}</title>
        <meta name="description" content={'Somos un equipo de psicólogos y profesionales de la salud dedicado a la atención e investigación.'} />
      </Head>
      {/* <StyledP>Mar del Plata</StyledP> */}
      <QuienesSection />
      <br />
      <EquipoSection />
      <br />
      <ContactSection />
    </MainLayout>
  );
};

export default Home;