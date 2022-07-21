//	Package Imports
import React from 'react';

//	Constants Imports
import Icons from './constants';

//	Helper Imports
import { composeIconCss } from './helpers';

//	Style Imports
import { styled } from '@/themes';

//	Type Imports
import type Props from './props';

//	Declare component
const Icon = ({
	name,
	width,
	height,
	size,
	rotation,
	fill,
	stroke,
	thickness,
	linecap,
	...props
}: Props) => {

	//	Extract icon component
	const IconElement = styled(Icons[name]);

	//	Compose css
	const css = composeIconCss({
		width,
		height,
		size,
		rotation,
		fill,
		stroke,
		thickness,
		linecap,
	});

	//	Return component jsx
	return <IconElement css={css} {...props} />;

};

//	Set default props
Icon.defaultProps = {
	rotation	: 0,
	fill		: 'inherit',
	stroke		: 'inherit',
	thickness	: 2,
	linecap		: 'round',
};

//  Exports
export default Icon;
