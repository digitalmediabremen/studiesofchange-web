import Head from 'next/head';
import styles from './layout.module.css';
// import Link from 'next/link';

export const siteTitle = 'Studies of Change';

export default function Layout({ children, me }: any) {
  return (
      <div className={styles.container}>
        <Head>
          <title key="title">{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="author" content="Digital Media, HfK Bremen" />
          <meta name="description" content="Website of the exhibition Studies of Change" />
          <meta name="keywords" content=""></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="Studies of Change" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-tileImage" content="/ms-icon-144x144.png" />
          <meta name="title" content={siteTitle} />
          <meta name="robots" content="all" />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:description" content="Website of the exhibition Studies of Change" />
          <meta property="og:image" content="TODO" />
          <meta property="og:url" content="https://studiesofchange.hfk-bremen.de" />
          <meta property="og:site_name" content={siteTitle} />
          <meta property="og:type" content="website" />
          <link rel="shortcut icon" href="./favicon.ico" />
        </Head>
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
  );
}