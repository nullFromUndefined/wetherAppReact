(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(2),c=a.n(n),s=a(5),r=a.n(s),i=(a(14),a(1)),u=a.n(i),l=a(3),o=a(6),h=a(7),p=a(9),d=a(8),j=(a(16),"e93da1268f6107847e8e343567ca21a2"),m="OqA15IgvA2dJfjZ91Ivs-MoPn9LwvH7Op3EUU1tBflo";function f(t){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(j)).then((function(t){return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(u.a.mark((function t(e,a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.unsplash.com/search/photos?page=1&query=".concat(e,"-").concat(a,"&client_id=").concat(m)).then((function(t){return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t){var e="\u0441\u0432\u0435\u0442\u043b\u0430\u044f"===t.target.textContent?"\u0442\u0435\u043c\u043d\u0430\u044f":"\u0441\u0432\u0435\u0442\u043b\u0430\u044f";t.target.textContent=e,document.querySelector("body").classList.toggle("dark-theme")}function g(t){var e="\u043f\u043b\u0438\u0442\u043a\u0443"===t.target.textContent?"\u0441\u043f\u0438\u0441\u043e\u043a":"\u043f\u043b\u0438\u0442\u043a\u0443";t.target.textContent=e,document.querySelector(".images-city").classList.toggle("two-columns")}var y=a(0),w=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).watchWeather=Object(l.a)(u.a.mark((function t(){var e,a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=document.querySelector("#input-city").value){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,f(e);case 5:return a=t.sent,n.setState({valueCity:a}),t.next=9,v(n.state.valueCity.name,n.state.valueCity.weather[0].main);case 9:c=t.sent,n.setState({pictures:c.results,requestPictures:c.results});case 11:case"end":return t.stop()}}),t)}))),n.filterImages=function(t){var e=t.target,a=e.dataset.filter;document.querySelector(".choice").classList.remove("choice"),e.classList.add("choice"),n.setState({pictures:n.state.requestPictures.filter((function(t){return"width"===a?t.width>t.height:"height"!==a||t.width<t.height}))})},n.state={valueCity:null,pictures:null,requestPictures:null},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)("div",{class:"change-theme",children:["\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443: ",Object(y.jsx)("span",{onClick:O,children:"\u0442\u0435\u043c\u043d\u0430\u044f"})]}),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("input",{type:"text",name:"user_name",id:"input-city"}),Object(y.jsx)("button",{onClick:this.watchWeather,children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u0433\u043e\u0434\u0443"})]}),!!this.state.valueCity&&Object(y.jsxs)("div",{className:"weather",children:[Object(y.jsx)("div",{children:this.state.valueCity.name}),Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(this.state.valueCity.weather[0].icon,".png"),alt:""})}),Object(y.jsxs)("div",{children:[(t=this.state.valueCity.main.temp,Math.floor(t-273.15))," ","\u2103"]})]}),!!this.state.pictures&&Object(y.jsxs)("div",{className:"images-block",children:[Object(y.jsxs)("div",{className:"filter-group",children:[Object(y.jsxs)("div",{className:"filter",onClick:this.filterImages,children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0444\u043e\u0442\u043e:\xa0",Object(y.jsx)("span",{className:"choice","data-filter":"all",children:"\u0412\u0441\u0435\xa0"}),Object(y.jsx)("span",{"data-filter":"width",children:"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435\xa0"}),Object(y.jsx)("span",{"data-filter":"height",children:"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435"})]}),Object(y.jsxs)("div",{className:"filter",onClick:g,children:["\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0434\u0438\u0437\u0430\u0439\u043d \u043d\u0430: ",Object(y.jsx)("span",{children:"\u0441\u043f\u0438\u0441\u043e\u043a"})]})]}),Object(y.jsx)("div",{className:"images-city",children:this.state.pictures.map((function(t){return Object(y.jsx)("div",{className:"image",children:Object(y.jsx)("img",{src:t.urls.small,alt:""})},t.id)}))})]})]});var t}}]),a}(c.a.Component);r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(w,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.69637744.chunk.js.map