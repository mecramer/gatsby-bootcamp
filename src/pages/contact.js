import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const contactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact Me</h1>
            <p>301.996.xxxx</p>
            <p>********@yahoo.com</p>
            <p>
                <a href="https:www.twitter.com">Twitter Profile</a>
            </p>
        </Layout>
    );
};

export default contactPage;
