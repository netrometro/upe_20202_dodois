(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{774:function(e,n,s){"use strict";s.r(n),s.d(n,{NovoParente:function(){return I},ApagarParente:function(){return k},default:function(){return O}});var r=s(4695),t=s(5893),o=s(8216),i=s(5997),c=s(7897),l=s(178),a=s(2953),h=s(7294),d=s(2669),x=s(7954),p=s(609),j=s(7975),u=s(1997),g=s(8595),Z=s(4218),f=s(267),m=s(1252),N=s(9465),T=s(5677),v=s(3750),A=s(8193),y=s(5434);function C(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,a.Z)(e);if(n){var t=(0,a.Z)(this).constructor;s=Reflect.construct(r,arguments,t)}else s=r.apply(this,arguments);return(0,l.Z)(this,s)}}var I=function(e){(0,c.Z)(s,e);var n=C(s);function s(e){return(0,o.Z)(this,s),n.call(this,e)}return(0,i.Z)(s,[{key:"render",value:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.Z,{className:"p-2 mb-3",children:[(0,t.jsx)(x.Z,{children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Nome:"})})}),(0,t.jsx)(p.Z,{type:"text"})]}),(0,t.jsxs)(d.Z,{className:"p-2 mb-3",children:[(0,t.jsx)(x.Z,{children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Tipo de parentesco:"})})}),(0,t.jsxs)(p.Z,{type:"select",children:[(0,t.jsx)("option",{children:"MASCULINO"}),(0,t.jsx)("option",{children:"FEMININO"}),(0,t.jsx)("option",{children:"OUTROS"})]})]}),(0,t.jsxs)(d.Z,{className:"p-2 mb-3",children:[(0,t.jsx)(x.Z,{children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Data de nascimento:"})})}),(0,t.jsx)(p.Z,{type:"date"})]}),(0,t.jsxs)(d.Z,{className:"p-2 mb-3",children:[(0,t.jsx)(x.Z,{children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Peso:"})})}),(0,t.jsx)(p.Z,{type:"number"})]}),(0,t.jsxs)(d.Z,{className:"p-2 mb-3",children:[(0,t.jsx)(x.Z,{children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Altura:"})})}),(0,t.jsx)(p.Z,{type:"number"})]}),(0,t.jsxs)(d.Z,{className:"p-2 mb-3",children:[(0,t.jsx)(x.Z,{children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Tipo de parentesco:"})})}),(0,t.jsxs)(p.Z,{type:"select",children:[(0,t.jsx)("option",{children:"IRM\xc3O"}),(0,t.jsx)("option",{children:"IRM\xc3"}),(0,t.jsx)("option",{children:"FILHA"}),(0,t.jsx)("option",{children:"FILHO"}),(0,t.jsx)("option",{children:"PAI"}),(0,t.jsx)("option",{children:"M\xc3E"}),(0,t.jsx)("option",{children:"AV\xd3"}),(0,t.jsx)("option",{children:"AV\xd4"}),(0,t.jsx)("option",{children:"TIO"}),(0,t.jsx)("option",{children:"TIA"}),(0,t.jsx)("option",{children:"FAMILIAR"}),(0,t.jsx)("option",{children:"CONHECIDO"}),(0,t.jsx)("option",{children:"VIZINHO"})]})]}),(0,t.jsx)(j.Z,{onClick:this.props.onToggleParente,children:"Confirmar"})]})}}]),s}(h.Component),k=function(e){(0,c.Z)(s,e);var n=C(s);function s(e){return(0,o.Z)(this,s),n.call(this,e)}return(0,i.Z)(s,[{key:"render",value:function(){return(0,t.jsxs)("div",{className:"p-1 row",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Deseja apagar o parente:"})}),(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(j.Z,{color:"success",onClick:this.props.onToggle,children:"Sim"}),(0,t.jsx)(j.Z,{color:"danger",onClick:this.props.onToggle,children:"N\xe3o"})]})]})}}]),s}(h.Component),O=function(e){(0,c.Z)(s,e);var n=C(s);function s(e){var t;return(0,o.Z)(this,s),(t=n.call(this,e)).state={toggle:!1,toggleApagar:!1,parentes:[{nome:"(Cuidador - voc\xea) Jo\xe3o"},{nome:"(Irm\xe3) Maria"},{nome:"(Tio) Jubileu"}]},t.onToggle=t.onToggle.bind((0,r.Z)(t)),t.onToggleApagar=t.onToggleApagar.bind((0,r.Z)(t)),t}return(0,i.Z)(s,[{key:"onToggle",value:function(){this.setState({toggle:!this.state.toggle})}},{key:"onToggleApagar",value:function(){this.setState({toggleApagar:!this.state.toggleApagar})}},{key:"render",value:function(){var e=this;return(0,t.jsxs)(g.Z,{children:[(0,t.jsx)("h4",{className:"text-center mt-5",children:(0,t.jsx)("strong",{children:"Parentes"})}),(0,t.jsx)(Z.Z,{children:(0,t.jsxs)(f.Z,{className:"d-flex justify-content-center",children:[(0,t.jsxs)(m.Z,{sm:"8",children:[this.state.parentes.map((function(n,s){return(0,t.jsx)(N.Z,{children:(0,t.jsxs)(f.Z,{children:[(0,t.jsx)(m.Z,{sm:"8",children:(0,t.jsx)("p",{children:n.nome})}),(0,t.jsxs)(m.Z,{sm:"4",children:[(0,t.jsx)(v.jox,{onClick:e.onToggle,className:"m-1",size:"25px"}),(0,t.jsx)(A.YK6,{onClick:e.onToggleApagar,className:"m-1",size:"25px"})]})]})},s)})),(0,t.jsx)(N.Z,{color:"secondary",className:"text-center",size:"lg",children:(0,t.jsxs)(j.Z,{onClick:this.onToggle,children:["Adicionar novo parente ",(0,t.jsx)(y.BB4,{className:"m-1",size:"25px"})]})})]}),(0,t.jsx)(T.Z,{isOpen:this.state.toggle,children:(0,t.jsx)(I,{onToggleParente:this.onToggle})}),(0,t.jsx)(T.Z,{isOpen:this.state.toggleApagar,children:(0,t.jsx)(k,{onToggle:this.onToggleApagar})})]})})]})}}]),s}(h.Component)},4118:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/usuario/parentes",function(){return s(774)}])}},function(e){e.O(0,[774,617,13,228,50,515,888,179],(function(){return n=4118,e(e.s=n);var n}));var n=e.O();_N_E=n}]);