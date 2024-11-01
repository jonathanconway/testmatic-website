import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div>
          <table>
            <tr>
              <td>
                <img src="/docs/ui-demo.gif" alt="Screen recording of user creating tests in the Testmatic web user interface (UI)" />
              </td>
              <td>
                <img src="/docs/cli-demo.gif" alt="Screen recording of user creating tests in the Testmatic command line interface (CLI)" />
              </td>
            </tr>
          </table>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction">
            Testmatic Introduction - 5min ⏱️
          </Link>
        </div>

        <br />

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://conwy.co/testmaticui"
            target="_blank">
            Try it out now! 💻
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Test-case manager for quickly writing and organising human-readable test cases">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
