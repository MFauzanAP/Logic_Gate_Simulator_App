//	Package Imports
import React from 'react';

//	Component Imports
import Button from '../Button';
import { PrimaryButton, SecondaryButton } from '../variants';

//  Declare component variants
//	eslint-disable-next-line require-jsdoc
const Variants = () => (
	<div style={{ display: 'flex', gap: '24px' }}>

		{/* Default Button */}
		<Button />

		{/* Primary Button */}
		<PrimaryButton />

		{/* Secondary Button */}
		<SecondaryButton />

	</div>
);

//	Set story parameters
Variants.parameters = {
	docs		: {
		storyDescription	: `
The button can have these variations:
- \`<Button />\`
- \`<PrimaryButton />\`
- \`<SecondaryButton />\`

which is chosen by importing the desired variation.
`,
		source				: {
			expanded			: true,
			language			: 'jsx',
			code				: `
//	Component Imports
import Button, { PrimaryButton, SecondaryButton } from '@/components/Button';

...

{/* Default Button */}
<Button />

{/* Primary Button */}
<PrimaryButton />

{/* Secondary Button */}
<SecondaryButton />
			`,
		},
	},
};

//  Exports
export default Variants;
