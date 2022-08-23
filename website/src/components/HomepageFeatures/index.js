import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const JourneyList = [
  {
    title: 'Welcome',
    Svg: require('@site/static/img/landing-welcome.svg').default,
    link: "blog/onboarding-guide",
    description: (
      <>
        Get started on your developer journey to the cloud with onboarding guidance to set up your developer environment.
      </>
    ),
  },
  {
    title: 'Guide',
    Svg: require('@site/static/img/landing-guide.svg').default,
    link: "docs/intro",
    description: (
      <>
        Go from learning core concepts to building end-to-end solutions using best practices with structured #30Days roadmaps.
      </>
    ),
  },
  {
    title: 'Connect',
    Svg: require('@site/static/img/landing-connect.svg').default,
    link: "calendar",
    description: (
      <>
        Share your learnings and showcase your projects with the community by engaging in live events and offline forums.
      </>
    ),
  },
];

const LearningList = [
  {
    title: 'Progressive Web Apps',
    Svg: require('@site/static/img/logo_pwa.svg').default,
    link: "https://aka.ms/30DaysOfPWA",
    description: (
      <>
        Use open web standards and new web capabilities to build installable, reliable modern web apps 
      </>
    ),
  },
  {
    title: 'Static Web Apps',
    Svg: require('@site/static/img/logo_swa.svg').default,
    link: "https://www.azurestaticwebapps.dev/roadmap",
    description: (
      <>
        Learn to build and deploy full-stack web apps Azure automatically to Azure - directly from codebase!
      </>
    ),
  },
  {
    title: 'Internet Of Things',
    Svg: require('@site/static/img/logo_iot.svg').default,
    link: "https://julyot.dev",
    description: (
      <>
        Get started with IoT, then explore embedded development, AI at the edge, and certifications!
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
          Start: Your Developer Journey
        </p>
        <div className="row">
          {JourneyList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr/>
        <p className="hero__subtitle">
          Explore: #30Days  Roadmaps
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
