"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("fs"),t=require("path"),r=require("events"),n=require("querystring");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=i(e),o=i(t);function a(e,t){return e(t={exports:{}},t.exports),t.exports}var c=a((function(e,t){!function(r){const n=Function.prototype.toString;function i(e){if("function"!=typeof e)return!1;if(/^class[\s{]/.test(n.call(e)))return!0;const t=function(e){return n.call(e).replace(/^[^{]*{\s*/,"").replace(/\s*}[^}]*$/,"")}(e);return/classCallCheck\(/.test(t)||/TypeError\("Cannot call a class as a function"\)/.test(t)}e.exports&&(t=e.exports=i),t.isClass=i}()})),u=(c.isClass,a((function(e){const t={};e.exports=function(r="./",...n){const i=new Map,a={};return i.set(a,{path:o.default.isAbsolute(r)?o.default.join(r,"./"):o.default.join(o.default.dirname(e.parent.filename),r,"./"),is_class:!1}),function e(r){return new Proxy(r,{get:(r,o)=>{if(o in r||"symbol"==typeof o||"inspect"==o)return r[o];const a=i.get(r);if(a.is_class)return a.instance||(a.instance=new r(...n)),a.instance[o]?a.instance[o]:"$map"==o?a:a.instance[o];if("$map"==o)return a;let u={};const f=a.path+o+"/",l=a.path+o+".js";if(t[f]||((e=>s.default.existsSync(e)&&s.default.statSync(e).isFile())(l)?t[f]="file":(e=>s.default.existsSync(e)&&s.default.statSync(e).isDirectory())(f)?t[f]="dir":t[f]="none"),"file"==t[f])u=require(l);else if("dir"!=t[f])return;return i.set(u,{path:f,is_class:c(u)}),r[o]=e(u),r[o]},set:(e,t,r)=>{if(t in e)return e[t]=r,!0;const s=i.get(e);return s.is_class?(s.instance||(s.instance=new e(...n)),s.instance[t]=r,!0):(e[t]=r,!0)}})}(a)}})));function f(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:r,value:e[r++]});else{var i=1,s="";if("?"===e[a=r+1])throw new TypeError('Pattern cannot start with "?" at '+a);for(;a<e.length;)if("\\"!==e[a]){if(")"===e[a]){if(0==--i){a++;break}}else if("("===e[a]&&(i++,"?"!==e[a+1]))throw new TypeError("Capturing groups are not allowed at "+a);s+=e[a++]}else s+=e[a++]+e[a++];if(i)throw new TypeError("Unbalanced pattern at "+r);if(!s)throw new TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:s}),r=a}else{for(var o="",a=r+1;a<e.length;){var c=e.charCodeAt(a);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;o+=e[a++]}if(!o)throw new TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:o}),r=a}else t.push({type:"CLOSE",index:r,value:e[r++]});else t.push({type:"OPEN",index:r,value:e[r++]});else t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});else t.push({type:"MODIFIER",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,i=void 0===n?"./":n,s="[^"+l(t.delimiter||"/#?")+"]+?",o=[],a=0,c=0,u="",f=function(e){if(c<r.length&&r[c].type===e)return r[c++].value},d=function(e){var t=f(e);if(void 0!==t)return t;var n=r[c],i=n.type,s=n.index;throw new TypeError("Unexpected "+i+" at "+s+", expected "+e)},p=function(){for(var e,t="";e=f("CHAR")||f("ESCAPED_CHAR");)t+=e;return t};c<r.length;){var h=f("CHAR"),y=f("NAME"),m=f("PATTERN");if(y||m){var v=h||"";-1===i.indexOf(v)&&(u+=v,v=""),u&&(o.push(u),u=""),o.push({name:y||a++,prefix:v,suffix:"",pattern:m||s,modifier:f("MODIFIER")||""})}else{var g=h||f("ESCAPED_CHAR");if(g)u+=g;else if(u&&(o.push(u),u=""),f("OPEN")){v=p();var w=f("NAME")||"",x=f("PATTERN")||"",E=p();d("CLOSE"),o.push({name:w||(x?a++:""),pattern:w&&!x?s:x,prefix:v,suffix:E,modifier:f("MODIFIER")||""})}else d("END")}}return o}function l(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function d(e){return e&&e.sensitive?"":"i"}function p(e,t,r){return function(e,t,r){void 0===r&&(r={});for(var n=r.strict,i=void 0!==n&&n,s=r.start,o=void 0===s||s,a=r.end,c=void 0===a||a,u=r.encode,f=void 0===u?function(e){return e}:u,p="["+l(r.endsWith||"")+"]|$",h="["+l(r.delimiter||"/#?")+"]",y=o?"^":"",m=0,v=e;m<v.length;m++){var g=v[m];if("string"==typeof g)y+=l(f(g));else{var w=l(f(g.prefix)),x=l(f(g.suffix));if(g.pattern)if(t&&t.push(g),w||x)if("+"===g.modifier||"*"===g.modifier){var E="*"===g.modifier?"?":"";y+="(?:"+w+"((?:"+g.pattern+")(?:"+x+w+"(?:"+g.pattern+"))*)"+x+")"+E}else y+="(?:"+w+"("+g.pattern+")"+x+")"+g.modifier;else y+="("+g.pattern+")"+g.modifier;else y+="(?:"+w+x+")"+g.modifier}}if(c)i||(y+=h+"?"),y+=r.endsWith?"(?="+p+")":"$";else{var b=e[e.length-1],C="string"==typeof b?h.indexOf(b[b.length-1])>-1:void 0===b;i||(y+="(?:"+h+"(?="+p+"))?"),C||(y+="(?="+h+"|"+p+")")}return new RegExp(y,d(r))}(f(e,r),t,r)}function h(e,t,r){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(e,t):Array.isArray(e)?function(e,t,r){var n=e.map((function(e){return h(e,t,r).source}));return new RegExp("(?:"+n.join("|")+")",d(r))}(e,t,r):p(e,t,r)}const y="INVOKE_FUNCTION_FAILED",m="undefined"!=typeof uniCloud,v=()=>!1,g=()=>!0;function w(e){if("string"==typeof e){const t=h(e,[],{end:!1});return t.global&&(t.lastIndex=0),e=>t.test(e.event.action)}if(e instanceof RegExp)return t=>(e.global&&(e.lastIndex=0),e.test(t.event.action));if("function"==typeof e)return e;if(Array.isArray(e)){const t=e.map(e=>w(e));return e=>t.some(t=>t(e))}throw new Error("match/ignore pattern must be RegExp, Array or String, but got "+e)}class x{constructor(e){this.ctx=e,this.config=e.config,this.service=e.service,this.controller=e.controller,this.throw=e.throw,this.db=e.db,this.curl=e.curl,this.httpclient=e.httpclient}pick(e,t){return e=e||{},"string"==typeof t&&(t=t.split(/ +/)),t.reduce((function(t,r){return null==e[r]||(t[r]=e[r]),t}),{})}}var E=function(e){if(!Array.isArray(e))throw new TypeError("Middleware stack must be an array!");for(const t of e)if("function"!=typeof t)throw new TypeError("Middleware must be composed of functions!");return function(t,r){let n=-1;return function i(s){if(s<=n)return Promise.reject(new Error("next() called multiple times"));n=s;let o=e[s];s===e.length&&(o=r);if(!o)return Promise.resolve();try{return Promise.resolve(o(t,i.bind(null,s+1)))}catch(e){return Promise.reject(e)}}(0)}};const b=e=>"string"!=typeof e,C="application/json";function A(e,t){if(t){const{headers:t,httpMethod:r,body:i,queryStringParameters:s}=e.event;if(function(e){const t=Object.keys(e).find(e=>"content-type"===e.toLowerCase());t?(e["content-type"]=e[t].toLowerCase(),"content-type"!==t&&delete e[t]):e["content-type"]=C}(t),e.query=s,"GET"===r)e.data=e.query;else if(e.data=Object.create(null),i){const r=t["content-type"];if(r===C)try{e.data=JSON.parse(i)}catch(e){}else"application/x-www-form-urlencoded"===r&&(e.data=n.parse(i))}}e.set=function(t,r){if(2===arguments.length)Array.isArray(r)?r=r.map(e=>"string"==typeof e?e:String(e)):"string"!=typeof r&&(r=String(r)),e.headers[t]=r;else if(b(t))for(const r in t)e.set(r,t[r])}}async function R(e,t){const r=function(e,t){const r=t.env;return!(!r||"http"!==r.MP_SOURCE)||!(!e.httpMethod||!e.headers)}(e.event,e.context);if(A(e,r),r){const r={"content-type":C};try{await t()}catch(t){const n={code:t.code||y,message:t.message};return!0===e.config.debug&&(n.stack=t.stack||""),e.body={mpserverlessComposedResponse:!0,statusCode:400,headers:r,body:JSON.stringify(n)}}const n=e.headers["content-type"]||C;e.body={mpserverlessComposedResponse:!0,isBase64Encoded:!!e.isBase64Encoded,statusCode:e.status,headers:Object.assign(e.headers,{"content-type":n}),body:n===C?JSON.stringify(e.body):e.body}}else await t()}function O(e){const t=async function(t){t.throw(e)};return t._name="error",t}class S extends r.EventEmitter{constructor(e){super(),this.middleware=[],this.config=e||{},this.routes=e.routes;const{baseDir:t=process.cwd(),middleware:r}=this.config;this.serviceDir=o.default.resolve(t,"service"),this.controllerDir=o.default.resolve(t,"controller"),this.initMiddleware(r)}use(e,t){if("function"!=typeof e)throw new TypeError("middleware must be a function");return this.middleware.push(this.wrapMiddleware(e,t)),this}async serve(e,t){const r=function(e,t,r,n,i){const s={state:{},event:t,context:r};return s.config=e,s.service=u(n,s),s.controller=u(i,s),s.query=Object.create(null),s.data=t.data||Object.create(null),s.status=200,s.headers=Object.create(null),s.request={body:s.data,header:s.headers},s.throw=(e,t)=>{if(t)throw{code:e,message:t};throw{code:y,message:e}},m&&(s.db=uniCloud.database(),s.curl=uniCloud.httpclient.request.bind(uniCloud.httpclient),s.httpclient=uniCloud.httpclient),s}(this.config,e||m&&uniCloud.$args,t||m&&uniCloud.$ctx,this.serviceDir,this.controllerDir),n=this.controller(r);let i;return i="error"===n._name?E([R,n]):E(this.middleware.concat(n)),new Promise(e=>{i(r).then(()=>{e(this.respond(r))}).catch(t=>{e(this.failed(t))})})}initMiddleware(e){this.use(R,{name:"http"}),Array.isArray(e)&&e.forEach(([e,t])=>{this.use(e,t)})}wrapMiddleware(e,t){const r=function(e){if(!e)return g;const{enable:t,match:r,ignore:n}=e;if(!1===t)return v;if(!r&&!n)return g;if(r&&n)throw new Error("options.match and options.ignore can not both present");const i=w(r||n);return function(e){const t=i(e);return r?t:!t}}(t),n=(t,n)=>r(t)?e(t,n):n();return t&&t.name&&(n._name=t.name),n._name||(n._name=e._name||e.name),n}controller(e){const t=function(e){!e.action&&e.path&&(e.action=e.path.substr(1));let t=String(e.action||"");return t.startsWith("/")&&(e.action=t=t.substr(1)),t}(e.event);if(!t)return O("action is required");let r;if(this.routes){if(!this.routes[t])return O("routes must contain action "+t);r=this.routes[t].split(".").filter(Boolean)}else r=t.split("/").filter(Boolean);const n=r.length;if(1===n)return O('action must contain "/"');const i=r[n-1];let s=e.controller;for(let e=0;e<n-1;e++)s=s[r[e]];if(!s)return O(`controller/${t.replace(new RegExp("/"+i+"$"),"")} not found`);const o=s[i];if("function"!=typeof o)return O(`controller/${t.replace(new RegExp("/"+i+"$"),"."+i)} is not a function`);const a=async function(e){const t=await o.call(s,e);void 0!==t&&(e.body=t)};return a._name=i,a}failed(e){const t={code:e.code||y,message:e.message||e};return!0===this.config.debug&&(t.stack=e.stack||""),t}respond(e){return e.body}}const M=x,_=x;exports.Controller=_,exports.Router=S,exports.Service=M;