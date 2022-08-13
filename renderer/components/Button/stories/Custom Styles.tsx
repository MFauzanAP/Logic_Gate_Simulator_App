//	Package Imports
import React from 'react';
import { expect } from '@storybook/jest';
import { screen } from '@storybook/testing-library';

//	Component Imports
import Button from '../Button';
import { PrimaryButton, SecondaryButton } from '../variants';

//	Helper Imports
import { testSleep } from '@/helpers';

//  Declare button with custom styles
const CustomStyles = () => (
	<div style={{ display: 'flex', gap: '24px' }}>

		{/* Home Button */}
		<Button
			css				= {{ width: '$space12', height: '$space10', gradient: '$linear200' }}
			label			= {''}
			startIcon		= {'home'}
			data-testid		= {'default'}
			startIconProps	= {{
				name			: 'home',
				color			: '$text100',
				width			: '$space4',
				height			: '$space4',
			}}
		/>

		{/* Primary Button */}
		<PrimaryButton
			css			= {{ backgroundColor: 'red', borderRadius: '$radii2' }}
			label		= {'Button with a custom background color'}
			endIcon		= {'microchip'}
			data-testid	= {'primary'}
			labelProps	= {{ 'data-testid': 'text' }}
		/>

		{/* Secondary Button */}
		<SecondaryButton
			css				= {{ color: 'red', gradient: '$linear100', borderRadius: '$radii4' }}
			label			= {'Another custom button'}
			endIcon			= {'focus'}
			data-testid		= {'secondary'}
			labelProps		= {{ 'data-testid': 'text' }}
			endIconProps	= {{ name: 'focus', thickness: 1 }}
		/>

	</div>
);

//	Set story parameters
CustomStyles.parameters = {
	docs		: {
		storyDescription	: `
Buttons can be rendered with custom styles by setting the \`css\` prop

Label and icon styles can also be changed through the \`css\` property in these props:
- \`labelProps\`
- \`startIconProps\`
- \`endIconProps\`
`,
		source				: {
			expanded			: true,
			language			: 'jsx',
			code				: `
//	Component Imports
import Button, { PrimaryButton, SecondaryButton } from '@/components/Button';

...

{/* Default Button */}
<Button css={} />

{/* Primary Button */}
<PrimaryButton css={} />

{/* Secondary Button */}
<SecondaryButton css={} />
			`,
		},
	},
};

