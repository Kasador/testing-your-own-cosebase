import './index.scss'; // imports >>>
/* REFS >>> 
    1) https://jestjs.io/docs/getting-started
    2) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    3) https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
    4) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    5) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions
    6) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    7) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    8) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match // https://stackoverflow.com/questions/18619785/using-regex-to-match-digits
    9) https://www.freecodecamp.org/news/4-main-differences-between-foreach-and-map/
    10) https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit
*/

console.log('JS (JavaScript) file connected.');
// variables >>>
const sumOfArrayBtn = document.getElementById('sum-of-array-btn');
(() => { // IIFE >>>
    // prevent refresh on form submit
    document.querySelectorAll('.form').forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
        });
    });
    // const output = []; // output array, >>> didn't use due to the fact that .match() actually returns an array, which is then used to be filtered and stored into a new array value, called arr.
    const sumOfArray = () => { // sum of array elements >>>
        let userInput = document.getElementById('sum-of-array').value;
        // userInput = parseInt(userInput); .match() only works with string values, not numbers! 
        let stringToArr = userInput.match(/\d/g); // filter user input using regex // this will return an array with strings in the values. 
        console.log(stringToArr, "array with string values"); 
        const arr = [...stringToArr].map(num => parseInt(num)); // string to number, .map() returns a new array and goes through all the values like a .forEach(), using [...Array], we can convert the string array into numbers and return another array, inputting it back into the prvious one.
        console.log(arr, "array converted into number values");
        const sum = arr.reduce((acc, val) => acc + val); // reduce() method takes in 3 total parameters, however 2 are required while 1 is not. It uses a callbackFn to increase in index pos, and if not specified for the 3 paramenter, it will be of index [0], if you wanted to start at the 3rd element[2], then it will be Array.reduce(callbackFn, value, 2). 2 being the initialValue.
        console.log(sum);
        
        // output
        let output = document.getElementById('sum-of-array-result');
        document.getElementById('sum-of-array').value = '';
        output.innerHTML = sum + ` (${userInput})`;
    }

    sumOfArrayBtn.addEventListener('click', sumOfArray);

    const reverseString = () => { // reverse string >>>

    };

    const findMax = () => { // find max number in array >>>
        const arr = [1, 2, 3, 4, 5];
        const max = Math.max(...arr);
        console.log(max);
    };

    const capitalizeWords = () => { // capitalize words >>>

    };

    findMax();
})();