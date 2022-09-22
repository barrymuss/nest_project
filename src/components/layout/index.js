import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Header, HeadMeta, Button } from '@components';
import styles from '@styles/components/layout/layout.module.css';

import Logo from '@assets/logo.png';
import { menuData } from '@modules/routes';

const Layout = ({ children, logo }) => {
	const router = useRouter();
	const [overlay, setOverlay] = useState(false);

	const handleBurger = () => {
		setOverlay(!overlay);
		console.log(overlay);
	};

	const menuActive = {
		position: 'fixed',
		zIndex: 99,
		minHeight: '100vh',
		width: '100%',
		top: 0,
		background: '#28293e',
		transition: 'all 0.3s ease-out',
	};

	const menuNot = {
		width: 0,
		transition: 'all 0.3s ease-out',
		animation: '0.5s slideIn forwards',
	};

	return (
		<div className={styles['layout']}>
			<HeadMeta title='Barry Musaddiq' />
			<Header
				className={styles['layout-header']}
				menuData={menuData}
				mobileFunction={() => handleBurger()}
				headLogo={logo}
			/>
			<div className={styles['inner-layout']}>{children}</div>
			<div style={overlay ? menuActive : menuNot}>
				<div className={`${styles['inner-menu']}`}>
					{menuData &&
						menuData.map((item, index) => {
							return (
								<Button
									type='text-green'
									className={`${styles['menu-button']} underline underline-offset-8 mr-3`}
									key={index}
									onClick={() => {
										router.push(`${item.path}#${item.section}`);
										setOverlay(false);
									}}
								>
									<span className={styles['menu-label']}>{item.label}</span>
								</Button>
							);
						})}
				</div>
			</div>
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
