import { AuthProvider } from '../providers/authprovider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
