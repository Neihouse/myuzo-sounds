import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavigationBar from '../components/NavigationBar';
import FooterSection from '../components/FooterSection';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <main>
        <Component {...pageProps} />
      </main>
      <FooterSection />
    </>
  );
}

export default MyApp;
