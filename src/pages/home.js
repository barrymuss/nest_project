import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';

import { Section, Button } from 'components';
import { SectionHead, SectionAbout, SectionProject } from 'modules';

const Home = () => {
	const router = useRouter();

	const handleProject = (section) => {
		router.push(`#${section}`);
	};

	return (
		<div>
			<SectionHead id='head' storyClick={() => handleProject('about')} />
			<SectionAbout id='about' />
			<SectionProject id='project' />
		</div>
	);
};
export default Home;
