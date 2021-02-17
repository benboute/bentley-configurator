import '../styles/general/reset.scss'
import '../styles/general/styles.scss'
import {AppWrapper} from '../context/State'; 

export default function MyApp({ Component, pageProps }) {
  	return (
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
	)
}