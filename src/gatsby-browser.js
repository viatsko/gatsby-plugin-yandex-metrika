exports.onRouteUpdate = function({ location }) {
  // Don't track while developing.
  if (
    process.env.NODE_ENV === `production` &&
    typeof window.yaCounter !== `undefined` &&
    typeof window.yaCounter.hit === 'function'
  ) {
    window.yaCounter.hit((location || {}).pathname);
  }
}
