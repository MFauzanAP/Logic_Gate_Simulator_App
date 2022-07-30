//	Style Imports
import { styled } from '@/themes';
import { clickable, flexContainer } from '@/styles';

//	Declare button container styling
const ButtonContainer = styled(
	'button',
	clickable,
	flexContainer,
	{
		height				: '$space8',

		px					: '$space4',

		flex				: 0,
		flexGrow			: 0,
		gap					: '$space2',

		backgroundColor		: '$background200',
		border				: 'none',
		stroke				: '$text600',
		fill				: '$text600',

		textDecoration		: 'none',

		defaultVariants		: {
			direction			: 'row',
			hAlign				: 'center',
			vAlign				: 'center',
		},
	},
);

//	Declare button label styling
const ButtonLabel = styled(
	'p',
	{
		margin				: 0,

		color				: '$text600',

		typeface			: '$button100',
		textDecoration		: 'none',
	},
);

//	Exports
export {
	ButtonContainer,
	ButtonLabel,
};
