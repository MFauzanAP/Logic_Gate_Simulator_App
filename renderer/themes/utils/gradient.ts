//	Helper Imports
import { validateCSSValue } from '@/helpers';

//	Type Imports
import type * as Stitches from '@stitches/react';

//	Imports
import gradients from '@/themes/tokens/gradients';

/**
 * Stitches utility function used to apply gradient styles using either tokens or normal declarations
 * 
 * @param		{PropertyValue}		value	The value being set as the gradient
 * @returns		{CSS}						The final computed style of the gradient
 */
const gradient = (value: Stitches.PropertyValue<'backgroundImage'>) => validateCSSValue(
	value as unknown as string,
	(value: string) => {

		//	Declare final gradient value variable
		let finalValue = value;

		//	If passed value is a valid token then substitute it
		if (value[0] === '$') finalValue = gradients[value.slice(1)] as string;

		//	Return background image css
		return {
			backgroundImage		: finalValue,
		};

	},
	(error: string) => {

		//	Log errors
		console.error(error);

		//	If there was an error, return no styling
		return {};

	},
);

//	Exports
export default gradient;
