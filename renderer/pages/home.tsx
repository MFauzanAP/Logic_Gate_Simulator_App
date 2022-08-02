//	Package Imports
import React from 'react';
import Button, { PrimaryButton } from '@/components/Button';
import Icon from '@/components/Icon';

//	Declare home page component
//	eslint-disable-next-line require-jsdoc
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
				//	@ts-ignore
				startIconProps	= {{
					color			: '$text100',
					width			: '$space4',
					height			: '$space4',
				}}
			/>

			<Icon name={'chevron'} size={'$space16'} thickness={2} color={'$text600'} />

		</>
	);

};

//	Exports
export default Home;
