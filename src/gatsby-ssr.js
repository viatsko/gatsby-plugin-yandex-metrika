import React from "react"

exports.onRenderBody = ({ setPreBodyComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    const metrikaSrc = pluginOptions.useCDN
    ? `https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js`
    : `https://mc.yandex.ru/metrika/tag.js`;

    return setPreBodyComponents([
      <script
      key={`gatsby-plugin-yandex-metrika`}
      dangerouslySetInnerHTML={{
        __html: `
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "${metrikaSrc}", "ym");

   ym(${pluginOptions.trackingId}, "init", {
        defer: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:${pluginOptions.webvisor},
        trackHash:${pluginOptions.trackHash}
   });
`,}} />,
      <noscript><div><img src={`https://mc.yandex.ru/watch/${pluginOptions.trackingId}`} style={{position:'absolute',left:'-9999px'}} alt="" /></div></noscript>
    ])
  }
}
