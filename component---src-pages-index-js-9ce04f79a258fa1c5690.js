webpackJsonp([35783957827783],{89:function(e,t){"use strict";var l={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,r=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,o=Object.getPrototypeOf,i=o&&o(Object);e.exports=function e(t,s,f){if("string"!=typeof s){if(i){var d=o(s);d&&d!==i&&e(t,d,f)}var m=r(s);u&&(m=m.concat(u(s)));for(var p=0;p<m.length;++p){var E=m[p];if(!(l[E]||a[E]||f&&f[E])){var h=c(s,E);try{n(t,E,h)}catch(e){}}}return t}return t}},52:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),r=a(n),u=function(){return r.default.createElement("footer",{id:"footer"},r.default.createElement("div",{className:"inner"},r.default.createElement("ul",{className:"icons"},r.default.createElement("li",null,r.default.createElement("a",{href:"mailto:bderiel@gmail.com",className:"icon alt fa-envelope"},r.default.createElement("span",{className:"label"},"Email"))),r.default.createElement("li",null,r.default.createElement("a",{href:"https://github.com/Brian4292",className:"icon alt fa-github"},r.default.createElement("span",{className:"label"},"GitHub"))),r.default.createElement("li",null,r.default.createElement("a",{href:"https://www.linkedin.com/in/brian-deriel/",className:"icon alt fa-linkedin"},r.default.createElement("span",{className:"label"},"LinkedIn")))),r.default.createElement("ul",{className:"copyright"},r.default.createElement("li",null,"© Brian Deriel"),r.default.createElement("li",null,"Design: ",r.default.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))))};t.default=u,e.exports=t.default},151:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=l(1),o=a(c),i=l(15),s=(a(i),function(e){function t(){n(this,t);var l=r(this,e.call(this));return l.handleClick=l.handleClick.bind(l),l}return u(t,e),t.prototype.handleClick=function(){document.querySelector("#one").scrollIntoView({behavior:"smooth"})},t.prototype.render=function(){return o.default.createElement("section",{id:"banner",className:"major"},o.default.createElement("div",{className:"fade inner"},o.default.createElement("header",{className:"major"},o.default.createElement("h1",null,"Brian Deriel")),o.default.createElement("div",{className:"content"},o.default.createElement("p",null,"Fullstack software engineer, problem solver, and team player.",o.default.createElement("br",null),"I'm constantly looking for new challenges and opportunities to learn."),o.default.createElement("ul",{className:"actions"},o.default.createElement("li",{onClick:this.handleClick},o.default.createElement("span",{className:"button next scrolly"},"Projects"))))))},t}(c.Component));t.default=s,e.exports=t.default},53:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),r=a(n),u=l(15),c=a(u),o=function(){return r.default.createElement("header",{id:"header",className:"alt"},r.default.createElement(c.default,{to:"/",className:"logo"},r.default.createElement("strong",null,"Brian")," ",r.default.createElement("span",null,"Deriel")))};t.default=o,e.exports=t.default},152:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),r=a(n),u=l(15),c=a(u),o=function(e){return r.default.createElement("article",null,r.default.createElement("span",{className:"image"},r.default.createElement("img",{src:e.image,alt:""})),r.default.createElement("header",{className:"major"},r.default.createElement("h3",null,r.default.createElement(c.default,{to:e.link,className:"link"},e.title)),r.default.createElement("p",null,e.description)))};t.default=o,e.exports=t.default},153:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),r=a(n),u=l(152),c=a(u);t.default=function(e){return r.default.createElement("div",{id:"main"},r.default.createElement("section",{id:"one",className:"tiles"},e.data.map(function(e){var t=e.node.frontmatter;return r.default.createElement(c.default,{title:t.title,link:t.path,image:t.preview,description:t.subtitle})})))},e.exports=t.default},156:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.homeQuery=void 0;var n=l(1),r=a(n),u=l(15),c=(a(u),l(53)),o=a(c),i=l(151),s=a(i),f=l(153),d=a(f),m=l(52),p=a(m),E=function(e){var t=e.data;return console.log(t.allMarkdownRemark.edges),r.default.createElement(n.Fragment,null,r.default.createElement(o.default,null),r.default.createElement(s.default,null),r.default.createElement(d.default,{data:t.allMarkdownRemark.edges}),r.default.createElement(p.default,null))};t.default=E;t.homeQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-9ce04f79a258fa1c5690.js.map