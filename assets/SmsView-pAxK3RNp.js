import{bD as W,d as D,j as q,b as N,k as G,aj as U,a1 as i1,a4 as $,l as P,c,m as g,n as F,q as b,x as l1,f as a,B as u1,bG as d1,R as h,bx as p1,e as B,C as z,M as Y,t as V,z as a1,a as j,r as m,ay as h1,O as Q,s as C1,G as O,y as s1,bH as J,aA as R,aw as n1,aO as o1,bI as m1,au as v1,w as K,az as f1,U as b1,aq as _1,ae as T}from"./main-A7BwrMDB.js";import{u as w1}from"./use-user-agent-gNSz9J2a.js";import{C as y1,a as g1,b as S1,c as M1,B as L1,u as r1,d as x1}from"./ChatMeeting-8plBbq7X.js";import{_ as Z}from"./_plugin-vue_export-helper-x3n3nnut.js";import{v as k1,D as H1,s as B1}from"./DroddownContacts-lrXkBHej.js";import{_ as c1}from"./index-yeKH0v8d.js";import{I as X,G as e1}from"./BaseAvatar-cLayq0TK.js";import{S as F1,f as t1}from"./SidebarToogle-U6gwKzHv.js";import{M as D1}from"./MessageSms-vAK2MOtm.js";import{u as V1}from"./index-Gr4YhlML.js";import"./color-Ih_vWK5s.js";import"./BaseIcon.vue_vue_type_script_setup_true_lang-io_05Ke-.js";import"./user-dV8HVTng.js";import"./index-35H_NU9g.js";import"./IThreeDots-CDVNklVX.js";import"./isYesterday-klLVg_Mw.js";function Z1(M,s){const t=W(M),o=W(s);return+t==+o}const I1={class:"sms-header-right-container"},N1=["disabled"],U1=["disabled"],$1={class:"meeting-container",disabled:""},E1=D({__name:"SmsHeaderRightContent",setup(M){const{t:s}=q(),t=N(),o=G(),{newCall:l}=w1(),C=U(),_=i1(),e=$("dstNumber");function S(){if(_.userAgentArray.length===0)return u1(s("No active number"));e&&l(e.value)}async function y(){if(C.unknownNumberIsFavorite(e==null?void 0:e.value)){await d1(e==null?void 0:e.value),t.name===h.FavoritePhone&&await o.replace({name:h.SendSms,params:{id:e==null?void 0:e.value}});return}await p1(e==null?void 0:e.value,"phone")}const L=P(()=>t.name===h.Sms);return(v,f)=>(c(),g("div",I1,[F("button",{class:l1(["favorite-container",{"is-favorite":a(C).unknownNumberIsFavorite(a(e))}]),disabled:L.value,onClick:y},[b(y1,{class:"yellow"}),b(g1,{class:"blue"})],10,N1),F("button",{class:"call-container",disabled:L.value,onClick:S},[b(S1)],8,U1),F("button",$1,[b(M1)])]))}}),R1=Z(E1,[["__scopeId","data-v-3bebb13a"]]),T1=D({__name:"SmsNumber",setup(M){const s=$("dstNumber");return(t,o)=>(c(),B(a(c1),{as:"h2",size:16,class:"m-0"},{default:z(()=>[a1(V(a(Y)(String(a(s)))),1)]),_:1}))}}),z1={class:"d-flex gap-2"},q1={class:"sms-header-left-input-container"},A1=D({__name:"SmsHeaderLeftContent",setup(M){const{t:s}=q(),t=G(),o=N(),l=j(),C=U(),_=m();h1(_,{initialValue:!0});const e=m(3),S=m(0),y=m(e.value),L=m(!1),v=m([]),f=m([]),p=P(()=>!!o.query.number);function x(){L.value=!0}function I(){L.value=!1}async function n(u){v.value=[],f.value=[],S.value=0,y.value=e.value;const k=u.target.value,H=J(R(k))?R(k):k;if(H.length<3){I();return}try{const E=await B1(H);if(E){v.value=[],f.value=[];for await(const A of E)v.value.push({name:A.user_name,number:A.number,userId:A.user_id});f.value=v.value.slice(S.value,y.value)}}finally{x()}}async function i(u){if(u.userId===l.user.userId){await t.push({name:h.Home});return}await t.push({name:h.Directory,params:{id:u.userId},query:{number:u.number}})}function r(){S.value+=e.value,y.value+=e.value,f.value=[...f.value,...v.value.slice(S.value,y.value)]}async function d(u){const w=u.target.value;w||await t.push({name:h.Sms,query:{}});const k=J(R(w)),H=k?R(Y(w)):w;if(v.value.length===1&&H===v.value[0].number){const E=v.value[0];await i(E)}else C.getContactUnknownSmsByNumber(H)?(C.chatIsActiveIsFalsy(),await t.push({name:h.SendSms,params:{id:H}})):k&&(C.chatIsActiveIsFalsy(),await t.push({name:h.Sms,query:{number:H}}))}return Q(()=>{const u=o.query.number,w=u?String(u):null;w&&(_.value.value=w)}),(u,w)=>(c(),g("div",z1,[b(F1),C1((c(),g("div",{class:"sms-header-left-container",onFocusin:x},[F("div",null,[a(o).name===a(h).SendSms||a(o).name===a(h).FavoritePhone||p.value?(c(),B(e1,{key:0,"background-color":"type-unknown",radius:"5","container-size":"24"},{default:z(()=>[b(X,{size:"14.4"})]),_:1})):(c(),B(e1,{key:1,"background-color":"bg-subtle",radius:"5","container-size":"24"},{default:z(()=>[b(X,{size:"14.4",color:"type-directory"})]),_:1}))]),a(o).name===a(h).Sms?(c(),g(O,{key:0},[b(a(c1),{color:"text-secondary",size:16},{default:z(()=>[a1(V(a(s)("To"))+": ",1)]),_:1}),F("div",q1,[F("input",{ref_key:"inputRef",ref:_,type:"text",class:"sms-header-left-input",onInput:n,onBlur:d},null,544),L.value&&f.value.length>0?(c(),B(H1,{key:0,class:"sms-header-left-dropdown","match-contacts-length":v.value.length,users:f.value,onContactSelected:i,onLoadMore:r},null,8,["match-contacts-length","users"])):s1("",!0)])],64)):(c(),B(T1,{key:1}))],32)),[[a(k1),I]])]))}}),O1=Z(A1,[["__scopeId","data-v-7d9a84a4"]]),G1={class:"sms-header-container"},P1=D({__name:"BaseSMSHeader",setup(M){n1(t=>({a0d84fe0:a(s)}));const s=$("width");return(t,o)=>(c(),g("div",G1,[b(O1),b(R1)]))}}),Y1=Z(P1,[["__scopeId","data-v-dc512755"]]),j1={class:"new-sms-container"},Q1=o1('<svg xmlns="http://www.w3.org/2000/svg" width="248" height="201" viewBox="0 0 248 201" fill="none" data-v-60ca6138><path d="M123.567 200.503C191.811 200.503 247.134 155.619 247.134 100.252C247.134 44.8842 191.811 0 123.567 0C55.3227 0 0 44.8842 0 100.252C0 155.619 55.3227 200.503 123.567 200.503Z" fill="url(#paint0_linear_4109_78028)" data-v-60ca6138></path><g style="mix-blend-mode:multiply;" opacity="0.3" data-v-60ca6138><path fill-rule="evenodd" clip-rule="evenodd" d="M137.181 199.874C137.176 199.884 137.172 199.894 137.167 199.903L138.947 199.704C138.358 199.764 137.77 199.821 137.181 199.874ZM138.176 197.762C137.825 198.509 137.481 199.241 137.181 199.874C132.655 200.286 128.112 200.495 123.566 200.503C120.171 200.503 116.83 200.376 113.507 200.158C113.531 198.15 113.593 196.221 113.634 194.973C113.655 194.314 113.67 193.845 113.67 193.657C113.95 191.349 114.92 189.178 116.452 187.429C117.984 185.68 120.008 184.433 122.259 183.852C124.536 183.382 126.907 183.745 128.939 184.875C130.972 186.004 132.531 187.825 133.335 190.007C134.062 181.473 134.97 172.557 139.509 165.294C141.567 161.992 144.334 159.19 147.61 157.092C150.886 154.994 154.589 153.652 158.448 153.164C162.983 152.69 167.559 153.528 171.631 155.579L171.468 155.688C165.106 160.873 159.267 166.669 154.036 172.993C148.809 179.32 144.206 186.137 140.29 193.348C139.883 194.125 139.011 195.983 138.176 197.762ZM172.739 156.233C175.191 157.619 177.35 159.469 179.094 161.681C181.487 164.745 182.996 168.405 183.457 172.265C183.918 176.126 183.313 180.038 181.709 183.58C180.26 186.458 178.269 189.029 175.844 191.152C163.978 195.615 151.58 198.509 138.965 199.759C146.918 184.433 159.302 167.51 172.503 156.76C172.585 156.7 172.649 156.62 172.691 156.528C172.732 156.436 172.749 156.334 172.739 156.233Z" fill="#0676C5" data-v-60ca6138></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M239.278 65C232.949 51.3313 223.046 39.0816 210.492 29H62C59.7909 29 58 30.7909 58 33V61C58 63.2091 59.7909 65 62 65H239.278Z" fill="white" data-v-60ca6138></path><path d="M208 44H126V50H208V44Z" fill="#CBD5DB" data-v-60ca6138></path><path d="M119 44H96V50H119V44Z" fill="#CBD5DB" data-v-60ca6138></path><rect x="66" y="37" width="20" height="20" rx="4" fill="#0676C5" data-v-60ca6138></rect><circle cx="76" cy="47" r="4" fill="white" data-v-60ca6138></circle><rect x="94" y="61" width="126" height="62" rx="4" fill="white" data-v-60ca6138></rect><rect x="100" y="68" width="12" height="12" rx="2" fill="#0676C5" data-v-60ca6138></rect><circle cx="106" cy="74" r="2" fill="white" data-v-60ca6138></circle><path d="M208 71H116V77H208V71Z" fill="#CBD5DB" data-v-60ca6138></path><rect x="100" y="86" width="12" height="12" rx="2" fill="#0676C5" data-v-60ca6138></rect><circle cx="106" cy="92" r="2" fill="white" data-v-60ca6138></circle><path d="M188 89H116V95H188V89Z" fill="#CBD5DB" data-v-60ca6138></path><rect x="100" y="104" width="12" height="12" rx="2" fill="#0676C5" data-v-60ca6138></rect><circle cx="106" cy="110" r="2" fill="white" data-v-60ca6138></circle><path d="M201 107H116V113H201V107Z" fill="#CBD5DB" data-v-60ca6138></path><path d="M89.164 83.5224L79.1038 95.5947L84.4692 56.6953L86.4588 57.6901C88.5333 58.7273 89.8581 60.8328 89.8955 63.1518L89.164 83.5224Z" fill="#2F2E41" data-v-60ca6138></path><path d="M125.599 80.2832L149.868 108.725L162.574 101.927L133.111 73.6169C133.329 72.1661 133.146 70.6385 132.488 69.2057C130.687 65.2808 126.046 63.5589 122.121 65.3598C118.196 67.1605 116.474 71.8021 118.275 75.7269C119.622 78.6638 122.561 80.3663 125.599 80.2832Z" fill="#FFB8B8" data-v-60ca6138></path><path d="M95.3515 134.532L90.6568 123.13C90.6568 123.13 91.3274 115.082 105.412 113.07C119.496 111.058 146.235 109.046 146.235 109.046L137.001 94.6219L149.917 88.1641L155.316 92.5L163.147 100.742C168.133 108.675 165.115 120.943 158.307 124.471C151.5 128 145.565 129.166 145.565 129.166L95.3515 134.532Z" fill="#0676C5" data-v-60ca6138></path><path fill-rule="evenodd" clip-rule="evenodd" d="M101.209 198.866V189.584L96.4093 170.27C100.974 160.228 100.182 153.195 99.1569 144.087C98.8211 141.104 98.4603 137.898 98.2544 134.291L103.584 114.038L86.8167 112.398L81.4512 95.9297H60.1084L55.2948 110.685L25.1143 124.769L31.821 156.291L36.1593 171.113C53.5221 185.21 76.0334 195.133 101.209 198.866Z" fill="#0676C5" data-v-60ca6138></path><path fill-rule="evenodd" clip-rule="evenodd" d="M36.9386 171.741L40.8754 127.452L29.4739 122.757C29.4739 122.757 21.4257 123.428 19.4137 137.512C18.8865 141.202 18.3592 146.459 17.8682 152.207C23.2154 159.353 29.6323 165.912 36.9386 171.741Z" fill="#0676C5" data-v-60ca6138></path><path d="M72.0123 94.7419C60.9147 94.7419 51.9182 85.7455 51.9182 74.6478C51.9182 63.5502 60.9147 54.5537 72.0123 54.5537C83.11 54.5537 92.1064 63.5502 92.1064 74.6478C92.1064 85.7455 83.11 94.7419 72.0123 94.7419Z" fill="#FFB8B8" data-v-60ca6138></path><path d="M33.8305 115.836C36.9975 115.836 39.9218 115.569 42.8991 116.759C45.4542 119.093 49 120 51.6633 120.744C52.1926 120.744 53.6279 120.699 55.4364 120.919C65.0492 120.596 76.6549 114.997 88.1218 110.605C91 109.5 93.5 110 95.8716 111.02C91.3602 104.498 92.1814 95.3556 86.6921 90.4385C77.9558 82.6245 85.3267 71.2495 88.98 60.6495C89.0908 57.9003 87.4025 55.391 84.8101 54.4592L77.7157 51.913C54.8188 43.6952 38.3245 57.5668 35 78C34.1144 83.4431 34.7161 91.2134 35.9801 96.601C37.4008 102.662 34.8174 112.948 33.8305 115.836Z" fill="#2F2E41" data-v-60ca6138></path><defs data-v-60ca6138><linearGradient id="paint0_linear_4109_78028" x1="123.567" y1="0" x2="123.567" y2="200.503" gradientUnits="userSpaceOnUse" data-v-60ca6138><stop stop-color="#0676C5" stop-opacity="0.5" data-v-60ca6138></stop><stop offset="1" stop-color="#0676C5" stop-opacity="0" data-v-60ca6138></stop></linearGradient></defs></svg>',1),W1={class:"new-sms-content"},J1=D({__name:"NewSms",setup(M){const{t:s}=q();return(t,o)=>(c(),g("div",j1,[Q1,F("span",W1,V(a(s)("Enter a number or contact name to get started.")),1)]))}}),K1=Z(J1,[["__scopeId","data-v-60ca6138"]]),X1=100,ee=D({__name:"BaseChatSms",setup(M){const s=$("diffHeight"),t=U(),o=j(),l=N(),C=m([]);function _(n){const i=n.status.length-1,r=n.status[i].status==="failed",d=o.user.userId===n.srcUser;return!(r&&!d)}const e=m(),S=m([]),{y,directions:L}=m1(e),{top:v}=v1(L),f=m(!1),p=P(()=>n=>{const i=C;if(i.value.length===1||n===0)return!0;const d=t1(new Date(i.value[n].createdAt),"dd-MM-yyyy"),u=t1(new Date(i.value[n-1].createdAt),"dd-MM-yyyy");return d!==u});function x(n){var r,d,u;const i=(r=e.value)==null?void 0:r.querySelector(`[data-message="${n}"]`);if(n&&i){const w=i.offsetTop,k=i.offsetHeight,H=w-k;(d=e.value)==null||d.scrollTo({top:H}),window.history.pushState({},document.title,window.location.pathname);return}(u=e.value)==null||u.scrollTo({top:e.value.scrollHeight})}async function I(){const n=String(l.params.id),i=await t.getFirstMessageDateDateByNumber(n),r=t.getContactUnknownSmsByNumber(n);if(r&&Z1(r.firstMessageDate,new Date(i)))return;const d=e.value;if(!f.value&&y.value<=X1){f.value=!0,d.style.overflowY="hidden";const u=d.scrollHeight,w=y.value;await t.syncGetUnknownBatch({date:i,number:n}),setTimeout(()=>{f.value=!1,d.style.overflowY="auto";const k=d.scrollHeight;d.scrollTo({top:k-u+w})},50)}}return K([()=>l.params.id,()=>t.unknownSmsMessages],([n])=>{t.checkSmsUnknownRead(String(n)),C.value=t.unknownSmsMessages.filter(_),setTimeout(()=>{x(null)},100)},{deep:!0}),K(()=>s==null?void 0:s.value,n=>{if(n&&e.value){const i=e.value.scrollTop;e.value.scrollTop=i+n}}),Q(()=>{const n=String(l.params.id);t.checkSmsUnknownRead(n),C.value=t.unknownSmsMessages.filter(_),setTimeout(()=>{const i=l.query.dataMessage?String(l.query.dataMessage):null;x(i)},100),f1(e.value,"scroll",()=>{v.value&&I()})}),(n,i)=>(c(),g("div",{ref_key:"containerRef",ref:e,class:"base-chat-sms-container"},[(c(!0),g(O,null,b1(C.value,(r,d)=>(c(),g(O,{key:d},[p.value(d)?(c(),B(L1,{key:r.id,"date-string":r.createdAt},null,8,["date-string"])):s1("",!0),b(D1,{id:r.id,ref_for:!0,ref_key:"messageSmsRef",ref:S,date:r.createdAt,me:a(o).user.userId===r.srcUser,message:r.content,"src-user":r.srcUser,status:r.status,"src-number":r.srcNumber,"dst-number":r.dstNumber},null,8,["id","date","me","message","src-user","status","src-number","dst-number"])],64))),128))],512))}}),te=Z(ee,[["__scopeId","data-v-e4f45b3a"]]),ae={class:"new-sms-unknown-container"},se=o1('<div class="new-sms-unknown-icon-container" data-v-b63ab454><svg xmlns="http://www.w3.org/2000/svg" width="248" height="201" viewBox="0 0 248 201" fill="none" data-v-b63ab454><g clip-path="url(#clip0_4114_78891)" data-v-b63ab454><path d="M123.567 200.503C191.811 200.503 247.134 155.619 247.134 100.252C247.134 44.8842 191.811 0 123.567 0C55.3227 0 0 44.8842 0 100.252C0 155.619 55.3227 200.503 123.567 200.503Z" fill="url(#paint0_linear_4114_78891)" data-v-b63ab454></path><g style="mix-blend-mode:multiply;" opacity="0.3" data-v-b63ab454><path d="M137.167 199.903C138.184 197.761 139.709 194.456 140.29 193.348C144.206 186.137 148.809 179.32 154.036 172.993C159.267 166.669 165.106 160.873 171.468 155.688L171.631 155.579C167.559 153.528 162.983 152.69 158.448 153.164C154.589 153.652 150.886 154.994 147.61 157.092C144.334 159.19 141.567 161.992 139.509 165.294C134.97 172.557 134.062 181.473 133.335 190.007C132.531 187.825 130.972 186.004 128.939 184.875C126.907 183.745 124.536 183.382 122.259 183.852C120.008 184.433 117.984 185.68 116.452 187.429C114.92 189.178 113.95 191.349 113.67 193.657C113.67 194.202 113.543 197.089 113.507 200.158C116.83 200.376 120.171 200.503 123.566 200.503C128.703 200.494 133.836 200.228 138.947 199.704L137.167 199.903Z" fill="#0676C5" data-v-b63ab454></path></g><g style="mix-blend-mode:multiply;" opacity="0.3" data-v-b63ab454><path d="M179.095 161.681C177.35 159.469 175.191 157.619 172.739 156.233C172.749 156.334 172.732 156.436 172.691 156.528C172.65 156.62 172.585 156.7 172.503 156.76C159.302 167.51 146.918 184.433 138.965 199.759C151.58 198.509 163.978 195.615 175.844 191.152C178.269 189.029 180.26 186.458 181.709 183.58C183.313 180.038 183.918 176.126 183.457 172.265C182.996 168.405 181.487 164.745 179.095 161.681Z" fill="#0676C5" data-v-b63ab454></path></g><path d="M120 77H85V83H120V77Z" fill="#67748E" fill-opacity="0.3" data-v-b63ab454></path><rect x="61" y="26" width="20" height="20" rx="4" fill="url(#paint1_linear_4114_78891)" data-v-b63ab454></rect><rect x="85" y="26" width="150" height="47" rx="4" fill="white" data-v-b63ab454></rect><path d="M226 34H94V40H226V34Z" fill="#67748E" fill-opacity="0.25" data-v-b63ab454></path><path d="M209 47H94V53H209V47Z" fill="#67748E" fill-opacity="0.25" data-v-b63ab454></path><path d="M218 60H94V66H218V60Z" fill="#67748E" fill-opacity="0.25" data-v-b63ab454></path><circle cx="71" cy="36" r="4" fill="white" data-v-b63ab454></circle><path d="M211 140H176V146H211V140Z" fill="#67748E" fill-opacity="0.3" data-v-b63ab454></path><rect x="215" y="101" width="20" height="20" rx="4" fill="#0676C5" data-v-b63ab454></rect><rect x="61" y="101" width="150" height="35" rx="4" fill="white" data-v-b63ab454></rect><path d="M193 109H70V115H193V109Z" fill="#67748E" fill-opacity="0.25" data-v-b63ab454></path><path d="M198 122H70V128H198V122Z" fill="#67748E" fill-opacity="0.25" data-v-b63ab454></path><circle cx="225" cy="111" r="4" fill="white" data-v-b63ab454></circle><path d="M149.169 76.4819C149.06 76.966 148.987 77.4576 148.951 77.9527L110.238 100.287L100.832 94.8398L90.8086 107.968L106.533 119.172C107.807 120.067 109.335 120.528 110.891 120.489C112.447 120.45 113.95 119.912 115.177 118.954L155.125 87.4676C156.291 87.9002 157.531 88.0987 158.774 88.0518C160.016 88.0048 161.238 87.7132 162.368 87.1937C163.498 86.6743 164.514 85.9371 165.359 85.0245C166.204 84.1118 166.86 83.0415 167.291 81.8748C168.159 79.5222 168.058 76.9212 167.009 74.6433C165.96 72.3654 164.05 70.5971 161.698 69.7269C160.533 69.2946 159.295 69.0963 158.053 69.1435C156.812 69.1907 155.592 69.4826 154.464 70.0021C153.335 70.5217 152.32 71.2588 151.477 72.1713C150.634 73.0838 149.979 74.1537 149.55 75.3197C149.408 75.6861 149.293 76.0623 149.205 76.4455L149.169 76.4819Z" fill="#FFB8B8" data-v-b63ab454></path><path d="M109.712 98.1274C109.598 97.5551 109.36 97.0147 109.015 96.5441C108.67 96.0735 108.226 95.6842 107.714 95.4037L89.9559 85.4711C88.7853 84.5668 87.4478 83.9019 86.0201 83.5147C84.5925 83.1274 83.1026 83.0254 81.6355 83.2142C80.1684 83.4031 78.7529 83.8792 77.4699 84.6154C76.1869 85.3516 75.0615 86.3335 74.1581 87.5049C72.3418 89.8617 71.5307 92.8409 71.9014 95.7932C72.2721 98.7455 73.7946 101.432 76.1373 103.266L90.3008 117.956C90.6698 118.341 91.1112 118.649 91.5997 118.863C92.0882 119.077 92.614 119.193 93.1471 119.203C93.6803 119.213 94.2102 119.118 94.7065 118.922C95.2027 118.727 95.6555 118.436 96.0389 118.065C96.1856 117.933 96.3194 117.787 96.4383 117.629L99.1984 113.998L100.143 112.781L108.949 101.36C109.275 100.947 109.51 100.471 109.639 99.9614C109.808 99.3644 109.833 98.7359 109.712 98.1274Z" fill="#0676C5" data-v-b63ab454></path><path d="M68.3468 74.2483C80.5716 74.2483 90.4817 64.3382 90.4817 52.1134C90.4817 39.8886 80.5716 29.9785 68.3468 29.9785C56.122 29.9785 46.2119 39.8886 46.2119 52.1134C46.2119 64.3382 56.122 74.2483 68.3468 74.2483Z" fill="#FFB8B8" data-v-b63ab454></path><path d="M93.8047 147.699L48.8268 147.899C47.9752 147.768 47.1039 147.914 46.342 148.316C45.58 148.719 44.9678 149.355 44.5957 150.132C43.8694 151.64 43.1432 153.201 42.4532 154.763C40.7463 158.54 38.3313 165.004 36.1523 171.105C54.6919 186.158 79.1328 196.436 106.388 199.505L97.3092 151.24V150.895C97.1352 150.062 96.703 149.304 96.0739 148.73C95.4447 148.157 94.6507 147.796 93.8047 147.699Z" fill="#2F2E41" data-v-b63ab454></path><path d="M96.329 135.896C97.2188 134.553 102.866 125.582 100.723 115.069C100.575 114.289 100.381 113.519 100.142 112.763C99.1295 109.6 97.5209 106.66 95.4032 104.101C95.4032 103.393 95.4032 102.703 95.4032 102.013C95.0771 97.2263 93.0389 92.7168 89.6614 89.3092C86.2838 85.9017 81.7926 83.8236 77.0089 83.4553L52.2592 81.6394C49.0663 81.3892 45.8604 81.9198 42.9183 83.1852C39.9762 84.4506 37.3863 86.4128 35.3719 88.9027C34.8982 89.4798 34.4616 90.0863 34.0646 90.7185C32.5045 93.0749 31.4685 95.7387 31.0268 98.5299C30.5851 101.321 30.7479 104.175 31.5042 106.898L31.7221 107.824L34.355 119.39L38.7675 138.765L42.3992 154.962L42.7804 156.669C42.9857 157.566 43.489 158.367 44.2079 158.94C44.9268 159.514 45.8191 159.827 46.739 159.829H47.3927L95.2941 151.966C95.9554 151.852 96.5788 151.578 97.11 151.167C97.4297 150.906 97.7108 150.6 97.9452 150.259C98.2577 149.809 98.474 149.3 98.5802 148.762C98.6865 148.225 98.6805 147.671 98.5627 147.136L96.329 135.896Z" fill="#0676C5" data-v-b63ab454></path><path d="M60.6845 177.57C59.7548 175.162 57.9069 173.222 55.5471 172.177C53.1873 171.131 50.5089 171.066 48.1009 171.995L25.494 163.733L43.7793 113.707L27.9635 106.208L8.22552 166.911C7.65513 168.741 7.83123 170.722 8.7156 172.423C9.59997 174.124 11.1209 175.406 12.9466 175.99L42.7986 185.233C43.0366 185.754 43.3225 186.253 43.6523 186.722C45.1303 188.821 47.3806 190.249 49.9099 190.691C52.4391 191.134 55.0406 190.555 57.1437 189.082C58.9379 187.837 60.2621 186.026 60.9041 183.938C61.5462 181.851 61.4687 179.608 60.6845 177.57Z" fill="#FFB8B8" data-v-b63ab454></path><path d="M48.809 83.2552C45.8859 82.3757 42.7382 82.636 39.9992 83.9836C37.2603 85.3311 35.1334 87.6661 34.0464 90.5185C33.9367 90.778 33.8456 91.045 33.774 91.3174L31.4678 96.202L24.477 111.019C23.9913 112.06 23.9364 113.251 24.324 114.332C24.7117 115.414 25.5106 116.298 26.547 116.794L27.1462 117.029L28.508 117.429L34.337 119.245L44.6871 122.368L48.1372 123.421C48.6856 123.589 49.2617 123.647 49.8327 123.592C50.4036 123.537 50.958 123.369 51.4641 123.1C51.9701 122.83 52.4179 122.462 52.7818 122.019C53.1457 121.576 53.4186 121.065 53.5847 120.516C53.5847 120.316 53.6935 120.098 53.7298 119.898L56.9075 98.2721C57.3628 96.7543 57.5144 95.1616 57.3537 93.5852C57.193 92.0088 56.7232 90.4796 55.971 89.0849C55.2189 87.6902 54.1991 86.4576 52.9702 85.4573C51.7413 84.4569 50.3273 83.7086 48.809 83.2552Z" fill="#0676C5" data-v-b63ab454></path><path d="M88.6666 44.0702C84.6547 47.4683 79.7504 49.6413 74.5381 50.3303C69.3259 51.0193 64.0256 50.1951 59.2685 47.9561C63.4994 52.9678 71.5254 77.7175 71.5254 77.7175C71.5254 77.7175 48.8457 75.3388 45.6499 74.6487C26.729 70.6176 33.6109 21.6267 53.7665 21.8809C57.1803 21.8809 60.1583 22.3348 62.4281 24.877C63.3199 22.8086 64.8441 21.0759 66.7819 19.9276C68.7197 18.7792 70.9714 18.2744 73.2139 18.4853C75.4458 18.755 77.6023 19.4633 79.5594 20.5696C81.5164 21.6759 83.2354 23.1583 84.6174 24.9315C86.916 27.7188 88.5755 30.9762 89.479 34.4743C90.3825 37.9724 90.5082 41.6261 89.847 45.178L88.6666 44.0702Z" fill="#2F2E41" data-v-b63ab454></path></g><defs data-v-b63ab454><linearGradient id="paint0_linear_4114_78891" x1="123.567" y1="0" x2="123.567" y2="200.503" gradientUnits="userSpaceOnUse" data-v-b63ab454><stop stop-color="#0676C5" stop-opacity="0.5" data-v-b63ab454></stop><stop offset="1" stop-color="#0676C5" stop-opacity="0" data-v-b63ab454></stop></linearGradient><linearGradient id="paint1_linear_4114_78891" x1="62.8421" y1="27.3158" x2="79.1579" y2="46" gradientUnits="userSpaceOnUse" data-v-b63ab454><stop stop-color="#344767" data-v-b63ab454></stop><stop offset="1" stop-color="#141727" data-v-b63ab454></stop></linearGradient><clipPath id="clip0_4114_78891" data-v-b63ab454><rect width="247.134" height="200.503" fill="white" data-v-b63ab454></rect></clipPath></defs></svg></div>',1),ne={class:"new-sms-unknown-content"},oe={class:"new-sms-unknown-subtitle"},re=D({__name:"NewSmsUnknown",props:{number:{}},setup(M){const{t:s}=q(),t="2talk";return(o,l)=>(c(),g("div",ae,[se,F("span",ne,V(a(Y)(o.number))+" "+V(a(s)("is not a"))+" "+V(a(t))+" "+V(a(s)("user.")),1),F("span",oe,V(a(s)("You can only call and text via SMS with numbers outside your organization.")),1)]))}}),ce=Z(re,[["__scopeId","data-v-b63ab454"]]),ie={key:0,class:"base-content-container"},le=D({__name:"BaseSmsContent",setup(M){n1(C=>({"34ecd953":a(s)}));const s=$("width"),t=U(),o=N(),{number:l}=r1();return(C,_)=>a(o).name===a(h).Sms||a(t).unknownSmsMessages.length===0?(c(),g("div",ie,[a(l)?(c(),B(ce,{key:1,number:a(l)},null,8,["number"])):(c(),B(K1,{key:0}))])):(c(),B(te,{key:1}))}}),ue=Z(le,[["__scopeId","data-v-63b6d121"]]),de=D({__name:"SmsView",setup(M){const s=N(),t=G(),o=j(),l=U();V1();const{resizeSms:C}=r1(),_=m(""),e=m(0),S=m("0p"),y=m();function L(p){_.value=p}function v(p){e.value=p}function f(){new ResizeObserver(function(x){const I=x[0].contentRect;S.value=`${I.width}px`}).observe(y.value)}return T("chatDisabled",!0),T("dstNumber",_),T("diffHeight",e),T("width",S),_1(()=>{const p=s.query.number?String(s.query.number):null;p&&o.myNumbers.some(x=>x.numbersUnmasked===p)&&t.push({name:h.Home})}),Q(async()=>{if(f(),C(),s.name===h.SendSms||s.name===h.FavoritePhone){const p=String(s.params.id);_.value=p,l.chatIsActiveIsFalsy(),l.checkSmsUnknownRead(p),await l.getSmsMessages(p),l.unknownSmsMessages.length===0&&await t.push({name:h.Home})}}),(p,x)=>(c(),g("div",{ref_key:"containerRef",ref:y,class:"sms-main"},[b(Y1),b(ue),b(x1,{onDstNumber:L,onHeight:v})],512))}}),He=Z(de,[["__scopeId","data-v-b91064aa"]]);export{He as default};
//# sourceMappingURL=SmsView-pAxK3RNp.js.map
