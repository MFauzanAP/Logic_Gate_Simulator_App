//	Declare button animations
const SecondaryButtonAnimations = {
	initial			: {
		color			: '#7D40FF',
		backgroundColor	: 'rgba(255, 255, 255, 0)',
		border			: '2px solid #7D40FF',
	},
	disabled		: {
		color			: '#E4E4F0',
		backgroundColor	: '#F8F8F8',
		backgroundImage	: 'none',
		border			: 'none',
	},
	hover			: {
		y				: -2,

		boxShadow		: '0 2px 0 0 #7D40FF',
	},
	tap				: {
		y				: -1,

		backgroundColor	: '#F5F5F5',

		boxShadow		: '0 1px 0 0 #7D40FF',
	},
};

//  Exports
export {
	SecondaryButtonAnimations,
};
