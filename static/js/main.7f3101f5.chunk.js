(this["webpackJsonpip-address-tracker"]=this["webpackJsonpip-address-tracker"]||[]).push([[0],{43:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e(0),o=e.n(a),c=e(10),i=e.n(c),s=e(6),u=e(7),d=e(14),p=e(11),l=e.n(p),b=e(12),f=e(21),x=e(24),j={ip:"",data:{ip:"",location:"",timezone:"",isp:"",coord:{lat:"",lng:""}}},h=function(n,t){switch(t.type){case"LOAD_DATA":return Object(x.a)(Object(x.a)({},n),{},{data:t.payload});default:return n}},m=Object(a.createContext)(),g=function(n){var t=n.children,e=Object(a.useReducer)(h,j),o=Object(f.a)(e,2),c=o[0],i=o[1];return Object(r.jsx)(m.Provider,{value:{data:c.data,loadData:function(n){i({type:"LOAD_DATA",payload:n})}},children:t})},O=function(){var n=Object(b.a)(l.a.mark((function n(t,e){var r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://geo.ipify.org/api/v1?apiKey=".concat("at_aRNeciftOmdKxfRDpbSSisAXd5r1S").concat(t?"&ipAddress=".concat(t):e?"&domain=".concat(e):"")).then((function(n){return n.json()}));case 2:if(r=n.sent,console.log(r),!r.code){n.next=6;break}return n.abrupt("return",null);case 6:return a={ip:r.ip,location:"".concat(r.location.city,", ").concat(r.location.country),timezone:r.location.timezone,isp:r.isp,coord:{lat:r.location.lat,lng:r.location.lng}},n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}();function v(){var n=Object(s.a)(["\n  border: none;\n  border-radius: 0 10px 10px 0;\n  background-color: hsl(0, 0%, 17%);\n  height: 100%;\n  padding: 10px 20px;\n  margin: 0;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    background-color: hsl(0, 0%, 30%);\n  }\n"]);return v=function(){return n},n}function w(){var n=Object(s.a)(["\n  padding: 10px 20px;\n  border: none;\n  border-radius: 10px 0 0 10px;\n  font-size: 18px;\n  font-family: inherit;\n  width: 100%;\n  height: 100%;\n  position: relative;\n\n  &:focus {\n    outline: none;\n  }\n\n  @media screen and (max-width: 768px) {\n    font-size: 16px;\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(s.a)(["\n  height: 50px;\n  width: 500px;\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 80px;\n\n  @media screen and (max-width: 959px) {\n    width: 90%;\n    margin-bottom: 160px;\n  }\n"]);return y=function(){return n},n}var z=u.b.form(y()),k=u.b.input(w()),A=u.b.button(v()),S=new RegExp("^(https?://)?([da-z.-]+).([a-z.]{2,6})([/w .-]*)*/?$"),D=new RegExp("^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"),R=function(){var n=Object(a.useContext)(m).loadData,t=Object(a.useState)(""),e=Object(f.a)(t,2),o=e[0],c=e[1],i=function(){var t=Object(b.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o.match(D)){t.next=6;break}return t.next=3,O(o);case 3:e=t.sent,t.next=9;break;case 6:return t.next=8,O(null,o);case 8:e=t.sent;case 9:if(e){t.next=12;break}return d.b.error("Not found!\n        Try with wwww.domain.com\n        "),t.abrupt("return");case 12:n(e);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.jsxs)(z,{onSubmit:function(n){n.preventDefault(),o.match(D)||o.match(S)?i():d.b.error("Not found!\n        Try with wwww.domain.com\n        ")},children:[Object(r.jsx)(k,{placeholder:"Search for any IP address or domain",value:o,onChange:function(n){return c(n.target.value)}}),Object(r.jsx)(A,{children:Object(r.jsx)("img",{src:"/images/icon-arrow.svg",alt:"icon-arrow"})})]})};function C(){var n=Object(s.a)(["\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin: 10px 0 0;\n"]);return C=function(){return n},n}function T(){var n=Object(s.a)(["\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  margin: 0;\n  color: hsl(0, 0%, 59%);\n"]);return T=function(){return n},n}function I(){var n=Object(s.a)(["\n  &:not(:last-child) {\n    &::after {\n      content: '';\n      position: absolute;\n      top: 8%;\n      right: 0;\n      width: 1px;\n      height: 65px;\n      background-color: #f2f2f2;\n    }\n  }\n  padding: 0 20px;\n  position: relative;\n\n  @media screen and (max-width: 959px) {\n    border: 0 !important;\n    margin-bottom: 10px;\n    text-align: center;\n  }\n"]);return I=function(){return n},n}var P=u.b.div(I()),E=u.b.h2(T()),N=u.b.p(C()),L=function(n){var t=n.name,e=n.content;return Object(r.jsxs)(P,{children:[Object(r.jsx)(E,{children:t}),Object(r.jsx)(N,{children:e})]})};function U(){var n=Object(s.a)(["\n  background-color: #fff;\n  position: absolute;\n  top: 70%;\n\n  border-radius: 10px;\n  padding: 20px 0;\n  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);\n  width: 90%;\n  max-width: 800px;\n\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n\n  @media screen and (max-width: 959px) {\n    grid-template-columns: repeat(1, 1fr);\n    top: 45%;\n    max-width: 90%;\n  }\n"]);return U=function(){return n},n}var _=u.b.section(U()),J=function(){var n=Object(a.useContext)(m),t=n.data,e=n.loadData;Object(a.useEffect)((function(){(function(){var n=Object(b.a)(l.a.mark((function n(){var t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O();case 2:t=n.sent,e(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);var o=function(n){return n||"loading..."};return Object(r.jsxs)(_,{children:[Object(r.jsx)(L,{name:"IP Address",content:o(t.ip)}),Object(r.jsx)(L,{name:"Location",content:o(t.location)}),Object(r.jsx)(L,{name:"Timezone",content:o(t.timezone)}),Object(r.jsx)(L,{name:"ISP",content:o(t.isp)})]})};function K(){var n=Object(s.a)(["\n  margin: 0;\n  color: #fff;\n  text-align: center;\n\n  @media screen and (max-width: 768px) {\n    font-size: 1.5rem;\n  }\n"]);return K=function(){return n},n}function M(){var n=Object(s.a)(["\n  background-image: url('/images/pattern-bg.png');\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n"]);return M=function(){return n},n}var $=u.b.header(M()),B=u.b.h1(K()),F=function(){return Object(r.jsxs)($,{children:[Object(r.jsx)(B,{children:"IP Address Tracker"}),Object(r.jsx)(R,{}),Object(r.jsx)(J,{})]})},X=e(48),q=e(49),G=e(46),H=e(5),Q=e.n(H).a.icon({iconUrl:"/images/icon-location.svg",iconRetinaUrl:"/images/icon-location.svg",iconAnchor:null,shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:[46,56],className:"leaflet-venue-icon"}),V=e(47),W=function(n){var t=n.name;return Object(r.jsx)(V.a,{children:Object(r.jsx)("div",{children:t})})},Y=function(n){var t=n.coord,e=n.location;return Object(r.jsx)(G.a,{position:t,icon:Q,children:Object(r.jsx)(W,{name:e})})},Z=(e(41),function(){var n=Object(a.useContext)(m).data,t=n.coord,e=n.location;return Object(r.jsxs)(X.a,{center:t,zoom:13,zoomControl:!1,children:[Object(r.jsx)(q.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),Object(r.jsx)(Y,{coord:t,location:e})]})});e(42);function nn(){var n=Object(s.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  \n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Rubik', sans-serif;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .leaflet-container {\n    height: 100vh;\n    width: 100%;\n    z-index: -1 !important;\n  }\n"]);return nn=function(){return n},n}var tn=Object(u.a)(nn()),en=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(g,{children:[Object(r.jsx)(tn,{}),Object(r.jsx)(d.a,{}),Object(r.jsx)(F,{}),Object(r.jsx)(Z,{})]})})};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(en,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.7f3101f5.chunk.js.map