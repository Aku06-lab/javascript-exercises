const add = function(a ,b) {
  return a + b ;

};

const subtract = function(b, a) {
  return b - a;
	
};

const sum = function(arr) {
  return arr.reduce((prev, current) => prev + current,0)
	
};

const multiply = function(arr) {
  return arr.reduce((prev, current) => prev * current, 1)


};

const power = function(a,b) {
  return a**b
	
};

const factorial = function(number) {
  let result = 1;
  for(let i = 1; i<=number ; i++){
    result *= i;
  }
  return result
	
};

add(2,2)
subtract(10,4)
sum([7])
multiply([2,4])
power(4,3)
factorial(5)
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
