/**
 * Function used to delay test execution for a number of milliseconds
 * 
 * @param	{number}	duration		The number of milliseconds to delay
 * @returns	{Promise}					A promise object that will be resolved in the given number of milliseconds
 */
const testSleep = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration));

//  Exports
export default testSleep;
