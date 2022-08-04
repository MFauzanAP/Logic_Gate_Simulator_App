//	Animation Imports
import { SecondaryButtonAnimations } from './animations';

//	Component Imports
import Button from '../../Button';

//	Style Imports
import { SecondaryButtonContainer, SecondaryButtonLabel } from './styles';

//	Type Imports
import type ButtonProps from '../../props';

/**
 * Secondary variant of the default button.
 * This variant is mainly used as a secondary call to action.
 * 
 * @example
 * <SecondaryButton />
 */
const Secondary = ({
	labelProps,
	...props
}: ButtonProps) => (
	<Button

		/* Appearance */
		as				= {SecondaryButtonContainer}

		/* Animations */
		animate			= {props.disabled ? 'disabled' : 'initial'}
		whileHover		= {'hover'}
		whileTap		= {'tap'}
		variants		= {SecondaryButtonAnimations}

		/* Props */
		labelProps		= {{ as: SecondaryButtonLabel, ...labelProps }}

		/* Other Props */
		{...props}

	/>
);

//  Exports
export default Secondary;
