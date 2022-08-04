//	Constant Imports
import { ScaleFormatRegex } from '@/constants/regex';

//	Helper Imports
import { validateCSSValue } from '@/helpers';

//	Type Imports
import type * as Stitches from '@stitches/react';

/**
 * Stitches utility function which combines padding-top and padding-bottom properties into one declaration
 * 
 * @param		{PropertyValue}		value	The value being set as the vertical padding
 * @returns		{CSS}						The final computed style
 */
const py = (value: Stitches.PropertyValue<'padding'>) => validateCSSValue(
	value as unknown as string,
	(value: string) => {

		//	Declare output css
		const output: Stitches.CSS = {
			paddingTop		: value,
			paddingBottom	: value,
		};

		//	Return vertical paddings
		return output;

	},
	(error: string) => {

		//	Log errors
		console.error(error);

		//	If there was an error, return no paddings
		return {
			paddingTop		: 0,
			paddingBottom	: 0,
		};

	},
	ScaleFormatRegex,
);

//	Exports
export default py;
