(self.webpackChunkdice_poker_www=self.webpackChunkdice_poker_www||[]).push([[143],{9512:(e,t,o)=>{"use strict";var a=o(7294),n=o(3935),r=o(727),c=o(6709),s=o(2262),l=o(8949);function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function u(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"history",void 0),m(this,"location",void 0),(0,l.rC)(this,{location:l.LO,_updateLocation:l.aD})}var t,o;return t=e,(o=[{key:"_updateLocation",value:function(e){this.location=e}},{key:"push",value:function(e,t){this.history.push(e,t)}},{key:"replace",value:function(e,t){this.history.replace(e,t)}},{key:"go",value:function(e){this.history.go(e)}},{key:"back",value:function(){this.history.goBack()}},{key:"forward",value:function(){this.history.goForward()}}])&&u(t.prototype,o),e}(),f=(0,s.lX)(),d=new h(f),p=function(e,t){t.history=e;var o=function(e){t._updateLocation(e)},a=e.listen(o);return o(e.location),e.subscribe=function(o){var a=observe(t,"location",(function(){var a=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){m(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},t.location);o(a,e.action)}));return o(t.location,e.action),a},e.unsubscribe=a,e}(f,d);console.log("routeStore:",d),console.log("history:",p),(0,l.U5)((function(){return d.location.pathname}),(function(e){console.log("current pathname:",e)}));const v=p;var b=o(5513),y=o(6809),k=o.n(y);function g(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function E(e,t,o){return t&&g(e.prototype,t),o&&g(e,o),e}function _(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const D=new(function(){function e(t){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"_socket",void 0),_(this,"router",void 0),_(this,"rooms",[]),_(this,"userData",{}),_(this,"roomData",void 0),_(this,"shotData",void 0),_(this,"comboData",void 0),_(this,"tableData",void 0),_(this,"serial",0),(0,l.ky)(this),this.router=t,this._socket=k()("https://dice-poker.herokuapp.com/"),this._socket.on("connect",(function(){console.log("[socket:on:connect]")})),this._socket.on("disconnect",(function(){console.log("[socket:on:disconnect]"),o.router.replace("/"),o.setCurrentRoom(null),o.setShotData(null),o.setTableData(null)})),this._socket.on("get user",(function(e){console.log("[socket:on:get user]",e),o.setUserData(e)})),this._socket.on("get rooms",(function(e){console.log("[socket:on:get rooms]",e),o.setRooms(e)})),this._socket.on("started",(function(e,t){console.log("[socket:on:started]",e,t),o.setCurrentRoom(e),o.setTableData(t)})),this._socket.on("made shot",(function(e){console.log("[socket:on:made shot]",e),o.setShotData(e)})),this._socket.on("selected dice",(function(e){console.log("[socket:on:selected dice]",e),o.setDiceSelectedState(e)})),this._socket.on("put point",(function(e){console.log("[socket:on:put point]",e),o.setTableData(e),o.setShotData(null)})),this._socket.on("joined room",(function(e){console.log("[socket:on:joined room]",e),o.setCurrentRoom(e)})),this._socket.on("left room",(function(e){console.log("[socket:on:left room]",e),o.setCurrentRoom(e)})),this._socket.on("end",(function(e,t){console.log("[socket:on:end]",t),o.setCurrentRoom(e),o.setTableData(t)})),this._socket.on("update room",(function(e){console.log("[socket:on:update room]",e),o.setCurrentRoom(e)}))}return E(e,[{key:"hasData",get:function(){return this.shotData&&this.comboData}},{key:"allCombos",get:function(){if(!this.hasData)return{};var e={};return this.comboData.forEach((function(t){e[t.name]=t.points})),e}},{key:"currentUser",get:function(){return this.roomData&&this.roomData.users[this.roomData.currentUserIndex]}},{key:"isMyShot",get:function(){return this.currentUser&&this.currentUser.id===this.userData.id}}]),E(e,[{key:"setUserData",value:function(e){var t;(t=console).log.apply(t,["setUserData"].concat(Array.prototype.slice.call(arguments))),this.userData=e||{}}},{key:"setRooms",value:function(e){var t;(t=console).log.apply(t,["setRooms"].concat(Array.prototype.slice.call(arguments))),this.rooms=e||[]}},{key:"setCurrentRoom",value:function(e){var t;(t=console).log.apply(t,["setCurrentRoom"].concat(Array.prototype.slice.call(arguments))),this.roomData=e}},{key:"setShotData",value:function(e){var t;(t=console).log.apply(t,["setShotData"].concat(Array.prototype.slice.call(arguments))),this.shotData=e&&e.shotData||null,this.comboData=e&&e.comboData||null,this.serial=e&&e.serial||0}},{key:"setTableData",value:function(e){var t;(t=console).log.apply(t,["setTableData"].concat(Array.prototype.slice.call(arguments))),this.tableData=e}},{key:"setDiceSelectedState",value:function(e){var t;(t=console).log.apply(t,["setDiceSelectedState"].concat(Array.prototype.slice.call(arguments))),this.shotData=e}},{key:"createRoom",value:function(e){var t;(t=console).log.apply(t,["createRoom"].concat(Array.prototype.slice.call(arguments))),this._socket.emit("create room",e,(function(e){var t=JSON.parse(e),o=(t.ok,t.data);console.log("[socket:emit:create room]",o)}))}},{key:"joinRoom",value:function(e){var t,o=this;(t=console).log.apply(t,["joinRoom"].concat(Array.prototype.slice.call(arguments))),this._socket.emit("join room",e,(function(e){var t=JSON.parse(e);console.log("[socket:emit:join room]",t),t.ok&&(o.setCurrentRoom(t.data),o.router.push("/room/".concat(t.data.id)))}))}},{key:"leaveRoom",value:function(){var e=this;console.log("leaveRoom"),this._socket.emit("leave room",(function(t){var o=JSON.parse(t).ok;console.log("[socket:emit:leave room]",o),o&&(e.router.replace("/"),e.setCurrentRoom(null),e.setShotData(null),e.setTableData(null))}))}},{key:"startGame",value:function(){console.log("startGame"),this._socket.emit("start",(function(e){var t=JSON.parse(e).ok;console.log("[socket:emit:start]",t)}))}},{key:"makeShot",value:function(){console.log("makeShot"),this._socket.emit("make shot",(function(e){var t=JSON.parse(e);console.log("[socket:emit:make shot]",t)}))}},{key:"toggleHoldDice",value:function(e){this.serial<3&&(this.shotData[e].selected=!this.shotData[e].selected,this._socket.emit("select dice",this.shotData,(function(e){var t=JSON.parse(e);console.log("[socket:emit:select dice]",t)})))}},{key:"putPoint",value:function(e){var t;(t=console).log.apply(t,["putPoint"].concat(Array.prototype.slice.call(arguments))),this._socket.emit("put point",e,(function(e){var t=JSON.parse(e);console.log("[socket:emit:put point]",t)}))}}]),e}())(d),N=(0,r.Pi)((function(e){return a.createElement("header",{className:"header"},a.createElement("div",{className:"header__left"},e.left),a.createElement("div",{className:"header__title"},e.title),a.createElement("div",{className:"header__right"},e.right))}));function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}const w=(0,r.Pi)((function(){var e,t,o=(e=(0,a.useState)(""),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],a=!0,n=!1,r=void 0;try{for(var c,s=e[Symbol.iterator]();!(a=(c=s.next()).done)&&(o.push(c.value),!t||o.length!==t);a=!0);}catch(e){n=!0,r=e}finally{try{a||null==s.return||s.return()}finally{if(n)throw r}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?S(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=o[0],r=o[1];return a.createElement("form",{className:"form-create-room",onSubmit:function(e){D.createRoom(n),r(""),e.preventDefault()}},a.createElement("div",{className:"input"},a.createElement("div",{className:"input-label"},"Название комнаты"),a.createElement("input",{className:"input-native",type:"text",placeholder:"Введите название",value:n,onChange:function(e){r(e.target.value)}})),a.createElement("button",{className:"button button--primary",type:"submit"},"Создать комнату"))})),C=(0,r.Pi)((function(){return a.createElement("div",{className:"page"},a.createElement(N,{title:"Dice Poker",right:a.createElement(b.rU,{to:"/profile",className:"button button--flat"},"Профиль: ",D.userData.name)}),a.createElement("main",{className:"main"},a.createElement(w,{createRoom:D.createRoom}),D.rooms.length>0&&a.createElement("div",{className:"block"},a.createElement("div",{className:"room-list"},D.rooms.map((function(e){return a.createElement("div",{className:"room-list-item",key:e.id,onClick:function(){return D.joinRoom(e.id)}},a.createElement("div",{className:"room-list-item__meta"},"Название: ",a.createElement("b",null,e.name)),a.createElement("div",{className:"room-list-item__meta"},"Игроков: ",a.createElement("b",null,e.users.length,"/",e.maxUsers)),a.createElement("div",{className:"room-list-item__meta"},"Статус: ",a.createElement("b",null,(t=e).finished?"закончилась":t.started?"началась":t.filled?"заполнена":"ожидает игроков")));var t}))))))}));var O={dice_1:o(6569),dice_2:o(9910),dice_3:o(2387),dice_4:o(9873),dice_5:o(9878),dice_6:o(3968)};const j=function(e){return a.createElement("button",{className:"dice"+(e.selected?" selected":"")+(e.selectable?" selectable":""),onClick:e.onClick,disabled:!e.selectable},a.createElement("img",{src:O["dice_".concat(e.value)]}))},P=function(e){return a.createElement("button",{className:"clickable-cell"+(e.highlight?" is-highlight":""),disabled:e.disabled,onClick:e.onClick},e.children)};var R=[{name:"school_1",ru:"1"},{name:"school_2",ru:"2"},{name:"school_3",ru:"3"},{name:"school_4",ru:"4"},{name:"school_5",ru:"5"},{name:"school_6",ru:"6"},{name:"school_sum",ru:"∑"},{name:"one_pair",ru:"2"},{name:"set",ru:"3"},{name:"two_pairs",ru:"2+2"},{name:"full_house",ru:"3+2"},{name:"small_straight",ru:"М.С."},{name:"big_straight",ru:"Б.С."},{name:"quads",ru:"Каре"},{name:"poker",ru:"Покер"},{name:"sum",ru:"∑ общ"},{name:"total",ru:"Итог"}];const x=(0,r.Pi)((function(e){var t=e.store;return console.log(t.allCombos),a.createElement("div",{className:"game-table"},a.createElement("div",{className:"col"},a.createElement("div",{className:"cell"}),R.map((function(e){return a.createElement("div",{className:"cell bold",key:e.name},e.ru)}))),t.tableData.map((function(e){var o=t.currentUser.name==e.userName;return a.createElement("div",{className:"col",key:e.userName},a.createElement("div",{className:"cell bold"},e.userName.slice(0,2)),R.map((function(n){var r=t.isMyShot&&o&&null===e.table.points[n.name]&&void 0!==t.allCombos[n.name],c=!t.isMyShot||!o||"school_sum"==n.name||"total"==n.name||null!==e.table.points[n.name],s="";return o?null!==e.table.points[n.name]?s=e.table.points[n.name]:null!==t.allCombos[n.name]&&(s=t.allCombos[n.name]):null!==e.table.points[n.name]&&(s=e.table.points[n.name]),a.createElement(P,{key:n.name,highlight:r,disabled:c,onClick:function(){t.putPoint(n.name)}},s)})))})))})),A=(0,r.Pi)((function(){return D.roomData&&a.createElement("div",{className:"page"},a.createElement(N,{left:a.createElement("button",{className:"button button--flat",onClick:function(){return D.leaveRoom()}},"Покинуть комнату"),title:"Игра",right:D.userData.name}),a.createElement("main",{className:"main"},a.createElement("div",{className:"room-info-container"},a.createElement("div",{className:"list"},a.createElement("div",{className:"item"},a.createElement("span",null,"Название комнаты: ",a.createElement("b",null,D.roomData.name))),a.createElement("div",{className:"item"},a.createElement("span",null,"Игроки (",D.roomData.users.length,"): ",a.createElement("b",null,D.roomData.users.map((function(e,t){return a.createElement("span",{key:e.id},e.name+(t<D.roomData.users.length-1?", ":""))}))))))),D.roomData.started?a.createElement("div",{className:"game-container"},a.createElement("div",{className:"board-container"},a.createElement("div",{className:"board-container__wrap"},D.roomData.finished?a.createElement("span",{className:"board-container__text"},"Игра окончена, победитель: ",a.createElement("b",{className:"c-primary"},D.roomData.users.find((function(e){return e.id==D.roomData.winnerUserId})).name)):D.isMyShot?a.createElement("span",{className:"board-container__text c-primary"},"Ваш ход"):a.createElement("span",{className:"board-container__text"},"Бросает ",D.currentUser?a.createElement("b",null,D.currentUser.name):""))),!D.roomData.finished&&a.createElement("div",{className:"shot-container"},a.createElement("div",{className:"shot-title"},"Бросок: ",a.createElement("b",null,D.serial)),D.isMyShot&&a.createElement("button",{className:"button button--flat",onClick:function(){return D.makeShot()},disabled:3===D.serial},!D.shotData||D.shotData.filter((function(e){return e.selected})).length>0?"Сделать бросок":"Перебросить всё")),D.hasData&&!D.roomData.finished&&a.createElement("div",{className:"dice-container"},a.createElement("div",{className:"dice-container__title"},"Бросок"),a.createElement("div",{className:"dice-container__block"},D.shotData.filter((function(e){return!e.selected})).map((function(e){return a.createElement(j,{key:e.index,value:e.value,selectable:D.isMyShot&&3!==D.serial,onClick:function(){return D.toggleHoldDice(e.index)}})}))),a.createElement("div",{className:"dice-container__title"},"Переброс"),a.createElement("div",{className:"dice-container__block"},D.shotData.filter((function(e){return e.selected})).map((function(e){return a.createElement(j,{key:e.index,value:e.value,selectable:D.isMyShot&&3!==D.serial,onClick:function(){return D.toggleHoldDice(e.index)}})})))),D.tableData&&a.createElement(x,{store:D})):a.createElement("button",{className:"button button--primary button--block",onClick:function(){return D.startGame()}},"Начать игру")))})),U=(0,r.Pi)((function(){return a.createElement("div",{className:"page"},a.createElement(Header,{left:a.createElement(b.rU,{to:"/",exact:!0,className:"button button--flat"},"Назад"),title:"Профиль"}),a.createElement("main",{className:"main"}))})),T=(0,r.Pi)((function(){return a.createElement("div",{className:"page"},a.createElement("header",{className:"header"}),a.createElement("main",{className:"main"},"Страница не найдена"))})),M=(0,r.Pi)((function(e){return a.createElement(c.F0,{history:v},a.createElement(c.rs,null,a.createElement(c.AW,{exact:!0,path:"/"},a.createElement(C,{store:e.store})),a.createElement(c.AW,{path:"/profile"},a.createElement(U,{store:e.store})),a.createElement(c.AW,{path:"/room/:id"},a.createElement(A,{store:e.store})),a.createElement(c.AW,{path:"*"},a.createElement(T,null))))}));var J={store:D,routeStore:d};(0,n.render)(a.createElement(M,J),document.getElementById("root"))},6569:(e,t,o)=>{"use strict";e.exports=o.p+"assets/7e86c1cb2b2f537c48b0.svg"},9910:(e,t,o)=>{"use strict";e.exports=o.p+"assets/96dacd2c5c3807b7a643.svg"},2387:(e,t,o)=>{"use strict";e.exports=o.p+"assets/e00f4560f6a32f495e34.svg"},9873:(e,t,o)=>{"use strict";e.exports=o.p+"assets/875e9408f80fb00d8af0.svg"},9878:(e,t,o)=>{"use strict";e.exports=o.p+"assets/78c902a1cc5f47e04945.svg"},3968:(e,t,o)=>{"use strict";e.exports=o.p+"assets/f6b81a72dd093acf62e3.svg"},418:()=>{}},0,[[9512,666,216]]]);
//# sourceMappingURL=app.27efe3bb7306b530af42.js.map