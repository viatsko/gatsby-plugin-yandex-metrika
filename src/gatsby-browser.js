exports.onRouteUpdate = function({ location }, pluginOptions) {
  // Don't track while developing.
  if (
    process.env.NODE_ENV === `production` &&
    typeof window.ym !== `undefined` &&
    typeof window.ym.hit === 'function'
  ) {
    window.ym(pluginOptions.trackingId, 'hit', (location || {}).pathname);
  }
}
