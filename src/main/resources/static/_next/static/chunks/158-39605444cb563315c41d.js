(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{9917:function(e,t,n){"use strict";var r=n(3848),i=n(3115);t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,u=void 0!==i&&i,l=e.priority,d=void 0!==l&&l,b=e.loading,p=e.lazyBoundary,h=void 0===p?"200px":p,y=e.className,v=e.quality,w=e.width,S=e.height,j=e.objectFit,z=e.objectPosition,k=e.onLoadingComplete,_=e.loader,E=void 0===_?A:_,I=e.placeholder,P=void 0===I?"empty":I,R=e.blurDataURL,q=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),D=n?"responsive":"intrinsic";"layout"in q&&(q.layout&&(D=q.layout),delete q.layout);var L="";if(function(e){return"object"===typeof e&&(g(e)||function(e){return void 0!==e.src}(e))}(t)){var C=g(t)?t.default:t;if(!C.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(C)));if(R=R||C.blurDataURL,L=C.src,(!D||"fill"!==D)&&(S=S||C.height,w=w||C.width,!C.height||!C.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(C)))}t="string"===typeof t?t:L;var M=O(w),N=O(S),W=O(v),B=!d&&("lazy"===b||"undefined"===typeof b);t.startsWith("data:")&&(u=!0,B=!1);m.has(t)&&(B=!1);0;var Z,U,H,T=s.useIntersection({rootMargin:h,disabled:!B}),F=r(T,2),V=F[0],J=F[1],G=!B||J,Q={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:j,objectPosition:z},K="blur"===P?{filter:"blur(20px)",backgroundSize:j||"cover",backgroundImage:'url("'.concat(R,'")'),backgroundPosition:z||"0% 0%"}:{};if("fill"===D)Z={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof M&&"undefined"!==typeof N){var X=N/M,Y=isNaN(X)?"100%":"".concat(100*X,"%");"responsive"===D?(Z={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},U={display:"block",boxSizing:"border-box",paddingTop:Y}):"intrinsic"===D?(Z={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},U={boxSizing:"border-box",display:"block",maxWidth:"100%"},H='<svg width="'.concat(M,'" height="').concat(N,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===D&&(Z={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:M,height:N})}else 0;var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};G&&($=x({src:t,unoptimized:u,layout:D,width:M,quality:W,sizes:n,loader:E}));var ee=t;return o.default.createElement("div",{style:Z},U?o.default.createElement("div",{style:U},H?o.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(H))}):null):null,!G&&o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},q,x({src:t,unoptimized:u,layout:D,width:M,quality:W,sizes:n,loader:E}),{decoding:"async","data-nimg":!0,style:Q,className:y}))),o.default.createElement("img",Object.assign({},q,$,{decoding:"async","data-nimg":!0,className:y,ref:function(e){V(e),function(e,t,n,r){if(!e)return;var i=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),m.add(t),r){var i=e.naturalWidth,o=e.naturalHeight;r({naturalWidth:i,naturalHeight:o})}}))};e.complete?i():e.onload=i}(e,ee,P,k)},style:f({},Q,K)})),d?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var o=d(n(7294)),a=d(n(639)),c=n(8997),u=n(5809),s=n(7426);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}var m=new Set;var b=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(j(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(j(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(j(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(e){return void 0!==e.default}var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||u.imageConfigDefault,h=p.deviceSizes,y=p.imageSizes,v=p.loader,w=p.path,S=(p.domains,[].concat(i(h),i(y)));function x(e){var t=e.src,n=e.unoptimized,r=e.layout,o=e.width,a=e.quality,c=e.sizes,u=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,o=/(^|\s)(1?\d?\d)vw/g,a=[];r=o.exec(n);r)a.push(parseInt(r[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:S.filter((function(e){return e>=h[0]*c})),kind:"w"}}return{widths:S,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:h,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return S.find((function(t){return t>=e}))||S[S.length-1]})))),kind:"x"}}(o,r,c),l=s.widths,d=s.kind,f=l.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:l.map((function(e,n){return"".concat(u({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:u({src:t,quality:a,width:l[f]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t=b.get(v);if(t)return t(f({root:w},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(v))}function j(e){return"/"===e[0]?e.slice(1):e}h.sort((function(e,t){return e-t})),S.sort((function(e,t){return e-t}))},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=i.useRef(),s=i.useState(!1),l=r(s,2),d=l[0],f=l[1],m=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return i.useEffect((function(){if(!a&&!d){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[m,d]};var i=n(7294),o=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},5675:function(e,t,n){e.exports=n(9917)},4695:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},8216:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},5997:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:function(){return i}})},2953:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,{Z:function(){return r}})},6326:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,{Z:function(){return i}})},6989:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{Z:function(){return o}});var i=n(4695);function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?(0,i.Z)(e):t}}}]);