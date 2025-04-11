const sumAll = function(int1, int2) {
  if(int1 == undefined || int2 == undefined){
    return "ERROR"
  }
  
  let startInt;
  let endInt;
  
  //Assigns the variables in correct order way 1
  // if(int1 < int2) {
  //   startInt = int1;
  //   endInt = int2;
  // } else {
  //   startInt = int1;
  //   endInt = int2;
  // }

  //Assigns the variables in correct order way 2

  let sortIntegers = [int1,int2];
  sortIntegers.sort((a,b) => a-b);
  startInt = sortIntegers[0];
  endInt = sortIntegers[1];

  console.log();
  //Error Checking
  if(!((Number.isSafeInteger(startInt)) && (startInt >= 0) && (Number.isSafeInteger(endInt)) && (endInt >= 0))) {
    return "ERROR";
  }

  // The Sum and Return
  let sumArray = [];
  for(let i = startInt; i <= endInt; i++){
    sumArray.push(i);
  }
  let total = 0;
  for(const integer of sumArray){
    total += integer;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
