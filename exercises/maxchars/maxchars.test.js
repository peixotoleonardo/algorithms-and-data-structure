const maxchars = require('./maxchars');

Object.entries(maxchars).forEach((solution) => {
    const [name, func] = solution;
  
    describe(`test function ${name}`, () => {
      test('given abba should return a', () => {
        expect(func('abba')).toBe('a');
      });

      test('given 111222312211111 should return 1', () => {
        expect(func('111222312211111')).toBe('1');
      });
    });
  });
  