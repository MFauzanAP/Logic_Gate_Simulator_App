//	Package Imports
import React from 'react';
import { styled } from '@/themes';

const Button = styled('button', {
	color				: '$text600',
	backgroundColor		: '$background100',
	border				: '2px solid $blue400',
	borderRadius		: 10,
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
