import React from 'react';
import Image from 'next/image';
import { Section, Jumbotron, Card } from 'components';

import photos from 'assets/pic.png';
import styles from 'styles/components/layout/sectionProject.module.css';

const SectionProject = ({ posts, id, className, data, ...props }) => {
	return (
		<Section id={id} className={`${styles['section-project']} ${className}`} {...props}>
			<Jumbotron label='project' title='Latest Project'>
				<div className={styles['project-row']}>
					{/* <div className={styles['main']}>
						<Card
							type='vertical'
							image={photos}
							title='Noteworthy technology acquisitions 2021'
							subtitle='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
						/>
					</div> */}
					{/* <div className={styles['mini']}> */}
					{data
						? data.map((item) => {
								return (
									<Card
										className={styles['project-item']}
										key={item.slug}
										image={photos}
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
