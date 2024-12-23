import {findMax} from './index';

describe('findMax', () => {
    test('should return the maximum number in an array', () => {
        const input = '1,2,3,4,5';
        const expectedOutput = 5;
        const result = findMax(input);
        expect(result).toBe(expectedOutput);
    });

    test('should handle an empty input', () => {
        const input = '';
        const expectedOutput = 0;
        const result = findMax(input);
        expect(result).toBe(expectedOutput);
    });

    test('should handle non-numeric characters in input', () => {
        const input = '1a2b3c';
        const expectedOutput = 3;
        const result = findMax(input);
        expect(result).toBe(expectedOutput);
    });

    test('should handle input with spaces', () => {
        const input = ' 1 2 3 ';
        const expectedOutput = 3;
        const result = findMax(input);
        expect(result).toBe(expectedOutput);
    });

    test('should handle input with special characters', () => {
        const input = '1,2,3!@#4$%^5';
        const expectedOutput = 5;
        const result = findMax(input);
        expect(result).toBe(expectedOutput);
    });
});