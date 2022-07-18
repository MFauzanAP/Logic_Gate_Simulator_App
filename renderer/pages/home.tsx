//	Package Imports
import React from 'react';
import { styled } from '@/themes';

const Button = styled('button', {
	cursor				: 'pointer',

	height				: '40px',

	padding				: '0 16px',

	color				: '$text100',
	backgroundColor		: '$blue400',
	border				: 'none',
	borderRadius		: 10,

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
