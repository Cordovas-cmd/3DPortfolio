import{S as o,P as n,W as e,T as t,M as i,a as r,b as a,A as s,c as d,G as c,O as l,d as w,B as p,e as u,f as m,g as f}from"./vendor.6334b835.js";!function(){const o=document.createElement("link").relList;if(!(o&&o.supports&&o.supports("modulepreload"))){for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver((o=>{for(const e of o)if("childList"===e.type)for(const o of e.addedNodes)"LINK"===o.tagName&&"modulepreload"===o.rel&&n(o)})).observe(document,{childList:!0,subtree:!0})}function n(o){if(o.ep)return;o.ep=!0;const n=function(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),"use-credentials"===o.crossorigin?n.credentials="include":"anonymous"===o.crossorigin?n.credentials="omit":n.credentials="same-origin",n}(o);fetch(o.href,n)}}();const y=new o,g=new n(75,window.innerWidth/window.innerHeight,.1,1e3),b=new e({canvas:document.querySelector("#bg")});b.setPixelRatio(window.devicePixelRatio),b.setSize(window.innerWidth,window.innerHeight),g.position.setZ(30),b.render(y,g);const h=new t(10,3,16,100),z=new i({color:16737095}),x=new r(h,z);y.add(x);const v=new a(16777215);v.position.set(20,20,20);const j=new s(16777215);y.add(v,j);const k=new d(v),A=new c(200,50);y.add(k,A);const S=new l(g,b.domElement);Array(200).fill().forEach((function(){const o=new m(.25,24,24),n=new i({color:16777215}),e=new r(o,n),[t,a,s]=Array(3).fill().map((()=>f.randFloatSpread(100)));e.position.set(t,a,s),y.add(e)}));const L=(new w).load("space.jpg");y.background=L;const P=(new w).load("love.jpg"),q=new r(new p(5,5,5),new u({map:P}));y.add(q);const E=(new w).load("marik.jpg"),M=(new w).load("normal.jpg"),N=new r(new m(5,32,32),new i({map:E,normalMap:M}));function R(){const o=document.body.getBoundingClientRect().top;N.rotation.x+=.05,N.rotation.y+=.075,N.rotation.z+=.05,q.rotation.y+=.01,q.rotation.z+=.01,g.position.z=-.01*o,g.position.x=-2e-4*o,g.rotation.y=-2e-4*o}y.add(N),N.position.z=30,N.position.setX(-10),q.position.z=-5,q.position.x=2,document.body.onscroll=R,document.body.onclick=R,R(),function o(){requestAnimationFrame(o),x.rotation.x+=.01,x.rotation.y+=.005,x.rotation.z+=.01,N.rotation.x+=.01,N.rotation.y+=.005,N.rotation.z+=.01,S.update(),b.render(y,g)}();