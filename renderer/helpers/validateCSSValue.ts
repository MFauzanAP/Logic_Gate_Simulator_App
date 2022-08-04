//	Type Imports
import type * as Stitches from '@stitches/react';

/**
 * Function used to validate CSS values and make sure they match a specific format
 * 
 * @param	{string}	value		CSS property value to validate
 * @param	{Function}	callback	Function that is called once the validation is complete
 * @param	{Function}	failed		Function that is called if the validation fails 
 * @param	{Regex}		formatRegex	Regex object used to validate the CSS value
 * @returns	{CSS}					CSS object containing the final computed value
 */
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
