//	Package Imports
import React from 'react';

//	Component Imports
import Icon from '@/components/_general/Icon';

//	Helper Imports
import { composeButtonLabel } from './helpers';

//	Style Imports
import { ButtonContainer, ButtonLabel, ButtonLink } from './styles';

//	Type Imports
import type Props from './props';

/**
 * Renders as a `<button>` by default but can be changed to render as an `<a>` via the `as` prop.
 * The list of props supported is shown below. Any additional props will be passed to the root container of `<Button>`.
 */
const Button = ({
	as,
	label,
	href,
	disabled,
	startIcon,
	endIcon,
	children,
	labelCss,
	startIconCss,
	endIconCss,
	...props
}: Props) => {

	//	Compose button label
	const buttonLabel = composeButtonLabel({ label, children });

	//	Declare button content
	const buttonContent = (
		<>

			{/* Start Icon */}
			{startIcon !== undefined && typeof startIcon !== 'string' && React.cloneElement(startIcon as any, startIconCss && { css: startIconCss })}
			{typeof startIcon === 'string' && <Icon name={startIcon} size={'$space2'} thickness={2} css={startIconCss} />}

			{/* Label */}
			{buttonLabel !== '' && <ButtonLabel css={labelCss} disabled={disabled}>{buttonLabel}</ButtonLabel>}

			{/* End Icon */}
			{endIcon !== undefined && typeof endIcon !== 'string' && React.cloneElement(endIcon as any, endIconCss && { css: endIconCss })}
			{typeof endIcon === 'string' && <Icon name={endIcon} size={'$space2'} thickness={2} css={endIconCss} />}

		</>
	);

	//	Return component jsx
	return (
		as === 'a'
			? <ButtonLink href={href}><ButtonContainer type={'button'} disabled={disabled} {...props}>{buttonContent}</ButtonContainer></ButtonLink>
			: <ButtonContainer type={'button'} disabled={disabled} {...props}>{buttonContent}</ButtonContainer>
	);

};

//	Set default props
Button.defaultProps = {
	as				: 'button',
	label			: 'Button',
	disabled		: false,
	shape			: 'block',
	startIconCss	: undefined,
	endIconCss		: undefined,
};

//  Exports
export default Button;
