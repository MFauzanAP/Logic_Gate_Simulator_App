//	Package Imports
import React from 'react';
import { expect } from '@storybook/jest';
import { screen } from '@storybook/testing-library';

//	Component Imports
import Button from '../Button';
import { PrimaryButton, SecondaryButton } from '../variants';

//	Helper Imports
import { testSleep } from '@/helpers';

//  Declare button as a link
const AsLink = () => (
	<div style={{ display: 'flex', gap: '24px' }}>

		{/* Button */}
		<Button
			label		= {'Open Google'}
			href		= {'http://google.com'}
			endIcon		= {'home'}
			data-testid	= {'default'}
			labelProps	= {{ 'data-testid': 'text' }}
		/>

		{/* Primary Button */}
		<PrimaryButton
			label		= {'Button link with long text'}
			href		= {'http://google.com'}
			endIcon		= {'home'}
			data-testid	= {'primary'}
			labelProps	= {{ 'data-testid': 'text' }}
		/>

		{/* Secondary Button */}
		<SecondaryButton
			label		= {''}
			href		= {'http://google.com'}
			endIcon		= {'home'}
			data-testid	= {'secondary'}
		/>

	</div>
);

//	Set story parameters
AsLink.parameters = {
	docs		: {
		storyDescription	: 'You can render your buttons as an `<a/>` tag by setting the `as` prop to `a` and passing in a link to the `href` prop',
		source				: {
			expanded			: true,
			language			: 'jsx',
			code				: `
//	Component Imports
import Button, { PrimaryButton, SecondaryButton } from '@/components/Button';

...

{/* Default Button */}
<Button as={'a'} href={'http://google.com'} />

{/* Primary Button */}
<PrimaryButton as={'a'} href={'http://google.com'} />

{/* Secondary Button */}
<SecondaryButton as={'a'} href={'http://google.com'} />
			`,
		},
	},
};

//	Set play function
AsLink.play = async () => {

	//	Wait for component to mount
	await testSleep(500);

	//	Get all three buttons
	const defaultButton = screen.getByTestId('default');
	const primaryButton = screen.getByTestId('primary');
	const secondaryButton = screen.getByTestId('secondary');

	//	Get button link tags
	const defaultLink = defaultButton.closest('a');
	const primaryLink = primaryButton.closest('a');
	const secondaryLink = secondaryButton.closest('a');

	//	Get all button text
	const buttonText = screen.getAllByTestId('text');

	//	Check if the button still has text and icons enabled
	await expect(buttonText[0]).toBeVisible();
	await expect(defaultButton).toHaveTextContent('Open Google');
	await expect(defaultButton).toContainHTML('<svg width="1" height="1" viewBox="0 0 16 16" fill="inherit" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="PJLV PJLV-igrUJLj-css"><path d="m7.326.616-7 6.39a1 1 0 0 0-.326.74V15a1 1 0 0 0 1 1h3.6a1 1 0 0 0 1-1v-3.6a1 1 0 0 1 1-1h2.8a1 1 0 0 1 1 1V15a1 1 0 0 0 1 1H15a1 1 0 0 0 1-1V7.745a1 1 0 0 0-.326-.738l-7-6.391a1 1 0 0 0-1.348 0Z"></path></svg>');
	await expect(defaultLink).toHaveAttribute('href', 'http://google.com');

	//	Check if the primary button still has text and icons enabled
	await expect(buttonText[1]).toBeVisible();
	await expect(primaryButton).toHaveTextContent('Button link with long text');
	await expect(primaryButton).toContainHTML('<svg width="1" height="1" viewBox="0 0 16 16" fill="inherit" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="PJLV PJLV-ibjUozx-css"><path d="m7.326.616-7 6.39a1 1 0 0 0-.326.74V15a1 1 0 0 0 1 1h3.6a1 1 0 0 0 1-1v-3.6a1 1 0 0 1 1-1h2.8a1 1 0 0 1 1 1V15a1 1 0 0 0 1 1H15a1 1 0 0 0 1-1V7.745a1 1 0 0 0-.326-.738l-7-6.391a1 1 0 0 0-1.348 0Z"></path></svg>');
	await expect(primaryLink).toHaveAttribute('href', 'http://google.com');

	//	Check if the primary button still has text and icons enabled
	await expect(secondaryButton).toHaveTextContent('');
	await expect(secondaryButton).toContainHTML('<svg width="1" height="1" viewBox="0 0 16 16" fill="inherit" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="PJLV PJLV-iiqTHBt-css"><path d="m7.326.616-7 6.39a1 1 0 0 0-.326.74V15a1 1 0 0 0 1 1h3.6a1 1 0 0 0 1-1v-3.6a1 1 0 0 1 1-1h2.8a1 1 0 0 1 1 1V15a1 1 0 0 0 1 1H15a1 1 0 0 0 1-1V7.745a1 1 0 0 0-.326-.738l-7-6.391a1 1 0 0 0-1.348 0Z"></path></svg>');
	await expect(secondaryLink).toHaveAttribute('href', 'http://google.com');

};

//  Exports
export default AsLink;
