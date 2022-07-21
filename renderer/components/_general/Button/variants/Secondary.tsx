//	Component Imports
import Button from '../Button';

//	Type Imports
import type ButtonProps from '../props';

//	Declare variant
const Secondary = (props: ButtonProps) => (
	<Button
		css			= {{
			backgroundColor	: '$background100',
			border			: '2px solid $purple400',
			stroke			: '$purple400',
		}}
		labelCss	= {{
			color			: '$purple400',
			fontWeight		: '700',
		}}
		{...props}
	/>
);

//  Exports
export default Secondary;
