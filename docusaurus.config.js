// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '技术文档',
  tagline: '团队文档、API参考和教程',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ztqsqq.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ztqsqq', // Usually your GitHub org/user name.
  projectName: 'ztqsqq.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'cn',
    locales: ['cn'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          path: './examples',
          routeBasePath: 'examples',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
       
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'functions-blog',         // 唯一标识符
        path: './function',           // Markdown 文件目录（建议放整个文件夹）
        routeBasePath: 'function',    // 访问路径为 /function
        editUrl: 'https://github.com/your-repo/',
        // showReadingTime: true,
      },
    ],
  [
      '@docusaurus/plugin-content-blog',
      {
        id: 'modules',               // 唯一标识符
        path: './modules',             // Markdown 文件路径
        routeBasePath: 'modules',    // 访问路径为 /modules
        editUrl: 'https://github.com/your-repo/edit/main/',   // 可选
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '文档中心',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {to: '/examples', label: '示例', position: 'left'},
          {to: '/function', label: '函数', position: 'left'},
          {to: '/moudules', label: '模块', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
footer: {
  style: 'dark',
  links: [
    {
      title: '文档',
      items: [
        {
          label: '快速入门',
          to: '/docs/intro',
        },
        {
          label: 'API 参考',
          to: '/docs/api',
        },
        {
          label: '开发指南',
          to: '/docs/guides',
        },
      ],
    },
    {
      title: '资源',
      items: [
        {
          label: 'GitHub',
          href: 'https://github.com/your-repo',
        },
        {
          label: '示例代码',
          to: '/blog',
        },
        {
          label: '更新日志',
          to: '/blog/release-notes',
        },
      ],
    },
  ],
},
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
