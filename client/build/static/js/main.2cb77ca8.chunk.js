(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s(1),n=s.n(i),r=s(15),a=s.n(r),o=(s(23),s(3)),l=s(17),d=function(){var e=document.getElementsByClassName("menu-list"),t=Object(l.a)(document.getElementsByClassName("menu-button")),s=Object(i.useState)("close"),n=Object(o.a)(s,2),r=n[0],a=n[1],d=function(){e[0].classList.toggle("slide");for(var s=0;s<t.length;s++)t[s].classList.toggle("elements-slide");a("close"===r?"open":"close")};return Object(c.jsxs)("nav",{id:"nav-bar",children:[Object(c.jsx)("h1",{children:"the spacesuit store"}),Object(c.jsxs)("ul",{className:"menu-list",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#home",className:"menu-button elements-slide",onClick:d,children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#best",className:"menu-button elements-slide",onClick:d,children:"Best Sellers"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#promise",className:"menu-button elements-slide",onClick:d,children:"Our promise"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#contact",className:"menu-button elements-slide",onClick:d,children:"Contact us"})})]}),Object(c.jsxs)("div",{id:"burger",onClick:d,children:[Object(c.jsx)("div",{className:r}),Object(c.jsx)("div",{className:r}),Object(c.jsx)("div",{className:r})]})]})},j=(s(24),function(e){var t=e.name,s=e.price,i=e.description,n=e.url,r=e.alt;return Object(c.jsxs)("div",{className:"image-container",children:[Object(c.jsxs)("div",{className:"text-on-image",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)("br",{}),Object(c.jsxs)("h2",{children:["Price: ",s]}),Object(c.jsx)("p",{children:i})]}),Object(c.jsx)("img",{src:n,alt:r})]})}),h=s(16),u=s.n(h),m=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),s=t[0],n=t[1],r=Object(i.useState)(""),a=Object(o.a)(r,2),l=a[0],d=a[1],j=Object(i.useState)(""),h=Object(o.a)(j,2),m=h[0],b=h[1],p=Object(i.useState)(""),x=Object(o.a)(p,2),O=x[0],g=x[1],f=document.getElementById("result-message");return Object(c.jsxs)("div",{id:"contact",children:[Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),!0===function(e){return!!/(^\w+)[a-z0-9.]+\@\w+\.\w+/i.test(e)}(l)?u.a.post("/send",{message:O,name:s,phone:m,email:l}).then((n(""),d(""),b(""),void g(""))).then(f.textContent="We got it! Thanks!").catch((function(e){console.log(JSON.stringify(e))})):alert("please enter correct email address"),d("")},method:"POST",action:"send",children:Object(c.jsxs)("ul",{id:"contact-form",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"form-name",children:"* Name : "}),Object(c.jsx)("input",{type:"text",id:"form-name",value:s,onChange:function(e){return n(e.target.value)},required:!0})]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("label",{htmlFor:"form-email",children:"* E-mail address : "}),Object(c.jsx)("input",{id:"form-email",value:l,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("label",{htmlFor:"form-phone",children:"* Phone number : "}),Object(c.jsx)("input",{type:"text",id:"form-phone",value:m,onChange:function(e){return b(e.target.value)},required:!0})]}),Object(c.jsxs)("li",{id:"message-field",children:["  ",Object(c.jsx)("label",{htmlFor:"form-message",children:"* Your message : "}),Object(c.jsx)("input",{type:"text",id:"form-message",value:O,onChange:function(e){return g(e.target.value)},required:!0})]}),Object(c.jsx)("button",{type:"submit",value:"submit",className:"button-go",children:"Submit"})]})}),Object(c.jsx)("p",{id:"result-message"})]})},b=function(){return Object(c.jsxs)("div",{id:"promise-div",children:[Object(c.jsxs)("div",{id:"quality",className:"promises",children:[Object(c.jsx)("img",{src:"https://raw.githubusercontent.com/marine-bre/the-spacesuit-store/master/client/src/pictures/iconfinder_Crystal_Shard_2913097%20(1).png",alt:"quality"}),Object(c.jsxs)("div",{className:"pro-text",children:[Object(c.jsxs)("div",{className:"pro-title-sq",children:[Object(c.jsx)("span",{className:"pro-number",children:"\\\\ 01"}),Object(c.jsx)("span",{className:"pro-title",children:" quality"})]}),Object(c.jsxs)("span",{className:"pro-desc",children:[" ","Here at the spacesuit store, we promise you the highest level quality. We use materials that have been approved by the NASA and the European Space Agency (ESA), so you know you're getting the best."]})]})]}),Object(c.jsxs)("div",{id:"design",className:"promises",children:[Object(c.jsxs)("span",{className:"pro-desc",children:[" ","Our team, composed of the greatest engineers in the aerospace industry comnbined with world renowned fashion designers, will ensure that your suit is not only safe and ergonomic but also up to the latest trends."]}),Object(c.jsx)("img",{src:"https://raw.githubusercontent.com/marine-bre/the-spacesuit-store/master/client/src/pictures/iconfinder_Sword_2913105.png",alt:"design"}),Object(c.jsx)("div",{className:"pro-text",children:Object(c.jsxs)("div",{className:"pro-title-sq",children:[Object(c.jsx)("span",{className:"pro-number",children:"\\\\ 02"}),Object(c.jsx)("span",{className:"pro-title",children:"design"})]})})]}),Object(c.jsxs)("div",{id:"aftercare",className:"promises",children:[Object(c.jsx)("img",{src:"https://raw.githubusercontent.com/marine-bre/the-spacesuit-store/master/client/src/pictures/iconfinder_Destructive_Magic_2913121.png",alt:"aftercare"}),Object(c.jsxs)("div",{className:"pro-text",children:[Object(c.jsxs)("div",{className:"pro-title-sq",children:[Object(c.jsx)("span",{className:"pro-number",children:"\\\\ 03"}),Object(c.jsx)("span",{className:"pro-title",children:"aftercare"})]}),Object(c.jsxs)("span",{className:"pro-desc",children:[" ","We handle your suits after every one of your space travels. Our team will clean and polish all components of the suit with the greatest care with expert knowledge and environment friendly equipment."]})]})]})]})};var p=function(){return Object(i.useEffect)((function(){var e=document.getElementById("main-image"),t=document.getElementById("image-before");window.addEventListener("scroll",(function(){var s=window.scrollY;e.style.top=.1*s+"px",t.style.top=.02*s-6+"vh",e.style.right=.1*s+"px",t.style.right=.02*s-6+"vw"}))})),Object(c.jsxs)("div",{className:"App",id:"home",children:[Object(c.jsx)(d,{}),Object(c.jsxs)("div",{className:"main-container",children:[Object(c.jsxs)("div",{className:"main-container-text",children:[Object(c.jsxs)("h2",{children:["Welcome to the spacesuit store! ",Object(c.jsx)("br",{})]}),Object(c.jsxs)("p",{children:["Most space agencies, such as the NASA, the European Space Agency and Space X, have already relied on our services. We also have a significant number of confidential individual clients who have requested personnalised suits to be made for them.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})," We offer the best of the best! If you have not yet heard of the superb quality of our products, we invite you to discover our promises to our clients by clicking on the button below. If you are already convinced that you need one of our products, feel free to fill the contact form and we will give you a call to discuss your needs. Enjoy!"]}),Object(c.jsx)("form",{action:"#promise",children:Object(c.jsx)("button",{className:"button-go",children:"Check out our promise to you \u21e8"})})]}),Object(c.jsxs)("div",{className:"main-container-image",children:[Object(c.jsx)("img",{id:"main-image",alt:"astronaut",src:"https://images.pexels.com/photos/355956/pexels-photo-355956.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}),Object(c.jsx)("div",{id:"image-before"})]})]}),Object(c.jsx)("hr",{id:"best"}),Object(c.jsxs)("div",{id:"bestsellers",children:[Object(c.jsx)("h3",{children:"our best sellers"}),[{name:"The Number 1",url:"https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:"263K credits",description:"This is a suit worn by this person during that year and going on that trip"},{name:"The Number 2",url:"https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:"132K credits",description:"This is a suit worn by this person during that year and going on that trip"},{name:"The Number 3",url:"https://images.pexels.com/photos/33684/astronaut-spacewalk-iss-tools.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:"423K credits",description:"This is a suit worn by this person during that year and going on that trip"}].map((function(e){return Object(c.jsx)(j,{name:e.name,price:e.price,description:e.description,url:e.url,alt:e.name},e.name)}))]}),Object(c.jsx)("hr",{id:"promise"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"our promise"}),Object(c.jsx)(b,{})]}),Object(c.jsx)("hr",{id:"contact"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"contact us"}),Object(c.jsx)(m,{})]}),Object(c.jsxs)("div",{id:"copyright",children:[Object(c.jsx)("p",{children:"Copyright \xa9 - Marine Bretonniere"}),Object(c.jsx)("p",{children:"2020"})]})]})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,43)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),i(e),n(e),r(e)}))};a.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),x()}},[[42,1,2]]]);
//# sourceMappingURL=main.2cb77ca8.chunk.js.map