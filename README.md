# Prepr SDK for Nuxt.js

This is the official Prepr SDK for Nuxt.js. It provided a standardized way for your team to communicate with the Prepr REST API.

## Getting started

### Installation

Getting started is simple. Scaffoled a Nuxt.js project

`npx create-nuxt-app prepr-demo`

And navigate to your new site

`cd prepr-demo`

Once you've done that, you can simply install the module by running

`npm i @preprio/nuxtjs-sdk`

### Configuration

Okay, now we can register the module inside `nuxt.config.js` and modify the default settings

```js
// nuxt.config.js

export default {
  // Settings...

  modules: ['@preprio/nuxtjs-sdk'],

  prepr: {
    token = null,
    baseUrl = 'https://cdn.prepr.io',
    timeout = 4000,
    userId = null,
  },
}
```

## Usage

Cool. We have the module working. Now, time for some action. We now have global access to the `$prepr` function, how we can access the `$prepr` function depends on the context. Here are two examples.

```js
<script>
// Example with `asyncData`

export default {
  async asyncData({ $prepr, params }) {
    const { id } = params
    const publication = await $prepr
      .path(`/publications/${id}`)
      .query('...')
      .fetch();

    return {
      publication,
    }
  },
}
</script>
```

```js
<script>
// Example with `fetch`

export default {
  data() {
    return {
      publication: {}
    }
  },

  async fetch() {
    const { id } = this.params
    const publication = await this.$prepr
      .path(`/publications/${id}`)
      .query('...')
      .fetch()

    this.publication = publication
  },
}
</script>
```

## More info

Want to know all available methods? Read more at [@preprio/nodejs-sdk](https://prepr.dev/docs/technologies/v1/introduction-node) or join us on [Slack](https://slack.prepr.io).
