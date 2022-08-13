//	Package Imports
import React, { useEffect, useState, useRef } from 'react';

//	Component Imports
import Icon from '@/components/Icon';

//	Helper Imports
import { composeButtonLabel, composeIconColor } from './helpers';

//	Style Imports
import { ButtonContainer, ButtonLabel, ButtonLink } from './styles';

//	Type Imports
import type Props from './props';
import type { MutableRefObject } from 'react';

/**
 * Renders as a `<button>` by default but can be changed to render as an `<a>` via the `as` prop.
 * The list of props supported is shown below. Any additional props will be passed to the root container of `<Button>`.
 */
const Button = ({
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

	//	Create refs
	const ref = useRef() as MutableRefObject<HTMLButtonElement>;

	//	Create state variables
	const [ buttonLabel, setButtonLabel ] = useState('');
	const [ iconColor, setIconColor ] = useState('');

	//	Function called on load and whenever the label or children changes
	useEffect(() => {

		//	Compose button label and icon color
		setButtonLabel(composeButtonLabel({ label, children }));
		setIconColor(composeIconColor({ ref }));

	}, [ label, children ]);

	//	Declare button content
	const buttonContent = (
		<ButtonContainer
			ref			= {ref}
			type		= {'button'}
			round		= {buttonLabel === ''}
			disabled	= {disabled}
			{...props}
		>

			{/* Start Icon */}
			{startIcon && (
				<Icon
					name		= {startIcon}
					size		= {'$space2'}
					thickness	= {2}
					disabled	= {disabled}
					color		= {iconColor}
					{...startIconProps}
				/>
			)}

			{/* Label */}
			{buttonLabel !== '' && <ButtonLabel disabled={disabled} {...labelProps}>{buttonLabel}</ButtonLabel>}

			{/* End Icon */}
			{endIcon && (
				<Icon
					name		= {endIcon}
					size		= {'$space2'}
					thickness	= {2}
					disabled	= {disabled}
					color		= {iconColor}
					{...endIconProps}
				/>
			)}

			{/* Other Children */}
			{typeof children !== 'string' && children}

		</ButtonContainer>
	);

	//	Return component jsx
	return (
		href
			? <ButtonLink href={href}><>{buttonContent}</></ButtonLink>
			: buttonContent
	);

};

//	Set default props
Button.defaultProps = {
	label			: 'Button',
	disabled		: false,
};

//  Exports
export default Button;
