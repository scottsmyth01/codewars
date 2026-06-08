/*
Your task is to add up letters to one letter.
The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
*/

const tests = [
  [['a', 'b', 'c'], 'f'],
  [['z'], 'z'],
  [['a', 'b'], 'c'],
  [['c'], 'c'],
  [['z', 'a'], 'a'],
  [['y', 'c', 'b'], 'd'],
  [[], 'z'],
];

function addLetters(...letters) {
  if (letters.length === 0) {
    return 'z';
  }

  let sum = 0;
  for (let i = 0; i < letters.length; i++) {
    let char = letters[i];
    let num = char.charCodeAt(0);
    let alphaVal = num - 96;
    sum += alphaVal;
  }
  while (sum > 26) {
    sum = sum - 26;
  }
  return String.fromCharCode(sum + 96);
}

// EQUALS 'D'; notice overflow
console.log(addLetters('y', 'c', 'b'));
console.log(addLetters('w', 'f', 'r', 'u', 'z', 'c', 'z'));
