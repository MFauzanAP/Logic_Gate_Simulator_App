//	Type Imports
import type { ComponentChildren } from '@/types';
import type { IntrinsicElementsKeys } from '@stitches/react/types/styled-component';

//	Declare component props type
interface ComponentProps {
	/**
	 * What element should the component be rendered as?
	 * 
	 * ! **NOTE** Only accepts basic HTML elements!
	 * 
	 * @example
	 * as={'button'}
	 * 
	 * @type {IntrinsicElement}
	 */
	as?				: IntrinsicElementsKeys,

	/**
	 * The component's children.
	 * 
	 * @type {ComponentChildren}
	 */
	children?		: ComponentChildren,

	[x: string]		: any,
}

//	Exports
export default ComponentProps;
