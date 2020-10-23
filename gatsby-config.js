/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  pathPrefix: "/olbal",
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // for inline blog images
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 880,
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
  ],
}
