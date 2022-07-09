//	Package Imports
import { createStitches } from '@stitches/react';

//	Type Imports
import type * as Stitches from '@stitches/react';

//	Imports
import utils from '@/themes/utils';
import { DarkColors, LightColors } from '@/themes/tokens/colors';

//	Create base theme
const BaseTheme = createStitches({ utils });

//	Derive other themes
const DarkTheme = BaseTheme.createTheme('dark-theme', { colors: DarkColors });
const LightTheme = BaseTheme.createTheme('light-theme', { colors: LightColors });

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
