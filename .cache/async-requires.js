// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-post-jsx": () => import("./../../../src/templates/Post.jsx" /* webpackChunkName: "component---src-templates-post-jsx" */),
  "component---src-templates-tag-jsx": () => import("./../../../src/templates/Tag.jsx" /* webpackChunkName: "component---src-templates-tag-jsx" */)
}

