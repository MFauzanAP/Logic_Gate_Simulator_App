//	Component Imports
import Button from '../Button';

//	Constant Imports
import { IconNames } from '@/components/Icon/constants';

//	Type Imports
import type { ComponentMeta, ComponentStory } from '@storybook/react';

//	Declare component meta options
const Meta: ComponentMeta<typeof Button> = {
	title		  	: 'Components/Button',
	component		: Button,
	args			: {
		label			: 'Button',
		shape			: 'block',
		disabled		: false,
	},
	argTypes		: {

		/* Appearance */
		shape			: {
			options			: [ 'block', 'pill' ],
			control			: { type: 'select' },
			table			: {
				category		: 'Appearance',
			},
		},
		css				: {
			table			: {
				category		: 'Appearance',
			},
		},

		/* Content */
		label			: {
			table			: {
				category		: 'Content',
			},
		},
		startIcon		: {
			options			: [ 'None', ...IconNames ],
			mapping			: { None: undefined },
			table			: {
				category		: 'Content',
			},
		},
		endIcon		: {
			options			: [ 'None', ...IconNames ],
			mapping			: { None: undefined },
			table			: {
				category		: 'Content',
			},
		},
		children		: {
			control			: false,
			table			: {
				category		: 'Content',
			},
		},

		/* Events */
		onClick			: {
			control			: false,
			table			: {
				category		: 'Events',
			},
		},

		/* Properties */
		disabled		: {
			control			: { type: 'boolean' },
			table			: {
				category		: 'Properties',
			},
		},

		/* Miscellaneous */
		href			: {
			control			: { type: 'text' },
			table			: {
				category		: 'Miscellaneous',
			},
		},
		labelProps		: {
			table			: {
				category		: 'Miscellaneous',
			},
		},
		startIconProps	: {
			table			: {
				category		: 'Miscellaneous',
			},
		},
		endIconProps	: {
			table			: {
				category		: 'Miscellaneous',
			},
		},
		as				: {
			control			: false,
			table			: {
				category		: 'Miscellaneous',
			},
		},
	},
	parameters		: {
		componentSubtitle	: 'A clickable component that can have text and icons',
		controls			: { sort: 'none' },
	},
};

//	Declare overview story
const Overview: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//	Exports
export default Meta;
export { Overview };
export { default as Variants } from './Variants';
export { default as Disabled } from './Disabled';
export { default as WithIcon } from './With Icon';
export { default as IconOnly } from './Icon Only';
export { default as AsLink } from './As Link';
export { default as CustomStyles } from './Custom Styles';
