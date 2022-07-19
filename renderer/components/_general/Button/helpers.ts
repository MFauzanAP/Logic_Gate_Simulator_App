//	Type Imports
import type { ComponentChildren } from '@/types';

//	Declare function to compose button label
const composeButtonLabel = (prop: string, children: ComponentChildren) => {

	//	Prioritise children over prop
	if (typeof children === 'string') return children;

	//	If children is not of type string then return prop if it exists
	if (prop) return prop;

	//	Else return an empty string
	return '';

};

//	Exports
export {
	composeButtonLabel,
};
