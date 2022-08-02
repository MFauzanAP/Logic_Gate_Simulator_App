//	Package Imports
import React from 'react';

//	Constants Imports
import { Icons } from './constants';

//	Helper Imports
import { composeIconCss } from './helpers';

//	Style Imports
import { styled } from '@/themes';

//	Type Imports
import type Props from './props';

/**
 * Requires that you pass in a `name` prop to display an icon.
 * Can be made to spin through the `spin` prop.
 * The list of props supported is shown below. Any additional props will be passed to the root container of `<Icon>`.
 */
const Icon = ({
	name,
	width,
	height,
	size,
	rotation,
	color,
	thickness,
	linecap,
	css,
	...props
}: Props) => {

	//	Extract icon component
	const IconElement = styled(Icons[name].icon);

	//	Compose css
	const finalCss = composeIconCss({
		name,
		width,
		height,
		size,
		rotation,
		color,
		thickness,
		linecap,
		css,
	});

	//	Return component jsx
	return <IconElement css={finalCss} {...props} />;

};

//	Set default props
Icon.defaultProps = {
	rotation	: 0,
	size		: '$space4',
	color		: 'inherit',
	thickness	: 2,
	linecap		: 'round',
};

//  Exports
export default Icon;
