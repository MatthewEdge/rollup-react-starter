# rollup-react-starter

Starter project for developing with React using the Rollup build tool to transpile and
bundle the Javascript code. Gulp is then used to inject the final bundled Javascript
into the index.html file to minimize network traffic

## Conventions

* Styles are imported BEFORE other imports in a JS file. For example:
```javascript
    import 'main.scss'

    import React from 'react'
    import ReactDOM from 'react-dom'

    // ...
```

## Rollup Dev Notes

To get React working with Rollup the following config had to be added:

```javascript
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

//...

// To find and include the React library from NPM
nodeResolve({
  main: true,
  extensions: ['.js', '.jsx']
}),

// Since React uses CommonJS packaging
commonjs({
  include: 'node_modules/**'
}),

// Required by React...or maybe CommonJS plugin. Not really sure
replace({
  'process.env.NODE_ENV': JSON.stringify('production')
}),
```

