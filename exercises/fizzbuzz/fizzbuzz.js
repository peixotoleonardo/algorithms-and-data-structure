/**
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * "fizz" instead of the  number and for the multiples of five print
 * "buzz". For numbers which  are multiples of both three and five print
 * "fizzbuzz"
 */

const fizzBuzz = n => {
    for(let i = 1; i <= n; i++) {
        const isMult3 = i % 3 === 0;
        const isMult5 = i % 5 === 0;

        if (isMult3 && isMult5) {
            console.log('fizzbuzz');
        } else if (isMult3) {
            console.log('fizz');
        } else if (isMult5) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

module.exports = {
    fizzBuzz,
}
