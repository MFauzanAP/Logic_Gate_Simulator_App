//	Package Imports
import React from 'react';

//	Helper Imports
import { composeButtonLabel } from './helpers';

//	Style Imports
import { ButtonContainer, ButtonLabel } from './styles';

//	Type Imports
import type Props from './props';

//	Declare component
const Button = ({ label, icon, iconPlacement, children, labelCss, iconCss, ...props }: Props) => {

	//	Compose button label
	const buttonLabel = composeButtonLabel({ label, children });

	//	Return component jsx
	return (
		<ButtonContainer type='button' {...props}>

			{/* Left Icon */}
			{iconPlacement === 'left' && icon !== undefined && React.cloneElement(icon as any, iconCss && { css: iconCss })}

			{/* Label */}
			{buttonLabel !== '' && <ButtonLabel css={labelCss}>{buttonLabel}</ButtonLabel>}

			{/* Right Icon */}
			{iconPlacement === 'right' && icon !== undefined && React.cloneElement(icon as any, iconCss && { css: iconCss })}

		</ButtonContainer>
	);

};

//	Set default props
Button.defaultProps = {
	as				: 'button',
	label			: 'Button',
	iconPlacement	: 'right',
};

//  Exports
export default Button;
