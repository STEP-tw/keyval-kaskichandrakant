const Parser=require("./keyValueParser.js");
const strictParseInfoCreator=require("./parseInfoCreator.js").strict;

var StrictParser=function(listOfKeys,ignoreCase=true) {
  Parser.call(this);
  let sanitisedListOfKeys=listOfKeys||[];
  if(ignoreCase){
    sanitisedListOfKeys=listOfKeys.map((ele)=>ele.toLowerCase())||[];
    console.log(sanitisedListOfKeys);
  }
  this.parseInfoCreator=strictParseInfoCreator(sanitisedListOfKeys);
}

StrictParser.prototype=Object.create(Parser.prototype);
module.exports=StrictParser;
