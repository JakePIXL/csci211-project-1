import{a as i,t as l,c as I}from"../chunks/disclose-version.CWWACKTL.js";import"../chunks/legacy.DZDO77d0.js";import{p as J,a as K,d as _,c as e,f as O,g as a,t as E,b as g,n as N,r as t,s as d}from"../chunks/runtime.Bs8s2Cqe.js";import{d as Q,s as n}from"../chunks/render.ouz2EBKM.js";import{i as F}from"../chunks/if.CnEAnunN.js";import{e as R,i as S}from"../chunks/each.Dei1YSep.js";import{s as T}from"../chunks/attributes.Da7CgcoU.js";import{i as U}from"../chunks/lifecycle.CksSxylQ.js";import{o as V}from"../chunks/index-client.BSckvdmv.js";var W=()=>window.history.back(),X=l('<div class="text-center">Loading...</div>'),Y=l('<div class="text-red-500"> </div>'),Z=l('<tr><td class="whitespace-nowrap px-6 py-4"> </td><td class="whitespace-nowrap px-6 py-4"> </td><td class="whitespace-nowrap px-6 py-4"> </td><td class="whitespace-nowrap px-6 py-4"><a class="text-blue-600 hover:text-blue-900">Edit</a></td></tr>'),tt=l('<div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Name</th><th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Email</th><th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Phone</th><th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Actions</th></tr></thead><tbody class="divide-y divide-gray-200 bg-white"></tbody></table></div>'),et=l('<div class="container mx-auto px-4 py-8"><div class="mb-6 flex items-center justify-between"><div class="flex flex-row items-center gap-4"><button class="rounded-md bg-slate-200 px-2 py-1 text-xs hover:bg-slate-400">back</button> <h1 class="text-2xl font-bold">Members</h1></div> <a href="/members/new" class="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Add New Member</a></div> <!></div>');function nt(L,P){J(P,!1);let w=g([]),k=g(!0),v=g(null);V(async()=>{try{const s=await fetch("/api/members/");_(w,await s.json())}catch{_(v,"Failed to load members")}finally{_(k,!1)}}),U();var x=et(),m=e(x),M=e(m),$=e(M);$.__click=[W],N(2),t(M),N(2),t(m);var q=d(m,2);F(q,()=>a(k),s=>{var p=X();i(s,p)},s=>{var p=I(),z=O(p);F(z,()=>a(v),f=>{var r=Y(),c=e(r,!0);t(r),E(()=>n(c,a(v))),i(f,r)},f=>{var r=tt(),c=e(r),j=d(e(c));R(j,5,()=>a(w),S,(B,o)=>{var u=Z(),b=e(u),C=e(b,!0);t(b);var h=d(b),D=e(h,!0);t(h);var y=d(h),G=e(y,!0);t(y);var A=d(y),H=e(A);t(A),t(u),E(()=>{n(C,a(o).first_name+" "+a(o).last_name),n(D,a(o).email),n(G,a(o).phone||"-"),T(H,"href",`/members/${a(o).id??""}`)}),i(B,u)}),t(j),t(c),t(r),i(f,r)},!0),i(s,p)}),t(x),i(L,x),K()}Q(["click"]);export{nt as component};
