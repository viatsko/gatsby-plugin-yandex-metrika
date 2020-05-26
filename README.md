# gatsby-plugin-yandex-metrika

Easily add Yandex Metrika to your Gatsby site.

## Install
`npm install --save gatsby-plugin-yandex-metrika`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-yandex-metrika`,
    options: {
      // The ID of yandex metrika.
      trackingId: 12345,
      // Enabled a webvisor. The default value is `false`.
      webvisor: true,
      // Enables tracking a hash in URL. The default value is `false`.
      trackHash: true,
      // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
      // and `true` means after the body (faster loading, less hits). The default value is `false`.
      afterBody: true,
      // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
      // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
      defer: false,
    },
  },
]
```

## CDN option

Option 'useCDN' allows to count visits from regions, where access to Yandex resources is limited. Using altetnative CDN address may decrease counter's code loading.

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-yandex-metrika`,
    options: {
      trackingId: 12345,
      webvisor: true,
      trackHash: true,
      afterBody: true,
      defer: false,
      useCDN: true,
    },
  },
]
```
