const chuck = require('./index');

Object.entries(chuck).forEach((solution) => {
    const [name, func] = solution;

    describe(`test function ${name}`, () => {
        test('given [1, 2, 3, 4] and chunk size 2 should return [[1, 2], [3, 4]]', () => {
            const arr = [1, 2, 3, 4];
            const chucked = func(arr, 2);

            expect(chucked).toEqual([[1, 2], [3, 4]]);
        });
    });
});
