//	Constant Imports
import { ScaleFormatRegex } from '@/constants/regex';

//	Helper Imports
import { validateCSSValue } from '@/helpers';

//	Type Imports
import type * as Stitches from '@stitches/react';

/**
 * Stitches utility function which combines margin-top and margin-bottom properties into one declaration
 * 
 * @param		{PropertyValue}		value	The value being set as the vertical margin
 * @returns		{CSS}						The final computed style
 */
const my = (value: Stitches.PropertyValue<'margin'>) => validateCSSValue(
	value as unknown as string,
	(value: string) => {

		//	Declare output css
		const output: Stitches.CSS = {
			marginTop		: value,
			marginBottom	: value,
		};

		//	Return vertical margins
		return output;

	},
	(error: string) => {

		//	Log errors
		console.error(error);

		//	If there was an error, return no margins
		return {
			marginTop		: 0,
			marginBottom	: 0,
		};

	},
	ScaleFormatRegex,
);

//	Exports
export default my;
