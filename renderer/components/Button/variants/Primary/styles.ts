//	Style Imports
import { ButtonContainer, ButtonLabel } from '../../styles';
import { DarkTheme, styled } from '@/themes';

//	Declare primary button container styling
const PrimaryButtonContainer = styled(
	ButtonContainer,
	{
		height			: '$space9',

		px				: '$space8',

		color			: '$text100',
		backgroundColor	: '$purple400',
		borderRadius	: '$radiiInfinity',

		[`.${DarkTheme} &`]	: {
			color			: '$text600',
		},
	},
);

//	Declare primary button label styling
const PrimaryButtonLabel = styled(
	ButtonLabel,
	{
		letterSpacing	: '0.025rem',
		fontWeight		: '600',
	},
);

//	Exports
export {
	PrimaryButtonContainer,
	PrimaryButtonLabel,
};
