//	Helper Imports
import { shadeColor } from '@/helpers';

//	Declare button animations
const PrimaryButtonAnimations = ({ backgroundColor }) => ({
	hover			: {
		backgroundColor	: shadeColor(backgroundColor, -0.1),

		boxShadow		: '0 4px 16px 0 rgba(0, 0, 0, 0.15)',
	},
});

//	Declare button label animations
const PrimaryButtonLabelAnimations = {
	disabled		: {
		letterSpacing		: '0',
		fontWeight			: '500',
	},
};

//  Exports
export {
	PrimaryButtonAnimations,
	PrimaryButtonLabelAnimations,
};
