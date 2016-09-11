// Rollup plugins
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import postcss from 'rollup-plugin-postcss'
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';

// PostCSS plugins
import simplevars from 'postcss-simple-vars'
import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'

export default {
  entry: 'js/main.jsx',
  dest: 'build/main.min.js',
  format: 'iife', // Immediately Invoked Function Expression
  sourceMap: 'inline',

  plugins: [
    postcss({
      plugins: [
        simplevars(),
        cssnext({ warnForDuplicates: false }),
        cssnano()
      ],

      extensions: ['.css']
    }),

    eslint({
      exclude: [
        '**/*.scss', '**/*.css'
      ]
    }),

    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: ['es2015-rollup', 'react']
    })//,

    //uglify({}, minify)
  ]
}