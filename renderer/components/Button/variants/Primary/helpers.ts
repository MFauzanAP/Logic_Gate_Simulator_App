//	Animation Imports
import { PrimaryButtonAnimations } from './animations';

//	Type Imports
import type { ComposeAnimationsProps } from '../../types';

/**
 * Composes a dynamic animation object
 * 
 * @param 	{MutableRefObject} 	ref		Reference to the button component
 * @returns	{Object}					Final animations object
 */
const composePrimaryButtonAnimations = ({ ref }: ComposeAnimationsProps) => {

	//	Make sure this function is called on the client and not on the server
	if (typeof window === 'undefined') return undefined;

	//	Extract computed styles from the button
	const { backgroundColor } = window.getComputedStyle(ref.current.parentElement);

	//	Return computed color
	return PrimaryButtonAnimations({ backgroundColor });

};

//	Exports
export {
	composePrimaryButtonAnimations,
};
