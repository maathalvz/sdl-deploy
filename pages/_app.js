import Head from "next/head";
import App, { Container } from "next/app";
import { DefaultSeo } from "next-seo";
import { GlobalStyle } from "../style/style";
import Nav from "../src/Nav";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Sound Line | Som e iluminação</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicon-16x16.png"
          />
          <link rel="manifest" href="/assets/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/assets/safari-pinned-tab.svg"
            color="#040404"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#040404" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="author" content="Sound Line | Som e iluminação" />
          <meta
            name="description"
            content="
      Sound Line é uma empresa especializada em Serviços de DJ Para Festas, Aluguel de Som e Iluminação em Pará de minas com a melhor tecnologia e inovação. 
    "
          />
          <meta
            name="keywords"
            content="•Locação de som, luz em geral
    para seu evento
    •Casamentos, 15 anos, bodas, etc..
    •Confraternizações com os
    melhores DJs da região"
          />

          <meta name="copyright" content="© 2019 MaathScript" />

          <meta name="generator" content="vscode editor microsoft" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300&display=swap"
            rel="stylesheet"
          ></link>

          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Nav />
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "http://soundlineventos.me/",
            images: [
              {
                url: "/assets/gallery/22.jpg",
                width: 800,
                height: 600,
                alt: "Sound Line | Som e iluminação",
              },
              {
                url: "/assets/gallery/22.jpg",
                width: 900,
                height: 800,
                alt: "Sound Line | Som e iluminação",
              },
              { url: "/assets/gallery/22.jpg" },
              { url: "/assets/gallery/22.jpg" },
            ],
            site_name: "Sound Line | Som e iluminação",
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
        <Component {...pageProps} />
      </>
    );
  }
}
