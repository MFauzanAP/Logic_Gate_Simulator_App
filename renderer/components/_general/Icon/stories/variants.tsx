//	Package Imports
import React from 'react';

//	Component Imports
import Icon from '@/components/_general/Icon';

//	Type Imports
import type { ComponentStory } from '@storybook/react';

//	Create component template
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

//  Declare default variant
const Default = Template.bind({});

//  Exports
export {
	Default,
};
