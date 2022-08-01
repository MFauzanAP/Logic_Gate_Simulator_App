//	Package Imports
import React from 'react';
import Button, { PrimaryButton } from '@/components/_general/Button';
import Icon from '@/components/_general/Icon';

//	Declare home page component
const Home = () => {

	//	Return page
	return (
		<>

			<Button
				as				= {'a'}
				label			= {'Done'}
				endIcon			= {'checkmark'}
				endIconCss		= {{
					stroke			: '$text600',
				}}
			/>
			<PrimaryButton as={'a'} shape={'pill'} />
			<Button
				css				= {{ width: 50, height: 40, gradient: '$linear200' }}
				label			= {''}
				startIcon		= {'home'}
				startIconCss	= {{
					width			: '$space4',
					height			: '$space4',

					fill			: '$text100',
					strokeWidth		: 0,
				}}
			/>

			<Icon name={'chevron'} size={'$space16'} thickness={2} fill={'none'} stroke={'$text600'} />

		</>
	);

};

//	Exports
export default Home;
