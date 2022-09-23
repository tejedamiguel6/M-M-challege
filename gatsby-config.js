module.exports = {
  siteMetadata: {
    title: `mag-mutual-challenge`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
  ],
}

// module.exports = {
//   siteMetadata: {
//     title: `mag-mutual-challenge`,
//     siteUrl: `https://www.yourdomain.tld`
//   },
//   plugins: ["gatsby-plugin-styled-components", {
//     resolve: 'gatsby-plugin-manifest',
//     options: {
//       "icon": "src/images/icon.png"
//     }

//   }, "gatsby-plugin-mdx", {
//     resolve: 'gatsby-source-filesystem',
//     options: {
//       "name": "pages",
//       "path": "./src/pages/"
//     },
//     __key: "pages"
//   }]
// };
