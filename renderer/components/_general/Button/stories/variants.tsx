//	Package Imports
import React from 'react';

//	Component Imports
import Button from '../Button';
import { PrimaryButton, SecondaryButton } from '../variants';
import Disabled from './Disabled';

//	Type Imports
import type { ComponentStory } from '@storybook/react';

//	Create component template
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//  Declare variants
const Default = Template.bind({});
const Primary: ComponentStory<typeof PrimaryButton> = (args) => <PrimaryButton {...args} />;
const Secondary: ComponentStory<typeof SecondaryButton> = (args) => <SecondaryButton {...args} />;

//  Exports
export {
	Default,
	Disabled,
	Primary,
	Secondary,
};
