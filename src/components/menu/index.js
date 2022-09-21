import React from 'react';
import { useRouter } from 'next/router';

import Button from 'components/button';
import styles from 'styles/components/element/menu.module.css';

const Menu = ({ data, className }) => {
	const router = useRouter();

	const handleRoute = (route, section) => {
		if (route != '') {
			router.push(`${route}#${section}`);
		} else {
			router.push('*');
		}
	};

	return (
		<div className={`${styles['layout-menu']} ${className}`}>
			{data &&
				data.map((item, index) => {
					return (
						<Button className={styles['menu-button']} key={index} onClick={() => router.push(`${item.path}`)}>
							{item.label}
						</Button>
					);
				})}
		</div>
	);
};

export default Menu;
