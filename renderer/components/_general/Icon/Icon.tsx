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
const Icon = ({ name, width, height, size, rotation, fill, stroke, thickness, linecap, ...props }: Props) => {

	//	Extract icon component
	const IconElement = styled(Icons[name]);

	//	Return component jsx
	return <IconElement css={composeIconCss({ width, height, size, rotation, fill, stroke, thickness, linecap })} {...props} />;

};

//	Set default props
Icon.defaultProps = {
	rotation	: 0,
	fill		: 'none',
	stroke		: '$text700',
	thickness	: 2,
	linecap		: 'round',
};

//  Exports
export default Icon;
