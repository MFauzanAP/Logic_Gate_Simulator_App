//	Imports
import BaseColors from './base';
import DarkColors from './dark';
import LightColors from './light';

//	Declare themed colors
const darkColors = { ...BaseColors, ...DarkColors };
const lightColors = { ...BaseColors, ...LightColors };

//	Exports
export {
	darkColors as DarkColors,
	lightColors as LightColors,
};
