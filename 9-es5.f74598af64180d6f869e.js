(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{oeuD:function(n,e,i){var r;!function(t){"use strict";var s,o,u,c=9e15,f="0123456789abcdef",a="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",h="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",d={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-c,maxE:c,crypto:!1},l=!0,p="[DecimalError] Invalid argument: ",g=Math.floor,w=Math.pow,m=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,v=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,N=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,b=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,E=1e7,x=a.length-1,y=h.length-1,M={name:"[object Decimal]"};function q(n){var e,i,r,t=n.length-1,s="",o=n[0];if(t>0){for(s+=o,e=1;e<t;e++)(i=7-(r=n[e]+"").length)&&(s+=_(i)),s+=r;(i=7-(r=(o=n[e])+"").length)&&(s+=_(i))}else if(0===o)return"0";for(;o%10==0;)o/=10;return s+o}function O(n,e,i){if(n!==~~n||n<e||n>i)throw Error(p+n)}function D(n,e,i,r){var t,s,o,u;for(s=n[0];s>=10;s/=10)--e;return--e<0?(e+=7,t=0):(t=Math.ceil((e+1)/7),e%=7),s=w(10,7-e),u=n[t]%s|0,null==r?e<3?(0==e?u=u/100|0:1==e&&(u=u/10|0),o=i<4&&99999==u||i>3&&49999==u||5e4==u||0==u):o=(i<4&&u+1==s||i>3&&u+1==s/2)&&(n[t+1]/s/100|0)==w(10,e-2)-1||(u==s/2||0==u)&&0==(n[t+1]/s/100|0):e<4?(0==e?u=u/1e3|0:1==e?u=u/100|0:2==e&&(u=u/10|0),o=(r||i<4)&&9999==u||!r&&i>3&&4999==u):o=((r||i<4)&&u+1==s||!r&&i>3&&u+1==s/2)&&(n[t+1]/s/1e3|0)==w(10,e-3)-1,o}function F(n,e,i){for(var r,t,s=[0],o=0,u=n.length;o<u;){for(t=s.length;t--;)s[t]*=e;for(s[0]+=f.indexOf(n.charAt(o++)),r=0;r<s.length;r++)s[r]>i-1&&(void 0===s[r+1]&&(s[r+1]=0),s[r+1]+=s[r]/i|0,s[r]%=i)}return s.reverse()}M.absoluteValue=M.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),Z(n)},M.ceil=function(){return Z(new this.constructor(this),this.e+1,2)},M.comparedTo=M.cmp=function(n){var e,i,r,t,s=this,o=s.d,u=(n=new s.constructor(n)).d,c=s.s,f=n.s;if(!o||!u)return c&&f?c!==f?c:o===u?0:!o^c<0?1:-1:NaN;if(!o[0]||!u[0])return o[0]?c:u[0]?-f:0;if(c!==f)return c;if(s.e!==n.e)return s.e>n.e^c<0?1:-1;for(e=0,i=(r=o.length)<(t=u.length)?r:t;e<i;++e)if(o[e]!==u[e])return o[e]>u[e]^c<0?1:-1;return r===t?0:r>t^c<0?1:-1},M.cosine=M.cos=function(){var n,e,i=this,r=i.constructor;return i.d?i.d[0]?(e=r.rounding,r.precision=(n=r.precision)+Math.max(i.e,i.sd())+7,r.rounding=1,i=function(n,e){var i,r,t=e.d.length;t<32?r=(1/J(4,i=Math.ceil(t/3))).toString():(i=16,r="2.3283064365386962890625e-10"),n.precision+=i,e=$(n,1,e.times(r),new n(1));for(var s=i;s--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return n.precision-=i,e}(r,W(r,i)),r.precision=n,r.rounding=e,Z(2==u||3==u?i.neg():i,n,e,!0)):new r(1):new r(NaN)},M.cubeRoot=M.cbrt=function(){var n,e,i,r,t,s,o,u,c,f,a=this,h=a.constructor;if(!a.isFinite()||a.isZero())return new h(a);for(l=!1,(s=a.s*w(a.s*a,1/3))&&Math.abs(s)!=1/0?r=new h(s.toString()):(i=q(a.d),(s=((n=a.e)-i.length+1)%3)&&(i+=1==s||-2==s?"0":"00"),s=w(i,1/3),n=g((n+1)/3)-(n%3==(n<0?-1:2)),(r=new h(i=s==1/0?"5e"+n:(i=s.toExponential()).slice(0,i.indexOf("e")+1)+n)).s=a.s),o=(n=h.precision)+3;;)if(f=(c=(u=r).times(u).times(u)).plus(a),r=A(f.plus(a).times(u),f.plus(c),o+2,1),q(u.d).slice(0,o)===(i=q(r.d)).slice(0,o)){if("9999"!=(i=i.slice(o-3,o+1))&&(t||"4999"!=i)){+i&&(+i.slice(1)||"5"!=i.charAt(0))||(Z(r,n+1,1),e=!r.times(r).times(r).eq(a));break}if(!t&&(Z(u,n+1,0),u.times(u).times(u).eq(a))){r=u;break}o+=4,t=1}return l=!0,Z(r,n,h.rounding,e)},M.decimalPlaces=M.dp=function(){var n,e=this.d,i=NaN;if(e){if(i=7*((n=e.length-1)-g(this.e/7)),n=e[n])for(;n%10==0;n/=10)i--;i<0&&(i=0)}return i},M.dividedBy=M.div=function(n){return A(this,new this.constructor(n))},M.dividedToIntegerBy=M.divToInt=function(n){var e=this.constructor;return Z(A(this,new e(n),0,1,1),e.precision,e.rounding)},M.equals=M.eq=function(n){return 0===this.cmp(n)},M.floor=function(){return Z(new this.constructor(this),this.e+1,3)},M.greaterThan=M.gt=function(n){return this.cmp(n)>0},M.greaterThanOrEqualTo=M.gte=function(n){var e=this.cmp(n);return 1==e||0===e},M.hyperbolicCosine=M.cosh=function(){var n,e,i,r,t,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;r=o.rounding,o.precision=(i=o.precision)+Math.max(s.e,s.sd())+4,o.rounding=1,(t=s.d.length)<32?e=(1/J(4,n=Math.ceil(t/3))).toString():(n=16,e="2.3283064365386962890625e-10"),s=$(o,1,s.times(e),new o(1),!0);for(var c,f=n,a=new o(8);f--;)c=s.times(s),s=u.minus(c.times(a.minus(c.times(a))));return Z(s,o.precision=i,o.rounding=r,!0)},M.hyperbolicSine=M.sinh=function(){var n,e,i,r,t=this,s=t.constructor;if(!t.isFinite()||t.isZero())return new s(t);if(i=s.rounding,s.precision=(e=s.precision)+Math.max(t.e,t.sd())+4,s.rounding=1,(r=t.d.length)<3)t=$(s,2,t,t,!0);else{n=1.4*Math.sqrt(r),t=$(s,2,t=t.times(1/J(5,n=n>16?16:0|n)),t,!0);for(var o,u=new s(5),c=new s(16),f=new s(20);n--;)o=t.times(t),t=t.times(u.plus(o.times(c.times(o).plus(f))))}return s.precision=e,s.rounding=i,Z(t,e,i,!0)},M.hyperbolicTangent=M.tanh=function(){var n,e,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(e=r.rounding,r.precision=(n=r.precision)+7,r.rounding=1,A(i.sinh(),i.cosh(),r.precision=n,r.rounding=e)):new r(i.s)},M.inverseCosine=M.acos=function(){var n,e=this,i=e.constructor,r=e.abs().cmp(1),t=i.precision,s=i.rounding;return-1!==r?0===r?e.isNeg()?L(i,t,s):new i(0):new i(NaN):e.isZero()?L(i,t+4,s).times(.5):(i.precision=t+6,i.rounding=1,e=e.asin(),n=L(i,t+4,s).times(.5),i.precision=t,i.rounding=s,n.minus(e))},M.inverseHyperbolicCosine=M.acosh=function(){var n,e,i=this,r=i.constructor;return i.lte(1)?new r(i.eq(1)?0:NaN):i.isFinite()?(e=r.rounding,r.precision=(n=r.precision)+Math.max(Math.abs(i.e),i.sd())+4,r.rounding=1,l=!1,i=i.times(i).minus(1).sqrt().plus(i),l=!0,r.precision=n,r.rounding=e,i.ln()):new r(i)},M.inverseHyperbolicSine=M.asinh=function(){var n,e,i=this,r=i.constructor;return!i.isFinite()||i.isZero()?new r(i):(e=r.rounding,r.precision=(n=r.precision)+2*Math.max(Math.abs(i.e),i.sd())+6,r.rounding=1,l=!1,i=i.times(i).plus(1).sqrt().plus(i),l=!0,r.precision=n,r.rounding=e,i.ln())},M.inverseHyperbolicTangent=M.atanh=function(){var n,e,i,r,t=this,s=t.constructor;return t.isFinite()?t.e>=0?new s(t.abs().eq(1)?t.s/0:t.isZero()?t:NaN):(n=s.precision,e=s.rounding,r=t.sd(),Math.max(r,n)<2*-t.e-1?Z(new s(t),n,e,!0):(s.precision=i=r-t.e,t=A(t.plus(1),new s(1).minus(t),i+n,1),s.precision=n+4,s.rounding=1,t=t.ln(),s.precision=n,s.rounding=e,t.times(.5))):new s(NaN)},M.inverseSine=M.asin=function(){var n,e,i,r,t=this,s=t.constructor;return t.isZero()?new s(t):(e=t.abs().cmp(1),i=s.precision,r=s.rounding,-1!==e?0===e?((n=L(s,i+4,r).times(.5)).s=t.s,n):new s(NaN):(s.precision=i+6,s.rounding=1,t=t.div(new s(1).minus(t.times(t)).sqrt().plus(1)).atan(),s.precision=i,s.rounding=r,t.times(2)))},M.inverseTangent=M.atan=function(){var n,e,i,r,t,s,o,u,c,f=this,a=f.constructor,h=a.precision,d=a.rounding;if(f.isFinite()){if(f.isZero())return new a(f);if(f.abs().eq(1)&&h+4<=y)return(o=L(a,h+4,d).times(.25)).s=f.s,o}else{if(!f.s)return new a(NaN);if(h+4<=y)return(o=L(a,h+4,d).times(.5)).s=f.s,o}for(a.precision=u=h+10,a.rounding=1,n=i=Math.min(28,u/7+2|0);n;--n)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(l=!1,e=Math.ceil(u/7),r=1,c=f.times(f),o=new a(f),t=f;-1!==n;)if(t=t.times(c),s=o.minus(t.div(r+=2)),t=t.times(c),void 0!==(o=s.plus(t.div(r+=2))).d[e])for(n=e;o.d[n]===s.d[n]&&n--;);return i&&(o=o.times(2<<i-1)),l=!0,Z(o,a.precision=h,a.rounding=d,!0)},M.isFinite=function(){return!!this.d},M.isInteger=M.isInt=function(){return!!this.d&&g(this.e/7)>this.d.length-2},M.isNaN=function(){return!this.s},M.isNegative=M.isNeg=function(){return this.s<0},M.isPositive=M.isPos=function(){return this.s>0},M.isZero=function(){return!!this.d&&0===this.d[0]},M.lessThan=M.lt=function(n){return this.cmp(n)<0},M.lessThanOrEqualTo=M.lte=function(n){return this.cmp(n)<1},M.logarithm=M.log=function(n){var e,i,r,t,s,o,u,c,f=this.constructor,a=f.precision,h=f.rounding;if(null==n)n=new f(10),e=!0;else{if(i=(n=new f(n)).d,n.s<0||!i||!i[0]||n.eq(1))return new f(NaN);e=n.eq(10)}if(i=this.d,this.s<0||!i||!i[0]||this.eq(1))return new f(i&&!i[0]?-1/0:1!=this.s?NaN:i?0:1/0);if(e)if(i.length>1)s=!0;else{for(t=i[0];t%10==0;)t/=10;s=1!==t}if(l=!1,o=H(this,u=a+5),r=e?k(f,u+10):H(n,u),D((c=A(o,r,u,1)).d,t=a,h))do{if(o=H(this,u+=10),r=e?k(f,u+10):H(n,u),c=A(o,r,u,1),!s){+q(c.d).slice(t+1,t+15)+1==1e14&&(c=Z(c,a+1,0));break}}while(D(c.d,t+=10,h));return l=!0,Z(c,a,h)},M.minus=M.sub=function(n){var e,i,r,t,s,o,u,c,f,a,h,d,p=this,w=p.constructor;if(n=new w(n),!p.d||!n.d)return p.s&&n.s?p.d?n.s=-n.s:n=new w(n.d||p.s!==n.s?p:NaN):n=new w(NaN),n;if(p.s!=n.s)return n.s=-n.s,p.plus(n);if(d=n.d,u=w.precision,c=w.rounding,!(f=p.d)[0]||!d[0]){if(d[0])n.s=-n.s;else{if(!f[0])return new w(3===c?-0:0);n=new w(p)}return l?Z(n,u,c):n}if(i=g(n.e/7),a=g(p.e/7),f=f.slice(),s=a-i){for((h=s<0)?(e=f,s=-s,o=d.length):(e=d,i=a,o=f.length),s>(r=Math.max(Math.ceil(u/7),o)+2)&&(s=r,e.length=1),e.reverse(),r=s;r--;)e.push(0);e.reverse()}else{for((h=(r=f.length)<(o=d.length))&&(o=r),r=0;r<o;r++)if(f[r]!=d[r]){h=f[r]<d[r];break}s=0}for(h&&(e=f,f=d,d=e,n.s=-n.s),r=d.length-(o=f.length);r>0;--r)f[o++]=0;for(r=d.length;r>s;){if(f[--r]<d[r]){for(t=r;t&&0===f[--t];)f[t]=E-1;--f[t],f[r]+=E}f[r]-=d[r]}for(;0===f[--o];)f.pop();for(;0===f[0];f.shift())--i;return f[0]?(n.d=f,n.e=R(f,i),l?Z(n,u,c):n):new w(3===c?-0:0)},M.modulo=M.mod=function(n){var e,i=this,r=i.constructor;return n=new r(n),!i.d||!n.s||n.d&&!n.d[0]?new r(NaN):!n.d||i.d&&!i.d[0]?Z(new r(i),r.precision,r.rounding):(l=!1,9==r.modulo?(e=A(i,n.abs(),0,3,1)).s*=n.s:e=A(i,n,0,r.modulo,1),e=e.times(n),l=!0,i.minus(e))},M.naturalExponential=M.exp=function(){return C(this)},M.naturalLogarithm=M.ln=function(){return H(this)},M.negated=M.neg=function(){var n=new this.constructor(this);return n.s=-n.s,Z(n)},M.plus=M.add=function(n){var e,i,r,t,s,o,u,c,f,a,h=this,d=h.constructor;if(n=new d(n),!h.d||!n.d)return h.s&&n.s?h.d||(n=new d(n.d||h.s===n.s?h:NaN)):n=new d(NaN),n;if(h.s!=n.s)return n.s=-n.s,h.minus(n);if(a=n.d,u=d.precision,c=d.rounding,!(f=h.d)[0]||!a[0])return a[0]||(n=new d(h)),l?Z(n,u,c):n;if(s=g(h.e/7),r=g(n.e/7),f=f.slice(),t=s-r){for(t<0?(i=f,t=-t,o=a.length):(i=a,r=s,o=f.length),t>(o=(s=Math.ceil(u/7))>o?s+1:o+1)&&(t=o,i.length=1),i.reverse();t--;)i.push(0);i.reverse()}for((o=f.length)-(t=a.length)<0&&(t=o,i=a,a=f,f=i),e=0;t;)e=(f[--t]=f[t]+a[t]+e)/E|0,f[t]%=E;for(e&&(f.unshift(e),++r),o=f.length;0==f[--o];)f.pop();return n.d=f,n.e=R(f,r),l?Z(n,u,c):n},M.precision=M.sd=function(n){var e,i=this;if(void 0!==n&&n!==!!n&&1!==n&&0!==n)throw Error(p+n);return i.d?(e=U(i.d),n&&i.e+1>e&&(e=i.e+1)):e=NaN,e},M.round=function(){var n=this,e=n.constructor;return Z(new e(n),n.e+1,e.rounding)},M.sine=M.sin=function(){var n,e,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(e=r.rounding,r.precision=(n=r.precision)+Math.max(i.e,i.sd())+7,r.rounding=1,i=function(n,e){var i,r=e.d.length;if(r<3)return $(n,2,e,e);i=1.4*Math.sqrt(r),e=$(n,2,e=e.times(1/J(5,i=i>16?16:0|i)),e);for(var t,s=new n(5),o=new n(16),u=new n(20);i--;)t=e.times(e),e=e.times(s.plus(t.times(o.times(t).minus(u))));return e}(r,W(r,i)),r.precision=n,r.rounding=e,Z(u>2?i.neg():i,n,e,!0)):new r(NaN)},M.squareRoot=M.sqrt=function(){var n,e,i,r,t,s,o=this,u=o.d,c=o.e,f=o.s,a=o.constructor;if(1!==f||!u||!u[0])return new a(!f||f<0&&(!u||u[0])?NaN:u?o:1/0);for(l=!1,0==(f=Math.sqrt(+o))||f==1/0?(((e=q(u)).length+c)%2==0&&(e+="0"),f=Math.sqrt(e),c=g((c+1)/2)-(c<0||c%2),r=new a(e=f==1/0?"5e"+c:(e=f.toExponential()).slice(0,e.indexOf("e")+1)+c)):r=new a(f.toString()),i=(c=a.precision)+3;;)if(r=(s=r).plus(A(o,s,i+2,1)).times(.5),q(s.d).slice(0,i)===(e=q(r.d)).slice(0,i)){if("9999"!=(e=e.slice(i-3,i+1))&&(t||"4999"!=e)){+e&&(+e.slice(1)||"5"!=e.charAt(0))||(Z(r,c+1,1),n=!r.times(r).eq(o));break}if(!t&&(Z(s,c+1,0),s.times(s).eq(o))){r=s;break}i+=4,t=1}return l=!0,Z(r,c,a.rounding,n)},M.tangent=M.tan=function(){var n,e,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(e=r.rounding,r.precision=(n=r.precision)+10,r.rounding=1,(i=i.sin()).s=1,i=A(i,new r(1).minus(i.times(i)).sqrt(),n+10,0),r.precision=n,r.rounding=e,Z(2==u||4==u?i.neg():i,n,e,!0)):new r(NaN)},M.times=M.mul=function(n){var e,i,r,t,s,o,u,c,f,a=this,h=a.constructor,d=a.d,p=(n=new h(n)).d;if(n.s*=a.s,!(d&&d[0]&&p&&p[0]))return new h(!n.s||d&&!d[0]&&!p||p&&!p[0]&&!d?NaN:d&&p?0*n.s:n.s/0);for(i=g(a.e/7)+g(n.e/7),(c=d.length)<(f=p.length)&&(s=d,d=p,p=s,o=c,c=f,f=o),s=[],r=o=c+f;r--;)s.push(0);for(r=f;--r>=0;){for(e=0,t=c+r;t>r;)u=s[t]+p[r]*d[t-r-1]+e,s[t--]=u%E|0,e=u/E|0;s[t]=(s[t]+e)%E|0}for(;!s[--o];)s.pop();return e?++i:s.shift(),n.d=s,n.e=R(s,i),l?Z(n,h.precision,h.rounding):n},M.toBinary=function(n,e){return z(this,2,n,e)},M.toDecimalPlaces=M.toDP=function(n,e){var i=this,r=i.constructor;return i=new r(i),void 0===n?i:(O(n,0,1e9),void 0===e?e=r.rounding:O(e,0,8),Z(i,n+i.e+1,e))},M.toExponential=function(n,e){var i,r=this,t=r.constructor;return void 0===n?i=P(r,!0):(O(n,0,1e9),void 0===e?e=t.rounding:O(e,0,8),i=P(r=Z(new t(r),n+1,e),!0,n+1)),r.isNeg()&&!r.isZero()?"-"+i:i},M.toFixed=function(n,e){var i,r,t=this,s=t.constructor;return void 0===n?i=P(t):(O(n,0,1e9),void 0===e?e=s.rounding:O(e,0,8),i=P(r=Z(new s(t),n+t.e+1,e),!1,n+r.e+1)),t.isNeg()&&!t.isZero()?"-"+i:i},M.toFraction=function(n){var e,i,r,t,s,o,u,c,f,a,h,d,g=this,m=g.d,v=g.constructor;if(!m)return new v(g);if(f=i=new v(1),r=c=new v(0),s=(e=new v(r)).e=U(m)-g.e-1,e.d[0]=w(10,(o=s%7)<0?7+o:o),null==n)n=s>0?e:f;else{if(!(u=new v(n)).isInt()||u.lt(f))throw Error(p+u);n=u.gt(e)?s>0?e:f:u}for(l=!1,u=new v(q(m)),a=v.precision,v.precision=s=7*m.length*2;h=A(u,e,0,1,1),1!=(t=i.plus(h.times(r))).cmp(n);)i=r,r=t,f=c.plus(h.times(t=f)),c=t,e=u.minus(h.times(t=e)),u=t;return t=A(n.minus(i),r,0,1,1),c=c.plus(t.times(f)),i=i.plus(t.times(r)),c.s=f.s=g.s,d=A(f,r,s,1).minus(g).abs().cmp(A(c,i,s,1).minus(g).abs())<1?[f,r]:[c,i],v.precision=a,l=!0,d},M.toHexadecimal=M.toHex=function(n,e){return z(this,16,n,e)},M.toNearest=function(n,e){var i=this,r=i.constructor;if(i=new r(i),null==n){if(!i.d)return i;n=new r(1),e=r.rounding}else{if(n=new r(n),void 0===e?e=r.rounding:O(e,0,8),!i.d)return n.s?i:n;if(!n.d)return n.s&&(n.s=i.s),n}return n.d[0]?(l=!1,i=A(i,n,0,e,1).times(n),l=!0,Z(i)):(n.s=i.s,i=n),i},M.toNumber=function(){return+this},M.toOctal=function(n,e){return z(this,8,n,e)},M.toPower=M.pow=function(n){var e,i,r,t,s,o,u=this,c=u.constructor,f=+(n=new c(n));if(!(u.d&&n.d&&u.d[0]&&n.d[0]))return new c(w(+u,f));if((u=new c(u)).eq(1))return u;if(r=c.precision,s=c.rounding,n.eq(1))return Z(u,r,s);if((e=g(n.e/7))>=n.d.length-1&&(i=f<0?-f:f)<=9007199254740991)return t=S(c,u,i,r),n.s<0?new c(1).div(t):Z(t,r,s);if((o=u.s)<0){if(e<n.d.length-1)return new c(NaN);if(0==(1&n.d[e])&&(o=1),0==u.e&&1==u.d[0]&&1==u.d.length)return u.s=o,u}return(e=0!=(i=w(+u,f))&&isFinite(i)?new c(i+"").e:g(f*(Math.log("0."+q(u.d))/Math.LN10+u.e+1)))>c.maxE+1||e<c.minE-1?new c(e>0?o/0:0):(l=!1,c.rounding=u.s=1,i=Math.min(12,(e+"").length),(t=C(n.times(H(u,r+i)),r)).d&&D((t=Z(t,r+5,1)).d,r,s)&&+q((t=Z(C(n.times(H(u,(e=r+10)+i)),e),e+5,1)).d).slice(r+1,r+15)+1==1e14&&(t=Z(t,r+1,0)),t.s=o,l=!0,c.rounding=s,Z(t,r,s))},M.toPrecision=function(n,e){var i,r=this,t=r.constructor;return void 0===n?i=P(r,r.e<=t.toExpNeg||r.e>=t.toExpPos):(O(n,1,1e9),void 0===e?e=t.rounding:O(e,0,8),i=P(r=Z(new t(r),n,e),n<=r.e||r.e<=t.toExpNeg,n)),r.isNeg()&&!r.isZero()?"-"+i:i},M.toSignificantDigits=M.toSD=function(n,e){var i=this.constructor;return void 0===n?(n=i.precision,e=i.rounding):(O(n,1,1e9),void 0===e?e=i.rounding:O(e,0,8)),Z(new i(this),n,e)},M.toString=function(){var n=this,e=n.constructor,i=P(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+i:i},M.truncated=M.trunc=function(){return Z(new this.constructor(this),this.e+1,1)},M.valueOf=M.toJSON=function(){var n=this,e=n.constructor,i=P(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+i:i};var A=function(){function n(n,e,i){var r,t=0,s=n.length;for(n=n.slice();s--;)n[s]=(r=n[s]*e+t)%i|0,t=r/i|0;return t&&n.unshift(t),n}function e(n,e,i,r){var t,s;if(i!=r)s=i>r?1:-1;else for(t=s=0;t<i;t++)if(n[t]!=e[t]){s=n[t]>e[t]?1:-1;break}return s}function i(n,e,i,r){for(var t=0;i--;)n[i]-=t,n[i]=(t=n[i]<e[i]?1:0)*r+n[i]-e[i];for(;!n[0]&&n.length>1;)n.shift()}return function(r,t,s,u,c,f){var a,h,d,l,p,w,m,v,N,b,x,y,M,q,O,D,F,A,P,R,k=r.constructor,L=r.s==t.s?1:-1,U=r.d,_=t.d;if(!(U&&U[0]&&_&&_[0]))return new k(r.s&&t.s&&(U?!_||U[0]!=_[0]:_)?U&&0==U[0]||!_?0*L:L/0:NaN);for(f?(p=1,h=r.e-t.e):(f=E,h=g(r.e/(p=7))-g(t.e/p)),P=_.length,F=U.length,b=(N=new k(L)).d=[],d=0;_[d]==(U[d]||0);d++);if(_[d]>(U[d]||0)&&h--,null==s?(q=s=k.precision,u=k.rounding):q=c?s+(r.e-t.e)+1:s,q<0)b.push(1),w=!0;else{if(q=q/p+2|0,d=0,1==P){for(l=0,_=_[0],q++;(d<F||l)&&q--;d++)b[d]=(O=l*f+(U[d]||0))/_|0,l=O%_|0;w=l||d<F}else{for((l=f/(_[0]+1)|0)>1&&(_=n(_,l,f),U=n(U,l,f),P=_.length,F=U.length),D=P,y=(x=U.slice(0,P)).length;y<P;)x[y++]=0;(R=_.slice()).unshift(0),A=_[0],_[1]>=f/2&&++A;do{l=0,(a=e(_,x,P,y))<0?(M=x[0],P!=y&&(M=M*f+(x[1]||0)),(l=M/A|0)>1?(l>=f&&(l=f-1),1==(a=e(m=n(_,l,f),x,v=m.length,y=x.length))&&(l--,i(m,P<v?R:_,v,f))):(0==l&&(a=l=1),m=_.slice()),(v=m.length)<y&&m.unshift(0),i(x,m,y,f),-1==a&&(a=e(_,x,P,y=x.length))<1&&(l++,i(x,P<y?R:_,y,f)),y=x.length):0===a&&(l++,x=[0]),b[d++]=l,a&&x[0]?x[y++]=U[D]||0:(x=[U[D]],y=1)}while((D++<F||void 0!==x[0])&&q--);w=void 0!==x[0]}b[0]||b.shift()}if(1==p)N.e=h,o=w;else{for(d=1,l=b[0];l>=10;l/=10)d++;N.e=d+h*p-1,Z(N,c?s+N.e+1:s,u,w)}return N}}();function Z(n,e,i,r){var t,s,o,u,c,f,a,h,d,p=n.constructor;n:if(null!=e){if(!(h=n.d))return n;for(t=1,u=h[0];u>=10;u/=10)t++;if((s=e-t)<0)s+=7,c=(a=h[d=0])/w(10,t-(o=e)-1)%10|0;else if((d=Math.ceil((s+1)/7))>=(u=h.length)){if(!r)break n;for(;u++<=d;)h.push(0);a=c=0,t=1,o=(s%=7)-7+1}else{for(a=u=h[d],t=1;u>=10;u/=10)t++;c=(o=(s%=7)-7+t)<0?0:a/w(10,t-o-1)%10|0}if(r=r||e<0||void 0!==h[d+1]||(o<0?a:a%w(10,t-o-1)),f=i<4?(c||r)&&(0==i||i==(n.s<0?3:2)):c>5||5==c&&(4==i||r||6==i&&(s>0?o>0?a/w(10,t-o):0:h[d-1])%10&1||i==(n.s<0?8:7)),e<1||!h[0])return h.length=0,f?(h[0]=w(10,(7-(e-=n.e+1)%7)%7),n.e=-e||0):h[0]=n.e=0,n;if(0==s?(h.length=d,u=1,d--):(h.length=d+1,u=w(10,7-s),h[d]=o>0?(a/w(10,t-o)%w(10,o)|0)*u:0),f)for(;;){if(0==d){for(s=1,o=h[0];o>=10;o/=10)s++;for(o=h[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(n.e++,h[0]==E&&(h[0]=1));break}if(h[d]+=u,h[d]!=E)break;h[d--]=0,u=1}for(s=h.length;0===h[--s];)h.pop()}return l&&(n.e>p.maxE?(n.d=null,n.e=NaN):n.e<p.minE&&(n.e=0,n.d=[0])),n}function P(n,e,i){if(!n.isFinite())return B(n);var r,t=n.e,s=q(n.d),o=s.length;return e?(i&&(r=i-o)>0?s=s.charAt(0)+"."+s.slice(1)+_(r):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(n.e<0?"e":"e+")+n.e):t<0?(s="0."+_(-t-1)+s,i&&(r=i-o)>0&&(s+=_(r))):t>=o?(s+=_(t+1-o),i&&(r=i-t-1)>0&&(s=s+"."+_(r))):((r=t+1)<o&&(s=s.slice(0,r)+"."+s.slice(r)),i&&(r=i-o)>0&&(t+1===o&&(s+="."),s+=_(r))),s}function R(n,e){var i=n[0];for(e*=7;i>=10;i/=10)e++;return e}function k(n,e,i){if(e>x)throw l=!0,i&&(n.precision=i),Error("[DecimalError] Precision limit exceeded");return Z(new n(a),e,1,!0)}function L(n,e,i){if(e>y)throw Error("[DecimalError] Precision limit exceeded");return Z(new n(h),e,i,!0)}function U(n){var e=n.length-1,i=7*e+1;if(e=n[e]){for(;e%10==0;e/=10)i--;for(e=n[0];e>=10;e/=10)i++}return i}function _(n){for(var e="";n--;)e+="0";return e}function S(n,e,i,r){var t,s=new n(1),o=Math.ceil(r/7+4);for(l=!1;;){if(i%2&&G((s=s.times(e)).d,o)&&(t=!0),0===(i=g(i/2))){i=s.d.length-1,t&&0===s.d[i]&&++s.d[i];break}G((e=e.times(e)).d,o)}return l=!0,s}function T(n){return 1&n.d[n.d.length-1]}function I(n,e,i){for(var r,t=new n(e[0]),s=0;++s<e.length;){if(!(r=new n(e[s])).s){t=r;break}t[i](r)&&(t=r)}return t}function C(n,e){var i,r,t,s,o,u,c,f=0,a=0,h=0,d=n.constructor,p=d.rounding,g=d.precision;if(!n.d||!n.d[0]||n.e>17)return new d(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(null==e?(l=!1,c=g):c=e,u=new d(.03125);n.e>-2;)n=n.times(u),h+=5;for(c+=r=Math.log(w(2,h))/Math.LN10*2+5|0,i=s=o=new d(1),d.precision=c;;){if(s=Z(s.times(n),c,1),i=i.times(++a),q((u=o.plus(A(s,i,c,1))).d).slice(0,c)===q(o.d).slice(0,c)){for(t=h;t--;)o=Z(o.times(o),c,1);if(null!=e)return d.precision=g,o;if(!(f<3&&D(o.d,c-r,p,f)))return Z(o,d.precision=g,p,l=!0);d.precision=c+=10,i=s=u=new d(1),a=0,f++}o=u}}function H(n,e){var i,r,t,s,o,u,c,f,a,h,d,p=1,g=n,w=g.d,m=g.constructor,v=m.rounding,N=m.precision;if(g.s<0||!w||!w[0]||!g.e&&1==w[0]&&1==w.length)return new m(w&&!w[0]?-1/0:1!=g.s?NaN:w?0:g);if(null==e?(l=!1,a=N):a=e,m.precision=a+=10,r=(i=q(w)).charAt(0),!(Math.abs(s=g.e)<15e14))return f=k(m,a+2,N).times(s+""),g=H(new m(r+"."+i.slice(1)),a-10).plus(f),m.precision=N,null==e?Z(g,N,v,l=!0):g;for(;r<7&&1!=r||1==r&&i.charAt(1)>3;)r=(i=q((g=g.times(n)).d)).charAt(0),p++;for(s=g.e,r>1?(g=new m("0."+i),s++):g=new m(r+"."+i.slice(1)),h=g,c=o=g=A(g.minus(1),g.plus(1),a,1),d=Z(g.times(g),a,1),t=3;;){if(o=Z(o.times(d),a,1),q((f=c.plus(A(o,new m(t),a,1))).d).slice(0,a)===q(c.d).slice(0,a)){if(c=c.times(2),0!==s&&(c=c.plus(k(m,a+2,N).times(s+""))),c=A(c,new m(p),a,1),null!=e)return m.precision=N,c;if(!D(c.d,a-10,v,u))return Z(c,m.precision=N,v,l=!0);m.precision=a+=10,f=o=g=A(h.minus(1),h.plus(1),a,1),d=Z(g.times(g),a,1),t=u=1}c=f,t+=2}}function B(n){return String(n.s*n.s/0)}function V(n,e){var i,r,t;for((i=e.indexOf("."))>-1&&(e=e.replace(".","")),(r=e.search(/e/i))>0?(i<0&&(i=r),i+=+e.slice(r+1),e=e.substring(0,r)):i<0&&(i=e.length),r=0;48===e.charCodeAt(r);r++);for(t=e.length;48===e.charCodeAt(t-1);--t);if(e=e.slice(r,t)){if(t-=r,n.e=i=i-r-1,n.d=[],r=(i+1)%7,i<0&&(r+=7),r<t){for(r&&n.d.push(+e.slice(0,r)),t-=7;r<t;)n.d.push(+e.slice(r,r+=7));r=7-(e=e.slice(r)).length}else r-=t;for(;r--;)e+="0";n.d.push(+e),l&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function j(n,e){var i,r,t,o,u,c,f,a,h;if("Infinity"===e||"NaN"===e)return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(v.test(e))i=16,e=e.toLowerCase();else if(m.test(e))i=2;else{if(!N.test(e))throw Error(p+e);i=8}for((o=e.search(/p/i))>0?(f=+e.slice(o+1),e=e.substring(2,o)):e=e.slice(2),o=e.indexOf("."),r=n.constructor,(u=o>=0)&&(o=(c=(e=e.replace(".","")).length)-o,t=S(r,new r(i),o,2*o)),o=h=(a=F(e,i,E)).length-1;0===a[o];--o)a.pop();return o<0?new r(0*n.s):(n.e=R(a,h),n.d=a,l=!1,u&&(n=A(n,t,4*c)),f&&(n=n.times(Math.abs(f)<54?w(2,f):s.pow(2,f))),l=!0,n)}function $(n,e,i,r,t){var s,o,u,c,f=n.precision,a=Math.ceil(f/7);for(l=!1,c=i.times(i),u=new n(r);;){if(o=A(u.times(c),new n(e++*e++),f,1),u=t?r.plus(o):r.minus(o),r=A(o.times(c),new n(e++*e++),f,1),void 0!==(o=u.plus(r)).d[a]){for(s=a;o.d[s]===u.d[s]&&s--;);if(-1==s)break}s=u,u=r,r=o,o=s}return l=!0,o.d.length=a+1,o}function J(n,e){for(var i=n;--e;)i*=n;return i}function W(n,e){var i,r=e.s<0,t=L(n,n.precision,1),s=t.times(.5);if((e=e.abs()).lte(s))return u=r?4:1,e;if((i=e.divToInt(t)).isZero())u=r?3:2;else{if((e=e.minus(i.times(t))).lte(s))return u=T(i)?r?2:3:r?4:1,e;u=T(i)?r?1:4:r?3:2}return e.minus(t).abs()}function z(n,e,i,r){var t,s,u,c,a,h,d,l,p,g=n.constructor,w=void 0!==i;if(w?(O(i,1,1e9),void 0===r?r=g.rounding:O(r,0,8)):(i=g.precision,r=g.rounding),n.isFinite()){for(w?(t=2,16==e?i=4*i-3:8==e&&(i=3*i-2)):t=e,(u=(d=P(n)).indexOf("."))>=0&&(d=d.replace(".",""),(p=new g(1)).e=d.length-u,p.d=F(P(p),10,t),p.e=p.d.length),s=a=(l=F(d,10,t)).length;0==l[--a];)l.pop();if(l[0]){if(u<0?s--:((n=new g(n)).d=l,n.e=s,l=(n=A(n,p,i,r,0,t)).d,s=n.e,h=o),u=l[i],c=t/2,h=h||void 0!==l[i+1],h=r<4?(void 0!==u||h)&&(0===r||r===(n.s<0?3:2)):u>c||u===c&&(4===r||h||6===r&&1&l[i-1]||r===(n.s<0?8:7)),l.length=i,h)for(;++l[--i]>t-1;)l[i]=0,i||(++s,l.unshift(1));for(a=l.length;!l[a-1];--a);for(u=0,d="";u<a;u++)d+=f.charAt(l[u]);if(w){if(a>1)if(16==e||8==e){for(u=16==e?4:3,--a;a%u;a++)d+="0";for(a=(l=F(d,t,e)).length;!l[a-1];--a);for(u=1,d="1.";u<a;u++)d+=f.charAt(l[u])}else d=d.charAt(0)+"."+d.slice(1);d=d+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)d="0"+d;d="0."+d}else if(++s>a)for(s-=a;s--;)d+="0";else s<a&&(d=d.slice(0,s)+"."+d.slice(s))}else d=w?"0p+0":"0";d=(16==e?"0x":2==e?"0b":8==e?"0o":"")+d}else d=B(n);return n.s<0?"-"+d:d}function G(n,e){if(n.length>e)return n.length=e,!0}function K(n){return new this(n).abs()}function Q(n){return new this(n).acos()}function X(n){return new this(n).acosh()}function Y(n,e){return new this(n).plus(e)}function nn(n){return new this(n).asin()}function en(n){return new this(n).asinh()}function rn(n){return new this(n).atan()}function tn(n){return new this(n).atanh()}function sn(n,e){n=new this(n),e=new this(e);var i,r=this.precision,t=this.rounding,s=r+4;return n.s&&e.s?n.d||e.d?!e.d||n.isZero()?(i=e.s<0?L(this,r,t):new this(0)).s=n.s:!n.d||e.isZero()?(i=L(this,s,1).times(.5)).s=n.s:e.s<0?(this.precision=s,this.rounding=1,i=this.atan(A(n,e,s,1)),e=L(this,s,1),this.precision=r,this.rounding=t,i=n.s<0?i.minus(e):i.plus(e)):i=this.atan(A(n,e,s,1)):(i=L(this,s,1).times(e.s>0?.25:.75)).s=n.s:i=new this(NaN),i}function on(n){return new this(n).cbrt()}function un(n){return Z(n=new this(n),n.e+1,2)}function cn(n){if(!n||"object"!=typeof n)throw Error("[DecimalError] Object expected");var e,i,r,t=!0===n.defaults,s=["precision",1,1e9,"rounding",0,8,"toExpNeg",-c,0,"toExpPos",0,c,"maxE",0,c,"minE",-c,0,"modulo",0,9];for(e=0;e<s.length;e+=3)if(i=s[e],t&&(this[i]=d[i]),void 0!==(r=n[i])){if(!(g(r)===r&&r>=s[e+1]&&r<=s[e+2]))throw Error(p+i+": "+r);this[i]=r}if(i="crypto",t&&(this[i]=d[i]),void 0!==(r=n[i])){if(!0!==r&&!1!==r&&0!==r&&1!==r)throw Error(p+i+": "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error("[DecimalError] crypto unavailable");this[i]=!0}else this[i]=!1}return this}function fn(n){return new this(n).cos()}function an(n){return new this(n).cosh()}function hn(n,e){return new this(n).div(e)}function dn(n){return new this(n).exp()}function ln(n){return Z(n=new this(n),n.e+1,3)}function pn(){var n,e,i=new this(0);for(l=!1,n=0;n<arguments.length;)if((e=new this(arguments[n++])).d)i.d&&(i=i.plus(e.times(e)));else{if(e.s)return l=!0,new this(1/0);i=e}return l=!0,i.sqrt()}function gn(n){return n instanceof s||n&&"[object Decimal]"===n.name||!1}function wn(n){return new this(n).ln()}function mn(n,e){return new this(n).log(e)}function vn(n){return new this(n).log(2)}function Nn(n){return new this(n).log(10)}function bn(){return I(this,arguments,"lt")}function En(){return I(this,arguments,"gt")}function xn(n,e){return new this(n).mod(e)}function yn(n,e){return new this(n).mul(e)}function Mn(n,e){return new this(n).pow(e)}function qn(n){var e,i,r,t,s=0,o=new this(1),u=[];if(void 0===n?n=this.precision:O(n,1,1e9),r=Math.ceil(n/7),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(r));s<r;)(t=e[s])>=429e7?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=t%1e7;else{if(!crypto.randomBytes)throw Error("[DecimalError] crypto unavailable");for(e=crypto.randomBytes(r*=4);s<r;)(t=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((127&e[s+3])<<24))>=214e7?crypto.randomBytes(4).copy(e,s):(u.push(t%1e7),s+=4);s=r/4}else for(;s<r;)u[s++]=1e7*Math.random()|0;for(n%=7,(r=u[--s])&&n&&(t=w(10,7-n),u[s]=(r/t|0)*t);0===u[s];s--)u.pop();if(s<0)i=0,u=[0];else{for(i=-1;0===u[0];i-=7)u.shift();for(r=1,t=u[0];t>=10;t/=10)r++;r<7&&(i-=7-r)}return o.e=i,o.d=u,o}function On(n){return Z(n=new this(n),n.e+1,this.rounding)}function Dn(n){return(n=new this(n)).d?n.d[0]?n.s:0*n.s:n.s||NaN}function Fn(n){return new this(n).sin()}function An(n){return new this(n).sinh()}function Zn(n){return new this(n).sqrt()}function Pn(n,e){return new this(n).sub(e)}function Rn(n){return new this(n).tan()}function kn(n){return new this(n).tanh()}function Ln(n){return Z(n=new this(n),n.e+1,1)}(s=function n(e){var i,r,t;function s(n){var e,i,r,t=this;if(!(t instanceof s))return new s(n);if(t.constructor=s,n instanceof s)return t.s=n.s,void(l?!n.d||n.e>s.maxE?(t.e=NaN,t.d=null):n.e<s.minE?(t.e=0,t.d=[0]):(t.e=n.e,t.d=n.d.slice()):(t.e=n.e,t.d=n.d?n.d.slice():n.d));if("number"==(r=typeof n)){if(0===n)return t.s=1/n<0?-1:1,t.e=0,void(t.d=[0]);if(n<0?(n=-n,t.s=-1):t.s=1,n===~~n&&n<1e7){for(e=0,i=n;i>=10;i/=10)e++;return void(l?e>s.maxE?(t.e=NaN,t.d=null):e<s.minE?(t.e=0,t.d=[0]):(t.e=e,t.d=[n]):(t.e=e,t.d=[n]))}return 0*n!=0?(n||(t.s=NaN),t.e=NaN,void(t.d=null)):V(t,n.toString())}if("string"!==r)throw Error(p+n);return 45===(i=n.charCodeAt(0))?(n=n.slice(1),t.s=-1):(43===i&&(n=n.slice(1)),t.s=1),b.test(n)?V(t,n):j(t,n)}if(s.prototype=M,s.ROUND_UP=0,s.ROUND_DOWN=1,s.ROUND_CEIL=2,s.ROUND_FLOOR=3,s.ROUND_HALF_UP=4,s.ROUND_HALF_DOWN=5,s.ROUND_HALF_EVEN=6,s.ROUND_HALF_CEIL=7,s.ROUND_HALF_FLOOR=8,s.EUCLID=9,s.config=s.set=cn,s.clone=n,s.isDecimal=gn,s.abs=K,s.acos=Q,s.acosh=X,s.add=Y,s.asin=nn,s.asinh=en,s.atan=rn,s.atanh=tn,s.atan2=sn,s.cbrt=on,s.ceil=un,s.cos=fn,s.cosh=an,s.div=hn,s.exp=dn,s.floor=ln,s.hypot=pn,s.ln=wn,s.log=mn,s.log10=Nn,s.log2=vn,s.max=bn,s.min=En,s.mod=xn,s.mul=yn,s.pow=Mn,s.random=qn,s.round=On,s.sign=Dn,s.sin=Fn,s.sinh=An,s.sqrt=Zn,s.sub=Pn,s.tan=Rn,s.tanh=kn,s.trunc=Ln,void 0===e&&(e={}),e&&!0!==e.defaults)for(t=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],i=0;i<t.length;)e.hasOwnProperty(r=t[i++])||(e[r]=this[r]);return s.config(e),s}(d)).default=s.Decimal=s,a=new s(a),h=new s(h),void 0===(r=(function(){return s}).call(e,i,e,n))||(n.exports=r)}()}}]);