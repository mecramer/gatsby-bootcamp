const path = require('path');

// creating slug for posts
// adds them as fields which can be used with graphql
// commenting out because we now get the slug from contentful instead of internal markdown

// exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions;
//     // Transform the new node here and create a new node or
//     // create a new node field.

//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md');

//         createNodeField({
//             node: node,
//             name: 'slug',
//             value: slug
//         });
//     }
// };

// Tell plugins to add pages. This extension point is called only after the initial sourcing and transformation of nodes plus
//  creation of the GraphQL schema are complete so you can query your data in order to create pages.
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');
    const res = await graphql(`
      query {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        });
    });

    // 1. Get path to template
    // 2. Get markdown data
    // 3. Create new pages

    // const blogTemplate = path.resolve('./src/templates/blog.js');

    // this was getting the data from markdown files, being replaced by getting from contentful
    // const res = await graphql(`
    //   query {
    //     allMarkdownRemark {
    //       edges {
    //         node {
    //           fields {
    //             slug
    //           }
    //         }
    //       }
    //     }
    //   }
    // `);

    // res.data.allMarkdownRemark.edges.forEach((edge) => {
    //     createPage({
    //         component: blogTemplate,
    //         path: `/blog/${edge.node.fields.slug}`,
    //         context: {
    //             slug: edge.node.fields.slug
    //         }
    //     });
    // });
};
