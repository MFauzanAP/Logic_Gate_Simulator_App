//	Style Imports
import { styled } from '@/themes';
import { clickable, flexCenter } from '@/styles';

//	Declare button container styling
const ButtonContainer = styled(
	'button',
	clickable,
	flexCenter,
	{
		height				: '$space8',

		px					: '$space4',

		flex				: '0',
		flexGrow			: '0',
		gap					: '$space2',

		backgroundColor		: '$background200',
		border				: 'none',
	}
);

//	Declare button label styling
const ButtonLabel = styled(
	'p',
	{
		color				: '$text600',

		typeface			: '$button100',
	},
);

//	Exports
export {
	ButtonContainer,
	ButtonLabel,
};