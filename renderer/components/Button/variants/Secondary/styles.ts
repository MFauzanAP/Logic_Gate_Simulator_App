//	Style Imports
import { ButtonContainer, ButtonLabel } from '../../styles';
import { styled } from '@/themes';

//	Declare secondary button container styling
const SecondaryButtonContainer = styled(
	ButtonContainer,
	{
		height			: '$space9',

		px				: '$space8',

		color			: '$purple400',
		backgroundColor	: 'transparent',
		border			: '2px solid $purple400',
		borderRadius	: '$radiiInfinity',

		boxShadow		: '0 0 0 0 #7D40FF',
	},
);

//	Declare secondary button label styling
const SecondaryButtonLabel = styled(
	ButtonLabel,
	{
		fontWeight		: '700',
	},
);

//	Exports
export {
	SecondaryButtonContainer,
	SecondaryButtonLabel,
};
