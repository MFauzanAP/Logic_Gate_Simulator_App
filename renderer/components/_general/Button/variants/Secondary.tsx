//	Component Imports
import Button from '../Button';

//	Type Imports
import type ButtonProps from '../props';

/**
 * Secondary variant of the default button.
 * This variant is mainly used as a secondary call to action.
 * 
 * @example
 * <SecondaryButton />
 */
const Secondary = (props: ButtonProps) => (
	<Button
		shape		= {'pill'}
		css			= {{
			backgroundColor	: '$background100',
			border			: '2px solid $purple400',
			stroke			: '$purple400',
		}}
		labelCss	= {{
			color			: '$purple400',
			fontWeight		: '700',
		}}
		{...props}
	/>
);

//  Exports
export default Secondary;
