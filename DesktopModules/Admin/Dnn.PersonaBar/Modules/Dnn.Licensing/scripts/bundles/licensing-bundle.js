!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=30)}([function(e,n){e.exports=window.dnn.nodeModules.React},function(e,n,t){"use strict";var r={LOAD_MORE:"LOAD_MORE",LOAD_TAB_DATA:"LOAD_TAB_DATA"},o={SELECT_PANEL:"SELECT_PANEL"},i={RETRIEVED_LICENSING_PRODUCT:"RETRIEVED_LICENSING_PRODUCT",RETRIEVED_SERVER_INFO:"RETRIEVED_SERVER_INFO"};t.d(n,"b",function(){return r}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return i})},function(e,n){e.exports=window.dnn.nodeModules.ReactRedux},function(e,n,t){"use strict";var r={init:function(e){if(!e)throw new Error("Utilities is undefined.");this.utilities=e},utilities:null};n.a=r},function(e,n){e.exports=window.dnn.nodeModules.Redux},function(e,n){e.exports=window.dnn.nodeModules.CommonComponents},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),l=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),c=null,s=0,u=[],p=t(19);function f(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],n))}else{var l=[];for(a=0;a<r.parts.length;a++)l.push(y(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:l}}}}function d(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(l):t.push(r[a]={id:a,parts:[l]})}return t}function b(e,n){var t=l(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),u.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(e.insertAt.before,t);t.insertBefore(n,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=u.indexOf(e);n>=0&&u.splice(n,1)}function h(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return g(n,e.attrs),b(e,n),n}function g(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function y(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var a=s++;t=c||(c=h(n)),r=E.bind(null,t,a,!1),o=E.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(n,e.attrs),b(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,t,n),o=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){m(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=d(e,n);return f(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var a=t[o];(l=i[a.id]).refs--,r.push(l)}e&&f(d(e,n),n);for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete i[l.id]}}}};var v,w=(v=[],function(e,n){return v[e]=n,v.filter(Boolean).join("\n")});function E(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n,t){e.exports=t(20)()},function(e,n,t){var r=t(22);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(7)(r,o);r.locals&&(e.exports=r.locals)},function(e,n){e.exports=window.dnn.nodeModules.ReduxThunk},function(e,n){e.exports=window.dnn.nodeModules.ReactDOM},function(e,n){e.exports=window.dnn.nodeModules.ReduxImmutableStateInvariant},function(e,n){e.exports=window.dnn.nodeModules.ReduxDevTools},function(e,n){e.exports=window.dnn.nodeModules.ReduxDevToolsLogMonitor},function(e,n){e.exports=window.dnn.nodeModules.ReduxDevToolsDockMonitor},function(e,n,t){e.exports=t(29)},function(e,n,t){var r=t(18);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(7)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(6)(!1)).push([e.i,"",""])},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n,t){"use strict";var r=t(21);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){(n=e.exports=t(6)(!1)).push([e.i,"/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n._2wR2bEK-gcpZDleHSljFSX {\n  border-bottom: none;\n}\n._2wR2bEK-gcpZDleHSljFSX .intro-header-row {\n  padding: 10px;\n  float: right;\n  overflow: hidden;\n  color: #959695;\n  border-left: 1px solid #C8C8C8;\n  border-bottom: 1px solid #C8C8C8;\n}\n._2wR2bEK-gcpZDleHSljFSX .intro {\n  text-align: center;\n  padding: 50px 0;\n  border: 1px solid #C8C8C8;\n}\n._2wR2bEK-gcpZDleHSljFSX .intro .intro-header {\n  margin: 0 0 15px 0;\n  font-size: 25px;\n  color: #4B4E4F;\n}\n._2wR2bEK-gcpZDleHSljFSX .intro .intro-body {\n  font-size: 15px;\n  color: #959695;\n  margin: 0 50px;\n}\n._2wR2bEK-gcpZDleHSljFSX .intro .dnn-technology-editorial-icon {\n  width: 250px;\n  float: right;\n  margin: 0 20px;\n  /*> svg {\n                width: 250px;\n            }*/\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper {\n  float: left;\n  margin-top: 30px;\n  border: 1.5px solid #C8C8C8;\n  font-weight: bolder;\n  display: flex;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-github-wrapper {\n  float: left;\n  width: 265px;\n  margin: 25px 0;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-github-wrapper .link-github {\n  height: 100%;\n  cursor: pointer;\n  float: left;\n  margin: 0 20px;\n  text-align: center;\n  border: 1px solid #fafafa;\n  min-height: 290px;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-github-wrapper .link-github:hover {\n  border: 1px solid #21A3DA;\n  background-color: #FBFCFC;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-github-wrapper .link-github .link-github-header {\n  margin: 10px 0 20px 0;\n  color: #4B4E4F;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-github-wrapper .link-github .link-github-desc {\n  margin: 0 25px 20px 25px;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-github-wrapper .link-github .github-icon {\n  margin-top: 10px;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-github-wrapper .link-github .github-icon > svg {\n  width: 80px;\n  height: 80px;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-community-wrapper {\n  border-right: 1px solid #C8C8C8;\n  float: left;\n  width: 264px;\n  margin: 25px 0;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-community-wrapper .link-community {\n  height: 100%;\n  cursor: pointer;\n  float: left;\n  margin: 0 20px;\n  text-align: center;\n  border: 1px solid #fafafa;\n  min-height: 290px;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-community-wrapper .link-community:hover {\n  border: 1px solid #21A3DA;\n  background-color: #FBFCFC;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-community-wrapper .link-community .link-community-header {\n  margin: -10px 0 20px 0;\n  color: #4B4E4F;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-community-wrapper .link-community .link-community-desc {\n  margin: 0 25px 20px 25px;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-community-wrapper .link-community .dnn-icon > svg {\n  width: 110px;\n  height: 110px;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-docs-wrapper {\n  border-right: 1px solid #C8C8C8;\n  float: left;\n  width: 265px;\n  margin: 25px 0;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-docs-wrapper .link-docs {\n  height: 100%;\n  cursor: pointer;\n  float: left;\n  margin: 0 20px;\n  text-align: center;\n  border: 1px solid #fafafa;\n  min-height: 290px;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-docs-wrapper .link-docs:hover {\n  border: 1px solid #21A3DA;\n  background-color: #FBFCFC;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-docs-wrapper .link-docs .link-docs-header {\n  margin: 10px 0 20px 0;\n  color: #4B4E4F;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-docs-wrapper .link-docs .link-docs-desc {\n  margin: 0 25px 20px 25px;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-docs-wrapper .link-docs .docs-icon {\n  margin-top: 20px;\n}\n._2wR2bEK-gcpZDleHSljFSX .links-wrapper .link-docs-wrapper .link-docs .docs-icon > svg {\n  height: 69px;\n}\n",""]),n.locals={licensingPlatform:"_2wR2bEK-gcpZDleHSljFSX"}},function(e,n,t){"use strict";t.r(n),n.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.9 118.9"><title>DNN Technology Editorial</title><path d="M20.62,59.45A38.83,38.83,0,1,1,59.45,98.28,38.83,38.83,0,0,1,20.62,59.45" fill="#e6e7e8"/><path d="M71.79,51V35.5a25.18,25.18,0,0,0-8.46-1.44H37.94V67.92H54.86V51Z" fill="#ef3e42"/><path d="M71.79,51H54.86V67.92h8.47a8.46,8.46,0,0,0,8.46-8.46Z" fill="#fff"/><path d="M71.79,35.5V51H87.28A25.46,25.46,0,0,0,71.79,35.5M37.94,84.85H54.87V67.92H37.94Z" fill="#472a2b"/><path d="M87.28,51H71.79v8.47a8.46,8.46,0,0,1-8.46,8.46H54.86V84.85h8.47A25.42,25.42,0,0,0,87.28,51" fill="#00a4e4"/><path d="M48.69,106.57l-.85-.19-.33,1.48.93.21c.65.14,1.09,0,1.2-.55s-.22-.79-1-1M72.61,9.93l-1.55,2.2,1.78.47ZM12.41,43.74a2.1,2.1,0,1,0,1.49-3.92,2.1,2.1,0,1,0-1.49,3.92M93.65,25.55c.43-.44.21-.93-.34-1.45l-.71-.69-1.17,1.22.72.68c.41.39,1,.75,1.5.24m-5.77-8.72L85.7,18.4l1.54,1Zm7.62,6.45c.34-.36.22-.79-.32-1.3l-.63-.6-1,1.09.69.66c.48.46,1,.52,1.31.15M16.66,31.81c-.6-.37-1,.09-1.36.63l-.41.66,1.48.91.39-.64c.34-.57.5-1.19-.1-1.56M59.45,0A59.45,59.45,0,1,0,118.9,59.45,59.45,59.45,0,0,0,59.45,0m47.67,35.7-1.31.74-1.58-2.82L103,34.3l1.5,2.66-1.24.69L101.78,35l-1.33.75,1.67,3-1.32.74L98.29,35l6.41-3.6Zm-5.6-8.8-4.6,3.54,1.73,2.25-1.22.94L94.61,30l5.82-4.48ZM96.4,21.2c.82.79,1.53,2,.5,3.09a1.61,1.61,0,0,1-2,.31v0a1.68,1.68,0,0,1-.1,2.27c-1.11,1.16-2.49.58-3.5-.39l-2.11-2,5.08-5.3Zm-8.12-6.47,1.43,1L88.16,23.5l-1.64-1.1.33-1.52L84.49,19.3l-1.25.9-1.61-1.07Zm-8.91-4.65,1.63.73L78.63,16.1l2.6,1.17-.63,1.41-4.23-1.89ZM72.31,7.82,74,8.26,75,16.15l-1.91-.51L73,14.1l-2.75-.72-.89,1.25-1.87-.49Zm-12.21,2a4,4,0,0,1,6.95-2.17L65.74,8.71a1.84,1.84,0,0,0-1.41-.8A2.11,2.11,0,0,0,62,10a2.07,2.07,0,0,0,1.88,2.43,1.89,1.89,0,0,0,1.61-.6l1.13,1.26a3.64,3.64,0,0,1-3,1A3.77,3.77,0,0,1,60.1,9.79m-5.4.92c-1-.23-1.94-.63-2.05-2-.13-1.62,1.29-2.42,2.65-2.53a3.68,3.68,0,0,1,2.47.7l-1,1.28a1.83,1.83,0,0,0-1.36-.52c-.46,0-1,.24-1,.82s.48.61,1.19.77c1,.23,2.34.55,2.46,2,.14,1.69-1.15,2.56-2.6,2.67a3.86,3.86,0,0,1-2.83-.83l1.06-1.27a2.2,2.2,0,0,0,1.65.65c.54,0,1-.3,1-.88s-.62-.69-1.61-.92M24.54,19.3l5.33,1.81,0,0L26.8,17.42l1.33-1.09L32.82,22l-1.55,1.28-5.35-1.81,0,0L29,25.15l-1.32,1.1L23,20.59Zm-4,3.79,1.15,1L19.6,26.52l1,.9,2-2.33,1.08.92-2,2.33,1.16,1,2.21-2.61,1.16,1L23,31.62l-5.6-4.77Zm-6.39,8.47c.84-1.37,2-2.14,3.43-1.26S18.83,32.68,18,34l-.46.75,2.36,1.45L19,37.71l-6.26-3.85ZM9.56,40.42a3.74,3.74,0,0,1,5-2.38,3.81,3.81,0,0,1,2.22,5.14,3.8,3.8,0,0,1-5.07,2.34,3.74,3.74,0,0,1-2.17-5.1m-2.62,33,7-2.2,1.48,4.72L14,76.36l-1-3.08-1.32.41.92,2.91L11.27,77l-.91-2.91-1.46.45,1,3.26-1.44.46ZM12.66,87.2l-1-2,1.6-2.6-3-.22L9.3,80.54l4.62.54,2-3.67,1,1.91-1.42,2.25,2.65.18.93,1.84-4.14-.51ZM16,92l-1-1.44,4.72-3.43-1.22-1.68,1.22-.89,3.49,4.8L22,90.26l-1.22-1.68Zm7.54,6.2-1.09,1.05-3.57-3.67,5.26-5.12L27.62,94l-1.08,1-2.25-2.31-1,1,2.13,2.19-1,1L22.28,94.7l-1.09,1.06Zm5,5.89L29,98.47h0l-2.8,3.9-1.39-1,4.33-5.94,1.64,1.19-.45,5.62,0,0,2.79-3.9,1.39,1-4.33,5.94Zm9,.06c.75.74,1.71,1.69,1,3-.75,1.52-2.31,1.59-3.61.94a3.86,3.86,0,0,1-2-2.18l1.56-.54a2.2,2.2,0,0,0,1.08,1.41c.48.24,1,.27,1.26-.26s-.17-.91-.89-1.62-1.34-1.54-.74-2.73c.73-1.45,2.35-1.4,3.57-.79a3.67,3.67,0,0,1,1.75,1.89l-1.54.56a1.77,1.77,0,0,0-.89-1.15c-.41-.21-1-.32-1.25.2s.1.77.63,1.27m4.33,6.64-1.68-.61,2.49-6.91,1.68.6Zm9.5-3.14a1.6,1.6,0,0,1-1.52,1.28v0a1.7,1.7,0,0,1,1.09,2c-.35,1.56-1.84,1.78-3.2,1.47l-2.86-.64,1.61-7.17,2.86.64c1.11.25,2.35.94,2,2.39M58,113.75l-4.61-.34.54-7.33,1.78.13L55.26,112l2.83.21ZM18.91,59.45A40.55,40.55,0,1,1,59.45,100,40.54,40.54,0,0,1,18.91,59.45m41.56,54.3L60,106.42l4.93-.3.09,1.5-3.22.2.08,1.37L65,109l.09,1.42-3.05.18.09,1.53,3.41-.21.09,1.51ZM91.3,103.61a3.85,3.85,0,0,1-2.85.76l.25-1.64a2.19,2.19,0,0,0,1.74-.3c.44-.32.7-.77.35-1.25s-.88-.26-1.85,0a2.19,2.19,0,0,1-2.76-.6c-1-1.32-.16-2.73.95-3.53a3.67,3.67,0,0,1,2.48-.69L89.4,98A1.79,1.79,0,0,0,88,98.3c-.37.27-.74.73-.4,1.2s.73.26,1.42,0c1-.33,2.29-.74,3.15.45,1,1.37.34,2.78-.84,3.63m4.55-3.85-5.17-5.23,3.52-3.48,1.06,1.08L93,94.39l1,1,2.17-2.15,1,1-2.17,2.15L96,97.48l2.44-2.4,1.06,1.07Zm8-8.75a3.87,3.87,0,1,1-3.72-6.18l.25,1.68a1.85,1.85,0,0,0-1.42.8,2.12,2.12,0,0,0,.56,3,2.07,2.07,0,0,0,3-.35,1.88,1.88,0,0,0,.32-1.7l1.67-.3a3.63,3.63,0,0,1-.71,3m4.51-7.56a2.87,2.87,0,0,1-4,1.5l-4.11-2,.78-1.58,4,2a1.39,1.39,0,1,0,1.21-2.48l-4-1.95.78-1.59,4.11,2a2.9,2.9,0,0,1,1.27,4.15m3.56-10-3.24.72-.17.57,2.8.82-.49,1.67-7.06-2.05.79-2.69c.39-1.36,1.3-2.55,2.91-2.08a2,2,0,0,1,1.48,2l3.56-1Zm-6.21-5.74.61-4.9,1.5.18-.4,3.21,1.37.17.37-3,1.41.17-.37,3,1.51.19.42-3.39,1.51.19L113,68.57ZM107,72.05c-.65-.19-1,.4-1.11.91l-.27.91,1.65.48.23-.81c.16-.55.22-1.28-.5-1.49m-58.8,37.3-1-.22-.36,1.64,1,.22c.55.13,1.25.12,1.4-.58s-.3-.89-1-1.06" fill="#d1d3d4"/><path d="M6.27,53.47l-.56-.57a.4.4,0,0,0-.56,0,.4.4,0,0,0,0,.57l.56.56a.4.4,0,0,0,.56,0,.39.39,0,0,0,0-.56" fill="#bcbec0"/><path d="M4.2,56.89H3.4a.4.4,0,1,0,0,.79h.8a.4.4,0,0,0,0-.79" fill="#bcbec0"/><path d="M15.34,57.68h-.8a.4.4,0,0,0,0,.8h.8a.4.4,0,0,0,0-.8" fill="#bcbec0"/><path d="M14.15,53.47a.39.39,0,0,0-.56,0L13,54a.39.39,0,0,0,0,.56.4.4,0,0,0,.56,0l.56-.56a.39.39,0,0,0,0-.56" fill="#bcbec0"/><path d="M9.77,52.91a.39.39,0,0,0,.28-.12.4.4,0,0,0,.12-.28v-.8a.4.4,0,0,0-.77-.15l0,.16v.79a.4.4,0,0,0,.4.4" fill="#bcbec0"/><path d="M9.37,54.5a3.18,3.18,0,0,0-1.6,5.93v1.23H11V60.43A3.18,3.18,0,0,0,9.37,54.5" fill="#bcbec0"/><rect x="7.77" y="62.35" width="3.18" height="0.8" fill="#bcbec0"/><path d="M7.77,64.54h.82l0,.1c0,.38.36.39.8.39s.79,0,.79-.39l0-.1H11v-.8H7.77Z" fill="#bcbec0"/><path d="M112,47.83v-1a3.35,3.35,0,0,0-6.7,0v1h-.75v6.71h8.2V47.83Zm-2.71,5.24h-1.48l.38-2a.74.74,0,1,1,1.1-.64.74.74,0,0,1-.37.64Zm1.22-5.24h-3.72v-1a1.86,1.86,0,0,1,3.72,0Z" fill="#bcbec0"/><path d="M80.66,108.62a1.39,1.39,0,0,1-2,2,1.33,1.33,0,0,1-.37-.7l-1.58,1.59-1.61-1.61a1.38,1.38,0,0,0,.63-2.31,1.37,1.37,0,0,0-2,0,1.35,1.35,0,0,0-.36.62l-1.6-1.6L73.38,105a1.55,1.55,0,0,1-.55-.33,1.39,1.39,0,1,1,2-2,1.55,1.55,0,0,1,.33.55l1.63-1.63,1.6,1.6A1.39,1.39,0,1,0,80,105l1.6,1.61L80,108.25a1.33,1.33,0,0,1,.7.37" fill="#bcbec0"/><path d="M40.39,13a1.12,1.12,0,1,0,1.12-1.12A1.12,1.12,0,0,0,40.39,13" fill="#bcbec0"/><path d="M42.49,9.62h1.3L41.51,7.34,39.23,9.62h1.29v1.85a1.77,1.77,0,0,1,1-.29,1.74,1.74,0,0,1,1,.29Zm-2,6.83H39.23l2.28,2.28,2.28-2.28h-1.3V14.61a1.81,1.81,0,0,1-1,.28,1.85,1.85,0,0,1-1-.28Z" fill="#bcbec0"/><path d="M43.36,13a1.82,1.82,0,0,0-.28-1h1.84V10.76L47.2,13l-2.28,2.27V14H43.08a1.81,1.81,0,0,0,.28-1" fill="#bcbec0"/><path d="M35.81,13l2.28-2.28v1.29h1.85a1.82,1.82,0,0,0,0,2H38.09v1.29Z" fill="#bcbec0"/></svg>'},function(e,n,t){"use strict";t.r(n),n.default='<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'},function(e,n,t){"use strict";t.r(n),n.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 31.95"><title>DNN Logo</title><path d="M45,19.5H42.63V14.74H45a2.38,2.38,0,0,1,0,4.76m0-8.85H38.42V23.59H45a6.47,6.47,0,0,0,0-12.94" fill="#472a2b"/><path d="M66.1,17.06a6.48,6.48,0,0,0-6.48-6.41H53.15V23.59h4.21V14.86h2.26a2.26,2.26,0,0,1,2.27,2.26v6.47H66.1V17.06Z" fill="#472a2b"/><path d="M81,17.06a6.47,6.47,0,0,0-6.47-6.41H68.05V23.59h4.21V14.86h2.27a2.26,2.26,0,0,1,2.26,2.26v6.47H81V17.06Z" fill="#472a2b"/><path d="M21.3,10.65V.91A16,16,0,0,0,16,0H0V21.3H10.65V10.65Z" fill="#ef3e42"/><path d="M21.3.91v9.74H31A16,16,0,0,0,21.3.91M0,32H10.65V21.3H0Z" fill="#472a2b"/><path d="M31,10.65H21.3V16A5.33,5.33,0,0,1,16,21.3H10.65V32H16A16,16,0,0,0,31,10.65" fill="#00a4e4"/></svg>'},function(e,n,t){"use strict";t.r(n),n.default='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="131" height="50" viewBox="0 0 131 50">\r\n  <image y="4" width="131" height="43" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAArCAYAAABb0jvlAAAGFUlEQVR4nO2ce4gVVRzHP3fdHppliyuZpVlSGWRZRmWQlX9EVhoFlmUPUAsikiIoi7CiouxlL1R6QWGpmWZgmtrDHprYQy1QsTQfhaUZaVtm2+7Gqe/E8ZzZu3fu3Dszi/OB5c78zpx5fuec3/n9zmyhMHVLC8lxOTAHOA34NMHj5pRADfBbgjeqWX9Lgc+BS70tclKjJuEDNwJNWh4AzAYWq6XISZmkxRDQbC2fA3wG3OVtlZMoaYkhjAflT+SkRJbEYLgEWAZ08Epyqk7WxGA4A/jYs+ZUnSyKwTAQmOZZc6pKVsVgGAFc71njUQAOA3oAXZO+oKyTZTEYntPDqxQdgdXAD8CsdC8te2RdDIaXPEv5mJbhENU+KMmLaA+0BzFcCJzsWcujxYq4/pHkRbQHahM+x076jSrCl4H+njV9OoS0MC0RQ/zmXpwKHK317xSqL4UjgH5AF2AHsBL4uUi9AXqxDgYagK+B5UFhHDFsBb6P8GBrVMewRE12qXTQBe+Mcb7VwITRF0kA6JrM8i5gHbAQeBb4vZVjjwfGAD0d+2bgeeABr8Z/nALcDwxx7v+fwJvAIxJGwHnAYxKdyzq9bFNM1nKXlBKVO4GHs/BEItBJAq4DPlIoPA6DgA/bqP+jsrV27KSgnMwgb+u9Mfs+17ENA97yttybFRKqCfufGZIhNq1CZ8fWJ07LsJ9nKQ0zpHsqYstQ0AU+6pWky9/W0b8CZgIHAscrmmruUXcJ7yi98YZXHCHMsEY3l2lYjcRq3trrtN7TEUKD3vjV2r8J6e8BrrDyP09Y288FRqsFqQcGA9cAdwMb4oih3LrGmx/pWdvmSmCi8wCyxFKnWe8FLAD6an2CruFY4Gpru1v0cgTMVD8ePMRrtd9v1DUEbNPbv8Wpa9hk2Y60lhtUD3VlG4AXgsI0RhONTtYyCn1SON9S6eJst9kR/RD9DrZsKx0hBExUS4NT52LLNs4RAhLBJsc201oeIb/t6ZDup10MLW16e5Zs86Xl9AZiqbfOeGGRs3/HWu7q/Bo+8GqEczswzyox3dbNqr8WuBc4gHYohu6eJfsU843KLSNC62omE10EXOUIDPk298jnqE9DDOV2EYSM6bPO6VbEc4d+t1nnfEGR8x9iLf/k7IMSRiIu07RP07reKoc84BhgUhpiKLTxRhSj3HpJ8KtzDOP5T7XWg777PcvWTw6ky23AiZYtqPO2ZZsQkmw7ATjb2xscZy0bn+JJxRzesOzDk45AGg6P8VCzHEI2afc7NLTsqyHi/iprUFwGefAm3zJK6xM1Kpir9aFq0gNM8GmjlsdrdIEyr2tVf4NGLw+p6zdDy9e13Rjtw8QaJmny0E6NMnpYx5mfhhiGepbS2RqjbjWwZ2T1byVkvl7XbLccozXEDN7ika0Mt0184gZr3bzVw61Wpl6xBZfJEkMvCQGJdaCWm5xzNyO8G9PoJsZ6ltLZGKNuNWhS+LnFCkk368EvUd9smug1Icc2ff59reQStsuxC4uQmqb9LAkljNcsUW7TsHSWglEBthDmq0vaFOcjGtPk3ORZizNDodly+EVzG+IEnSodjjbdQDfH1iIxlNqlddRUPztRtUxRwrYwPsJJSieY+/NFSJwhoJuSVL0VMDRO6Sp1Mf9ijNN1k6KIwvT5n3jW4kyJIQR0g7IWffxLE2XisFt5isVl7GNNK61OGKa1eTfE/j+1CpFWizoNn8ZJwXFYUMXz3OdBYphtzTMolYKclDlKnNRZLUvQf3aWV+1mx8plegX2UdC5Gg71SvdxamN877hUYhjmlVSeeU6wplyalb+vU9+cY1GrWTnlzGcIhkrbQ5yoSjO+QvvbLc+5xvrmM0ekEWeIykJ5yZWiMX/44bSHRNUoz5JTFbIuhrEVGLrllEiWxWCc02c8a07VyKoYVuT/1SV5siiGVVZCJSdBsiaGRfrQY49XklN1siQGMwP4/Hz8nx5ZiDMs18yeqImvnAqTphiMk/g48KpXkpMKtWWGorHm30UJRa9XRNFM0HjfK81JFSOGFzVvLypLtP1kawawTZPyHmYSxbf6YKTU3HtO0gD/AL7PJv78QeuAAAAAAElFTkSuQmCC"/>\r\n</svg>\r\n'},function(e,n,t){var r=t(28);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(7)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(6)(!1)).push([e.i,"/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n#licensing-container .dnn-persona-bar-page-body .persona-bar-page-body {\n  border: none;\n  background-color: #FBFCFC;\n}\n",""])},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=(t(8),t(2)),a=t(5),l=t(1),c={loadTab:function(e){return function(n){n({type:l.b.LOAD_TAB_DATA,payload:{index:e}})}}},s=t(3);function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"getServiceFramework",value:function(e){var n=s.a.utilities.sf;return n.moduleRoot="PersonaBar",n.controller=e,n}},{key:"getProduct",value:function(e){this.getServiceFramework("Licensing").get("GetProduct",{},e)}},{key:"getServerInfo",value:function(e){this.getServiceFramework("ServerSummary").get("GetServerInfo",{},e)}}])&&u(n.prototype,t),r&&u(n,r),e}()),f={getProduct:function(e){return function(n){p.getProduct(function(t){n({type:l.a.RETRIEVED_LICENSING_PRODUCT,data:{productName:t.Results.Name}}),e&&e(t)})}},getServerInfo:function(e){return function(n){p.getServerInfo(function(t){n({type:l.a.RETRIEVED_SERVER_INFO,data:{productVersion:t.ProductVersion}}),e&&e(t)})}}},d=t(9),b=t.n(d),m={get:function(e){var n=s.a.moduleName;return s.a.utilities.getResx(n,e)}};function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,n){return!n||"object"!==h(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,n){return(w=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var E=t(23).default,S=t(24).default,O=t(25).default,x=t(26).default,k=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),y(this,v(n).call(this))}var t,i,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&w(e,n)}(n,r["Component"]),t=n,(i=[{key:"renderVersion",value:function(){return o.a.createElement("div",{className:"intro-header-row"},this.props.productVersion)}},{key:"onGitHubClick",value:function(){window.open("https://github.com/dnnsoftware/Dnn.Platform","_blank")}},{key:"onCommunityClick",value:function(){window.open("https://dnncommunity.org","_blank")}},{key:"onDocsClick",value:function(){window.open("https://dnndocs.com","_blank")}},{key:"renderLinks",value:function(){return o.a.createElement("div",{className:"links-wrapper"},o.a.createElement("div",{className:"link-docs-wrapper",title:m.get("Docs.Header"),onClick:this.onDocsClick.bind(this)},o.a.createElement("div",{className:"link-docs"},o.a.createElement("div",{className:"docs-icon",dangerouslySetInnerHTML:{__html:x}}),o.a.createElement("div",{className:"link-docs-header"},m.get("Docs.Header")),o.a.createElement("div",{className:"link-docs-desc"},m.get("Docs")))),o.a.createElement("div",{className:"link-community-wrapper"},o.a.createElement("div",{className:"link-community",title:m.get("Community.Header"),onClick:this.onCommunityClick.bind(this)},o.a.createElement("div",{className:"dnn-icon",dangerouslySetInnerHTML:{__html:O}}),o.a.createElement("div",{className:"link-community-header"},m.get("Community.Header")),o.a.createElement("div",{className:"link-community-desc"},m.get("Community")))),o.a.createElement("div",{className:"link-github-wrapper"},o.a.createElement("div",{className:"link-github",title:m.get("GitHub.Header"),onClick:this.onGitHubClick.bind(this)},o.a.createElement("div",{className:"github-icon",dangerouslySetInnerHTML:{__html:S}}),o.a.createElement("div",{className:"link-github-header"},m.get("GitHub.Header")),o.a.createElement("div",{className:"link-github-desc"},m.get("GitHub")))))}},{key:"componentDidMount",value:function(){this.props.dispatch(f.getServerInfo())}},{key:"render",value:function(){return o.a.createElement("div",{className:b.a.licensingPlatform},o.a.createElement("div",null,this.renderVersion(),o.a.createElement("div",{className:"intro"},o.a.createElement("div",{className:"dnn-technology-editorial-icon",dangerouslySetInnerHTML:{__html:E}}),o.a.createElement("div",{className:"intro-header"},m.get("Intro.Header")),o.a.createElement("div",{className:"intro-body"},m.get("Intro")))),this.renderLinks())}}])&&g(t.prototype,i),a&&g(t,a),n}();var R=Object(i.connect)(function(e){return{productVersion:e.licensing.productVersion}})(k);t(27);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,n){return(L=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var D=function(e){function n(){var e,t,r;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t=this,(e=!(r=T(n).call(this))||"object"!==A(r)&&"function"!=typeof r?C(t):r).handleSelect=e.handleSelect.bind(C(e)),e}var t,i,l;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&L(e,n)}(n,r["Component"]),t=n,(i=[{key:"handleSelect",value:function(e){this.props.dispatch(c.loadTab(e))}},{key:"UNSAFE_componentWillMount",value:function(){this.props.dispatch(f.getProduct())}},{key:"render",value:function(){return o.a.createElement(a.PersonaBarPageBody,null,"DNNCORP.CE"===this.props.productName&&o.a.createElement(R,null))}}])&&j(t.prototype,i),l&&j(t,l),n}();var H=Object(i.connect)(function(e){return{tabIndex:e.pagination.index,productName:e.licensing.productName}})(D);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,n){return!n||"object"!==N(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,n){return(V=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var Z=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),M(this,P(n).call(this))}var t,i,l;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&V(e,n)}(n,r["Component"]),t=n,(i=[{key:"render",value:function(){var e=this.props;return o.a.createElement("div",{className:"licensing-app"},o.a.createElement(a.PersonaBarPage,{isOpen:0===e.selectedPage},o.a.createElement(a.PersonaBarPageHeader,{title:m.get("nav_Licensing")}),o.a.createElement(H,null)))}}])&&_(t.prototype,i),l&&_(t,l),n}();var I=Object(i.connect)(function(e){return{selectedPage:e.visiblePanel.selectedPage,selectedPageVisibleIndex:e.visiblePanel.selectedPageVisibleIndex}})(Z);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,n){return!n||"object"!==F(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,n){return(B=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var X=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),U(this,G(n).call(this))}var t,i,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&B(e,n)}(n,r["Component"]),t=n,(i=[{key:"render",value:function(){return o.a.createElement("div",{className:"licensing-Root"},o.a.createElement(I,null))}}])&&K(t.prototype,i),a&&K(t,a),n}();n.default=X},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(11),a=t(2),l=t(3),c={init:function(){var e=window.dnn.initLicensing();l.a.init(e.utility),l.a.moduleName=e.moduleName,t(17)},dispatch:function(){throw new Error("dispatch method needs to be overwritten from the Redux store")}},s=t(4),u=t(10),p=t.n(u),f=t(12),d=t.n(f),b=t(1);function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){h(e,n,t[n])})}return e}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){y(e,n,t[n])})}return e}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){w(e,n,t[n])})}return e}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var E=Object(s.combineReducers)({pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tabIndex:0},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b.b.LOAD_TAB_DATA:return m(m({},e),{},{tabIndex:n.payload.index});default:return m({},e)}},visiblePanel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{selectedPage:0,selectedPageVisibleIndex:0},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b.c.SELECT_PANEL:return g(g({},e),{},{selectedPage:n.payload.selectedPage,selectedPageVisibleIndex:n.payload.selectedPageVisibleIndex});default:return g({},e)}},licensing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b.a.RETRIEVED_LICENSING_PRODUCT:return v(v({},e),{},{productName:n.data.productName});case b.a.RETRIEVED_SERVER_INFO:return v(v({},e),{},{productVersion:n.data.productVersion});default:return v({},e)}}}),S=t(13),O=t(14),x=t.n(O),k=t(15),R=t.n(k),A=Object(S.createDevTools)(o.a.createElement(R.a,{toggleVisibilityKey:"ctrl-h",changePositionKey:"ctrl-q"},o.a.createElement(x.a,null))),j=!0;var T,C=t(16),L=t.n(C),D=Object(s.createStore)(E,T,Object(s.compose)(j?Object(s.applyMiddleware)(p.a):Object(s.applyMiddleware)(p.a,d()()),A.instrument()));c.dispatch=D.dispatch,c.init();var H=document.getElementById("licensing-container");Object(i.render)(o.a.createElement(a.Provider,{store:D},o.a.createElement(L.a,null)),H)}]);
//# sourceMappingURL=licensing-bundle.js.map