'use strict';

const validateBrackets = string => {
  let stack = [];
  let i = 0;
  for (i = 0; i < string.length; i++) {
    let brackets = stack[stack.length - 1];
    // starting bracket push in the stack
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      stack.push(string[i]);
    } else if ((brackets === '(' && string[i] === ')') ||
      (brackets === '{' && string[i] === '}') ||
      (brackets === '[' && string[i] === ']')) {
      stack.pop()
    } else return false;
  }
  return stack.length ? false : true;
};
console.log(validateBrackets('{}(){}'));
console.log(validateBrackets('{}([]){}'));
console.log(validateBrackets('{}([){}'));
console.log(validateBrackets('{}[]){}'));
