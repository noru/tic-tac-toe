!function(e){function t(t){for(var r,a,c=t[0],l=t[1],u=t[2],f=0,p=[];f<c.length;f++)a=c[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={1:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/tic-tac-toe/build/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;i.push([66,0]),n()}({130:function(e,t,n){"use strict";n(129).polyfill(),n(128),n(127),n(126).shim(),n(111),n(106),n(86),n(84)},66:function(e,t,n){"use strict";n.r(t);var r,o=n(0),i=n.n(o),a=n(65),c=n.n(a),l=(n(130),n(77),n(35)),u=n.n(l);!function(e){e[e.WIN=1/0]="WIN",e[e.BLOCK=Number.MAX_VALUE]="BLOCK",e[e.FORK=Number.MAX_VALUE/2]="FORK",e[e.BLOCK_FORK=Number.MIN_VALUE/4]="BLOCK_FORK",e[e.OTHERS=1]="OTHERS"}(r||(r={}));var s,f=function(){function e(e){this.side=e}return e.printBoard=function(e){console.info.apply(console,e.slice(0,3)),console.info.apply(console,e.slice(3,6)),console.info.apply(console,e.slice(6,9))},e.equal=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],r=0,o=e;r<o.length;r++){if(o[r]!==n)return!1}return!0},e.getColRest=function(e){var t=e%3;return[t,t+3,t+6].filter(function(t){return t!==e})},e.getRowRest=function(e){var t=3*Math.floor(e/3);return[t,t+1,t+2].filter(function(t){return t!==e})},e.getDiagonalRest=function(e){switch(e){case 0:return[4,8];case 2:return[4,6];case 6:return[4,2];case 8:return[0,4]}throw Error("")},e.isWinMove=function(t,n,r){var o=e.getRowRest(t).map(function(e){return n[e]});if(e.equal.apply(e,[r].concat(o)))return console.info.apply(console,["row win: ",r].concat(o)),!0;var i=e.getColRest(t).map(function(e){return n[e]});return e.equal.apply(e,[r].concat(i))?(console.info.apply(console,["col win: ",r].concat(i)),!0):4===t?e.equal(n[0],r,n[8])||e.equal(n[2],r,n[6]):!(t%2!=0||!e.equal.apply(e,[r].concat(e.getDiagonalRest(t))))},e.isBlockMove=function(e,t,n){var r=n?0:1;return this.isWinMove(e,t,r)},e.isForkMove=function(e,t){return!1},e.isBlockForkMove=function(e,t){return!1},e.prototype.evaluate=function(t,n){var o=this,i=e.surroundingMap[t];if(!i)throw Error("Illegal position");if(e.isWinMove(t,n,this.side))return console.info("Position "+t+" is a win move"),e.printBoard(n),r.WIN;if(e.isBlockMove(t,n,this.side))return console.info("Position "+t+" is a block move"),e.printBoard(n),r.BLOCK;if(e.isForkMove(t,n))return r.FORK;if(e.isBlockForkMove(t,n))return r.BLOCK_FORK;var a=1;return i[0].forEach(function(e){-1!==n[e]&&n[e]!==o.side||(a+=2*r.OTHERS)}),i[1].forEach(function(e){-1!==n[e]&&n[e]!==o.side||(a+=r.OTHERS)}),a+Math.random()},e.prototype.nextMove=function(e){var t=this,n=0,r=-1;return e.forEach(function(o,i){if(-1===o){var a=t.evaluate(i,e);n<a&&(n=a,r=i)}}),r},e.surroundingMap={0:[[1,3,4],[2,5,6,7,8]],1:[[0,3,4,5,2],[6,7,8]],2:[[1,4,5],[0,3,6,7,8]],3:[[0,1,4,6,7],[2,5,8]],4:[[0,1,2,3,5,6,7,8],[]],5:[[1,2,4,7,8],[0,3,6]],6:[[3,4,7],[0,1,2,5,8]],7:[[3,4,5,6,8],[0,1,2]],8:[[4,5,7],[0,1,2,3,6]]},e}(),p=(n(68),s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=new Array(9).fill(-1),h=function(){return i.a.createElement(u.a,{name:"close",size:"4x"})},m=function(){return i.a.createElement(u.a,{name:"circle-o",size:"4x"})},v=function(e){var t=e.onClick,n=e.children;return i.a.createElement("div",{onClick:t,className:"cell"},n)},y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={board:d,round:0,xWin:!1,oWin:!1,isAILeft:!1,isAIRight:!1},t.init=function(){t.initBoard(),t.initRound()},t}return p(t,e),t.winCondition=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e[0],r=e[1],o=e[2];return-1!==n&&n===r&&r===o},t.prototype.initBoard=function(){this.setState({board:JSON.parse(JSON.stringify(d))})},t.prototype.initRound=function(){this.setState({round:0,xWin:!1,oWin:!1})},t.prototype.mark=function(e){var t=this.state,n=t.board,r=t.round;if(-1!==n[e])throw Error("Illegal play");n[e]=r%2,this.setState({board:n,round:r+1})},t.prototype.evaluate=function(){for(var e=this.state.board,n=0;n<3;n++){var r=3*n;if(t.winCondition(e[r],e[r+1],e[r+2]))return!0;if(t.winCondition(e[n],e[n+3],e[n+6]))return!0}return!!t.winCondition(e[0],e[4],e[8])||!!t.winCondition(e[2],e[4],e[6])},t.prototype.play=function(e){var t=this.state,n=t.xWin,r=t.oWin;if(!n&&!r){var o=this.state.round%2;try{console.info("Play at: ",e),this.mark(e),this.evaluate()&&(o?this.setState({xWin:!0}):this.setState({oWin:!0}))}catch(e){}}},t.prototype.aiPlay=function(){var e,n=this,r=this.state,o=r.round,i=r.isAILeft,a=r.isAIRight,c=o%2,l=function(e){return function(){if(void 0!==e){var t=e.nextMove(n.state.board);n.play(t)}}};0===c&&i&&(e=l(t.AILeft)),1===c&&a&&(e=l(t.AIRight)),e&&setTimeout(e,1500)},t.prototype.componentDidMount=function(){this.init()},t.prototype.componentDidUpdate=function(){this.aiPlay()},t.prototype.render=function(){var e=this,t=this.state,n=t.board,r=t.round,o=t.xWin,a=t.oWin,c=t.isAILeft,l=t.isAIRight;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:a?"win":void 0},i.a.createElement(m,null),i.a.createElement("label",{htmlFor:""},i.a.createElement("input",{type:"checkbox",checked:c,onChange:function(){return e.setState({isAILeft:!c})}}),i.a.createElement("span",null," AI"))),i.a.createElement("div",{className:"round"},i.a.createElement("div",null,"Round"),i.a.createElement("div",null,r),i.a.createElement("div",null,i.a.createElement("a",{onClick:this.init},"restart"))),i.a.createElement("div",{className:o?"win":void 0},i.a.createElement(h,null),i.a.createElement("label",{htmlFor:""},i.a.createElement("input",{type:"checkbox",checked:l,onChange:function(){return e.setState({isAIRight:!l})}}),i.a.createElement("span",null," AI")))),i.a.createElement("div",{className:"board"},i.a.createElement("div",{className:"row"},n.slice(0,3).map(function(t,n){return i.a.createElement(v,{key:n,onClick:function(){return e.play(n)}},0===t&&i.a.createElement(m,null),1===t&&i.a.createElement(h,null))})),i.a.createElement("div",{className:"row"},n.slice(3,6).map(function(t,n){return i.a.createElement(v,{key:n+3,onClick:function(){return e.play(n+3)}},0===t&&i.a.createElement(m,null),1===t&&i.a.createElement(h,null))})),i.a.createElement("div",{className:"row"},n.slice(6).map(function(t,n){return i.a.createElement(v,{key:n+6,onClick:function(){return e.play(n+6)}},0===t&&i.a.createElement(m,null),1===t&&i.a.createElement(h,null))}))))},t.AILeft=new f(0),t.AIRight=new f(1),t}(i.a.Component);c.a.render(i.a.createElement(y,null),document.getElementById("app"))},68:function(e,t,n){},77:function(e,t,n){}});