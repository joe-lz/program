// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '程序员客栈',
  tagline: '自由工作',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: '帮助中心',
        logo: {
          alt: '程序员客栈Logo',
          src: 'img/logo2.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'custom',
            position: 'left',
            label: '我是需求方',
          },
          {
            type: 'doc',
            docId: '我是开发者/常见问题',
            position: 'left',
            label: '我是开发者',
          },
          {
            type: 'doc',
            docId: '规则协议/黑名单',
            position: 'left',
            label: '规则协议',
          },
          {
            type: 'doc',
            docId: '关于我们',
            position: 'left',
            label: '关于我们',
          },
          // { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://www.proginn.com/?from=客栈帮助文档',
            label: '官网',
            position: 'right',
          },
          {
            href: 'https://www.proginn.com/index/app?from=客栈帮助文档',
            label: '下载APP',
            position: 'right',
          },
          {
            href: 'https://support.qq.com/product/362129?from=客栈帮助文档',
            label: '意见反馈',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '解决方案',
            items: [
              {
                label: '整包开发',
                href: 'https://www.proginn.com/b/outsource?from=客栈帮助文档',
              },
              {
                label: '云端开发',
                href: 'https://www.proginn.com/b/cloud?from=客栈帮助文档',
              },
              {
                label: '1980梳理需求',
                href: 'https://www.proginn.com/b/p1980?from=客栈帮助文档',
              },
            ],
          },
          {
            title: '开发者服务',
            items: [
              {
                label: '资源下载',
                href: 'https://www.proginn.com/works/?from=客栈帮助文档',
              },
              {
                label: '客栈学院',
                href: 'https://www.proginn.com/learn/?from=客栈帮助文档',
              },
              {
                label: '开发屋',
                href: 'https://www.kaifain.com/?from=客栈帮助文档',
              },
              {
                label: '技术圈',
                href: 'https://jishuin.proginn.com/?from=客栈帮助文档',
              },
              {
                label: 'UniSMS',
                href: 'https://unisms.apistd.com/?source=客栈帮助文档',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '官网',
                href: 'https://www.proginn.com/?from=客栈帮助文档',
              },
              {
                href: 'https://www.proginn.com/index/app?from=客栈帮助文档',
                label: '下载APP',
              },
              {
                href: 'https://support.qq.com/product/362129?from=客栈帮助文档',
                label: '意见反馈',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 程序员客栈. 浙ICP备15029175号`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

    }),
};

module.exports = config;
