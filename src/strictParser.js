const Parser = require("./keyValueParser.js");
const strictParseInfoCreator = require("./parseInfoCreator.js").strict;

var StrictParser = function(listOfKeys, caseSensitive = true) {
  this.caseSensitive=caseSensitive
  Parser.call(this);
  let sanitisedListOfKeys = listOfKeys || [];
  this.parseInfoCreator = strictParseInfoCreator(sanitisedListOfKeys,this.caseSensitive);
}

StrictParser.prototype = Object.create(Parser.prototype);
module.exports = StrictParser;
