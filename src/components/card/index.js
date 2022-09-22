import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from 'styles/components/element/card.module.css';

import { Button } from 'components';

const Card = ({ type, className, image, title, subtitle, slug }) => {
	switch (type) {
		case 'postcard':
			return (
				<div className={`${styles['postcard']}  ${className}`}>
					<div className='px-6'>
						<div className={styles['image-postcard']}>
							<Image src={image} objectFit='contain' layout='responsive' alt='Room Image' />
						</div>

						<div className={styles['info-postcard']}>
							<div className={styles['info-title']}>{title}</div>
							<div className={styles['info-subtitle']}>{subtitle}</div>
							<div className='flex items-center justify-center'>
								<Link href='/[slug]' as={`/${slug}`} passHref>
									<Button solid>Read more</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			);
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
