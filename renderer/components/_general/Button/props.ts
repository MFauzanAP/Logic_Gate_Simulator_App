//	Type Imports
import type { CSS } from '@/themes';
import type { ReactNode } from 'react';
import type { IconPlacement } from './types';
import type { ComponentProps } from '@/types';

//	Declare component props
interface ButtonProps extends ComponentProps {
	/** What element should the button be rendered as? */
	as?				: 'button' | 'a',
	/** The button's text */
	label?			: string,
	/** What icon should be displayed? */
	icon?			: ReactNode,
	/** Where should the icon be placed? */
	iconPlacement?	: IconPlacement,

	/** Changes the main container's CSS */
	css?			: CSS,
	/** Changes the button label's CSS */
	labelCss?		: CSS,
	/** Changes the button icon's CSS */
	iconCss?		: CSS,

	/** Specifies which link should be opened when the button is clicked. Button must be an <a/> element */
	href?			: string,
	/** Function called when the button is clicked */
	onClick?		: () => void,
}

//	Exports
export default ButtonProps;
