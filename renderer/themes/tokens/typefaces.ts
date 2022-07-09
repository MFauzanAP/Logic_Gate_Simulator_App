//  Imports
import type * as Stitches from '@stitches/react';

//	Declare typefaces type
interface TypefaceArray {
	readonly [key: string]	: {
		readonly [key: string]	: Stitches.CSS,
	},
}

//	Declare typefaces object
const typefaces: TypefaceArray = {
	header		: {
		100			: {
			fontFamily	: 'Sulphur Point, sans-serif',
			fontSize	: '18px',
			fontWeight	: '700',
		},
		200			: {
			fontFamily	: 'Sulphur Point, sans-serif',
			fontSize	: '24px',
			fontWeight	: '700',
		},
		300			: {
			fontFamily	: 'Sulphur Point, sans-serif',
			fontSize	: '32px',
			fontWeight	: '700',
		},
		400			: {
			fontFamily	: 'Sulphur Point, sans-serif',
			fontSize	: '48px',
			fontWeight	: '700',
		},
	},
	body		: {
		100			: {
			fontFamily	: 'Montserrat, sans-serif',
			fontSize	: '10px',
			fontWeight	: '400',
		},
		200			: {
			fontFamily	: 'Montserrat, sans-serif',
			fontSize	: '12px',
			fontWeight	: '500',
		},
		300			: {
			fontFamily	: 'Montserrat, sans-serif',
			fontSize	: '14px',
			fontWeight	: '500',
		},
	},
};

//  Exports
export default typefaces;
