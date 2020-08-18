const Clear = require('rollup-plugin-clear')
const Postcss = require('rollup-plugin-postcss')
const html = require('rollup-plugin-generate-html-template')
const serve = require('rollup-plugin-serve')
const livereload = require('rollup-plugin-livereload')
const glob = require('glob')

const basePlugin = require('./config/baseplugin')

const argv = require('yargs-parser')(process.argv.slice(2))

const moduleName = argv.comp

if (!moduleName) {
  console.log('请输入：npm start -- --comp demo')
  process.exit();
}

if (glob.sync(`./src/components/${moduleName}/index.tsx`).length < 1) {
  console.log(`未找到${moduleName}模块`)
  process.exit();
}

module.exports = {
  input: `src/components/${moduleName}/entry/index.tsx`,
  output: {
    file: `./examples/${moduleName}/index.js`,
    format: 'es',
    globals: {
      react: 'React',                            
      'react-dom': 'ReactDOM'
    }
  },
  plugins: [
    ...basePlugin,
    Clear({
      targets: [`examples/${moduleName}`]
    }),
    
    Postcss({
      modules: true, // 增加 css-module 功能
      extensions: ['.scss', '.css'],
      use: [
        ['sass', {
          
        }]
      ],
      extract: 'index.css' 
    }),
    livereload({
      watch: `examples/${moduleName}`
    }),
    serve({
      open: true,
      openPage: '',
      contentBase: `examples/${moduleName}`,
      host: 'localhost',
      port: 8900,
    }),
    html({
      template: 'public/index.html',
      filename: `examples/${moduleName}/index.html`,
      inject: true
    }),
  ],
  watch: {
    include: ['src/**', 'public/index.html'],
    clearScreen: true
  }
}