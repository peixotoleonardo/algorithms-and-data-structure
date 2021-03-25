const reversestring = require('./reversestring');

Object.entries(reversestring).forEach((solution) => {
  const [name, func] = solution;

  describe(`test function ${name}`, () => {
    test('given apple should return elppa', () => {
      expect(func('apple')).toBe('elppa');
    });
  });
});
