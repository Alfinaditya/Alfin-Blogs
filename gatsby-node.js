const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const blogDetailsTemplate = path.resolve('src/templates/blog-details.tsx')
  const { data } = await graphql(`
    query Blogs {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: blogDetailsTemplate,
      context: { id: node.id },
    })
  })
}
