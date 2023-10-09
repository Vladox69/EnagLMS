import { MyProvider } from '@/context/my';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  )
}
