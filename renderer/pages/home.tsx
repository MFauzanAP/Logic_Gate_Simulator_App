//	Package Imports
import React from 'react';
import Button from '@/components/_general/Button';
import Icon from '@/components/_general/Icon';

//	Declare home page component
const Home = () => {

	//	Return page
	return (
		<>

			<Button
				label			= {'Done'}
				icon			= {<Icon name={'checkmark'} width={'$space2'} height={'$space2'} thickness={2} stroke={'$text600'} />}
			/>
			<Button
				css				= {{ width: 50, height: 40, gradient: '$linear100' }}
				label			= {''}
				icon			= {<Icon name={'home'} width={'$space4'} height={'$space4'} thickness={0} fill={'$text100'} />}
			/>

			<Icon name={'zoomIn'} width={'$space4'} height={'$space4'} thickness={2} stroke={'$text600'} />

		</>
	);

}

//	Exports
export default Home;
