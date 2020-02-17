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
      trackingId: 'YOUR_YANDEX_METRIKA_TRACKING_ID',
      webvisor: true,
      trackHash: true,
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
      trackingId: 'YOUR_YANDEX_METRIKA_TRACKING_ID',
      webvisor: true,
      trackHash: true,
      useCDN: true,
    },
  },
]
```
