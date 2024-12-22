import './index.scss'; // imports >>>
/* REFS >>> Notes: All these methods return arrays, join, split, map, match, filter, reverse, reduce, etc... 

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
    11) https://www.w3schools.com/python/ref_list_reverse.asp // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
    12) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    13) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/split // https://www.w3schools.com/jsref/jsref_split.asp
    14) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

    not sure why I make a variable to put back the array I changed, when I could just put it back into the original array used, from the methods. 
    ----------------------------------------------------------------------------------------
        Used THIS >>> stringToArr = [...stringToArr].map(num => parseInt(num))
                      const sum = stringToArr.reduce((acc, val) => acc + val);

        Instead of THIS >>> const arr = [...stringToArr].map(num => parseInt(num))
                            const sum = arr.reduce((acc, val) => acc + val);

        <<< Again, same thing on the second func...
    ----------------------------------------------------------------------------------------
        Learning not to use a bunch of variables that are not needed... DRY CODE PLEASE!!!
        
        let userInput = document.getElementById('reverse-string').value; 
        let arr = userInput.split('');
        let reversedArr = arr.reverse(); 
        let reversedStr = reversedArr.join('');

        let userInput = document.getElementById('reverse-string').value; 
        let arr = userInput.split(''); 
        arr = arr.reverse(); 
        arr = arr.join('');
*/

console.log('JS (JavaScript) file connected.');

(() => { // IIFE >>>
    // variables >>>
    const sumOfArrayBtn = document.getElementById('sum-of-array-btn');
    const reverseStringBtn = document.getElementById('reverse-string-btn');
    const findMaxBtn = document.getElementById('find-max-btn');
    const capitalizeWordsBtn = document.getElementById('capitalize-words-btn');

    // prevent refresh on form submit
    document.querySelectorAll('.form').forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
        });
    });

    // const output = []; // output array, >>> didn't use due to the fact that .match() actually returns an array, which is then used to be filtered and stored into a new array value, called arr.
    const sumOfArray = () => { // sum of array elements >>>
        // use regex expressions to filter user input 
        let userInput = document.getElementById('sum-of-array').value;
        // userInput.replace(/[^0-9\.]/g,''); // same as little d. 
        
        // userInput = parseInt(userInput); .match() only works with string values, not numbers! 
        let stringToArr = userInput.match(/\d/g); // filter user input using regex // this will return an array with strings in the values. All input is a string, so no need to match strings. They already are.
        let organizeOutput = stringToArr.join(', ');
        console.log(stringToArr, "array with string values"); 
        stringToArr = [...stringToArr].map(num => parseInt(num)); // string to number, .map() returns a new array and goes through all the values like a .forEach(), using [...Array], we can convert the string array into numbers and return another array, inputting it back into the prvious one.
        console.log(stringToArr, "array converted into number values");
        const sum = stringToArr.reduce((acc, val) => acc + val); // reduce() method takes in 3 total parameters, however 2 are required while 1 is not. It uses a callbackFn to increase in index pos, and if not specified for the 3 paramenter, it will be of index [0], if you wanted to start at the 3rd element[2], then it will be Array.reduce(callbackFn, value, 2). 2 being the initialValue.
        console.log(sum);
        
        // output
        let output = document.getElementById('sum-of-array-result');
        document.getElementById('sum-of-array').value = ''; // clear input on submit
        output.innerHTML = sum + ` (${organizeOutput})`; // output + user input 
    }

    const reverseString = () => { // reverse string >>>
        let userInput = document.getElementById('reverse-string').value; // write if statement for error handling, see if user is using numbers etc <<< REMINDER >>>
        let arr = userInput.replace(/\d+/g, ''); // + is used to match in case digits are strung together, ex: test23 will replace 23, or remove; leaving test. small d is YES to numbers, big D is NO to numbers. I could also use .match(/[a-z]/g) to match all letters, or .match(/[A-Z]/g) to match all uppercase letters. Instead of finding the numbers and replacing them with '', which is nothing. 
        let organizeOutput = arr;

        console.log(arr)
        arr = arr.split(''); // split all strings up, one letter at a time, put a space in between 
        arr = arr.reverse(); // reverse the array as is, one letter at a time, 
        arr = arr.join(''); // now do the opposite of split, join the letters back together, into words, add spaces
        console.log(arr);

        // output
        let output = document.getElementById('reverse-string-result');
        document.getElementById('reverse-string').value = '';
        output.innerHTML = arr + ` (${organizeOutput})`;
    };

    const findMax = () => { // find max number in array >>>
        let userInput = document.getElementById('find-max').value;
        let arr = userInput.match(/\d/g); // no + sign because I got parseInt() 
        let organizeOutput = arr.join(', '); // output typed by user
        arr = arr.map(num => parseInt(num)); // convert string to number
        console.log(arr);
        let max = Math.max(...arr); // Math.max() takes in a spread operator, which is used to take in an array of values, and find the max value.

        console.log(max);

        // output
        let output = document.getElementById('find-max-result');
        document.getElementById('find-max').value = '';
        output.innerHTML = max + ` (${organizeOutput})`;
    };

    const capitalizeWords = () => { // capitalize words >>>
        let userInput = document.getElementById('capitalize-words').value;
        let arr = userInput.replace(/\d+/g, ''); // remove numbers from user input
        let organizeOutput = arr; // output typed by user
        console.log(arr);
        arr = arr.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // capitalize first letter of each word
        console.log(arr);

        // output
        let output = document.getElementById('capitalize-words-result');
        document.getElementById('capitalize-words').value = '';
        output.innerHTML = arr + ` (${organizeOutput})`;
    };

    // variables >>>
    let sumofArrayValue = document.getElementById('sum-of-array');
    let reverseStringValue = document.getElementById('reverse-string');
    let findMaxValue = document.getElementById('find-max');
    let capitalizeWordsValue = document.getElementById('capitalize-words');

    // event listeners >>>
    sumOfArrayBtn.addEventListener('click', () => {
        if (sumofArrayValue !== null & sumofArrayValue.value !== '') { // if statement to check if element exists, then run function
            sumOfArray();
        } else {
            console.log('You gotta input something first!');
            alert('You gotta input something first!');
        }
    }); // first function event listener

    reverseStringBtn.addEventListener('click', () => {
        if (reverseStringValue !== null & reverseStringValue.value !== '') { // if statement to check if element exists, then run function
            reverseString();
        } else {
            console.log('You gotta input something first!');
            alert('You gotta input something first!');
        }
    }); // second function event listener

    findMaxBtn.addEventListener('click', () => {
        if (findMaxValue !== null & findMaxValue.value !== '') { // if statement to check if element exists, then run function
            findMax();
        } else {
            console.log('You gotta input something first!');
            alert('You gotta input something first!');
        }
    }); // third function event listener

    capitalizeWordsBtn.addEventListener('click', () => {
        if (capitalizeWordsValue !== null & capitalizeWordsValue.value !== '') { // if statement to check if element exists, then run function
            capitalizeWords();
        } else {
            console.log('You gotta input something first!');
            alert('You gotta input something first!');
        }
    }); // fourth function event listener
})();