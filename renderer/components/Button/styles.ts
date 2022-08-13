//	Package Imports
import { motion } from 'framer-motion';

//	Style Imports
import { styled } from '@/themes';
import { clickable, flexContainer } from '@/styles';

//	Declare button container styling
const ButtonContainer = styled(
	motion.button,
	clickable,
	flexContainer,
	{
		height				: '$space8',

		px					: '$space4',

		gap					: '$space2',

		color				: '$text600',
		backgroundColor		: '$background200',
		border				: 'none',

		textDecoration		: 'none',

		variants			: {
			disabled			: {
				true				: {
					'&&&'				: {
						pointerEvents		: 'none',
						cursor				: 'default',

						color				: '$text200',
						backgroundColor		: '$background200',
						backgroundImage		: 'none',
						border				: 'none',
					},
				},
			},

			round			: {
				true			: {
					aspectRatio		: '1/1',

					px				: 0,
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
	motion.p,
	{
		margin				: 0,

		color				: 'inherit',

		typeface			: '$button100',
		textDecoration		: 'none',

		variants			: {
			disabled			: {
				true				: {
					'&&&'				: {
						fontWeight			: '500',
					},
				},
			},
		},
	},
);

//	Declare button link styling
const ButtonLink = styled(
	motion.a,
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
