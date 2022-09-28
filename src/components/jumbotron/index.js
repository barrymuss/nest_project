import React from 'react';
import { Button } from '@components';
import styles from '@styles/components/element/jumbotron.module.css';

const Jumbotron = ({ type, className, label, title, subtitle, jumboFoot, projectClick, storyClick, children }) => {
	switch (type) {
		case 'dark':
			return (
				<div className={`${styles['jumbotron-dark']} ${className}`}>
					<div className={styles['inner-jumbo']}>
						<div className={styles['jumbo-info']}>
							<div className={`${styles['info-label-dark']}`}>{label}</div>
							<div className={styles['info-title']}>{title}</div>
							<div className={`${styles['info-subtitle']}`}>{subtitle}</div>
						</div>
						<div className={styles['jumbo-foot']}>
							{jumboFoot ? (
								<>
									<Button type='green' className={styles['foot-button']} onClick={projectClick}>
										My Project
									</Button>
									<Button type='text-green' className={styles['foot-button']} onClick={storyClick}>
										My Story
									</Button>
								</>
							) : (
								children
							)}
						</div>
					</div>
				</div>
			);
		default:
			return (
				<div className={`${styles['jumbotron']} ${className}`}>
					<div className={styles['inner-jumbo']}>
						<div className={styles['jumbo-info']}>
							<div className={`${styles['info-label']}`}>{label}</div>
							<div className={styles['info-title']}>{title}</div>
							<div className={`${styles['info-subtitle']}`}>{subtitle}</div>
						</div>

						<div className={styles['jumbo-foot']}>{children}</div>
					</div>
				</div>
			);
	}
};

export default Jumbotron;
