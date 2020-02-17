exports.onRouteUpdate = function({ location }, pluginOptions) {
  // Don't track while developing.
  if (
    process.env.NODE_ENV === `production` &&
    typeof window.ym !== `undefined`
  ) {
    window.ym(pluginOptions.trackingId, 'hit', (location || {}).pathname);
  }
}
