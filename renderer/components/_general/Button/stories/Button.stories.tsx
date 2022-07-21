//	Type Imports
import type { ComponentMeta } from '@storybook/react';

//	Component Imports
import Button from '@/components/_general/Button';
import Icon from '@/components/_general/Icon';

//	Declare meta object
const Meta: ComponentMeta<typeof Button> = {
	title		  	: 'Components/Button',
	component		: Button,
	args			: {
		as				: 'button',
		label			: 'Button',
		iconPlacement	: 'right',
	},
	argTypes		: {
		icon			: {
			options			: [ 'Close', 'Checkmark' ],
			mapping			: {
				Close			: <Icon name={'close'} width={'$space2'} height={'$space2'} thickness={2} stroke={'$text600'} />,
				Checkmark		: <Icon name={'checkmark'} width={'$space2'} height={'$space2'} thickness={2} stroke={'$text600'} />,
			},
		},
	},
};

//	Exports
export default Meta;
export * from './variants';
