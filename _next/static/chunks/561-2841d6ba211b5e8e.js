(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[561],{8049:function(t,e,n){"use strict";var o=n(4397);function i(){}function r(){}r.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,r,s){if(s!==o){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:i};return n.PropTypes=n,n}},718:function(t,e,n){t.exports=n(8049)()},4397:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7938:function(t,e,n){var o;o=function(t,e,n,o){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:t}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=o(n(1)),c=n(2),l=o(c),u=o(n(3)),h=o(n(4)),f=function(t){function e(){var t,n,o;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=o=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),o._sigPad=null,o._excludeOurProps=function(){var t=o.props;return t.canvasProps,t.clearOnResize,function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["canvasProps","clearOnResize"])},o.getCanvas=function(){return o._canvas},o.getTrimmedCanvas=function(){var t=document.createElement("canvas");return t.width=o._canvas.width,t.height=o._canvas.height,t.getContext("2d").drawImage(o._canvas,0,0),(0,h.default)(t)},o.getSignaturePad=function(){return o._sigPad},o._checkClearOnResize=function(){o.props.clearOnResize&&o._resizeCanvas()},o._resizeCanvas=function(){var t=o.props.canvasProps||{},e=t.width,n=t.height;if(!e||!n){var i=o._canvas,r=Math.max(window.devicePixelRatio||1,1);e||(i.width=i.offsetWidth*r),n||(i.height=i.offsetHeight*r),i.getContext("2d").scale(r,r),o.clear()}},o.on=function(){return window.addEventListener("resize",o._checkClearOnResize),o._sigPad.on()},o.off=function(){return window.removeEventListener("resize",o._checkClearOnResize),o._sigPad.off()},o.clear=function(){return o._sigPad.clear()},o.isEmpty=function(){return o._sigPad.isEmpty()},o.fromDataURL=function(t,e){return o._sigPad.fromDataURL(t,e)},o.toDataURL=function(t,e){return o._sigPad.toDataURL(t,e)},o.fromData=function(t){return o._sigPad.fromData(t)},o.toData=function(){return o._sigPad.toData()},i(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),s(e,[{key:"componentDidMount",value:function(){this._sigPad=new u.default(this._canvas,this._excludeOurProps()),this._resizeCanvas(),this.on()}},{key:"componentWillUnmount",value:function(){this.off()}},{key:"componentDidUpdate",value:function(){Object.assign(this._sigPad,this._excludeOurProps())}},{key:"render",value:function(){var t=this,e=this.props.canvasProps;return l.default.createElement("canvas",r({ref:function(e){t._canvas=e}},e))}}]),e}(c.Component);f.propTypes={velocityFilterWeight:a.default.number,minWidth:a.default.number,maxWidth:a.default.number,minDistance:a.default.number,dotSize:a.default.oneOfType([a.default.number,a.default.func]),penColor:a.default.string,throttle:a.default.number,onEnd:a.default.func,onBegin:a.default.func,canvasProps:a.default.object,clearOnResize:a.default.bool},f.defaultProps={clearOnResize:!0},e.default=f},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e){t.exports=o}])},t.exports=o(n(718),n(2265),n(9385),n(2233))},2233:function(t){var e;e=function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){"use strict";function n(t,e,n,o){return({red:o[4*(n*e+t)],green:o[4*(n*e+t)+1],blue:o[4*(n*e+t)+2],alpha:o[4*(n*e+t)+3]}).alpha}function o(t,e,o,i){for(var r=t?1:-1,s=t?0:o-1,a=s;t?a<o:a>-1;a+=r)for(var c=0;c<e;c++)if(n(c,a,e,i))return a;return null}function i(t,e,o,i){for(var r=t?1:-1,s=t?0:e-1,a=s;t?a<e:a>-1;a+=r)for(var c=0;c<o;c++)if(n(a,c,e,i))return a;return null}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.getContext("2d"),n=t.width,r=t.height,s=e.getImageData(0,0,n,r).data,a=o(!0,n,r,s),c=o(!1,n,r,s),l=i(!0,n,r,s),u=i(!1,n,r,s)-l+1,h=c-a+1,f=e.getImageData(l,a,u,h);return t.width=u,t.height=h,e.clearRect(0,0,u,h),e.putImageData(f,0,0),t}}])},t.exports=e()},9653:function(t,e,n){"use strict";n.d(e,{_:function(){return u}});var o=n(3223),i=n(8771),r=n(5647);function s(t,e){[...e].reverse().forEach(n=>{let o=t.getVariant(n);o&&(0,i.C)(t,o),t.variantChildren&&t.variantChildren.forEach(t=>{s(t,e)})})}function a(){let t=!1,e=new Set,n={subscribe:t=>(e.add(t),()=>void e.delete(t)),start(n,i){(0,o.k)(t,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let s=[];return e.forEach(t=>{s.push((0,r.d)(t,n,{transitionOverride:i}))}),Promise.all(s)},set:n=>((0,o.k)(t,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),e.forEach(t=>{Array.isArray(n)?s(t,n):"string"==typeof n?s(t,[n]):(0,i.C)(t,n)})),stop(){e.forEach(t=>{!function(t){t.values.forEach(t=>t.stop())}(t)})},mount:()=>(t=!0,()=>{t=!1,n.stop()})};return n}var c=n(3576),l=n(1534);let u=function(){let t=(0,c.h)(a);return(0,l.L)(t.mount,[]),t}},7066:function(t,e,n){"use strict";let o,i;n.d(e,{v:function(){return F}});var r=n(3078),s=n(3576),a=n(2265),c=n(3223);let l=new WeakMap;function u({target:t,contentRect:e,borderBoxSize:n}){var o;null===(o=l.get(t))||void 0===o||o.forEach(o=>{o({target:t,contentSize:e,get size(){return function(t,e){if(e){let{inlineSize:t,blockSize:n}=e[0];return{width:t,height:n}}return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}(t,n)}})})}function h(t){t.forEach(u)}let f=new Set;var d=n(6376),p=n(4438);let v=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),g=()=>({time:0,x:v(),y:v()}),y={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function m(t,e,n,o){let i=n[e],{length:r,position:s}=y[e],a=i.current,c=n.time;i.current=t[`scroll${s}`],i.scrollLength=t[`scroll${r}`]-t[`client${r}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,d.Y)(0,i.scrollLength,i.current);let l=o-c;i.velocity=l>50?0:(0,p.R)(i.current-a,l)}let _=[[0,0],[1,1]],x={start:0,center:.5,end:1};function w(t,e,n=0){let o=0;if(t in x&&(t=x[t]),"string"==typeof t){let e=parseFloat(t);t.endsWith("px")?o=e:t.endsWith("%")?t=e/100:t.endsWith("vw")?o=e/100*document.documentElement.clientWidth:t.endsWith("vh")?o=e/100*document.documentElement.clientHeight:t=e}return"number"==typeof t&&(o=e*t),n+o}let E=[0,0];var P=n(8843),b=n(8913);let C={x:0,y:0};var W=n(5414);let k=new WeakMap,L=new WeakMap,O=new WeakMap,T=t=>t===document.documentElement?window:t;function D(t,{container:e=document.documentElement,...n}={}){let r=O.get(e);r||(r=new Set,O.set(e,r));let s=function(t,e,n,o={}){return{measure:()=>(function(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let o=e;for(;o&&o!==t;)n.x.targetOffset+=o.offsetLeft,n.y.targetOffset+=o.offsetTop,o=o.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight})(t,o.target,n),update:e=>{m(t,"x",n,e),m(t,"y",n,e),n.time=e,(o.offset||o.target)&&function(t,e,n){let{offset:o=_}=n,{target:i=t,axis:r="y"}=n,s="y"===r?"height":"width",a=i!==t?function(t,e){let n={x:0,y:0},o=t;for(;o&&o!==e;)if(o instanceof HTMLElement)n.x+=o.offsetLeft,n.y+=o.offsetTop,o=o.offsetParent;else if("svg"===o.tagName){let t=o.getBoundingClientRect(),e=(o=o.parentElement).getBoundingClientRect();n.x+=t.left-e.left,n.y+=t.top-e.top}else if(o instanceof SVGGraphicsElement){let{x:t,y:e}=o.getBBox();n.x+=t,n.y+=e;let i=null,r=o.parentNode;for(;!i;)"svg"===r.tagName&&(i=r),r=o.parentNode;o=i}else break;return n}(i,t):C,c=i===t?{width:t.scrollWidth,height:t.scrollHeight}:"getBBox"in i&&"svg"!==i.tagName?i.getBBox():{width:i.clientWidth,height:i.clientHeight},l={width:t.clientWidth,height:t.clientHeight};e[r].offset.length=0;let u=!e[r].interpolate,h=o.length;for(let t=0;t<h;t++){let n=function(t,e,n,o){let i=Array.isArray(t)?t:E,r=0;return"number"==typeof t?i=[t,t]:"string"==typeof t&&(i=(t=t.trim()).includes(" ")?t.split(" "):[t,x[t]?t:"0"]),w(i[0],n,o)-w(i[1],e)}(o[t],l[s],c[s],a[r]);u||n===e[r].interpolatorOffsets[t]||(u=!0),e[r].offset[t]=n}u&&(e[r].interpolate=(0,P.s)(e[r].offset,(0,b.Y)(o)),e[r].interpolatorOffsets=[...e[r].offset]),e[r].progress=e[r].interpolate(e[r].current)}(t,n,o)},notify:()=>e(n)}}(e,t,g(),n);if(r.add(s),!k.has(e)){let t=()=>{for(let t of r)t.measure()},n=()=>{for(let t of r)t.update(W.frameData.timestamp)},s=()=>{for(let t of r)t.notify()},a=()=>{W.Wi.read(t,!1,!0),W.Wi.read(n,!1,!0),W.Wi.update(s,!1,!0)};k.set(e,a);let c=T(e);window.addEventListener("resize",a,{passive:!0}),e!==document.documentElement&&L.set(e,"function"==typeof e?(f.add(e),i||(i=()=>{let t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};f.forEach(t=>t(e))},window.addEventListener("resize",i)),()=>{f.delete(e),!f.size&&i&&(i=void 0)}):function(t,e){var n;o||"undefined"==typeof ResizeObserver||(o=new ResizeObserver(h));let i=("string"==typeof(n=t)?n=document.querySelectorAll(n):n instanceof Element&&(n=[n]),Array.from(n||[]));return i.forEach(t=>{let n=l.get(t);n||(n=new Set,l.set(t,n)),n.add(e),null==o||o.observe(t)}),()=>{i.forEach(t=>{let n=l.get(t);null==n||n.delete(e),(null==n?void 0:n.size)||null==o||o.unobserve(t)})}}(e,a)),c.addEventListener("scroll",a,{passive:!0})}let a=k.get(e);return W.Wi.read(a,!1,!0),()=>{var t;(0,W.Pn)(a);let n=O.get(e);if(!n||(n.delete(s),n.size))return;let o=k.get(e);k.delete(e),o&&(T(e).removeEventListener("scroll",o),null===(t=L.get(e))||void 0===t||t(),window.removeEventListener("resize",o))}}function M(t,e){let n;let o=()=>{let{currentTime:o}=e,i=(null===o?0:o.value)/100;n!==i&&t(i),n=i};return W.Wi.update(o,!0),()=>(0,W.Pn)(o)}var S=n(9163);let R=new Map;function z({source:t,container:e=document.documentElement,axis:n="y"}={}){t&&(e=t),R.has(e)||R.set(e,{});let o=R.get(e);return o[n]||(o[n]=(0,S.t)()?new ScrollTimeline({source:e,axis:n}):function({source:t,container:e,axis:n="y"}){t&&(e=t);let o={value:0},i=D(t=>{o.value=100*t[n].progress},{container:e,axis:n});return{currentTime:o,cancel:i}}({source:e,axis:n})),o[n]}function B(t){return t&&(t.target||t.offset)}var A=n(1534);function N(t,e){(0,c.K)(!!(!e||e.current),`You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let U=()=>({scrollX:(0,r.BX)(0),scrollY:(0,r.BX)(0),scrollXProgress:(0,r.BX)(0),scrollYProgress:(0,r.BX)(0)});function F({container:t,target:e,layoutEffect:n=!0,...o}={}){let i=(0,s.h)(U);return(n?A.L:a.useEffect)(()=>(N("target",e),N("container",t),function(t,{axis:e="y",...n}={}){let o={axis:e,...n};return"function"==typeof t?2===t.length||B(o)?D(e=>{t(e[o.axis].progress,e)},o):M(t,z(o)):function(t,e){if(B(e))return t.pause(),D(n=>{t.time=t.duration*n[e.axis].progress},e);{let n=z(e);return t.attachTimeline(n,t=>(t.pause(),M(e=>{t.time=t.duration*e},n)))}}(t,o)}((t,{x:e,y:n})=>{i.scrollX.set(e.current),i.scrollXProgress.set(e.progress),i.scrollY.set(n.current),i.scrollYProgress.set(n.progress)},{...o,container:(null==t?void 0:t.current)||void 0,target:(null==e?void 0:e.current)||void 0})),[t,e,JSON.stringify(o.offset)]),i}},4317:function(t,e,n){"use strict";n.d(e,{H:function(){return d}});var o=n(8843);let i=t=>t&&"object"==typeof t&&t.mix,r=t=>i(t)?t.mix:void 0;var s=n(2265),a=n(3078),c=n(5750),l=n(3576),u=n(1534),h=n(5414);function f(t,e){let n=function(t){let e=(0,l.h)(()=>(0,a.BX)(t)),{isStatic:n}=(0,s.useContext)(c._);if(n){let[,n]=(0,s.useState)(t);(0,s.useEffect)(()=>e.on("change",n),[])}return e}(e()),o=()=>n.set(e());return o(),(0,u.L)(()=>{let e=()=>h.Wi.preRender(o,!1,!0),n=t.map(t=>t.on("change",e));return()=>{n.forEach(t=>t()),(0,h.Pn)(o)}}),n}function d(t,e,n,i){if("function"==typeof t)return function(t){a.S1.current=[],t();let e=f(a.S1.current,t);return a.S1.current=void 0,e}(t);let s="function"==typeof e?e:function(...t){let e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],s=t[1+n],a=t[2+n],c=t[3+n],l=(0,o.s)(s,a,{mixer:r(a[0]),...c});return e?l(i):l}(e,n,i);return Array.isArray(t)?p(t,s):p([t],([t])=>s(t))}function p(t,e){let n=(0,l.h)(()=>[]);return f(t,()=>{n.length=0;let o=t.length;for(let e=0;e<o;e++)n[e]=t[e].get();return e(n)})}},9385:function(t,e,n){"use strict";function o(t,e,n){this.x=t,this.y=e,this.time=n||new Date().getTime()}function i(t,e,n,o){this.startPoint=t,this.control1=e,this.control2=n,this.endPoint=o}function r(t,e){var n,o,i,s,a,c,l,u,h,f=this,d=e||{};(this.velocityFilterWeight=d.velocityFilterWeight||.7,this.minWidth=d.minWidth||.5,this.maxWidth=d.maxWidth||2.5,this.throttle="throttle"in d?d.throttle:16,this.minDistance="minDistance"in d?d.minDistance:5,this.throttle)?this._strokeMoveUpdate=(n=r.prototype._strokeUpdate,o=this.throttle,l=null,u=0,i||(i={}),h=function(){u=!1===i.leading?0:Date.now(),l=null,c=n.apply(s,a),l||(s=a=null)},function(){var t=Date.now();u||!1!==i.leading||(u=t);var e=o-(t-u);return s=this,a=arguments,e<=0||e>o?(l&&(clearTimeout(l),l=null),u=t,c=n.apply(s,a),l||(s=a=null)):l||!1===i.trailing||(l=setTimeout(h,e)),c}):this._strokeMoveUpdate=r.prototype._strokeUpdate,this.dotSize=d.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=d.penColor||"black",this.backgroundColor=d.backgroundColor||"rgba(0,0,0,0)",this.onBegin=d.onBegin,this.onEnd=d.onEnd,this._canvas=t,this._ctx=t.getContext("2d"),this.clear(),this._handleMouseDown=function(t){1===t.which&&(f._mouseButtonDown=!0,f._strokeBegin(t))},this._handleMouseMove=function(t){f._mouseButtonDown&&f._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&f._mouseButtonDown&&(f._mouseButtonDown=!1,f._strokeEnd(t))},this._handleTouchStart=function(t){if(1===t.targetTouches.length){var e=t.changedTouches[0];f._strokeBegin(e)}},this._handleTouchMove=function(t){t.preventDefault();var e=t.targetTouches[0];f._strokeMoveUpdate(e)},this._handleTouchEnd=function(t){t.target===f._canvas&&(t.preventDefault(),f._strokeEnd(t))},this.on()}n.r(e),o.prototype.velocityFrom=function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):1},o.prototype.distanceTo=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},o.prototype.equals=function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time},i.prototype.length=function(){for(var t=0,e=void 0,n=void 0,o=0;o<=10;o+=1){var i=o/10,r=this._point(i,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),s=this._point(i,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(o>0){var a=r-e,c=s-n;t+=Math.sqrt(a*a+c*c)}e=r,n=s}return t},i.prototype._point=function(t,e,n,o,i){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*o*(1-t)*t*t+i*t*t*t},r.prototype.clear=function(){var t=this._ctx,e=this._canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0},r.prototype.fromDataURL=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=new Image,i=n.ratio||window.devicePixelRatio||1,r=n.width||this._canvas.width/i,s=n.height||this._canvas.height/i;this._reset(),o.src=t,o.onload=function(){e._ctx.drawImage(o,0,0,r,s)},this._isEmpty=!1},r.prototype.toDataURL=function(t){var e;if("image/svg+xml"===t)return this._toSVG();for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return(e=this._canvas).toDataURL.apply(e,[t].concat(o))},r.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()},r.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)},r.prototype.isEmpty=function(){return this._isEmpty},r.prototype._strokeBegin=function(t){this._data.push([]),this._reset(),this._strokeUpdate(t),"function"==typeof this.onBegin&&this.onBegin(t)},r.prototype._strokeUpdate=function(t){var e=t.clientX,n=t.clientY,o=this._createPoint(e,n),i=this._data[this._data.length-1],r=i&&i[i.length-1],s=r&&o.distanceTo(r)<this.minDistance;if(!(r&&s)){var a=this._addPoint(o),c=a.curve,l=a.widths;c&&l&&this._drawCurve(c,l.start,l.end),this._data[this._data.length-1].push({x:o.x,y:o.y,time:o.time,color:this.penColor})}},r.prototype._strokeEnd=function(t){var e=this.points.length>2,n=this.points[0];if(!e&&n&&this._drawDot(n),n){var o=this._data[this._data.length-1],i=o[o.length-1];n.equals(i)||o.push({x:n.x,y:n.y,time:n.time,color:this.penColor})}"function"==typeof this.onEnd&&this.onEnd(t)},r.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)},r.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)},r.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor},r.prototype._createPoint=function(t,e,n){var i=this._canvas.getBoundingClientRect();return new o(t-i.left,e-i.top,n||new Date().getTime())},r.prototype._addPoint=function(t){var e=this.points;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);var n=this._calculateCurveControlPoints(e[0],e[1],e[2]).c2,o=this._calculateCurveControlPoints(e[1],e[2],e[3]).c1,r=new i(e[1],n,o,e[2]),s=this._calculateCurveWidths(r);return e.shift(),{curve:r,widths:s}}return{}},r.prototype._calculateCurveControlPoints=function(t,e,n){var i=t.x-e.x,r=t.y-e.y,s=e.x-n.x,a=e.y-n.y,c={x:(t.x+e.x)/2,y:(t.y+e.y)/2},l={x:(e.x+n.x)/2,y:(e.y+n.y)/2},u=Math.sqrt(s*s+a*a),h=c.x-l.x,f=c.y-l.y,d=u/(Math.sqrt(i*i+r*r)+u),p={x:l.x+h*d,y:l.y+f*d},v=e.x-p.x,g=e.y-p.y;return{c1:new o(c.x+v,c.y+g),c2:new o(l.x+v,l.y+g)}},r.prototype._calculateCurveWidths=function(t){var e=t.startPoint,n=t.endPoint,o={start:null,end:null},i=this.velocityFilterWeight*n.velocityFrom(e)+(1-this.velocityFilterWeight)*this._lastVelocity,r=this._strokeWidth(i);return o.start=this._lastWidth,o.end=r,this._lastVelocity=i,this._lastWidth=r,o},r.prototype._strokeWidth=function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)},r.prototype._drawPoint=function(t,e,n){var o=this._ctx;o.moveTo(t,e),o.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1},r.prototype._drawCurve=function(t,e,n){var o=this._ctx,i=n-e,r=Math.floor(t.length());o.beginPath();for(var s=0;s<r;s+=1){var a=s/r,c=a*a,l=c*a,u=1-a,h=u*u,f=h*u,d=f*t.startPoint.x;d+=3*h*a*t.control1.x+3*u*c*t.control2.x+l*t.endPoint.x;var p=f*t.startPoint.y;p+=3*h*a*t.control1.y+3*u*c*t.control2.y+l*t.endPoint.y;var v=e+l*i;this._drawPoint(d,p,v)}o.closePath(),o.fill()},r.prototype._drawDot=function(t){var e=this._ctx,n="function"==typeof this.dotSize?this.dotSize():this.dotSize;e.beginPath(),this._drawPoint(t.x,t.y,n),e.closePath(),e.fill()},r.prototype._fromData=function(t,e,n){for(var i=0;i<t.length;i+=1){var r=t[i];if(r.length>1)for(var s=0;s<r.length;s+=1){var a=r[s],c=new o(a.x,a.y,a.time),l=a.color;if(0===s)this.penColor=l,this._reset(),this._addPoint(c);else if(s!==r.length-1){var u=this._addPoint(c),h=u.curve,f=u.widths;h&&f&&e(h,f,l)}}else this._reset(),n(r[0])}},r.prototype._toSVG=function(){var t=this,e=this._data,n=this._canvas,o=Math.max(window.devicePixelRatio||1,1),i=n.width/o,r=n.height/o,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttributeNS(null,"width",n.width),s.setAttributeNS(null,"height",n.height),this._fromData(e,function(t,e,n){var o=document.createElement("path");if(!isNaN(t.control1.x)&&!isNaN(t.control1.y)&&!isNaN(t.control2.x)&&!isNaN(t.control2.y)){var i="M "+t.startPoint.x.toFixed(3)+","+t.startPoint.y.toFixed(3)+" "+("C "+t.control1.x.toFixed(3))+","+t.control1.y.toFixed(3)+" "+t.control2.x.toFixed(3)+","+t.control2.y.toFixed(3)+" "+t.endPoint.x.toFixed(3)+","+t.endPoint.y.toFixed(3);o.setAttribute("d",i),o.setAttribute("stroke-width",(2.25*e.end).toFixed(3)),o.setAttribute("stroke",n),o.setAttribute("fill","none"),o.setAttribute("stroke-linecap","round"),s.appendChild(o)}},function(e){var n=document.createElement("circle"),o="function"==typeof t.dotSize?t.dotSize():t.dotSize;n.setAttribute("r",o),n.setAttribute("cx",e.x),n.setAttribute("cy",e.y),n.setAttribute("fill",e.color),s.appendChild(n)});var a=s.innerHTML;if(void 0===a){var c=document.createElement("dummy"),l=s.childNodes;c.innerHTML="";for(var u=0;u<l.length;u+=1)c.appendChild(l[u].cloneNode(!0));a=c.innerHTML}return"data:image/svg+xml;base64,"+btoa('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+i+" "+r+'" width="'+i+'" height="'+r+'">'+a+"</svg>")},r.prototype.fromData=function(t){var e=this;this.clear(),this._fromData(t,function(t,n){return e._drawCurve(t,n.start,n.end)},function(t){return e._drawDot(t)}),this._data=t},r.prototype.toData=function(){return this._data},e.default=r}}]);