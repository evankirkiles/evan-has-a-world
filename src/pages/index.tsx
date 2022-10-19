/*
 * index.tsx
 * author: evan kirkiles
 * created on Tue Oct 18 2022
 * 2022 the nobot space,
 */
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import MainLink from '../components/MainLink/MainLink';
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
        <div className={s.header}>
          <h3>Evan Kirkiles</h3>
          <h1>TABLE&nbsp;OF WEB&nbsp;CONTENTS</h1>
          <div className={s.edition}>First Edition. October 2022.</div>
        </div>
        <div className={s.link_container}>
          <h2 className={s.link_section}>PERSONAL</h2>
          <div className={s.link_display}>
            <MainLink
              title={'evankirkiles.com'}
              href={'https://evankirkiles.com'}
              pageNum={0}
              description={'commercial, job-facing website.'}
            />
            <MainLink
              title={'evan-has-a.website'}
              href={'https://evan-has-a.website'}
              pageNum={5}
              description={'a personal personal website.'}
            />
            <MainLink
              title={'evan-has-a.blog'}
              href={'https://evan-has-a.blog'}
              pageNum={21}
              description={'my writings and thoughts.'}
            />
            <MainLink
              title={'evan-has-a.world'}
              href={'https://evan-has-a.world'}
              pageNum={35}
              description={'you are here. an index for my web stuff.'}
            />
          </div>
          <h2 className={s.link_section}>PROJECTS</h2>
          <div className={s.link_display}>
            <MainLink
              title={'paperarium.place'}
              href={'https://paperarium.place'}
              pageNum={78}
              description={'a modern papercraft compendium.'}
            />
            <MainLink
              title={'abitofpersonal.space'}
              href={'https://abitofpersonal.space'}
              pageNum={119}
              description={'an uninvasive home invasion.'}
            />
            <MainLink
              title={'nobot.space'}
              href={'https://nobot.space'}
              pageNum={131}
              description={'an automatic art project.'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
