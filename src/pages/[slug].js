// import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import getPost from '@helpers/getPost';
import getPosts from '@helpers/getPosts';
import { serialize } from 'next-mdx-remote/serialize';
import { Fragment } from 'react';

import { Jumbotron, Button, Section } from '@components';

import styles from '@styles/components/layout/slug.module.css';

const Post = ({ data, content }) => {
	const router = useRouter();
	const handleLink = (link) => {
		window.open(`${link}`, '_blank');
	};

	return (
		<Fragment>
			<Section className='grid grid-cols-7 gap-4'>
				<div className='col-start-3 col-span-4'>
					<Jumbotron id={data.id} label={data.description} title={data.title} subtitle={data.description}>
						{/* <Image src={`${data.image}`} height={200} width={200} /> */}
						<div className={styles['content-slug']}>
							{data.story}
							<div className={styles['slug-button']}>
								<Button dashed className='mr-4' onClick={() => router.push('/home#portfolio')}>
									My Project
								</Button>
								{data.link != null && (
									<Button solid onClick={() => handleLink(data.link)}>
										Website
									</Button>
								)}
							</div>
						</div>
						{/* <MDXRemote {...content} /> */}
					</Jumbotron>
				</div>
			</Section>
		</Fragment>
	);
};

export default Post;

export const getStaticPaths = async () => {
	const posts = await getPosts();
	const paths = posts.map((post) => ({ params: { slug: post.slug } }));
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const post = await getPost(params.slug);
	const mdxSource = await serialize(post.content);
	return {
		props: {
			data: post.data,
			content: mdxSource,
		},
	};
};
