import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const aboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Me</h1>
            <p>I am a developer living in Bowie, MD.</p>
            <p>
                Need a developer? <Link to="/contact">Contact me.</Link>
            </p>
        </Layout>
    );
};

export default aboutPage;
