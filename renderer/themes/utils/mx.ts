//	Constant Imports
import { ScaleFormatRegex } from '@/constants/regex';

//	Helper Imports
import { validateCSSValue } from '@/helpers';

//	Type Imports
import type * as Stitches from '@stitches/react';

//  Declare function used to apply horizontal margin styles
const mx = (value: Stitches.PropertyValue<'margin'>) => validateCSSValue(
	value as unknown as string,
	(value: string) => {

		//	Declare output css
		const output: Stitches.CSS = {
			marginLeft		: value,
			marginRight		: value,
		};

		//	Return horizontal margins
		return output;

	},
	(error: string) => {

		//	Log errors
		console.error(error);

		//	If there was an error, return no margins
		return {
			marginLeft		: 0,
			marginRight		: 0,
		};

	},
	ScaleFormatRegex,
);

//	Exports
export default mx;
