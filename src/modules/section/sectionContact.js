import React from 'react';

import { Section, Jumbotron, Icon } from 'components';

import styles from 'styles/components/layout/sectionContact.module.css';

const SectionContact = ({ id, className, ...props }) => {
	const iconSocial = [
		{
			type: 'linkedin',
			link: 'https://id.linkedin.com/in/barry-musaddiq-1547a3a0',
		},
		{
			type: 'github',
			link: 'https://github.com/barrymuss',
		},
		{
			type: 'behance',
			link: 'https://www.behance.net/barrymusaddiq',
		},
	];

	return (
		<Section id={id} className={`${styles['section-contact']} ${className}`} {...props}>
			<Jumbotron
				type={'dark'}
				className={styles['info']}
				label='Contact'
				title='Get in touch'
				subtitle="feel free to get in touch with me. i'm always open for new opportunities"
			>
				{iconSocial.map((icons) => {
					return (
						<>
							<Icon.Social
								className={styles['icon-contact']}
								type={icons.type}
								bgColor='#06D6A0'
								fgColor='transparent'
								height={40}
								width={40}
								key={icons.type}
								onClick={() => window.open(`${icons.link}`, '_blank')}
							/>
						</>
					);
				})}
			</Jumbotron>
			<div className={styles['extra']}></div>
		</Section>
	);
};

export default SectionContact;
