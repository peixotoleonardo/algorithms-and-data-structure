/**
 * Given a string, return true if the string is palindrome
 * or false if it is not. Palindromes are strings that form
 * the same word if it is reversed. Do include spaces and
 * punctuation in determining if the string is palindrome
 */

const { reversestringSolution1 } = require('../reversestring');

function palindromeSolution1(str) {
    str = str.toLowerCase();

    return str === reversestringSolution1(str);
}

function palindromeSolution2(str) {
    str = str.toLowerCase();

    return str.split('').every((char, index) => char === str[str.length - index - 1]);
}

module.exports = {
    palindromeSolution1,
    palindromeSolution2,
}
