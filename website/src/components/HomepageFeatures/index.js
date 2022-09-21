

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const JourneyList = [
  { 
    title: 'Start',
    imgpath: 'img/landing/start.svg',
    link: "blog",
    description: (
      <>
       Get onboarding help to jumpstart your journey!
      </>
    ),
  },
  { 
    title: 'Explore',
    imgpath: 'img/landing/explore.svg',
    link: "docs/roadmaps/pwa",
    description: (
      <>
       Browse Roadmaps. Plan out #30DaysOf learning!
      </>
    ),
  },
  { 
    title: 'Connect',
    imgpath: 'img/landing/connect.svg',
    link: "https://github.com/microsoft/30daysof/discussions",
    description: (
      <>
       Join Discussions. Interact with peers and mentors.
      </>
    ),
  },
  { 
    title: 'Share',
    imgpath: 'img/landing/share.svg',
    link: "https://github.com/microsoft/30daysof/issues/new/choose",
    description: (
      <>
       Contribute Back. Share your projects, learnings and time!
      </>
    ),
  },
];

const RoadmapList = [
  { 
    title: 'Data Science ✨',
    imgpath: 'img/roadmaps/data-science.png',
    link: "/docs/roadmaps/data-science",
    description: (
      <>
       Explore data science and machine learning with Python, on Azure - with projects!
      </>
    ),
  },
  { 
    title: 'Fusion ✨',
    imgpath: 'img/roadmaps/fusion.png',
    link: "/docs/roadmaps/fusion",
    description: (
      <>
       Extend low-code development with Power Platform by building custom connectors.
      </>
    ),
  },
  { 
    title: 'Serverless ✨',
    imgpath: 'img/roadmaps/serverless.png',
    link: "/docs/roadmaps/serverless",
    description: (
      <>
       Build your confidence in data analysis using Power BI and data storytelling.
      </>
    ),
  },
  { 
    title: 'Power Platform',
    imgpath: 'img/roadmaps/power-platform.png',
    link: "/docs/roadmaps/power-platform",
    description: (
      <>
       Use low-code components to build apps, automate processes and build bots!
      </>
    ),
  },
  { 
    title: 'Data Analytics',
    imgpath: 'img/roadmaps/data-analytics.png',
    link: "/docs/roadmaps/data-analytics",
    description: (
      <>
       Build your confidence in data analysis using Power BI and data storytelling.
      </>
    ),
  },
  { 
    title: 'Static Web Apps',
    imgpath: 'img/roadmaps/swa.png',
    link: "/docs/roadmaps/swa",
    description: (
      <>
       Build and deploy modern web apps automatically - directly from your codebase.
      </>
    ),
  },
  { 
    title: 'Progressive Web Apps',
    imgpath: 'img/roadmaps/pwa.png',
    link: "/docs/roadmaps/pwa",
    description: (
      <>
       Build modern web apps that are installable, reliable, and discoverable in stores.
      </>
    ),
  },

];

function Feature({imgpath, title, description, link}) {
  return (
    <div className={clsx('col col--3')}>
      <a href={link} target="_blank">
        <div className="text--center">
          <img width="150px" height="150px" className="featureSvg" src={imgpath} alt={title} />
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
        <div className="row">
          {JourneyList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr/>
        <br/>
        <div className="row">
          {RoadmapList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
