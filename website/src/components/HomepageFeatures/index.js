

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const JourneyList = [
  {
    title: 'Welcome',
    Svg: require('@site/static/img/landing/welcome.svg').default,
    link: "blog/onboarding-guide",
    description: (
      <>
        Get guidance to jumpstart your learning journey!
      </>
    ),
  },
  {
    title: 'Guide',
    Svg: require('@site/static/img/landing/guide.svg').default,
    link: "docs/category/roadmaps",
    description: (
      <>
        Explore structured roadmaps and curricula.
      </>
    ),
  },
  {
    title: 'Connect',
    Svg: require('@site/static/img/landing/connect.svg').default,
    link: "calendar",
    description: (
      <>
        Interact with peers in forums and events.
      </>
    ),
  },
  /*
  {
    title: 'Share',
    Svg: require('@site/static/img/landing/connect.svg').default,
    link: "contribute",
    description: (
      <>
        Showcase achievements, share insights with others.
      </>
    ),
  },
  */
];

const LearningList = [
  {
    title: 'Internet Of Things',
    Svg: require('@site/static/img/logo/iot.svg').default,
    link: "https://julyot.dev",
    description: (
      <>
        Explore embedded app development and edge AI
      </>
    ),
  },
  {
    title: 'Progressive Web Apps',
    Svg: require('@site/static/img/logo/pwa.svg').default,
    link: "https://aka.ms/30DaysOfPWA",
    description: (
      <>
        Build modern web apps that are installable & reliable
      </>
    ),
  },
  {
    title: 'Static Web Apps',
    Svg: require('@site/static/img/logo/swa.svg').default,
    link: "https://www.azurestaticwebapps.dev/roadmap",
    description: (
      <>
        Deploy modern web apps to Azure directly from codebase
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} target="_blank">
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </a>
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
        <p className="hero__subtitle">
          Start Your Developer Journey
        </p>
        <div className="row">
          {JourneyList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr/>
        <p className="hero__subtitle">
          Learn With #30Days Roadmaps
        </p>
        <div className="row">
          {LearningList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
