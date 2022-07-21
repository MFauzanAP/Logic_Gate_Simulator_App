//	Package Imports
import React from 'react';

//	Component Imports
import Button from '../Button';

//	Type Imports
import type { ComponentStory } from '@storybook/react';

//	Create component template
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//  Declare default variant
const Default = Template.bind({});

//  Exports
export {
	Default,
};
