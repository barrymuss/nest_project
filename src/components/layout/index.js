import React from 'react';
import Header from './header';
import HeadMeta from 'components/meta';
import styles from 'styles/components/layout/layout.module.css';

import Logo from 'assets/logo.png';

const menuData = [
	{
		label: 'about',
		path: 'about',
		// section: 'second-section',
	},
	{
		label: 'portfolio',
	},
	{
		label: 'contact',
	},
];

const Layout = ({ children, logo }) => {
	return (
		<div className={styles['layout']}>
			<HeadMeta title='Barry Musaddiq' />
			<Header className={styles['layout-header']} menuData={menuData} headLogo={logo} />
			<div className={styles['inner-layout']}>{children}</div>
		</div>
	);
};

const Portfolio = ({ children, ...props }) => {
	return (
		<Layout logo={Logo} {...props}>
			{children}
		</Layout>
	);
};

Layout.Port = Portfolio;

export default Layout;
