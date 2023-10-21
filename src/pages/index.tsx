import MainLayout from "@/app/MainLayout";
import ContactSection from "@/components/ContactSection";
import EquipoSection from "@/components/EquipoSection";
import QuienesSection from "@/components/QuienesSection";
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>{'Centro Leas - Psicología y Salud en Mar del Plata'}</title>
        <meta charSet="utf-8" />
        <meta http-equiv="content-language" content="es" />
        <link rel="canonical" href="https://centroleas.com.ar" />
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Somos un equipo de psicólogos y profesionales de la salud que busca desarrollar las potencialidades de los individuos y el aumento de los recursos personales." />
        <meta name="keywords" content="psicólogos en mar del plata, psicoterapia, consultorios, salud, ansiedad, terapia online, terapia de parejas, terapia familiar" />
        <meta name="author" content="Diego Ignacio Severini" />
        <meta name="robots" content="noarchive, index, follow" />
        <meta httpEquiv="Cache-Control" content="max-age=7200" />
        <meta property="og:title" content="Psicólogos y profesionales de la salud - consultorios | Leas" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://centroleas.com.ar/" />
        <meta property="og:image" content="https://www.centroleas.com.ar/FullColor_TransparentBg_1280x1024_72dpi.png" />
        <meta property="og:description" content="Somos un equipo de psicólogos y profesionales de la salud que busca desarrollar las potencialidades de los individuos y el aumento de los recursos personales." />
      </Head>
      <QuienesSection />
      <br />
      <EquipoSection />
      <br />
      <ContactSection />
    </MainLayout>
  );
};

export default Home;