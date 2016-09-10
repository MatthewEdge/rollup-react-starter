// Rollup plugins
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'

export default {
  entry: 'js/main.js',
  dest: 'js/main.min.js',
  format: 'iife', // Immediately Invoked Function Expression
  sourceMap: 'inline',

  plugins: [
    eslint({
      exclude: [
        '**/*.scss', '**/*.css'
      ]
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}