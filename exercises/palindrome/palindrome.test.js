const palindrome = require('./palindrome');

Object.entries(palindrome).forEach((solution) => {
    const [name, func] = solution;
  
    describe(`test function ${name}`, () => {
      test('given abba should return true', () => {
        expect(func('abba')).toBe(true);
      });

      test('given apple should return false', () => {
        expect(func('apple')).toBe(false);
      });

      test('given repaper should return true', () => {
        expect(func('repaper')).toBe(true);
      });

      test('given Redder should return true', () => {
        expect(func('Redder')).toBe(true);
      });

      test('given \'Fish hsif\'should return true', () => {
        expect(func('Fish hsif')).toBe(true);
      })
    });
  });
  