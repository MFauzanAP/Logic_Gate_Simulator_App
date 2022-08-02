//	Media Imports
import ampersand from '@/public/icons/ampersand.svg';
import checkmark from '@/public/icons/checkmark.svg';
import chevron from '@/public/icons/chevron.svg';
import close from '@/public/icons/close.svg';
import focus from '@/public/icons/focus.svg';
import home from '@/public/icons/home.svg';
import lightBulb from '@/public/icons/light_bulb.svg';
import maximize from '@/public/icons/maximize.svg';
import microchip from '@/public/icons/microchip.svg';
import minimize from '@/public/icons/minimize.svg';
import power from '@/public/icons/power.svg';
import zoomOut from '@/public/icons/zoom_out.svg';
import zoomIn from '@/public/icons/zoom_in.svg';

//	Type Imports
import type { IconList } from './types';

//	Declare list of icons
const Icons: IconList = {
	ampersand		: { icon: ampersand, type: 'filled' },
	checkmark		: { icon: checkmark, type: 'lined' },
	chevron			: { icon: chevron, type: 'lined' },
	close			: { icon: close, type: 'lined' },
	focus			: { icon: focus, type: 'lined' },
	home			: { icon: home, type: 'filled' },
	lightBulb		: { icon: lightBulb, type: 'filled' },
	maximize		: { icon: maximize, type: 'lined' },
	microchip		: { icon: microchip, type: 'filled' },
	minimize		: { icon: minimize, type: 'lined' },
	power			: { icon: power, type: 'filled' },
	zoomOut			: { icon: zoomOut, type: 'lined' },
	zoomIn			: { icon: zoomIn, type: 'lined' },
};

//	Declare icon names
const IconNames = [
	'ampersand',
	'checkmark',
	'chevron',
	'close',
	'focus',
	'home',
	'lightBulb',
	'maximize',
	'microchip',
	'minimize',
	'power',
	'zoomOut',
	'zoomIn',
] as const;

//  Exports
export {
	Icons,
	IconNames,
};
