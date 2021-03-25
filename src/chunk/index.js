'strict mode';

/**
 * Given an array and chunk size, divide the array into many subarrays
 * where each subarray is of length size
 */

const chunkSolution1 = (array, size) => {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }

    return chunked;
};

const chunkSolution2 = (array, size) => {
    const chunked = [];

    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, size + i));
    }

    console.log(chunked);
    return chunked;
};

module.exports = {
    chunkSolution1,
    chunkSolution2,
}