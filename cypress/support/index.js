import 'cypress-mailosaur'
import './commands'
import 'cypress-file-upload'
import 'cypress-iframe'

module.exports = (on, config) => {
    require('cypress-grep/src/plugin')(config)
  }
  require('cypress-grep')()