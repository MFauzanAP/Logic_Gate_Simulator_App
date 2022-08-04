//	Declare button animations
const PrimaryButtonAnimations = {
	initial			: {
		color			: '#FFFFFF',
		backgroundColor	: '#7D40FF',
	},
	disabled		: {
		color			: '#E4E4F0',
		backgroundColor	: '#F8F8F8',
		backgroundImage	: 'none',
		border			: 'none',
	},
	hover			: {
		y			: -4,

		scale		: 1.01,

		boxShadow	: '0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 4px 0 0 #7D40FF',
	},
	tap				: {
		y				: -2,

		backgroundColor	: '#6D32EC',

		boxShadow		: '0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 2px 0 0 #7D40FF',
	},
};

//	Declare button label animations
const PrimaryButtonLabelAnimations = {
	initial			: {
		letterSpacing	: '0.025rem',
		fontWeight		: '600',
	},
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
