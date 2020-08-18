const glob = require('glob')
const { resolve } = require('path')

const cwd = resolve(__dirname, '../src/components')

const entries = glob.sync('*/*.tsx', { cwd, nodir: true })
.reduce((entries, path) => {
  entries[path.replace(/(.*)(\/index.tsx)/, '$1')] = resolve(cwd, path)
  return entries
}, {})

module.exports = entries
