//	Type Imports
import type { CSS } from '@/themes';

//	Declare icon name type
type IconName = (
	'ampersand'
	| 'checkmark'
	| 'chevron'
	| 'close'
	| 'focus'
	| 'home'
	| 'lightBulb'
	| 'maximize'
	| 'microchip'
	| 'minimize'
	| 'power'
	| 'zoomOut'
	| 'zoomIn'
);

//	Declare icon list type
type IconList = {
	readonly [key in IconName]		: any;
};

//	Declare helper function prop type
type HelperFunctionProps = {
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
	 * Some icons use this to set their color.
	 *
	 * ! **NOTE** Must be passed in as a color code!
	 *
	 * @example
	 * #000000
	 *
	 * @type {string}
	 * */
	fill			: string,

	/**
	 * Some icons use this to set their color
	 *
	 * Must be passed in as a color code
	 *
	 * @example
	 * #000000
	 *
	 * @type {string}
	 * */
	stroke			: string,

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
	 * @type {'butt' | 'round' | 'square'}
	 * */
	linecap		: 'butt' | 'round' | 'square',

	/**
	 * Sets the rotation of the icon
	 *
	 * @type {number}
	 * */
	rotation		: number,

	/**
	 * Changes the icon's CSS
	 *
	 * @type {CSS}
	 * */
	css?			: CSS,
};

//	Exports
export type {
	IconName,
	IconList,
	HelperFunctionProps,
};
