import React from 'react';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import '../utilities/i18n';
import '../styles/globals.css';
import '../styles/editor.scss';
import '../styles/PixelApp.scss';
import '../styles/drawingPanel.scss';
import '../styles/pixel.scss';
import '../styles/row.scss';

const config = {
  enableRecoil: false,
};

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  let appElem = (
    <Layout>
      <Head />
      <Component {...pageProps} />
    </Layout>
  );

  if (config.enableRecoil) {
    appElem = <RecoilRoot>{appElem}</RecoilRoot>;
  }

  return appElem;
}

export default MyApp;
