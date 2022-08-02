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

		textDecoration		: 'none',

		variants			: {
			disabled			: {
				true				: {
					cursor				: 'default',

					backgroundColor		: '$background200',
				},
			},

			shape				: {
				block				: {
					borderRadius		: '$radii0',
				},
				pill				: {
					borderRadius		: '$radiiInfinity',
				},
			},
		},

		defaultVariants		: {
			//	@ts-ignore
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

		variants			: {
			disabled			: {
				true				: {
					color				: '$text200',

					fontWeight			: '500',
				},
			},
		},
	},
);

//	Declare button link styling
const ButtonLink = styled(
	'a',
	{
		textDecoration		: 'none',
	},
);

//	Exports
export {
	ButtonContainer,
	ButtonLabel,
	ButtonLink,
};
