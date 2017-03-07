# hCard


[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[Live demo](https://xxx.xxx.xxx)

### Directory Layout

```shell

├── /app/                       # Development work
│   ├── /components/            # Shared or generic UI components
├── /containers/                # React component containers that have only business logic and render stateless functional components
├── /redux/                     # Redux
│   ├── /modules/               # Actions + reducers
├── /sharedStyles/              # Shared styles
│   ├── /styles.css/            # The  css file
├── /node_modules/              # 3rd-party libraries and utilities
├── .babelrc                    # Utility and helper classes
├── .eslintrc                   # Utility and helper classes
│── README.md                   # This file that you are reading
│── package.json                # The list of project dependencies and NPM 
└── webpack.config.babel.js     # Bundling and optimization settings for Webpack
```

## Stack

### Framework
- React
- Redux

### Plugins
- Babel
- Immutable - **make states immutable and having performance benefits**
- Redux-thunk - **function blocks of actions**
- Redux-form - **handle form inputs**

#### Bundling/Server
- Webpack
- Webpack-server
- Css modules - **modular css for components**
- Hot modules replacement

### Code Quality Control
- Eslint
- Eslint-plugin-standard - **personal preference**

### Installation

This app requires [Node.js](https://nodejs.org/) v4+ to run.

Clone or download this project.

Install the dependencies and devDependencies and start the server.

```sh
$ cd hcard-test
$ npm install
$ npm run start
```

Go to browser: localhost:8080

### Todos

 - Add tests
 - UI/UX improvements
 - sri integrity

License
----

MIT