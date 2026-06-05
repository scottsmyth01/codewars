/*
Write a function argumentsLength that returns the count of arguments passed to it.
 

Example 1:

Input: args = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
Example 2:

Input: args = [{}, null, "3"]
Output: 3
Explanation: 
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3.
*/

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

var argumentsLength = function (...args) {
  let total = 0;
  if (args.length === 1 && Array.isArray(args[0])) {
    return args[0].length;
  }
  for (let i = 0; i < args.length; i++) {
    total += 1;
  }
  return total;
};

console.log(argumentsLength(1, 2, 3));
console.log(argumentsLength([{}, null, '3'])); //3
console.log(argumentsLength([53, 535, 3, 214, 24, 25, 6, 2, [3, 2]]));
console.log(argumentsLength([5]));
