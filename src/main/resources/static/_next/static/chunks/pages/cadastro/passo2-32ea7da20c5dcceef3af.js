(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{2167:function(e,t,n){"use strict";var a=n(3848);t.default=void 0;var r,s=(r=n(7294))&&r.__esModule?r:{default:r},l=n(1063),o=n(4651),c=n(7426);var i={};function u(e,t,n,a){if(e&&l.isLocalURL(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;i[t+"%"+n+(r?"%"+r:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,r=o.useRouter(),f=s.default.useMemo((function(){var t=l.resolveHref(r,e.href,!0),n=a(t,2),s=n[0],o=n[1];return{href:s,as:e.as?l.resolveHref(r,e.as):o||s}}),[r,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,v=e.shallow,x=e.scroll,b=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var y=(t=s.default.Children.only(h))&&"object"===typeof t&&t.ref,N=c.useIntersection({rootMargin:"200px"}),j=a(N,2),g=j[0],w=j[1],R=s.default.useCallback((function(e){g(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,g]);s.default.useEffect((function(){var e=w&&n&&l.isLocalURL(d),t="undefined"!==typeof b?b:r&&r.locale,a=i[d+"%"+p+(t?"%"+t:"")];e&&!a&&u(r,d,p,{locale:t})}),[p,d,w,b,n,r]);var Z={ref:R,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,s,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),null==o&&a.indexOf("#")>=0&&(o=!1),t[r?"replace":"push"](n,a,{shallow:s,locale:c,scroll:o}))}(e,r,d,p,m,v,x,b)},onMouseEnter:function(e){l.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(r,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof b?b:r&&r.locale,_=r&&r.isLocaleDomain&&l.getDomainLocale(p,k,r&&r.locales,r&&r.domainLocales);Z.href=_||l.addBasePath(l.addLocale(p,k,r&&r.defaultLocale))}return s.default.cloneElement(t,Z)};t.default=f},1626:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(5893),r=n(8216),s=n(5997),l=n(7897),o=n(178),c=n(2953),i=n(7294),u=n(1664),f=n(5675);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,o.Z)(this,n)}}var p=function(e){(0,l.Z)(n,e);var t=d(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"render",value:function(){return(0,a.jsx)("div",{children:(0,a.jsxs)("nav",{className:"navbar navbar-expand-md navbar-light bg-light",children:[(0,a.jsx)(f.default,{src:"logo.png",className:"m-2",height:35}),(0,a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav",children:(0,a.jsx)("span",{className:"navbar-toggler-icon"})}),(0,a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[(0,a.jsxs)("ul",{className:"navbar-nav ms-auto",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(u.default,{className:"nav-link",href:"/",children:"P\xe1gina Inicial"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(u.default,{className:"nav-link",href:"#",children:"Termos de Uso"})})]}),(0,a.jsx)("ul",{className:"navbar-nav",children:(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(u.default,{className:"nav-link",href:"#",children:"Sobre"})})})]})]})})}}]),n}(i.Component),h=n(2669),m=n(609);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,o.Z)(this,n)}}var x=function(e){(0,l.Z)(n,e);var t=v(n);function n(e){return(0,r.Z)(this,n),t.call(this,e)}return(0,s.Z)(n,[{key:"render",value:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p,{}),(0,a.jsx)("div",{className:"container-fluid d-flex justify-content-center",children:(0,a.jsxs)("div",{className:"row col-sm-6 p-3",children:[(0,a.jsx)("h3",{className:"mt-8 text-center",children:"Conclua seu cadastro"}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("label",{className:"form-label",children:"Nome"}),(0,a.jsx)("input",{type:"email",className:"form-control"})]}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("label",{className:"form-label",children:"Email"}),(0,a.jsx)("input",{type:"password",className:"form-control"})]}),(0,a.jsxs)("div",{className:"col-sm-6 p-3",children:[(0,a.jsx)("label",{className:"form-label",children:"Data de Nascimento"}),(0,a.jsx)("input",{style:{width:"280px"},type:"date",className:"form-control"})]}),(0,a.jsx)("div",{className:"col-sm-6 p-3",children:(0,a.jsxs)(h.Z,{children:[(0,a.jsx)("label",{className:"form-label",children:"Sexo"}),(0,a.jsxs)(m.Z,{style:{width:"280px"},type:"select",name:"select",id:"exampleSelect",children:[(0,a.jsx)("option",{children:"Masculino"}),(0,a.jsx)("option",{children:"Feminino"})]})]})}),(0,a.jsxs)("div",{className:"col-sm-6 p-3",children:[(0,a.jsx)("label",{className:"form-label",children:"Altura"}),(0,a.jsx)("input",{style:{width:"280px"},type:"password",className:"form-control"})]}),(0,a.jsxs)("div",{className:"col-sm-6 p-3",children:[(0,a.jsx)("label",{className:"form-label",children:"Peso"}),(0,a.jsx)("input",{style:{width:"280px"},type:"password",className:"form-control"})]}),(0,a.jsx)("button",{className:"btn btn-secondary",children:"Finalizar"})]})})]})}}]),n}(i.Component)},645:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastro/passo2",function(){return n(1626)}])},1664:function(e,t,n){e.exports=n(2167)},2669:function(e,t,n){"use strict";var a=n(7462),r=n(3366),s=n(7294),l=n(5697),o=n.n(l),c=n(4184),i=n.n(c),u=n(3663),f={children:o().node,row:o().bool,check:o().bool,inline:o().bool,disabled:o().bool,tag:u.iC,className:o().string,cssModule:o().object},d=function(e){var t=e.className,n=e.cssModule,l=e.row,o=e.disabled,c=e.check,f=e.inline,d=e.tag,p=(0,r.Z)(e,["className","cssModule","row","disabled","check","inline","tag"]),h=(0,u.mx)(i()(t,!!l&&"row",c?"form-check":"form-group",!(!c||!f)&&"form-check-inline",!(!c||!o)&&"disabled"),n);return"fieldset"===d&&(p.disabled=o),s.createElement(d,(0,a.Z)({},p,{className:h}))};d.propTypes=f,d.defaultProps={tag:"div"},t.Z=d},609:function(e,t,n){"use strict";var a=n(7462),r=n(3366),s=n(7326),l=n(4916),o=n(7294),c=n(5697),i=n.n(c),u=n(4184),f=n.n(u),d=n(3663),p={children:i().node,type:i().string,size:i().oneOfType([i().number,i().string]),bsSize:i().string,valid:i().bool,invalid:i().bool,tag:d.iC,innerRef:i().oneOfType([i().object,i().func,i().string]),plaintext:i().bool,addon:i().bool,className:i().string,cssModule:i().object},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind((0,s.Z)(n)),n.focus=n.focus.bind((0,s.Z)(n)),n}(0,l.Z)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,s=e.type,l=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,p=e.addon,h=e.plaintext,m=e.innerRef,v=(0,r.Z)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),x=["radio","checkbox"].indexOf(s)>-1,b=new RegExp("\\D","g"),y=u||("select"===s||"textarea"===s?s:"input"),N="form-control";h?(N+="-plaintext",y=u||"input"):"file"===s?N+="-file":"range"===s?N+="-range":x&&(N=p?null:"form-check-input"),v.size&&b.test(v.size)&&((0,d.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=v.size,delete v.size);var j=(0,d.mx)(f()(t,i&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,N),n);return("input"===y||u&&"function"===typeof u)&&(v.type=s),v.children&&!h&&"select"!==s&&"string"===typeof y&&"select"!==y&&((0,d.O4)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),o.createElement(y,(0,a.Z)({},v,{ref:m,className:j,"aria-invalid":i}))},t}(o.Component);h.propTypes=p,h.defaultProps={type:"text"},t.Z=h},7326:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return a}})},4916:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,a(e,t)}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,263,888,179],(function(){return t=645,e(e.s=t);var t}));var t=e.O();_N_E=t}]);