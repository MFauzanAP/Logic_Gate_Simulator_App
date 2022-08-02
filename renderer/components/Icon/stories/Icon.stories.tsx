//	Component Imports
import Icon from '../Icon';

//	Constant Imports
import { IconNames } from '../constants';

//	Type Imports
import type { ComponentMeta, ComponentStory } from '@storybook/react';

//	Declare component meta options
const Meta: ComponentMeta<typeof Icon> = {
	title		  	: 'Components/Icon',
	component		: Icon,
	args			: {
		name			: 'close',
		size			: '$space4',
		rotation		: 0,
		fill			: '#000000',
		stroke			: '#000000',
		thickness		: 2,
		linecap			: 'round',
	},
	argTypes		: {
		name			: {
			options			: IconNames,
			table			: {
				category		: 'Content',
			},
		},

		width			: {
			control			: { type: 'text' },
			table			: {
				category		: 'Appearance',
			},
		},
		height			: {
			control			: { type: 'text' },
			table			: {
				category		: 'Appearance',
			},
		},
		size			: {
			control			: { type: 'text' },
			table			: {
				category		: 'Appearance',
			},
		},
		rotation		: {
			control			: { type: 'number' },
			table			: {
				category		: 'Appearance',
			},
		},
		fill			: {
			control			: { type: 'color' },
			table			: {
				category		: 'Appearance',
			},
		},
		stroke			: {
			control			: { type: 'color' },
			table			: {
				category		: 'Appearance',
			},
		},
		thickness		: {
			control			: { type: 'number' },
			table			: {
				category		: 'Appearance',
			},
		},
		linecap		: {
			options			: [ 'butt', 'round', 'square' ],
			table			: {
				category		: 'Appearance',
			},
		},
		css				: {
			table			: {
				category		: 'Appearance',
			},
		},

		as				: {
			table			: {
				disable			: true,
			},
		},
		children		: {
			table			: {
				disable			: true,
			},
		},
	},
	parameters		: {
		componentSubtitle	: 'Component used to display an icon',
		controls			: { sort: 'none' },
	},
};

//	Declare overview story
//	eslint-disable-next-line require-jsdoc
const Overview: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

//	Exports
export default Meta;
export { Overview };
export { default as AllIcons } from './All';