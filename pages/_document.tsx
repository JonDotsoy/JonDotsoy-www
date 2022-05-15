import { Html, Head, Main, NextScript } from 'next/document'
import schema from '../public/schema.json';
import { FC } from 'react'


const Document: FC = () => <Html manifest='app.appcache'>
    <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik|Rubik+Mono+One" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        <link rel="stylesheet" href="styles/reset.css" />
        <link rel="stylesheet" href="styles/style.css" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="jon.soy" />
        <meta name="application-name" content="jon.soy" />
        <meta name="theme-color" content="#56CCF2" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}></script>
    </Head>
    <body>
        <Main />
        <NextScript />
    </body>
</Html>


export default Document