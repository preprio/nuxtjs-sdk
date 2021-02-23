import path from 'path'

export default function preprModule(options) {
  this.addPlugin({
    fileName: 'prepr-nuxtjs-sdk.js',
    src: path.resolve(__dirname, 'plugin.js'),
    options,
  })
}

module.exports.meta = require('../package.json')
