# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

/**
 * Header Component - logo, Navbar items
 * Body
 *  - search component - search input
 *  - Restaurant container 
 *      - restaurant card
 *          - iamge, rating, cuisine, name, deleivry time, cost 
 * Footer
 *  - copyright
 * - social media links
 *  - contact 
 *  address
 */

 /**
 *Two types of Export/Import
 * - Default Exxport/Import
 *     - export default Component;
*       - import Compoent from 'path';

*  Named Export/Import;
*       - export const Component;
*       - import {Component} from 'path';
 */

 /**
 * useEffect - if no dependency array in useeffect,it renders every time means both after initial render and after every subsquential render.
 * if dependency array is empty, useefeect is called on initial render (just once)
 * if dependency array is there - called every time that dependency is updated.
 */

 /**
 * virtual DOM - react is doing effecient dom manipulation 
 *reconciliation
*  The algorithm React uses to diff one tree with another to determine which parts need to be changed.
update
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.
 * React uses reconciliation algorithm (React Fiber came into existing in react 16 version)
 * diff algorithm means which identifies the difference between the previous virtual dom and new virtual dom and renders only the difference between two and then updates the dom
 */

 /**
 * Two Types of routing: server side routing and client sode routing
 */

 /**
 * this is about array destructing in body.js file
* const arr = useState(resList);
* const [foodData, setFoodData] = arr;
* const foodData = arr[0];
* const set*Fo*odData = arr[1];
*/


/**
 * from above code how the rendering happens 
 * parent constructor
 * parent render
 * First child constructor
 * First child render
 * Second child constructor
 * Second child render
 * Third child constructor
 * Third child render
 * First componentDidMount
 * Second componentDidMount
 * Third componentDidMount
 */

/**
* this is about class based components and how mounting, updating and unmounting works example is about.js file 
 * constructor is called
 * render methodis called
 * ,html> is loaded with baisc data
 * component did mount is called , we make an api call and get the data
 * after that we update the state as this.setState  
 * 
 * ---------------till here its mounting state-----------------
 * 
 * now the update state begins
 * render method is called again with api data to update it
 * now html is loaded with new api data
 * then it will call componentDidUpdate
 * 
 */

 /*
 * chunking
 * code splitting
 * lazy loading
 * dynamic bundling 
 * all this above points are called on demand loading
 */

 /**
 * Higher Order components: takes input as components and returns a component
 */

 /**
 * Redux Tool Kit:
 * when we hit the add button, it dispatches the actions which calls the reducer function which updates the slice of our redux store (written the data)
 * to read the written data we use selector
 * install redux/toolkit and reac-redux
 * build the store
 * connecct our store to app
 * cearte slice
 * dispatch action
 * selector
 */

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
