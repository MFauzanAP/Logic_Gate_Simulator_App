//	Type Imports
import type { CSS } from '@/themes';
import type { IconName } from './types';
import type { ComponentProps } from '@/types';

//	Declare component props
interface IconProps extends ComponentProps {
	/** Which icon should be displayed? */
	name			: IconName,

	/** How wide should the icon be? */
	width?			: number | string,
	/** How tall should the icon be? */
	height?			: number | string,
	/** Sets the width and height of the icon. Takes precedence over the width and height props */
	size?			: number | string,

	/** Some icons use this to set their color */
	fill?			: string,
	/** Some icons use this to set their color */
	stroke?			: string,
	/** Sets the thickness of the icon, only works for lined icons */
	thickness?		: number,
	/** Determines how the end of lines should look like */
	linecap?		: 'butt' | 'round' | 'square',

	/** Sets the rotation of the icon */
	rotation?		: number,

	/** Changes the icon's CSS */
	css?			: CSS,
}

//	Exports
export default IconProps;
