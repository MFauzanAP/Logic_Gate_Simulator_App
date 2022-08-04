//	Constant Imports
import { ScaleFormatRegex } from '@/constants/regex';

//	Helper Imports
import { validateCSSValue } from '@/helpers';

//	Type Imports
import type * as Stitches from '@stitches/react';

/**
 * Stitches utility function which combines padding-left and padding-right properties into one declaration
 * 
 * @param		{PropertyValue}		value	The value being set as the horizontal padding
 * @returns		{CSS}						The final computed style
 */
const px = (value: Stitches.PropertyValue<'padding'>) => validateCSSValue(
	value as unknown as string,
	(value: string) => {

		//	Declare output css
		const output: Stitches.CSS = {
			paddingLeft		: value,
			paddingRight	: value,
		};

		//	Return horizontal paddings
		return output;

	},
	(error: string) => {

		//	Log errors
		console.error(error);

		//	If there was an error, return no paddings
		return {
			paddingLeft		: 0,
			paddingRight	: 0,
		};

	},
	ScaleFormatRegex,
);

//	Exports
export default px;
