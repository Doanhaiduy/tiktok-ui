# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

# Setup TIKTOK

## Cấu Hình Webpack

### 1

`install customize-cra:`
npm i customize-cra react-app-rewired -D

### 2

`Create a config-overrides.js file in the root directory`
/_ config-overrides.js _/

module.exports = function override(config, env) {
//do stuff with the webpack config...
return config;
}

### 3

`'Flip' the existing calls to react-scripts in npm scripts for start, build and test`

/_ package.json _/

"scripts": {

-   "start": "react-scripts start",

*   "start": "react-app-rewired start",

-   "build": "react-scripts build",

*   "build": "react-app-rewired build",

-   "test": "react-scripts test",

*   "test": "react-app-rewired test",
    "eject": "react-scripts eject"
    }

## Cài đặt babel-plugin-module-resolver

`Use this:`
import MyUtilFn from 'utils/MyUtilFn';

`Instead of that:`
import MyUtilFn from '../../../../utils/MyUtilFn';

### 1

npm install --save-dev babel-plugin-module-resolver

### 2

`Specify the plugin in your .babelrc with the custom root or alias. Here's an example:`

{
"plugins": [
["module-resolver", {
"alias": {
"~": "./src",
}
}]
]
}

use this: import MyUtilFn from '~/utils/MyUtilFn'; `(dấu ~ đại diện cho ./src)`

### 3

`Configure the path mapping in jsconfig.json`
{
"compilerOptions": {
"baseUrl": ".",
"paths": {
"~/_": ["src/_"],
}
}
}

### 4

const { override,useBabelRc } = require("customize-cra");

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(useBabelRc());

## Cài đặt và cấu hình Prettier

### 1

`Create file .prettierrc`:
{
"arrowParens": "always",
"bracketSameLine": false,
"bracketSpacing": true,
"embeddedLanguageFormatting": "auto",
"htmlWhitespaceSensitivity": "css",
"insertPragma": false,
"jsxSingleQuote": false,
"printWidth": 120,
"proseWrap": "preserve",
"quoteProps": "as-needed",
"requirePragma": false,
"semi": true,
"singleQuote": true,
"tabWidth": 4,
"trailingComma": "all",
"useTabs": false,
"vueIndentScriptAndStyle": false
}

### 2

`Create file .vscode/settings.json`
{
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
}

## Cấu hình sử dụng CSS/SASS

### 1

`Tạo GlobalStyles component`
create components/GlobalStyles/index.js

### 2

`Cài thư viện SASS: `
npm i -D sass

### 3

`Reset CSS`
npm install --save normalize.css

in GlobalStyles.scss:

@import 'normalize.css'

### 4

`Default CSS: font-family, font-size, line-height`

## Cấu hình Router/Layout

### 1

`Phân tích tổng quan Layout`

### 2

`Cài đặt react-router-dom: `

npm i react-router-dom
in App.js
import {BrowserRouter as Router ,Routes, Route,Link } from 'react-router-dom'

### 3

`Đưa cấu hình routes ra ngoài`
in src: create routes/index.js
`in index.js: `
const publicRoutes = [
{
path: '/',
component: Home,
},
{
path: '/following',
component: Following,
},
`Dùng cho những router không cần đăng nhập vẫn xem được`
]

const privateRoutes = [
`Dùng cho những router cần đăng nhập mới xem được`
];

export { publicRoutes, privateRoutes };

`in app.js: `
import { publicRoutes } from '~/routes';

<Routes>
    {publicRoutes.map((route, index) => {
                        const Page = route.component;
         return <Route key={index} path={route.path} element={<Page />} />;
        })}
</Routes>

### 4

`Xây dựng cơ chế tải Layout`

## Install Classnames

npm i classnames
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
using: className={cx('post-item')}

## fontAwesome

`in package.json => dependencies`

"@fortawesome/fontawesome-svg-core": "^1.3.0",
"@fortawesome/free-brands-svg-icons": "^6.0.0",
"@fortawesome/free-regular-svg-icons": "^6.0.0",
"@fortawesome/free-solid-svg-icons": "^6.0.0",
"@fortawesome/react-fontawesome": "^0.1.17",

npm i

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

## tippy model
https://github.com/atomiks/tippyjs-react
https://atomiks.github.io/tippyjs/v5/all-props/

npm i @tippyjs/react

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

example: <Tippy content="Tìm kiếm" placement="right">
<button className={cx('search-btn')}>
<FontAwesomeIcon icon={faMagnifyingGlass} />
</button>
</Tippy>


import Tippy from '@tippyjs/react/headless';