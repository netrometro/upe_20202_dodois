(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[375],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},c=n(1063),s=n(4651),i=n(7426);var l={};function u(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=s.useRouter(),f=o.default.useMemo((function(){var t=c.resolveHref(a,e.href,!0),n=r(t,2),o=n[0],s=n[1];return{href:o,as:e.as?c.resolveHref(a,e.as):s||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var x=(t=o.default.Children.only(v))&&"object"===typeof t&&t.ref,g=i.useIntersection({rootMargin:"200px"}),j=r(g,2),N=j[0],E=j[1],_=o.default.useCallback((function(e){N(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,N]);o.default.useEffect((function(){var e=E&&n&&c.isLocalURL(d),t="undefined"!==typeof b?b:a&&a.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(a,d,p,{locale:t})}),[p,d,E,b,n,a]);var k={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:i,scroll:s}))}(e,a,d,p,h,m,y,b)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var w="undefined"!==typeof b?b:a&&a.locale,L=a&&a.isLocaleDomain&&c.getDomainLocale(p,w,a&&a.locales,a&&a.domainLocales);k.href=L||c.addBasePath(c.addLocale(p,w,a&&a.defaultLocale))}return o.default.cloneElement(t,k)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,i=a.useRef(),l=a.useState(!1),u=r(l,2),f=u[0],d=u[1],p=a.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return a.useEffect((function(){if(!c&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[p,f]};var a=n(7294),o=n(3447),c="undefined"!==typeof IntersectionObserver;var s=new Map},1903:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),a=n(8216),o=n(5997),c=n(7897),s=n(178),i=n(2953),l=n(7294),u=n(1664);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,i.Z)(e);if(t){var a=(0,i.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var d={backgroundColor:"rgba(0, 0, 0, 0)",border:"1px solid black",borderRadius:"15px"},p=function(e){(0,c.Z)(n,e);var t=f(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){return(0,r.jsx)("div",{className:"container-fluid d-flex justify-content-center",children:(0,r.jsx)("div",{className:"row col-sm-5 p-3 mt-5",style:d,children:(0,r.jsxs)("form",{children:[(0,r.jsxs)("div",{className:"mb-3 ",children:[(0,r.jsx)("h3",{className:"d-flex justify-content-center",children:"Recuperar Acesso"}),(0,r.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"Digite seu email para recuperar sua senha"})]}),(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)("div",{className:"row col-sm-5",children:(0,r.jsx)("button",{className:"btn btn-secondary",children:"Enviar"})})}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(u.default,{href:"url ",children:"Lembrei minha senha agora"})}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(u.default,{className:"text-danger ",href:"url ",children:"Ainda n\xe3o possuo cadastro"})})]})})})}}]),n}(l.Component)},7727:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resetar-senha",function(){return n(1903)}])},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=7727,e(e.s=t);var t}));var t=e.O();_N_E=t}]);