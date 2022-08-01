//	Package Imports
import React from 'react';

//	Component Imports
import { DisabledButton } from '../variants';

//	Type Imports
import type { ComponentStory } from '@storybook/react';

//  Declare disabled story
//	eslint-disable-next-line require-jsdoc
const Disabled: ComponentStory<typeof DisabledButton> = () => <DisabledButton />;

//	Set story parameters
Disabled.parameters = {
	docs		: {
		storyDescription	: 'A `disabled` variant of the default button. This variant is unclickable and greyed out.',
		source				: {
			language			: 'jsx',
			code				: `
//	Component Imports
import Button, { DisabledButton } from '@/components/_general/Button';

...

{/* Default Button with disabled prop */}
<Button disabled />

{/* Disabled Button */}
<DisabledButton />
			`,
		},
	},
};

//  Exports
export default Disabled;
