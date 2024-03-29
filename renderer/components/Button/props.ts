//	Type Imports
import type { Component } from 'react';
import type { MotionProps } from 'framer-motion';
import type { ComponentProps } from '@/types';
import type { IconName, IconProps } from '@/components/Icon';

//	Declare component props
interface ButtonProps extends ComponentProps, MotionProps {
	/**
	 * What element should the button container be rendered as?
	 *
	 * @type {Component}
	 * */
	as?				: Component | any,

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
	 * @type {IconName}
	 * @default null
	 * */
	startIcon?		: IconName,

	/**
	 * What icon should be displayed at the end?
	 *
	 * @type {IconName & ReactNode}
	 * @default null
	 * */
	endIcon?		: IconName,

	/**
	 * Passes these props to label component
	 *
	 * @type {ComponentProps}
	 * @default null
	 * */
	labelProps?		: ComponentProps,

	/**
	 * Passes these props to start icon component
	 *
	 * @type {IconProps}
	 * @default null
	 * */
	startIconProps?	: IconProps,

	/**
	 * Passes these props to end icon component
	 *
	 * @type {IconProps}
	 * @default null
	 * */
	endIconProps?	: IconProps,

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
