//	Package Imports
import React from 'react';
import { expect, jest } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';

//	Component Imports
import Button from '../Button';
import { PrimaryButton, SecondaryButton } from '../variants';

//	Helper Imports
import { testSleep } from '@/helpers';

//	Declare mock click handler
const clickHandler = jest.fn();

//  Declare component variants
const Variants = () => (
	<div style={{ display: 'flex', gap: '24px' }}>

		{/* Button */}
		<Button
			label		= {'Default'}
			data-testid	= {'default'}
			labelProps	= {{ 'data-testid': 'text' }}
			onClick		= {clickHandler}
		/>

		{/* Primary Button */}
		<PrimaryButton
			label		= {'Primary'}
			data-testid	= {'primary'}
			labelProps	= {{ 'data-testid': 'text' }}
			onClick		= {clickHandler}
		/>

		{/* Secondary Button */}
		<SecondaryButton
			label		= {'Secondary'}
			data-testid	= {'secondary'}
			labelProps	= {{ 'data-testid': 'text' }}
			onClick		= {clickHandler}
		/>

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

//	Set play function
Variants.play = async () => {

	//	Wait for component to mount
	await testSleep(500);

	//	Get all three buttons
	const defaultButton = screen.getByTestId('default');
	const primaryButton = screen.getByTestId('primary');
	const secondaryButton = screen.getByTestId('secondary');

	//	Get all button text
	const buttonText = screen.getAllByTestId('text');

	//	Check if the button still has text and icons enabled
	await expect(buttonText[0]).toBeVisible();
	await expect(defaultButton).toHaveTextContent('Default');

	//	Check if the primary button still has text and icons enabled
	await expect(buttonText[1]).toBeVisible();
	await expect(primaryButton).toHaveTextContent('Primary');

	//	Check if the primary button still has text and icons enabled
	await expect(buttonText[2]).toBeVisible();
	await expect(secondaryButton).toHaveTextContent('Secondary');

	//	Check if buttons can be pressed
	await userEvent.click(defaultButton);
	await userEvent.click(primaryButton);
	await userEvent.click(secondaryButton);
	await expect(clickHandler).toHaveBeenCalledTimes(3);

};

//  Exports
export default Variants;
