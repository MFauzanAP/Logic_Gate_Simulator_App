//	Component Imports
import Button from '@/components/_general/Button';

//	Type Imports
import type { ButtonProps } from '@/components/_general/Button';

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
