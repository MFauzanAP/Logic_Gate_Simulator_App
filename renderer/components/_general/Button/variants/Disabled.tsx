//	Component Imports
import Button from '../Button';

//	Type Imports
import type ButtonProps from '../props';

/**
 * Disabled variant of the default button.
 * This variant is unclickable and greyed out.
 * 
 * @example
 * <DisabledButton />
 */
const Disabled = (props: ButtonProps) => (
	<Button
		disabled
		{...props}
	/>
);

//  Exports
export default Disabled;
