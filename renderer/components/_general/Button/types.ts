//	Type Imports
import type { ComponentChildren } from '@/types';

//	Declare icon placement type
type IconPlacement = (
	'left'
	| 'right'
);

//	Declare helper function prop type
type HelperFunctionProps = {
	label		: string,
	children	: ComponentChildren,
};

//	Exports
export type {
	IconPlacement,
	HelperFunctionProps,
};
