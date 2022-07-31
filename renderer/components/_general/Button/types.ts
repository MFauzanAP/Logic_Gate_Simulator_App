//	Type Imports
import type { ComponentChildren } from '@/types';

//	Declare helper function prop type
type HelperFunctionProps = {
	/**
	 * The button label in text form
	 * 
	 * @type {string}
	 */
	label		: string,

	/**
	 * The button label in component children form
	 * 
	 * @type {ComponentChildren}
	 */
	children	: ComponentChildren,
};

//	Exports
export type {
	HelperFunctionProps,
};
