const fibonacci = function (number) {
  let num = parseInt(number);
  if (num < 0) return 'OOPS';
  if (num == 0) return 0;
  
  
  let fib = [0, 1];
  for (let i = 2; i <= num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib[fib.length - 1];
};

console.log(fibonacci(10));
// Do not edit below this line
module.exports = fibonacci;
