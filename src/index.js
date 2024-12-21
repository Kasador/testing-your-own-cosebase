import './index.scss'; // imports >>>
/* REFS >>> 
    1) https://jestjs.io/docs/getting-started
    2) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    3) https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
    4) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

console.log('JS (JavaScript) file connected.');

(() => { // IIFE >>>
    const sumOfArray = () => { // sum of array elements >>>
        const arr = [1, 2, 3, 4, 5];
        const sum = arr.reduce((acc, val) => acc + val, 0);
        console.log(sum);
    }

    const reverseString = () => { // reverse string >>>

    };

    const findMax = () => { // find max number in array >>>
        const arr = [1, 2, 3, 4, 5];
        const max = Math.max(...arr);
        console.log(max);
    };

    const capitalizeWords = () => { // capitalize words >>>

    };

    sumOfArray();
})();