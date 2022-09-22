import React from 'react';
import { useRouter } from 'next/router';
import { SectionHead, SectionAbout, SectionProject, SectionContact } from 'modules';
import getPosts from 'helpers/getPosts';

const Home = ({ posts }) => {
	const router = useRouter();

	const handleProject = (section) => {
		router.push(`#${section}`);
	};

	return (
		<div>
			<SectionHead
				id='head'
				projectClick={() => handleProject('portfolio')}
				storyClick={() => handleProject('about')}
			/>
			<SectionAbout id='about' />
			<SectionContact id='contact' />
			<SectionProject id='portfolio' data={posts} />
		</div>
	);
};
export default Home;

export const getStaticProps = () => {
	const posts = getPosts();

	return {
		props: {
			posts,
		},
	};
};
