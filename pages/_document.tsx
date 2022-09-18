import Document, {
  Main,
  NextScript,
  Html,
  Head,
  DocumentContext,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

class AbdeuDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    const styleTags = sheet.getStyleElement();

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styleTags}
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Roboto:wght@100&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src="https://kit.fontawesome.com/0635b7f7ac.js"
            crossorigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AbdeuDocument;
