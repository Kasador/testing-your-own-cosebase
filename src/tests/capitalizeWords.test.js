import {capitalizeWords} from './index';
// capitalizeWords.test.js

describe('capitalizeWords', () => {
    test('capitalizes the first letter of each word in a string', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('returns an empty string if input is empty', () => {
        expect(capitalizeWords('')).toBe('');
    });

    test('handles strings with multiple spaces correctly', () => {
        expect(capitalizeWords('hello   world')).toBe('Hello   World');
    });

    test('handles strings with punctuation correctly', () => {
        expect(capitalizeWords('hello, world!')).toBe('Hello, World!');
    });
});

// test('handles strings with punctuation correctly', () => {
//     expect(capitalizeWords('hello, world!')).toBe('Hello, World!');
// });