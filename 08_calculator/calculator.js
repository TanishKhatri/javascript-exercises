const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(numberArray) {
	let sum = 0;
  for(number of numberArray) {
    sum += number;
  }
  return sum;
};

const multiply = function(numberArray) {
 let multiply = 1;
 for(number of numberArray) {
  multiply *= number;
 }
 return multiply;
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(number) {
	numberFactorial = 1;
  for(let i = number; i > 0; i--) {
    numberFactorial *= i;
  }
  return numberFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
