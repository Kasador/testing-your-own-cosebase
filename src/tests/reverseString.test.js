import {reseveseString} from './index';

describe('reverseString', () => {
    test('should return the reverse of a string', () => {
        const input = 'hello';
        const expectedOutput = 'olleh';
        const result = reseveseString(input);
        expect(result).toBe(expectedOutput);
    });

    test('should handle an empty input', () => {
        const input = '';
        const expectedOutput = '';
        const result = reseveseString(input);
        expect(result).toBe(expectedOutput);
    });

    test('should handle input with spaces', () => {
        const input = ' hello ';
        const expectedOutput = ' olleh ';
        const result = reseveseString(input);
        expect(result).toBe(expectedOutput);
    });

    test('should handle input with special characters', () => {
        const input = 'hello!@#';
        const expectedOutput = '#@!olleh';
        const result = reseveseString(input);
        expect(result).toBe(expectedOutput);
    });
});