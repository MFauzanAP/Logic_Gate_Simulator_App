//	Type Imports
import type { ReactNode } from 'react';
import type { ComponentProps } from '@/types';
import type { CSS } from '@/themes';

//	Declare component props
interface ButtonProps extends ComponentProps {
	label?			: string,
	icon?			: ReactNode,

	css?			: CSS,
	labelCss?		: CSS,
}

//	Exports
export default ButtonProps;
