//	Component Imports
import Button from '../Button';

//	Type Imports
import type ButtonProps from '../props';

//	Declare variant
const Primary = (props: ButtonProps) => (
	<Button
		css			= {{
			backgroundColor	: '$purple400',
			stroke			: '$text100',
		}}
		labelCss	= {{
			color			: '$text100',
		}}
		{...props}
	/>
);

//  Exports
export default Primary;
