!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var c,s=t[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(o){i=!0,a=o}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"4TwE":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r,a=n("EM62"),c=((r=function t(){i(this,t)}).\u0275mod=a.Lb({type:r}),r.\u0275inj=a.Kb({factory:function(t){return new(t||r)}}),r);n("VqxJ")},"59OH":function(t,e,n){"use strict";n.r(e),n.d(e,"SwitcherExamplesModule",(function(){return j}));var a,c,s,o,l,u,h,p,f,m=n("irJD"),b=n("EM62"),g=n("jvbl"),d=((a=function t(){i(this,t)}).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=b.Hb({type:a,selectors:[["switcher-default-example"]],decls:2,vars:1,consts:[[3,"checked"]],template:function(t,e){1&t&&(b.Tb(0,"nx-switcher",0),b.Jc(1,"Switcher default"),b.Sb()),2&t&&b.kc("checked",!0)},directives:[g.a],styles:[""]}),a),v=n("nIj0"),y=n("tPQ2"),w=((u=function(){function t(e){i(this,t),this.fb=e,this.checked=!0,this.templateModel=!1,this.createForm(),this.testForm.disable()}return r(t,[{key:"createForm",value:function(){this.testForm=this.fb.group({switcherDisabledReactive:[!1,v.y.requiredTrue]})}},{key:"switchStatusClick",value:function(){this.testForm.disabled?this.testForm.enable():this.testForm.disable()}}]),t}()).\u0275fac=function(t){return new(t||u)(b.Nb(v.d))},u.\u0275cmp=b.Hb({type:u,selectors:[["switcher-disabled-example"]],decls:6,vars:1,consts:[["novalidate","",3,"formGroup"],["nxBig","true","formControlName","switcherDisabledReactive"],["nxButton","primary small","type","button",3,"click"]],template:function(t,e){1&t&&(b.Tb(0,"form",0),b.Tb(1,"nx-switcher",1),b.Jc(2," big disabled switcher "),b.Sb(),b.Sb(),b.Tb(3,"p"),b.Tb(4,"button",2),b.ac("click",(function(){return e.switchStatusClick()})),b.Jc(5,"Toggle disabled"),b.Sb(),b.Sb()),2&t&&b.kc("formGroup",e.testForm)},directives:[v.A,v.q,v.i,g.a,v.p,v.g,y.a],styles:[""]}),u),x=((l=function t(){i(this,t)}).\u0275fac=function(t){return new(t||l)},l.\u0275cmp=b.Hb({type:l,selectors:[["switcher-label-left-example"]],decls:2,vars:1,consts:[["labelPosition","left",3,"checked"]],template:function(t,e){1&t&&(b.Tb(0,"nx-switcher",0),b.Jc(1,"Switcher label left"),b.Sb()),2&t&&b.kc("checked",!0)},directives:[g.a],styles:[""]}),l),S=((o=function t(){i(this,t)}).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=b.Hb({type:o,selectors:[["switcher-label-small-example"]],decls:2,vars:1,consts:[["labelSize","small",3,"checked"]],template:function(t,e){1&t&&(b.Tb(0,"nx-switcher",0),b.Jc(1,"Switcher label small"),b.Sb()),2&t&&b.kc("checked",!0)},directives:[g.a],styles:[""]}),o),k=((s=function t(){i(this,t)}).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=b.Hb({type:s,selectors:[["switcher-large-example"]],decls:2,vars:2,consts:[[3,"nxBig","checked"]],template:function(t,e){1&t&&(b.Tb(0,"nx-switcher",0),b.Jc(1,"Switcher large"),b.Sb()),2&t&&b.kc("nxBig",!0)("checked",!0)},directives:[g.a],styles:[""]}),s),T=((c=function t(){i(this,t)}).\u0275fac=function(t){return new(t||c)},c.\u0275cmp=b.Hb({type:c,selectors:[["switcher-negative-example"]],decls:3,vars:2,consts:[[1,"docs-inverse-container"],[3,"checked","nxNegative"]],template:function(t,e){1&t&&(b.Tb(0,"div",0),b.Tb(1,"nx-switcher",1),b.Jc(2,"Switcher negative"),b.Sb(),b.Sb()),2&t&&(b.Bb(1),b.kc("checked",!0)("nxNegative",!0))},directives:[g.a],styles:[""]}),c),M=n("2kYt"),J=((p=function(){function t(e){i(this,t),this.fb=e,this.isSubmitted=!1,this.createForm()}return r(t,[{key:"createForm",value:function(){this.testForm=this.fb.group({switcherTestReactive:[!1,v.y.requiredTrue]})}},{key:"onSubmit",value:function(){this.isSubmitted=!0}}]),t}()).\u0275fac=function(t){return new(t||p)(b.Nb(v.d))},p.\u0275cmp=b.Hb({type:p,selectors:[["switcher-reactive-form-example"]],decls:14,vars:8,consts:[[3,"formGroup","ngSubmit"],["name","reactiveTest","formControlName","switcherTestReactive"],["nxButton","primary small","type","submit",1,"nx-margin-bottom-0"]],template:function(t,e){1&t&&(b.Tb(0,"form",0),b.ac("ngSubmit",(function(){return e.onSubmit()})),b.Tb(1,"nx-switcher",1),b.Jc(2," switcher label "),b.Sb(),b.Tb(3,"p"),b.Tb(4,"button",2),b.Jc(5,"submit"),b.Sb(),b.Sb(),b.Tb(6,"p"),b.Jc(7),b.fc(8,"json"),b.Sb(),b.Tb(9,"p"),b.Jc(10),b.fc(11,"json"),b.Sb(),b.Tb(12,"p"),b.Jc(13),b.Sb(),b.Sb()),2&t&&(b.kc("formGroup",e.testForm),b.Bb(7),b.Lc("Form value: ",b.gc(8,4,e.testForm.value),""),b.Bb(3),b.Lc("Form status: ",b.gc(11,6,e.testForm.status),""),b.Bb(3),b.Lc("Form is ",e.isSubmitted?"":" not "," submitted"))},directives:[v.A,v.q,v.i,g.a,v.p,v.g,y.a],pipes:[M.k],styles:[""]}),p),C=((h=function t(){i(this,t),this.templateModel=!0}).\u0275fac=function(t){return new(t||h)},h.\u0275cmp=b.Hb({type:h,selectors:[["switcher-template-driven-example"]],decls:5,vars:2,consts:[["name","templateTest",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(b.Tb(0,"form"),b.Tb(1,"nx-switcher",0),b.ac("ngModelChange",(function(t){return e.templateModel=t})),b.Jc(2," switcher label "),b.Sb(),b.Tb(3,"p"),b.Jc(4),b.Sb(),b.Sb()),2&t&&(b.Bb(1),b.kc("ngModel",e.templateModel),b.Bb(3),b.Lc("Model Value: ",e.templateModel,""))},directives:[v.A,v.q,v.r,g.a,v.p,v.s],styles:[""]}),h),F=n("t3RA"),j=((f=function(){function t(){i(this,t)}return r(t,null,[{key:"components",value:function(){return{"switcher-default":d,"switcher-disabled":w,"switcher-label-left":x,"switcher-label-small":S,"switcher-large":k,"switcher-negative":T,"switcher-reactive-form":J,"switcher-template-driven":C}}}]),t}()).\u0275mod=b.Lb({type:f}),f.\u0275inj=b.Kb({factory:function(t){return new(t||f)},imports:[[m.a,F.a]]}),f)},VqxJ:function(e,n,a){"use strict";a.d(n,"a",(function(){return l}));var c=a("EM62"),s=["nxCopytext",""],o=["*"],l=function(){var e=function(){function e(){i(this,e),this.type="normal",this.negative=!1}return r(e,[{key:"classNames",set:function(e){if(this._classNames!==e){this._classNames=e;var n=t(this._classNames.match(/small|medium|normal|large/)||["normal"],1)[0],r=void 0===n?null:n;this.type=r,this.negative=!!this._classNames.match(/negative/)}},get:function(){return this._classNames}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(t,e){2&t&&c.Fb("nx-copy",!0)("nx-copy--small","small"===e.type)("nx-copy--medium","medium"===e.type)("nx-copy--normal","normal"===e.type)("nx-copy--large","large"===e.type)("nx-copy--negative",e.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:s,ngContentSelectors:o,decls:1,vars:0,template:function(t,e){1&t&&(c.jc(),c.ic(0))},styles:["[_nghost-%COMP%]{margin:0 0 32px;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),e}()},t3RA:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("ohqM"),a=n("4TwE"),c=n("aln5"),s=n("kPBv"),o=n("2kYt"),l=n("nIj0"),u=n("EM62"),h=function(){var t=function t(){i(this,t)};return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(e){return new(e||t)},imports:[[],o.c,l.k,l.v,s.b,c.a,a.a,r.a]}),t}()}}])}();