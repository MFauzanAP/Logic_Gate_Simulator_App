//	Component Imports
import Button from '@/components/_general/Button';

//	Type Imports
import type { ButtonProps } from '@/components/_general/Button';

//	Declare variant
const Disabled = (props: ButtonProps) => (
	<Button
		css			= {{
			backgroundColor	: '$background300',
			stroke			: '$text300',
		}}
		labelCss	= {{
			color			: '$text300',
			fontWeight		: '500'
		}}
		{...props}
	/>
);

//  Exports
export default Disabled;
