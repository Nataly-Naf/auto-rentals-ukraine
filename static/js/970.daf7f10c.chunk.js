"use strict";(self.webpackChunkauto_rentals_ukraine=self.webpackChunkauto_rentals_ukraine||[]).push([[970],{1970:function(n,e,r){r.r(e),r.d(e,{default:function(){return tn}});var i=r(2791),t=r(9434),u=r(208),o="NOT_FOUND";var a=function(n,e){return n===e};function l(n,e){var r="object"===typeof e?e:{equalityCheck:e},i=r.equalityCheck,t=void 0===i?a:i,u=r.maxSize,l=void 0===u?1:u,c=r.resultEqualityCheck,d=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var i=e.length,t=0;t<i;t++)if(!n(e[t],r[t]))return!1;return!0}}(t),s=1===l?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:o},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(d):function(n,e){var r=[];function i(n){var i=r.findIndex((function(r){return e(n,r.key)}));if(i>-1){var t=r[i];return i>0&&(r.splice(i,1),r.unshift(t)),t.value}return o}return{get:i,put:function(e,t){i(e)===o&&(r.unshift({key:e,value:t}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(l,d);function f(){var e=s.get(arguments);if(e===o){if(e=n.apply(null,arguments),c){var r=s.getEntries(),i=r.find((function(n){return c(n.value,e)}));i&&(e=i.value)}s.put(arguments,e)}return e}return f.clearCache=function(){return s.clear()},f}function c(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function d(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];var t=function(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];var u,o=0,a={memoizeOptions:void 0},l=i.pop();if("object"===typeof l&&(a=l,l=i.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var d=a,s=d.memoizeOptions,f=void 0===s?r:s,p=Array.isArray(f)?f:[f],v=c(i),h=n.apply(void 0,[function(){return o++,l.apply(null,arguments)}].concat(p)),m=n((function(){for(var n=[],e=v.length,r=0;r<e;r++)n.push(v[r].apply(null,arguments));return u=h.apply(null,n)}));return Object.assign(m,{resultFunc:l,memoizedResultFunc:h,dependencies:v,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),m};return t}var s,f,p,v,h=d(l),m=function(n){return n.contacts.contacts.items},x=function(n){return n.contacts.contacts.isLoading},g=function(n){return n.contacts.contacts.error},b=function(n){return n.contacts.filter},y=h([m,b],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),j=r(168),w=r(6487),k=(w.default.ul(s||(s=(0,j.Z)(["\nmargin-top:10px;\npadding: 0;\nlist-style:none;\n\n"]))),w.default.li(f||(f=(0,j.Z)(["\nmargin-top: 10px;\npadding: 0;\nfont-weight: 400;\ncolor: #1a202c;\nfont-size:18px;\n\n\n"])))),R=w.default.p(p||(p=(0,j.Z)(["\nmargin-top: 10px;\ndisplay:inline;\npadding: 0;\nfont-weight: 500;\ncolor: #1a202c;\nfont-size:18px;\n\n\n"]))),Z=w.default.button(v||(v=(0,j.Z)(["\nbackground-color: lightblue;\nmargin-left: 10px;\n\npadding: 0;\nborder-radius: 5px;\nwidth:60px;\nheight:20px;\n  font-size: 12px;\n  font-weight: 700; \n  border:none;\n  outline: solid grey 1px;\n\n  &:hover {\n background-color:lightgreen;\n  }\n\n"]))),I=r(184),q=function(){var n=(0,t.I0)(),e=(0,t.v9)(y);return(0,I.jsx)("ul",{children:e.map((function(e){return(0,I.jsxs)(k,{children:[e.name," ",(0,I.jsx)(R,{children:e.number}),(0,I.jsx)(Z,{onClick:function(){return n((r=e.id,console.log(r),void n((0,u.GK)(r))));var r},children:"Delete"})," "]},e.id)}))})},O=r(9439),C=r(3661),F=r(1413),z=r(4925),N=r(3823),S=r(6992),D=["isDisabled","isInvalid","isReadOnly","isRequired"],E=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function L(n){var e=function(n){var e,r,i,t=(0,N.NJ)(),u=n.id,o=n.disabled,a=n.readOnly,l=n.required,c=n.isRequired,d=n.isInvalid,s=n.isReadOnly,f=n.isDisabled,p=n.onFocus,v=n.onBlur,h=(0,z.Z)(n,E),m=n["aria-describedby"]?[n["aria-describedby"]]:[];(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&m.push(t.feedbackId);(null==t?void 0:t.hasHelpText)&&m.push(t.helpTextId);return(0,F.Z)((0,F.Z)({},h),{},{"aria-describedby":m.join(" ")||void 0,id:null!=u?u:null==t?void 0:t.id,isDisabled:null!=(e=null!=o?o:f)?e:null==t?void 0:t.isDisabled,isReadOnly:null!=(r=null!=a?a:s)?r:null==t?void 0:t.isReadOnly,isRequired:null!=(i=null!=l?l:c)?i:null==t?void 0:t.isRequired,isInvalid:null!=d?d:null==t?void 0:t.isInvalid,onFocus:(0,S.v0)(null==t?void 0:t.onFocus,p),onBlur:(0,S.v0)(null==t?void 0:t.onBlur,v)})}(n),r=e.isDisabled,i=e.isInvalid,t=e.isReadOnly,u=e.isRequired,o=(0,z.Z)(e,D);return(0,F.Z)((0,F.Z)({},o),{},{disabled:r,readOnly:t,required:u,"aria-invalid":(0,S.Qm)(i),"aria-required":(0,S.Qm)(u),"aria-readonly":(0,S.Qm)(t)})}var T,_=r(5597),A=r(6516),B=r(2996),Q=r(4404),G=["htmlSize"],J=(0,_.G)((function(n,e){var r=n.htmlSize,i=(0,z.Z)(n,G),t=(0,A.jC)("Input",i),u=L((0,B.Lr)(i)),o=(0,S.cx)("chakra-input",n.className);return(0,I.jsx)(Q.m.input,(0,F.Z)((0,F.Z)({size:r},u),{},{__css:t.field,ref:e,className:o}))}));J.displayName="Input",J.id="Input";var K,H,U,V=r(6487).default.div(T||(T=(0,j.Z)(["\nmargin-top:20px;\nwidth:320px;\n\n"]))),M=function(){var n=(0,i.useState)(""),e=(0,O.Z)(n,2),r=e[0],u=e[1],o=(0,t.I0)();(0,i.useEffect)((function(){o((0,C.Tv)(r))}),[r,o]);var a=(0,t.v9)(b);return(0,I.jsxs)(V,{children:[(0,I.jsx)("p",{children:"Find contact by name"}),(0,I.jsx)(J,{onChange:function(n){u(n.target.value)},type:"text",placeholder:"Find by name",value:a})]})},P=r(5705),W=r(6727),X=(0,w.default)(P.l0)(K||(K=(0,j.Z)(["\nmargin-top:50px;\nwidth:320px;\nmargin:0;\npadding: 0;\ndisplay: flex;\nmargin-bottom: 20px;\nflex-direction: column;\ngap:20px;\n\n"]))),Y=(0,w.default)(P.gN)(H||(H=(0,j.Z)(["\nborder-radius: 5px;\nwidth: 350px;\nmargin-left: 10px;\nmargin-top:10px;\n\n\n"]))),$=w.default.button(U||(U=(0,j.Z)(["\nbackground-color: lightblue;\npadding: 0;\nborder-radius: 5px;\nwidth:150px;\nheight:30px;\n  font-size: 12px;\n  font-weight: 700; \n  border:none;\n  outline: solid grey 1px;\n  \n\n  &:hover {\n background-color:#3f51b5;\n  }\n\n"]))),nn=W.Ry().shape({name:W.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),number:W.Rx().required("Required")}),en=function(){var n=(0,t.I0)(),e=(0,t.v9)(m);return(0,I.jsx)(P.J9,{initialValues:{name:"",number:""},validationSchema:nn,onSubmit:function(r,i){if(e.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()})))return alert("This contact is in your contacts");console.log(r),n((0,u.uK)(r)),i.resetForm()},children:(0,I.jsxs)(X,{children:[(0,I.jsxs)("label",{children:[" ","Name",(0,I.jsx)(Y,{name:"name",placeholder:"Name"}),(0,I.jsx)(P.Bc,{name:"name"})]}),(0,I.jsxs)("label",{children:[" ","Number",(0,I.jsx)(Y,{name:"number",placeholder:"number"}),(0,I.jsx)(P.Bc,{name:"number"})]}),(0,I.jsx)($,{type:"submit",children:"Add contact"})]})})},rn=r(774);function tn(){var n=(0,t.I0)(),e=(0,t.v9)(x),r=(0,t.v9)(g);return(0,i.useEffect)((function(){n((0,u.yF)())}),[n]),(0,I.jsxs)("div",{children:[(0,I.jsx)(rn.I,{}),(0,I.jsx)(en,{}),(0,I.jsx)(M,{}),e&&!r&&(0,I.jsx)("b",{children:"Loading in progress..."}),(0,I.jsx)(q,{})]})}}}]);
//# sourceMappingURL=970.daf7f10c.chunk.js.map