import{a as g,t as _,c as L}from"../chunks/disclose-version.CWWACKTL.js";import{p as Q,t as C,a as U,d as J,g as t,au as R,c as e,s as r,f as z,r as a}from"../chunks/runtime.Bs8s2Cqe.js";import{d as V,e as W,s as v}from"../chunks/render.ouz2EBKM.js";import{i as E}from"../chunks/if.CnEAnunN.js";import{e as X,i as Y}from"../chunks/each.Dei1YSep.js";import{s as Z}from"../chunks/class.Di9CBhOt.js";import{p as I}from"../chunks/proxy.C_PW4vrk.js";import{i as $}from"../chunks/entry.Ca5uQbHT.js";const tt=async({params:p,fetch:i})=>{const[o,u]=await Promise.all([i(`/api/members/${p.id}`),i("/api/books/?status=available")]),b=await o.json(),n=await u.json();return{member:b,books:n}},bt=Object.freeze(Object.defineProperty({__proto__:null,load:tt},Symbol.toStringTag,{value:"Module"}));function et(p,i,o,u){const b=p.target;J(i,I(o.data.books.find(n=>n.id===parseInt(b.value)))),J(u,I(t(i)?JSON.stringify(t(i),null,2):""))}var at=()=>window.history.back(),ot=_("<option> </option>"),st=_('<p class="text-sm text-gray-900"><span class="font-medium">Title:</span> </p> <p class="text-sm text-gray-900"><span class="font-medium">Author:</span> </p> <p class="text-sm text-gray-900"><span class="font-medium">Category:</span> </p> <p class="text-sm text-gray-900"><span class="font-medium">Status:</span> <span> </span></p>',1),rt=_('<p class="text-sm italic text-gray-500">Select a book to view details</p>'),it=_('<div class="container mx-auto gap-4 bg-white px-6 py-8"><div class="flex flex-row items-center gap-4"><button class="rounded-md bg-slate-200 px-2 py-1 text-xs hover:bg-slate-400">back</button> <h1 class="text-2xl font-bold"> </h1></div> <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"><form class="space-y-4"><div><label for="book" class="block text-sm font-medium text-gray-700">Select Book</label> <select id="book" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"><option>Select a book</option><!></select></div> <div><label for="details" class="block text-sm font-medium text-gray-700">Book Details</label> <div class="mt-1 max-h-48 overflow-y-auto rounded-md border border-gray-300 bg-gray-50 p-4"><!></div></div> <div><button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Checkout Book</button></div></form></div></div>');function ft(p,i){Q(i,!0);let o=R(null),u=R("");async function b(l){if(l.preventDefault(),!!t(o))try{(await fetch(`/api/borrows/${i.data.member.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({book_id:t(o).id})})).ok?$():alert("Failed to checkout book")}catch(s){console.error("Error:",s),alert("Failed to checkout book")}}var n=it(),x=e(n),T=e(x);T.__click=[at];var D=r(T,2),M=e(D);a(D),a(x);var N=r(x,2),y=e(N),h=e(y),k=r(e(h),2);k.__change=[et,o,i,u];var w=e(k);w.value=((w.__value="")==null,"");var q=r(w);X(q,17,()=>i.data.books,Y,(l,s)=>{var c=L(),j=z(c);E(j,()=>t(s).status==="available",f=>{var d=ot(),m={},O=e(d);a(d),C(()=>{m!==(m=t(s).id)&&(d.value=(d.__value=t(s).id)==null?"":t(s).id),v(O,`${t(s).title??""} by ${t(s).author??""}`)}),g(f,d)}),g(l,c)}),a(k),a(h);var S=r(h,2),P=r(e(S),2),G=e(P);E(G,()=>t(o),l=>{var s=st(),c=z(s),j=r(e(c));a(c);var f=r(c,2),d=r(e(f));a(f);var m=r(f,2),O=r(e(m));a(m);var F=r(m,2),B=r(e(F),2),K=e(B,!0);a(B),a(F),C(()=>{v(j,` ${t(o).title??""}`),v(d,` ${t(o).author??""}`),v(O,` ${t(o).category??""}`),Z(B,`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${t(o).status==="available"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`),v(K,t(o).status)}),g(l,s)},l=>{var s=rt();g(l,s)}),a(P),a(S);var A=r(S,2),H=e(A);a(A),a(y),a(N),a(n),C(()=>{v(M,`New Checkout for "${i.data.member.first_name+" "+i.data.member.last_name}"`),H.disabled=!t(o)}),W("submit",y,b),g(p,n),U()}V(["click","change"]);export{ft as component,bt as universal};