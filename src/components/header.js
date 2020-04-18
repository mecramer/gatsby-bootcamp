import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'; // graphql and useStaticQuery are for using graphql to get data
import headerStyles from './header.module.scss'; // this is called a CSS module

// the CSS module is used in the className by name of module and style name, ie headerStyles.link
const Header = () => {
    // useStaticQuery is a gatsby function that can grab a query from graphQL
    // it uses a React hook to grab content at build time
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
                            Home Page
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
