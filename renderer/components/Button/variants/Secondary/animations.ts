//	Helper Imports
import { composeFontColor, shadeColor } from '@/helpers';

//	Declare button animations
const SecondaryButtonAnimations = ({ color, borderColor }) => ({
	hover			: {
		color			: composeFontColor(borderColor || color),
		backgroundColor	: shadeColor(borderColor || color, -0.1),
		borderColor		: shadeColor(borderColor || color, -0.1),
	},
});

//  Exports
export {
	SecondaryButtonAnimations,
};
