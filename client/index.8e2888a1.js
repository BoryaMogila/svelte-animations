import{S as e,i as t,s as n,e as s,c as a,b as i,f as o,h as d,L as c,j as r,k as l,V as u,M as m,n as p,W as v,X as f}from"./client.c7c40613.js";import"./index.18e1b837.js";import{s as x}from"./index.98a06884.js";function w(e){let t,n;function s(s){t=s.clientX,n=s.clientY,e.dispatchEvent(new CustomEvent("panstart",{detail:{x:t,y:n}})),window.addEventListener("mousemove",a),window.addEventListener("mouseup",i)}function a(s){const a=s.clientX-t,i=s.clientY-n;t=s.clientX,n=s.clientY,e.dispatchEvent(new CustomEvent("panmove",{detail:{x:t,y:n,dx:a,dy:i}}))}function i(s){t=s.clientX,n=s.clientY,e.dispatchEvent(new CustomEvent("panend",{detail:{x:t,y:n}})),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",i)}return e.addEventListener("mousedown",s),{destroy(){e.removeEventListener("mousedown",s)}}}function E(e){let t,n,f,x;return{c(){t=s("div"),n=s("div"),this.h()},l(e){t=a(e,"DIV",{class:!0});var s=i(t);n=a(s,"DIV",{class:!0,style:!0}),i(n).forEach(o),s.forEach(o),this.h()},h(){d(n,"class","box svelte-1l9olct"),c(n,"transform","translate("+e[1].x+"px,"+e[1].y+"px)\n          rotate("+.2*e[1].x+"deg)"),d(t,"class","wrap svelte-1l9olct")},m(s,a){r(s,t,a),l(t,n),x=[u(f=w.call(null,n)),m(n,"panstart",e[2]),m(n,"panmove",e[3]),m(n,"panend",e[4])]},p(e,[t]){2&t&&c(n,"transform","translate("+e[1].x+"px,"+e[1].y+"px)\n          rotate("+.2*e[1].x+"deg)")},i:p,o:p,d(e){e&&o(t),v(x)}}}function y(e,t,n){let s;const a=x({x:0,y:0},{stiffness:.2,damping:.4});return f(e,a,e=>n(1,s=e)),[a,s,function(){n(0,a.stiffness=n(0,a.damping=1,a),a)},function(e){a.update(t=>({x:t.x+e.detail.dx,y:t.y+e.detail.dy}))},function(e){n(0,a.stiffness=.2,a),n(0,a.damping=.4,a),a.set({x:0,y:0})}]}export default class extends e{constructor(e){super(),t(this,e,y,E,n,{})}}
