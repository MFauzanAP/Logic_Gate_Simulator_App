//  Package Imports
import type { AppProps } from 'next/app';

/**
 * Used by NextJS to initialize pages
 * Can be modified to inject additional data into pages or apply global CSS
 */
const Application = ({ Component, pageProps }: AppProps) => {

	//	Return jsx
	return <Component {...pageProps} />;

};

//  Exports
export default Application;
