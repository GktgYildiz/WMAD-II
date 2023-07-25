/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function (data) {
  // Put your solution here
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (const char of data) {
    for (const vowel of vowels) {
      if (char === vowel) {
        counter++;
        break;
      }
    }
  }
  return counter;
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5

module.exports = numberOfVowels;
