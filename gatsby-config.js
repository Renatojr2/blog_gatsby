// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: 'Geminiana Falando',
    description: 'Fala pouco, fala muito, fala tudo'
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-catch-links",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`
      }
    },
     //... other plugins
  ]
}