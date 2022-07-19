//	Package Imports
import React from 'react';
import { styled } from '@/themes';

const Button = styled('button', {
	cursor				: 'pointer',

	width				: '100px',
	height				: '40px',

	mx					: '10px',
	my					: '25px',

	color				: '$text100',
	backgroundColor		: '$blue400',
	border				: 'none',
	borderRadius		: 4,

	typeface			: '$button100',
});

//	Declare home page component
const Home = () => {

	//	Return page
	return (
		<>

			<Button type={'button'}>test</Button>

		</>
	);

}

//	Exports
export default Home;
