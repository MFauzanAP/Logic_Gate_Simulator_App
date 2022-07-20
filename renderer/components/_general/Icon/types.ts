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
	width			: string | number,
	height			: string | number,
	rotation		: number,
	fill			: string,
	stroke			: string,
	thickness		: number,
	linecap			: string,
};

//	Exports
export type {
	IconName,
	IconList,
	HelperFunctionProps,
};
