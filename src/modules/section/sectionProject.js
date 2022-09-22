import React from 'react';
import Image from 'next/image';
import { Section, Jumbotron, Card } from '@components';

import styles from '@styles/components/layout/sectionProject.module.css';

import rsi from '@assets/rsi.png';
import royston from '@assets/royston-min.png';
import biofarma from '@assets/biofarma.png';

const SectionProject = ({ posts, id, className, data, ...props }) => {
	return (
		<Section id={id} className={`${styles['section-project']} ${className}`} {...props}>
			<Jumbotron label='project' title='Latest Project'>
				<div className={styles['project-row']}>
					{data
						? data.map((item) => {
								return (
									<Card
										type='postcard'
										className={styles['project-item']}
										key={item.data.id}
										image={item.data.id == 1 ? rsi : item.data.id == 2 ? royston : biofarma}
										title={item.data.title}
										subtitle={item.data.description}
										slug={item.slug}
									/>
								);
						  })
						: []}
					{/* </div> */}
				</div>
			</Jumbotron>
		</Section>
	);
};

export default SectionProject;
