import React from 'react';
import styles from 'styles/components/element/section.module.css';

const Section = ({ id, className, children }) => {
	return (
		<section id={id} className={`${styles['section']} ${className}`}>
			{children}
		</section>
	);
};

export default Section;
