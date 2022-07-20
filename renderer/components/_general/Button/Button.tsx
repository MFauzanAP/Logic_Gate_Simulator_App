//	Package Imports
import React from 'react';

//	Helper Imports
import { composeButtonLabel } from './helpers';

//	Style Imports
import { ButtonContainer, ButtonLabel } from './styles';

//	Type Imports
import type Props from './props';

//	Declare component
const Button = ({ label, icon, iconPlacement, children, labelCss, ...props }: Props) => {

	//	Compose button label
	const buttonLabel = composeButtonLabel({ label, children });

	//	Return component jsx
	return (
		<ButtonContainer type='button' {...props}>

			{/* Left Icon */}
			{iconPlacement === 'left' && icon !== undefined && icon}

			{/* Label */}
			{buttonLabel !== '' && <ButtonLabel css={labelCss}>{buttonLabel}</ButtonLabel>}

			{/* Right Icon */}
			{iconPlacement === 'right' && icon !== undefined && icon}

		</ButtonContainer>
	);

};

//	Set default props
Button.defaultProps = {
	label			: 'Button',
	iconPlacement	: 'right',
};

//  Exports
export default Button;
