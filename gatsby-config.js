module.exports = {
  siteMetadata: {
    title: "Worth Coding",
    desc: "A coding blog from Will Worth"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "m1izjj3wg21a",
        accessToken:
          "e33287273b563aeb233c1b74a80445ee5e2f6577122c18e3cb58ed002e311a76"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/static/assets`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark"
  ]
};

// pathPrefix: "/levelupgatsby",
