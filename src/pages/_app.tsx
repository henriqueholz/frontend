import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Provider } from 'react-redux'
import { Header } from '../styles/pages/app'
import { store } from '../store/store'
import { HeaderText, HomeContainer } from '../styles/pages/home'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header>
        <HeaderText>Frontend Challenge</HeaderText>
      </Header>
      <HomeContainer>
        <Component {...pageProps} />
      </HomeContainer>
    </Provider>
  )
}