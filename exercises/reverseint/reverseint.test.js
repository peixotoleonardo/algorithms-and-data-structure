const reverseint = require('./reverseint');

const data = [
    [15, 51],
    [1431, 1341],
    [500, 5],
    [100, 1],
    [-9, -9]
];
Object.entries(reverseint).forEach((solution) => {
    const [name, func] = solution;

    describe(`test function ${name}`, () => {
        data.forEach((sut) => {
            test(`given ${sut[0]} should return ${sut[1]}`, () => {
                expect(func(sut[0])).toBe(sut[1]);
            });
        });
    })
});