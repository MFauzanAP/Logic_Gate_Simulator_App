//	Component Imports
import Button from '../Button';

//	Style Imports
import { DarkTheme } from '@/themes';

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
		shape			= {'pill'}
		css				= {{
			backgroundColor	: '$purple400',
		}}
		labelProps		= {{
			css				: {
				color			: '$text100',

				[`.${DarkTheme} &`]	: {
					color			: '$text600',
				},
			},
		}}
		//	@ts-ignore
		startIconProps	= {{
			color				: '$text100',
		}}
		//	@ts-ignore
		endIconProps	= {{
			color				: '$text100',
		}}
		{...props}
	/>
);

//  Exports
export default Primary;
