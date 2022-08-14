/**
 * Function used to brighten or darken a color
 * 
 * @param	{string}	color		The color to shade
 * @param	{number}	percent		How much to darken or lighten the color. Only accepts values less than 1. Negative values will darken the color whilst positive values will lighten
 * @returns	{string}				Final shaded color
 */
const shadeColor = (color: string, percent: number) => {

	//	Declare color variables
	let red = 0;
	let green = 0;
	let blue = 0;

	//	If color is in hex format
	if (color.includes('#')) {

		//	Extract red green and blue values from color string
		red = parseInt(color.substring(1, 3), 16);
		green = parseInt(color.substring(3, 5), 16);
		blue = parseInt(color.substring(5, 7), 16);

	} else if (color.includes('rgb')) {

		//	Split string into red green and blue values
		const split = color.replace('rgb(', '').replace(')', '').split(', ');

		//	Set color variables
		red = parseInt(split[0], 10);
		green = parseInt(split[1], 10);
		blue = parseInt(split[2], 10);

	} else {

		//	Return black color
		return '#000000';

	}

	//	Darken or lighten each color value
	red = Math.max(Math.min(Math.round(red * (1 + percent)), 255), 0);
	green = Math.max(Math.min(Math.round(green * (1 + percent)), 255), 0);
	blue = Math.max(Math.min(Math.round(blue * (1 + percent)), 255), 0);

	//	Return formatted color
	return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

};

//  Exports
export default shadeColor;
