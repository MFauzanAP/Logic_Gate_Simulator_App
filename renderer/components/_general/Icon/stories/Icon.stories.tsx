//	Type Imports
import type { ComponentMeta } from '@storybook/react';

//	Component Imports
import Icon from '@/components/_general/Icon';

//	Declare component meta options
const Meta: ComponentMeta<typeof Icon> = {
	title		  	: 'Components/Icon',
	component		: Icon,
	args			: {
		name			: 'close',
		size			: '$space4',
		rotation		: 0,
		fill			: 'none',
		stroke			: '#000000',
		thickness		: 2,
		linecap			: 'round',
	},
	argTypes		: {
		name			: { control: false },
		width			: { control: false },
		height			: { control: false },
		css				: { control: false },
		fill			: { control: 'color' },
		stroke			: { control: 'color' },
		size			: {
			options			: [ 'Small', 'Medium', 'Large' ],
			mapping			: {
				Small			: '$space2',
				Medium			: '$space4',
				Large			: '$space8',
			},
		},
	},
};

//	Exports
export default Meta;
export * from './variants';
