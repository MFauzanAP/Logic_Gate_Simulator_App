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
		color			: '#000000',
		thickness		: 2,
		linecap			: 'round',
		rotation		: 0,
		opacity			: 1,
	},
	argTypes		: {

		/* Content */
		name			: {
			options			: IconNames,
			table			: {
				category		: 'Content',
			},
		},

		/* Appearance */
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
		color			: {
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

		/* Properties */
		disabled		: {
			control			: { type: 'boolean' },
			table			: {
				category		: 'Properties',
			},
		},
		rotation		: {
			control			: { type: 'number' },
			table			: {
				category		: 'Properties',
			},
		},
		opacity		: {
			control			: {
				type			: 'number',
				min				: 0,
				max				: 1,
				step			: 0.1,
			},
			table			: {
				category		: 'Properties',
			},
		},

		/* Disable */
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
const Overview: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

//	Exports
export default Meta;
export { Overview };
export { default as AllIcons } from './All';
