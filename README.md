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
- npm i babel-jest

# 📈🪶 Progress Screenshots/Code
### _This section will have all the screenshots & code for my updated progress while developing..._ 

## 🛠️ Setup 

### Tell me you code, without tellin' me you code
![Screenshot 2024-12-22 181220](https://github.com/user-attachments/assets/3a8d1a61-e1b1-4294-a8d8-1699875f7238)

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
npm i sass sass-loader style-loader webpack webpack-cli webpack-dev-server @babel/preset-env babel-loader css-loader jest babel-jest html-webpack-plugin --save-dev
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

### Should of used **TypeScript...** That's my only regret. Hahaha... Probably would have coded this in 27 lines of code with all the error handling and data types specified. Pretty sure my tests failed due to coding and using ES6 methods/syntax. 

Wow, _jest_ is really difficult to setup right and use out of the box. It's not like you slap an import in a file or just do an _npm i jest_ and bam, you're good to go. **Wrong**, it's a lot of setup and configuration, which is just wild to me as DevOps shouldn't be this hard, because at that point I would be debugging to just debug? Wait... what? I ran tests, and they failed, but the main problem I am having is the configuration due to the fact I chose to use ES6 modules, which is not supported by Jest; kinda... I am also using webpack and I will have to use CommonJS modules, which is the default for Jest. I will have to change the export and import statements to CommonJS. Jest is really difficult to setup, its not hard to write or make tests for the functions, documentation has it all, minus a friendly setup guide. Even using a VSCode extension didn't help much. 

### Long story short. **_Documentation is everything_**. I mean, their troubleshooting guide is outdated too...
```bash
● Test suite failed to run
                                                                                                   
    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation
```

### jest.config.js 
```js
module.exports = {
    testEnvironment: 'node', 
    transform: {
        '^.+\\.jsx?$': 'babel-jest', 
    },
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'], 
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy', 
    },
    testMatch: ['**/tests/**/*.test.js'], 
    verbose: true,
    collectCoverage: true, 
    collectCoverageFrom: [
        'src/**/*.js', 
        '!src/**/index.js',
        '!src/**/__mocks__/**', 
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    coverageDirectory: 'coverage', 
    coverageReporters: ['text', 'lcov', 'html'], 
    transformIgnorePatterns: ['/node_modules/'], 
};
```

![Screenshot 2024-12-22 174250](https://github.com/user-attachments/assets/7a69db0f-5368-4619-82ca-99089cd77e1a)
![Screenshot 2024-12-22 174315](https://github.com/user-attachments/assets/18ee359c-7137-4e9c-9873-acb58605a76c)
![Screenshot 2024-12-22 174333](https://github.com/user-attachments/assets/a894848e-c9b5-4637-a7d7-5f5ae8c6a444)
![Screenshot 2024-12-22 175903](https://github.com/user-attachments/assets/a5fb596a-06d1-43e1-8204-f6b03ac40cf6)

## 📘 Frontend

### Feat: UI/UX for the application is completed, working on functionality, testing, and filtering user inputs.
<img src="https://github.com/user-attachments/assets/7b5626eb-4cea-49a6-96aa-e0e8216df933" width="500px">

### Feat: Mobile friendly. 
<img src="https://github.com/user-attachments/assets/3c7b139b-e359-4ec5-883a-b3eaf12e29c4" width="500px">

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
    Should of used TypeScript... That's my only regret. Hahaha... Probably would have coded this in 27 lines of code with all the error handling and data types specified.
----------------------------------------------------------------------------------------

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
    15) https://jestjs.io/docs/configuration
    16) https://jestjs.io/docs/api#describename-fn
    17) https://jestjs.io/docs/using-matchers // https://jestjs.io/docs/expect // https://jestjs.io/docs/expect#tobevalue // https://stackoverflow.com/questions/30027494/how-to-write-a-jest-configuration-file // https://jestjs.io/docs/api // https://jestjs.io/docs // https://github.com/kulshekhar/ts-jest/issues/1940 
    18) https://jestjs.io/docs/troubleshooting // https://jestjs.io/docs/code-transformation

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
    ----------------------------------------------------------------------------------------
        I ran tests, and they failed, but the main problem I am having is configuration due to the fact I chose to use ES6 modules, which is not supported by Jest. I am also using webpack and I will have to use CommonJS modules, which is the default for Jest. I will have to change the export and import statements to CommonJS. Jest is really difficult to setup, its not hard to write or make tests for the functions...
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
    function sumOfArray(num) { // sum of array elements >>> JEST does not work! With ES6 modueles, which is modern development, insane! And if you want it to work then the setup is a pain and not right out of the box. I just don't see how this can be a popular choice for dev ops specifically when everything is developed and tested in ES6 modules, even ReactJS, VueJS, NextJS, AngularJS, etc... 

        // use regex expressions to filter user input 
        let userInput = num;
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

    const reverseString = (str) => { // reverse string >>>
        let userInput = str; // write if statement for error handling, see if user is using numbers etc <<< REMINDER >>>
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

    const findMax = (num) => { // find max number in array >>>
        let userInput = num;
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

    const capitalizeWords = (str) => { // capitalize words >>>
        let userInput = str;
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
        if (sumofArrayValue !== null & sumofArrayValue.value !== '') {
            sumOfArray(sumofArrayValue.value);
        } else {
            console.log('You gotta input something first!');
            alert('You gotta input something first!');
        }
    }); // first function event listener

    reverseStringBtn.addEventListener('click', () => {
        if (reverseStringValue !== null & reverseStringValue.value !== '') {
            reverseString(reverseStringValue.value);
        } else {
            console.log('You gotta input something first!');
            alert('You gotta input something first!');
        }
    }); // second function event listener

    findMaxBtn.addEventListener('click', () => {
        if (findMaxValue !== null & findMaxValue.value !== '') {
            findMax(findMaxValue.value);
        } else {
            console.log('You gotta input something first!');
            alert('You gotta input something first!');
        }
    }); // third function event listener

    capitalizeWordsBtn.addEventListener('click', () => {
        if (capitalizeWordsValue !== null & capitalizeWordsValue.value !== '') {
            capitalizeWords(capitalizeWordsValue.value);
        } else {
            console.log('You gotta input something first!');
            alert('You gotta input something first!');
        }
    }); // fourth function event listener
})();

// export default { // for the tests files >>>
//     sumOfArray,
//     reverseString,
//     findMax,
//     capitalizeWords
// }; 

// module.exports = { // for the tests files >>>
//         sumOfArray,
//         reverseString,
//         findMax,
//         capitalizeWords
//     };

    // I ran tests, and they failed, but the main problem I am having is configuration due to the fact I chose to use ES6 modules, which is not supported by Jest. I am also using webpack and I will have to use CommonJS modules, which is the default for Jest. I will have to change the export and import statements to CommonJS. Jest is really difficult to setup, its not hard to write or make tests for the functions...
```