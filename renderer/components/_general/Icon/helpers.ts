//	Type Imports
import type { CSS } from '@/themes';
import type { HelperFunctionProps } from './types';

//	Declare function to compose icon css
const composeIconCss = ({
	width,
	height,
	size,
	rotation,
	fill,
	stroke,
	thickness,
	linecap,
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
	};

	//	Return css object
	return output;

};

//	Exports
export {
	composeIconCss,
};
