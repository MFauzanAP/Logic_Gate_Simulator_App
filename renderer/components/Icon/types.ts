//	Constant Imports
import { IconNames } from './constants';

//	Type Imports
import type { CSS } from '@/themes';

//	Declare icon name type
type IconName = typeof IconNames[number];

//	Declare icon list type
type IconList = {
	readonly [key: string]	: {
		icon					: any,
		type					: 'lined' | 'filled',
	};
};

//	Declare compose icon css prop type
type ComposeIconCssProps = {
	/**
	 * Which icon should be displayed?
	 * 
	 * @type {IconName}
	 * */
	name			: IconName,

	/**
	 * Is the button disabled?
	 * 
	 * A disabled button cannot be clicked and will have a greyed out appearance
	 * 
	 * @type {boolean}
	 * */
	disabled		: boolean,

	/**
	 * How wide should the icon be?
	 *
	 * @type {number | string}
	 * */
	width			: number | string,

	/**
	 * How tall should the icon be?
	 *
	 * @type {number | string}
	 * */
	height			: number | string,

	/**
	 * Sets the width and height of the icon.
	 *
	 * ! **NOTE** this prop takes precedence over the width and height props!
	 *
	 * @type {number | string}
	 * */
	size			: number | string,

	/**
	 * Used to set the color of the icon
	 * 
	 * ! **NOTE** Must be passed in as a color code!
	 * 
	 * @example
	 * #000000
	 * 
	 * @type {string}
	 * */
	color			: string,

	/**
	  * Sets the thickness of the icon
	  * 
	  * ! **NOTE** only works for lined icons!
	  * 
	  * @type {number}
	  * */
	thickness		: number,

	/**
	  * Determines what the end of lines should look like 
	  * 
	  * ! **NOTE** only works for lined icons!
	  * 
	  * @type {'butt' | 'round' | 'square'}
	  * */
	linecap			: 'butt' | 'round' | 'square',

	/**
	 * Sets the rotation of the icon
	 *
	 * @type {number}
	 * */
	rotation		: number,

	/** 
	 * Sets the opacity of the icon 
	 * 
	 * Ranges from 0 to 1
	 * 
	 * @type {number}
	 * */
	opacity			: number,

	/**
	 * Changes the icon's CSS
	 *
	 * @type {CSS}
	 * */
	css				: CSS,
};

//	Exports
export type {
	IconName,
	IconList,
	ComposeIconCssProps,
};
