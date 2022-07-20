//	Type Imports
import type { CSS } from '@/themes';
import type { HelperFunctionProps } from './types';

//	Declare function to compose icon css
const composeIconCss = ({ width, height, rotation, color, thickness, linecap }: HelperFunctionProps) => {

	//	Declare output css
	const output: CSS = {
		stroke			: color,
		strokeWidth		: thickness,
		strokeLinecap	: linecap as unknown as string,
		transform		: `rotate(${rotation}deg)`,
		width,
		height,
	};

	//	Return css object
	return output

};

//	Exports
export {
	composeIconCss,
};
