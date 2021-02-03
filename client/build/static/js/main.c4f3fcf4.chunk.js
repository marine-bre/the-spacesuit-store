(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,s){},29:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),i=s.n(n),a=s(5),r=s.n(a),l=(s(26),s(3)),o=s(4),j=s(50);var d=function(e){var t=e.name,s=e.price,n=e.url,i=e.quantity,a=e.setItems,r=e.items,l=function(e){var s=r.findIndex((function(e){return e.name===t})),c=Object(o.a)(r);c[s]=e,a(c)};return Object(c.jsxs)("div",{className:"cart--item--container",children:[Object(c.jsx)("img",{src:n,alt:"small thumbnail of product"}),Object(c.jsxs)("div",{className:"cart--item--right",children:[Object(c.jsxs)("h3",{children:["\xa7",s,"K"]}),Object(c.jsx)("h2",{children:t}),Object(c.jsx)("div",{className:"item--bottom-section",children:Object(c.jsxs)("div",{className:"cart--qty",children:[Object(c.jsx)("div",{className:"plus",onClick:function(){(i--,console.log(i),0===i)?a(r.filter((function(e){return e.name!==t}))):l({name:t,price:s,url:n,quantity:i})},children:" - "}),Object(c.jsxs)("div",{className:"qty",children:[" ",i," "]}),Object(c.jsx)("div",{className:"minus",onClick:function(){i++,l({name:t,price:s,url:n,quantity:i})},children:" + "})]})})]})]})};var m=function(e){var t=e.items,s=e.setItems,n=t.length>0?t.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}),0):0;return Object(c.jsxs)("div",{className:"cart",children:[Object(c.jsxs)("div",{className:"cart--top",children:[Object(c.jsxs)("h2",{children:["MY BASKET ",t.length>0?" - ".concat(t.length," items"):""]}),Object(c.jsx)("div",{className:"cart--items",children:t.map((function(e){return Object(c.jsx)(d,{name:e.name,price:e.price,url:e.url,quantity:e.quantity,total:n,setItems:s,items:t})}))})]}),Object(c.jsxs)("div",{className:"cart--bottom",children:[Object(c.jsxs)("div",{className:"cart--total",children:[Object(c.jsx)("h2",{children:"Total: "}),Object(c.jsxs)("h2",{children:["\xa7 ",n," ",n>0?"K":""]})]}),Object(c.jsx)("button",{className:"cart--btn",children:"CHECKOUT"})]})]})},u=function(e){var t=e.items,s=e.setItems,i=e.showCart,a=e.setShowCart,r=document.getElementsByClassName("menu-list"),d=Object(o.a)(document.getElementsByClassName("menu-button")),u=Object(n.useState)("close"),h=Object(l.a)(u,2),b=h[0],p=h[1],x=function(){r[0].classList.toggle("slide");for(var e=0;e<d.length;e++)d[e].classList.toggle("elements-slide");p("close"===b?"open":"close")};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("nav",{id:"nav-bar",children:[Object(c.jsx)("h1",{children:"the spacesuit store"}),Object(c.jsxs)("ul",{className:"menu-list",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#home",className:"menu-button elements-slide",onClick:x,children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#best",className:"menu-button elements-slide",onClick:x,children:"Best Sellers"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#promise",className:"menu-button elements-slide",onClick:x,children:"Our promise"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#contact",className:"menu-button elements-slide",onClick:x,children:"Contact us"})}),Object(c.jsx)("li",{onClick:x,children:Object(c.jsx)("svg",{onClick:function(){a(!i)},className:"basket--svg",viewBox:"0 0 512 512",fill:"#e8d5b5",width:"100px",height:"30px",children:Object(c.jsx)("path",{d:"M501.333,213.331h-90.388L296.792,47.289c-3.333-4.854-9.969-6.073-14.833-2.75c-4.854,3.344-6.083,9.979-2.75,14.833 l105.846,153.958H126.945L232.792,59.373c3.333-4.854,2.104-11.49-2.75-14.833c-4.833-3.323-11.479-2.104-14.833,2.75 L101.055,213.331H10.667C4.771,213.331,0,218.102,0,223.998c0,5.896,4.771,10.667,10.667,10.667h13.533l65.207,204.938 c5.667,17.781,22,29.729,40.656,29.729h251.875c18.656,0,34.99-11.948,40.656-29.74l65.206-204.927h13.534 c5.896,0,10.667-4.771,10.667-10.667C512,218.102,507.229,213.331,501.333,213.331z M402.26,433.123 c-2.833,8.896-11,14.875-20.323,14.875H130.063c-9.323,0-17.49-5.979-20.323-14.865L46.589,234.664h418.823L402.26,433.123z"})})})]}),Object(c.jsxs)("div",{id:"burger",onClick:x,children:[Object(c.jsx)("div",{className:b}),Object(c.jsx)("div",{className:b}),Object(c.jsx)("div",{className:b})]}),Object(c.jsx)(j.a,{in:i,classNames:"cart",unmountOnExit:!0,timeout:1e3,children:Object(c.jsx)(m,{items:t,setItems:s})})]})})},h=(s(29),function(e){var t=e.name,s=e.price,n=e.url,i=e.alt,a=e.items,r=e.quantity,l=e.setItems,j=e.setShowCart;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"img--frame",children:Object(c.jsx)("img",{src:n,alt:i})}),Object(c.jsxs)("div",{className:"card--textbox",children:[Object(c.jsxs)("h2",{children:["\xa7 ",s," K"]}),Object(c.jsx)("h1",{children:t})]}),Object(c.jsx)("button",{className:"card--btn",onClick:function(){if(a.some((function(e){return e.name===t}))){var e=a.findIndex((function(e){return e.name===t}));r=a[e].quantity+1;var c={name:t,price:s,url:n,quantity:r},i=Object(o.a)(a);i[e]=c,l(i),console.log(a)}else r++,l([].concat(Object(o.a)(a),[{name:t,price:s,url:n,quantity:r}]));j(!0),setTimeout((function(){return j(!1)}),5e3)},children:"ADD"})]})}),b=s(18),p=s.n(b),x=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),s=t[0],i=t[1],a=Object(n.useState)(""),r=Object(l.a)(a,2),o=r[0],j=r[1],d=Object(n.useState)(""),m=Object(l.a)(d,2),u=m[0],h=m[1],b=Object(n.useState)(""),x=Object(l.a)(b,2),O=x[0],f=x[1],g=document.getElementById("result-message");return Object(c.jsxs)("div",{id:"contact",children:[Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),!0===function(e){return!!/(^\w+)[a-z0-9.]+\@\w+\.\w+/i.test(e)}(o)?p.a.post("/send",{message:O,name:s,phone:u,email:o}).then((i(""),j(""),h(""),void f(""))).then(g.textContent="We got it! Thanks!").catch((function(e){console.log(JSON.stringify(e))})):alert("please enter correct email address"),j("")},method:"POST",action:"send",children:[Object(c.jsxs)("div",{className:"form--fields",children:[Object(c.jsxs)("div",{className:"labels",children:[Object(c.jsx)("label",{htmlFor:"form-name",children:"* Name : "}),Object(c.jsx)("label",{htmlFor:"form-email",children:"* E-mail address : "}),Object(c.jsx)("label",{htmlFor:"form-phone",children:"* Phone number : "}),Object(c.jsx)("label",{htmlFor:"form-message",children:"* Your message : "})]}),Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("input",{type:"text",id:"form-name",value:s,onChange:function(e){return i(e.target.value)},required:!0}),Object(c.jsx)("input",{id:"form-email",value:o,onChange:function(e){return j(e.target.value)},required:!0}),Object(c.jsx)("input",{type:"text",id:"form-phone",value:u,onChange:function(e){return h(e.target.value)},required:!0}),Object(c.jsx)("input",{type:"text",id:"form-message",value:O,onChange:function(e){return f(e.target.value)},required:!0})]})]}),Object(c.jsx)("button",{type:"submit",value:"submit",className:"btn form--btn",children:"Submit"})]}),Object(c.jsx)("p",{id:"result-message"})]})},O=function(){return Object(c.jsxs)("div",{id:"promise-div",children:[Object(c.jsxs)("div",{className:"pro--container","data-aos":"fade-right",children:[Object(c.jsx)("div",{className:"pro--header",children:Object(c.jsx)("h2",{className:"pro--title",children:"1. QUALITY"})}),Object(c.jsx)("div",{className:"pro--text",children:Object(c.jsx)("p",{children:"Here at the spacesuit store, we promise you the highest level quality. We use materials that have been approved by the NASA and the European Space Agency (ESA), so you know you're getting the best. "})})]}),Object(c.jsxs)("div",{className:"pro--container right","data-aos":"fade-left",children:[Object(c.jsx)("div",{className:"pro--text",children:Object(c.jsx)("p",{children:"Our team, composed of the greatest engineers in the aerospace industry comnbined with world renowned fashion designers, will ensure that your suit is not only safe and ergonomic but also up to the latest trends."})}),Object(c.jsx)("div",{className:"pro--header header--right",children:Object(c.jsx)("h2",{className:"pro--title",children:"2. DESIGN"})})]}),Object(c.jsxs)("div",{className:"pro--container","data-aos":"fade-right",children:[Object(c.jsx)("div",{className:"pro--header",children:Object(c.jsx)("h2",{className:"pro--title",children:"3. AFTERCARE"})}),Object(c.jsx)("div",{className:"pro--text",children:Object(c.jsx)("p",{children:"We handle your suits after every one of your space travels. Our team will clean and polish all components of the suit with the greatest care with expert knowledge and environment friendly equipment."})})]})]})},f=s(19),g=s.n(f);s(47);var v=function(){return Object(c.jsxs)("div",{className:"main-container",children:[Object(c.jsxs)("div",{className:"main-container-text",children:[Object(c.jsxs)("h2",{children:["Welcome to the spacesuit store! ",Object(c.jsx)("br",{})]}),Object(c.jsxs)("p",{children:["Most space agencies, such as the NASA, the European Space Agency and Space X, have already relied on our services. We also have a significant number of confidential individual clients who have requested personnalised suits to be made for them.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})," We offer the best of the best! If you have not yet heard of the superb quality of our products, we invite you to discover our promises to our clients by clicking on the button below. If you are already convinced that you need one of our products, feel free to fill the contact form and we will give you a call to discuss your needs. Enjoy!"]}),Object(c.jsx)("button",{className:"btn",children:Object(c.jsx)("a",{href:"#bestsellers",children:"Our most popular products   \u27fe"})}),Object(c.jsx)("button",{className:"btn",children:Object(c.jsx)("a",{href:"#promise",children:"Our commitments \u27fe"})})]}),Object(c.jsxs)("div",{className:"main-container-image",children:[Object(c.jsx)("img",{id:"main-image",alt:"astronaut",src:"https://images.pexels.com/photos/355956/pexels-photo-355956.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}),Object(c.jsx)("div",{id:"image--frame"})]})]})};var y=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),s=t[0],i=t[1];console.log(s);var a=Object(n.useState)(!1),r=Object(l.a)(a,2),o=r[0],j=r[1];return Object(n.useEffect)((function(){var e=document.getElementById("main-image"),t=document.getElementById("image--frame");window.addEventListener("scroll",(function(){var s=window.scrollY;e.style.top=.1*s+"px",t.style.top=.02*s-6+"vh",e.style.right=.1*s+"px",t.style.right=.02*s-6+"vw"}))})),Object(n.useEffect)((function(){g.a.init({duration:1e3})}),[]),Object(c.jsxs)("div",{className:"App",id:"home",children:[Object(c.jsx)(u,{items:s,setItems:i,showCart:o,setShowCart:j}),Object(c.jsx)(v,{}),Object(c.jsx)("hr",{id:"best"}),Object(c.jsxs)("div",{id:"bestsellers",children:[Object(c.jsx)("h3",{children:"our best sellers"}),Object(c.jsx)("div",{className:"img--container",children:[{name:"HELMET #9945",url:"https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:263,quantity:0},{name:"SUIT #0542",url:"https://images.unsplash.com/photo-1541873676-a18131494184?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YXN0cm9uYXV0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",price:423,quantity:0},{name:"SUIT #0221",url:"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd36-2-sts064-45-012_orig.jpg?w=600&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f7ed8b11ce92301a52085ad9b061d25b",price:423,quantity:0},{name:"SUIT #1344",url:"https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:132,quantity:0},{name:"HELMET #9734",url:"https://images.pexels.com/photos/33684/astronaut-spacewalk-iss-tools.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:423,quantity:0},{name:"SUIT #0373 Vintage",url:"https://cdn.pixabay.com/photo/2012/10/10/11/06/moon-walk-60616__480.jpg",price:423,quantity:0}].map((function(e){return Object(c.jsx)(h,{name:e.name,price:e.price,url:e.url,quantity:e.quantity,alt:e.name,items:s,setItems:i,setShowCart:j},e.name)}))})]}),Object(c.jsx)("hr",{id:"promise"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"our promise"}),Object(c.jsx)(O,{})]}),Object(c.jsx)("hr",{id:"contact"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"contact us"}),Object(c.jsx)(x,{})]}),Object(c.jsxs)("div",{id:"copyright",children:[Object(c.jsx)("p",{children:"Copyright \xa9 - Marine Bretonniere"}),Object(c.jsx)("p",{children:"2020"})]})]})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,51)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),N()}},[[48,1,2]]]);
//# sourceMappingURL=main.c4f3fcf4.chunk.js.map