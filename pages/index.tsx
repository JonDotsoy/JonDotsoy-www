import Head from 'next/head';
import schema from '../public/schema.json';

const App = () => <div>
    <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <title>Jonathan Delgado Web Engineer</title>

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

    <div id="containerbody">
        <hgroup>
            <h1 className="title">Jonathan Delgado</h1>
            <h2 className="subtitle">A web engineer with a stack on JavaScript, React and Docker</h2>
        </hgroup>

        <p className="more">More about me on <a href="https://www.linkedin.com/in/jonadelgado/" target="_blank" rel="noopener">LinkedIn</a> or send me a email to <a href="mailto:hi@jon.soy" target="_blank" rel="noopener">hi@jon.soy</a></p>

        <script dangerouslySetInnerHTML={{ __html: '!function(){var t;if(!(t=window.driftt=window.drift=window.driftt||[]).init)t.invoked?window.console&&console.error&&console.error("Drift snippet included twice."):(t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n;return(n=Array.prototype.slice.call(arguments)).unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e,n,o,i;e=3e5,i=Math.ceil(new Date/e)*e,(o=document.createElement("script")).type="text/javascript",o.async=!0,o.crossorigin="anonymous",o.src="https://js.driftt.com/include/"+i+"/"+t+".js",(n=document.getElementsByTagName("script")[0]).parentNode.insertBefore(o,n)})}(),drift.SNIPPET_VERSION="0.3.1",drift.load("4dexrh5i897v");' }}></script>
    </div>
</div>

export default App
