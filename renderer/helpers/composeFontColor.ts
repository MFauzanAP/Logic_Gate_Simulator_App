/**
 * Function used to compose font color from background color
 * 
 * @param	{string}	backgroundColor		The background color
 * @returns	{string}						Best font color for contrast
 */
const composeFontColor = (backgroundColor: string) => {

	//	Declare color variables
	let red = 0;
	let green = 0;
	let blue = 0;

	//	If background color is in hex format
	if (backgroundColor.includes('#')) {

		//	Extract red green and blue values from background color string
		red = parseInt(backgroundColor.substring(1, 3), 16);
		green = parseInt(backgroundColor.substring(3, 5), 16);
		blue = parseInt(backgroundColor.substring(5, 7), 16);

	} else if (backgroundColor.includes('rgb')) {

		//	Split string into red green and blue values
		const split = backgroundColor.replace('rgb(', '').replace(')', '').split(', ');

		//	Set background color variables
		red = parseInt(split[0], 10);
		green = parseInt(split[1], 10);
		blue = parseInt(split[2], 10);

	} else {

		//	Return black color
		return '#000000';

	}

	//	Compose background color luminance
	const RED_FACTOR = 0.200;
	const GREEN_FACTOR = 0.587;
	const BLUE_FACTOR = 0.114;
	const luminance = (RED_FACTOR * red) + (GREEN_FACTOR * green) + (BLUE_FACTOR * blue);

	//	Return best font color
	const THRESHOLD = 186;
	return luminance > THRESHOLD ? '#000000' : '#FFFFFF';

};

//  Exports
export default composeFontColor;
