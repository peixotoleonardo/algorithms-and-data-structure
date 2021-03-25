/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has 
 * it's corresponding values squared in the second array.
 * The frequency of values must be the same.
 */

/**
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * 
 * @returns {boolean}
 */
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const frequencyArr1 = arr1.reduce(countNumbersInArray, {});
    const frequencyArr2 = arr2.reduce(countNumbersInArray, {});

    for (const key in frequencyArr1) {
        if (!frequencyArr2[key ** 2]) {
            return false;
        }

        if (frequencyArr1[key] !== frequencyArr2[key ** 2]) {
            return false;
        }
    }

    return true
}

function countNumbersInArray(accumulator, num) {
    accumulator[num] = (accumulator[num] || 0) + 1;

    return accumulator;
}

module.exports = same;