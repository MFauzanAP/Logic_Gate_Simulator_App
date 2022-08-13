//	Declare button animations
const PrimaryButtonAnimations = ({ backgroundColor }) => ({
	disabled		: {
		color			: '#E4E4F0',
		backgroundColor	: '#F8F8F8',
		backgroundImage	: 'none',
		border			: 'none',
	},
	hover			: {
		y			: -2,

		scale		: 1.01,

		boxShadow	: `0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 2px 0 0 ${backgroundColor}`,
	},
	tap				: {
		y				: -1,

		filter			: 'brightness(85%)',

		boxShadow		: `0 1px 1px 0 rgba(0, 0, 0, 0.25), 0 1px 0 0 ${backgroundColor}`,
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
