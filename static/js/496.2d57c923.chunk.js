"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[496],{496:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var i,a=r(2791),t=r(9434),l=r(208),s=r(6351),c=r(5796),u=r(168),o=r(5867).ZP.ul(i||(i=(0,u.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 29px;\n  padding: 0px;\n"]))),m=r(8922),d=r(5705),p=r(4743),x=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),h=r(184),g=function(){for(var e=(0,t.I0)(),n=[],r=10;r<=100;r+=10)n.push(r);return(0,h.jsx)(d.J9,{initialValues:{brand:"",price:"",minMileage:"",maxMileage:""},onSubmit:function(n,r){var i=r.setSubmitting,a=r.resetForm;e((0,p.XP)(n.brand)),e((0,p.G0)(n.price)),e((0,p.v2)(n.minMileage)),e((0,p.tR)(n.maxMileage)),i(!1),a()},children:function(e){var r=e.isSubmitting;return(0,h.jsxs)(d.l0,{children:[(0,h.jsx)("label",{htmlFor:"brand",children:"Find brand:"}),(0,h.jsxs)(d.gN,{as:"select",name:"brand",children:[(0,h.jsx)("option",{value:"",children:"Select a brand"}),x.map((function(e,n){return(0,h.jsx)("option",{value:e,children:e},n)}))]}),(0,h.jsx)("label",{htmlFor:"price",children:"Price/1 hour:"}),(0,h.jsxs)(d.gN,{as:"select",name:"price",children:[(0,h.jsx)("option",{value:"",children:"Select a price"}),n.map((function(e,n){return(0,h.jsx)("option",{value:e,children:e},n)}))]}),(0,h.jsx)("label",{htmlFor:"minMileage",children:"Minimum mileage/km:"}),(0,h.jsx)(d.gN,{type:"text",name:"minMileage"}),(0,h.jsx)("label",{htmlFor:"maxMileage",children:"Maximum mileage/km:"}),(0,h.jsx)(d.gN,{type:"text",name:"maxMileage"}),(0,h.jsx)("button",{type:"submit",disabled:r,children:"Search"})]})}})},f=function(){var e=(0,t.v9)(s.o9),n=(0,t.v9)(s.hQ),r=(0,t.v9)(s.ZH),i=(0,t.v9)(s._p),a=(0,t.v9)(s.Mx),l=e.filter((function(e){if(n&&e.make!==n)return!1;if(r&&parseFloat(e.rentalPrice.replace("$",""))>parseFloat(r))return!1;return!(i&&e.mileage<parseInt(i,10))&&!(a&&e.mileage>parseInt(a,10))}));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g,{}),(0,h.jsx)(o,{children:l.map((function(e){return(0,h.jsx)(c.J,{onCard:e})}))}),(0,h.jsx)(m.n,{})]})};function j(){var e=(0,t.I0)(),n=(0,t.v9)(s.xU),r=(0,t.v9)(s.zh);return(0,a.useEffect)((function(){e((0,l.q)())}),[e]),(0,h.jsxs)("div",{children:[n&&!r&&(0,h.jsx)("b",{children:"Loading in progress..."}),(0,h.jsx)(f,{})]})}}}]);
//# sourceMappingURL=496.2d57c923.chunk.js.map