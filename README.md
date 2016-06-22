<p align="center">
  <a href="http://eloquentwebapp.com" target="_blank">
    <img src="https://cloud.githubusercontent.com/assets/4352286/13185096/a7cfc380-d73f-11e5-8b40-bac8bf426e52.png" alt="Webpack and React" width="500" height="320"/>
  </a>
</p>

# React.js Webpack Starter


> A React.js starter kit featuring [React.js](https://facebook.github.io/react/) ([JSX](https://facebook.github.io/react/docs/jsx-in-depth.html), [ES6](https://github.com/lukehoban/es6features#readme),
[Babeljs](https://babeljs.io/),
[PostCSS](https://github.com/postcss/postcss),
[ReactHotLoader](https://github.com/gaearon/react-hot-loader), and [Webpack](http://webpack.github.io/)) by [Grégory D'Angelo](https://gdangelo.fr) for [EloquentWebApp](http://eloquentwebapp.com).

> If you're looking to learn React.js in depth see [The Complete ReactJS Developer Course : Build Modern UI](http://eloquentwebapp.teachable.com/)

This seed repo serves as a React.js starter for anyone looking to get up and running with React.js fast. Using a [Webpack](http://webpack.github.io/) for building our files and assisting with boilerplate.
* Best practices in file and application organization for React.js.
* Ready to go build system using Webpack and Babel for working with JSX and ES6.
* A great React.js seed repo for anyone who wants to start their project.
* Style with PostCSS
* Tweak React components in real time with React Hot Loader

### Quick start
> Clone/Download the repo then edit React components inside [`/src/components`](/src/components)

```bash
# clone the repo
git clone https://github.com/gdangelo/react-starter.git

# change directory
cd react-starter

# install the dependencies with npm and bower
npm install && bower install

# start the server
npm start
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

# Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [Support, Questions, or Feedback](#support-questions-or-feedback)

## File Structure
We use the component approach in our starter. Each component lives in a single folder with each concern as a file: style and component class. Here's how it looks:
```
react-starter/
 ├──build/                     * Folder for compiled output
 │
 ├──src/                       * Source files that will be compiled to javascript
 |	 ├──components/            * React components
 │   │  └──variables.scss      * Global variables for styles
 │   │
 │   └──index.js               * Entry file for the application
 │
 ├──tools/                     * Build automation scripts and utilities
 │	 ├──build.js               * Builds the project from source to output (build) folder
 │	 ├──bundle.js              * Bundles the web resources into package(s) through Webpack
 │	 ├──clean.js               * Cleans up the output (build) folder
 │	 ├──run.js                 * Helper function for running build automation tasks
 │	 ├──start.js               * Launches the development web server with hot reload
 │	 └──webpack.config.js      * Configurations for bundles
 │
 ├──index.html                 * The index HTML page that includes the bundle
 ├──.babelrc                   * Babel options file use to specify presets and plugins
 ├──package.json               * What npm uses to manage it's dependencies
 └──bower.json                 * What bower uses to manage it's dependencies
```

# Getting Started
## Dependencies
What you need to run this app:
* [Node.js](https://nodejs.org/) v5.0 or newer
* `npm` v3.3 or newer (new to [npm](https://docs.npmjs.com/)?)

## Installing
* `clone` the repo
* `npm install` to install all npm dependencies
* `bower install` to install all bower dependencies

## Running the app
After you have installed all dependencies you can now run the app. Run `npm start` to start a local server using `webpack-dev-server`. The app will be server at `http://0.0.0.0:3000`.

## Other commands

### build files
```bash
npm run build
```

### clean build folder
```bash
npm run clean
```

# Support, Questions, or Feedback
> Contact me anytime for anything about this repo or React.js

* Twitter: [@gdangel0](https://twitter.com/gdangel0)
* Email: gregory@gdangelo.fr
* Codementor: [@gdangelo](https://www.codementor.io/gdangelo)

___

enjoy — Grégory D'Angelo for **EloquentWebApp**

<br><br>

<p align="center">
  <a href="https://eloquentwebapp.com" target="_blank">
    <img src="http://www.eloquentwebapp.com/wp-content/uploads/2015/12/logo-1.png" alt="React.js Course" width="300" height="300"/>
  </a>
</p>
