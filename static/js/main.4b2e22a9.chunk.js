(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),i=n.n(o),r=(n(9),n(10),n(1)),l=n(13);var u=function(e){var t=e.config,n=e.play,o=e.hightLightKey,i=Object(a.useState)("piano-keys key-white"),l=Object(r.a)(i,2),u=l[0],s=l[1];return Object(a.useEffect)((function(){o&&o.key===t[2]&&s("piano-keys key-white key-highlight"),setTimeout((function(){s("piano-keys key-white")}),400)}),[o]),c.a.createElement("div",{className:u,onClick:function(){n(t)}},c.a.createElement("div",{className:"key"},t[2].toUpperCase()),c.a.createElement("div",{className:"node"},t[0]+t[1]))};var s=function(e){var t=e.config,n=e.play;return c.a.createElement("div",{className:"piano-keys key-black",style:{left:t[2]+"px",top:"5px"},onClick:function(){n(t)}},c.a.createElement("div",{className:"key"},t[3].toUpperCase()),c.a.createElement("div",{className:"node"},t[0],t[1]))},m=[["C",3,"q"],["D",3,"w"],["E",3,"e"],["F",3,"r"],["G",3,"t"],["A",3,"y"],["B",3,"u"],["C",4,"i"],["D",4,"o"],["E",4,"p"],["F",4,"z"],["G",4,"x"],["A",4,"c"],["B",4,"v"],["C",5,"b"],["D",5,"n"],["E",5,"m"],["F",5,","],["G",5,"."],["A",5,"/"],["B",5,"l"]],p={q:m[0],w:m[1],e:m[2],r:m[3],t:m[4],y:m[5],u:m[6],i:m[7],o:m[8],p:m[9],z:m[10],x:m[11],c:m[12],v:m[13],b:m[14],n:m[15],m:m[16],",":m[17],".":m[18],"/":m[19],l:m[20]},y=[["C#",3,26,"1"],["D#",3,68,"2"],["F#",3,152,"3"],["G#",3,194,"4"],["A#",3,236,"5"],["C#",4,320,"6"],["D#",4,362,"7"],["F#",4,446,"8"],["G#",4,488,"9"],["A#",4,530,"0"],["C#",5,614,"d"],["D#",5,656,"f"],["F#",5,740,"g"],["G#",5,782,"h"],["A#",5,824,"j"]],d={1:y[0],2:y[1],3:y[2],4:y[3],5:y[4],6:y[5],7:y[6],8:y[7],9:y[8],0:y[9],d:y[10],f:y[11],g:y[12],h:y[13],j:y[14]};var f=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),n=t[0],o=t[1],i=function(e){return window.piano.play(e[0],e[1],2)},f=m.map((function(e,t){return c.a.createElement(u,{config:e,key:t,play:i,hightLightKey:n})})),h=y.map((function(e,t){return c.a.createElement(s,{config:e,key:t,play:i,hightLightKey:n})})),v=function(e){var t=e.key,n=p[t]||d[t];n&&(o({key:t,uuid:Object(l.a)()}),i(n))};return Object(a.useEffect)((function(){window.document.body.addEventListener("keypress",v)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Piano component"),c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"piano"},h,c.a.createElement("div",null,f))))};var h=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Play your piano"),c.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.4b2e22a9.chunk.js.map