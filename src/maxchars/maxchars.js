/**
 * Given a string, return the character that is most
 * commonly used in the string
 */

const maxChar = (str) => {
    let maxChar = '';
    let max = 0;

    const charMap = [...str].reduce((chars, char) => {
        chars[char] = chars[char] + 1 || 1;

        return chars;
    }, {});

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char
        }
    }

    return maxChar;
}

//     str.split('').reduce((char, chars) => {
//     if (char in chars) {
//         ++chars[char];
//     } else {
//         chars[char] = 1;
//     }

//     return chars;
// }, {});

module.exports = {
    maxChar
}

