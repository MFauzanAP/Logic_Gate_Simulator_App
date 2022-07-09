//	Package Imports
import React from 'react';
import { styled } from '@/themes';

const Button = styled('button', {
	backgroundColor		: 'transparent',
	typeface			: '$header400',
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
