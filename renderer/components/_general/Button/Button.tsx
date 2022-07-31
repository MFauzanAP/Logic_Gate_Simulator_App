//	Package Imports
import React from 'react';

//	Component Imports
import Icon from '@/components/_general/Icon';

//	Helper Imports
import { composeButtonLabel } from './helpers';

//	Style Imports
import { ButtonContainer, ButtonLabel } from './styles';

//	Type Imports
import type Props from './props';

//	Declare component
const Button = ({
	as,
	label,
	startIcon,
	endIcon,
	children,
	labelCss,
	startIconCss,
	endIconCss,
	href,
	...props
}: Props) => {

	//	Compose button label
	const buttonLabel = composeButtonLabel({ label, children });

	//	Declare button content
	const buttonContent = (
		<>

			{/* Start Icon */}
			{startIcon && typeof startIcon !== 'string' && React.cloneElement(startIcon as any, startIconCss && { css: startIconCss })}
			{typeof startIcon === 'string' && <Icon name={startIcon} width={'$space2'} height={'$space2'} thickness={2} css={startIconCss} />}

			{/* Label */}
			{buttonLabel !== '' && <ButtonLabel css={labelCss}>{buttonLabel}</ButtonLabel>}

			{/* End Icon */}
			{endIcon && typeof endIcon !== 'string' && React.cloneElement(endIcon as any, endIconCss && { css: endIconCss })}
			{typeof endIcon === 'string' && <Icon name={endIcon} width={'$space2'} height={'$space2'} thickness={2} css={endIconCss} />}

		</>
	);

	//	Return component jsx
	return (
		as === 'a'
			? <a href={href}><ButtonContainer type={'button'} {...props}>{buttonContent}</ButtonContainer></a>
			: <ButtonContainer type={'button'} {...props}>{buttonContent}</ButtonContainer>
	);

};

//	Set default props
Button.defaultProps = {
	as				: 'button',
	label			: 'Button',
	startIconCss	: undefined,
	endIconCss		: undefined,
};

//  Exports
export default Button;
