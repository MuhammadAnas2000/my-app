(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),l=(a(9),a(2)),o=a(0);function i(e){return Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(o.jsx)("li",{className:"nav-item active",children:Object(o.jsxs)("a",{className:"nav-link",href:"#",children:["Home ",Object(o.jsx)("span",{className:"sr-only",children:"(current)"})]})})})}),Object(o.jsxs)("div",{class:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{class:"form-check-input",type:"checkbox",onClick:e.togglemode,id:"flexSwitchCheckChecked"}),Object(o.jsx)("label",{class:"form-check-label",htmlFor:"flexSwitchCheckChecked",children:"Enable dark mode"})]})]})}function d(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",id:"myBox",onChange:function(e){r(e.target.value)},value:n,style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},rows:"8"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("Text is capitalize","success")},children:"ConvertUpperLetter"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toLowerCase();r(t),e.showAlert("Text is LowerCase","success")},children:"ConvertLowerLetter"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){r("")},children:"Clear Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e="";n[0]===n[0].toLowerCase()&&(e+=n.charAt(0).toUpperCase());for(var t=1;t<n.length;t++)" "===n[t-1]?e+=n.charAt(t).toUpperCase():e+=n[t];r(e)},children:"Capitalize"})]}),Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h1",{children:"Text Summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.08*n.split(" ").length,"miutes to read the text"]}),Object(o.jsx)("h2",{children:"Prieview"}),Object(o.jsx)("p",{children:n.length>0?n:"Write some thing to prieview"})]})]})}function b(e){var t;return e.alert&&Object(o.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:(t=e.alert.type,t=t.charAt(0).toUpperCase()+t.slice(1))})," :",e.alert.msg]})}i.defaultProps={aboutText:"Hello World"};var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),h=s[0],j=s[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"Anas React",aboutText:"About React Js ",mode:a,togglemode:function(){"dark"===a?(n("light"),document.body.style.backgroundColor="yellow",m("light Mode is enable","success"),document.title="Light Mode"):(n("dark"),document.body.style.backgroundColor="green",m("dark Mode is enable","success"),document.title="Dark Mode")}}),Object(o.jsx)(b,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{showAlert:m,heading:"Enter the text",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.f850f2f2.chunk.js.map