# Prepr SDK for Nuxt.js

This is the official Prepr SDK for Nuxt.js. It provided a standardized way for your team to communicate with the Prepr REST API.

## Getting started

### Installation

Getting started is simple. Scaffoled a Nuxt.js project

`npx create-nuxt-app prepr-demo`

And navigate to your new site

`cd prepr-demo`

Once you've done that, you can simply install the module by running

`npm i prepr-nuxt`

### Configuration

Okay, now we can register the module inside `nuxt.config.js` and modify the default settings

```js
// nuxt.config.js

export default {
  // Settings...

  modules: ['prepr-nuxt'],

  prepr: {
    baseUrl: 'https://api.eu1.prepr.io', // Default
    token: '<YOUR_ACCES_TOKEN>', // Required
    timeout: 4000, // Default
  },
}
```

By default, the base url will be `https://api.eu1.prepr.io` and the timeout before the request fails `4000` ms. The two values are not required. However. The `token` is required in order to make API calls. You can obtain the API token from the Prepr Dashboard.

## Usage

Cool. We have the module working. Now, time for some action. We now have global access to the `$prepr` function, how we can access the `$prepr` function depends on the context. Here are two examples.

```js
<script>
// Example with `asyncData`

export default {
  async asyncData({ $prepr, params }) {
    const { id } = params
    const publication = await $prepr(`/publications/${id}`, {
      query: `
        items {
          header_image {
            cdn_files {
              resized {
                thumb.w(1280).h(720)
              }
            }
          },
          elements {
            cover {
              cdn_files {
                resized {
                  thumb.w(1920)
                }
              }
            }
          }
        },
        title,
        tags,
        model
      `
    })

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
    const publication = await this.$prepr(`/publications/${id}`, {
      query: `
        items {
          header_image {
            cdn_files {
              resized {
                thumb.w(1280).h(720)
              }
            }
          },
          elements {
            cover {
              cdn_files {
                resized {
                  thumb.w(1920)
                }
              }
            }
          }
        },
        title,
        tags,
        model
      `
    })

    this.publication = publication
  },
}
</script>
```

## Available parameters

In the previous examples you can see how queries are executed and how `$prepr` is used in different contexts. Aside from `query`, you can also pass along a `sort` and `limit` parameter. With sort you can specify the sorting order by column, and with limit you can specify the maximum amount of records you wish to receive.

```js
const publication = await this.$prepr(`/publications/${id}`, {
  query: `...`,
  limit: 4,
  sort: 'title',
})
```
