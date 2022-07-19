//	Package Imports
import { createStitches, defaultThemeMap } from '@stitches/react';

//	Type Imports
import type * as Stitches from '@stitches/react';

//	Imports
import utils from '@/themes/utils';
import sizes from '@/themes/tokens/sizes';
import { DarkColors, LightColors } from '@/themes/tokens/colors';

//	Create base theme
const BaseTheme = createStitches({
	themeMap		: {
		...defaultThemeMap,

		maxWidth		: 'space',
		width			: 'space',
		minWidth		: 'space',

		maxHeight		: 'space',
		height			: 'space',
		minHeight		: 'space',

		lineHeight		: 'space',
	},
	utils,
});

//	Derive other themes
const DarkTheme = BaseTheme.createTheme('dark-theme', { ...sizes, colors: DarkColors });
const LightTheme = BaseTheme.createTheme('light-theme', { ...sizes, colors: LightColors });

//	Destructure base theme
const {
	css,
	styled,
	globalCss,
	keyframes,
	getCssText,
	theme,
	config,
} = BaseTheme;

//	Exports
export type CSS = Stitches.CSS<typeof BaseTheme.config>;
export {
	DarkTheme,
	LightTheme,
	css,
	styled,
	globalCss,
	keyframes,
	getCssText,
	theme,
	config,
};
