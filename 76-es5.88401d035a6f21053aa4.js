!function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{j1oj:function(e,i,s){"use strict";s.r(i),s.d(i,"SidepanelExamplesModule",(function(){return z}));var a,o,c,u,l,b,r,p,d,m,g,S=s("0FLW"),h=s("VIPS"),T=s("EM62"),x=s("5XID"),f=["*"],J=((a=function e(){t(this,e)}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=T.Hb({type:a,selectors:[["nx-sidepanel-header"]],ngContentSelectors:f,decls:1,vars:0,template:function(e,n){1&e&&(T.jc(),T.ic(0))},styles:["[_nghost-%COMP%]{display:block;font-size:var(--sidepanel-header-font-size);line-height:var(--sidepanel-header-line-height);font-weight:var(--sidepanel-header-font-weight);letter-spacing:var(--sidepanel-header-letter-spacing)}"],changeDetection:0}),a),v=["*"],C=((o=function(){function e(n,i){t(this,e),this._changeDetectorRef=n,this._elementRef=i,this._opened=!0,this.openedChange=new T.o,this._position="floating",this._appearance="dark"}return n(e,[{key:"toggle",value:function(){this.opened=!this.opened,this.openedChange.emit(this._opened)}},{key:"open",value:function(){this.opened||this.toggle()}},{key:"close",value:function(){this.opened&&this.toggle()}},{key:"_getContentHeight",value:function(){return this._header?this._elementRef.nativeElement.offsetHeight-this._header.nativeElement.offsetHeight:this._elementRef.nativeElement.offsetHeight}},{key:"opened",set:function(e){this._opened=Object(x.b)(e),this._changeDetectorRef.markForCheck()},get:function(){return this._opened}},{key:"position",set:function(e){this._position=e,this._changeDetectorRef.markForCheck()},get:function(){return this._position}},{key:"appearance",set:function(e){this._appearance=e,this._changeDetectorRef.markForCheck()},get:function(){return this._appearance}}]),e}()).\u0275fac=function(e){return new(e||o)(T.Nb(T.h),T.Nb(T.l))},o.\u0275cmp=T.Hb({type:o,selectors:[["nx-sidepanel"]],contentQueries:function(e,n,t){var i;1&e&&T.Gb(t,J,!0,T.l),2&e&&T.qc(i=T.bc())&&(n._header=i.first)},hostAttrs:["role","complementary"],hostVars:8,hostBindings:function(e,n){2&e&&T.Fb("is-closed",!n.opened)("is-static","static"===n.position)("is-floating","floating"===n.position)("light","light"===n.appearance)},inputs:{opened:"opened",position:"position",appearance:"appearance"},outputs:{openedChange:"openedChange"},ngContentSelectors:v,decls:1,vars:0,template:function(e,n){1&e&&(T.jc(),T.ic(0))},styles:["[_nghost-%COMP%]{display:block;background:var(--sidepanel-background-color)}.is-floating[_nghost-%COMP%]{position:fixed;right:0;z-index:1;box-shadow:var(--sidepanel-floating-shadow)}[dir=rtl]   .is-floating[_nghost-%COMP%]{right:auto;left:0}.is-static[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;top:0}.is-closed[_nghost-%COMP%]{display:none}.light[_nghost-%COMP%]{background:var(--sidepanel-light-background-color);border-left:1px solid var(--sidepanel-light-border-color)}[dir=rtl]   .light[_nghost-%COMP%]{border-left:unset;border-right:1px solid var(--sidepanel-light-border-color)}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]{border-left:1px solid windowText}[dir=rtl]   [_nghost-%COMP%]{border-left:none;border-right:1px solid windowText}}"],changeDetection:0}),o),y=["*"],q=((c=function e(n){t(this,e),this._sidepanel=n}).\u0275fac=function(e){return new(e||c)(T.Nb(C))},c.\u0275cmp=T.Hb({type:c,selectors:[["nx-sidepanel-content"]],hostVars:2,hostBindings:function(e,n){2&e&&T.Ec("height",n._sidepanel._getContentHeight(),"px")},ngContentSelectors:y,decls:1,vars:0,template:function(e,n){1&e&&(T.jc(),T.ic(0))},styles:["[_nghost-%COMP%]{display:block;overflow-y:auto}"],changeDetection:0}),c),_=s("sg/T"),M=s("VKQk"),k=["nxSidepanelCloseButton",""],O=((u=function(){function e(n,i,s){t(this,e),this._sidepanel=n,this._focusMonitor=i,this._elementRef=s,this._focusMonitor.monitor(this._elementRef)}return n(e,[{key:"_toggle",value:function(){this._sidepanel.toggle()}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}}]),e}()).\u0275fac=function(e){return new(e||u)(T.Nb(C),T.Nb(_.g),T.Nb(T.l))},u.\u0275cmp=T.Hb({type:u,selectors:[["button","nxSidepanelCloseButton",""]],hostBindings:function(e,n){1&e&&T.ac("click",(function(){return n._toggle()}))},attrs:k,decls:1,vars:0,consts:[["name","close","size","s","aria-hidden","true"]],template:function(e,n){1&e&&T.Ob(0,"nx-icon",0)},directives:[M.a],styles:["[_nghost-%COMP%]{cursor:pointer;background-color:transparent;border:none;outline:none;padding:0;display:flex;align-items:center}[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:var(--sidepanel-close-icon-color)}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:buttonText}}.cdk-keyboard-focused[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast:active){.cdk-keyboard-focused[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText}}"],changeDetection:0}),u),P=s("kPBv"),w=s("2kYt"),V=((l=function e(){t(this,e)}).\u0275mod=T.Lb({type:l}),l.\u0275inj=T.Kb({factory:function(e){return new(e||l)},imports:[[w.c,S.c,P.b]]}),l),B=s("TnyK"),A=s("JNA7"),L=s("uHtO"),N=s("nIj0"),F=s("GtBn"),H=((p=function e(n,i){var s=this;t(this,e),this.viewportService=n,this._cdRef=i,this.opened=!1,this.isGreaterThanSmall=!0,this.viewportServiceSubscription=this.viewportService.min(A.b.BREAKPOINT_SMALL).subscribe((function(e){e!==s.isGreaterThanSmall&&(s.isGreaterThanSmall=e,e&&!s.opened?s.opened=!0:!e&&s.opened&&(s.opened=!1),s._cdRef.detectChanges())}))}).\u0275fac=function(e){return new(e||p)(T.Nb(A.c),T.Nb(T.h))},p.\u0275cmp=T.Hb({type:p,selectors:[["nx-sidepanel-floating-example"]],decls:69,vars:5,consts:[["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],[1,"example-hint"],["name","arrow-right","size","s"],[1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,n){1&e&&(T.Tb(0,"nx-radio-toggle",0),T.ac("ngModelChange",(function(e){return n.opened=e})),T.Tb(1,"nx-radio-toggle-button",1),T.Jc(2,"Open"),T.Sb(),T.Tb(3,"nx-radio-toggle-button",1),T.Jc(4,"Close"),T.Sb(),T.Sb(),T.Tb(5,"p"),T.Jc(6),T.Sb(),T.Tb(7,"p",2),T.Jc(8,"Watch the sidepanel appearing on the right side of the screen "),T.Ob(9,"nx-icon",3),T.Sb(),T.Tb(10,"nx-sidepanel",4),T.ac("openedChange",(function(e){return n.opened=e})),T.Tb(11,"nx-sidepanel-header"),T.Tb(12,"div",5),T.Jc(13," Sidepanel "),T.Ob(14,"button",6),T.Sb(),T.Sb(),T.Tb(15,"nx-sidepanel-content"),T.Tb(16,"div",7),T.Tb(17,"p",8),T.Jc(18,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),T.Sb(),T.Tb(19,"p"),T.Jc(20,"Aliquam tincidunt mauris eu risus."),T.Sb(),T.Tb(21,"p"),T.Jc(22,"Vestibulum auctor dapibus neque."),T.Sb(),T.Tb(23,"p"),T.Jc(24,"Nunc dignissim risus id metus."),T.Sb(),T.Tb(25,"p"),T.Jc(26,"Cras ornare tristique elit."),T.Sb(),T.Tb(27,"p"),T.Jc(28,"Vivamus vestibulum ntulla nec ante."),T.Sb(),T.Tb(29,"p"),T.Jc(30,"Praesent placerat risus quis eros."),T.Sb(),T.Tb(31,"p"),T.Jc(32,"Fusce pellentesque suscipit nibh."),T.Sb(),T.Tb(33,"p"),T.Jc(34,"Integer vitae libero ac risus egestas placerat."),T.Sb(),T.Tb(35,"p"),T.Jc(36,"Vestibulum commodo felis quis tortor."),T.Sb(),T.Tb(37,"p"),T.Jc(38,"Ut aliquam sollicitudin leo."),T.Sb(),T.Tb(39,"p"),T.Jc(40,"Cras iaculis ultricies nulla."),T.Sb(),T.Tb(41,"p"),T.Jc(42,"Donec quis dui at dolor tempor interdum."),T.Sb(),T.Tb(43,"p"),T.Jc(44,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),T.Sb(),T.Tb(45,"p"),T.Jc(46,"Aliquam tincidunt mauris eu risus."),T.Sb(),T.Tb(47,"p"),T.Jc(48,"Vestibulum auctor dapibus neque."),T.Sb(),T.Tb(49,"p"),T.Jc(50,"Nunc dignissim risus id metus."),T.Sb(),T.Tb(51,"p"),T.Jc(52,"Cras ornare tristique elit."),T.Sb(),T.Tb(53,"p"),T.Jc(54,"Vivamus vestibulum ntulla nec ante."),T.Sb(),T.Tb(55,"p"),T.Jc(56,"Praesent placerat risus quis eros."),T.Sb(),T.Tb(57,"p"),T.Jc(58,"Fusce pellentesque suscipit nibh."),T.Sb(),T.Tb(59,"p"),T.Jc(60,"Integer vitae libero ac risus egestas placerat."),T.Sb(),T.Tb(61,"p"),T.Jc(62,"Vestibulum commodo felis quis tortor."),T.Sb(),T.Tb(63,"p"),T.Jc(64,"Ut aliquam sollicitudin leo."),T.Sb(),T.Tb(65,"p"),T.Jc(66,"Cras iaculis ultricies nulla."),T.Sb(),T.Tb(67,"p"),T.Jc(68,"Donec quis dui at dolor tempor interdum."),T.Sb(),T.Sb(),T.Sb(),T.Sb()),2&e&&(T.kc("ngModel",n.opened),T.Bb(1),T.kc("nxValue",!0),T.Bb(2),T.kc("nxValue",!1),T.Bb(3),T.Lc("Opened: ",n.opened,""),T.Bb(4),T.kc("opened",n.opened))},directives:[L.a,N.p,N.s,F.a,M.a,C,J,O,q],styles:[".my-sidepanel[_ngcontent-%COMP%]{top:60px;height:calc(100% - 60px);width:240px}@media only screen and (max-width:785px){.my-sidepanel[_ngcontent-%COMP%]{top:120px;height:calc(100% - 120px)}}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}.example-hint[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{vertical-align:bottom}"]}),p),I=((r=function e(){t(this,e),this.opened=!0}).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=T.Hb({type:r,selectors:[["nx-sidepanel-static-example"]],decls:75,vars:5,consts:[[1,"content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,n){1&e&&(T.Tb(0,"div",0),T.Tb(1,"nx-radio-toggle",1),T.ac("ngModelChange",(function(e){return n.opened=e})),T.Tb(2,"nx-radio-toggle-button",2),T.Jc(3,"Open"),T.Sb(),T.Tb(4,"nx-radio-toggle-button",2),T.Jc(5,"Close"),T.Sb(),T.Sb(),T.Tb(6,"p"),T.Jc(7),T.Sb(),T.Tb(8,"p"),T.Tb(9,"i"),T.Jc(10,"Here is some example content that can be scrolled."),T.Sb(),T.Sb(),T.Tb(11,"p"),T.Tb(12,"i"),T.Jc(13,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),T.Sb(),T.Sb(),T.Tb(14,"p"),T.Tb(15,"i"),T.Jc(16,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),T.Sb(),T.Sb(),T.Tb(17,"p"),T.Tb(18,"i"),T.Jc(19,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),T.Sb(),T.Sb(),T.Tb(20,"p"),T.Tb(21,"i"),T.Jc(22,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),T.Sb(),T.Sb(),T.Tb(23,"p"),T.Tb(24,"i"),T.Jc(25,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),T.Sb(),T.Sb(),T.Tb(26,"p"),T.Tb(27,"i"),T.Jc(28,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),T.Sb(),T.Sb(),T.Tb(29,"p"),T.Tb(30,"i"),T.Jc(31,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),T.Sb(),T.Sb(),T.Sb(),T.Tb(32,"nx-sidepanel",3),T.ac("openedChange",(function(e){return n.opened=e})),T.Tb(33,"nx-sidepanel-header"),T.Tb(34,"div",4),T.Jc(35," Sidepanel "),T.Ob(36,"button",5),T.Sb(),T.Sb(),T.Tb(37,"nx-sidepanel-content"),T.Tb(38,"div",6),T.Tb(39,"p",7),T.Jc(40,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),T.Sb(),T.Tb(41,"p"),T.Jc(42,"Aliquam tincidunt mauris eu risus."),T.Sb(),T.Tb(43,"p"),T.Jc(44,"Vestibulum auctor dapibus neque."),T.Sb(),T.Tb(45,"p"),T.Jc(46,"Nunc dignissim risus id metus."),T.Sb(),T.Tb(47,"p"),T.Jc(48,"Cras ornare tristique elit."),T.Sb(),T.Tb(49,"p"),T.Jc(50,"Vivamus vestibulum ntulla nec ante."),T.Sb(),T.Tb(51,"p"),T.Jc(52,"Praesent placerat risus quis eros."),T.Sb(),T.Tb(53,"p"),T.Jc(54,"Fusce pellentesque suscipit nibh."),T.Sb(),T.Tb(55,"p"),T.Jc(56,"Integer vitae libero ac risus egestas placerat."),T.Sb(),T.Tb(57,"p"),T.Jc(58,"Vestibulum commodo felis quis tortor."),T.Sb(),T.Tb(59,"p"),T.Jc(60,"Ut aliquam sollicitudin leo."),T.Sb(),T.Tb(61,"p"),T.Jc(62,"Cras iaculis ultricies nulla."),T.Sb(),T.Tb(63,"p"),T.Jc(64,"Donec quis dui at dolor tempor interdum."),T.Sb(),T.Tb(65,"p"),T.Jc(66,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),T.Sb(),T.Tb(67,"p"),T.Jc(68,"Aliquam tincidunt mauris eu risus."),T.Sb(),T.Tb(69,"p"),T.Jc(70,"Vestibulum auctor dapibus neque."),T.Sb(),T.Tb(71,"p"),T.Jc(72,"Nunc dignissim risus id metus."),T.Sb(),T.Tb(73,"p"),T.Jc(74,"Cras ornare tristique elit."),T.Sb(),T.Sb(),T.Sb(),T.Sb()),2&e&&(T.Bb(1),T.kc("ngModel",n.opened),T.Bb(1),T.kc("nxValue",!0),T.Bb(2),T.kc("nxValue",!1),T.Bb(3),T.Lc("Opened: ",n.opened,""),T.Bb(25),T.kc("opened",n.opened))},directives:[L.a,N.p,N.s,F.a,C,J,O,q],styles:["[_nghost-%COMP%]{display:flex;height:400px}.content[_ngcontent-%COMP%]{flex:1;height:100%;overflow-y:auto;padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),r),D=((b=function e(){t(this,e),this.opened=!0}).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=T.Hb({type:b,selectors:[["nx-sidepanel-light-example"]],decls:75,vars:5,consts:[[1,"content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static","appearance","light",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,n){1&e&&(T.Tb(0,"div",0),T.Tb(1,"nx-radio-toggle",1),T.ac("ngModelChange",(function(e){return n.opened=e})),T.Tb(2,"nx-radio-toggle-button",2),T.Jc(3,"Open"),T.Sb(),T.Tb(4,"nx-radio-toggle-button",2),T.Jc(5,"Close"),T.Sb(),T.Sb(),T.Tb(6,"p"),T.Jc(7),T.Sb(),T.Tb(8,"p"),T.Tb(9,"i"),T.Jc(10,"Here is some example content that can be scrolled."),T.Sb(),T.Sb(),T.Tb(11,"p"),T.Tb(12,"i"),T.Jc(13,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),T.Sb(),T.Sb(),T.Tb(14,"p"),T.Tb(15,"i"),T.Jc(16,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),T.Sb(),T.Sb(),T.Tb(17,"p"),T.Tb(18,"i"),T.Jc(19,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),T.Sb(),T.Sb(),T.Tb(20,"p"),T.Tb(21,"i"),T.Jc(22,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),T.Sb(),T.Sb(),T.Tb(23,"p"),T.Tb(24,"i"),T.Jc(25,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),T.Sb(),T.Sb(),T.Tb(26,"p"),T.Tb(27,"i"),T.Jc(28,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),T.Sb(),T.Sb(),T.Tb(29,"p"),T.Tb(30,"i"),T.Jc(31,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),T.Sb(),T.Sb(),T.Sb(),T.Tb(32,"nx-sidepanel",3),T.ac("openedChange",(function(e){return n.opened=e})),T.Tb(33,"nx-sidepanel-header"),T.Tb(34,"div",4),T.Jc(35," Sidepanel "),T.Ob(36,"button",5),T.Sb(),T.Sb(),T.Tb(37,"nx-sidepanel-content"),T.Tb(38,"div",6),T.Tb(39,"p",7),T.Jc(40,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),T.Sb(),T.Tb(41,"p"),T.Jc(42,"Aliquam tincidunt mauris eu risus."),T.Sb(),T.Tb(43,"p"),T.Jc(44,"Vestibulum auctor dapibus neque."),T.Sb(),T.Tb(45,"p"),T.Jc(46,"Nunc dignissim risus id metus."),T.Sb(),T.Tb(47,"p"),T.Jc(48,"Cras ornare tristique elit."),T.Sb(),T.Tb(49,"p"),T.Jc(50,"Vivamus vestibulum ntulla nec ante."),T.Sb(),T.Tb(51,"p"),T.Jc(52,"Praesent placerat risus quis eros."),T.Sb(),T.Tb(53,"p"),T.Jc(54,"Fusce pellentesque suscipit nibh."),T.Sb(),T.Tb(55,"p"),T.Jc(56,"Integer vitae libero ac risus egestas placerat."),T.Sb(),T.Tb(57,"p"),T.Jc(58,"Vestibulum commodo felis quis tortor."),T.Sb(),T.Tb(59,"p"),T.Jc(60,"Ut aliquam sollicitudin leo."),T.Sb(),T.Tb(61,"p"),T.Jc(62,"Cras iaculis ultricies nulla."),T.Sb(),T.Tb(63,"p"),T.Jc(64,"Donec quis dui at dolor tempor interdum."),T.Sb(),T.Tb(65,"p"),T.Jc(66,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),T.Sb(),T.Tb(67,"p"),T.Jc(68,"Aliquam tincidunt mauris eu risus."),T.Sb(),T.Tb(69,"p"),T.Jc(70,"Vestibulum auctor dapibus neque."),T.Sb(),T.Tb(71,"p"),T.Jc(72,"Nunc dignissim risus id metus."),T.Sb(),T.Tb(73,"p"),T.Jc(74,"Cras ornare tristique elit."),T.Sb(),T.Sb(),T.Sb(),T.Sb()),2&e&&(T.Bb(1),T.kc("ngModel",n.opened),T.Bb(1),T.kc("nxValue",!0),T.Bb(2),T.kc("nxValue",!1),T.Bb(3),T.Lc("Opened: ",n.opened,""),T.Bb(25),T.kc("opened",n.opened))},directives:[L.a,N.p,N.s,F.a,C,J,O,q],styles:["[_nghost-%COMP%]{display:flex;height:400px;background-color:var(--ui-02)}.content[_ngcontent-%COMP%]{flex:1;height:100%;overflow-y:auto;padding:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),b),j=s("2CaP"),R=s("NeH3"),E=((g=function e(){t(this,e),this.opened=!0}).\u0275fac=function(e){return new(e||g)},g.\u0275cmp=T.Hb({type:g,selectors:[["nx-sidepanel-with-tabs-example"]],decls:80,vars:5,consts:[[1,"content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],["appearance","expert"],["label","First tab"],["label","Second tab"],["nxCopytext","normal"]],template:function(e,n){1&e&&(T.Tb(0,"div",0),T.Tb(1,"nx-radio-toggle",1),T.ac("ngModelChange",(function(e){return n.opened=e})),T.Tb(2,"nx-radio-toggle-button",2),T.Jc(3,"Open"),T.Sb(),T.Tb(4,"nx-radio-toggle-button",2),T.Jc(5,"Close"),T.Sb(),T.Sb(),T.Tb(6,"p"),T.Jc(7),T.Sb(),T.Tb(8,"p"),T.Tb(9,"i"),T.Jc(10,"Here is some example content that can be scrolled."),T.Sb(),T.Sb(),T.Tb(11,"p"),T.Tb(12,"i"),T.Jc(13,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),T.Sb(),T.Sb(),T.Tb(14,"p"),T.Tb(15,"i"),T.Jc(16,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),T.Sb(),T.Sb(),T.Tb(17,"p"),T.Tb(18,"i"),T.Jc(19,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),T.Sb(),T.Sb(),T.Tb(20,"p"),T.Tb(21,"i"),T.Jc(22,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),T.Sb(),T.Sb(),T.Tb(23,"p"),T.Tb(24,"i"),T.Jc(25,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),T.Sb(),T.Sb(),T.Tb(26,"p"),T.Tb(27,"i"),T.Jc(28,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),T.Sb(),T.Sb(),T.Tb(29,"p"),T.Tb(30,"i"),T.Jc(31,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),T.Sb(),T.Sb(),T.Sb(),T.Tb(32,"nx-sidepanel",3),T.ac("openedChange",(function(e){return n.opened=e})),T.Tb(33,"nx-sidepanel-header"),T.Tb(34,"div",4),T.Jc(35," Sidepanel "),T.Ob(36,"button",5),T.Sb(),T.Sb(),T.Tb(37,"nx-sidepanel-content"),T.Tb(38,"div",6),T.Tb(39,"nx-tab-group",7),T.Tb(40,"nx-tab",8),T.Tb(41,"p"),T.Jc(42,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),T.Sb(),T.Tb(43,"p"),T.Jc(44,"Aliquam tincidunt mauris eu risus."),T.Sb(),T.Tb(45,"p"),T.Jc(46,"Vestibulum auctor dapibus neque."),T.Sb(),T.Tb(47,"p"),T.Jc(48,"Nunc dignissim risus id metus."),T.Sb(),T.Tb(49,"p"),T.Jc(50,"Cras ornare tristique elit."),T.Sb(),T.Tb(51,"p"),T.Jc(52,"Vivamus vestibulum ntulla nec ante."),T.Sb(),T.Tb(53,"p"),T.Jc(54,"Praesent placerat risus quis eros."),T.Sb(),T.Tb(55,"p"),T.Jc(56,"Fusce pellentesque suscipit nibh."),T.Sb(),T.Tb(57,"p"),T.Jc(58,"Integer vitae libero ac risus egestas placerat."),T.Sb(),T.Tb(59,"p"),T.Jc(60,"Vestibulum commodo felis quis tortor."),T.Sb(),T.Tb(61,"p"),T.Jc(62,"Ut aliquam sollicitudin leo."),T.Sb(),T.Tb(63,"p"),T.Jc(64,"Cras iaculis ultricies nulla."),T.Sb(),T.Tb(65,"p"),T.Jc(66,"Donec quis dui at dolor tempor interdum."),T.Sb(),T.Tb(67,"p"),T.Jc(68,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),T.Sb(),T.Tb(69,"p"),T.Jc(70,"Aliquam tincidunt mauris eu risus."),T.Sb(),T.Tb(71,"p"),T.Jc(72,"Vestibulum auctor dapibus neque."),T.Sb(),T.Tb(73,"p"),T.Jc(74,"Nunc dignissim risus id metus."),T.Sb(),T.Tb(75,"p"),T.Jc(76,"Cras ornare tristique elit."),T.Sb(),T.Sb(),T.Tb(77,"nx-tab",9),T.Tb(78,"p",10),T.Jc(79," Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mo "),T.Sb(),T.Sb(),T.Sb(),T.Sb(),T.Sb(),T.Sb()),2&e&&(T.Bb(1),T.kc("ngModel",n.opened),T.Bb(1),T.kc("nxValue",!0),T.Bb(2),T.kc("nxValue",!1),T.Bb(3),T.Lc("Opened: ",n.opened,""),T.Bb(25),T.kc("opened",n.opened))},directives:[L.a,N.p,N.s,F.a,C,J,O,q,j.a,R.a],styles:["[_nghost-%COMP%]{display:flex;height:400px}.content[_ngcontent-%COMP%]{flex:1;height:100%;overflow-y:auto;padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:384px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}.my-sidepanel[_ngcontent-%COMP%]     nx-tab-header{position:-webkit-sticky;position:sticky;top:0;background:var(--sidepanel-background-color)}"]}),g),U=((m=function e(){t(this,e),this.opened=!0}).\u0275fac=function(e){return new(e||m)},m.\u0275cmp=T.Hb({type:m,selectors:[["nx-sidepanel-dark-example"]],decls:75,vars:5,consts:[[1,"content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,n){1&e&&(T.Tb(0,"div",0),T.Tb(1,"nx-radio-toggle",1),T.ac("ngModelChange",(function(e){return n.opened=e})),T.Tb(2,"nx-radio-toggle-button",2),T.Jc(3,"Open"),T.Sb(),T.Tb(4,"nx-radio-toggle-button",2),T.Jc(5,"Close"),T.Sb(),T.Sb(),T.Tb(6,"p"),T.Jc(7),T.Sb(),T.Tb(8,"p"),T.Tb(9,"i"),T.Jc(10,"Here is some example content that can be scrolled."),T.Sb(),T.Sb(),T.Tb(11,"p"),T.Tb(12,"i"),T.Jc(13,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),T.Sb(),T.Sb(),T.Tb(14,"p"),T.Tb(15,"i"),T.Jc(16,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),T.Sb(),T.Sb(),T.Tb(17,"p"),T.Tb(18,"i"),T.Jc(19,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),T.Sb(),T.Sb(),T.Tb(20,"p"),T.Tb(21,"i"),T.Jc(22,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),T.Sb(),T.Sb(),T.Tb(23,"p"),T.Tb(24,"i"),T.Jc(25,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),T.Sb(),T.Sb(),T.Tb(26,"p"),T.Tb(27,"i"),T.Jc(28,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),T.Sb(),T.Sb(),T.Tb(29,"p"),T.Tb(30,"i"),T.Jc(31,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),T.Sb(),T.Sb(),T.Sb(),T.Tb(32,"nx-sidepanel",3),T.ac("openedChange",(function(e){return n.opened=e})),T.Tb(33,"nx-sidepanel-header"),T.Tb(34,"div",4),T.Jc(35," Sidepanel "),T.Ob(36,"button",5),T.Sb(),T.Sb(),T.Tb(37,"nx-sidepanel-content"),T.Tb(38,"div",6),T.Tb(39,"p",7),T.Jc(40,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),T.Sb(),T.Tb(41,"p"),T.Jc(42,"Aliquam tincidunt mauris eu risus."),T.Sb(),T.Tb(43,"p"),T.Jc(44,"Vestibulum auctor dapibus neque."),T.Sb(),T.Tb(45,"p"),T.Jc(46,"Nunc dignissim risus id metus."),T.Sb(),T.Tb(47,"p"),T.Jc(48,"Cras ornare tristique elit."),T.Sb(),T.Tb(49,"p"),T.Jc(50,"Vivamus vestibulum ntulla nec ante."),T.Sb(),T.Tb(51,"p"),T.Jc(52,"Praesent placerat risus quis eros."),T.Sb(),T.Tb(53,"p"),T.Jc(54,"Fusce pellentesque suscipit nibh."),T.Sb(),T.Tb(55,"p"),T.Jc(56,"Integer vitae libero ac risus egestas placerat."),T.Sb(),T.Tb(57,"p"),T.Jc(58,"Vestibulum commodo felis quis tortor."),T.Sb(),T.Tb(59,"p"),T.Jc(60,"Ut aliquam sollicitudin leo."),T.Sb(),T.Tb(61,"p"),T.Jc(62,"Cras iaculis ultricies nulla."),T.Sb(),T.Tb(63,"p"),T.Jc(64,"Donec quis dui at dolor tempor interdum."),T.Sb(),T.Tb(65,"p"),T.Jc(66,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),T.Sb(),T.Tb(67,"p"),T.Jc(68,"Aliquam tincidunt mauris eu risus."),T.Sb(),T.Tb(69,"p"),T.Jc(70,"Vestibulum auctor dapibus neque."),T.Sb(),T.Tb(71,"p"),T.Jc(72,"Nunc dignissim risus id metus."),T.Sb(),T.Tb(73,"p"),T.Jc(74,"Cras ornare tristique elit."),T.Sb(),T.Sb(),T.Sb(),T.Sb()),2&e&&(T.Bb(1),T.kc("ngModel",n.opened),T.Bb(1),T.kc("nxValue",!0),T.Bb(2),T.kc("nxValue",!1),T.Bb(3),T.Lc("Opened: ",n.opened,""),T.Bb(25),T.kc("opened",n.opened))},directives:[L.a,N.p,N.s,F.a,C,J,O,q],styles:["[_nghost-%COMP%]{display:flex;height:400px}.content[_ngcontent-%COMP%]{flex:1;height:100%;overflow-y:auto;padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),m),z=((d=function(){function e(){t(this,e)}return n(e,null,[{key:"components",value:function(){return{"sidepanel-floating":H,"sidepanel-static":I,"sidepanel-light":D,"sidepanel-with-tabs":E,"sidepanel-dark":U}}}]),e}()).\u0275mod=T.Lb({type:d}),d.\u0275inj=T.Kb({factory:function(e){return new(e||d)},imports:[[V,h.a,N.k,S.c,B.b]]}),d)}}])}();