// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'climate-plus 🌦️',
    tagline: 'Pretty cool enhancements to ClimateBERT',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://climate-plus.rqiu.dev',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'rexarski', // Usually your GitHub org/user name.
    projectName: 'climate-plus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

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
                    editUrl:
                        'https://github.com/rexarski/climate-plus-site/tree/main/docs',
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
            // Replace with your project's social card
            image: 'img/social-card.jpg',
            navbar: {
                title: 'climate-plus',
                logo: {
                    alt: 'climate-plus-logo',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'toc',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        href: 'https://github.com/rexarski/climate-plus',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Links',
                        items: [
                            {
                                label: 'Docs',
                                to: '/docs/toc',
                            },
                            {
                                label: 'Project Repository',
                                href: 'https://github.com/rexarski/climate-plus',
                            },
                            {
                                label: 'Site Repository',
                                href: 'https://github.com/rexarski/climate-plus-site',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} climate-plus. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
