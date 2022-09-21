import 'styles/globals.css';
import { Layout } from 'components';
import Logo from 'assets/logo.png';

function MyApp({ Component, pageProps }) {
	return (
		<Layout logo={Logo}>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
