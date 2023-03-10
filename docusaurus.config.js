// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation Portfolio',
  tagline: 'by Ryan Rader',
  // Set the production url of your site here
     url: 'https://lookatthem-tech.surge.sh/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
     baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  favicon: 'img/favicon.ico',  
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  
  // organizationName: 'lookatthem-tech', // Usually your GitHub org/user name.
  // projectName: 'SampleDocusaurusPortfolio04', // Usually your repo name.
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Portfolio by Ryan',
        logo: {
          alt: 'My Site Logo',
          src: 'img/DocusaurusRyanLogo.png',
        },
        items: [
          {
            type: 'doc',
            docId: '01-Software/software',
            position: 'left',
            label: 'Software',
          },
          {
            type: 'doc',
            docId: '02-Hardware/hardware',
            position: 'left',
            label: 'Hardware',
          },
          {
            type: 'doc',
            docId: '03-Developers/developers',
            position: 'left',
            label: 'Developers',
          },
          {
            type: 'doc',
            docId: '04-API Docs/API Docs',
            position: 'left',
            label: 'API docs',
          },
          {
            type: 'doc',
            docId: '05-Book Publishing/book publishing',
            position: 'left',
            label: 'Book Publishing',
          },
          {
            type: 'doc',
            docId: '06-More/more',
            position: 'left',
            label: 'More!',
          },
         // {to: '/blog', label: 'Blog', position: 'left'},
         // {
          //  href: 'https://github.com/facebook/docusaurus',
          //  label: 'GitHub',
          //  position: 'right',
         // },
        ],
      },
      /** footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
*/
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};


module.exports = config;
