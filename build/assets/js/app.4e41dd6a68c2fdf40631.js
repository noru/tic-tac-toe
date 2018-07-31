!function(t){function e(e){for(var r,i,l=e[0],c=e[1],u=e[2],f=0,p=[];f<l.length;f++)i=l[f],a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(s&&s(e);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={1:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/tic-tac-toe/build/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=c;o.push([66,0]),n()}({130:function(t,e,n){"use strict";n(129).polyfill(),n(128),n(127),n(126).shim(),n(111),n(106),n(86),n(84)},66:function(t,e,n){"use strict";n.r(e);var r,a=n(0),o=n.n(a),i=n(65),l=n.n(i),c=(n(130),n(77),n(35)),u=n.n(c),s=function(){function t(t){this.side=t}return t.prototype.evaluate=function(e,n){var r=this,a=t.surroundingMap[e];if(!a)throw Error("Illegal position");var o=1;return a[0].forEach(function(t){-1!==n[t]&&n[t]!==r.side||o++}),a[1].forEach(function(t){-1!==n[t]&&n[t]!==r.side||o++}),o+Math.random()},t.prototype.nextMove=function(t){var e=this,n=0,r=-1;return t.forEach(function(a,o){if(-1===a){var i=e.evaluate(o,t);n<i&&(n=i,r=o)}}),r},t.surroundingMap={0:[[1,3,4],[2,5,6,7,8]],1:[[0,3,4,5,2],[6,7,8]],2:[[1,4,5],[0,3,6,7,8]],3:[[0,1,4,6,7],[2,5,8]],4:[[0,1,2,3,5,6,7,8],[]],5:[[1,2,4,7,8],[0,3,6]],6:[[3,4,7],[0,1,2,5,8]],7:[[3,4,5,6,8],[0,1,2]],8:[[4,5,7],[0,1,2,3,6]]},t}(),f=(n(68),r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=new Array(9).fill(-1),d=function(){return o.a.createElement(u.a,{name:"close",size:"4x"})},h=function(){return o.a.createElement(u.a,{name:"circle-o",size:"4x"})},m=function(t){var e=t.onClick,n=t.children;return o.a.createElement("div",{onClick:e,className:"cell"},n)},v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={board:p,round:0,xWin:!1,oWin:!1,isAILeft:!1,isAIRight:!1},e.init=function(){e.initBoard(),e.initRound()},e}return f(e,t),e.winCondition=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[0],r=t[1],a=t[2];return-1!==n&&n===r&&r===a},e.prototype.initBoard=function(){this.setState({board:JSON.parse(JSON.stringify(p))})},e.prototype.initRound=function(){this.setState({round:0,xWin:!1,oWin:!1})},e.prototype.mark=function(t){var e=this.state,n=e.board,r=e.round;if(-1!==n[t])throw Error("Illegal play");n[t]=r%2,this.setState({board:n,round:r+1})},e.prototype.evaluate=function(){for(var t=this.state.board,n=0;n<3;n++){var r=3*n;if(e.winCondition(t[r],t[r+1],t[r+2]))return!0;if(e.winCondition(t[n],t[n+3],t[n+6]))return!0}return!!e.winCondition(t[0],t[4],t[8])||!!e.winCondition(t[2],t[4],t[6])},e.prototype.play=function(t){var e=this.state,n=e.xWin,r=e.oWin;if(!n&&!r){var a=this.state.round%2;try{this.mark(t),this.evaluate()&&(a?this.setState({xWin:!0}):this.setState({oWin:!0}))}catch(t){}}},e.prototype.aiPlay=function(){var t,n=this,r=this.state,a=r.round,o=r.isAILeft,i=r.isAIRight,l=a%2,c=function(t){return function(){if(void 0!==t){var e=t.nextMove(n.state.board);n.play(e)}}};0===l&&o&&(t=c(e.AILeft)),1===l&&i&&(t=c(e.AIRight)),t&&setTimeout(t,500)},e.prototype.componentDidMount=function(){this.init()},e.prototype.componentDidUpdate=function(){this.aiPlay()},e.prototype.render=function(){var t=this,e=this.state,n=e.board,r=e.round,a=e.xWin,i=e.oWin,l=e.isAILeft,c=e.isAIRight;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:i?"win":void 0},o.a.createElement(h,null),o.a.createElement("label",{htmlFor:""},o.a.createElement("input",{type:"checkbox",checked:l,onChange:function(){return t.setState({isAILeft:!l})}}),o.a.createElement("span",null," AI"))),o.a.createElement("div",{className:"round"},o.a.createElement("div",null,"Round"),o.a.createElement("div",null,r),o.a.createElement("div",null,o.a.createElement("a",{onClick:this.init},"restart"))),o.a.createElement("div",{className:a?"win":void 0},o.a.createElement(d,null),o.a.createElement("label",{htmlFor:""},o.a.createElement("input",{type:"checkbox",checked:c,onChange:function(){return t.setState({isAIRight:!c})}}),o.a.createElement("span",null," AI")))),o.a.createElement("div",{className:"board"},o.a.createElement("div",{className:"row"},n.map(function(e,n){return n%3==0?o.a.createElement(m,{key:n,onClick:function(){return t.play(n)}},0===e&&o.a.createElement(h,null),1===e&&o.a.createElement(d,null)):null}).filter(Boolean)),o.a.createElement("div",{className:"row"},n.map(function(e,n){return n%3==1?o.a.createElement(m,{key:n,onClick:function(){return t.play(n)}},0===e&&o.a.createElement(h,null),1===e&&o.a.createElement(d,null)):null}).filter(Boolean)),o.a.createElement("div",{className:"row"},n.map(function(e,n){return n%3==2?o.a.createElement(m,{key:n,onClick:function(){return t.play(n)}},0===e&&o.a.createElement(h,null),1===e&&o.a.createElement(d,null)):null}).filter(Boolean))))},e.AILeft=new s(0),e.AIRight=new s(1),e}(o.a.Component);l.a.render(o.a.createElement(v,null),document.getElementById("app"))},68:function(t,e,n){},77:function(t,e,n){}});