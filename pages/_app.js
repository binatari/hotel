import '../styles/globals.css'
import Layout from '../Components/Layout'
import "swiper/css/bundle";
function MyApp({ Component, pageProps }) {

  return(
    <Layout>
     <Component {...pageProps} />
    </Layout>
     )
}

export default MyApp
