//  Package Imports
import React from 'react';
import NextDocument, {
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';

//	Style Imports
import { LightTheme, getCssText } from '@/themes';

//	Declare document component
class Document extends NextDocument {

	//	Function called on render
	render () {

		//	Return jsx
		return (
			<Html style={{ fontSize: '62.5%' }} lang={'en'}>

				{/* Document Head */}
				<Head>

					{/* Import stitches styles */}
					<style
						id						= {'stitches'}
						dangerouslySetInnerHTML	= {{ __html: getCssText() }}
					/>

					{/* Import fonts */}
					<link rel={'preconnect'} href={'https://fonts.googleapis.com'} />
					<link rel={'preconnect'} href={'https://fonts.gstatic.com'} crossOrigin={'anonymous'} />
					<link rel={'stylesheet'} href={'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'} />

				</Head>

				{/* Document Body */}
				<body className={LightTheme}>

					{/* Main Components */}
					<Main />
					<NextScript />

				</body>

			</Html>
		);

	}

}

//  Exports
export default Document;
