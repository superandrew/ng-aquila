!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return e}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"+Eag":function(t,n,r){"use strict";r.r(n),r.d(n,"OverlayExamplesModule",(function(){return b}));var i=r("ZhfD"),o=r("EM62"),c=r("tPQ2"),l=r("HYj3");function s(t,n){1&t&&(o.Tb(0,"div",3),o.Jc(1," Hi there! "),o.Sb())}var u,p=((u=function(){function t(n){e(this,t),this.nxOverlay=n,this.fallbacks=["top","bottom"],this.config={width:250,height:250,fallbackOrientation:"vertical",direction:"left"}}return a(t,[{key:"open",value:function(t){this.currentOverlay&&this.currentOverlay.close(),this.currentOverlay=this.nxOverlay.open(this.template,t,this.config)}}]),t}()).\u0275fac=function(t){return new(t||u)(o.Nb(i.b))},u.\u0275cmp=o.Hb({type:u,selectors:[["overlay-limiting-fallbacks-example"]],viewQuery:function(t,n){var e;1&t&&o.Nc(o.N,!0),2&t&&o.qc(e=o.bc())&&(n.template=e.first)},decls:7,vars:0,consts:[["nxButton","primary","cdkOverlayOrigin","",3,"click"],["btn1","cdkOverlayOrigin"],["template",""],[2,"width","100%","height","100%"]],template:function(t,n){if(1&t){var e=o.Ub();o.Tb(0,"p"),o.Jc(1," The following overlay is only allowed to fallback vertically, so only top and bottom.\n"),o.Sb(),o.Tb(2,"button",0,1),o.ac("click",(function(){o.vc(e);var t=o.rc(3);return n.open(t.elementRef)})),o.Jc(4,"Open"),o.Sb(),o.Hc(5,s,2,0,"ng-template",null,2,o.Ic)}},directives:[c.a,l.b],styles:[""]}),u),f=r("VqxJ");function h(t,n){1&t&&(o.Tb(0,"div",6),o.Jc(1,"Hi there!"),o.Sb())}var g,v,y=((g=function(){function t(n){e(this,t),this.nxOverlay=n}return a(t,[{key:"open",value:function(t,n){this.currentOverlay&&this.currentOverlay.close(),this.currentOverlay=this.nxOverlay.open(this.template,t,{width:150,height:200,direction:n})}}]),t}()).\u0275fac=function(t){return new(t||g)(o.Nb(i.b))},g.\u0275cmp=o.Hb({type:g,selectors:[["overlay-positioning-example"]],viewQuery:function(t,n){var e;1&t&&o.Nc(o.N,!0),2&t&&o.qc(e=o.bc())&&(n.template=e.first)},decls:14,vars:0,consts:[["nxButton","primary small","cdkOverlayOrigin","",3,"click"],["btn1","cdkOverlayOrigin"],["btn2","cdkOverlayOrigin"],["btn3","cdkOverlayOrigin"],["btn4","cdkOverlayOrigin"],["template",""],["nxCopytext","",1,"my-overlay-content","nx-margin-bottom-0"]],template:function(t,n){if(1&t){var e=o.Ub();o.Tb(0,"button",0,1),o.ac("click",(function(){o.vc(e);var t=o.rc(1);return n.open(t.elementRef,"top")})),o.Jc(2,"Open to top"),o.Sb(),o.Tb(3,"button",0,2),o.ac("click",(function(){o.vc(e);var t=o.rc(4);return n.open(t.elementRef,"bottom")})),o.Jc(5,"Open to bottom"),o.Sb(),o.Tb(6,"button",0,3),o.ac("click",(function(){o.vc(e);var t=o.rc(7);return n.open(t.elementRef,"left")})),o.Jc(8,"Open to the left"),o.Sb(),o.Tb(9,"button",0,4),o.ac("click",(function(){o.vc(e);var t=o.rc(10);return n.open(t.elementRef,"right")})),o.Jc(11,"Open to the right"),o.Sb(),o.Hc(12,h,2,0,"ng-template",null,5,o.Ic)}},directives:[c.a,l.b,f.a],styles:["button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:16px}.my-overlay-content[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}"]}),g),m=r("t3RA"),b=((v=function(){function t(){e(this,t)}return a(t,null,[{key:"components",value:function(){return{"overlay-limiting-fallbacks":p,"overlay-positioning":y}}}]),t}()).\u0275mod=o.Lb({type:v}),v.\u0275inj=o.Kb({factory:function(t){return new(t||v)},imports:[[i.a,m.a]]}),v)},"4TwE":function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));var a,i=r("EM62"),o=((a=function t(){e(this,t)}).\u0275mod=i.Lb({type:a}),a.\u0275inj=i.Kb({factory:function(t){return new(t||a)}}),a);r("VqxJ")},VqxJ:function(n,r,i){"use strict";i.d(r,"a",(function(){return s}));var o=i("EM62"),c=["nxCopytext",""],l=["*"],s=function(){var n=function(){function n(){e(this,n),this.type="normal",this.negative=!1}return a(n,[{key:"classNames",set:function(n){if(this._classNames!==n){this._classNames=n;var e=t(this._classNames.match(/small|medium|normal|large/)||["normal"],1)[0],r=void 0===e?null:e;this.type=r,this.negative=!!this._classNames.match(/negative/)}},get:function(){return this._classNames}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Hb({type:n,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(t,n){2&t&&o.Fb("nx-copy",!0)("nx-copy--small","small"===n.type)("nx-copy--medium","medium"===n.type)("nx-copy--normal","normal"===n.type)("nx-copy--large","large"===n.type)("nx-copy--negative",n.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:c,ngContentSelectors:l,decls:1,vars:0,template:function(t,n){1&t&&(o.jc(),o.ic(0))},styles:["[_nghost-%COMP%]{margin:0 0 32px;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),n}()},t3RA:function(t,n,r){"use strict";r.d(n,"a",(function(){return p}));var a=r("ohqM"),i=r("4TwE"),o=r("aln5"),c=r("kPBv"),l=r("2kYt"),s=r("nIj0"),u=r("EM62"),p=function(){var t=function t(){e(this,t)};return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(n){return new(n||t)},imports:[[],l.c,s.k,s.v,c.b,o.a,i.a,a.a]}),t}()}}])}();