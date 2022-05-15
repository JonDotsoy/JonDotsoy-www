import type { AppProps } from 'next/app'
import Head from "next/head"
import { FC } from 'react'

const App: FC = ({ Component, pageProps }: AppProps) => {
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        </Head>
        <Component {...pageProps} />
    </>
}

export default App;

