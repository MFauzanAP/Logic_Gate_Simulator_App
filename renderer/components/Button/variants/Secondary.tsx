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
		}}
		labelProps	= {{
			css				: {
				color			: '$purple400',
				fontWeight		: '700',
			},
		}}
		//	@ts-ignore
		startIconProps	= {{
			color				: '$purple400',
		}}
		//	@ts-ignore
		endIconProps	= {{
			color				: '$purple400',
		}}
		{...props}
	/>
);

//  Exports
export default Secondary;