//	Set play function
CustomStyles.play = async () => {

	//	Wait for component to mount
	await testSleep(500);

	//	Get all three buttons
	const defaultButton = screen.getByTestId('default');
	const primaryButton = screen.getByTestId('primary');
	const secondaryButton = screen.getByTestId('secondary');

	//	Get all button text
	const buttonText = screen.getAllByTestId('text');

	//	Check if the button still has text and icons enabled
	await expect(defaultButton).toHaveTextContent('');
	await expect(defaultButton).toContainHTML('<svg width="1" height="1" viewBox="0 0 16 16" fill="inherit" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="PJLV PJLV-iifzTcp-css"><path d="m7.326.616-7 6.39a1 1 0 0 0-.326.74V15a1 1 0 0 0 1 1h3.6a1 1 0 0 0 1-1v-3.6a1 1 0 0 1 1-1h2.8a1 1 0 0 1 1 1V15a1 1 0 0 0 1 1H15a1 1 0 0 0 1-1V7.745a1 1 0 0 0-.326-.738l-7-6.391a1 1 0 0 0-1.348 0Z"></path></svg>');

	//	Check if the primary button still has text and icons enabled
	await expect(buttonText[0]).toBeVisible();
	await expect(primaryButton).toHaveTextContent('Button with a custom background color');
	await expect(primaryButton).toContainHTML('<svg width="1" height="1" viewBox="0 0 16 16" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="PJLV PJLV-ibjUozx-css"><path d="M4.235 2.353a.941.941 0 1 0 1.883 0V.94a.941.941 0 0 0-1.883 0v1.412ZM7.059 2.353a.941.941 0 1 0 1.882 0V.94a.941.941 0 0 0-1.882 0v1.412ZM9.882 2.353a.941.941 0 1 0 1.883 0V.94a.941.941 0 0 0-1.883 0v1.412Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.765 6.118c0-1.3 1.053-2.353 2.353-2.353h3.764c1.3 0 2.353 1.053 2.353 2.353v3.764c0 1.3-1.053 2.353-2.353 2.353H6.118a2.353 2.353 0 0 1-2.353-2.353V6.118Zm1.882 0c0-.26.21-.47.47-.47h3.765c.26 0 .47.21.47.47v3.764c0 .26-.21.47-.47.47H6.118a.47.47 0 0 1-.47-.47V6.118Z"></path><path d="M12.706 5.176c0-.52.421-.94.941-.94h1.412a.941.941 0 1 1 0 1.882h-1.412a.941.941 0 0 1-.941-.942ZM12.706 8c0-.52.421-.941.941-.941h1.412a.941.941 0 1 1 0 1.882h-1.412A.941.941 0 0 1 12.706 8ZM12.706 10.823c0-.52.421-.94.941-.94h1.412a.941.941 0 1 1 0 1.882h-1.412a.941.941 0 0 1-.941-.942ZM5.176 16a.941.941 0 0 1-.94-.941v-1.412a.941.941 0 1 1 1.882 0v1.412c0 .52-.422.941-.942.941ZM8 16a.941.941 0 0 1-.941-.941v-1.412a.941.941 0 1 1 1.882 0v1.412c0 .52-.421.941-.941.941ZM10.823 16a.941.941 0 0 1-.94-.941v-1.412a.941.941 0 1 1 1.882 0v1.412c0 .52-.422.941-.942.941ZM.941 4.235a.941.941 0 0 0 0 1.883h1.412a.941.941 0 1 0 0-1.883H.94ZM.941 7.059a.941.941 0 0 0 0 1.882h1.412a.941.941 0 1 0 0-1.882H.94ZM.941 9.882a.941.941 0 1 0 0 1.883h1.412a.941.941 0 0 0 0-1.883H.94Z"></path></svg>');

	//	Check if the primary button still has text and icons enabled
	await expect(buttonText[1]).toBeVisible();
	await expect(secondaryButton).toHaveTextContent('Another custom button');
	await expect(secondaryButton).toContainHTML('<svg width="1" height="1" viewBox="0 0 18 18" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="PJLV PJLV-ibKBkFN-css"><path d="M4.2 2a1 1 0 0 0 0-2v2ZM0 4a1 1 0 0 0 2 0H0Zm10-2a1 1 0 1 0-2 0h2Zm5.933 7.5a1 1 0 1 0 0-2v2Zm-13.866-2a1 1 0 1 0 0 2v-2ZM2 13a1 1 0 1 0-2 0h2Zm2.2 4a1 1 0 1 0 0-2v2Zm9.6-2a1 1 0 1 0 0 2v-2Zm4.2-2a1 1 0 1 0-2 0h2ZM8 15a1 1 0 1 0 2 0H8Zm5.8-15a1 1 0 1 0 0 2V0ZM16 4a1 1 0 1 0 2 0h-2ZM9 5.75c1.719 0 3 1.291 3 2.75h2c0-2.683-2.3-4.75-5-4.75v2Zm3 2.75c0 1.459-1.281 2.75-3 2.75v2c2.7 0 5-2.067 5-4.75h-2Zm-3 2.75c-1.719 0-3-1.291-3-2.75H4c0 2.683 2.3 4.75 5 4.75v-2ZM6 8.5c0-1.459 1.281-2.75 3-2.75v-2c-2.7 0-5 2.067-5 4.75h2Zm4-3.75V2H8v2.75h2Zm3 4.75h2.933v-2H13v2Zm-8-2H2.067v2H5v-2Zm3 4.75V15h2v-2.75H8ZM13.8 2c.407 0 .963.28 1.479.818.242.252.435.522.564.762.063.12.105.221.13.302.026.083.027.12.027.118h2c0-.484-.182-.965-.393-1.361a5.544 5.544 0 0 0-.886-1.207C16.037.72 14.993 0 13.8 0v2Zm0 15c.534 0 1.054-.232 1.452-.463a6.964 6.964 0 0 0 1.232-.932 6.727 6.727 0 0 0 1-1.163c.246-.372.516-.89.516-1.442h-2c0-.053.004.055-.184.34-.165.249-.41.534-.7.806-.29.27-.596.503-.868.661-.302.175-.448.193-.448.193v2Zm-9.6-2s-.146-.018-.448-.193a4.982 4.982 0 0 1-.868-.662 4.745 4.745 0 0 1-.7-.805C1.996 13.055 2 12.947 2 13H0c0 .553.27 1.07.516 1.442.268.407.623.81 1 1.162.377.354.804.684 1.232.933.398.23.919.463 1.452.463v-2ZM2 4c0 .052-.004-.055.184-.34.165-.249.41-.534.7-.805a4.98 4.98 0 0 1 .868-.662C4.054 2.018 4.2 2 4.2 2V0c-.533 0-1.054.232-1.452.463a6.966 6.966 0 0 0-1.232.932 6.726 6.726 0 0 0-1 1.163C.27 2.93 0 3.448 0 4h2Z"></path></svg>');

};

//  Exports
export default CustomStyles;
