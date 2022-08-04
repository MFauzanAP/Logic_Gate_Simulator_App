//	Package Imports
import React from 'react';

//	Component Imports
import Button from '../Button';
import { PrimaryButton, SecondaryButton } from '../variants';

//	Type Imports
import type { ComponentStory } from '@storybook/react';

//  Declare disabled story
//	eslint-disable-next-line require-jsdoc
const Disabled: ComponentStory<typeof Button> = () => (
	<div style={{ display: 'flex', gap: '24px' }}>

		{/* Disabled Button */}
		<Button disabled />

		{/* Disabled Primary Button */}
		<PrimaryButton disabled />

		{/* Disabled Secondary Button */}
		<SecondaryButton disabled />

	</div>
);

//	Set story parameters
Disabled.parameters = {
	docs		: {
		storyDescription	: 'A `disabled` variant of the default button. This variant is unclickable and greyed out.',
		source				: {
			language			: 'jsx',
			code				: `
//	Component Imports
import Button, { PrimaryButton, SecondaryButton } from '@/components/Button';

...

{/* Button with disabled prop */}
<Button disabled />
<PrimaryButton disabled />
<SecondaryButton disabled />
			`,
		},
	},
};

//  Exports
export default Disabled;
