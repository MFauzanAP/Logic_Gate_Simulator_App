//	Package Imports
import React from 'react';

//	Component Imports
import Icon from '../Icon';
import { Description } from '@storybook/addon-docs';

//	Constant Imports
import { IconNames } from '../constants';

//  Declare all icons story
//	eslint-disable-next-line require-jsdoc
const All = () => (
	<div
		style		= {{
			display				: 'grid',
			gridTemplateColumns	: '1fr 1fr 1fr 1fr 1fr',
			gridAutoRows		: '1fr',
			gap					: '24px',
		}}
	>

		{/* Icon Gallery */}
		{IconNames.map((iconName) => (
			<div
				key			= {iconName}
				style		= {{
					height			: '128px',
					display			: 'flex',
					flexDirection	: 'column',
					justifyContent	: 'space-between',
					alignItems		: 'center',
				}}
			>

				{/* Icon */}
				<Icon name={iconName} color={'#000'} />

				{/* Name */}
				<Description>{iconName}</Description>

			</div>
		))}

	</div>
);

//	Set story parameters
All.parameters = {
	docs		: {
		storyDescription	: `
You can set the button icon through the \`name\` prop
`,
		source				: {
			expanded			: true,
			language			: 'jsx',
			code				: `
//	Component Imports
import Icon from '@/components/Icon';

...

{/* Icon */}
<Icon name={'INSERT_ICON_NAME'} />
	`,
		},
	},
};

//  Exports
export default All;
