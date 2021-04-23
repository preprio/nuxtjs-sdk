import path from 'path'

export default function preprModule(moduleOptions) {
  const options = {
    ...moduleOptions,
    ...this.options.prepr,
  }

  const {
    token,
    timeout = 4000,
    baseUrl = 'https://cdn.prepr.io',
    userId,
  } = options

  this.addPlugin({
    fileName: 'prepr-nuxtjs-sdk.js',
    src: path.resolve(__dirname, 'plugin.js'),
    options: {
      token,
      timeout,
      baseUrl,
      userId,
    },
  })
}

module.exports.meta = require('../package.json')
