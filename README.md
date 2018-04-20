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

## WebVisor 2.0

If you want to use WebVisor 2.0 (beta), specify `version: 2` in `gatsby-config.js` file:

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-yandex-metrika`,
    options: {
      trackingId: 'YOUR_YANDEX_METRIKA_TRACKING_ID',
      webvisor: true,
      trackHash: true,
      version: 2,
    },
  },
]
```
