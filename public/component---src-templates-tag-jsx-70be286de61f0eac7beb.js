(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4J9M":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var a=n("dI71"),o=n("q1tI"),r=n.n(o),i=n("Zttt"),l=n("bpIZ"),s=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.data,n=t.pathContext.tag;return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("h2",{style:{fontSize:"22px",padding:"0px 15px"}},"Todos os posts com a tag: ",n),r.a.createElement(l.a,{data:e})))},e}(o.Component)},bpIZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var a=n("q1tI"),o=n.n(a),r=n("Wbzz"),i=n("vOnD"),l=i.b.div.withConfig({displayName:"styles__Container",componentId:"sc-82hblw-0"})(["padding:1.5rem;margin-bottom:1rem;border-radius:.50rem;background-color:#eee;"]),s=i.b.p.withConfig({displayName:"styles__P",componentId:"sc-82hblw-1"})(["margin-bottom:5px;"]),d=i.b.div.withConfig({displayName:"styles__Post",componentId:"sc-82hblw-2"})(["padding:10px 15px;width:100%;"]),c=i.b.h2.withConfig({displayName:"styles__Title",componentId:"sc-82hblw-3"})(["color:#000000;text-decoration:none;"]),p=function(t){var e=t.data.allMarkdownRemark.edges.map((function(t){var e=t.node;return o.a.createElement(l,{key:e.fields.slug},o.a.createElement(r.Link,{to:e.fields.slug},o.a.createElement(c,null,e.frontmatter.title)),o.a.createElement(s,{className:"post-date"},e.frontmatter.date),o.a.createElement(s,null,e.frontmatter.description))}));return o.a.createElement(d,null,e)}}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-70be286de61f0eac7beb.js.map