//	Type Imports
import type { HelperFunctionProps } from './types';

//	Declare function to compose button label
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
