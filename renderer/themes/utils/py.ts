//	Constant Imports
import { ScaleFormatRegex } from '@/constants/regex';

//	Helper Imports
import { validateCSSValue } from '@/helpers';

//	Type Imports
import type * as Stitches from '@stitches/react';

//  Declare function used to apply vertical padding styles
const my = (value: Stitches.PropertyValue<'padding'>) => validateCSSValue(
	ScaleFormatRegex,
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
);

//	Exports
export default my;
