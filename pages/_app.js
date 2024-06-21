import GlobalStyle from "../src/theme/GlobalStyle";
import Head from 'next/head'

function MyApp({Component, pageProps }) {
    return (
        <>
        <Head>
            {/* <link rel="preconnect" href="https://fonts.googleapis.com"/> */}
            {/* <link rel="preconnect" href="https://fonts.gstatics.com" crossOrigin=""/> */}
            {/* <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;"/> */}
        </Head>
            <GlobalStyle/>
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp;