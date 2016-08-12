function middleCharacter (str) {

  var result = '';

  if (str.length <= 2){result = str};
  if (str.length > 2) {result = middleCharacter(str.slice(1,-1))};

  return result

}


// function getMiddle(str)
// {
//
//   if (str.length <= 2){return str};
//
//   if (str.length > 2) {return getMiddle(str.slice(1,-1))};
//
// }





module.exports = middleCharacter;