import { Layout, Section } from 'components';
import { useRouter } from 'next/router';
import Logo from 'assets/logo.png';
import 'styles/globals.css';
import Post from './[slug]';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	if (router.pathname == '/[slug]/') {
		<Layout logo={Logo}>
			<div style={wrapper}>
				<Post {...pageProps} />
			</div>
		</Layout>;
	} else {
		return (
			<Layout logo={Logo}>
				<Component {...pageProps} />
			</Layout>
		);
	}
}

const wrapper = {
	padding: '75px calc(5% - 18px)',
	width: ' 100%',
	height: ' 100vh',
	minHeight: '100%',
	border: '1px solid black',
	background: '#FDF0E9',
};

export default MyApp;
