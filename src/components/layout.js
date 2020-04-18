import React from 'react';

import Header from './header';
import Footer from './footer';
import '../styles/index.scss'; // applying style sheet
import layoutStyles from './layout.module.scss';

// props.children is the JSX passed into the page that uses this
const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
