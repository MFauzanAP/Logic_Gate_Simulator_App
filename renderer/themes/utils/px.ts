//	Constant Imports
import { ScaleFormatRegex } from '@/constants/regex';

//	Helper Imports
import { validateCSSValue } from '@/helpers';

//	Type Imports
import type * as Stitches from '@stitches/react';

//  Declare function used to apply horizontal padding styles
const mx = (value: Stitches.PropertyValue<'padding'>) => validateCSSValue(
	ScaleFormatRegex,
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
);

//	Exports
export default mx;
