module.exports = {
  siteMetadata: {
    title: `adrien.codes`,
    description: `Personal blog`,
    author: `@adriantoine`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/components/posts-layout.tsx"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `adrien.codes`,
        short_name: `adrien.codes`,
        start_url: `/`,
        background_color: `#343a40`,
        theme_color: `#343a40`,
        display: `minimal-ui`,
        icon: `src/images/me.jpg`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/style.css`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Merriweather`,
            variants: [`400`, `700`],
          },
          {
            family: `Lora`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-offline`,
  ],
}
