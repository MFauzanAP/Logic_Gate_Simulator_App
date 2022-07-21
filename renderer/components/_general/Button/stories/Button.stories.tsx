//	Type Imports
import type { ComponentMeta } from '@storybook/react';

//	Component Imports
import Button from '@/components/_general/Button';
import Icon from '@/components/_general/Icon';

//	Declare component meta options
const Meta: ComponentMeta<typeof Button> = {
	title		  	: 'Components/Button',
	component		: Button,
	args			: {
		as				: 'button',
		label			: 'Button',
		iconPlacement	: 'right',
	},
	argTypes		: {
		as				: { control: false },
		css				: { control: false },
		labelCss		: { control: false },
		iconCss			: { control: false },
		onClick			: { control: false },
		icon			: {
			options			: [ 'Close', 'Checkmark' ],
			mapping			: {
				Close			: <Icon name={'close'} width={'$space2'} height={'$space2'} thickness={2} />,
				Checkmark		: <Icon name={'checkmark'} width={'$space2'} height={'$space2'} thickness={2} />,
			},
		},
	},
};

//	Exports
export default Meta;
export * from './variants';
