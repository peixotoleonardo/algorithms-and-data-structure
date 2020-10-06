/**
 * Given a string, return a new string with the reversed
 * order of characters
 */

const reversestringSolution1 = (str) => str.split('').reverse().join('');

const reversestringSolution2 = (str) => {
  let reversed = '';

  for (let character of str) {
    reversed = character.concat(reversed);
  }
  
  return reversed;
};

const reversestringSolution3 = (str) => {
  return str.split('').reduce(
    (reversed, character) => character.concat(reversed), 
    ''
  );
};

module.exports = {
  reversestringSolution1,
  reversestringSolution2,
  reversestringSolution3,
}
