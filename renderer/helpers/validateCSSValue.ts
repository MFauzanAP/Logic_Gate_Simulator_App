//	Type Imports
import type * as Stitches from '@stitches/react';

//	Declare validation function
const validate = (value: string, callback: (value: string) => Stitches.CSS, failed: (error: string) => Stitches.CSS, formatRegex?: RegExp) => {

	//	Check for runtime errors
	try {

		//	Make sure value matches format, if not then return an error
		if (formatRegex && !value.match(formatRegex)) return failed('Failed to apply styling, value does not match format');

		//	If nothing fails, then continue to function
		return callback(value);

	} catch (error) {

		//	If typeface does not exist then return error
		return failed(`Failed to apply styling, a runtime error occured! ${error}`);

	}

};

//  Exports
export default validate;
