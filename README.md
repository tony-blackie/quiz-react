## Quiz

### Working with react-router:
1. Add 'react-router' to your project (npm install --save react-router)
2. Import { Router, Route } into your file, where you will render your router object (The file, where you do ReactDOM.render)
3. Instead of your <Root> component render <Router> tag into your div with id="root". Don't forget to add history={historyType} attribute to the Router. It can be browserHistory or hashHistory.
4. Add Route tags to your Router object, configure the 'path' and 'component' props of each Route.
5. If you need to add buttons that lead to another page, import Link from react-router and use them instead of "<a>" tags.
You can set the route with "to" attribute.
6. If you need to go to another page from your code, not on click, you can do this by importing hashHistory (or browserHistory) to the component you want to use it in and then using it like: browserHistory.push('/users'). It will take you to '/users' page.

### Install:
```
npm install
npm install babel-preset-react
npm install babel-preset-es2015
```

### Run:
```
npm start
```

### Tests:
##### All tests:
```
npm test
```
##### Single test:
```
npm test -- FileName.spec.js
```
##### Coverage report:
```
npm run coverage
```

### About
```
Built with: Webpack
Front-end: React, Redux, ES6, Babel
Back-end: Express, mySQL
Tests: Jest, Enzyme
```
