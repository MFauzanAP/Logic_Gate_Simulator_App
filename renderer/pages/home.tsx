//	Package Imports
import React, { useState } from 'react';
import Button, { PrimaryButton, SecondaryButton } from '@/components/Button';
import Icon from '@/components/Icon';

//	Declare home page component
const Home = () => {

	const [ disabled, setDisabled ] = useState(false);

	//	Return page
	return (
		<>

			<Button
				as				= {'a'}
				css				= {{ backgroundColor: 'red' }}
				onClick			= {() => setDisabled(!disabled)}
				label			= {'Done'}
				endIcon			= {'minimize'}
			/>
			<PrimaryButton
				css				= {{ width: '$space9', px: 0, my: '$space4' }}
				disabled		= {disabled}
				startIcon		= {'close'}
				label			= {''}
			/>
			<SecondaryButton
				css				= {{ my: '$space4' }}
				disabled		= {disabled}
				label			= {'Cancel'}
				endIcon			= {'checkmark'}
				startIcon		= {'close'}
				startIconProps	= {{
					name			: 'close',
					thickness		: 4,
				}}
			/>
			<Button
				disabled
				css				= {{ width: 50, height: 40, gradient: '$linear200' }}
				label			= {''}
				startIcon		= {'home'}
				startIconProps	= {{
					name			: 'home',
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
