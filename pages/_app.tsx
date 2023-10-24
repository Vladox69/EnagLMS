import { MyProvider } from '@/context/my';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import type { AppProps } from 'next/app'
import { TeacherProvider } from '../context/teacher/TeacherProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <TeacherProvider>
        <Component {...pageProps} />
      </TeacherProvider>
    </MyProvider>
  )
}
