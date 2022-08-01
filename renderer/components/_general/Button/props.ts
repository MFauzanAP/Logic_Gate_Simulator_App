//	Type Imports
import type { CSS } from '@/themes';
import type { ReactNode } from 'react';
import type { IconName } from '@/components/_general/Icon';
import type { ComponentProps } from '@/types';

//	Declare component props
interface ButtonProps extends ComponentProps {
	/**
	 * What element should the button be rendered as?
	 *
	 * ! **NOTE** when rendering as an `<a />` you must pass a `href` tag!
	 *
	 * @type {'button' | 'a'}
	 * @default 'button'
	 * */
	as?				: 'button' | 'a',

	/**
	 * The button's text
	 *
	 * @type {string}
	 * @default 'Button''
	 * */
	label?			: string,

	/**
	 * Specifies which link should be opened when the button is clicked. Button must be an `<a />` element
	 *
	 * @type {string}
	 * */
	href?			: string,

	/**
	 * Is the button disabled?
	 * 
	 * A disabled button cannot be clicked and will have a greyed out appearance
	 * 
	 * @type {boolean}
	 * */
	disabled?		: boolean,

	/**
	 * Specifies the shape of the button
	 * 
	 * @type {'block' | 'pill'}
	 * */
	shape?			: 'block' | 'pill',

	/**
	 * What icon should be displayed at the start?
	 *
	 * @type {IconName & ReactNode}
	 * @default null
	 * */
	startIcon?		: IconName & ReactNode,

	/**
	 * What icon should be displayed at the end?
	 *
	 * @type {IconName & ReactNode}
	 * @default null
	 * */
	endIcon?		: IconName & ReactNode,

	/**
	 * Changes the main container's CSS
	 *
	 * @type {CSS}
	 * @default null
	 * */
	css?			: CSS,

	/**
	 * Changes the button label's CSS
	 *
	 * @type {CSS}
	 * @default null
	 * */
	labelCss?		: CSS,

	/**
	 * Changes the start icon's CSS
	 *
	 * @type {CSS}
	 * @default null
	 * */
	startIconCss?	: CSS,

	/**
	 * Changes the end icon's CSS
	 *
	 * @type {CSS}
	 * @default null
	 * */
	endIconCss?		: CSS,

	/**
	 * Function called when the button is clicked
	 *
	 * @type {Function}
	 * @default null
	 * */
	onClick?		: () => void,
}

//	Exports
export default ButtonProps;
