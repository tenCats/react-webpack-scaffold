# react-webpack-scaffold
My react project's scaffold using webpack.

Webpack is a great tool but it takes a lot time to learn about. Since I need to code react UI components, which means I may need to install and configure webpack again and again. It pains!

Here, I provide a simple react + webpack scaffold for my furture react project. If you need such a scaffold, use it! My pleasure :)

## Supports
- [x] react
- [x] jsx
- [x] es2015
- [x] cssloader
- [x] scssloader
- [x] eslint
- [x] jshint
- [x] stylelint
- [x] csslint

## Usage
Clone or download this project and merge it to your project root folder. Run this command to install.

```node.js
npm install
```

Run this command to start a webpack-dev-server:

```node.js
npm run dev
```

Run this command to build:

**(the bundle.js contains dev codes so I'm still looking into it...)**

```node.js
npm run build
```

## Files
My js entry is ```./index.js```. Webpack will pack and compile this file into a ```bundle.js``` and put it under ```./dist/```. In ```./dist/``` I alse have a ```index.html``` which requires the ```bundle.js``` and displaces my react component.
You can change webpack's configuration in ```./webpack.config.js``` which specifies the files to compile and where the bundles go.

## Notice
My react version is ```^15.3.2``` and react-dom version is ```^15.3.2```. Change it to your need.
