!function(){"use strict";window.zaf_formation_id="65c170bd2189ef000847b10f",window.zaf_ab_candidates=[{weight:"50",url:"https://zaf.api.fanbyte.com/stable/js/akz-allakhazam.js?id=031fc3cc-7a8f-468a-b019-3c2c8160aaec&type=standard"},{weight:"50",url:"https://zaf.api.fanbyte.com/stable/js/akz-allakhazam.js?id=c1ec908e-0af4-41f7-87e4-38d9074069ba&type=standard"}]}();
!function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=function(e){return e&&e.Math==Math&&e},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")(),o=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},i=function(e){try{return!!e()}catch(t){return!0}},u={}.toString,a=function(e){return u.call(e).slice(8,-1)},c="".split,f=i(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==a(e)?c.call(e,""):Object(e)}:Object,s=function(e){if(e==undefined)throw TypeError("Can't call method on "+e);return e},l=function(e){return Object(s(e))},d=Math.ceil,p=Math.floor,g=function(e){return isNaN(e=+e)?0:(e>0?p:d)(e)},h=Math.min,y=function(e){return e>0?h(g(e),9007199254740991):0},v=function(e){return"object"==typeof e?null!==e:"function"==typeof e},m=Array.isArray||function(e){return"Array"==a(e)},C=!i(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),b=r.document,S=v(b)&&v(b.createElement),E=function(e){return S?b.createElement(e):{}},w=!C&&!i(function(){return 7!=Object.defineProperty(E("div"),"a",{get:function(){return 7}}).a}),x=function(e){if(!v(e))throw TypeError(String(e)+" is not an object");return e},F=function(e,t){if(!v(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!v(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},A=Object.defineProperty,O={f:C?A:function(e,t,n){if(x(e),t=F(t,!0),x(n),w)try{return A(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},I=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},T=C?function(e,t,n){return O.f(e,t,I(1,n))}:function(e,t,n){return e[t]=n,e},_=function(e,t){try{T(r,e,t)}catch(n){r[e]=t}return t},j=r["__core-js_shared__"]||_("__core-js_shared__",{}),R=t(function(e){(e.exports=function(e,t){return j[e]||(j[e]=t!==undefined?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})}),N={}.hasOwnProperty,L=function(e,t){return N.call(e,t)},M=0,P=Math.random(),k=function(e){return"Symbol("+String(e===undefined?"":e)+")_"+(++M+P).toString(36)},$=!!Object.getOwnPropertySymbols&&!i(function(){return!String(Symbol())}),U=$&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,D=R("wks"),G=r.Symbol,z=U?G:G&&G.withoutSetter||k,V=function(e){return L(D,e)||($&&L(G,e)?D[e]=G[e]:D[e]=z("Symbol."+e)),D[e]},W=V("species"),B=function(e,t){var n;return m(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!m(n.prototype)?v(n)&&null===(n=n[W])&&(n=undefined):n=undefined),new(n===undefined?Array:n)(0===t?0:t)},Y=[].push,K=function(e){var t=1==e,n=2==e,r=3==e,i=4==e,u=6==e,a=7==e,c=5==e||u;return function(s,d,p,g){for(var h,v,m=l(s),C=f(m),b=function(e,t,n){if(o(e),t===undefined)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}(d,p,3),S=y(C.length),E=0,w=g||B,x=t?w(s,S):n||a?w(s,0):undefined;S>E;E++)if((c||E in C)&&(v=b(h=C[E],E,m),e))if(t)x[E]=v;else if(v)switch(e){case 3:return!0;case 5:return h;case 6:return E;case 2:Y.call(x,h)}else switch(e){case 4:return!1;case 7:Y.call(x,h)}return u?-1:r||i?i:x}},X={forEach:K(0),map:K(1),filter:K(2),some:K(3),every:K(4),find:K(5),findIndex:K(6),filterOut:K(7)},H=function(e,t){var n=[][e];return!!n&&i(function(){n.call(null,t||function(){throw 1},1)})},J=X.forEach,q=H("forEach")?[].forEach:function(e){return J(this,e,arguments.length>1?arguments[1]:undefined)};for(var Z in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Q=r[Z],ee=Q&&Q.prototype;if(ee&&ee.forEach!==q)try{T(ee,"forEach",q)}catch(Cr){ee.forEach=q}}var te={}.propertyIsEnumerable,ne=Object.getOwnPropertyDescriptor,re={f:ne&&!te.call({1:2},1)?function(e){var t=ne(this,e);return!!t&&t.enumerable}:te},oe=function(e){return f(s(e))},ie=Object.getOwnPropertyDescriptor,ue={f:C?ie:function(e,t){if(e=oe(e),t=F(t,!0),w)try{return ie(e,t)}catch(Cr){}if(L(e,t))return I(!re.f.call(e,t),e[t])}},ae=Function.toString;"function"!=typeof j.inspectSource&&(j.inspectSource=function(e){return ae.call(e)});var ce,fe,se,le=j.inspectSource,de=r.WeakMap,pe="function"==typeof de&&/native code/.test(le(de)),ge=R("keys"),he=function(e){return ge[e]||(ge[e]=k(e))},ye={},ve=r.WeakMap;if(pe){var me=j.state||(j.state=new ve),Ce=me.get,be=me.has,Se=me.set;ce=function(e,t){return t.facade=e,Se.call(me,e,t),t},fe=function(e){return Ce.call(me,e)||{}},se=function(e){return be.call(me,e)}}else{var Ee=he("state");ye[Ee]=!0,ce=function(e,t){return t.facade=e,T(e,Ee,t),t},fe=function(e){return L(e,Ee)?e[Ee]:{}},se=function(e){return L(e,Ee)}}var we,xe,Fe={set:ce,get:fe,has:se,enforce:function(e){return se(e)?fe(e):ce(e,{})},getterFor:function(e){return function(t){var n;if(!v(t)||(n=fe(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},Ae=t(function(e){var t=Fe.get,n=Fe.enforce,o=String(String).split("String");(e.exports=function(e,t,i,u){var a,c=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,s=!!u&&!!u.noTargetGet;"function"==typeof i&&("string"!=typeof t||L(i,"name")||T(i,"name",t),(a=n(i)).source||(a.source=o.join("string"==typeof t?t:""))),e!==r?(c?!s&&e[t]&&(f=!0):delete e[t],f?e[t]=i:T(e,t,i)):f?e[t]=i:_(t,i)})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||le(this)})}),Oe=r,Ie=function(e){return"function"==typeof e?e:undefined},Te=function(e,t){return arguments.length<2?Ie(Oe[e])||Ie(r[e]):Oe[e]&&Oe[e][t]||r[e]&&r[e][t]},_e=Math.max,je=Math.min,Re=function(e,t){var n=g(e);return n<0?_e(n+t,0):je(n,t)},Ne=function(e){return function(t,n,r){var o,i=oe(t),u=y(i.length),a=Re(r,u);if(e&&n!=n){for(;u>a;)if((o=i[a++])!=o)return!0}else for(;u>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},Le={includes:Ne(!0),indexOf:Ne(!1)}.indexOf,Me=function(e,t){var n,r=oe(e),o=0,i=[];for(n in r)!L(ye,n)&&L(r,n)&&i.push(n);for(;t.length>o;)L(r,n=t[o++])&&(~Le(i,n)||i.push(n));return i},Pe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ke=Pe.concat("length","prototype"),$e={f:Object.getOwnPropertyNames||function(e){return Me(e,ke)}},Ue={f:Object.getOwnPropertySymbols},De=Te("Reflect","ownKeys")||function(e){var t=$e.f(x(e)),n=Ue.f;return n?t.concat(n(e)):t},Ge=function(e,t){for(var n=De(t),r=O.f,o=ue.f,i=0;i<n.length;i++){var u=n[i];L(e,u)||r(e,u,o(t,u))}},ze=/#|\.prototype\./,Ve=function(e,t){var n=Be[We(e)];return n==Ke||n!=Ye&&("function"==typeof t?i(t):!!t)},We=Ve.normalize=function(e){return String(e).replace(ze,".").toLowerCase()},Be=Ve.data={},Ye=Ve.NATIVE="N",Ke=Ve.POLYFILL="P",Xe=Ve,He=ue.f,Je=function(e,t){var n,o,i,u,a,c=e.target,f=e.global,s=e.stat;if(n=f?r:s?r[c]||_(c,{}):(r[c]||{}).prototype)for(o in t){if(u=t[o],i=e.noTargetGet?(a=He(n,o))&&a.value:n[o],!Xe(f?o:c+(s?".":"#")+o,e.forced)&&i!==undefined){if(typeof u==typeof i)continue;Ge(u,i)}(e.sham||i&&i.sham)&&T(u,"sham",!0),Ae(n,o,u,e)}},qe=function(e,t,n){var r=F(t);r in e?O.f(e,r,I(0,n)):e[r]=n},Ze=Te("navigator","userAgent")||"",Qe=r.process,et=Qe&&Qe.versions,tt=et&&et.v8;tt?xe=(we=tt.split("."))[0]+we[1]:Ze&&(!(we=Ze.match(/Edge\/(\d+)/))||we[1]>=74)&&(we=Ze.match(/Chrome\/(\d+)/))&&(xe=we[1]);var nt=xe&&+xe,rt=V("species"),ot=function(e){return nt>=51||!i(function(){var t=[];return(t.constructor={})[rt]=function(){return{foo:1}},1!==t[e](Boolean).foo})},it=V("isConcatSpreadable"),ut=nt>=51||!i(function(){var e=[];return e[it]=!1,e.concat()[0]!==e}),at=ot("concat"),ct=function(e){if(!v(e))return!1;var t=e[it];return t!==undefined?!!t:m(e)};Je({target:"Array",proto:!0,forced:!ut||!at},{concat:function(e){var t,n,r,o,i,u=l(this),a=B(u,0),c=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?u:arguments[t],ct(i)){if(c+(o=y(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,c++)n in i&&qe(a,c,i[n])}else{if(c>=9007199254740991)throw TypeError("Maximum allowed index exceeded");qe(a,c++,i)}return a.length=c,a}});var ft=function(){var e=x(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t};function st(e,t){return RegExp(e,t)}var lt={UNSUPPORTED_Y:i(function(){var e=st("a","y");return e.lastIndex=2,null!=e.exec("abcd")}),BROKEN_CARET:i(function(){var e=st("^r","gy");return e.lastIndex=2,null!=e.exec("str")})},dt=RegExp.prototype.exec,pt=String.prototype.replace,gt=dt,ht=function(){var e=/a/,t=/b*/g;return dt.call(e,"a"),dt.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),yt=lt.UNSUPPORTED_Y||lt.BROKEN_CARET,vt=/()??/.exec("")[1]!==undefined;(ht||vt||yt)&&(gt=function(e){var t,n,r,o,i=this,u=yt&&i.sticky,a=ft.call(i),c=i.source,f=0,s=e;return u&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),s=String(e).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==e[i.lastIndex-1])&&(c="(?: "+c+")",s=" "+s,f++),n=new RegExp("^(?:"+c+")",a)),vt&&(n=new RegExp("^"+c+"$(?!\\s)",a)),ht&&(t=i.lastIndex),r=dt.call(u?n:i,s),u?r?(r.input=r.input.slice(f),r[0]=r[0].slice(f),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:ht&&r&&(i.lastIndex=i.global?r.index+r[0].length:t),vt&&r&&r.length>1&&pt.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)arguments[o]===undefined&&(r[o]=undefined)}),r});var mt=gt;Je({target:"RegExp",proto:!0,forced:/./.exec!==mt},{exec:mt});var Ct=V("species"),bt=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),St="$0"==="a".replace(/./,"$0"),Et=V("replace"),wt=!!/./[Et]&&""===/./[Et]("a","$0"),xt=!i(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}),Ft=function(e,t,n,r){var o=V(e),u=!i(function(){var t={};return t[o]=function(){return 7},7!=""[e](t)}),a=u&&!i(function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[Ct]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return t=!0,null},n[o](""),!t});if(!u||!a||"replace"===e&&(!bt||!St||wt)||"split"===e&&!xt){var c=/./[o],f=n(o,""[e],function(e,t,n,r,o){return t.exec===mt?u&&!o?{done:!0,value:c.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}},{REPLACE_KEEPS_$0:St,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:wt}),s=f[0],l=f[1];Ae(String.prototype,e,s),Ae(RegExp.prototype,o,2==t?function(e,t){return l.call(e,this,t)}:function(e){return l.call(e,this)})}r&&T(RegExp.prototype[o],"sham",!0)},At=V("match"),Ot=function(e){var t;return v(e)&&((t=e[At])!==undefined?!!t:"RegExp"==a(e))},It=V("species"),Tt=function(e){return function(t,n){var r,o,i=String(s(t)),u=g(n),a=i.length;return u<0||u>=a?e?"":undefined:(r=i.charCodeAt(u))<55296||r>56319||u+1===a||(o=i.charCodeAt(u+1))<56320||o>57343?e?i.charAt(u):r:e?i.slice(u,u+2):o-56320+(r-55296<<10)+65536}},_t={codeAt:Tt(!1),charAt:Tt(!0)}.charAt,jt=function(e,t,n){return t+(n?_t(e,t).length:1)},Rt=function(e,t){var n=e.exec;if("function"==typeof n){var r=n.call(e,t);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return mt.call(e,t)},Nt=[].push,Lt=Math.min,Mt=!i(function(){return!RegExp(4294967295,"y")});Ft("split",2,function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(s(this)),o=n===undefined?4294967295:n>>>0;if(0===o)return[];if(e===undefined)return[r];if(!Ot(e))return t.call(r,e,o);for(var i,u,a,c=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,d=new RegExp(e.source,f+"g");(i=mt.call(d,r))&&!((u=d.lastIndex)>l&&(c.push(r.slice(l,i.index)),i.length>1&&i.index<r.length&&Nt.apply(c,i.slice(1)),a=i[0].length,l=u,c.length>=o));)d.lastIndex===i.index&&d.lastIndex++;return l===r.length?!a&&d.test("")||c.push(""):c.push(r.slice(l)),c.length>o?c.slice(0,o):c}:"0".split(undefined,0).length?function(e,n){return e===undefined&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=s(this),i=t==undefined?undefined:t[e];return i!==undefined?i.call(t,o,n):r.call(String(o),t,n)},function(e,i){var u=n(r,e,this,i,r!==t);if(u.done)return u.value;var a=x(e),c=String(this),f=function(e,t){var n,r=x(e).constructor;return r===undefined||(n=x(r)[It])==undefined?t:o(n)}(a,RegExp),s=a.unicode,l=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(Mt?"y":"g"),d=new f(Mt?a:"^(?:"+a.source+")",l),p=i===undefined?4294967295:i>>>0;if(0===p)return[];if(0===c.length)return null===Rt(d,c)?[c]:[];for(var g=0,h=0,v=[];h<c.length;){d.lastIndex=Mt?h:0;var m,C=Rt(d,Mt?c:c.slice(h));if(null===C||(m=Lt(y(d.lastIndex+(Mt?0:h)),c.length))===g)h=jt(c,h,s);else{if(v.push(c.slice(g,h)),v.length===p)return v;for(var b=1;b<=C.length-1;b++)if(v.push(C[b]),v.length===p)return v;h=g=m}}return v.push(c.slice(g)),v}]},!Mt);var Pt,kt=Object.keys||function(e){return Me(e,Pe)},$t=C?Object.defineProperties:function(e,t){x(e);for(var n,r=kt(t),o=r.length,i=0;o>i;)O.f(e,n=r[i++],t[n]);return e},Ut=Te("document","documentElement"),Dt=he("IE_PROTO"),Gt=function(){},zt=function(e){return"<script>"+e+"<\/script>"},Vt=function(){try{Pt=document.domain&&new ActiveXObject("htmlfile")}catch(Cr){}var e,t;Vt=Pt?function(e){e.write(zt("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Pt):((t=E("iframe")).style.display="none",Ut.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(zt("document.F=Object")),e.close(),e.F);for(var n=Pe.length;n--;)delete Vt.prototype[Pe[n]];return Vt()};ye[Dt]=!0;var Wt=Object.create||function(e,t){var n;return null!==e?(Gt.prototype=x(e),n=new Gt,Gt.prototype=null,n[Dt]=e):n=Vt(),t===undefined?n:$t(n,t)},Bt=V("unscopables"),Yt=Array.prototype;Yt[Bt]==undefined&&O.f(Yt,Bt,{configurable:!0,value:Wt(null)});var Kt=X.find,Xt=!0;"find"in[]&&Array(1).find(function(){Xt=!1}),Je({target:"Array",proto:!0,forced:Xt},{find:function(e){return Kt(this,e,arguments.length>1?arguments[1]:undefined)}}),function(e){Yt[Bt][e]=!0}("find");var Ht,Jt=V("match"),qt=ue.f,Zt="".startsWith,Qt=Math.min,en=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[Jt]=!1,"/./"[e](t)}catch(r){}}return!1}("startsWith");Je({target:"String",proto:!0,forced:!!(en||(Ht=qt(String.prototype,"startsWith"),!Ht||Ht.writable))&&!en},{startsWith:function(e){var t=String(s(this));!function(e){if(Ot(e))throw TypeError("The method doesn't accept regular expressions")}(e);var n=y(Qt(arguments.length>1?arguments[1]:undefined,t.length)),r=String(e);return Zt?Zt.call(t,r,n):t.slice(n,n+r.length)===r}});var tn=X.map;Je({target:"Array",proto:!0,forced:!ot("map")},{map:function(e){return tn(this,e,arguments.length>1?arguments[1]:undefined)}});var nn=X.filter;Je({target:"Array",proto:!0,forced:!ot("filter")},{filter:function(e){return nn(this,e,arguments.length>1?arguments[1]:undefined)}});var rn={};rn[V("toStringTag")]="z";var on="[object z]"===String(rn),un=V("toStringTag"),an="Arguments"==a(function(){return arguments}()),cn=on?a:function(e){var t,n,r;return e===undefined?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(Cr){}}(t=Object(e),un))?n:an?a(t):"Object"==(r=a(t))&&"function"==typeof t.callee?"Arguments":r},fn=on?{}.toString:function(){return"[object "+cn(this)+"]"};on||Ae(Object.prototype,"toString",fn,{unsafe:!0});var sn=RegExp.prototype,ln=sn.toString,dn=i(function(){return"/a/b"!=ln.call({source:"a",flags:"b"})}),pn="toString"!=ln.name;(dn||pn)&&Ae(RegExp.prototype,"toString",function(){var e=x(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(n===undefined&&e instanceof RegExp&&!("flags"in sn)?ft.call(e):n)},{unsafe:!0}),Ft("match",1,function(e,t,n){return[function(t){var n=s(this),r=t==undefined?undefined:t[e];return r!==undefined?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var o=x(e),i=String(this);if(!o.global)return Rt(o,i);var u=o.unicode;o.lastIndex=0;for(var a,c=[],f=0;null!==(a=Rt(o,i));){var s=String(a[0]);c[f]=s,""===s&&(o.lastIndex=jt(i,y(o.lastIndex),u)),f++}return 0===f?null:c}]});var gn=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(Cr){}return function(n,r){return x(n),function(e){if(!v(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(r),t?e.call(n,r):n.__proto__=r,n}}():undefined),hn=function(e,t,n){var r,o;return gn&&"function"==typeof(r=t.constructor)&&r!==n&&v(o=r.prototype)&&o!==n.prototype&&gn(e,o),e},yn=V("species"),vn=O.f,mn=$e.f,Cn=Fe.set,bn=V("match"),Sn=r.RegExp,En=Sn.prototype,wn=/a/g,xn=/a/g,Fn=new Sn(wn)!==wn,An=lt.UNSUPPORTED_Y;if(C&&Xe("RegExp",!Fn||An||i(function(){return xn[bn]=!1,Sn(wn)!=wn||Sn(xn)==xn||"/a/i"!=Sn(wn,"i")}))){for(var On=function(e,t){var n,r=this instanceof On,o=Ot(e),i=t===undefined;if(!r&&o&&e.constructor===On&&i)return e;Fn?o&&!i&&(e=e.source):e instanceof On&&(i&&(t=ft.call(e)),e=e.source),An&&(n=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var u=hn(Fn?new Sn(e,t):Sn(e,t),r?this:En,On);return An&&n&&Cn(u,{sticky:n}),u},In=function(e){e in On||vn(On,e,{configurable:!0,get:function(){return Sn[e]},set:function(t){Sn[e]=t}})},Tn=mn(Sn),_n=0;Tn.length>_n;)In(Tn[_n++]);En.constructor=On,On.prototype=En,Ae(r,"RegExp",On)}!function(e){var t=Te(e),n=O.f;C&&t&&!t[yn]&&n(t,yn,{configurable:!0,get:function(){return this}})}("RegExp");var jn=ot("splice"),Rn=Math.max,Nn=Math.min;Je({target:"Array",proto:!0,forced:!jn},{splice:function(e,t){var n,r,o,i,u,a,c=l(this),f=y(c.length),s=Re(e,f),d=arguments.length;if(0===d?n=r=0:1===d?(n=0,r=f-s):(n=d-2,r=Nn(Rn(g(t),0),f-s)),f+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(o=B(c,r),i=0;i<r;i++)(u=s+i)in c&&qe(o,i,c[u]);if(o.length=r,n<r){for(i=s;i<f-r;i++)a=i+n,(u=i+r)in c?c[a]=c[u]:delete c[a];for(i=f;i>f-r+n;i--)delete c[i-1]}else if(n>r)for(i=f-r;i>s;i--)a=i+n-1,(u=i+r-1)in c?c[a]=c[u]:delete c[a];for(i=0;i<n;i++)c[i+s]=arguments[i+2];return c.length=f-r+n,o}});var Ln=Math.floor,Mn="".replace,Pn=/\$([$&'`]|\d\d?|<[^>]*>)/g,kn=/\$([$&'`]|\d\d?)/g,$n=function(e,t,n,r,o,i){var u=n+e.length,a=r.length,c=kn;return o!==undefined&&(o=l(o),c=Pn),Mn.call(i,c,function(i,c){var f;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(u);case"<":f=o[c.slice(1,-1)];break;default:var s=+c;if(0===s)return i;if(s>a){var l=Ln(s/10);return 0===l?i:l<=a?r[l-1]===undefined?c.charAt(1):r[l-1]+c.charAt(1):i}f=r[s-1]}return f===undefined?"":f})},Un=Math.max,Dn=Math.min;function Gn(e){return(Gn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function zn(e){return function(e){if(Array.isArray(e))return Vn(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Vn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vn(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Vn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Ft("replace",2,function(e,t,n,r){var o=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=r.REPLACE_KEEPS_$0,u=o?"$":"$0";return[function(n,r){var o=s(this),i=n==undefined?undefined:n[e];return i!==undefined?i.call(n,o,r):t.call(String(o),n,r)},function(e,r){if(!o&&i||"string"==typeof r&&-1===r.indexOf(u)){var a=n(t,e,this,r);if(a.done)return a.value}var c=x(e),f=String(this),s="function"==typeof r;s||(r=String(r));var l=c.global;if(l){var d=c.unicode;c.lastIndex=0}for(var p=[];;){var h=Rt(c,f);if(null===h)break;if(p.push(h),!l)break;""===String(h[0])&&(c.lastIndex=jt(f,y(c.lastIndex),d))}for(var v,m="",C=0,b=0;b<p.length;b++){h=p[b];for(var S=String(h[0]),E=Un(Dn(g(h.index),f.length),0),w=[],F=1;F<h.length;F++)w.push((v=h[F])===undefined?v:String(v));var A=h.groups;if(s){var O=[S].concat(w,E,f);A!==undefined&&O.push(A);var I=String(r.apply(undefined,O))}else I=$n(S,f,E,w,A,r);E>=C&&(m+=f.slice(C,E)+I,C=E+S.length)}return m+f.slice(C)}]}),Je({target:"Object",stat:!0,forced:i(function(){kt(1)})},{keys:function(e){return kt(l(e))}});var Wn="[\t\n\x0B\f\r                　\u2028\u2029\ufeff]",Bn=RegExp("^"+Wn+Wn+"*"),Yn=RegExp(Wn+Wn+"*$"),Kn=function(e){return function(t){var n=String(s(t));return 1&e&&(n=n.replace(Bn,"")),2&e&&(n=n.replace(Yn,"")),n}},Xn={start:Kn(1),end:Kn(2),trim:Kn(3)},Hn=$e.f,Jn=ue.f,qn=O.f,Zn=Xn.trim,Qn=r.Number,er=Qn.prototype,tr="Number"==a(Wt(er)),nr=function(e){var t,n,r,o,i,u,a,c,f=F(e,!1);if("string"==typeof f&&f.length>2)if(43===(t=(f=Zn(f)).charCodeAt(0))||45===t){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(u=(i=f.slice(2)).length,a=0;a<u;a++)if((c=i.charCodeAt(a))<48||c>o)return NaN;return parseInt(i,r)}return+f};if(Xe("Number",!Qn(" 0o1")||!Qn("0b1")||Qn("+0x1"))){for(var rr,or=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof or&&(tr?i(function(){er.valueOf.call(n)}):"Number"!=a(n))?hn(new Qn(nr(t)),n,or):nr(t)},ir=C?Hn(Qn):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),ur=0;ir.length>ur;ur++)L(Qn,rr=ir[ur])&&!L(or,rr)&&qn(or,rr,Jn(Qn,rr));or.prototype=er,er.constructor=or,Ae(r,"Number",or)}var ar=[].join,cr=f!=Object,fr=H("join",",");Je({target:"Array",proto:!0,forced:cr||!fr},{join:function(e){return ar.call(oe(this),e===undefined?",":e)}});var sr=1e3,lr=60*sr,dr=60*lr,pr=24*dr,gr=365.25*pr,hr=function(e,t){t=t||{};var n=Gn(e);if("string"===n&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*gr;case"days":case"day":case"d":return n*pr;case"hours":case"hour":case"hrs":case"hr":case"h":return n*dr;case"minutes":case"minute":case"mins":case"min":case"m":return n*lr;case"seconds":case"second":case"secs":case"sec":case"s":return n*sr;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return undefined}}(e);if("number"===n&&!1===isNaN(e))return t.long?function(e){return yr(e,pr,"day")||yr(e,dr,"hour")||yr(e,lr,"minute")||yr(e,sr,"second")||e+" ms"}(e):function(e){if(e>=pr)return Math.round(e/pr)+"d";if(e>=dr)return Math.round(e/dr)+"h";if(e>=lr)return Math.round(e/lr)+"m";if(e>=sr)return Math.round(e/sr)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function yr(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var vr=function(e){function t(e){var r,o=null;function i(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];if(i.enabled){var u=i,a=Number(new Date),c=a-(r||a);u.diff=c,u.prev=r,u.curr=a,r=a,n[0]=t.coerce(n[0]),"string"!=typeof n[0]&&n.unshift("%O");var f=0;n[0]=n[0].replace(/%([a-zA-Z%])/g,function(e,r){if("%%"===e)return"%";f++;var o=t.formatters[r];if("function"==typeof o){var i=n[f];e=o.call(u,i),n.splice(f,1),f--}return e}),t.formatArgs.call(u,n),(u.log||t.log).apply(u,n)}}return i.namespace=e,i.useColors=t.useColors(),i.color=t.selectColor(e),i.extend=n,i.destroy=t.destroy,Object.defineProperty(i,"enabled",{enumerable:!0,configurable:!1,get:function(){return null===o?t.enabled(e):o},set:function(e){o=e}}),"function"==typeof t.init&&t.init(i),i}function n(e,n){var r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function r(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t["default"]=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){var e=zn(t.names.map(r)).concat(zn(t.skips.map(r).map(function(e){return"-"+e}))).join(",");return t.enable(""),e},t.enable=function(e){var n;t.save(e),t.names=[],t.skips=[];var r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=hr,t.destroy=function(){},Object.keys(e).forEach(function(n){t[n]=e[n]}),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){for(var n=0,r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t},mr=t(function(e,t){t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;var n="color: "+this.color;t.splice(1,0,n,"color: inherit");var r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(o=r))}),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(Cr){}},t.load=function(){var e;try{e=t.storage.getItem("debug")}catch(Cr){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(Cr){}}(),t.destroy=function(){},t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||function(){},e.exports=vr(t),e.exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(Cr){return"[UnexpectedJSONParseError]: "+Cr.message}}});mr.formatArgs,mr.save,mr.load,mr.useColors,mr.storage,mr.destroy,mr.colors,mr.log;window.zamaf_select_config=function(e){var t=0;e.forEach(function(e){t+=parseInt(e.weight)});var n,r=Math.random()*t,o=0,i=window.location.href.split("?"),u=!1;if(i.length>1){var a=i[1].split("&").find(function(e){return e.startsWith("zaf_ab=")});u=a&&parseInt(a.split("=")[1])}n=u||0===u?e[u]:e.find(function(e,t){if(r<=o+parseInt(e.weight))return e.index=t,e;o+=parseInt(e.weight)});var c=document.createElement("script");c.setAttribute("async","async"),c.src=n.url,document.getElementsByTagName("head")[0].appendChild(c)},window.zamaf_select_config(window.zaf_ab_candidates)}();
