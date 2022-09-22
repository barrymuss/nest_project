import React from 'react';
import { useRouter } from 'next/router';

import Icon from 'components/icon';
import Button from 'components/button';
import styles from 'styles/components/element/menu.module.css';

const Menu = ({ data, className, mobileFunction }) => {
	const router = useRouter();

	return (
		<div className={`${styles['layout-menu']} ${className}`}>
			<div className={styles['mobile-menu']}>
				<Button solid onClick={mobileFunction}>
					<Icon type='menuIcon' height={30} width={30} color='06d6a0' />
				</Button>
			</div>
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

const VerticalMenu = ({ data, className }) => {
	const router = useRouter();

	return (
		<div className={`${styles['layout-menu-vertical']} ${className}`}>
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

Menu.Vertical = VerticalMenu;

export default Menu;
