(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[764],{960:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return _}});var s=r(5893),t=r(8216),i=r(5997),o=r(4695),c=r(7897),l=r(178),a=r(2953),h=r(7294),d=r(1997),x=r(7975),j=r(203),u=r(4218),Z=r(9465),p=r(8008),g=r(5677),m=r(2669),f=r(7954),v=r(609),N=r(6941),b=r(8089),C=r(5351),T=r(1121),y=r(267),k=r(1252),P=r(8595),A=r(9352),E=r(774);function V(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=(0,a.Z)(e);if(n){var t=(0,a.Z)(this).constructor;r=Reflect.construct(s,arguments,t)}else r=s.apply(this,arguments);return(0,l.Z)(this,r)}}var I=function(e){(0,c.Z)(r,e);var n=V(r);function r(e){var s;return(0,t.Z)(this,r),(s=n.call(this,e)).state={toggleEvento:!1,toggleParente:!1},s.onToggleEvento=s.onToggleEvento.bind((0,o.Z)(s)),s.onToggleParente=s.onToggleParente.bind((0,o.Z)(s)),s}return(0,i.Z)(r,[{key:"onToggleEvento",value:function(){this.setState({toggleEvento:!this.state.toggleEvento})}},{key:"onToggleParente",value:function(){this.setState({toggleParente:!this.state.toggleParente})}},{key:"render",value:function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.Z,{className:"mt-5",children:[(0,s.jsx)(x.Z,{onClick:this.onToggleEvento,children:"Criar novo evento"}),(0,s.jsx)(x.Z,{onClick:this.onToggleParente,children:"Adicionar novo parente"}),(0,s.jsxs)(x.Z,{id:"PopoverClick",children:["Mais ",(0,s.jsx)(A.kc8,{size:"20px"})]})]}),(0,s.jsx)(j.Z,{trigger:"focus",placement:"bottom",target:"PopoverClick",children:(0,s.jsx)(u.Z,{children:(0,s.jsx)(Z.Z,{children:(0,s.jsx)(p.Z,{href:"/usuario/parentes",children:"Parentes"})})})}),(0,s.jsxs)(g.Z,{isOpen:this.state.toggleEvento,children:[(0,s.jsxs)(m.Z,{className:"p-2 mb-3",children:[(0,s.jsx)(f.Z,{children:(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"Selecione um parente:"})})}),(0,s.jsxs)(v.Z,{type:"select",children:[(0,s.jsx)("option",{children:"Voc\xea (Jubileu)"}),(0,s.jsx)("option",{children:"Maria"}),(0,s.jsx)("option",{children:"Jubileu"})]})]}),(0,s.jsx)(x.Z,{onClick:this.onToggleEvento,children:"Confirmar"})]}),(0,s.jsx)(g.Z,{isOpen:this.state.toggleParente,children:(0,s.jsx)(E.NovoParente,{onToggleParente:this.onToggleParente})})]})}}]),r}(h.Component),O=function(e){(0,c.Z)(r,e);var n=V(r);function r(e){var s;return(0,t.Z)(this,r),(s=n.call(this,e)).state={lembretes:[{descricao:"Comprar dipirona",data:"hoje \xe0s 08h30"},{descricao:"Comprar dipirona",data:"hoje \xe0s 08h30"},{descricao:"Comprar dipirona",data:"hoje \xe0s 08h30"}]},s}return(0,i.Z)(r,[{key:"render",value:function(){return(0,s.jsxs)(N.Z,{className:"mt-5 p-1",children:[(0,s.jsx)(b.Z,{children:(0,s.jsx)(C.Z,{className:"text-center",children:(0,s.jsx)("strong",{children:"Lembretes"})})}),(0,s.jsxs)(T.Z,{children:[(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(Z.Z,{children:(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(k.Z,{sm:"6",children:(0,s.jsx)("strong",{children:"Descri\xe7\xe3o"})}),(0,s.jsx)(k.Z,{sm:"6",children:(0,s.jsx)("strong",{children:"Data"})})]})}),this.state.lembretes.map((function(e,n){return(0,s.jsx)(Z.Z,{children:(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(k.Z,{sm:"6",children:e.descricao}),(0,s.jsx)(k.Z,{sm:"6",children:e.data})]})},n)}))]}),(0,s.jsx)(p.Z,{href:"/usuario/lembretes",children:"Ver todos"})]})]})}}]),r}(h.Component),R=function(e){(0,c.Z)(r,e);var n=V(r);function r(e){var s;return(0,t.Z)(this,r),(s=n.call(this,e)).state={eventos:[{parente:"Voc\xea (Jubileu)",data:"13/02/2019"},{parente:"Voc\xea (Jubileu)",data:"13/02/2019"},{parente:"Voc\xea (Jubileu)",data:"13/02/2019"}]},s}return(0,i.Z)(r,[{key:"render",value:function(){return(0,s.jsxs)(N.Z,{className:"mt-5 p-1",children:[(0,s.jsx)(b.Z,{children:(0,s.jsx)(C.Z,{className:"text-center",children:(0,s.jsx)("strong",{children:"Eventos em andamento"})})}),(0,s.jsxs)(T.Z,{children:[(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(Z.Z,{children:(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(k.Z,{sm:"6",children:(0,s.jsx)("strong",{children:"Parente"})}),(0,s.jsx)(k.Z,{sm:"6",children:(0,s.jsx)("strong",{children:"Data de in\xedcio"})})]})}),this.state.eventos.map((function(e,n){return(0,s.jsx)(Z.Z,{children:(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(k.Z,{sm:"6",children:e.parente}),(0,s.jsx)(k.Z,{sm:"6",children:e.data})]})},n)}))]}),(0,s.jsx)(p.Z,{href:"/usuario/eventos",children:"Ver todos"})]})]})}}]),r}(h.Component),J=function(e){(0,c.Z)(r,e);var n=V(r);function r(e){var s;return(0,t.Z)(this,r),(s=n.call(this,e)).state={historico:[{parente:"Voc\xea (Jubileu)",periodo:"13/02/2019 \xe0 13/04/2019"},{parente:"Voc\xea (Jubileu)",periodo:"13/02/2019 \xe0 13/04/2019"},{parente:"Voc\xea (Jubileu)",periodo:"13/02/2019 \xe0 13/04/2019"}]},s}return(0,i.Z)(r,[{key:"render",value:function(){return(0,s.jsxs)(N.Z,{className:"mt-5 p-1",children:[(0,s.jsx)(b.Z,{children:(0,s.jsx)(C.Z,{className:"text-center",children:(0,s.jsx)("strong",{children:"Hist\xf3rico"})})}),(0,s.jsxs)(T.Z,{children:[(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(Z.Z,{children:(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(k.Z,{sm:"6",children:(0,s.jsx)("strong",{children:"Parente"})}),(0,s.jsx)(k.Z,{sm:"6",children:(0,s.jsx)("strong",{children:"Per\xedodo"})})]})}),this.state.historico.map((function(e,n){return(0,s.jsx)(Z.Z,{children:(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(k.Z,{sm:"6",children:e.parente}),(0,s.jsx)(k.Z,{sm:"6",children:e.periodo})]})},n)}))]}),(0,s.jsx)(p.Z,{href:"/usuario/historico",children:"Ver todos"})]})]})}}]),r}(h.Component),D=function(e){(0,c.Z)(r,e);var n=V(r);function r(e){var s;return(0,t.Z)(this,r),(s=n.call(this,e)).state={diagnosticos:[{parente:"Voc\xea (Jubileu)",descricao:"Covid-19",mes:"Abril"},{parente:"Voc\xea (Jubileu)",descricao:"Covid-19",mes:"Abril"},{parente:"Voc\xea (Jubileu)",descricao:"Covid-19",mes:"Abril"}]},s}return(0,i.Z)(r,[{key:"render",value:function(){return(0,s.jsxs)(N.Z,{className:"mt-5 p-1",children:[(0,s.jsx)(b.Z,{children:(0,s.jsx)(C.Z,{className:"text-center",children:(0,s.jsx)("strong",{children:"Diagn\xf3sticos recentes"})})}),(0,s.jsxs)(T.Z,{children:[(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(Z.Z,{children:(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(k.Z,{sm:"4",children:(0,s.jsx)("strong",{children:"Parente"})}),(0,s.jsx)(k.Z,{sm:"4",children:(0,s.jsx)("strong",{children:"Descri\xe7\xe3o"})}),(0,s.jsx)(k.Z,{sm:"4",children:(0,s.jsx)("strong",{children:"M\xeas"})})]})}),this.state.diagnosticos.map((function(e,n){return(0,s.jsx)(Z.Z,{children:(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(k.Z,{sm:"4",children:e.parente}),(0,s.jsx)(k.Z,{sm:"4",children:e.descricao}),(0,s.jsx)(k.Z,{sm:"4",children:e.mes})]})},n)}))]}),(0,s.jsx)(p.Z,{href:"/usuario/diagnosticos",children:"Ver todos"})]})]})}}]),r}(h.Component),_=function(e){(0,c.Z)(r,e);var n=V(r);function r(e){return(0,t.Z)(this,r),n.call(this,e)}return(0,i.Z)(r,[{key:"render",value:function(){return(0,s.jsxs)(P.Z,{children:[(0,s.jsx)(y.Z,{children:(0,s.jsx)(I,{})}),(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(k.Z,{sm:"6",children:(0,s.jsx)(O,{})}),(0,s.jsx)(k.Z,{sm:"6",children:(0,s.jsx)(R,{})}),(0,s.jsx)(k.Z,{sm:"6",children:(0,s.jsx)(D,{})}),(0,s.jsx)(k.Z,{sm:"6",children:(0,s.jsx)(J,{})})]})]})}}]),r}(h.Component)},774:function(e,n,r){"use strict";r.r(n),r.d(n,{NovoParente:function(){return k},ApagarParente:function(){return P},default:function(){return A}});var s=r(4695),t=r(5893),i=r(8216),o=r(5997),c=r(7897),l=r(178),a=r(2953),h=r(7294),d=r(2669),x=r(7954),j=r(609),u=r(7975),Z=r(1997),p=r(8595),g=r(4218),m=r(267),f=r(1252),v=r(9465),N=r(5677),b=r(3750),C=r(8193),T=r(5434);function y(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=(0,a.Z)(e);if(n){var t=(0,a.Z)(this).constructor;r=Reflect.construct(s,arguments,t)}else r=s.apply(this,arguments);return(0,l.Z)(this,r)}}var k=function(e){(0,c.Z)(r,e);var n=y(r);function r(e){return(0,i.Z)(this,r),n.call(this,e)}return(0,o.Z)(r,[{key:"render",value:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.Z,{className:"p-2 mb-3",children:[(0,t.jsx)(x.Z,{children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Nome:"})})}),(0,t.jsx)(j.Z,{type:"text"})]}),(0,t.jsxs)(d.Z,{className:"p-2 mb-3",children:[(0,t.jsx)(x.Z,{children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Tipo de parentesco:"})})}),(0,t.jsxs)(j.Z,{type:"select",children:[(0,t.jsx)("option",{children:"MASCULINO"}),(0,t.jsx)("option",{children:"FEMININO"}),(0,t.jsx)("option",{children:"OUTROS"})]})]}),(0,t.jsxs)(d.Z,{className:"p-2 mb-3",children:[(0,t.jsx)(x.Z,{children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Data de nascimento:"})})}),(0,t.jsx)(j.Z,{type:"date"})]}),(0,t.jsxs)(d.Z,{className:"p-2 mb-3",children:[(0,t.jsx)(x.Z,{children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Peso:"})})}),(0,t.jsx)(j.Z,{type:"number"})]}),(0,t.jsxs)(d.Z,{className:"p-2 mb-3",children:[(0,t.jsx)(x.Z,{children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Altura:"})})}),(0,t.jsx)(j.Z,{type:"number"})]}),(0,t.jsxs)(d.Z,{className:"p-2 mb-3",children:[(0,t.jsx)(x.Z,{children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Tipo de parentesco:"})})}),(0,t.jsxs)(j.Z,{type:"select",children:[(0,t.jsx)("option",{children:"IRM\xc3O"}),(0,t.jsx)("option",{children:"IRM\xc3"}),(0,t.jsx)("option",{children:"FILHA"}),(0,t.jsx)("option",{children:"FILHO"}),(0,t.jsx)("option",{children:"PAI"}),(0,t.jsx)("option",{children:"M\xc3E"}),(0,t.jsx)("option",{children:"AV\xd3"}),(0,t.jsx)("option",{children:"AV\xd4"}),(0,t.jsx)("option",{children:"TIO"}),(0,t.jsx)("option",{children:"TIA"}),(0,t.jsx)("option",{children:"FAMILIAR"}),(0,t.jsx)("option",{children:"CONHECIDO"}),(0,t.jsx)("option",{children:"VIZINHO"})]})]}),(0,t.jsx)(u.Z,{onClick:this.props.onToggleParente,children:"Confirmar"})]})}}]),r}(h.Component),P=function(e){(0,c.Z)(r,e);var n=y(r);function r(e){return(0,i.Z)(this,r),n.call(this,e)}return(0,o.Z)(r,[{key:"render",value:function(){return(0,t.jsxs)("div",{className:"p-1 row",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Deseja apagar o parente:"})}),(0,t.jsxs)(Z.Z,{children:[(0,t.jsx)(u.Z,{color:"success",onClick:this.props.onToggle,children:"Sim"}),(0,t.jsx)(u.Z,{color:"danger",onClick:this.props.onToggle,children:"N\xe3o"})]})]})}}]),r}(h.Component),A=function(e){(0,c.Z)(r,e);var n=y(r);function r(e){var t;return(0,i.Z)(this,r),(t=n.call(this,e)).state={toggle:!1,toggleApagar:!1,parentes:[{nome:"(Cuidador - voc\xea) Jo\xe3o"},{nome:"(Irm\xe3) Maria"},{nome:"(Tio) Jubileu"}]},t.onToggle=t.onToggle.bind((0,s.Z)(t)),t.onToggleApagar=t.onToggleApagar.bind((0,s.Z)(t)),t}return(0,o.Z)(r,[{key:"onToggle",value:function(){this.setState({toggle:!this.state.toggle})}},{key:"onToggleApagar",value:function(){this.setState({toggleApagar:!this.state.toggleApagar})}},{key:"render",value:function(){var e=this;return(0,t.jsxs)(p.Z,{children:[(0,t.jsx)("h4",{className:"text-center mt-5",children:(0,t.jsx)("strong",{children:"Parentes"})}),(0,t.jsx)(g.Z,{children:(0,t.jsxs)(m.Z,{className:"d-flex justify-content-center",children:[(0,t.jsxs)(f.Z,{sm:"8",children:[this.state.parentes.map((function(n,r){return(0,t.jsx)(v.Z,{children:(0,t.jsxs)(m.Z,{children:[(0,t.jsx)(f.Z,{sm:"8",children:(0,t.jsx)("p",{children:n.nome})}),(0,t.jsxs)(f.Z,{sm:"4",children:[(0,t.jsx)(b.jox,{onClick:e.onToggle,className:"m-1",size:"25px"}),(0,t.jsx)(C.YK6,{onClick:e.onToggleApagar,className:"m-1",size:"25px"})]})]})},r)})),(0,t.jsx)(v.Z,{color:"secondary",className:"text-center",size:"lg",children:(0,t.jsxs)(u.Z,{onClick:this.onToggle,children:["Adicionar novo parente ",(0,t.jsx)(T.BB4,{className:"m-1",size:"25px"})]})})]}),(0,t.jsx)(N.Z,{isOpen:this.state.toggle,children:(0,t.jsx)(k,{onToggleParente:this.onToggle})}),(0,t.jsx)(N.Z,{isOpen:this.state.toggleApagar,children:(0,t.jsx)(P,{onToggle:this.onToggleApagar})})]})})]})}}]),r}(h.Component)},2851:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/usuario/home",function(){return r(960)}])}},function(e){e.O(0,[774,617,13,228,937,75,198,888,179],(function(){return n=2851,e(e.s=n);var n}));var n=e.O();_N_E=n}]);