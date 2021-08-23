import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Footer from '../components/footer';

export default function Dodois({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
};