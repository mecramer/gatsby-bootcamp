import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

// component
const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hello</h1>
            <h2>I'm Mark, learning Gatsby</h2>
            <p>
                <Link to="/contact">Contact me</Link> for more information.
            </p>
        </Layout>
    );
};

export default IndexPage;
