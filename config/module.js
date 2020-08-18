const Postcss = require('rollup-plugin-postcss')
const basePlugin = require('./baseplugin')
const Clear = require('rollup-plugin-clear')
const FileSize = require('rollup-plugin-filesize')

module.exports = (moduleName,) => ({
  input: moduleName === 'index' ? 'src/index.tsx' : `src/components/${moduleName}/index.tsx`,
  output: {
    file: moduleName === 'index' ? 'dist/index.js' : `es/hs-${moduleName}/index.js`,
    format: 'es',
  },
  plugins: [
    Clear({
      targets: [ moduleName === 'index' ? 'dist' : 'es']
    }),
    Postcss({
      modules: true, // 增加 css-module 功能
      extensions: ['.scss', '.css'],
      use: [
        ['sass', {
          
        }]
      ],
      minimize: true,
      extract: moduleName === 'index' ? 'index.css' : `style/index.css` 
    }),
    FileSize(),
    ...basePlugin
  ],
  external: ['react', 'react-dom']
})
