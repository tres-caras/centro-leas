import { AppProps } from 'next/app';
import '../app/globals.css';
import Script from 'next/script';

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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;