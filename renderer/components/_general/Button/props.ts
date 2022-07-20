//	Type Imports
import type { CSS } from '@/themes';
import type { ReactNode } from 'react';
import type { IconPlacement } from './types';
import type { ComponentProps } from '@/types';

//	Declare component props
interface ButtonProps extends ComponentProps {
	label?			: string,
	icon?			: ReactNode,
	iconPlacement?	: IconPlacement,

	css?			: CSS,
	labelCss?		: CSS,
}

//	Exports
export default ButtonProps;
