import path from 'path'

export default function preprModule(moduleOptions) {
  const options = {
    ...moduleOptions,
    ...this.options.prepr,
  }

  const {
    token,
    timeout = 4000,
    baseUrl = 'https://api.eu1.prepr.io',
  } = options

  this.addPlugin({
    fileName: 'prepr-nuxt.js',
    src: path.resolve(__dirname, 'plugin.js'),
    options: {
      token,
      timeout,
      baseUrl,
    },
  })

  this.addTemplate({
    fileName: 'prepr-client.js',
    src: path.resolve(__dirname, 'prepr-client.js'),
  })
}

module.exports.meta = require('../package.json')
