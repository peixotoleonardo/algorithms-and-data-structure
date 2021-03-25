const same = require('./index');

describe('Test same function', () => {
    test('should return true', () => {
        expect(same([2, 10], [4, 100])).toBe(true)
    })

    test('given two array with different length should return false', () => {
        expect(same([2, 10], [4])).toBe(false)
    })

    test('should return false', () => {
        expect(same([2, 10], [5, 4])).toBe(false)
    })
})