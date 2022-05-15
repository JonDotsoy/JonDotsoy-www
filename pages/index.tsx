import Head from 'next/head';


const App = () => <div>
    <Head>
        <title>Jonathan Delgado Web Engineer</title>
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
