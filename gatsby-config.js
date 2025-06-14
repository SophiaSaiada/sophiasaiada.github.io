require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Sophie Saiada`,
    // Default title of the page
    siteTitleAlt: `Sophie Saiada`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Sophie Saiada`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://sophies.dev`,
    // Used for SEO
    siteDescription: `Sophie Saiada, Full Stack (web & mobile) Developer`,
    keywords: `Sophie Saiada,סופי ציאדה, מפתחת,מפתח,פול סטאק,מתכנת,מתכנתת,Full Stack Developer,Full Stack,Developer,Mobile,Web,React,ReactJS,iOS,Android,Kotlin,Python,Swift,Software Engineer`,
    // Will be set on the <html /> tag
    siteLanguage: `he`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@SophiaSa`,
    projects: [
      {
        name: "Gödel",
        image: "godel.gif",
        background:
          "radial-gradient(farthest-corner, hsl(307 66% 26% / 1), transparent), radial-gradient(ellipse at bottom, hsl(0deg 86% 13%), hsl(302.65deg 28% 25%))",
        description: `
        An interpreted programming language that I developed as a final project for a bachelor's degree.  
        Written in Kotlin and its syntax resembles Kotlin's one.  
        Includes a CFG-parser generator (like Java's Bison) that I wrote from scratch.
        `,
        url: "https://github.com/SophiaSaiada/Godel",
        tags: ["Kotlin", "Meta Programming", "Algorithms"]
      },
      {
        name: "Excel Clone",
        image: "excel.gif",
        background:
          "radial-gradient(farthest-corner, hsl(142 66% 22% / 1), transparent), radial-gradient(ellipse at bottom, hsl(174 86% 26% / 1), hsl(121 28% 22% / 1))",
        description: `
        TODO.
Check out a live demo <a target="_blank" href="https://excel.sophies.dev/">here</a>.
        `,
        url: "https://github.com/SophiaSaiada/react-excel",
        tags: ["React", "Data Structures", "Algorithms"]
      },
      {
        name: "vue-conversational-form",
        image: "vue-conversational-form.gif",
        background:
          "radial-gradient(farthest-corner, hsl(263 87% 52% / 1), transparent), radial-gradient(ellipse at bottom, hsl(222 66% 33% / 1), #433d6c)",
        description: `
        A Vue.js component that turns web forms into conversations.
        It's an implementation of <a target="_blank" href="https://github.com/space10-community/conversational-form">another open-source project</a> as Vue's Higher-Order-Component.
        Check out a live demo <a target="_blank" href="https://sophies.dev/vue-conversational-form/">here</a>.
        `,
        url: "https://github.com/SophiaSaiada/vue-conversational-form",
        tags: ["🌟 48 GitHub Stars", "Vue.js", "Front-End"]
      }
    ]
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 100,
              linkImagesToOriginal: true
            }
          },
          "gatsby-remark-copy-linked-files"
        ]
      }
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        mdx: false,
        // Links displayed in the header on the right side
        basePath: "/",
        blogPath: "/blog",
        tagsPath: "/tags",
        showLineNumbers: true,
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/SophiaSaiada/`
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/sophie-saiada/`
          }
        ],
        navigation: [
          {
            title: `Home`,
            slug: `/`
          },
          {
            title: `Blog`,
            slug: `/blog`
          },
          {
            title: `About Me`,
            slug: `/about`
          },
          {
            title: `Contact`,
            slug: `/contact`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_ID]
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sophie Saiada`,
        short_name: `SophieSaiada`,
        start_url: `/`,
        description: `Sophie Saiada, Full Stack (web & mobile) Developer`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icon: `./src/images/AvatarGithub.png`
      }
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-preload-fonts`
  ]
};
