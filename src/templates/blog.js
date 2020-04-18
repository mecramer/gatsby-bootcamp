import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Head from '../components/head';

// query the post content from contentful
export const query = graphql`
    query($slug: String) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`;

// put the contentful content into the component
// documentToReactComponents is a plugin that helps with rich text formatted content, which the body field is
// options is needed to display images. We could get many things from the image, but we are grabbing the title and url
// those can be found using the graphql playground
// options is then sent as a second parameter to documentToReactComponents
const Blog = (props) => {
    const options = {
        renderNode: {
            'embedded-asset-block': (node) => {
                const alt = node.data.target.fields.title['en-us'];
                const url = node.data.target.fields.file['en-US'].url;
                return <img alt={alt} src={url} />;
            }
        }
    };

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    );
};

// this was the query to get the content from internal markdown files
// export const query = graphql`
//     query($slug: String) {
//         markdownRemark(fields: { slug: { eq: $slug } }) {
//             frontmatter {
//                 title
//                 date
//             }
//             html
//         }
//     }
// `;

// dangersouslySetInnerHTML is Reacts version of innerHTML
// using graphql query to get header, date and html content
// This was the component for the markdown files
// const Blog = (props) => {
//     return (
//         <Layout>
//             <h1>{props.data.markdownRemark.frontmatter.title}</h1>
//             <p>{props.data.markdownRemark.frontmatter.date}</p>
//             <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
//         </Layout>
//     );
// };

export default Blog;
