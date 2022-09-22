import React from 'react';
import Image from 'next/image';
import { Section, Jumbotron } from '@components';

import picHead from '@assets/pic-head.png';
import styles from '@styles/components/layout/sectionHead.module.css';

const SectionHead = ({ id, className, projectClick, storyClick, ...props }) => {
	return (
		<Section id={id} className={`${styles['section-head']} ${className}`} {...props}>
			<Jumbotron
				type={'dark'}
				className={styles['info']}
				jumboFoot
				label='intoduction'
				title="Hello, i'm UI/UX Designer & UI Engineer, based in Indonesia"
				subtitle='high experience in dashboard design and develop ui template with angular and react'
				projectClick={projectClick}
				storyClick={storyClick}
			/>
			<div className={styles['extra']}>
				<div className={styles['image-wrap']}>
					<Image src={picHead} objectFit='cover' alt='pic_head' />
				</div>
			</div>
		</Section>
	);
};

export default SectionHead;
