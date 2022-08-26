// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '#30DaysOf Learning',
  tagline: 'Learn By Building - Concepts to Code To Cloud!',
  url: 'https://microsoft.github.io',
  baseUrl: '/30daysof/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'microsoft', // Usually your GitHub org/user name.
  projectName: '30DaysOf', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '#30DaysOf',
        logo: {
          alt: '30DaysOf Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Content', position: 'left'},
          {to: '/calendar', label: 'Calendar', position: 'left'},
          {to: '/curricula', label: 'Curricula', position: 'left'},
          {to: 'https://github.com/microsoft/30daysof/discussions', label: 'Chat', position: 'left'},
          
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'right',
            items: [             
              { label: '1. Roadmaps', type: 'doc', docId: '/category/roadmaps',  },
              { label: '2. Curricula', to: '/http://aka.ms/curricula', },
              { label: '3. Challenges', to: '/challenges', },

            ],
          },
          {
            href: 'https://github.com/microsoft/30DaysOf',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Learn About ..',
            items: [
              {
                label: 'Microsoft Student Ambassadors',
                to: 'https://studentambassadors.microsoft.com/',
              },
              {
                label: 'Microsoft Imagine Cup',
                to: 'https://imaginecup.microsoft.com/en-us/Events',
              },
              {
                label: 'Microsoft Student Hub',
                to: 'https://docs.microsoft.com/en-us/learn/student-hub/',
              },
              {
                label: 'Microsoft Reactor',
                to: 'https://developer.microsoft.com/en-us/reactor/',
              },
            ],
          },
          {
            title: 'Azure For ..',
            items: [
              {
                label: ' Developers',
                to: '/blog',
              },
              {
                label: 'Data Scientists / AI Engineers',
                to: '/blog',
              },
              {
                label: 'Citizen Developers / Low Code',
                to: '/blog',
              },
              {
                label: 'IT Pros',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Curricula For ..',
            items: [
              {
                label: 'Web Development',
                to: 'https://aka.ms/web-beginners',
              },
              {
                label: 'Machine Learning',
                to: 'https://aka.ms/datascience-beginners',
              },
              {
                label: 'Artificial Intelligence ',
                to: 'https://aka.ms/ai-beginners',
              },
              {
                label: 'IoT ',
                to: 'https://aka.ms/iot-beginners',
              },
              {
                label: 'Data Science',
                to: 'https://aka.ms/datascience-beginners',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft - Built with <a href="https://docusaurus.io"> Docusaurus </a> & <a href="https://iconcloud.design/"> IconCloud.Design </a> - By <a href="https://twitter.com/azureadvocates"> @azureadvocates </a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'img/logo.png',

      metadata: [
        {
          name: 'twitter:url', 
          content: 'https://microsoft.github.io/30DaysOf'
        },
        {
          name: 'twitter:title', 
          content: '#30DaysOfLearning: Concepts to Code to Cloud'
        },
        {
          name: 'twitter:description', 
          content: 'The beginner\'s one-stop resources to skilling up on Cloud and AI!'
        },
        {
          name: 'twitter:image', 
          content: 'https://techcommunity.microsoft.com/t5/image/serverpage/image-id/378805iDA20565658980B26/image-size/large?v=v2&px=999'
        },
        {
          name: 'twitter:card', 
          content: 'summary_large_image'
        },
        {
          name: 'twitter:creator', 
          content: '@nitya'
        },
        {
          name: 'twitter:site', 
          content: '@AzureAdvocates'
        },

      ],

      announcementBar: {
        id: 'Kickstart #30DaysOfLearning!',
        content:
          '<b>Found this project helpful? Give us a star on <a href="https://github.com/microsoft/30DaysOf"><b>GitHub</b></a></b> 🙏🏽',
        backgroundColor: '#4f2e85',
        textColor: '#ffffff',
        isCloseable: false,
      },

    }),
};

module.exports = config;
