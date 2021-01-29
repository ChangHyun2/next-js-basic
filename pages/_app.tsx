import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  console.log('hello from _app');
  console.log(pageProps);

  return <Component {...pageProps} />;
}

export default MyApp;
