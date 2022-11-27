import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Provider } from 'react-redux'
import { Container, Header } from '../styles/pages/app'
import logoImg from '../assets/logo.svg'
import Image from "next/image"
import { store } from '../store/store'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header>
        <Image src={logoImg.src} alt="" width={100} height={200} />
      </Header>
      <Component {...pageProps} />
    </Provider>
  )
}