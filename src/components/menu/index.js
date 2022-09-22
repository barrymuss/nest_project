import React from 'react';
import { useRouter } from 'next/router';

import Button from 'components/button';
import styles from 'styles/components/element/menu.module.css';

const Menu = ({ data, className }) => {
	const router = useRouter();

	const handleRoute = (route, section) => {
		if (router.pathname == '/project/') {
			router.push(`${route}#${section}`);
		} else {
			router.push('*');
		}
	};

	return (
		<div className={`${styles['layout-menu']} ${className}`}>
			<div className={styles['mobile-menu']}>test</div>
			{data &&
				data.map((item, index) => {
					return (
						<Button
							type='text-green'
							className={`${styles['menu-button']} underline underline-offset-8 mr-3`}
							key={index}
							onClick={() => router.push(`${item.path}#${item.section}`)}
						>
							{item.label}
						</Button>
					);
				})}
		</div>
	);
};

export default Menu;
