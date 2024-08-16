import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import type { AppProps } from 'next/app'
import {Roboto} from '@next/font/google'
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';

const roboto=Roboto({
  subsets:['latin'],
  weight:['400','700']
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  const noLayoutRoutes = ['/login', '/'];
  const useLayout = !noLayoutRoutes.includes(router.pathname);

  return useLayout ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
}
