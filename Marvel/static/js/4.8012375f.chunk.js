/*! For license information please see 4.8012375f.chunk.js.LICENSE.txt */
(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[4],{211:function(t,e,r){},221:function(t,e,r){"use strict";r.r(e);var n=r(49),o=r(34),a=r(1),c=r(8),i=r(45),u=r(13),s=r(37),l=(r(211),r(0)),f=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),r=e[0],f=e[1],h=Object(a.useState)(!1),p=Object(o.a)(h,2),d=p[0],v=p[1],m=Object(a.useState)(0),b=Object(o.a)(m,2),y=b[0],g=b[1],j=Object(a.useState)(!1),O=Object(o.a)(j,2),w=O[0],x=O[1],_=Object(i.a)(),E=_.loading,L=_.error,S=_.getAllComics;Object(a.useEffect)((function(){k(y,!0)}),[]);var k=function(t,e){v(!e),S(t).then(N)},N=function(t){var e=!1;t.length<8&&(e=!0),f([].concat(Object(n.a)(r),Object(n.a)(t))),v(!1),g(y+8),x(e)};var A=function(t){var e=t.map((function(t,e){return Object(l.jsx)("li",{className:"comics__item",children:Object(l.jsxs)(c.b,{to:"/comics/".concat(t.id),children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(l.jsx)("div",{className:"comics__item-name",children:t.title}),Object(l.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)}));return Object(l.jsx)("ul",{className:"comics__grid",children:e})}(r),C=L?Object(l.jsx)(s.a,{}):null,T=E&&!d?Object(l.jsx)(u.a,{}):null;return Object(l.jsxs)("div",{className:"comics__list",children:[C,T,A,Object(l.jsx)("button",{disabled:d,style:{display:w?"none":"block"},className:"button button__main button__long",onClick:function(){return k(y)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})},h=r(73);e.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h.a,{}),Object(l.jsx)(f,{})]})}},34:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(40);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],c=!0,i=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);c=!0);}catch(u){i=!0,o=u}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},37:function(t,e,r){"use strict";var n=r.p+"static/media/error.42292aa1.gif",o=r(0);e.a=function(){return Object(o.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"error"})}},40:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(47);function o(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},41:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(50);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(k){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new E(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=w(c,r);if(i){if(i===h)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var m={};s(m,c,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(L([])));y&&y!==e&&r.call(y,c)&&(m=y);var g=v.prototype=p.prototype=Object.create(m);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function o(a,c,i,u){var s=f(t[a],t,c);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==Object(n.a)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,i,u)}),(function(t){o("throw",t,i,u)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,u)}))}u(s.arg)}var a;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=v,s(g,"constructor",v),s(v,"constructor",d),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},j(O.prototype),s(O.prototype,i,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new O(l(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},j(g),s(g,u,"Generator"),s(g,c,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(i&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}},42:function(t,e,r){"use strict";function n(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var c=t.apply(e,r);function i(t){n(c,o,a,i,u,"next",t)}function u(t){n(c,o,a,i,u,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return o}))},45:function(t,e,r){"use strict";var n=r(41),o=r(42),a=r(34),c=r(1);e.a=function(){var t=function(){var t=Object(c.useState)(!1),e=Object(a.a)(t,2),r=e[0],i=e[1],u=Object(c.useState)(null),s=Object(a.a)(u,2),l=s[0],f=s[1],h=Object(c.useCallback)(function(){var t=Object(o.a)(Object(n.a)().mark((function t(e){var r,o,a,c,u,s=arguments;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"GET",o=s.length>2&&void 0!==s[2]?s[2]:null,a=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"aplication/json"},i(!0),t.prev=4,t.next=7,fetch(e,{method:r,body:o,headers:a});case 7:if((c=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(c.status));case 10:return t.next=12,c.json();case 12:return u=t.sent,i(!1),t.abrupt("return",u);case 17:throw t.prev=17,t.t0=t.catch(4),i(!1),f(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{loading:r,request:h,error:l,clearError:Object(c.useCallback)((function(){return f(null)}),[])}}(),e=t.loading,r=t.request,i=t.error,u=t.clearError,s="https://gateway.marvel.com:443/v1/public/",l="apikey=b43ce43f3ebb68376c46e4f302e81ee0",f=function(){var t=Object(o.a)(Object(n.a)().mark((function t(){var e,o,a=arguments;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,r("".concat(s,"characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return o=t.sent,t.abrupt("return",o.data.results.map(m));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(Object(n.a)().mark((function t(e){var o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(s,"characters?name=").concat(e,"&").concat(l));case 2:return o=t.sent,t.abrupt("return",o.data.results.map(m));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(o.a)(Object(n.a)().mark((function t(e){var o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(s,"characters/").concat(e,"?").concat(l));case 2:return o=t.sent,t.abrupt("return",m(o.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(o.a)(Object(n.a)().mark((function t(){var e,o,a=arguments;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,r("".concat(s,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(l));case 3:return o=t.sent,t.abrupt("return",o.data.results.map(b));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(Object(n.a)().mark((function t(e){var o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(s,"comics/").concat(e,"?").concat(l));case 2:return o=t.sent,t.abrupt("return",b(o.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},b=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices.price?"".concat(t.prices.price,"$"):"not available"}};return{loading:e,error:i,clearError:u,getAllCharacters:f,getCharacterByName:h,getCharacter:p,getAllComics:d,getComic:v}}},47:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},49:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(47);var o=r(40);function a(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},50:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,"a",(function(){return n}))},72:function(t,e,r){},73:function(t,e,r){"use strict";r(72);var n=r.p+"static/media/Avengers.4065c8f9.png",o=r.p+"static/media/Avengers_logo.9eaf2193.png",a=r(0);e.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:n,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:o,alt:"Avengers logo"})]})}}}]);
//# sourceMappingURL=4.8012375f.chunk.js.map