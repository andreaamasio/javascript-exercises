const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	return array.reduce((accumulator,next)=>
  accumulator+next,0)
};

const multiply = function(array) {
  return array.reduce((accumulator,next)=>
  accumulator*next,1)
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(x) {
  if (x===0) return 1
	let accumulator=1
  for (let i=1;i<=x;i++){    
    accumulator*=i    
  }
  return accumulator
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
