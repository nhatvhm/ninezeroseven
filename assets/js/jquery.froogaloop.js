//Froogaloop
var Froogaloop=function(){function n(e){return new n.fn.init(e)}function e(n,e,t){if(!t.contentWindow.postMessage)return!1;var r=JSON.stringify({method:n,value:e});t.contentWindow.postMessage(r,d)}function t(n){var e,t;try{e=JSON.parse(n.data),t=e.event||e.method}catch(r){}if("ready"!=t||a||(a=!0),!/^https?:\/\/player.vimeo.com/.test(n.origin))return!1;"*"===d&&(d=n.origin);var o=e.value,l=e.data,u=""===u?null:e.player_id,s=i(t,u),f=[];return s?(void 0!==o&&f.push(o),l&&f.push(l),u&&f.push(u),f.length>0?s.apply(null,f):s.call()):!1}function r(n,e,t){t?(u[t]||(u[t]={}),u[t][n]=e):u[n]=e}function i(n,e){return e&&"undefined"!=typeof u[e]?u[e][n]:u[n]}function o(n,e){if(e&&u[e]){if(!u[e][n])return!1;u[e][n]=null}else{if(!u[n])return!1;u[n]=null}return!0}function l(n){return!!(n&&n.constructor&&n.call&&n.apply)}var u={},a=!1,d=(Array.prototype.slice,"*");return n.fn=n.prototype={element:null,init:function(n){return"string"==typeof n&&(n=document.getElementById(n)),this.element=n,this},api:function(n,t){if(!this.element||!n)return!1;var i=this,o=i.element,u=""!==o.id?o.id:null,a=l(t)?null:t,d=l(t)?t:null;return d&&r(n,d,u),e(n,a,o),i},addEvent:function(n,t){if(!this.element)return!1;var i=this,o=i.element,l=""!==o.id?o.id:null;return r(n,t,l),"ready"!=n?e("addEventListener",n,o):"ready"==n&&a&&t.call(null,l),i},removeEvent:function(n){if(!this.element)return!1;var t=this,r=t.element,i=""!==r.id?r.id:null,l=o(n,i);"ready"!=n&&l&&e("removeEventListener",n,r)}},n.fn.init.prototype=n.fn,window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent("onmessage",t),window.Froogaloop=window.$f=n}();

//Yahoo
if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'http://www.youtube.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'http:' + '//s.ytimg.com/yts/jsbin/www-widgetapi-vfl3zSWzk/www-widgetapi.js';a.async = true;var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();}