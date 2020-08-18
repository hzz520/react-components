const CreateModules = require('./config/module')
const entries = {
  index: 'src/index.tsx'
}

module.exports = Object.keys(entries).map(moduleName => CreateModules(moduleName))
