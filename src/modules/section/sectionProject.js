import React from 'react';
import Image from 'next/image';
import { Section, Jumbotron, Button } from 'components';

import photos from 'assets/pic.png';
import styles from 'styles/components/layout/sectionProject.module.css';

const SectionProject = ({ id, className, ...props }) => {
	return <Section id={id} className={`${styles['section-project']} ${className}`} {...props}></Section>;
};

export default SectionProject;
