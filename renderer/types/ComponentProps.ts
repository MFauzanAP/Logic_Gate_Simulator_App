//	Type Imports
import type { ComponentChildren } from '@/types';
import type { IntrinsicElementsKeys } from '@stitches/react/types/styled-component';

//	Declare component props type
interface ComponentProps {
	as?				: IntrinsicElementsKeys,
	children?		: ComponentChildren,
	[x: string]		: any,
}

//	Exports
export default ComponentProps;
