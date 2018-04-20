import React from "react"

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    // useBeta flag is set for metrika 2.0
    const useBeta = pluginOptions.version && pluginOptions.version === 2;
    const versionSuffix = useBeta ? '2' : '';
    const metrikaSrc = `https://mc.yandex.ru/metrika/${useBeta ? 'tag' : 'watch'}.js`;

    return setPostBodyComponents([
      <script
      key={`gatsby-plugin-yandex-metrika`}
      dangerouslySetInnerHTML={{
        __html: `
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter = new Ya.Metrika${versionSuffix}({
                id:${pluginOptions.trackingId},
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:${pluginOptions.webvisor},
                trackHash:${pluginOptions.trackHash}
            });
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = "${metrikaSrc}";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks${versionSuffix}");
`,}} />,
      <noscript><div><img src={`https://mc.yandex.ru/watch/${pluginOptions.trackingId}`} style={{position:'absolute',left:'-9999px'}} alt="" /></div></noscript>
    ])
  }
}
