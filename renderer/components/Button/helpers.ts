//	Animation Imports
import { ButtonAnimations } from './animations';

//	Type Imports
import type { ComposeAnimationsProps, ComposeButtonLabelProps, ComposeIconColorProps } from './types';

/**
 * Composes button content from its children and label props.
 * 
 * Prioritises children over the label prop.
 * 
 * @param 	{string} 			label		The button label in string form
 * @param 	{ComponentChildren}	children	The button label in component children form
 * @returns	{string}						Button content from either the label prop or component children
 */
const composeButtonLabel = ({ label, children }: ComposeButtonLabelProps) => {

	//	Prioritise children over prop
	if (typeof children === 'string') return children;

	//	If children is not of type string then return prop if it exists
	if (label) return label;

	//	Else return an empty string
	return '';

};

/**
 * Composes icon color from the computed color property of the button
 * 
 * @param 	{MutableRefObject} 	ref		Reference to the button component
 * @returns	{string}					Icon color as a string
 */
const composeIconColor = ({ ref }: ComposeIconColorProps) => {

	//	Make sure this function is called on the client and not on the server
	if (typeof window === 'undefined') return undefined;

	//	Return computed color
	return window.getComputedStyle(ref.current).color;

};

/**
 * Composes a dynamic animation object
 * 
 * @param 	{MutableRefObject} 	ref		Reference to the button component
 * @returns	{Object}					Final animations object
 */
const composeButtonAnimations = ({ ref }: ComposeAnimationsProps) => {

	//	Make sure this function is called on the client and not on the server
	if (typeof window === 'undefined') return undefined;

	//	Extract computed styles from the button
	const { backgroundColor } = window.getComputedStyle(ref.current);

	//	Return computed color
	return ButtonAnimations({ backgroundColor });

};

//	Exports
export {
	composeButtonLabel,
	composeIconColor,
	composeButtonAnimations,
};
