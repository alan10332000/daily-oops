(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[311],{2449:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(6674);function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(s,e);var t,n,o,a=f(s);function s(){return c(this,s),a.apply(this,arguments)}return t=s,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?m():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,i.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&u(t.prototype,n),o&&u(t,o),s}(r.default.Component);t.CommentCount=h,h.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},5890:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=i(n(7294)),o=i(n(5697));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(a,e);var t,n,o,i=l(a);function a(){return s(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&c(t.prototype,n),o&&c(t,o),a}(r.default.Component);t.CommentEmbed=d,d.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},d.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},4811:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(6674);function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(s,e);var t,n,o,a=p(s);function s(){return u(this,s),a.apply(this,arguments)}return t=s,(n=[{key:"componentDidMount",value:function(){"undefined"!==typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),h.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return r.default.createElement("div",c({},this.props,{id:"disqus_thread"}))}}])&&l(t.prototype,n),o&&l(t,o),s}(r.default.Component);t.DiscussionEmbed=y,y.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},3944:function(e,t,n){"use strict";Object.defineProperty(t,"qw",{enumerable:!0,get:function(){return i.DiscussionEmbed}});var r=n(2449),o=n(5890),i=n(4811);r.CommentCount,o.CommentEmbed,i.DiscussionEmbed},6674:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},s=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),s&&e.apply(o,i)}},t.isReactElement=s,t.shallowComparison=function e(t,n){var r,o=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var c=r.value;if("object"===i(t[c])){if(e(t[c],n[c]))return!0}else if(t[c]!==n[c]&&!s(t[c]))return!0}}catch(u){o.e(u)}finally{o.f()}return!1};var r,o=(r=n(7294))&&r.__esModule?r:{default:r};function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},5240:function(e,t,n){var r={"./bmp":2899,"./bmp.js":2899,"./gif":2655,"./gif.js":2655,"./jpg":2404,"./jpg.js":2404,"./png":1339,"./png.js":1339,"./psd":6483,"./psd.js":6483,"./svg":3195,"./svg.js":3195,"./tiff":516,"./tiff.js":516,"./webp":437,"./webp.js":437};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=5240},7248:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(2809),o=n(5893),i=n(8227),a=n(5339),s=n(640),c=n.n(s),u=n(7294),l=function(){(0,u.useEffect)((function(){var e=function(e){var t,n;if((n=e.target)&&n.classList.contains("copy-snippet-button")&&!n.classList.contains("copied"))t=e.target;else if(!(t=function(e){var t=e.closest(".copy-snippet-button");return t&&t.contains(e)&&t}(e.target)))return;var r=t.closest("pre");t.classList.add("copied");var o=(0,a.Z)(r.querySelectorAll(".hljs-line")).map((function(e){return e.textContent})).join("\n");c()(o),window.setTimeout((function(){t.classList.remove("copied")}),700)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[])},f=(n(9675),n(7802)),p=n.n(f),d=n(9980),m=n.n(d),h=n(8486),y=n(591),g=n.n(y),b=n(7432);p().registerLanguage("javascript",n(6344)),p().registerLanguage("js",n(6344)),p().registerLanguage("typescript",n(1533)),p().registerLanguage("ts",n(1533)),p().registerLanguage("json",n(2026)),p().registerLanguage("java",n(7721)),p().registerLanguage("markdown",n(3839)),p().registerLanguage("md",n(3839)),p().registerLanguage("shell",n(9514)),p().registerLanguage("powershell",n(6336)),p().registerLanguage("css",n(8914)),p().registerLanguage("scss",n(6632)),p().registerLanguage("yaml",n(4587)),p().registerLanguage("python",n(308)),p().registerLanguage("http",n(786)),p().registerLanguage("go",n(3048)),p().registerLanguage("ruby",n(8473)),p().registerLanguage("bash",n(1519));var v=function(e,t){return t.some((function(t){return Array.isArray(t)?t[0]<=e&&e<=t[1]:e===t}))},w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=!1;t.match(/\w+\=/)&&(r=!0);var o=t.match(/\w+\=(\d+)/),i=0;o&&(i=Math.abs(parseInt(o[1],10))-1);var s=[],c=n.match(/\[([\d-,\s]+)\]/);c&&c[1].split(",").forEach((function(e){e.includes("-")?s=[].concat((0,a.Z)(s),[e.split("-").map((function(e){return parseInt(e.trim(),10)}))]):s.push(parseInt(e.trim(),10))}));var u=e.slice(0,-1).split("\n").map((function(e,t){var n=t+1+i,r=v(n,s)?" highlighted":"",o='<td class="hljs-line'.concat(r,'" id="LC').concat(n,'">').concat(e,"</td>");return'<tr><td class="hljs-line-number" data-line-number='.concat(n,"></td>").concat(o,"</tr>")})).join(""),l=r?" has-line-number":"",f='<button class="btn copy-snippet-button position-absolute top-1 right-1"><i class="fas fa-clipboard"></i><i class="fas fa-check"></i></button>';return"".concat(f,'<table class="fence-wrapper').concat(l,'"><tbody>').concat(u,"</tbody></table>")};function j(e,t,n,r,o){var i=e[t],a=i.info.trim();return i.attrJoin("class","container-block color-bg-".concat(a," color-border-").concat(a," rounded-2 p-3")),o.renderToken.apply(o,arguments)}var S=m()("default",{linkify:!0,typographer:!0,html:!0,highlight:function(e,t,n){var r=function(e){var t=e.match(/(.+)\=/);return t?t[1]:e}(t);if(!t||!p().getLanguage(r))return w(e,t,n);try{var o=p().highlight(e,{language:r}).value;return w(o,t,n)}catch(i){}return""}});function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}S.use(n(9411)).use(n(8689)).use(n(4574)).use(n(4266)).use(n(700)).use(n(7003)).use(n(2384)).use(n(7533)).use(n(4699),{dataType:!0,figcaption:!0}).use(h.Z,{permalink:!0,permalinkClass:"anchor",permalinkBefore:!0,permalinkSymbol:'<svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>'}).use(b.Z).use(g(),"success",{render:j}).use(g(),"info",{render:j}).use(g(),"warning",{render:j}).use(g(),"danger",{render:j}).use(g(),"spoiler",{validate:function(e){return e.trim().match(/^spoiler(\s+.*)?$/)},render:function(e,t){var n=e[t].info.trim().match(/^spoiler(\s+.*)?$/);if(1===e[t].nesting){var r=n[1]&&n[1].trim();return r?"<details><summary>".concat(S.renderInline(r),"</summary>\n"):"<details>\n"}return"</details>\n"}}).use(n(5444)).use(n(6635)).use(n(8187),{});var k=function(e){var t,n=e.content,r=e.className,a=(0,i.Z)(e,["content","className"]);return l(),(0,o.jsx)("main",{id:"main",property:"schema:mainEntity",children:(0,o.jsx)("article",O({itemScope:!0,itemProp:"post",typeof:"schema:Article schema:BlogPosting",property:"schema:articleBody",className:"markdown-body ".concat(r),dangerouslySetInnerHTML:{__html:(t=n,S.render(t))}},a))})}},2822:function(e,t,n){"use strict";var r=n(7484),o=n.n(r),i=n(6176),a=n.n(i);o().extend(a()),t.Z=o()},6737:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return p}});var r=n(5893),o=n(7248),i=n(3944),a=n(2822),s=n(2962),c=n(2010),u=n(7294),l=n(4930),f=!0;function p(e){var t=e.content,n=e.title,f=e.params,p=e.disqus,d=e.noteId,m=e.meta,h=f.year,y=f.month,g=f.day,b=f.slug,v=(0,a.Z)("".concat(h,"-").concat(y,"-").concat(g)),w="https://".concat(null===p||void 0===p?void 0:p.domain,"/blog/").concat(h,"/").concat(y,"/").concat(g,"/").concat(b),j=t.slice(0,150),S=v.format(),_=(0,c.F)().resolvedTheme,O=(0,u.useState)(_),k=O[0],I=O[1];(0,u.useEffect)((function(){window.setTimeout((function(){I(_)}),100)}),[_]);var E="https://hackmd.io/s/".concat(d);return(0,r.jsxs)("section",{children:[(0,r.jsx)(s.PB,{title:n,description:j,titleTemplate:"%s | Daily Oops!",openGraph:{type:"article",locale:"zh-Hant-TW",url:w,title:n,description:j,site_name:"Daily Oops!",article:{publishedTime:S,modifiedTime:S}}}),(0,r.jsxs)("div",{children:[(null===m||void 0===m?void 0:m.image)&&(0,r.jsx)("div",{className:"container pt-4 pb-1 px-3",children:(0,r.jsx)("img",{src:null===m||void 0===m?void 0:m.image,style:{maxWidth:"100%",borderRadius:6}})}),(0,r.jsx)("div",{className:"container pt-4 pb-3 px-3",children:(0,r.jsx)("span",{className:"text-mono color-text-tertiary",children:v.format("LL")})}),(0,r.jsx)(l.Iv,{options:{settings:{lightboxTransitionSpeed:.1,slideAnimationType:"both",slideSpringValues:[350,50],slideTransitionTimingFunction:"easeInOut"}},children:(0,r.jsx)(o.Z,{content:t,className:"container post-container px-3"})}),(0,r.jsx)("div",{className:"container py-3 px-3",children:(0,r.jsxs)("div",{className:"container-block color-bg-info color-border-info rounded-2 p-3",children:["\u672c\u7bc7\u6587\u7ae0\u9a55\u50b2\u7684\u4f7f\u7528 ",(0,r.jsxs)("a",{className:"no-underline color-text-primary text-semibold",href:"https://hackmd.io",target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)("i",{className:"fas fa-file-alt"})," HackMD"]})," ",(0,r.jsx)("a",{target:"_blank",href:E,rel:"noopener noreferrer",children:"\u767c\u4f48"})]})}),p&&(0,r.jsx)("div",{className:"container py-3 px-3",children:(0,r.jsx)(i.qw,{shortname:p.shortname,config:{url:w,identifier:w,title:n,language:"zh_TW"},darkmode:JSON.stringify(k)})})]})]})}},7762:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[year]/[month]/[day]/[slug]",function(){return n(6737)}])},3596:function(){},6098:function(){},6981:function(){},7103:function(){}},function(e){e.O(0,[774,146,732,549,888,179],(function(){return t=7762,e(e.s=t);var t}));var t=e.O();_N_E=t}]);