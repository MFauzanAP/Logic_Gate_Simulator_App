//	Package Imports
import React, { useEffect, useState, useRef } from 'react';

//	Component Imports
import Icon from '@/components/Icon';

//	Helper Imports
import { composeButtonLabel, composeIconColor, composeButtonAnimations } from './helpers';

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
	variants,
	...props
}: Props) => {

	//	Create refs
	const ref = useRef() as MutableRefObject<HTMLButtonElement>;

	//	Create state variables
	const [ ButtonAnimations, setButtonAnimations ] = useState({});
	const [ buttonLabel, setButtonLabel ] = useState('');
	const [ iconColor, setIconColor ] = useState('');

	//	Function called on load and whenever the label or children changes
	useEffect(() => {

		//	Compose button label and icon color
		setButtonAnimations(composeButtonAnimations({ ref }));
		setButtonLabel(composeButtonLabel({ label, children }));
		setIconColor(composeIconColor({ ref }));

	}, [ label, children, ref ]);

	//	Declare button content
	const buttonContent = (
		<ButtonContainer

			/* Appearance */
			type		= {'button'}
			round		= {buttonLabel === ''}
			disabled	= {disabled}

			/* Animations */
			animate			= {props.disabled ? 'disabled' : 'initial'}
			whileHover		= {'hover'}
			whileTap		= {'tap'}
			variants		= {{ ...ButtonAnimations, ...variants }}
			transition		= {{ duration: 0.15 }}

			/* Other Props */
			ref			= {ref}
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
