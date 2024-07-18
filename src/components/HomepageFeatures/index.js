import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Rapidly create and organise your test cases',
    Svg: require('@site/static/img/create_organise.svg').default,
    description: (
      <ul>
        <li>Quickly and easily write test cases as a simple set of ordered steps.</li>
        <li>Human-readable by engineers and business people alike.</li>
        <li>Fully exportable to Markdown.</li>
      </ul>
    ),
  },
  {
    title: 'Catch bugs and regressions early',
    Svg: require('@site/static/img/catch_bugs.svg').default,
    description: (
      <ul>
        <li>Don't wait until your tests are automated – start catching and fixing bugs now! </li>
        <li>Find related test cases by impact search to prevent regressions while rapidly rolling out new features.</li>
      </ul>
    ),
  },
  {
    title: 'Understand your software flows',
    Svg: require('@site/static/img/understand.svg').default,
    description: (
      <ul>
        <li>Keep your test cases organised, structured and repeatable.</li>
        <li>Test in an organised, consistent, rigorous, systematic manner.</li>
      </ul>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
