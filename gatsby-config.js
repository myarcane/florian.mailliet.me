module.exports = {
  siteMetadata: {
    title: "Florian Mailliet | Web developer",
    description: "I'm a JavaScript web developer currently living in Canada",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#ffffff",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-split-css`,
  ],
}
