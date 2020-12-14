import { createPreprClient } from './prepr-client.js'

export default function (_, inject) {
  const preprClient = createPreprClient({
    token: '<%= options.token %>',
    baseUrl: '<%= options.baseUrl %>',
    timeout: '<%= options.timeout %>',
  })

  inject('prepr', preprClient)
}
