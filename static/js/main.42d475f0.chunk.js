(this.webpackJsonprockshop=this.webpackJsonprockshop||[]).push([[0],{61:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(20),s=c.n(a),i=(c(59),c(60),c(61),c(2)),o=c.n(i),u=c(7),j=c(4),d=c(30),l=c(51),b=c(31),p=c(34),h=c(1),O=function(e){var t=e.quantity;return Object(h.jsx)(d.a,{expand:"lg",children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(d.a.Brand,{href:"/",children:"RockShop"}),Object(h.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(b.a,{id:"justify-content-end",children:[Object(h.jsx)(p.LinkContainer,{exact:!0,to:"/",children:Object(h.jsx)(b.a.Link,{children:"Home"})}),Object(h.jsx)(p.LinkContainer,{to:"/products",children:Object(h.jsx)(b.a.Link,{children:"Products"})}),Object(h.jsx)(p.LinkContainer,{to:"/cart",children:Object(h.jsxs)(b.a.Link,{href:"/cart",children:[Object(h.jsx)("i",{class:"bi bi-cart-plus"}),t]})})]})})]})})},f=c(16),x=c(25),m=c.n(x),v="https://my-json-server.typicode.com/rajeevRuhaan/db-rockshop",y=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(v,"/product_").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(o.a.mark((function e(t,c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(v,"/product_").concat(t,"/").concat(c));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(o.a.mark((function e(t,c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(v,"/cart"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.put("".concat(v,"/cart/").concat(t.id),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("".concat(v,"/cart"),t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("".concat(v,"/cart/").concat(t.id));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=c(8),q=c(24),R=c(17),T="LOAD_CART",E="ADD_TO_CART",P="DELETE_CART_PRODUCT_QUANTITY",_=function(e){var t=e.product,c=Object(R.c)((function(e){return e.cart})),r=Object(R.b)(),n=function(){var e=Object(u.a)(o.a.mark((function e(){var n,a,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n=!1,a=Object(q.a)(c);try{for(a.s();!(s=a.n()).done;)(i=s.value).id===t.id&&i.quantity>1&&(n=!0)}catch(o){a.e(o)}finally{a.f()}if(!n){e.next=9;break}return e.next=7,w(Object(A.a)(Object(A.a)({},t),{},{quantity:c.find((function(e){return e.id===t.id})).quantity-1}));case 7:e.next=11;break;case 9:return e.next=11,C(Object(A.a)({},t));case 11:r({type:P,payload:Object(A.a)(Object(A.a)({},t),{},{quantity:t.quantity-1})}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("Error from cartCard.js handleDeleteCartProduct",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"cartCard",children:Object(h.jsxs)("div",{className:"col-sm",children:[Object(h.jsx)("img",{className:"card-img-top",src:t.image,alt:t.name}),Object(h.jsxs)("div",{class:"card-body",children:[Object(h.jsx)("h5",{class:"card-title",children:t.name}),Object(h.jsxs)("p",{class:"card-text",children:["Price : $",t.price]}),Object(h.jsxs)("p",{class:"card-text",children:["Total : $",t.price*t.quantity]}),Object(h.jsxs)("p",{class:"card-text",children:["Quantity : ",t.quantity]})]}),Object(h.jsx)("div",{className:"d-flex justify-content-between",children:Object(h.jsxs)("button",{className:"btn btn-danger",onClick:n,children:[Object(h.jsx)("i",{class:"bi bi-trash"}),"Delete Cart Product"]})})]})})},L=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),c=t[0],n=t[1];console.log(c),Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error form Cart.js loadCartProducts",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:c.map((function(e){return Object(h.jsx)(_,{product:e},e.id)}))})})},S=function(){return Object(h.jsx)(L,{})};var I=function(){return Object(h.jsx)("footer",{children:"Copyright@rajeevSah"})},D=c(15),U=function(){return Object(h.jsxs)("div",{className:"home",children:[Object(h.jsx)("body",{children:Object(h.jsxs)("div",{className:"home hero-banner",children:[Object(h.jsx)("img",{src:"https://images.ctfassets.net/5g7b6ypj247n/7zR2feW9NmpihuvVFs7ZSR/96ea3bd07511a668b0e4ea3e41323c9c/pintoja-uusiksi-etusivu-krauta-hero.jpg?fl=progressive&fm=jpg&h=440&q=80&w=1760",alt:"K-Rauta-hero-banner"}),Object(h.jsxs)("div",{className:"home product-categories",children:[Object(h.jsx)("h2",{children:"Rocks Categories"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)(D.Link,{to:"/products",children:Object(h.jsxs)("li",{children:["Igneous Rocks",Object(h.jsx)("img",{src:"http://lh3.googleusercontent.com/-eqzNlFail9c/URN81RdqSII/AAAAAAAAIlg/C0bdrsCUm_U/s720/Igneous%252520rocks%252520gabbro%252520andesite%252520pegmatite%252520basalt%252520pumice%252520porphyry%252520obsidian%252520granite%252520tuff.jpg",alt:"igneous rock from web"})]})}),Object(h.jsx)(D.Link,{to:"/products",children:Object(h.jsxs)("li",{children:["Sedimentary Rocks",Object(h.jsx)("img",{src:"http://lh3.googleusercontent.com/-LuCj_kT7svA/UYN61NaWF0I/AAAAAAAAHHg/pQjiKmsIlE8/s720/00753%252520Sedimentary%252520Rocks%252520Collage%252520clay%252520limestone%252520sandstone%252520sylvine%252520chalcedony%252520coal%252520phosphorite%252520conglomerate%252520bauxite.jpg",alt:"sedimentatry rock from web"})]})}),Object(h.jsx)(D.Link,{to:"/products",children:Object(h.jsxs)("li",{children:["Metamorphic Rocks",Object(h.jsx)("img",{src:"https://www.worldatlas.com/r/w1200/upload/2d/be/03/shutterstock-483429490.jpg",alt:"metamorphic rock from web"})]})})]})]})]})}),Object(h.jsx)(I,{})]})},F=function(){var e=Object(j.m)(),t=e.type,c=e.id,n=Object(R.c)((function(e){return e.cart})),a=Object(R.b)(),s=Object(r.useState)({id:"",image:"",name:"",price:""}),i=Object(f.a)(s,2),d=i[0],l=i[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,g(t,c);case 4:r=e.sent,l(r.data),x(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error form product.js loadProduct:",e.t0),x(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[t,c]);var b=Object(r.useState)(!1),p=Object(f.a)(b,2),O=p[0],x=p[1],m=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=!1,c=Object(q.a)(n);try{for(c.s();!(r=c.n()).done;)r.value.id===d.id&&(t=!0)}catch(s){c.e(s)}finally{c.f()}if(!t){e.next=9;break}return e.next=7,w(Object(A.a)(Object(A.a)({},d),{},{quantity:n.find((function(e){return e.id===d.id})).quantity+1}));case 7:e.next=11;break;case 9:return e.next=11,N(Object(A.a)(Object(A.a)({},d),{},{quantity:1}));case 11:window.alert("The product has been added to cart"),a({type:E,payload:Object(A.a)(Object(A.a)({},d),{},{quantity:1})}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("Error is from Products.js handleAddToCart",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h3",{className:"text-center mt-3",children:"Product Page"}),Object(h.jsx)("div",{className:"col",children:O?Object(h.jsx)("p",{className:"text-danger",children:"Loading..."}):Object(h.jsx)(r.Fragment,{children:Object(h.jsxs)("div",{className:"card-product",style:{width:"18rem"},children:[Object(h.jsx)("img",{src:d.image,className:"card-img-top",alt:d.name}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("div",{className:"d-flex justify-content-between my-3",children:[Object(h.jsx)("h5",{className:"card-title",children:d.name}),Object(h.jsxs)("p",{className:"card-text",children:["Price : $",d.price]})]}),Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsx)(D.Link,{to:"/products",class:"btn btn-primary",children:"Back to Products"}),Object(h.jsx)("button",{className:"btn btn-success",onClick:m,children:"Add To Cart"})]})]})]})})})]})},B=function(e){var t=e.product,c=e.type;return Object(h.jsxs)("div",{className:"col-sm",children:[Object(h.jsx)("img",{className:"card-img-top",src:t.image,alt:t.name}),Object(h.jsxs)("div",{class:"card-body",children:[Object(h.jsx)("h5",{class:"card-title",children:t.name}),Object(h.jsxs)("p",{class:"card-text",children:["Price : $",t.price]}),Object(h.jsx)(D.Link,{to:"product/".concat(c,"/").concat(t.id),class:"btn btn-primary",children:"View Product"})]})]})},H=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("type_1");case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error form productType1:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:c.map((function(e){return Object(h.jsx)(B,{product:e,type:"type_1"},e.id)}))})})},M=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("type_2");case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error for ProductType2:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:c.map((function(e){return Object(h.jsx)(B,{product:e,type:"type_2"},e.id)}))})})},$=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("type_3");case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error from ProductType3:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:c.map((function(e){return Object(h.jsx)(B,{product:e,type:"type_3"},e.id)}))})})},Q=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Products"}),Object(h.jsx)("h4",{className:"text-center",children:"Igneous Rocks"}),Object(h.jsx)(H,{}),Object(h.jsx)("hr",{}),Object(h.jsx)("h4",{className:"text-center",children:"Sedimentary Rocks"}),Object(h.jsx)(M,{}),Object(h.jsx)("hr",{}),Object(h.jsx)("h4",{className:"text-center",children:"Metamorphic Rock"}),Object(h.jsx)($,{})]})};c(96);var W=function(){var e=Object(R.b)();(function(){var t=Object(u.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("loadCart"),t.prev=1,t.next=4,k();case 4:c=t.sent,e({type:T,payload:c.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("Error from Home, loadCart: ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}})()();var t=Object(R.c)((function(e){return e.cart.reduce((function(e,t){return e+t.quantity}),0)}));return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(O,{quantity:t}),Object(h.jsxs)(j.g,{children:[Object(h.jsx)(j.d,{exact:!0,path:"/",component:U}),Object(h.jsx)(j.d,{exact:!0,path:"/products",component:Q}),Object(h.jsx)(j.d,{exact:!0,path:"/product/:type/:id",component:F}),Object(h.jsx)(j.d,{exact:!0,path:"/cart",component:S})]})]})},z=c(29),J=c(53),K=c(54),V=c(35),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload,n=Object(V.a)(e);switch(c){case T:return r;case E:var a,s=!1,i=Object(q.a)(n);try{for(i.s();!(a=i.n()).done;){var o=a.value;o.id===r.id&&(s=!0)}}catch(b){i.e(b)}finally{i.f()}return n=s?e.map((function(e){return e.id===r.id?Object(A.a)(Object(A.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(V.a)(e),[r]);case P:var u,j=!1,d=Object(q.a)(n);try{for(d.s();!(u=d.n()).done;){var l=u.value;l.id===r.id&&l.id>1&&(j=!0),n=j?e.map((function(e){return e.id===r.id?Object(A.a)(Object(A.a)({},e),{},{quantity:e.quantity-1}):e})):[].concat(Object(V.a)(e),[r])}}catch(b){d.e(b)}finally{d.f()}return n;default:return e}},Z=Object(z.combineReducers)({cart:Y}),G=Object(z.createStore)(Z,Object(J.composeWithDevTools)(Object(z.applyMiddleware)(K.a)));s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(R.a,{store:G,children:Object(h.jsxs)(D.BrowserRouter,{children:[" ",Object(h.jsx)(W,{})]})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.42d475f0.chunk.js.map