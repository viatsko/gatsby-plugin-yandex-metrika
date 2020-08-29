exports.onRouteUpdate = function({ location }, pluginOptions) {
  // Don't track while developing.
  if (
    process.env.NODE_ENV === `production` &&
    typeof window.ym !== `undefined` &&
    location
  ) {
    const { pathname, search, hash } = location;
    window.ym(pluginOptions.trackingId, "hit", pathname + search + hash);
  }
}
