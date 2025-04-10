const reverseString = function(str) {
  let strArray = str.split("");
  let strArrayLength = strArray.length;
  let reverseStrArray = [];
  for (let i=strArrayLength - 1; i >= 0; i--) {
    reverseStrArray.push(strArray[i]);
  }
  let reverseStr = reverseStrArray.join("");
  return reverseStr;
};

console.log(reverseString("hello world"));
// Do not edit below this line
module.exports = reverseString;
