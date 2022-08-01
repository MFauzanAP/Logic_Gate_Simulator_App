//	Type Imports
import type { HelperFunctionProps } from './types';

/**
 * Composes button content from its children and label props.
 * 
 * Prioritises children over the label prop.
 * 
 * @param 	{string} 			label		The button label in string form
 * @param 	{ComponentChildren}	children	The button label in component children form
 * @returns	{string}						Button content from either the label prop or component children
 */
const composeButtonLabel = ({ label, children }: HelperFunctionProps) => {

	//	Prioritise children over prop
	if (typeof children === 'string') return children;

	//	If children is not of type string then return prop if it exists
	if (label) return label;

	//	Else return an empty string
	return '';

};

//	Exports
export {
	composeButtonLabel,
};
