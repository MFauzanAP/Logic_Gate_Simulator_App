//	Animation Imports
import { PrimaryButtonAnimations, PrimaryButtonLabelAnimations } from './animations';

//	Component Imports
import Button from '../../Button';

//	Style Imports
import { PrimaryButtonContainer, PrimaryButtonLabel } from './styles';

//	Type Imports
import type ButtonProps from '../../props';

/**
 * Primary variant of the default button.
 * This variant is mainly used as a call to action.
 * 
 * @example
 * <PrimaryButton />
 */
const Primary = ({
	labelProps,
	...props
}: ButtonProps) => (
	<Button

		/* Appearance */
		as				= {PrimaryButtonContainer}

		/* Animations */
		animate			= {props.disabled ? 'disabled' : 'initial'}
		whileHover		= {'hover'}
		whileTap		= {'tap'}
		variants		= {PrimaryButtonAnimations}

		/* Passed Props */
		labelProps		= {{
			as				: PrimaryButtonLabel,
			variants		: PrimaryButtonLabelAnimations,

			...labelProps,
		}}

		/* Other Props */
		{...props}

	/>
);

//  Exports
export default Primary;
