//	Package Imports
import React, { useEffect, useState, useRef } from 'react';

//	Component Imports
import Button from '../../Button';

//	Helper Imports
import { composeSecondaryButtonAnimations } from './helpers';

//	Style Imports
import { SecondaryButtonContainer, SecondaryButtonLabel } from './styles';

//	Type Imports
import type ButtonProps from '../../props';
import type { MutableRefObject } from 'react';

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
}: ButtonProps) => {

	//	Create refs
	const ref = useRef() as MutableRefObject<HTMLDivElement>;

	//	Create state variables
	const [ SecondaryButtonAnimations, setSecondaryButtonAnimations ] = useState({});

	//	Function called on load and whenever the label or children changes
	useEffect(() => {

		//	Compose button animations
		setSecondaryButtonAnimations(composeSecondaryButtonAnimations({ ref }));

	}, [ ]);

	//	Return component jsx
	return (
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

		>

			{/* Get Computed Styles */}
			<div ref={ref} style={{ display: 'none' }} />

		</Button>
	);

};

//  Exports
export default Secondary;
