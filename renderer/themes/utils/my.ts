//	Constant Imports
import { ScaleFormatRegex } from '@/constants/regex';

//	Helper Imports
import { validateCSSValue } from '@/helpers';

//	Type Imports
import type * as Stitches from '@stitches/react';

//  Declare function used to apply vertical margin styles
const my = (value: Stitches.PropertyValue<'margin'>) => validateCSSValue(
	ScaleFormatRegex,
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
);

//	Exports
export default my;
