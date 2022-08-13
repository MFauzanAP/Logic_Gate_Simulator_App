//	Package Imports
import React from 'react';
import { expect } from '@storybook/jest';
import { screen } from '@storybook/testing-library';

//	Component Imports
import Button from '../Button';
import { PrimaryButton, SecondaryButton } from '../variants';

//	Helper Imports
import { testSleep } from '@/helpers';

//	Type Imports
import type { ComponentStory } from '@storybook/react';

//  Declare disabled story
const Disabled: ComponentStory<typeof Button> = () => {

	//	Return js
	return (
		<div style={{ display: 'flex', gap: '24px' }}>

			{/* Disabled Button */}
			<Button
				css			= {{ color: 'white', backgroundColor: 'red' }}
				endIcon		= {'close'}
				data-testid	= {'default'}
				labelProps	= {{ 'data-testid': 'text' }}
				disabled
			/>

			{/* Disabled Primary Button */}
			<PrimaryButton
				endIcon		= {'ampersand'}
				data-testid	= {'primary'}
				labelProps	= {{ 'data-testid': 'text' }}
				disabled
			/>

			{/* Disabled Secondary Button */}
			<SecondaryButton
				startIcon	= {'microchip'}
				data-testid	= {'secondary'}
				labelProps	= {{ 'data-testid': 'text' }}
				disabled
			/>

		</div>
	);

};

//	Set story parameters
Disabled.parameters = {
	docs		: {
		storyDescription	: `
A \`disabled\` variant of the button. This variant is unclickable and greyed out.

Passing a boolean to the \`disabled\` prop turns a button disabled. The value of this prop can be changed at runtime
		`,
		source				: {
			language			: 'jsx',
			code				: `
//	Component Imports
import Button, { PrimaryButton, SecondaryButton } from '@/components/Button';

...

{/* Button with disabled prop */}
<Button disabled />
<PrimaryButton disabled />
<SecondaryButton disabled />
			`,
		},
	},
};

