(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"+Eag":function(t,e,n){"use strict";n.r(e),n.d(e,"OverlayExamplesModule",(function(){return u}));var a=n("ZhfD"),r=n("EM62"),i=n("tPQ2"),c=n("HYj3");function o(t,e){1&t&&(r.Tb(0,"div",3),r.Jc(1," Hi there! "),r.Sb())}let s=(()=>{class t{constructor(t){this.nxOverlay=t,this.fallbacks=["top","bottom"],this.config={width:250,height:250,fallbackOrientation:"vertical",direction:"left"}}open(t){this.currentOverlay&&this.currentOverlay.close(),this.currentOverlay=this.nxOverlay.open(this.template,t,this.config)}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(a.b))},t.\u0275cmp=r.Hb({type:t,selectors:[["overlay-limiting-fallbacks-example"]],viewQuery:function(t,e){var n;1&t&&r.Nc(r.N,!0),2&t&&r.qc(n=r.bc())&&(e.template=n.first)},decls:7,vars:0,consts:[["nxButton","primary","cdkOverlayOrigin","",3,"click"],["btn1","cdkOverlayOrigin"],["template",""],[2,"width","100%","height","100%"]],template:function(t,e){if(1&t){const t=r.Ub();r.Tb(0,"p"),r.Jc(1," The following overlay is only allowed to fallback vertically, so only top and bottom.\n"),r.Sb(),r.Tb(2,"button",0,1),r.ac("click",(function(){r.vc(t);const n=r.rc(3);return e.open(n.elementRef)})),r.Jc(4,"Open"),r.Sb(),r.Hc(5,o,2,0,"ng-template",null,2,r.Ic)}},directives:[i.a,c.b],styles:[""]}),t})();var l=n("VqxJ");function p(t,e){1&t&&(r.Tb(0,"div",6),r.Jc(1,"Hi there!"),r.Sb())}let h=(()=>{class t{constructor(t){this.nxOverlay=t}open(t,e){this.currentOverlay&&this.currentOverlay.close(),this.currentOverlay=this.nxOverlay.open(this.template,t,{width:150,height:200,direction:e})}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(a.b))},t.\u0275cmp=r.Hb({type:t,selectors:[["overlay-positioning-example"]],viewQuery:function(t,e){var n;1&t&&r.Nc(r.N,!0),2&t&&r.qc(n=r.bc())&&(e.template=n.first)},decls:14,vars:0,consts:[["nxButton","primary small","cdkOverlayOrigin","",3,"click"],["btn1","cdkOverlayOrigin"],["btn2","cdkOverlayOrigin"],["btn3","cdkOverlayOrigin"],["btn4","cdkOverlayOrigin"],["template",""],["nxCopytext","",1,"my-overlay-content","nx-margin-bottom-0"]],template:function(t,e){if(1&t){const t=r.Ub();r.Tb(0,"button",0,1),r.ac("click",(function(){r.vc(t);const n=r.rc(1);return e.open(n.elementRef,"top")})),r.Jc(2,"Open to top"),r.Sb(),r.Tb(3,"button",0,2),r.ac("click",(function(){r.vc(t);const n=r.rc(4);return e.open(n.elementRef,"bottom")})),r.Jc(5,"Open to bottom"),r.Sb(),r.Tb(6,"button",0,3),r.ac("click",(function(){r.vc(t);const n=r.rc(7);return e.open(n.elementRef,"left")})),r.Jc(8,"Open to the left"),r.Sb(),r.Tb(9,"button",0,4),r.ac("click",(function(){r.vc(t);const n=r.rc(10);return e.open(n.elementRef,"right")})),r.Jc(11,"Open to the right"),r.Sb(),r.Hc(12,p,2,0,"ng-template",null,5,r.Ic)}},directives:[i.a,c.b,l.a],styles:["button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:16px}.my-overlay-content[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}"]}),t})();var g=n("t3RA");let u=(()=>{class t{static components(){return{"overlay-limiting-fallbacks":s,"overlay-positioning":h}}}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},imports:[[a.a,g.a]]}),t})()},"4TwE":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("EM62");let r=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)}}),t})();n("VqxJ")},VqxJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("EM62");const r=["nxCopytext",""],i=["*"];let c=(()=>{class t{constructor(){this.type="normal",this.negative=!1}set classNames(t){if(this._classNames===t)return;this._classNames=t;const[e=null]=this._classNames.match(/small|medium|normal|large/)||["normal"];this.type=e,this.negative=!!this._classNames.match(/negative/)}get classNames(){return this._classNames}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Hb({type:t,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(t,e){2&t&&a.Fb("nx-copy",!0)("nx-copy--small","small"===e.type)("nx-copy--medium","medium"===e.type)("nx-copy--normal","normal"===e.type)("nx-copy--large","large"===e.type)("nx-copy--negative",e.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:r,ngContentSelectors:i,decls:1,vars:0,template:function(t,e){1&t&&(a.jc(),a.ic(0))},styles:["[_nghost-%COMP%]{margin:0 0 32px;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),t})()},t3RA:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var a=n("ohqM"),r=n("4TwE"),i=n("aln5"),c=n("kPBv"),o=n("2kYt"),s=n("nIj0"),l=n("EM62");let p=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(e){return new(e||t)},imports:[[],o.c,s.k,s.v,c.b,i.a,r.a,a.a]}),t})()}}]);