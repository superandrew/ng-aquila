(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"4TwE":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("EM62");let i=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(n){return new(n||e)}}),e})();t("VqxJ")},VqxJ:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("EM62");const i=["nxCopytext",""],o=["*"];let r=(()=>{class e{constructor(){this.type="normal",this.negative=!1}set classNames(e){if(this._classNames===e)return;this._classNames=e;const[n=null]=this._classNames.match(/small|medium|normal|large/)||["normal"];this.type=n,this.negative=!!this._classNames.match(/negative/)}get classNames(){return this._classNames}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a.Hb({type:e,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(e,n){2&e&&a.Fb("nx-copy",!0)("nx-copy--small","small"===n.type)("nx-copy--medium","medium"===n.type)("nx-copy--normal","normal"===n.type)("nx-copy--large","large"===n.type)("nx-copy--negative",n.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:i,ngContentSelectors:o,decls:1,vars:0,template:function(e,n){1&e&&(a.jc(),a.ic(0))},styles:["[_nghost-%COMP%]{margin:0 0 32px;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),e})()},nbz0:function(e,n,t){"use strict";t.r(n),t.d(n,"SidebarExamplesModule",(function(){return j}));var a=t("9FST"),i=t("sEIs"),o=t("6c6m"),r=t("0FLW"),c=t("U5gO"),l=t("MhSW"),s=t("EM62"),b=t("8DU3"),u=t("2kYt"),d=t("fNxJ"),p=t("VKQk"),g=t("8A7F");function f(e,n){if(1&e&&(s.Tb(0,"button",3),s.Ob(1,"nx-icon",4),s.Jc(2),s.Sb()),2&e){const e=n.$implicit;s.kc("queryParams",e.query),s.Bb(1),s.kc("name",e.icon),s.Bb(1),s.Lc(" ",e.label," ")}}let h=(()=>{class e{constructor(){this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["sidebar-example"]],decls:3,vars:1,consts:[["resizeable","",1,"my-sidebar"],["sidebar",""],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams",4,"ngFor","ngForOf"],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(e,n){1&e&&(s.Tb(0,"nx-sidebar",0,1),s.Hc(2,f,3,3,"button",2),s.Sb()),2&e&&(s.Bb(2),s.kc("ngForOf",n.actions))},directives:[b.a,u.s,d.a,i.f,i.g,p.a,g.a],styles:["[_nghost-%COMP%]{display:block;height:300px}.my-sidebar[_ngcontent-%COMP%]{width:320px}"]}),e})();var x=t("G2iG"),m=t("wdC9"),y=t("KUgD");function O(e,n){if(1&e&&(s.Tb(0,"button",6),s.Ob(1,"nx-icon",7),s.Jc(2),s.Sb()),2&e){const e=n.$implicit;s.kc("queryParams",e.query),s.Bb(1),s.kc("name",e.icon),s.Bb(1),s.Lc(" ",e.label," ")}}let v=(()=>{class e{constructor(){this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["sidebar-footer-example"]],decls:7,vars:1,consts:[["resizeable","",1,"my-sidebar"],["sidebar",""],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams",4,"ngFor","ngForOf"],["nxIconButton","tertiary small-medium","aria-label","Open settings","nxTooltip","Open settings","type","button",1,"nx-margin-0"],["name","setting"],["nxSidebarToggle","","aria-label","Toggle sidebar","type","button"],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(e,n){1&e&&(s.Tb(0,"nx-sidebar",0,1),s.Hc(2,O,3,3,"button",2),s.Tb(3,"nx-sidebar-footer"),s.Tb(4,"button",3),s.Ob(5,"nx-icon",4),s.Sb(),s.Ob(6,"button",5),s.Sb(),s.Sb()),2&e&&(s.Bb(2),s.kc("ngForOf",n.actions))},directives:[b.a,u.s,x.a,m.a,p.a,y.a,d.a,i.f,i.g,g.a],styles:["[_nghost-%COMP%]{display:block;height:400px}"]}),e})();var k=t("tPQ2"),T=t("PCf9"),q=t("XEMv"),C=t("nIj0");function P(e,n){if(1&e&&(s.Tb(0,"button",9),s.Ob(1,"nx-icon",10),s.Jc(2),s.Sb()),2&e){const e=n.$implicit;s.kc("queryParams",e.query),s.Bb(1),s.kc("name",e.icon),s.Bb(1),s.Lc(" ",e.label," ")}}let w=(()=>{class e{constructor(){this.expandedWidth=350,this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["sidebar-methods-example"]],decls:17,vars:4,consts:[["resizeable",""],["sidebar",""],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams",4,"ngFor","ngForOf"],["nxButton","small","type","button",3,"click"],[1,"nx-font-weight-bold","nx-margin-bottom-2xs"],[1,"resize-container"],["nxLabel","Width in px",1,"nx-margin-right-xs"],["nxInput","",3,"ngModel","ngModelChange"],["nxButton","small",3,"click"],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(e,n){if(1&e){const e=s.Ub();s.Tb(0,"nx-sidebar",0,1),s.Hc(2,P,3,3,"button",2),s.Sb(),s.Tb(3,"main"),s.Tb(4,"button",3),s.ac("click",(function(){return s.vc(e),s.rc(1).toggle()})),s.Jc(5,"toggle"),s.Sb(),s.Tb(6,"button",3),s.ac("click",(function(){return s.vc(e),s.rc(1).expand()})),s.Jc(7,"expand"),s.Sb(),s.Tb(8,"button",3),s.ac("click",(function(){return s.vc(e),s.rc(1).close()})),s.Jc(9,"close"),s.Sb(),s.Tb(10,"p",4),s.Jc(11,"Advanced: Expanded width"),s.Sb(),s.Tb(12,"div",5),s.Tb(13,"nx-formfield",6),s.Tb(14,"input",7),s.ac("ngModelChange",(function(e){return n.expandedWidth=e})),s.Sb(),s.Sb(),s.Tb(15,"button",8),s.ac("click",(function(){return s.vc(e),s.rc(1).width=n.expandedWidth})),s.Jc(16,"resize"),s.Sb(),s.Sb(),s.Sb()}if(2&e){const e=s.rc(1);s.Bb(2),s.kc("ngForOf",n.actions),s.Bb(4),s.Cb("disabled",e.open||null),s.Bb(2),s.Cb("disabled",!e.open||null),s.Bb(6),s.kc("ngModel",n.expandedWidth)}},directives:[b.a,u.s,k.a,T.b,q.b,C.a,C.p,C.s,d.a,i.f,i.g,p.a,g.a],styles:["[_nghost-%COMP%]{display:block;height:300px;display:flex}main[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;flex-direction:column}.resize-container[_ngcontent-%COMP%]{display:flex;align-items:flex-end}nx-formfield[_ngcontent-%COMP%]{width:100px}"]}),e})();var S=t("Bxd4"),_=t("vxPo"),M=t("/uUv"),B=t("fk+C");function A(e,n){if(1&e&&s.Ob(0,"nx-icon",10),2&e){const e=s.ec().$implicit;s.kc("name",e.icon)}}function L(e,n){if(1&e&&(s.Tb(0,"nx-tree-node"),s.Tb(1,"button",8),s.Hc(2,A,1,1,"nx-icon",9),s.Jc(3),s.Sb(),s.Sb()),2&e){const e=n.$implicit;s.Bb(1),s.lc("title",e.label),s.kc("queryParams",e.query),s.Bb(1),s.kc("ngIf",e.icon),s.Bb(1),s.Lc(" ",e.label," ")}}function N(e,n){if(1&e&&s.Ob(0,"nx-icon",10),2&e){const e=s.ec().$implicit;s.kc("name",e.icon)}}function z(e,n){if(1&e&&(s.Tb(0,"nx-tree-node"),s.Tb(1,"button",11),s.Hc(2,N,1,1,"nx-icon",9),s.Jc(3),s.Sb(),s.Sb()),2&e){const e=n.$implicit,t=s.ec();s.Bb(1),s.lc("title",e.label),s.kc("expanded",t._treeControl.isExpanded(e)),s.Bb(1),s.kc("ngIf",e.icon),s.Bb(1),s.Lc(" ",e.label," ")}}function H(e,n){if(1&e&&(s.Tb(0,"pre"),s.Jc(1),s.Sb()),2&e){const e=s.ec();s.Bb(1),s.Kc(e.logMessage)}}let I=(()=>{class e{constructor(){this.navigationData=[{label:"Option 1",icon:"user-o",children:[{label:"Option 1.1",query:{a:"1.1"}},{label:"Option 1.2",children:[{label:"Option 1.2.1",query:{a:"1.2.1"}},{label:"Option 1.2.2",query:{a:"1.2.2"}},{label:"Option 1.2.3",children:[{label:"Option 1.2.3.1",children:[{label:"Option 1.2.3.1.1",query:{a:"1.2.3.1.1"}}]}]}]},{label:"Option 1.3",query:{a:"1.3"}}]},{label:"Option 2",icon:"file",children:[{label:"Option 2.1",query:{a:"2.1"}},{label:"Option 2.2",query:{a:"2.2"}},{label:"Option 2.3",query:{a:"2.3"}}]},{label:"Option 3",icon:"file",query:{a:"3"}}],this.messages=[],this._hasChild=(e,n)=>n.expandable,this._treeControl=new c.a,this._dataSource=new c.b(this._treeControl,this.navigationData)}log(e){this.messages.push("New width value: "+e),this.logMessage=this.messages.join("\n")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["sidebar-outputs-example"]],decls:9,vars:4,consts:[[1,"top"],["resizeHandleAriaLabel","Toggle sidebar width","resizeable","","minWidth","140",1,"my-sidebar",3,"widthChange"],["sidebar",""],[3,"dataSource","treeControl"],[4,"nxTreeNodeDef"],[4,"nxTreeNodeDef","nxTreeNodeDefWhen"],["nxButton","","type","button",3,"click"],[4,"ngIf"],["nxAction","","nxTreeNodePadding","","nxTreeNodePaddingOffset","40","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams","title"],["nxActionIcon","",3,"name",4,"ngIf"],["nxActionIcon","",3,"name"],["nxAction","","nxTreeNodeToggle","","nxTreeNodePadding","","nxTreeNodePaddingOffset","40","expandable","","type","button",3,"expanded","title"]],template:function(e,n){if(1&e){const e=s.Ub();s.Tb(0,"div",0),s.Tb(1,"nx-sidebar",1,2),s.ac("widthChange",(function(e){return n.log(e)})),s.Tb(3,"nx-tree",3),s.Hc(4,L,4,4,"nx-tree-node",4),s.Hc(5,z,4,4,"nx-tree-node",5),s.Sb(),s.Sb(),s.Tb(6,"button",6),s.ac("click",(function(){return s.vc(e),s.rc(2).toggle()})),s.Jc(7,"toggle expansion"),s.Sb(),s.Sb(),s.Hc(8,H,2,1,"pre",7)}2&e&&(s.Bb(3),s.kc("dataSource",n._dataSource)("treeControl",n._treeControl),s.Bb(2),s.kc("nxTreeNodeDefWhen",n._hasChild),s.Bb(3),s.kc("ngIf",n.logMessage))},directives:[b.a,S.a,_.b,k.a,u.t,_.a,d.a,M.a,i.f,i.g,p.a,g.a,B.a],styles:["[_nghost-%COMP%]{flex-direction:column}.top[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex}.top[_ngcontent-%COMP%]{align-items:center}.my-sidebar[_ngcontent-%COMP%]{height:300px}button[_ngcontent-%COMP%]{margin-left:40px}"]}),e})();function J(e,n){if(1&e&&s.Ob(0,"nx-icon",6),2&e){const e=s.ec().$implicit;s.kc("name",e.icon)}}function D(e,n){if(1&e&&(s.Tb(0,"nx-tree-node"),s.Tb(1,"button",4),s.Hc(2,J,1,1,"nx-icon",5),s.Jc(3),s.Sb(),s.Sb()),2&e){const e=n.$implicit;s.Bb(1),s.lc("title",e.label),s.kc("queryParams",e.query),s.Bb(1),s.kc("ngIf",e.icon),s.Bb(1),s.Lc(" ",e.label," ")}}function F(e,n){if(1&e&&s.Ob(0,"nx-icon",6),2&e){const e=s.ec().$implicit;s.kc("name",e.icon)}}function E(e,n){if(1&e&&(s.Tb(0,"nx-tree-node"),s.Tb(1,"button",7),s.Hc(2,F,1,1,"nx-icon",5),s.Jc(3),s.Sb(),s.Sb()),2&e){const e=n.$implicit,t=s.ec();s.Bb(1),s.lc("title",e.label),s.kc("expanded",t._treeControl.isExpanded(e)),s.Bb(1),s.kc("ngIf",e.icon),s.Bb(1),s.Lc(" ",e.label," ")}}let W=(()=>{class e{constructor(){this.navigationData=[{label:"Option 1",icon:"user-o",children:[{label:"Option 1.1",query:{a:"1.1"}},{label:"Option 1.2",children:[{label:"Option 1.2.1",query:{a:"1.2.1"}},{label:"Option 1.2.2",query:{a:"1.2.2"}},{label:"Option 1.2.3",children:[{label:"Option 1.2.3.1",children:[{label:"Option 1.2.3.1.1",query:{a:"1.2.3.1.1"}}]}]}]},{label:"Option 1.3",query:{a:"1.3"}}]},{label:"Option 2",icon:"file",children:[{label:"Option 2.1",query:{a:"2.1"}},{label:"Option 2.2",query:{a:"2.2"}},{label:"Option 2.3",query:{a:"2.3"}}]},{label:"Option 3",icon:"file",query:{a:"3"}}],this._hasChild=(e,n)=>n.expandable,this._treeControl=new c.a,this._dataSource=new c.b(this._treeControl,this.navigationData)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["sidebar-resizeable-example"]],decls:4,vars:3,consts:[["resizeHandleAriaLabel","Toggle sidebar width","resizeable","","minWidth","140"],[3,"dataSource","treeControl"],[4,"nxTreeNodeDef"],[4,"nxTreeNodeDef","nxTreeNodeDefWhen"],["nxAction","","nxTreeNodePadding","","nxTreeNodePaddingOffset","40","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams","title"],["nxActionIcon","",3,"name",4,"ngIf"],["nxActionIcon","",3,"name"],["nxAction","","nxTreeNodeToggle","","nxTreeNodePadding","","nxTreeNodePaddingOffset","40","expandable","","type","button",3,"expanded","title"]],template:function(e,n){1&e&&(s.Tb(0,"nx-sidebar",0),s.Tb(1,"nx-tree",1),s.Hc(2,D,4,4,"nx-tree-node",2),s.Hc(3,E,4,4,"nx-tree-node",3),s.Sb(),s.Sb()),2&e&&(s.Bb(1),s.kc("dataSource",n._dataSource)("treeControl",n._treeControl),s.Bb(2),s.kc("nxTreeNodeDefWhen",n._hasChild))},directives:[b.a,S.a,_.b,_.a,d.a,M.a,i.f,i.g,u.t,p.a,g.a,B.a],styles:["[_nghost-%COMP%]{display:block;height:300px}"]}),e})();var $=t("t3RA");let j=(()=>{class e{static components(){return{sidebar:h,"sidebar-footer":v,"sidebar-methods":w,"sidebar-outputs":I,"sidebar-resizeable":W}}}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(n){return new(n||e)},imports:[[l.a,c.c,o.b,r.c,i.i,a.a,$.a]]}),e})()},t3RA:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t("ohqM"),i=t("4TwE"),o=t("aln5"),r=t("kPBv"),c=t("2kYt"),l=t("nIj0"),s=t("EM62");let b=(()=>{class e{}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(n){return new(n||e)},imports:[[],c.c,l.k,l.v,r.b,o.a,i.a,a.a]}),e})()}}]);