const Babel = require('rollup-plugin-babel')
const Resolve = require('rollup-plugin-node-resolve')
const Commonjs = require('rollup-plugin-commonjs')
const Ts = require('rollup-plugin-ts')
const { terser } = require('rollup-plugin-terser')
const { eslint } = require('rollup-plugin-eslint')
const Replace = require('rollup-plugin-replace')
const stylelint = require('rollup-plugin-stylelint').default

const env = process.env.NODE_ENV

module.exports = [
  Resolve({
    extensions: ['.tsx', '.ts', '.js', '.jsx', 'json', 'scss']
  }),
  Replace({
    'process.env.NODE_ENV': JSON.stringify(env)
  }),
  Commonjs({
    include: 'node_modules/**',
    namedExports: {
      'node_modules/react/index.js': [
        'useCallback',
        'useEffect',
        'useMemo',
        'createElement',
        'Component',
        'pureComponent'
      ],
      'node_modules/react-dom/index.js': [
        'render'
      ]
    }
  }),
  stylelint({
    include: ['./src/**/*.scss'],
    exclude: ['es', 'dist', 'examples']
  }),
  // eslint({
  //   include: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.jsx', './src/**/*.js'],
  //   fix: true
  // }),
  Babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true
  }),
  Ts(),
  terser()
]