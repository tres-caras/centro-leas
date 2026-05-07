import { AppProps } from 'next/app';
import '../app/globals.css';
import Script from 'next/script';
import Head from 'next/head';

const SITE_URL = 'https://www.centroleas.com.ar';
const OG_IMAGE = `${SITE_URL}/FullColor_TransparentBg_1280x1024_72dpi.png`;
const DESCRIPTION =
  'Somos un equipo de psicólogos y profesionales de la salud que busca desarrollar las potencialidades de los individuos y el aumento de los recursos personales.';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Centro Leas',
  description: DESCRIPTION,
  url: `${SITE_URL}/`,
  logo: OG_IMAGE,
  image: OG_IMAGE,
  email: 'centroleas@gmail.com',
  // TODO: agregar telephone (formato internacional, ej: +54-223-...)
  // telephone: '+54-223-XXX-XXXX',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Colón 3073, Piso 2 B',
    addressLocality: 'Mar del Plata',
    addressRegion: 'Buenos Aires',
    postalCode: '7600',
    addressCountry: 'AR',
  },
  areaServed: {
    '@type': 'City',
    name: 'Mar del Plata',
  },
  medicalSpecialty: 'Psychiatric',
  // TODO: agregar openingHoursSpecification con horarios reales del consultorio
  // openingHoursSpecification: [
  //   {
  //     '@type': 'OpeningHoursSpecification',
  //     dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  //     opens: '09:00',
  //     closes: '20:00',
  //   },
  // ],
  sameAs: [
    'https://www.instagram.com/centroleas',
    'https://www.facebook.com/Centro-Leas-101446614992029',
  ],
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-ED5K93QDDX" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ED5K93QDDX');
        `}
      </Script>
      <Head>
        <title>{'Centro Leas - Psicología y Salud en Mar del Plata'}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="es" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="psicólogos en mar del plata, psicoterapia, consultorios, salud, ansiedad, terapia online, terapia de parejas, terapia familiar"
        />
        <meta name="author" content="Centro Leas" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Cache-Control" content="max-age=7200" />

        {/* Open Graph */}
        <meta property="og:title" content="Centro Leas - Psicología y Salud en Mar del Plata" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Logo Centro Leas" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="Centro Leas" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Centro Leas - Psicología y Salud en Mar del Plata" />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured Data: MedicalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
