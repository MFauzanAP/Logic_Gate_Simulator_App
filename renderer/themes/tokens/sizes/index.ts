//	Imports
import iconSizes from "./icon";
import radiiSizes from "./radii";
import spaceSizes from "./space";

//	Declare output object
const sizes = {
	radii		: radiiSizes,
	space		: {
		...iconSizes,
		...spaceSizes,
	},
};

//	Exports
export default sizes;
