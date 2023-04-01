import{S as pe,i as he,s as ue,w as S,x as q,y as F,f as b,t as I,z as N,k as C,a as w,q as J,l as E,m as z,c as x,h as v,r as K,n as D,b as U,C as h,u as ne,g as $e,d as de,D as ge,R as be,B as _e}from"../../../chunks/index-de56b907.js";import{c as ye,g as re,u as ae}from"../../../chunks/helpers-390da873.js";import{C as Ce,a as Ee}from"../../../chunks/CardTitle-40ef41db.js";import{C as ze}from"../../../chunks/CardLogo-7999b474.js";import{C as De}from"../../../chunks/Chip-8fea7f59.js";import{C as Ie}from"../../../chunks/ChipIcon-1ea81c32.js";import{M as ke}from"../../../chunks/MainTitle-0b268c8d.js";import{P as oe,a as Ve}from"../../../chunks/params-e8a18e1a.js";function ie(s,t,n){const e=s.slice();return e[5]=t[n],e}function ce(s){let t,n;return t=new Ie({props:{logo:s[5].logo,name:s[5].name,inverted:s[5].inverted}}),{c(){S(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,l){F(t,e,l),n=!0},p(e,l){const i={};l&1&&(i.logo=e[5].logo),l&1&&(i.name=e[5].name),l&1&&(i.inverted=e[5].inverted),t.$set(i)},i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function we(s){let t,n,e,l,i,$,y,_,o,k,a,c,g=s[0].company.name+"",m,V,Y,W,X,A,L=s[0].location+"",O,Z,H,R=s[0].description+"",Q,ee,M,T;n=new ze({props:{src:s[0].company.logo,alt:s[0].company.name,size:75}}),$=new Ee({props:{title:s[0].title}}),k=new De({props:{label:s[0].employmentType,size:"0.75em"}});let B=s[0].skills,p=[];for(let r=0;r<B.length;r+=1)p[r]=ce(ie(s,B,r));const ve=r=>I(p[r],1,1,()=>{p[r]=null});return{c(){t=C("div"),S(n.$$.fragment),e=w(),l=C("div"),i=C("h3"),S($.$$.fragment),y=w(),_=C("div"),o=w(),S(k.$$.fragment),a=w(),c=C("span"),m=J(g),V=w(),Y=C("div"),W=J(s[1]),X=w(),A=C("div"),O=J(L),Z=w(),H=C("div"),Q=J(R),ee=w(),M=C("div");for(let r=0;r<p.length;r+=1)p[r].c();this.h()},l(r){t=E(r,"DIV",{class:!0});var f=z(t);q(n.$$.fragment,f),e=x(f),l=E(f,"DIV",{class:!0});var u=z(l);i=E(u,"H3",{class:!0});var P=z(i);q($.$$.fragment,P),y=x(P),_=E(P,"DIV",{class:!0}),z(_).forEach(v),o=x(P),q(k.$$.fragment,P),P.forEach(v),a=x(u),c=E(u,"SPAN",{class:!0});var j=z(c);m=K(j,g),j.forEach(v),V=x(u),Y=E(u,"DIV",{class:!0});var d=z(Y);W=K(d,s[1]),d.forEach(v),X=x(u),A=E(u,"DIV",{class:!0});var G=z(A);O=K(G,L),G.forEach(v),Z=x(u),H=E(u,"DIV",{class:!0});var le=z(H);Q=K(le,R),le.forEach(v),ee=x(u),M=E(u,"DIV",{class:!0});var se=z(M);for(let te=0;te<p.length;te+=1)p[te].l(se);se.forEach(v),u.forEach(v),f.forEach(v),this.h()},h(){D(_,"class","experience-title-divider svelte-1cb9yhz"),D(i,"class","experience-title svelte-1cb9yhz"),D(c,"class","experience-company-name svelte-1cb9yhz"),D(Y,"class","experience-period svelte-1cb9yhz"),D(A,"class","experience-location svelte-1cb9yhz"),D(H,"class","experience-description svelte-1cb9yhz"),D(M,"class","experience-skills svelte-1cb9yhz"),D(l,"class","experience-data svelte-1cb9yhz"),D(t,"class","experience svelte-1cb9yhz")},m(r,f){U(r,t,f),F(n,t,null),h(t,e),h(t,l),h(l,i),F($,i,null),h(i,y),h(i,_),h(i,o),F(k,i,null),h(l,a),h(l,c),h(c,m),h(l,V),h(l,Y),h(Y,W),h(l,X),h(l,A),h(A,O),h(l,Z),h(l,H),h(H,Q),h(l,ee),h(l,M);for(let u=0;u<p.length;u+=1)p[u].m(M,null);T=!0},p(r,f){const u={};f&1&&(u.src=r[0].company.logo),f&1&&(u.alt=r[0].company.name),n.$set(u);const P={};f&1&&(P.title=r[0].title),$.$set(P);const j={};if(f&1&&(j.label=r[0].employmentType),k.$set(j),(!T||f&1)&&g!==(g=r[0].company.name+"")&&ne(m,g),(!T||f&1)&&L!==(L=r[0].location+"")&&ne(O,L),(!T||f&1)&&R!==(R=r[0].description+"")&&ne(Q,R),f&1){B=r[0].skills;let d;for(d=0;d<B.length;d+=1){const G=ie(r,B,d);p[d]?(p[d].p(G,f),b(p[d],1)):(p[d]=ce(G),p[d].c(),b(p[d],1),p[d].m(M,null))}for($e(),d=B.length;d<p.length;d+=1)ve(d);de()}},i(r){if(!T){b(n.$$.fragment,r),b($.$$.fragment,r),b(k.$$.fragment,r);for(let f=0;f<B.length;f+=1)b(p[f]);T=!0}},o(r){I(n.$$.fragment,r),I($.$$.fragment,r),I(k.$$.fragment,r),p=p.filter(Boolean);for(let f=0;f<p.length;f+=1)I(p[f]);T=!1},d(r){r&&v(t),N(n),N($),N(k),ge(p,r)}}}function xe(s){let t,n;return t=new Ce({props:{margin:"0px 0px 20px 0px",tiltDegree:2,$$slots:{default:[we]},$$scope:{ctx:s}}}),{c(){S(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,l){F(t,e,l),n=!0},p(e,[l]){const i={};l&257&&(i.$$scope={dirty:l,ctx:e}),t.$set(i)},i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function Pe(s,t,n){let{experience:e}=t;const l=ye(e.period.from,e.period.to),i=`${re(e.period.from.getMonth())} ${e.period.from.getFullYear()}`,$=e.period.to?`${re(e.period.to.getMonth())} ${e.period.to.getFullYear()}`:"Present",y=`${i} - ${$} · ${l} month${l>1?"s":""}`;return s.$$set=_=>{"experience"in _&&n(0,e=_.experience)},[e,y]}class Me extends pe{constructor(t){super(),he(this,t,Pe,xe,ue,{experience:0})}}function fe(s,t,n){const e=s.slice();return e[2]=t[n],e}function Te(s){let t;return{c(){t=J(s[1])},l(n){t=K(n,s[1])},m(n,e){U(n,t,e)},p:_e,d(n){n&&v(t)}}}function me(s){let t,n;return t=new Me({props:{experience:s[2]}}),{c(){S(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,l){F(t,e,l),n=!0},p:_e,i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function Be(s){let t,n,e,l,i,$,y;document.title=t=ae(s[1],oe),l=new ke({props:{$$slots:{default:[Te]},$$scope:{ctx:s}}});let _=s[0],o=[];for(let a=0;a<_.length;a+=1)o[a]=me(fe(s,_,a));const k=a=>I(o[a],1,1,()=>{o[a]=null});return{c(){n=w(),e=C("div"),S(l.$$.fragment),i=w(),$=C("div");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){be("svelte-s4huv4",document.head).forEach(v),n=x(a),e=E(a,"DIV",{class:!0});var g=z(e);q(l.$$.fragment,g),i=x(g),$=E(g,"DIV",{class:!0});var m=z($);for(let V=0;V<o.length;V+=1)o[V].l(m);m.forEach(v),g.forEach(v),this.h()},h(){D($,"class","experience-experiences svelte-l1ygh2"),D(e,"class","experience svelte-l1ygh2")},m(a,c){U(a,n,c),U(a,e,c),F(l,e,null),h(e,i),h(e,$);for(let g=0;g<o.length;g+=1)o[g].m($,null);y=!0},p(a,[c]){(!y||c&2)&&t!==(t=ae(a[1],oe))&&(document.title=t);const g={};if(c&32&&(g.$$scope={dirty:c,ctx:a}),l.$set(g),c&1){_=a[0];let m;for(m=0;m<_.length;m+=1){const V=fe(a,_,m);o[m]?(o[m].p(V,c),b(o[m],1)):(o[m]=me(V),o[m].c(),b(o[m],1),o[m].m($,null))}for($e(),m=_.length;m<o.length;m+=1)k(m);de()}},i(a){if(!y){b(l.$$.fragment,a);for(let c=0;c<_.length;c+=1)b(o[c]);y=!0}},o(a){I(l.$$.fragment,a),o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)I(o[c]);y=!1},d(a){a&&v(n),a&&v(e),N(l),ge(o,a)}}}function Se(s){const{items:t,title:n}=Ve;return[t,n]}class je extends pe{constructor(t){super(),he(this,t,Se,Be,ue,{})}}export{je as default};