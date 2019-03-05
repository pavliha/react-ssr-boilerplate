import Helmet from 'react-helmet'
import { renderToString } from 'react-dom/server'

export default ({ content, extractor, state, sheetsRegistry }) => {

  const helmet = Helmet.renderStatic()

  return `
    <!doctype html>
    <html lang="ru">
    <head>
        <title>react ssr boilerplate</title>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${extractor.getStyleTags()}
                
        <!-- 1. Link to jQuery (1.8 or later), -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- 33 KB -->
        
        <!-- fotorama.css & fotorama.js. -->
        <link  href="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet"> <!-- 3 KB -->
        <script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script> <!-- 16 KB -->
    </head>
    <body>
        <div id="root">${renderToString(content)}</div>
        <style id="jss-server-side">${sheetsRegistry}</style>

        <script>
            window.__STATE__ = ${JSON.stringify(state)}
        </script>
        ${extractor.getScriptTags()}
        <script>
    </body>
    </html>
  `
}
