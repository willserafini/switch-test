import{bD as L,a1 as q,r as h,l as p,aa as se,aq as oe,bS as re,bT as ie,bU as ue,bV as de,A as ae,j as fe,u as me,a as ce,ao as ge,aD as ve,br as be,b as pe,a2 as ye,ax as Se,bW as R,aX as J,aI as he,aA as V,M as $,R as we}from"./main-A7BwrMDB.js";var j=(e=>(e.Asterisk="*",e.Hashtag="#",e))(j||{});function Ne(e,y){return L(e).getTime()-L(y).getTime()}const Ae={audio:!0,video:!1},Ce={offerToReceiveAudio:!0,offerToReceiveVideo:!1},Te={offerToReceiveAudio:!0,offerToReceiveVideo:!1},U={mediaConstraints:Ae,rtcOfferConstraints:Ce,rtcAnswerConstraints:Te};function ke(e){e==null||e.setMaxListeners(50);const y=q(),b=h(null),r=h(!1),c=p(()=>Object.entries(e).length>0),f=h((e==null?void 0:e.isMuted().audio)??!1),v=h((e==null?void 0:e.isOnHold().local)??!1),A=p(()=>c.value?e==null?void 0:e.isEnded():null),k=p(()=>c.value?e==null?void 0:e.local_identity.display_name:null),_=p(()=>c.value?e==null?void 0:e.local_identity.uri.user:null),N=p(()=>{if(c.value){const i=e.remote_identity.uri.user,m="*89";return i.startsWith(m)?i.replace(m,""):e==null?void 0:e.remote_identity.uri.user}return null}),a=p(()=>c.value?e==null?void 0:e.local_identity.display_name:null),H=p(()=>c.value?e==null?void 0:e.remote_identity.display_name:null),I=p(()=>c.value?e==null?void 0:e.direction:null),M=h(e==null?void 0:e.start_time),D=h(e==null?void 0:e.end_time);function O(){e==null||e.hold(),v.value=!0}function P(){e==null||e.unhold(),v.value=!1}function x(){e.mute(),f.value=!0}function C(){e.unmute(),f.value=!1}function W(){e==null||e.terminate()}function F(i){e==null||e.renegotiate(i)}function t(){e.answer(U)}function o(i,m){e==null||e.refer(i,m)}function d(){if(f.value)return C();x()}function n(){if(v.value)return P();O()}function s(i){e==null||e.on("confirmed",i)}function u(i){e==null||e.on("accepted",i)}function g(i){e==null||e.on("ended",i)}function S(i){e==null||e.on("failed",i)}function X(){y.removeSession(e)}function G(){return e==null?void 0:e.connection.getReceivers()[0].track}function z(){return e==null?void 0:e.connection.getSenders()[0].track}const E=h(0);function K(){r.value=!0;const i=new ie;i.addTrack(G()),i.addTrack(z());const m=i.getMixedTrack(),w=new MediaStream([m]);b.value=new MediaRecorder(w,{mimeType:"audio/webm",audioBitsPerSecond:128e3}),b.value.start(),E.value=Date.now(),b.value.ondataavailable=T=>{Q(T)}}function B(){var i,m;((i=b.value)==null?void 0:i.state)!=="inactive"&&(r.value=!1,(m=b.value)==null||m.stop())}async function Q(i){var w;const m=[];if(m.push(i.data),((w=b.value)==null?void 0:w.state)==="inactive"){const T=Date.now()-E.value,l=new Blob(m,{type:i.type}),ee=await ue(l,T),ne=_.value+"_"+N.value+"_"+Date.now()+".webm",te=new File([ee],ne);try{await de(te),ae("Audio saved"),b.value=null}catch{b.value=null}finally{E.value=0}}}function Y(){r.value?B():K()}function Z(i){const m={transportType:re.DTMF_TRANSPORT.RFC2833,duration:10,interToneGap:10};e==null||e.sendDTMF(i,m)}if(c.value){let i;e.on("connecting",()=>{x()}),e==null||e.on("confirmed",()=>{M.value=e.start_time,C(),i=setInterval(()=>{f.value=e.isMuted().audio,v.value=e.isOnHold().local},se.Second)}),e==null||e.on("ended",()=>{B(),clearInterval(i)}),e==null||e.on("failed",()=>{B(),clearInterval(i)}),e==null||e.on("sdp",m=>{if(m.sdp.length>4e3){const w=m.sdp.indexOf("a=rtpmap:102 H264/90000");if(w!==-1){const T=m.sdp.substring(0,w);m.sdp=T}}}),oe(()=>{f.value=e.isMuted().audio,v.value=e.isOnHold().local})}return{call:e,hasSession:c,isMuted:f,isOnHold:v,isEnded:A,isRecording:r,displayName:k,localNumber:_,remoteNumber:N,localName:a,remoteName:H,direction:I,startTime:M,endTime:D,terminate:W,renegotiate:F,answer:t,refer:o,toggleMute:d,toggleHold:n,onConfirmed:s,onAccepted:u,onEnded:g,onFailed:S,ignore:X,toggleRecording:Y,sendDTMF:Z,unmute:C}}const Me=()=>{const e=h({}),{t:y}=fe(),b=p(()=>Object.entries(e.value).length>0),r=q(),c=me(),f=ce(),v=ge(),A=ve(),k=be(),_=pe(),N=ye(),a=Se();function H(t,o,d){R.debug.disable(),R.debug.enable("JsSIP:*");const n=`sip:${t}@${f.sipHost.host}`,s=f.sipHost.websocket;return{sockets:[new R.WebSocketInterface(s)],uri:n,password:o,realm:f.sipHost.host,contact_uri:n,display_name:d,no_answer_timeout:120,register:!0,session_timers:!1,session_timers_force_refresher:!0,session_timers_refresh_method:"invite",user_agent:"2talk-WebApp"}}function I(t){const{startTime:o,endTime:d,localNumber:n,remoteNumber:s,direction:u}=ke(t),g=!!o.value&&!!d.value;return{startTime:o,endTime:d,localNumber:n,remoteNumber:s,direction:u,existsDuration:g}}function M(t){const{startTime:o,endTime:d,localNumber:n,remoteNumber:s,direction:u,existsDuration:g}=I(t),S=g?Ne(d.value,o.value):null;A.setCall({direction:u.value,status:g?"Finished":t.direction==="outgoing"?"Cancelled":"Missed",callId:t.id,date:o.value??new Date,duration:S,localNumber:n.value,remoteNumber:s.value}),t.direction==="outgoing"&&k.updateCallMessage(t.id,g?"FINISHED":"MISSED",S)}function D(t){var s;const{existsDuration:o,direction:d}=I(t);a.setHasTransfer(!1),a.setPhoneSelected({name:"",number:""}),(_.name!==we.Activity||A.type!=="call")&&!o&&d.value==="incoming"&&A.incrementCountCalls(),M(e.value[t.id]),delete e.value[t.id],r.removeSession(t),r.isTransferring&&((s=r.transfer.from)==null?void 0:s.id)===t.id&&r.setTransfer({}),t.remote_identity.uri.user.startsWith("3232100")&&(a.clearConferenceSession(),a.setConferenceRoom(""),a.setInConference({remoteNumber:"",room:""})),t.remote_identity.uri.user.includes(a.inConference.remoteNumber)&&a.setInConference({remoteNumber:"",room:""})}function O(){if(r.findSessionStartWithByCode("3232100")){a.setConferenceInProgress(!1);return}r.sessionsArray.filter(n=>a.conference.sessions.some(s=>n.remote_identity.uri.user.includes(s.number))).length===0&&a.conference.inProgress&&(a.setConferenceInProgress(!1),r.userAgentActive.ua.call(a.conference.room,U))}function P(t){if(t.originator==="local")return;const o=JSON.parse(t.request.body);o.type==="conference"&&a.setInConference({room:o.message.room,remoteNumber:o.message.remoteNumber})}function x(t,o){const d=J();t.setMaxListeners(20),t.on("registrationFailed",n=>{const s=f.findIndexMyNumbersByNumber(o);f.myNumbers[s].registrationFailed=n.cause,N.newPhone({id:window.crypto.randomUUID(),title:o,variant:"phone",message:y("Number registration failed")})}),t.on("registered",async()=>{d.newsubscribe(t);const n=f.findIndexMyNumbersByNumber(o);f.myNumbers[n].registrationFailed="",(r.userAgentArray.length===0||!0)&&r.setUserAgentActive({number:o,ua:t}),r.setUserAgentArray({number:o,ua:t}),(v.registeredNumbers[o]===void 0||!v.registeredNumbers[o])&&(N.newPhone({id:window.crypto.randomUUID(),title:o,variant:"phone",message:y("Number has been registered")}),v.updateNumberRegistering(o,!0))}),t.on("unregistered",n=>{const s=n.response?n.response.from.uri.user:null;if(s)throw r.removeUserAgent(s),v.registeredNumbers[s]!==void 0&&(N.newPhone({id:window.crypto.randomUUID(),title:s,variant:"phone",message:y("Number has been unregistered")}),v.updateNumberRegistering(s,!1)),{message:`The number was unregistered(${s})`,event:n}}),t.on("newMessage",n=>{P(n)}),t.on("newRTCSession",async n=>{if(a.setHasNewCall(!1),n.session.direction==="outgoing"){const u=n.session.remote_identity.uri.user;k.newCallMessage(n.session.id,n.session.local_identity.uri.user,n.session.remote_identity.uri.user),u.startsWith("3232100")&&!a.conference.room&&a.setInConference({room:u,remoteNumber:""})}const s=f.myNumbers.find(u=>u.numbersUnmasked===n.session.local_identity.uri.user&&u.dnd!==void 0&&u.dnd);if((f.onlineStatus==="dnd"||s)&&n.session.direction==="incoming"){n.session.terminate();return}e.value[n.session.id]=n.session,r.isTransferring||(r.setSessionActive(n.session),r.setSessionsArray(n.session)),e.value[n.session.id].direction==="outgoing"&&e.value[n.session.id].connection.addEventListener("track",async u=>{const g=new Audio;c.currentSpeaker&&g.setSinkId(c.currentSpeaker.deviceId),g.srcObject=u.streams[0],g.play(),r.setRemoteAudioStream(n.session.id,u.streams[0])}),e.value[n.session.id].on("peerconnection",u=>{u.peerconnection.addEventListener("track",async g=>{const S=new Audio;c.currentSpeaker&&S.setSinkId(c.currentSpeaker.deviceId),S.srcObject=g.streams[0],S.play(),r.setRemoteAudioStream(n.session.id,g.streams[0])})}),e.value[n.session.id].on("update",u=>{console.log("update",u)}),e.value[n.session.id].on("ended",u=>{console.log("remote end",u),D(n.session),O()}),e.value[n.session.id].on("failed",u=>{console.log("remote failed",u),D(n.session)})}),t.on("disconnected",n=>{throw{message:"Sip-Websocket was disconnected",event:n}})}async function C(t,o,d){const n=f.myNumbers.find(s=>s.numbersUnmasked===t);if(!(!n||!n.active)&&!r.hasUserAgentByNumber(t)){const s=new R.UA(H(t,o,d));return s.start(),x(s,t),s}}async function W(t){const o=[...r.userAgentArray],d=J(),n=o.findIndex(s=>s.number===t);if(n!==-1){const s=o[n];if(s.ua.isConnected()&&s.ua.stop(),r.removeUserAgent(t),r.userAgentArray.length===0){d.unSubscribe();return}n===0&&d.newsubscribe(r.userAgentArray[n].ua)}}function F(t,o=null){if(!t)return he(y("Dial a number to make the call"));const d=t.startsWith(j.Asterisk)||t.startsWith(j.Hashtag)?t:V($(t));if(f.myNumbers.length>0){for(const s of f.myNumbers)if(s.numbersUnmasked===d)return}const n=r.sessionsArray;for(const s of n)if(V($(s.remote_identity.uri.user))==d){r.setSessionActive(s),r.setOpenDialpad(!0);return}if(!o){r.userAgentActive.ua.call(d,U),a.setPhoneSelected({name:"",number:""});return}o.ua.call(d,U),a.setPhoneSelected({name:"",number:""})}return{sessions:e,hasSessions:b,register:C,unregister:W,newCall:F}};export{ke as a,U as o,Me as u};
//# sourceMappingURL=use-user-agent-gNSz9J2a.js.map
