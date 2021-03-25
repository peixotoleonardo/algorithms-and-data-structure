/**
 * Given an integer, return  an integer that is the reverse
 * ordering of numbers.
 */

const { reversestringSolution1 } = require("../reversestring/reversestring")

const reverseintSolution1 = (num) => Math.sign(num) * Number
    .parseInt(reversestringSolution1(num.toString(10)), 10)

module.exports = {
    reverseintSolution1
}