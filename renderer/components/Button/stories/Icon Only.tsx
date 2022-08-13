//	Package Imports
import React from 'react';
import { expect } from '@storybook/jest';
import { screen } from '@storybook/testing-library';

//	Component Imports
import Button from '../Button';
import { PrimaryButton, SecondaryButton } from '../variants';

//	Helper Imports
import { testSleep } from '@/helpers';

//  Declare button with icon only
const IconOnly = () => (
	<div style={{ display: 'flex', gap: '24px' }}>

		{/* Button */}
		<Button
			label		= {''}
			startIcon	= {'power'}
			data-testid	= {'default'}
		/>

		{/* Primary Button */}
		<PrimaryButton
			label		= {''}
			endIcon		= {'checkmark'}
			data-testid	= {'primary'}
		/>

		{/* Secondary Button */}
		<SecondaryButton
			label		= {''}
			endIcon		= {'close'}
			data-testid	= {'secondary'}
		/>

	</div>
);

//	Set story parameters
IconOnly.parameters = {
	docs		: {
		storyDescription	: 'You can remove the label on your button by passing an empty string to the `label` prop',
		source				: {
			expanded			: true,
			language			: 'jsx',
			code				: `
//	Component Imports
import Button, { PrimaryButton, SecondaryButton } from '@/components/Button';

...

{/* Default Button */}
<Button label={''} startIcon={'power'} />

{/* Primary Button */}
<PrimaryButton label={''} endIcon={'checkmark'} />

{/* Secondary Button */}
<SecondaryButton label={''} endIcon={'close'} />
			`,
		},
	},
};

//	Set play function
IconOnly.play = async () => {

	//	Wait for component to mount
	await testSleep(500);

	//	Get all three buttons
	const defaultButton = screen.getByTestId('default');
	const primaryButton = screen.getByTestId('primary');
	const secondaryButton = screen.getByTestId('secondary');

	//	Check if the button still has icons enabled
	await expect(defaultButton).toHaveTextContent('');
	await expect(defaultButton).toContainHTML('<svg width="1" height="1" viewBox="0 0 16 17" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="PJLV PJLV-igrUJLj-css"><path d="M13.333 9.154c0 2.889-2.388 5.23-5.333 5.23-2.946 0-5.333-2.341-5.333-5.23 0-1.666.794-3.15 2.03-4.108.374-.29.636-.71.636-1.177v-.266c0-.902-.915-1.525-1.687-1.033C1.451 3.97 0 6.395 0 9.154 0 13.487 3.582 17 8 17s8-3.513 8-7.846c0-2.759-1.451-5.185-3.646-6.584-.772-.492-1.687.13-1.687 1.033v.266c0 .466.262.888.635 1.177a5.186 5.186 0 0 1 2.031 4.108Z"></path><path d="M9.333 9.014A1.32 1.32 0 0 1 8 10.32a1.32 1.32 0 0 1-1.333-1.307V1.308A1.32 1.32 0 0 1 8 0a1.32 1.32 0 0 1 1.333 1.308v7.706Z"></path></svg>');

	//	Check if the primary button still has icons enabled
	await expect(primaryButton).toHaveTextContent('');
	await expect(primaryButton).toContainHTML('<svg width="1" height="1" viewBox="-2 -4 22 22" fill="inherit" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="PJLV PJLV-iitCPuq-css"><path d="M1.707 5.626A1 1 0 1 0 .293 7.04l1.414-1.414Zm4.626 6.04-.707.708.707.707.707-.707-.707-.707Zm11.374-9.959A1 1 0 0 0 16.293.293l1.414 1.414ZM.293 7.04l5.333 5.334L7.04 10.96 1.707 5.626.293 7.04Zm6.747 5.334L17.707 1.707 16.293.293 5.626 10.96l1.414 1.414Z"></path></svg>');

	//	Check if the primary button still has icons enabled
	await expect(secondaryButton).toHaveTextContent('');
	await expect(secondaryButton).toContainHTML('<svg width="1" height="1" viewBox="0 0 18 18" stroke="inherit" stroke-width="2" stroke-linecap="round" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="PJLV PJLV-igXCZEC-css"><path d="m1 1 16 16M1 17 17 1"></path></svg>');

};

//  Exports
export default IconOnly;
