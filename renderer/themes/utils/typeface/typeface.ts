//	Imports
import validate from './validation';
import typefaces from '@/themes/tokens/typefaces';
import { nameRegex, sizeRegex } from './constants';

//  Declare function used to apply typeface styles
const typeface = (token: string) => validate(
	token,
	(token: string) => {

		//	Break down token into typeface name and size
		const name = token.match(nameRegex)![0];
		const size = token.match(sizeRegex)![0];

		//	Return typeface based on token
		return typefaces[name][size];

	},
	(error: string) => {

		//	Log errors
		console.error(error);

		//	If there was an error, return body 300
		return typefaces.body[300];

	},
);

//	Exports
export default typeface;
