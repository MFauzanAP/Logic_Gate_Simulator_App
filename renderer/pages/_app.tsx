//  Package Imports
import type { AppProps } from 'next/app';

//  Declare app component
const Application = ({ Component, pageProps }: AppProps) => {

	//	Return jsx
	return <Component {...pageProps} />;

};

//  Exports
export default Application;
