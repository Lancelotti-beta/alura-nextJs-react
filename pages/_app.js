// import App from 'next/app'
import GlobalStyle from "../src/thema/GlobalStyle";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;