// const sumOfArray = require('../index');
import sumOfArray from '../index';

describe('sumOfArray', () => {
    test('should return the sum of an array of numbers', () => {
        const input = '1,2,3,4,5';
        const expectedOutput = 15;
        const result = sumOfArray(input);
        expect(result).toBe(expectedOutput);
    });

    test('should handle an empty input', () => {
        const input = '';
        const expectedOutput = 0;
        const result = sumOfArray(input);
        expect(result).toBe(expectedOutput);
    });

    test('should handle non-numeric characters in input', () => {
        const input = '1a2b3c';
        const expectedOutput = 6;
        const result = sumOfArray(input);
        expect(result).toBe(expectedOutput);
    });

    test('should handle input with spaces', () => {
        const input = ' 1 2 3 ';
        const expectedOutput = 6;
        const result = sumOfArray(input);
        expect(result).toBe(expectedOutput);
    });

    test('should handle input with special characters', () => {
        const input = '1,2,3!@#4$%^5';
        const expectedOutput = 15;
        const result = sumOfArray(input);
        expect(result).toBe(expectedOutput);
    });
});