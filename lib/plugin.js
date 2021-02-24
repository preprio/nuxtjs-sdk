import { createPreprClient } from '@preprio/nodejs-sdk'

export default function (_, inject) {
  const preprClient = createPreprClient({
    token: '<%= options.token %>',
    baseUrl: '<%= options.baseUrl %>',
    timeout: '<%= options.timeout %>',
    userId: '<%= options.userId %>',
  })

  inject('prepr', preprClient)
}
