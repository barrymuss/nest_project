import React from 'react';
import { useRouter } from 'next/router';
import { PostCard } from 'components';
import { SectionHead, SectionAbout, SectionProject } from 'modules';
import getPosts from 'helpers/getPosts';

const Home = ({ posts }) => {
	const router = useRouter();

	const handleProject = (section) => {
		router.push(`#${section}`);
	};

	return (
		<div>
			<SectionHead id='head' projectClick={() => handleProject('project')} storyClick={() => handleProject('about')} />
			<SectionAbout id='about' />
			<SectionProject id='project' data={posts} />
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
