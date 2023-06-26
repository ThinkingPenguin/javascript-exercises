const add = function(a , b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a-b;
	
};

const sum = function(array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue}, 0);
	
};

const multiply = function(...args) {
  return args.reduce((accumulator, currentValue) => {
    return accumulator * currentValue}, 1);

};

const power = function(a, b) {
  return a**b;
	
};

const factorial = function(a) {
  let result = 1;
  if (a === 0){
    return 1;
  }
  else for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
	
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
