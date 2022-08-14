//	Type Imports
import type { MutableRefObject } from 'react';
import type { ComponentChildren } from '@/types';

//	Declare compose button label prop type
type ComposeButtonLabelProps = {
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

//	Declare compose icon color prop type
type ComposeIconColorProps = {
	/**
	 * Reference to the button component
	 * 
	 * @type {MutableRefObject}
	 */
	ref			: MutableRefObject<HTMLButtonElement>,
};

//	Declare compose animations prop type
type ComposeAnimationsProps = {
	/**
	 * Reference to the button component
	 * 
	 * @type {MutableRefObject}
	 */
	ref			: MutableRefObject<HTMLDivElement | HTMLButtonElement>,
};

//	Exports
export type {
	ComposeButtonLabelProps,
	ComposeIconColorProps,
	ComposeAnimationsProps,
};
