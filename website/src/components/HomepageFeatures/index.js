import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Welcome',
    Svg: require('@site/static/img/landing-welcome.svg').default,
    description: (
      <>
        Get started on your developer journey to the cloud with onboarding guidance to set up your developer environment.
      </>
    ),
  },
  {
    title: 'Guide',
    Svg: require('@site/static/img/landing-guide.svg').default,
    description: (
      <>
        Go from learning core concepts to building end-to-end solutions using best practices with structured #30Days roadmaps.
      </>
    ),
  },
  {
    title: 'Connect',
    Svg: require('@site/static/img/landing-connect.svg').default,
    description: (
      <>
        Share your learnings and showcase your projects with the community by engaging in live events and offline forums.
      </>
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
