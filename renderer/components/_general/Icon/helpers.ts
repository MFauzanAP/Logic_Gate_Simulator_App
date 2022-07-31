//	Type Imports
import type { CSS } from '@/themes';
import type { HelperFunctionProps } from './types';

/**
 * Composes icon css based on the passed parameters
 * 
 * Prioritises CSS prop above the rest
 * 
 * @param 	{string | number} 				width		How wide should the icon be?
 * @param 	{string | number} 				height		How tall should the icon be?
 * @param 	{string | number} 				size		Sets the width and height of the icon.
 * @param 	{number}						rotation	Sets the rotation of the icon.
 * @param 	{string}						fill		Some icons use this to set their color.
 * @param 	{string}						stroke		Some icons use this to set their color.
 * @param 	{number}						thickness	Sets the thickness of the icon.
 * @param 	{'butt' | 'round' | 'square'}	linecap		Determines what the end of lines should look like.
 * @param 	{CSS}							css			Changes the icon's CSS.
 * @returns	{CSS}							Final icon CSS
 */
const composeIconCss = ({
	width,
	height,
	size,
	rotation,
	fill,
	stroke,
	thickness,
	linecap,
	css,
}: HelperFunctionProps) => {

	//	Declare output css
	const output: CSS = {
		strokeWidth		: thickness,
		strokeLinecap	: linecap as unknown as string,
		transform		: `rotate(${rotation}deg)`,
		width			: size || width,
		height			: size || height,
		fill,
		stroke,
		...(css || {}),
	};

	//	Return css object
	return output;

};

//	Exports
export {
	composeIconCss,
};
