import React from 'react';
import Header from './header';
import HeadMeta from 'components/meta';
import styles from 'styles/components/layout/layout.module.css';

import Logo from 'assets/logo.png';
import { menuData } from 'modules/routes';

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
		<div className={styles['layout']}>
			<HeadMeta title='Barry Musaddiq' />
			<Header className={styles['layout-header']} menuData={menuData} logo={Logo} />
			<div className={styles['inner-layout']}>{children}</div>
		</div>
	);
};

Layout.Port = Portfolio;

export default Layout;
