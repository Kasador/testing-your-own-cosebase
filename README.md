# 📝 Full Sail University - Testing Your Own Codebase

### 🔗 https://testing-your-own-codebase-fso.netlify.app/

In this assignment, you will code out at least four (4) of the functions listed in the table below. Each function you successfully code will be worth 20% of your overall score. After coding out all four of your chosen functions, you will write functional tests for each one to verify the correct behavior under different use cases and input parameters.

### ⚙️ Overview

You must implement at least four (4) of the functions listed in the table below. Each function is designed to test your understanding of JavaScript concepts, including loops, conditionals, and string/array manipulation.

# 🌀 The Plot Twist

To add a bit of a challenge, there's a plot twist for this week's activity. In addition to implementing 4 of the functions we've discussed, you'll also need to write functional tests for each of the 4 functions you've created. This was mentioned at the beginning of the assignment, so keep that in mind.

Here’s the twist: I won’t be giving you any specific instructions on which tests to write or how to write them. Your task is to think about all the different scenarios and types of values that might be passed into your functions. You need to create tests that cover as many different cases as possible. Why? Because I’ll be testing your code with my own set of tests, and you won’t know what they are in advance. Your grade will be based on how many of my tests your functions pass or fail.

So, my advice: think deeply about the types of unexpected situations your code might face. For example, instead of passing reverseString() a normal string, I might pass it a number like 1 or even a negative number like -1. What happens then? Consider cases where you're given bad input or your code doesn’t produce the expected output.

## 📋 References

![Screenshot 2024-12-21 083437](https://github.com/user-attachments/assets/14e4b8ea-2c71-4b76-ae0c-c791aae54ab0)

# 🔗 npm - Dependencies

- npm i sass --save-dev
- npm i sass-loader --save-dev
- npm i style-loader --save-dev
- npm i webpack --save-dev
- npm i webpack-cli --save-dev
- npm i webpack-dev-server --save-dev
- npm i @babel/preset-env
- npm i babel-loader
- npm i css-loader
- npm i html-webpack-plugin
- npm i jest

# 📈🪶 Progress Screenshots/Code
### _This section will have all the screenshots & code for my updated progress while developing..._ 

## 🛠️ Setup 

### Create a _webpack.config.js_ file and add the following...
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // cleans the output directory before each build
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',  // injects styles into DOM
          'css-loader',    // turns CSS into CommonJS
          'sass-loader',   // compiles Sass to CSS
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,  // matches image files
        type: 'asset/inline',  // emits separate files and returns their URLs
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false,
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // serves static files from the 'dist' directory
    },
    compress: true,
    port: 9001,
    hot: false
  },
  mode: 'development',
};
```
### Now, add the _npm_ **(Node Packages)** to your codebase...
Here is the one line, **_easy install_**, for **all** the packages needed to start.
```bash
npm i sass sass-loader style-loader webpack webpack-cli webpack-dev-server @babel/preset-env babel-loader css-loader jest html-webpack-plugin --save-dev
```

## 🐛 Issues/Bugs

### This worked and prevented the page from refreshing on event listeners of the buttons.

```js
// prevent refresh on form submit.
    document.querySelectorAll('.form').forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
        });
    });
```

## 📘 Frontend

### Feat: UI/UX for the application is completed, working on functionality, testing, and filtering user inputs.
<img src="https://github.com/user-attachments/assets/7b5626eb-4cea-49a6-96aa-e0e8216df933" width="500px">

## 📖 Backend
```js
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
    findMax();
})();
```

### Feat: User can now type in their input (**_13691_**) and the function/application will add all numbers together, and then give an output. 
<img src="https://github.com/user-attachments/assets/07b546a8-b8bb-4241-b2ad-8700ca7e30c1" width="500px">
<img src="https://github.com/user-attachments/assets/e368af24-1118-4445-bb77-6f0fda588eba" width="500px">

### The Code
```js
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
    10) 
*/

console.log('JS (JavaScript) file connected.');
// variables >>>
const sumOfArrayBtn = document.getElementById('sum-of-array-btn');
(() => { // IIFE >>>
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
```

### Feat: User can now type in their input (**_test this string_**) and the function/application will reverse all words and then give an output. 
<img src="https://github.com/user-attachments/assets/1f0214b1-d081-4279-aa82-9cec2394656d" width="500px">
<img src="https://github.com/user-attachments/assets/85d30334-cfc7-4c2d-a857-58d33fa5054b" width="500px">

## #️⃣💻 _index.js_ full code/file

```js 
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

    sumOfArrayBtn.addEventListener('click', sumOfArray); // first function event listener

    const reverseString = () => { // reverse string >>>
        let userInput = document.getElementById('reverse-string').value; // write if statement for error handling, see if user is using numbers etc <<< REMINDER >>>
        let arr = userInput.replace(/\d+/g, ''); // + is used to match in case digits are strung together, ex: test23 will replace 23, or remove; leaving test. small d is YES to numbers, big D is NO to numbers. I could also use .match(/[a-z]/g) to match all letters, or .match(/[A-Z]/g) to match all uppercase letters. Instead of finding the numbers and replacing them with '', which is nothing. 
        let organizeOutput = arr;

        console.log(arr)
        arr = arr.split(''); // all together, no spaces, into an array
        arr = arr.reverse(); // reverse the array as is
        arr = arr.join(''); // now do the opposite of split, join the array back together, but with spaces
        console.log(arr);

        // output
        let output = document.getElementById('reverse-string-result');
        document.getElementById('reverse-string').value = '';
        output.innerHTML = arr + ` (${organizeOutput})`;
    };

    reverseStringBtn.addEventListener('click', reverseString); // second function event listener

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

    findMaxBtn.addEventListener('click', findMax); // third function event listener

    const capitalizeWords = () => { // capitalize words >>>
        
    };
})();
```