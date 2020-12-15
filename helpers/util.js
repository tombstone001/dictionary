const { getUserLocale, getUserLocales } = require('get-user-locale');

const findUserLocale = (locale) => {
	return null;
}

/**
 * This function checks if a string represents
 * a real word or not
 * 
 * @param { String } word  - this is the thing to define
 */
const validateWord = (word) => {
	
	if (word === undefined || word.length <= 0) {
		console.log("Please provide a valid word to define");
		process.exit(-1);
	} else if (word.startsWith('-')) {
		console.log("Please provide a valid word to define");
		process.exit(-1);
	} else return word
}

/**
 * This function isnt doing nothing much
 * 
 * @param {sting} lang 
 */
const validateLang = (lang = "en") => {

	return lang !== "en" ? getUserLocale(): findUserLocale(lang);

	console.log("Validating lang");
	return getUserLocale().split("-")[0];
}
/**
 * This function is called when a explanation
 * has been found I guess
 * 
 * @param { Object } explanation 
 */
const define = (explanation) => {

	const { word, category, definition } = explanation;

	// if there is not explanation for a given word, exit the program
	if (typeof explanation === undefined || typeof category === undefined) {
		console.log(`${word} - [${category}] ${definition}`);
	} else if (explanation === undefined || category === undefined) {
		console.log(" - Sorry, the word is either mispelled or does not exist");
		process.exit(-1);
	} else {
		console.log("its not clear what went wrong, please try again.");
	}

};

module.exports = {
	validateWord,
	validateLang,
	define
};