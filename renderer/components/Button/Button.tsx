//	Package Imports
import React from 'react';

//	Component Imports
import Icon from '@/components/Icon';

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
	labelProps,
	startIconProps,
	endIconProps,
	...props
}: Props) => {

	//	Compose button label
	const buttonLabel = composeButtonLabel({ label, children });

	//	Declare button content
	const buttonContent = (
		<>

			{/* Start Icon */}
			{startIcon && <Icon name={startIcon} size={'$space2'} thickness={2} {...startIconProps} />}

			{/* Label */}
			{buttonLabel !== '' && <ButtonLabel disabled={disabled} {...labelProps}>{buttonLabel}</ButtonLabel>}

			{/* End Icon */}
			{endIcon && <Icon name={endIcon} size={'$space2'} thickness={2} {...endIconProps} />}

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
};

//  Exports
export default Button;
