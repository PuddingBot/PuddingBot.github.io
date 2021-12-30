// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '@PuddingBot',
  tagline: 'A modular Telegram group management bot',
  url: 'https://PuddingBot.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'PuddingBot', // Usually your GitHub org/user name.
  projectName: 'PuddingBot.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh_pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/PuddingBot/pudding-bot-docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/PuddingBot/pudding-bot-docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'devdocs',
        path: 'devdocs',
        routeBasePath: 'devdocs',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/PuddingBot/pudding-bot-docs/tree/master/',
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '@PuddingBot',
        logo: {
          alt: '@PuddingBot Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guide',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/PuddingBot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guide',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/puddingbot',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/PuddingBot',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} @PuddingBot built with 💖.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
