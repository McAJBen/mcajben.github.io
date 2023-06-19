"use strict";(self.webpackChunkhosting=self.webpackChunkhosting||[]).push([[75],{9410:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(4165),a=t(5861),s=t(5671),c=t(3144),u=t(4569),i=t.n(u),o=JSON.parse('{"y":"https://hangman-api.mcajben.com:8001"}'),l=function(){function e(){(0,s.Z)(this,e)}return(0,c.Z)(e,null,[{key:"createGame",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().post("".concat(o.y,"/game"),{user_name:n,time_limit:{type:"Cumulative",initial_ms:6e4,correct_guess_ms:5e3,wrong_guess_ms:-5e3}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},{key:"getGame",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o.y,"/game/").concat(n));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},{key:"createGuess",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().post("".concat(o.y,"/game/").concat(n,"/guess/").concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()},{key:"getLeaderboard",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o.y,"/leaderboard"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}]),e}();l.LETTERS=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]},9497:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(885),a=t(2791),s=t(1087),c=t(470),u=t(6693),i=t(184);function o(){var e,n=(0,c.TH)().pathname,t=(0,u.iP)(),o=(0,a.useState)(!1),l=(0,r.Z)(o,2),h=l[0],d=l[1],m=(0,a.useCallback)((function(){d((function(e){return!e}))}),[]),f=[{name:"Home",to:"/",selected:"/"===n},{name:"Hangman",to:"/hangman",selected:n.startsWith("/hangman")},{name:"Resume",to:"/resume",selected:n.startsWith("/resume")}];return e=t.width>450?(0,i.jsx)(i.Fragment,{children:f.map((function(e){return(0,i.jsx)("span",{className:"header-float-left",children:(0,i.jsx)(s.rU,{className:"header-button-link",to:e.to,children:e.name})},e.name)}))}):(0,i.jsx)("span",{onClick:m,className:"material-icons-round header-hamburger",children:"menu"}),(0,i.jsxs)("div",{className:"header-content",children:[(0,i.jsxs)("div",{className:"header-top-row",children:[e,(0,i.jsx)("span",{className:"header-float-right",children:(0,i.jsxs)(s.rU,{className:"header-button-link",to:"/resume",children:["Ben McAllister",(0,i.jsx)("img",{src:"/ben.jpg",className:"header-spinning-image",alt:"ben"})]})})]}),h&&f.map((function(e){return(0,i.jsx)("div",{className:"header-row",children:(0,i.jsx)(s.rU,{className:"header-button-link",to:e.to,children:e.name})},e.name)}))]})}},6693:function(e,n,t){t.d(n,{iP:function(){return s},o5:function(){return c},vh:function(){return u}});var r=t(885),a=t(2791);function s(){var e=(0,a.useState)({width:window.innerWidth,height:window.innerHeight}),n=(0,r.Z)(e,2),t=n[0],s=n[1],c=(0,a.useCallback)((function(){s({width:window.innerWidth,height:window.innerHeight})}),[]);return(0,a.useEffect)((function(){return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}})),t}function c(e){var n=(0,a.useState)(),t=(0,r.Z)(n,2),s=t[0],c=t[1];return(0,a.useEffect)((function(){if(void 0!==e){var n=Date.parse(e)-(new Date).getTime();if(n>0){c(!1);var t=setTimeout((function(){c(!0)}),n);return function(){clearTimeout(t)}}c(!0)}else c(void 0)}),[e]),s}function u(e){var n=(0,a.useState)(0),t=(0,r.Z)(n,2),s=t[0],c=t[1];return(0,a.useEffect)((function(){var n=Date.parse(e),t=Math.max(0,n-(new Date).getTime());if(c(t),t>0){var r=setInterval((function(){var e=Math.max(0,n-(new Date).getTime());c(e),e<=0&&clearInterval(r)}),90);return function(){clearInterval(r)}}}),[e]),s}},5075:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(4165),a=t(5861),s=t(885),c=t(2791),u=t(470),i=t(9410),o=t(9497),l=t(184);function h(){var e=(0,u.s0)(),n=(0,c.useState)(""),t=(0,s.Z)(n,2),h=t[0],d=t[1],m=(0,c.useState)(!1),f=(0,s.Z)(m,2),p=f[0],v=f[1],g=(0,c.useState)(),x=(0,s.Z)(g,2),w=x[0],Z=x[1],j=(0,c.useState)(),b=(0,s.Z)(j,2),k=b[0],y=b[1],N=(0,c.useCallback)((function(e){d(e.target.value)}),[]),S=(0,c.useCallback)((0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),localStorage.setItem("userName",h),n.next=4,i.Z.createGame(h);case 4:if(t=n.sent){n.next=9;break}return y("Error creating game"),v(!1),n.abrupt("return");case 9:e("/hangman/".concat(t.game_id));case 10:case"end":return n.stop()}}),n)}))),[e,h]),C=(0,c.useCallback)((function(e){"Enter"===e.key&&S()}),[S]);return(0,c.useEffect)((function(){var e=localStorage.getItem("userName");function n(){return(n=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.getLeaderboard();case 2:(n=e.sent)&&Z(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e&&d(e),function(){n.apply(this,arguments)}()}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{}),(0,l.jsxs)("div",{className:"hangman-start-content",children:[(0,l.jsx)("input",{className:"hangman-start-user-input",type:"text",onChange:N,value:h,placeholder:"Your name",onKeyDown:C}),(0,l.jsx)("div",{onClick:p?void 0:S,className:"hangman-start-button",children:"Start Game"}),k,w&&(0,l.jsxs)("table",{className:"hangman-start-leaderboard",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Place"}),(0,l.jsx)("th",{children:"User Name"}),(0,l.jsx)("th",{children:"Answer"}),(0,l.jsx)("th",{children:"Total Time"})]})}),(0,l.jsx)("tbody",{children:w.map((function(e,n){return(0,l.jsxs)("tr",{children:[(0,l.jsxs)("td",{children:[n+1,"."]}),(0,l.jsx)("td",{children:e.user_name}),(0,l.jsx)("td",{children:e.answer}),(0,l.jsxs)("td",{children:[Math.round(e.total_time/100)/10,"s"]})]},n)}))})]})]})]})}}}]);
//# sourceMappingURL=75.e20a58b4.chunk.js.map