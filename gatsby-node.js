/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// when pages are being created, this file is run with node.

const path = require(`path`)

// You can delete this file if you're not using it

// filesystem plugin ships with a function for creating slugs
// it will find the parent FILE node along with creating the slug
const { createFilePath } = require(`gatsby-source-filesystem`)

// adds the filepath for the slug to the markdownRemark node so it can be queried with GraphQL
// called when a node is being created
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        // const fileNode = getNode(node.parent)
        // console.log(`\n`, fileNode.relativePath)
        // console.log(createFilePath({ node, getNode, basePath: `pages` }))

        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
          node,
          name: `slug`,
          value: slug,
        })

    }
  }

  // called by Gatsby so plugins can add pages
  exports.createPages = ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    return graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
      // disaplay queried data. should be the path for all slugs
      // with this data we can create a page template to display its relevent data
    //   console.log(JSON.stringify(result, null, 4))

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })

    })
  }