/*
 * _app.tsx
 * author: evan kirkiles
 * created on Tue Oct 18 2022
 * 2022 the nobot space,
 */

import type { AppProps } from 'next/app';
import { ImgixProvider } from 'react-imgix';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
// STYLES
import '../styles/globals.scss';
import '../styles/fonts.scss';
import '../styles/lazyloadimgs.scss';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ImgixProvider domain={process.env.IMGIX}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ImgixProvider>
    </>
  );
}

export default MyApp;
