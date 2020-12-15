const dictionary = require('word-definition');
const { manual } = require("./helpers/help");
const { validateWord, validateLang, define } = require('./helpers/util');

const query = process.argv[2];
const languageCode = process.argv[3];

const word = query == '-h' ? manual() : validateWord(query);

const locale = validateLang(languageCode);

const options = {
  exact: true,
  formatted: false
};

dictionary.getDef(word, locale, options, define);