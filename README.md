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