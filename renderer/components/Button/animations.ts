//	Helper Imports
import { shadeColor } from '@/helpers';

//	Declare button animations
const ButtonAnimations = ({ backgroundColor }) => ({
	disabled		: {
		color			: '#E4E4F0',
		backgroundColor	: '#F8F8F8',
		backgroundImage	: 'none',
		border			: 'none',
	},
	hover			: {
		backgroundColor	: shadeColor(backgroundColor, -0.1),
	},
});

//  Exports
export {
	ButtonAnimations,
};
