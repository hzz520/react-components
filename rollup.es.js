const CreateModules = require('./config/module')
const entries = require('./config/getEnrty')

module.exports = Object.keys(entries).map(moduleName => CreateModules(moduleName))
