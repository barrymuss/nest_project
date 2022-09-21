import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from 'styles/components/element/card.module.css';

import { Button } from 'components';

const Card = ({ type, className, image, title, subtitle, slug }) => {
	switch (type) {
		case 'vertical':
			return (
				<div className={`${styles['card-vertical']} lg:h-full xl:h-full ${className}`}>
					<a className={styles['card-image']}>
						<Image src={image} objectFit='cover' alt='cardimage' />
					</a>
					<div className={styles['card-info']}>
						<h5 className={styles['info-title']}>{title}</h5>
						<p className={styles['info-subtitle']}>{subtitle}</p>
						<Link href='/project/[slug]' as={`/project/${slug}`}>
							<a className='text-blue-500 mt-4 mb-2 block'>Read more</a>
						</Link>
					</div>
				</div>
			);
		default:
			return (
				<div className={`${styles['card']} ${className}`}>
					<div className={styles['card-image']}>
						<Image src={image} objectFit='contain' alt='cardimage' />
					</div>
					<div className={styles['card-info']}>
						<h5 className={styles['info-title']}>{title}</h5>
						<p className={styles['info-subtitle']}>{subtitle}</p>
						<Link href='/project/[slug]' as={`/project/${slug}`}>
							<a className='text-blue-500 mt-4 mb-2 block'>Read more</a>
						</Link>
					</div>
				</div>
			);
	}
};

export default Card;
