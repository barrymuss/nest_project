import React from 'react';
import Image from 'next/image';
import { Section, Jumbotron, Button, Icon } from 'components';

import angular from 'assets/angular-icon.svg';
import reactlogo from 'assets/react.svg';
import htmllogo from 'assets/html-5.svg';

import photos from 'assets/pic.png';
import styles from 'styles/components/layout/sectionAbout.module.css';

const SectionAbout = ({ id, className, ...props }) => {
	const logoList = [
		{
			id: 'angular',
			image: angular,
		},
		{
			id: 'react',
			image: reactlogo,
		},
		{
			id: 'html',
			image: htmllogo,
		},
	];

	const clickHandle = () => {
		// document.location.href = 'https://stackoverflow.com/';
		window.open('https://www.linkedin.com/in/barry-musaddiq-1547a3a0/', '_blank');
	};

	return (
		<Section id={id} className={`${styles['section-about']} ${className}`} {...props}>
			<div className={styles['info']}>
				<Jumbotron
					label='about me'
					title='Barry Musaddiq'
					subtitle="I'm motivated to develop my skill and grow profesionally. with two years experience as UI UX designer and UI Engineer, i'm very confident of my skill in design, prototyping, and testing to come up with interesting ideas and usefull design."
				>
					<Button dashed className='mr-4'>
						My Project
					</Button>
					<Button solid className={styles['foot-button']} onClick={clickHandle}>
						Linkedin
					</Button>
				</Jumbotron>
			</div>
			<div className={styles['extra']}>
				<div className={styles['extra-image']}>
					<Image src={photos} objectFit='contain' alt='mainLogo' />
				</div>
			</div>
			{/* <div className={styles['foot']}>
				{logoList &&
					logoList.map((item) => {
						return (
							<div className={styles['foot-icon']} key={item.id}>
								<Image src={item.image} objectFit='contain' alt={item.id} />
							</div>
						);
					})}
			</div> */}
		</Section>
	);
};

export default SectionAbout;
