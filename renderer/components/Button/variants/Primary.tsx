//	Component Imports
import Button from '../Button';

//	Type Imports
import type ButtonProps from '../props';

/**
 * Primary variant of the default button.
 * This variant is mainly used as a call to action.
 * 
 * @example
 * <PrimaryButton />
 */
const Primary = (props: ButtonProps) => (
	<Button
		shape		= {'pill'}
		css			= {{
			backgroundColor	: '$purple400',
			stroke			: '$text100',
		}}
		labelCss	= {{
			color			: '$text100',
		}}
		{...props}
	/>
);

//  Exports
export default Primary;
