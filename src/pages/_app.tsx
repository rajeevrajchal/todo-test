import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { AppDataProvider } from '../context/useAppData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppDataProvider>
      <ToastContainer />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppDataProvider>
  );
}

export default MyApp;
