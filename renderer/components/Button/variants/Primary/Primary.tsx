//	Package Imports
import React, { useEffect, useState, useRef } from 'react';

//	Animation Imports
import { PrimaryButtonLabelAnimations } from './animations';

//	Component Imports
import Button from '../../Button';

//	Helper Imports
import { composePrimaryButtonAnimations } from './helpers';

//	Style Imports
import { PrimaryButtonContainer, PrimaryButtonLabel } from './styles';

//	Type Imports
import type ButtonProps from '../../props';
import type { MutableRefObject } from 'react';

/**
 * Primary variant of the default button.
 * This variant is mainly used as a call to action.
 * 
 * @example
 * <PrimaryButton />
 */
const Primary = ({
	labelProps,
	...props
}: ButtonProps) => {

	//	Create refs
	const ref = useRef() as MutableRefObject<HTMLDivElement>;

	//	Create state variables
	const [ PrimaryButtonAnimations, setPrimaryButtonAnimations ] = useState({});

	//	Function called on load and whenever the label or children changes
	useEffect(() => {

		//	Compose button animations
		setPrimaryButtonAnimations(composePrimaryButtonAnimations({ ref }));

	}, [ ]);

	//	Return component jsx
	return (
		<Button

			/* Appearance */
			as				= {PrimaryButtonContainer}

			/* Animations */
			animate			= {props.disabled ? 'disabled' : 'initial'}
			whileHover		= {'hover'}
			whileTap		= {'tap'}
			variants		= {PrimaryButtonAnimations}

			/* Passed Props */
			labelProps		= {{
				as				: PrimaryButtonLabel,
				variants		: PrimaryButtonLabelAnimations,

				...labelProps,
			}}

			/* Other Props */
			{...props}

		>

			{/* Get Computed Styles */}
			<div ref={ref} style={{ display: 'none' }} />

		</Button>
	);

};

//  Exports
export default Primary;
