//	Type Imports
import type { IconName } from './types';
import type { ComponentProps } from '@/types';

//	Declare component props
interface IconProps extends ComponentProps {
	/**
	 * Which icon should be displayed?
	 * 
	 * @type {IconName}
	 * */
	name			: IconName,

	/**
	 * How wide should the icon be?
	 * 
	 * @type {number | string}
	 * */
	width?			: number | string,

	/**
	 * How tall should the icon be?
	 * 
	 * @type {number | string}
	 * */
	height?			: number | string,

	/**
	 * Sets the width and height of the icon.
	 * 
	 * ! **NOTE** this prop takes precedence over the width and height props!
	 * 
	 * @type {number | string}
	 * */
	size?			: number | string,

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
	color?			: string,

	/**
	 * Sets the thickness of the icon
	 * 
	 * ! **NOTE** only works for lined icons!
	 * 
	 * @type {number}
	 * */
	thickness?		: number,

	/**
	 * Determines what the end of lines should look like 
	 * 
	 * ! **NOTE** only works for lined icons!
	 * 
	 * @type {'butt' | 'round' | 'square'}
	 * */
	linecap?		: 'butt' | 'round' | 'square',

	/** 
	 * Sets the rotation of the icon 
	 * 
	 * @type {number}
	 * */
	rotation?		: number,

	/** 
	 * Sets the opacity of the icon 
	 * 
	 * Ranges from 0 to 1
	 * 
	 * @type {number}
	 * */
	opacity?		: number,
}

//	Exports
export default IconProps;
