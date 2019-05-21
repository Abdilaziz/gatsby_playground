module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, // provides support for server rendering data in React Helmet. Controls document head using their React component. Allows Attributes you add in the component (title, meta, attributes, etc) will get added to the static HTML pages Gatsby builds. (Important for viewers and for SEO. Title and description Metadata stored in document head is a key part of Google Search Results)
    {
      resolve: `gatsby-source-filesystem`, // Sourcing data into your Gatsby application from your local filesystem. Creates File nodes from files, and 'transformer' plugins can transform File nodes into various types of data. Can be queried in GraphQL
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`, // creates ImageSharp nodes from img types for processing (resize, crop, create responsive images, compression)
    `gatsby-plugin-sharp`, // image processing exposed. shouldnt be used directly, mostly used for other plugins like transformer-sharp
    {
      resolve: `gatsby-plugin-manifest`, // web app manifest (part of PWA specification). Allows adding site to homescreen on mobile browsers. Also Supports: auto icon generation, Favicon support, Cache busting
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
