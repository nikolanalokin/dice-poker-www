(self.webpackChunkdice_poker_www=self.webpackChunkdice_poker_www||[]).push([[143],{2231:(e,t,a)=>{"use strict";var n=a(7294),o=a(3935),r=a(9809),c=a(6709),s=a(2262),l=a(8949);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"history",void 0),m(this,"location",void 0),(0,l.rC)(this,{location:l.LO,_updateLocation:l.aD})}var t,a;return t=e,(a=[{key:"_updateLocation",value:function(e){this.location=e}},{key:"push",value:function(e,t){this.history.push(e,t)}},{key:"replace",value:function(e,t){this.history.replace(e,t)}},{key:"go",value:function(e){this.history.go(e)}},{key:"back",value:function(){this.history.goBack()}},{key:"forward",value:function(){this.history.goForward()}}])&&u(t.prototype,a),e}(),h=(0,s.lX)({basename:"/dice-poker-www/"}),d=new f(h),p=function(e,t){t.history=e;var a=function(e){t._updateLocation(e)},n=e.listen(a);return a(e.location),e.subscribe=function(a){var n=observe(t,"location",(function(){var n=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t.location);a(n,e.action)}));return a(t.location,e.action),n},e.unsubscribe=n,e}(h,d);console.log("routeStore:",d),console.log("history:",p),(0,l.U5)((function(){return d.location.pathname}),(function(e){console.log("current pathname:",e)}));const v=p;var b=a(5513),y=a(6809),g=a.n(y)()("https://dice-poker.herokuapp.com/");g.on("connect",(function(){console.log("[socket:on:connect]")}));const E=g;function k(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t,a){return t&&k(e.prototype,t),a&&k(e,a),e}function N(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var D=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),N(this,"rootStore",void 0),N(this,"rooms",[]),N(this,"userData",{}),N(this,"roomData",void 0),N(this,"shotData",void 0),N(this,"comboData",void 0),N(this,"tableData",void 0),N(this,"serial",0),(0,l.ky)(this,{rootStore:!1}),this.rootStore=t,E.on("disconnect",(function(){console.log("[socket:on:disconnect]"),a.rootStore.routeStore.replace("/"),a.clearGame()})),E.on("get rooms",(function(e){console.log("[socket:on:get rooms]",e),a.setRooms(e)})),E.on("started",(function(e,t){console.log("[socket:on:started]",e,t),a.setCurrentRoom(e),a.setTableData(t)})),E.on("made shot",(function(e){console.log("[socket:on:made shot]",e),a.setShotData(e)})),E.on("selected dice",(function(e){console.log("[socket:on:selected dice]",e),a.setDiceSelectedState(e)})),E.on("put point",(function(e){console.log("[socket:on:put point]",e),a.setTableData(e),a.setShotData(null)})),E.on("joined room",(function(e){console.log("[socket:on:joined room]",e),a.setCurrentRoom(e)})),E.on("left room",(function(e){console.log("[socket:on:left room]",e),a.setCurrentRoom(e)})),E.on("end",(function(e,t){console.log("[socket:on:end]",t),a.setCurrentRoom(e),a.setTableData(t)})),E.on("update room",(function(e){console.log("[socket:on:update room]",e),a.setCurrentRoom(e)}))}return S(e,[{key:"hasData",get:function(){return this.shotData&&this.comboData}},{key:"allCombos",get:function(){if(!this.hasData)return{};var e={};return this.comboData.forEach((function(t){e[t.name]=t.points})),e}},{key:"currentUser",get:function(){return this.roomData&&this.roomData.users[this.roomData.currentUserIndex]}},{key:"isMyShot",get:function(){return this.currentUser&&this.currentUser.id===this.rootStore.userStore.user.id}}]),S(e,[{key:"setRooms",value:function(e){var t;(t=console).log.apply(t,["setRooms"].concat(Array.prototype.slice.call(arguments))),this.rooms=e||[]}},{key:"setCurrentRoom",value:function(e){var t;(t=console).log.apply(t,["setCurrentRoom"].concat(Array.prototype.slice.call(arguments))),this.roomData=e}},{key:"setShotData",value:function(e){var t;(t=console).log.apply(t,["setShotData"].concat(Array.prototype.slice.call(arguments))),this.shotData=e&&e.shotData||null,this.comboData=e&&e.comboData||null,this.serial=e&&e.serial||0}},{key:"setTableData",value:function(e){var t;(t=console).log.apply(t,["setTableData"].concat(Array.prototype.slice.call(arguments))),this.tableData=e}},{key:"setDiceSelectedState",value:function(e){var t;(t=console).log.apply(t,["setDiceSelectedState"].concat(Array.prototype.slice.call(arguments))),this.shotData=e}},{key:"createRoom",value:function(e){var t;(t=console).log.apply(t,["createRoom"].concat(Array.prototype.slice.call(arguments))),E.emit("create room",e,(function(e){var t=JSON.parse(e),a=(t.ok,t.data);console.log("[socket:emit:create room]",a)}))}},{key:"joinRoom",value:function(e){var t,a=this;(t=console).log.apply(t,["joinRoom"].concat(Array.prototype.slice.call(arguments))),E.emit("join room",e,(function(e){var t=JSON.parse(e);console.log("[socket:emit:join room]",t),t.ok&&(a.setCurrentRoom(t.data),a.rootStore.routeStore.push("/room/".concat(t.data.id)))}))}},{key:"leaveRoom",value:function(){var e=this;console.log("leaveRoom"),E.emit("leave room",(function(t){var a=JSON.parse(t).ok;console.log("[socket:emit:leave room]",a),a&&(e.rootStore.routeStore.replace("/"),e.clearGame())}))}},{key:"clearGame",value:function(){this.setCurrentRoom(null),this.setShotData(null),this.setTableData(null),this.rootStore.chatStore.clearMessages(null)}},{key:"startGame",value:function(){console.log("startGame"),E.emit("start",(function(e){var t=JSON.parse(e).ok;console.log("[socket:emit:start]",t)}))}},{key:"makeShot",value:function(){console.log("makeShot"),E.emit("make shot",(function(e){var t=JSON.parse(e);console.log("[socket:emit:make shot]",t)}))}},{key:"toggleHoldDice",value:function(e){this.serial<3&&(this.shotData[e].selected=!this.shotData[e].selected,E.emit("select dice",this.shotData,(function(e){var t=JSON.parse(e);console.log("[socket:emit:select dice]",t)})))}},{key:"putPoint",value:function(e){var t;(t=console).log.apply(t,["putPoint"].concat(Array.prototype.slice.call(arguments))),E.emit("put point",e,(function(e){var t=JSON.parse(e);console.log("[socket:emit:put point]",t)}))}}]),e}();function _(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var O=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,"rootStore",void 0),w(this,"user",{}),(0,l.ky)(this,{rootStore:!1}),this.rootStore=t,E.on("get user",(function(e){console.log("[socket:on:get user]",e),a.setUser(e)}))}var t,a;return t=e,(a=[{key:"setUser",value:function(e){var t;(t=console).log.apply(t,["setUserData"].concat(Array.prototype.slice.call(arguments))),this.user=e||{}}}])&&_(t.prototype,a),e}();function C(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var P=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),j(this,"rootStore",void 0),j(this,"messages",[]),(0,l.ky)(this,{rootStore:!1}),this.rootStore=t,E.on("chat:received message",(function(e){a.addMessage(e)}))}var t,a;return t=e,(a=[{key:"sendMessage",value:function(e){E.emit("chat:send message",{sender:this.rootStore.userStore.user.name,message:e},(function(e){var t=JSON.parse(e);console.log("[socket:emit:chat:send message]",t)}))}},{key:"addMessage",value:function(e){this.messages.push(e)}},{key:"clearMessages",value:function(){this.messages=[]}}])&&C(t.prototype,a),e}(),A=new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gameStore=new D(this),this.userStore=new O(this),this.chatStore=new P(this),this.routeStore=d},R=A.gameStore,x=A.userStore,U=A.chatStore;const M=A,T=(0,r.Pi)((function(e){return n.createElement("header",{className:"header"},n.createElement("div",{className:"header__left"},e.left),n.createElement("div",{className:"header__title"},e.title),n.createElement("div",{className:"header__right"},e.right))}));function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}const J=(0,r.Pi)((function(){var e,t,a=(e=(0,n.useState)(""),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,o=!1,r=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){o=!0,r=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?I(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],r=a[1];return n.createElement("form",{className:"form-create-room",onSubmit:function(e){R.createRoom(o),r(""),e.preventDefault()}},n.createElement("div",{className:"input"},n.createElement("div",{className:"input-label"},"Название комнаты"),n.createElement("input",{className:"input-native",type:"text",placeholder:"Введите название",value:o,onChange:function(e){r(e.target.value)}})),n.createElement("button",{className:"button button--primary",type:"submit"},"Создать комнату"))})),G=(0,r.Pi)((function(){return n.createElement("div",{className:"page"},n.createElement(T,{title:"Dice Poker",right:n.createElement(b.rU,{to:"/profile",className:"button button--flat"},"Профиль: ",x.user.name)}),n.createElement("main",{className:"main"},n.createElement(J,{createRoom:R.createRoom}),R.rooms.length>0&&n.createElement("div",{className:"block"},n.createElement("div",{className:"room-list"},R.rooms.map((function(e){return n.createElement("div",{className:"room-list-item",key:e.id,onClick:function(){return R.joinRoom(e.id)}},n.createElement("div",{className:"room-list-item__meta"},"Название: ",n.createElement("b",null,e.name)),n.createElement("div",{className:"room-list-item__meta"},"Игроков: ",n.createElement("b",null,e.users.length,"/",e.maxUsers)),n.createElement("div",{className:"room-list-item__meta"},"Статус: ",n.createElement("b",null,(t=e).finished?"закончилась":t.started?"началась":t.filled?"заполнена":"ожидает игроков")));var t}))))))}));var L={dice_1:a(6569),dice_2:a(9910),dice_3:a(2387),dice_4:a(9873),dice_5:a(9878),dice_6:a(3968)};const W=function(e){return n.createElement("button",{className:"dice"+(e.selected?" selected":"")+(e.selectable?" selectable":""),onClick:e.onClick,disabled:!e.selectable},n.createElement("img",{src:L["dice_".concat(e.value)]}))},H=function(e){return n.createElement("button",{className:"clickable-cell"+(e.highlight?" is-highlight":""),disabled:e.disabled,onClick:e.onClick},e.children)};var B=[{name:"school_1",ru:"1"},{name:"school_2",ru:"2"},{name:"school_3",ru:"3"},{name:"school_4",ru:"4"},{name:"school_5",ru:"5"},{name:"school_6",ru:"6"},{name:"school_sum",ru:"∑"},{name:"one_pair",ru:"2"},{name:"set",ru:"3"},{name:"two_pairs",ru:"2+2"},{name:"full_house",ru:"3+2"},{name:"small_straight",ru:"М.С."},{name:"big_straight",ru:"Б.С."},{name:"quads",ru:"Каре"},{name:"poker",ru:"Покер"},{name:"sum",ru:"∑ общ"},{name:"total",ru:"Итог"}];const F=(0,r.Pi)((function(){return console.log(R.allCombos),n.createElement("div",{className:"game-table"},n.createElement("div",{className:"col"},n.createElement("div",{className:"cell"}),B.map((function(e){return n.createElement("div",{className:"cell bold",key:e.name},e.ru)}))),R.tableData.map((function(e){var t=R.currentUser.name==e.userName;return n.createElement("div",{className:"col",key:e.userName},n.createElement("div",{className:"cell bold"},e.userName.slice(0,2)),B.map((function(a){var o=R.isMyShot&&t&&null===e.table.points[a.name]&&void 0!==R.allCombos[a.name],r=!R.isMyShot||!t||"school_sum"==a.name||"total"==a.name||null!==e.table.points[a.name],c="";return t?null!==e.table.points[a.name]?c=e.table.points[a.name]:null!==R.allCombos[a.name]&&(c=R.allCombos[a.name]):null!==e.table.points[a.name]&&(c=e.table.points[a.name]),n.createElement(H,{key:a.name,highlight:o,disabled:r,onClick:function(){R.putPoint(a.name)}},c)})))})))})),$=function(e){return n.createElement("div",{className:"chat-message"},n.createElement("span",{className:"chat-message__sender"},e.sender,":"),n.createElement("span",{className:"chat-message__text"}," ",e.message))};function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}const X=(0,r.Pi)((function(){var e,t,a=(e=(0,n.useState)(""),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,o=!1,r=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){o=!0,r=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],r=a[1];return n.createElement("form",{className:"form",onSubmit:function(e){U.sendMessage(o),r(""),e.preventDefault()}},n.createElement("div",{className:"input"},n.createElement("input",{className:"input-native",type:"text",placeholder:"Введите сообщение",value:o,onChange:function(e){r(e.target.value)}})))})),z=(0,r.Pi)((function(){return n.createElement("div",{className:"chat-container"},n.createElement("div",{className:"chat-messages-wrap"},U.messages.map((function(e){return n.createElement($,{key:e.id,sender:e.sender,message:e.message})}))),n.createElement("div",{className:"chat-input-wrap"},n.createElement(X,null)))})),K=(0,r.Pi)((function(){return R.roomData&&n.createElement("div",{className:"page"},n.createElement(T,{left:n.createElement("button",{className:"button button--flat",onClick:function(){return R.leaveRoom()}},"Покинуть комнату"),title:"Игра",right:x.user.name}),n.createElement("main",{className:"main"},n.createElement("div",{className:"room-info-container"},n.createElement("div",{className:"list"},n.createElement("div",{className:"item"},n.createElement("span",null,"Название комнаты: ",n.createElement("b",null,R.roomData.name))),n.createElement("div",{className:"item"},n.createElement("span",null,"Игроки (",R.roomData.users.length,"): ",n.createElement("b",null,R.roomData.users.map((function(e,t){return n.createElement("span",{key:e.id},e.name+(t<R.roomData.users.length-1?", ":""))}))))))),R.roomData.started?n.createElement("div",{className:"game-container"},n.createElement("div",{className:"board-container"},n.createElement("div",{className:"board-container__wrap"},R.roomData.finished?n.createElement("span",{className:"board-container__text"},"Игра окончена, победитель: ",n.createElement("b",{className:"c-primary"},R.roomData.users.find((function(e){return e.id==R.roomData.winnerUserId})).name)):R.isMyShot?n.createElement("span",{className:"board-container__text c-primary"},"Ваш ход"):n.createElement("span",{className:"board-container__text"},"Бросает ",R.currentUser?n.createElement("b",null,R.currentUser.name):""))),!R.roomData.finished&&n.createElement("div",{className:"shot-container"},n.createElement("div",{className:"shot-title"},"Бросок: ",n.createElement("b",null,R.serial)),R.isMyShot&&n.createElement("button",{className:"button button--flat",onClick:function(){return R.makeShot()},disabled:3===R.serial},!R.shotData||R.shotData.filter((function(e){return e.selected})).length>0?"Сделать бросок":"Перебросить всё")),R.hasData&&!R.roomData.finished&&n.createElement("div",{className:"dice-container"},n.createElement("div",{className:"dice-container__title"},"Бросок"),n.createElement("div",{className:"dice-container__block"},R.shotData.filter((function(e){return!e.selected})).map((function(e){return n.createElement(W,{key:e.index,value:e.value,selectable:R.isMyShot&&3!==R.serial,onClick:function(){return R.toggleHoldDice(e.index)}})}))),n.createElement("div",{className:"dice-container__title"},"Переброс"),n.createElement("div",{className:"dice-container__block"},R.shotData.filter((function(e){return e.selected})).map((function(e){return n.createElement(W,{key:e.index,value:e.value,selectable:R.isMyShot&&3!==R.serial,onClick:function(){return R.toggleHoldDice(e.index)}})})))),R.tableData&&n.createElement(F,null),n.createElement(z,null)):n.createElement("button",{className:"button button--primary button--block",onClick:function(){return R.startGame()}},"Начать игру")))})),Q=(0,r.Pi)((function(){return n.createElement("div",{className:"page"},n.createElement(T,{left:n.createElement(b.rU,{to:"/",exact:!0,className:"button button--flat"},"Назад"),title:"Профиль"}),n.createElement("main",{className:"main"}))})),V=(0,r.Pi)((function(){return n.createElement("div",{className:"page"},n.createElement("header",{className:"header"}),n.createElement("main",{className:"main"},"Страница не найдена"))})),Y=(0,r.Pi)((function(){return n.createElement(c.F0,{history:v},n.createElement(c.rs,null,n.createElement(c.AW,{exact:!0,path:"/"},n.createElement(G,null)),n.createElement(c.AW,{path:"/profile"},n.createElement(Q,null)),n.createElement(c.AW,{path:"/room/:id"},n.createElement(K,null)),n.createElement(c.AW,{path:"*"},n.createElement(V,null))))}));(0,o.render)(n.createElement(Y,{store:M}),document.getElementById("root"))},6569:(e,t,a)=>{"use strict";e.exports=a.p+"assets/7e86c1cb2b2f537c48b0.svg"},9910:(e,t,a)=>{"use strict";e.exports=a.p+"assets/96dacd2c5c3807b7a643.svg"},2387:(e,t,a)=>{"use strict";e.exports=a.p+"assets/e00f4560f6a32f495e34.svg"},9873:(e,t,a)=>{"use strict";e.exports=a.p+"assets/875e9408f80fb00d8af0.svg"},9878:(e,t,a)=>{"use strict";e.exports=a.p+"assets/78c902a1cc5f47e04945.svg"},3968:(e,t,a)=>{"use strict";e.exports=a.p+"assets/f6b81a72dd093acf62e3.svg"},418:()=>{}},0,[[2231,666,216]]]);
//# sourceMappingURL=app.92a7b7a76f9db6e8f5f1.js.map