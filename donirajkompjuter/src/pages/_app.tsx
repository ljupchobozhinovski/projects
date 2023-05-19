import Script from 'next/script'
import Head from 'next/head'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import "leaflet/dist/leaflet.css";
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <style>{dom.css()}</style>
      </Head>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
      {asPath !== '/' && <Navbar />}
      <ScrollToTop />
      <Component {...pageProps} />
      <Footer />
    </>)
}
