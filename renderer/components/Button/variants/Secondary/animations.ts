//	Declare button animations
const SecondaryButtonAnimations = ({ color, borderColor }) => ({
	disabled		: {
		color			: '#E4E4F0',
		backgroundColor	: '#F8F8F8',
		backgroundImage	: 'none',
		border			: 'none',
	},
	hover			: {
		y				: -2,

		boxShadow		: `0 2px 0 0 ${borderColor || color}`,
	},
	tap				: {
		y				: -1,

		filter			: 'brightness(85%)',

		boxShadow		: `0 1px 0 0 ${borderColor || color}`,
	},
});

//  Exports
export {
	SecondaryButtonAnimations,
};
