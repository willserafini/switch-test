import{bC as c,l as o,R as s}from"./main-A7BwrMDB.js";function a(){const u=c();let i;const f=o(()=>(n,r)=>{if((n===s.Directory||n===s.FavoriteDirectory)&&(i="directory"),!r)return!1;const t=u.typings[i];if(!t)return!1;const e=t[r];return e?e.isTyping??!1:!1}),p=o(()=>(n,r)=>{if((n===s.Group||n===s.FavoriteGroup)&&(i="group"),!r)return[];const t=u.typings[i];if(!t)return[];const e=t==null?void 0:t[r];return e?e||[]:[]}),y=o(()=>n=>{const r=p.value("group",n);return r.length>0?r[0]:-1});return{isTyping:f,typingGroup:p,typingGroupUserId:y}}export{a as u};
//# sourceMappingURL=use-typing-AKUAkgng.js.map
