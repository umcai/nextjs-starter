import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import site from '../config/site'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='zh-CN'>
        <head>
          <Head>
            {/* <title>7IN.ME</title> */}
            <meta name='keywords' content={site.keywords}></meta>
            <meta name='description' content={site.description}></meta>
          </Head>
          {/* js放在这里 */}
        </head>
        <body>
          <Main />
          <NextScript />
          <div id='sdk_lib' />
        </body>
      </Html>
    );
  }
}
