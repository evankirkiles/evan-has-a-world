/*
 * index.tsx
 * author: evan kirkiles
 * created on Tue Oct 18 2022
 * 2022 the nobot space,
 */
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import s from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>evan has a world.</title>
        <NextSeo
          canonical={'https://evan-has-a.world'}
          description={
            "a landing page in which you may explore evan kirkiles's web work."
          }
        />
      </Head>
      <div className={s.container}>
        <h3>Evan Kirkiles</h3>
        <h1>TABLE&nbsp;OF WEB&nbsp;CONTENTS</h1>
        <div className={s.edition}>First Edition. October 2022.</div>
        <div className={s.link_container}>
          <h2 className={s.link_section}>PERSONAL</h2>
          <div className={s.link_display}>
            <div className={s.link_row}>this is me.</div>
            <div className={s.link_row}>this is me.</div>
          </div>
          <div className={s.link_display}></div>
          <div className={s.link_display}></div>
          <h2 className={s.link_section}>PROJECTS</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
