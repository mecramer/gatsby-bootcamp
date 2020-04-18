import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// Get the page's title from graphql and insert it in the site's title metadata field
const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />;
};

export default Head;
