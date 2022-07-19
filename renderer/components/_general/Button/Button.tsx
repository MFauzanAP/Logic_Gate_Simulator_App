//	Package Imports
import React from 'react';

//	Helper Imports
import { composeButtonLabel } from './helpers';

//	Style Imports
import { ButtonContainer, ButtonLabel } from './styles';

//	Type Imports
import type Props from './props';

//	Declare component
const Button = ({ label, icon, children, labelCss, ...props }: Props) => {

	//	Compose button label
	const buttonLabel = composeButtonLabel(label, children);

	//	Return component jsx
	return (
		<ButtonContainer type='button' {...props}>

			{/* Label */}
			{buttonLabel !== '' && <ButtonLabel css={labelCss}>{buttonLabel}</ButtonLabel>}

		</ButtonContainer>
	);

};

//	Set default props
Button.defaultProps = {
	label			: 'Button',
};

//  Exports
export default Button;
