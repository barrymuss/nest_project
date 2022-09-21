import React from 'react';
import Image from 'next/image';
import { Menu } from 'components';
import styles from 'styles/components/element/head.module.css';
import { useRouter } from 'next/router';

const Header = ({ className, headLogo, menuData }) => {
	const router = useRouter();

	return (
		<div className={`${styles['header']} ${className}`}>
			<div className={styles['header-item']} style={{ cursor: 'pointer' }} onClick={() => router.push('/home')}>
				<Image src={headLogo} width={45} height={45} alt='mainLogo' />
			</div>
			<div className={styles['header-item']}>
				<Menu data={menuData} />
			</div>
		</div>
	);
};

export default Header;
