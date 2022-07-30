//	Imports
import { css } from '@/themes';

//	Declare flex container style
const flexContainer = css({
	$$hAlign		: 'flex-start',
	$$vAlign		: 'flex-start',

	display			: 'flex',
	justifyContent	: '$$vAlign',
	alignItems		: '$$hAlign',
	flexDirection	: 'column',

	variants		: {
		direction		: {
			column			: {
				flexDirection	: 'column',
			},
			row			: {
				flexDirection	: 'row',
			},
		},
		hAlign			: {
			left			: {
				$$hAlign	: 'flex-start',
			},
			center			: {
				$$hAlign	: 'center',
			},
			right			: {
				$$hAlign	: 'flex-end',
			},
		},
		vAlign			: {
			left			: {
				$$vAlign	: 'flex-start',
			},
			center			: {
				$$vAlign	: 'center',
			},
			right			: {
				$$vAlign	: 'flex-end',
			},
		},
	},

	compoundVariants	: [
		{
			direction		: 'row',
			css				: {
				justifyContent	: '$$hAlign',
				alignItems		: '$$vAlign',
			},
		},
	],
});

//	Exports
export {
	flexContainer,
};
