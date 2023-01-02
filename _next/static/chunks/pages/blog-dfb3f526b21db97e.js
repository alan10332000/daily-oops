(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7880:function(t){var n;n=function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="week",s="month",a="quarter",u="year",o="date",c="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},l="en",$={};$[l]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],e=t%100;return"["+t+(n[(e-20)%10]||n[e]||"th")+"]"}};var m=function(t){return t instanceof p},M=function t(n,e,r){var i;if(!n)return l;if("string"==typeof n){var s=n.toLowerCase();$[s]&&(i=s),e&&($[s]=e,i=s);var a=n.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=n.name;$[u]=n,i=u}return!r&&i&&(l=i),i||!r&&l},v=function(t,n){if(m(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new p(e)},y={s:d,z:function(t){var n=-t.utcOffset(),e=Math.abs(n);return(n<=0?"+":"-")+d(Math.floor(e/60),2,"0")+":"+d(e%60,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),i=n.clone().add(r,s),a=e-i<0,u=n.clone().add(r+(a?-1:1),s);return+(-(r+(e-i)/(a?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return({M:s,y:u,w:i,d:"day",D:o,h:r,m:e,s:n,ms:t,Q:a})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}};y.l=M,y.i=m,y.w=function(t,n){return v(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var p=function(){function d(t){this.$L=M(t.locale,null,!0),this.parse(t)}var l=d.prototype;return l.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(y.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return y},l.isValid=function(){return this.$d.toString()!==c},l.isSame=function(t,n){var e=v(t);return this.startOf(n)<=e&&e<=this.endOf(n)},l.isAfter=function(t,n){return v(t)<this.startOf(n)},l.isBefore=function(t,n){return this.endOf(n)<v(t)},l.$g=function(t,n,e){return y.u(t)?this[n]:this.set(e,t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,a){var c=this,h=!!y.u(a)||a,f=y.p(t),d=function(t,n){var e=y.w(c.$u?Date.UTC(c.$y,n,t):new Date(c.$y,n,t),c);return h?e:e.endOf("day")},l=function(t,n){return y.w(c.toDate()[t].apply(c.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(n)),c)},$=this.$W,m=this.$M,M=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case u:return h?d(1,0):d(31,11);case s:return h?d(1,m):d(0,m+1);case i:var p=this.$locale().weekStart||0,D=($<p?$+7:$)-p;return d(h?M-D:M+(6-D),m);case"day":case o:return l(v+"Hours",0);case r:return l(v+"Minutes",1);case e:return l(v+"Seconds",2);case n:return l(v+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(i,a){var c,h=y.p(i),f="set"+(this.$u?"UTC":""),d=((c={}).day=f+"Date",c[o]=f+"Date",c[s]=f+"Month",c[u]=f+"FullYear",c[r]=f+"Hours",c[e]=f+"Minutes",c[n]=f+"Seconds",c[t]=f+"Milliseconds",c)[h],l="day"===h?this.$D+(a-this.$W):a;if(h===s||h===u){var $=this.clone().set(o,1);$.$d[d](l),$.init(),this.$d=$.set(o,Math.min(this.$D,$.daysInMonth())).$d}else d&&this.$d[d](l);return this.init(),this},l.set=function(t,n){return this.clone().$set(t,n)},l.get=function(t){return this[y.p(t)]()},l.add=function(t,a){var o,c=this;t=Number(t);var h=y.p(a),f=function(n){var e=v(c);return y.w(e.date(e.date()+Math.round(n*t)),c)};if(h===s)return this.set(s,this.$M+t);if(h===u)return this.set(u,this.$y+t);if("day"===h)return f(1);if(h===i)return f(7);var d=((o={})[e]=6e4,o[r]=36e5,o[n]=1e3,o)[h]||1,l=this.$d.getTime()+t*d;return y.w(l,this)},l.subtract=function(t,n){return this.add(-1*t,n)},l.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||c;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),s=this.$H,a=this.$m,u=this.$M,o=e.weekdays,h=e.months,d=function(t,e,i,s){return t&&(t[e]||t(n,r))||i[e].slice(0,s)},l=function(t){return y.s(s%12||12,t,"0")},$=e.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:y.s(u+1,2,"0"),MMM:d(e.monthsShort,u,h,3),MMMM:d(h,u),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:d(e.weekdaysMin,this.$W,o,2),ddd:d(e.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:y.s(s,2,"0"),h:l(1),hh:l(2),a:$(s,a,!0),A:$(s,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:i};return r.replace(f,function(t,n){return n||m[t]||i.replace(":","")})},l.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},l.diff=function(t,o,c){var h,f=y.p(o),d=v(t),l=(d.utcOffset()-this.utcOffset())*6e4,$=this-d,m=y.m(this,d);return m=((h={})[u]=m/12,h[s]=m,h[a]=m/3,h[i]=($-l)/6048e5,h.day=($-l)/864e5,h[r]=$/36e5,h[e]=$/6e4,h[n]=$/1e3,h)[f]||$,c?m:y.a(m)},l.daysInMonth=function(){return this.endOf(s).$D},l.$locale=function(){return $[this.$L]},l.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=M(t,n,!0);return r&&(e.$L=r),e},l.clone=function(){return y.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},d}(),D=p.prototype;return v.prototype=D,[["$ms",t],["$s",n],["$m",e],["$H",r],["$W","day"],["$M",s],["$y",u],["$D",o]].forEach(function(t){D[t[1]]=function(n){return this.$g(n,t[0],t[1])}}),v.extend=function(t,n){return t.$i||(t(n,p,v),t.$i=!0),v},v.locale=M,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=$[l],v.Ls=$,v.p={},v},t.exports=n()},5720:function(t){var n;n=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(n,e,r){var i=e.prototype,s=i.format;r.en.formats=t,i.format=function(n){void 0===n&&(n="YYYY-MM-DDTHH:mm:ssZ");var e,r,i=this.$locale().formats,a=(e=n,r=void 0===i?{}:i,e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(n,e,i){var s=i&&i.toUpperCase();return e||r[i]||t[i]||r[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,n,e){return n||e.slice(1)})}));return s.call(this,a)}}},t.exports=n()},370:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return e(948)}])},5148:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(1527),i=e(5617),s=e(9709),a=e(4708),u=e.n(a);function o(t){let{post:n,index:e,totalCount:a}=t,{date:{year:o,month:c,day:h},slug:f}=n,d=(0,s.Z)("".concat(o,"-").concat(c,"-").concat(h));return(0,r.jsxs)("div",{className:"Box-row Box-row--hover-gray d-flex flex-items-start",children:[(0,r.jsx)("div",{className:"mr-2 mt-1 d-flex flex-items-start",style:{color:"var(--color-scale-red-2 )"},children:(0,r.jsx)(i.qOA,{})}),(0,r.jsxs)("div",{className:"flex-auto",children:[(0,r.jsx)(u(),{href:"/blog/".concat(o,"/").concat(c,"/").concat(h,"/").concat(f),children:(0,r.jsx)("strong",{children:n.title})}),(0,r.jsxs)("div",{className:"text-small color-text-secondary",children:["#",a-e," posted on ",d.format("LL")]})]})]})}},9709:function(t,n,e){"use strict";var r=e(7880),i=e.n(r),s=e(5720),a=e.n(s);i().extend(a()),n.Z=i()},948:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return u},default:function(){return o}});var r=e(1527),i=e(5148),s=e(9298),a=e.n(s),u=!0;function o(t){let{posts:n}=t;return(0,r.jsxs)("article",{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"Blog | Daily Oops!"})}),(0,r.jsxs)("div",{className:"d-block mx-auto markdown-body py-4 px-3",style:{maxWidth:680},children:[(0,r.jsx)("div",{className:"Box",children:n.map((t,e)=>(0,r.jsx)(i.Z,{post:t,index:e,totalCount:n.length},t.id))}),(0,r.jsx)("a",{href:"/feed.xml",children:(0,r.jsx)("button",{className:"mt-3 btn btn-primary",type:"button",children:"Subscribe via RSS"})})]})]})}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=370)}),_N_E=t.O()}]);