//	Set play function
Disabled.play = async () => {

	//	Wait for component to mount
	await testSleep(500);

	//	Get all three buttons
	const defaultButton = screen.getByTestId('default');
	const primaryButton = screen.getByTestId('primary');
	const secondaryButton = screen.getByTestId('secondary');

	//	Get all button text
	const buttonText = screen.getAllByTestId('text');

	//	Check if buttons can be pressed
	await expect(defaultButton).toHaveStyle({ 'pointer-events': 'none' });
	await expect(primaryButton).toHaveStyle({ 'pointer-events': 'none' });
	await expect(secondaryButton).toHaveStyle({ 'pointer-events': 'none' });

	//	Check if the button still has text and icons enabled
	await expect(buttonText[0]).toBeVisible();
	await expect(defaultButton).toHaveTextContent('Button');
	await expect(defaultButton).toContainHTML('<svg width="1" height="1" viewBox="0 0 18 18" stroke="inherit" stroke-width="2" stroke-linecap="round" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" disabled="" class="PJLV PJLV-iliebES-css"><path d="m1 1 16 16M1 17 17 1"></path></svg>');

	//	Check if the primary button still has text and icons enabled
	await expect(buttonText[1]).toBeVisible();
	await expect(primaryButton).toHaveTextContent('Button');
	await expect(primaryButton).toContainHTML('<svg width="1" height="1" viewBox="-1 0 18 18" fill="inherit" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" disabled="" class="PJLV PJLV-ifgsrkx-css"><path d="M6.376 17.218c-1.226 0-2.316-.2-3.272-.597-.955-.398-1.711-.94-2.268-1.624A3.638 3.638 0 0 1 0 12.633c0-.828.183-1.568.55-2.221.365-.669.947-1.29 1.743-1.863.796-.589 1.806-1.162 3.032-1.72.892-.413 1.592-.78 2.102-1.098.51-.318.868-.62 1.074-.907.207-.303.31-.605.31-.908 0-.414-.142-.748-.429-1.003-.27-.254-.677-.382-1.218-.382-.573 0-1.019.144-1.337.43a1.412 1.412 0 0 0-.478 1.099c0 .239.048.477.144.716.095.223.278.486.549.788.27.287.653.66 1.146 1.123L16 14.854l-2.03 2.364L4.25 8.19c-.556-.51-1.002-.987-1.337-1.433a5.25 5.25 0 0 1-.74-1.313 4.201 4.201 0 0 1-.215-1.338c0-.811.215-1.528.645-2.149.43-.62 1.035-1.098 1.815-1.433C5.198.175 6.113 0 7.164 0c.971 0 1.807.16 2.508.478.716.302 1.273.74 1.671 1.313.414.573.621 1.258.621 2.054 0 .7-.175 1.345-.525 1.934-.35.573-.9 1.115-1.648 1.624-.732.51-1.695 1.027-2.89 1.552-.811.366-1.456.725-1.934 1.075-.462.334-.796.677-1.003 1.027-.207.35-.31.74-.31 1.17 0 .398.12.756.358 1.075.255.318.605.565 1.05.74.446.175.972.263 1.577.263.971 0 1.862-.223 2.674-.67.812-.46 1.497-1.137 2.054-2.029.573-.908.98-2.006 1.218-3.296l2.985.932c-.334 1.624-.931 3.033-1.79 4.227-.86 1.194-1.92 2.117-3.177 2.77-1.258.652-2.667.979-4.227.979Z"></path></svg>');

	//	Check if the secondary button still has text and icons enabled
	await expect(buttonText[2]).toBeVisible();
	await expect(secondaryButton).toHaveTextContent('Button');
	await expect(secondaryButton).toContainHTML('<svg width="1" height="1" viewBox="0 0 16 16" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" disabled="" class="PJLV PJLV-ifgsrkx-css"><path d="M4.235 2.353a.941.941 0 1 0 1.883 0V.94a.941.941 0 0 0-1.883 0v1.412ZM7.059 2.353a.941.941 0 1 0 1.882 0V.94a.941.941 0 0 0-1.882 0v1.412ZM9.882 2.353a.941.941 0 1 0 1.883 0V.94a.941.941 0 0 0-1.883 0v1.412Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.765 6.118c0-1.3 1.053-2.353 2.353-2.353h3.764c1.3 0 2.353 1.053 2.353 2.353v3.764c0 1.3-1.053 2.353-2.353 2.353H6.118a2.353 2.353 0 0 1-2.353-2.353V6.118Zm1.882 0c0-.26.21-.47.47-.47h3.765c.26 0 .47.21.47.47v3.764c0 .26-.21.47-.47.47H6.118a.47.47 0 0 1-.47-.47V6.118Z"></path><path d="M12.706 5.176c0-.52.421-.94.941-.94h1.412a.941.941 0 1 1 0 1.882h-1.412a.941.941 0 0 1-.941-.942ZM12.706 8c0-.52.421-.941.941-.941h1.412a.941.941 0 1 1 0 1.882h-1.412A.941.941 0 0 1 12.706 8ZM12.706 10.823c0-.52.421-.94.941-.94h1.412a.941.941 0 1 1 0 1.882h-1.412a.941.941 0 0 1-.941-.942ZM5.176 16a.941.941 0 0 1-.94-.941v-1.412a.941.941 0 1 1 1.882 0v1.412c0 .52-.422.941-.942.941ZM8 16a.941.941 0 0 1-.941-.941v-1.412a.941.941 0 1 1 1.882 0v1.412c0 .52-.421.941-.941.941ZM10.823 16a.941.941 0 0 1-.94-.941v-1.412a.941.941 0 1 1 1.882 0v1.412c0 .52-.422.941-.942.941ZM.941 4.235a.941.941 0 0 0 0 1.883h1.412a.941.941 0 1 0 0-1.883H.94ZM.941 7.059a.941.941 0 0 0 0 1.882h1.412a.941.941 0 1 0 0-1.882H.94ZM.941 9.882a.941.941 0 1 0 0 1.883h1.412a.941.941 0 0 0 0-1.883H.94Z"></path></svg>');

};

//  Exports
export default Disabled;
