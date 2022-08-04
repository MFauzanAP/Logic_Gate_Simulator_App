//	Constants Imports
import { Icons } from './constants';

//	Type Imports
import type { CSS } from '@/themes';
import type { ComposeIconCssProps } from './types';

/**
 * Composes icon css based on the passed parameters
 * 
 * Prioritises CSS prop above the rest
 * 
 * @param 	{string} 						name		Which icon should be displayed?
 * @param 	{string | number} 				width		How wide should the icon be?
 * @param 	{string | number} 				height		How tall should the icon be?
 * @param 	{string | number} 				size		Sets the width and height of the icon.
 * @param 	{number}						rotation	Sets the rotation of the icon.
 * @param 	{string}						color		Used to set the color of the icon.
 * @param 	{number}						thickness	Sets the thickness of the icon.
 * @param 	{'butt' | 'round' | 'square'}	linecap		Determines what the end of lines should look like.
 * @param 	{CSS}							css			Changes the icon's CSS.
 * @returns	{CSS}							Final icon CSS
 */
const composeIconCss = ({
	name,
	disabled,
	width,
	height,
	size,
	color,
	thickness,
	linecap,
	rotation,
	opacity,
	css,
}: ComposeIconCssProps) => {

	//	Get icon type
	const iconType = Icons[name].type;

	//	Override color if disabled
	const finalColor = disabled ? '$text200' : color;
	console.log(name, disabled, finalColor);

	//	Declare output css
	const output: CSS = {
		strokeWidth		: thickness,
		strokeLinecap	: linecap as unknown as string,
		transform		: `rotate(${rotation}deg)`,
		width			: width || size,
		height			: height || size,
		fill			: iconType === 'filled' ? finalColor : undefined,
		stroke			: iconType === 'lined' ? finalColor : undefined,
		opacity,
		...(css || {}),
	};

	//	Return css object
	return output;

};

//	Exports
export {
	composeIconCss,
};
