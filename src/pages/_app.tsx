import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { ReactElement, ReactNode } from 'react'

import store from '@/frontend/redux/store'
import { NextUIProvider } from '@nextui-org/react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Provider store={store}>
      <CookiesProvider>
        <NextUIProvider>
          <ToastContainer
            autoClose={3000}
            position="bottom-center"
            style={{ zIndex: 1000000 }}
            theme="light"
          />
          {getLayout(<Component {...pageProps} />)}
        </NextUIProvider>
      </CookiesProvider>
    </Provider>
  )
}
