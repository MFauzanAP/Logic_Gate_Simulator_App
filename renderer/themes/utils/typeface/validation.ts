//	Imports
import type * as Stitches from '@stitches/react';
import { formatRegex } from './constants';

//	Declare validation function
const validate = (token: string, callback: (token: string) => Stitches.CSS, failed: (error: string) => Stitches.CSS) => {

	//	Check for runtime errors
	try {

		//	Make sure token matches format, if not then return an error
		if (!token.match(formatRegex)) return failed('Failed to apply styling, token does not match format');

		//	If nothing fails, then continue to function
		return callback(token);

	} catch (error) {

		//	If typeface does not exist then return error
		return failed(`Failed to apply styling, a runtime error occured! ${error}`);

	}

};

//  Exports
export default validate;
