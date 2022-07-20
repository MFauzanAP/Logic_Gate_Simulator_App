//	Type Imports
import type { CSS } from '@/themes';
import type { IconName } from './types';
import type { ComponentProps } from '@/types';

//	Declare component props
interface IconProps extends ComponentProps {
	name			: IconName,
	width?			: number | string,
	height?			: number | string,
	rotation?		: number,
	fill?			: string,
	stroke?			: string,
	thickness?		: number,
	linecap?		: string,

	css?			: CSS,
}

//	Exports
export default IconProps;
