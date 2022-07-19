//	Constant Imports
import { TypefaceFormatRegex, TypefaceNameRegex, TypefaceSizeRegex } from '@/constants/regex';

//	Helper Imports
import { validateCSSValue } from '@/helpers';

//	Imports
import typefaces from '@/themes/tokens/typefaces';

//  Declare function used to apply typeface styles
const typeface = (token: string) => validateCSSValue(
	token,
	(token: string) => {

		//	Break down token into typeface name and size
		const name = token.match(TypefaceNameRegex)![0];
		const size = token.match(TypefaceSizeRegex)![0];
		
		//	Return typeface based on token
		return typefaces[name][size];

	},
	(error: string) => {

		//	Log errors
		console.error(error);
		
		//	If there was an error, return body 300
		return typefaces.body[300];

	},
	TypefaceFormatRegex,
);

//	Exports
export default typeface;
