import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Jainil Prajapati",
  tagline: "IT Student and Web Developer",
  favicon: "/img/logo.png",

  // Set the production url of your site here
  url: "https://hellojainil.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "enough-jainil", // Usually your GitHub org/user name.
  projectName: "my-portfolio", // Usually your repo name.

  // onBrokenLinks: "throw",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        // {
        //   sidebarPath: "./sidebars.ts",
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      // title: "My Site",
      logo: {
        alt: "Jainil Prajapati Logo",
        src: "img/cover.webp",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/enough-jainil",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Connect",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/enough-jainil",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/enough-jainil/",
            },
            {
              label: "Twitter",
              href: "https://x.com/enough_jainil",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/enough.jainil/",
            },
          ],
        },

        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "/blog",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jainil Prajapati. Built with Docusaurus🦖.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      {
        name: "keywords",
        content:
          "web development, IT, React, Node.js, JavaScript, TypeScript, portfolio",
      },
      {
        name: "description",
        content:
          "Jainil Prajapati - IT Student and Full Stack Web Developer specializing in React, Node.js, and modern web technologies",
      },
      { name: "author", content: "Jainil Prajapati" },
      { name: "og:type", content: "website" },
      {
        name: "og:title",
        content: "Jainil Prajapati - IT Student & Web Developer",
      },
      {
        name: "og:description",
        content:
          "Portfolio and blog of Jainil Prajapati, showcasing web development projects and technical expertise",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:creator", content: "@enough_jainil" },
    ],
  } satisfies Preset.ThemeConfig,

  // Add sitemap
  plugins: [
    // [
    //   "@docusaurus/plugin-sitemap",
    //   {
    //     changefreq: "weekly",
    //     priority: 0.5,
    //   },
    // ],
  ],
};

export default config;
