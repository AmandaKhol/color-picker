(this["webpackJsonpcolor-picker"]=this["webpackJsonpcolor-picker"]||[]).push([[0],{21:function(t,e,o){},22:function(t,e,o){},23:function(t,e,o){},25:function(t,e,o){},26:function(t,e,o){},35:function(t,e,o){"use strict";o.r(e);var n=o(0),c=o(10),i=o.n(c),r=o(4),a=(o(21),o(22),o(23),o(1)),l=function(t){var e=t.positionPicker,o=e.positionX-10,n=e.positionY-10,c="black";return o>50&&(c="white"),Object(a.jsx)("div",{className:"picker",style:{top:"".concat(o,"px"),left:"".concat(n,"px"),border:"2px solid ".concat(c)}})};o(25);var s=function(t,e,o){if(t>255||e>255||o>255)throw"Invalid color component";return(t<<16|e<<8|o).toString(16)};var d=function(t,e){var o=t.current,n=o.getContext("2d"),c=o.getBoundingClientRect(),i=e.clientX-c.left,r=e.clientY-c.top,a=n.getImageData(i,r,1,1).data;return{colorHex:"#"+("000000"+s(a[0],a[1],a[2])).slice(-6),positionX:i,positionY:r}};var u=function(t,e){var o=t.current,n=o.getContext("2d");n.fillStyle=e,n.fillRect(0,0,o.width,o.height);var c=n.createLinearGradient(0,0,o.width,0);c.addColorStop(0,"rgba(255, 255, 255, 1)"),c.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=c,n.fillRect(0,0,o.width,o.height);var i=n.createLinearGradient(0,0,0,o.height);i.addColorStop(0,"rgba(0, 0, 0, 0)"),i.addColorStop(1,"rgba(0, 0, 0, 1)"),n.fillStyle=i,n.fillRect(0,0,o.width,o.height)},f=function(t){var e=Object(n.useRef)(null);Object(n.useEffect)((function(){u(e,t.color)}),[t.color]);return Object(a.jsxs)("div",{className:"color__panel",children:[Object(a.jsx)(l,{positionPicker:t.positionPicker}),Object(a.jsx)("canvas",{className:"color__panel--canvas",ref:e,width:String(300),height:String(100),onClick:function(o){var n=d(e,o);t.handleColorPicker(n.colorHex,n.positionY,n.positionX)}})]})};var p=function(t){var e=t.current,o=e.getContext("2d").createLinearGradient(0,0,e.width,0);o.addColorStop(0,"#ff0000"),o.addColorStop(1/6,"#ffff00"),o.addColorStop(1/6*2,"#00ff00"),o.addColorStop(.5,"#00ffff"),o.addColorStop(1/6*4,"#0000ff"),o.addColorStop(1/6*5,"#ff00ff"),o.addColorStop(1,"#ff0000"),e.getContext("2d").fillStyle=o,e.getContext("2d").fillRect(0,0,e.width,e.height)},h=function(t){var e=Object(n.useRef)(null);Object(n.useEffect)((function(){p(e)}),[]);return Object(a.jsx)("canvas",{className:"hue",ref:e,height:"30px",width:"300px",onClick:function(o){var n=d(e,o);t.handleColorHue(n.colorHex)}})},j=o(11),b=o(12),O=o(5),C=o(16),g=o(15),v=(o(26),function(t){Object(C.a)(o,t);var e=Object(g.a)(o);function o(t){var n;return Object(j.a)(this,o),(n=e.call(this,t)).handleChange=n.handleChange.bind(Object(O.a)(n)),n}return Object(b.a)(o,[{key:"handleChange",value:function(t){var e=t.target.value;e.includes("#",0)||(e="#"+e),this.props.handleColorInput(e)}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"color__input",children:[Object(a.jsx)("label",{htmlFor:"color__input--label",children:"Color selected: "}),Object(a.jsx)("input",{className:"color__input--input",id:"color-input",type:"text",value:this.props.colorInput,onChange:this.handleChange,placeholder:"Write the color HEX code"})]})}}]),o}(n.Component)),x=function(){var t=Object(n.useState)("#ff0000"),e=Object(r.a)(t,2),o=e[0],c=e[1],i=Object(n.useState)("#ff0000"),l=Object(r.a)(i,2),s=l[0],d=l[1],u=Object(n.useState)("#ff0000"),p=Object(r.a)(u,2),j=p[0],b=p[1],O=Object(n.useState)({positionX:"0",positionY:"300"}),C=Object(r.a)(O,2),g=C[0],x=C[1];return Object(a.jsxs)("main",{className:"main",children:[Object(a.jsx)("h1",{className:"title",children:"Color picker"}),Object(a.jsx)("h3",{className:"title__h3",children:"Please, select your color using the picker on the canvas or write the HEX code"}),Object(a.jsx)(v,{colorInput:s,handleColorInput:function(t){d(t),b(t),c(t),x({positionX:"0",positionY:"300"})}}),Object(a.jsx)(h,{handleColorHue:function(t){d(t),c(t),b(t),x({positionX:"0",positionY:"300"})}}),Object(a.jsxs)("section",{className:"color__picker",children:[Object(a.jsx)("div",{className:"color__picker--selected",style:{backgroundColor:o}}),Object(a.jsx)(f,{color:j,handleColorPicker:function(t,e,o){c(t),d(t),x({positionX:""+e,positionY:""+o})},positionPicker:g})]})]})},S=o(14);i.a.render(Object(a.jsx)(S.a,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.950df37f.chunk.js.map