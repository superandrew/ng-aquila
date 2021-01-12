!function(){function o(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function e(o,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function r(o,r,n){return r&&e(o.prototype,r),n&&e(o,n),o}(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{K0Nr:function(e,n,t){"use strict";t.r(n),t.d(n,"PopoverExamplesModule",(function(){return E}));var i,l,c,a=t("t/qE"),p=t("0FLW"),s=t("kPBv"),g=t("pT7h"),b=t("EM62"),u=t("tPQ2"),v=t("kMq3"),f=t("dWOj"),m=((l=function(){function e(){o(this,e),this.closeOnDocClick=!0,this.popoverManualOpenFlag=!1}return r(e,[{key:"closeOnClickOutside",value:function(){this.closeOnDocClick=!this.closeOnDocClick}}]),e}()).\u0275fac=function(o){return new(o||l)},l.\u0275cmp=b.Hb({type:l,selectors:[["popover-click-outside-example"]],decls:18,vars:6,consts:[[1,"nx-margin-top-0"],["nxButton","primary small","nxPopoverTrigger","click","type","button",1,"nx-margin-right-2xs",3,"nxPopoverTriggerFor","closeOnClickOutside"],["popoverClick",""],["nxButton","primary small","nxPopoverDirection","top","nxPopoverTrigger","manual","type","button",3,"nxPopoverTriggerFor","nxPopoverShow","closeOnClickOutside","nxPopoverShowChange","click"],["popoverTrigger","nxPopoverTrigger"],["popoverManual",""],["nxButton","secondary small","type","button",3,"click"]],template:function(o,e){if(1&o&&(b.Tb(0,"p",0),b.Jc(1),b.Sb(),b.Tb(2,"button",1),b.Jc(3," Click\n"),b.Sb(),b.Tb(4,"nx-popover",null,2),b.Tb(6,"span"),b.Jc(7,"Trigger by click"),b.Sb(),b.Sb(),b.Tb(8,"button",3,4),b.ac("nxPopoverShowChange",(function(o){return e.popoverManualOpenFlag=o}))("click",(function(){return e.popoverManualOpenFlag=!e.popoverManualOpenFlag})),b.Jc(10," Manual\n"),b.Sb(),b.Tb(11,"nx-popover",null,5),b.Tb(13,"span"),b.Jc(14,"Trigger manually"),b.Sb(),b.Sb(),b.Ob(15,"br"),b.Tb(16,"button",6),b.ac("click",(function(){return e.closeOnClickOutside()})),b.Jc(17,"Toggle closing on click outside"),b.Sb()),2&o){var r=b.rc(5),n=b.rc(12);b.Bb(1),b.Lc("Close on document click: ",e.closeOnDocClick,""),b.Bb(1),b.kc("nxPopoverTriggerFor",r)("closeOnClickOutside",e.closeOnDocClick),b.Bb(6),b.kc("nxPopoverTriggerFor",n)("nxPopoverShow",e.popoverManualOpenFlag)("closeOnClickOutside",e.closeOnDocClick)}},directives:[u.a,v.a,f.a],styles:[".btn-spacing[_ngcontent-%COMP%]{margin-right:12px}"]}),l),x=((i=function e(){o(this,e)}).\u0275fac=function(o){return new(o||i)},i.\u0275cmp=b.Hb({type:i,selectors:[["popover-custom-example"]],decls:5,vars:1,consts:[["nxButton","primary small","nxPopoverDirection","right","nxPopoverTrigger","click","type","button",3,"nxPopoverTriggerFor"],["popoverCustomContent",""],["src","docs-assets/images/adli-wahid-eagle-unsplash.jpg","alt","An eagle sitting on a branch and thinking. Photo made by Adli Wahid",1,"popover-demo__img"]],template:function(o,e){if(1&o&&(b.Tb(0,"button",0),b.Jc(1," Click\n"),b.Sb(),b.Tb(2,"nx-popover",null,1),b.Ob(4,"img",2),b.Sb()),2&o){var r=b.rc(3);b.kc("nxPopoverTriggerFor",r)}},directives:[u.a,v.a,f.a],styles:[".popover-demo__img[_ngcontent-%COMP%]{width:200px;height:160px}"]}),i),d=t("sg/T"),k=t("VKQk"),T=["hoverTriggerIcon"],h=((c=function(){function e(r){o(this,e),this._focusMonitor=r,this.popoverManualOpenFlag=!1}return r(e,[{key:"ngAfterViewInit",value:function(){this._focusMonitor.monitor(this._hoverTriggerIcon)}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._hoverTriggerIcon)}}]),e}()).\u0275fac=function(o){return new(o||c)(b.Nb(d.g))},c.\u0275cmp=b.Hb({type:c,selectors:[["popover-hover-example"]],viewQuery:function(o,e){var r;1&o&&b.Nc(T,!0),2&o&&b.qc(r=b.bc())&&(e._hoverTriggerIcon=r.first)},decls:5,vars:1,consts:[["name","refresh","size","s","nxPopoverDirection","top","nxPopoverTrigger","hover","tabindex","0","role","button","aria-label","progress",3,"nxPopoverTriggerFor"],["hoverTriggerIcon",""],["progress",""]],template:function(o,e){if(1&o&&(b.Ob(0,"nx-icon",0,1),b.Tb(2,"nx-popover",null,2),b.Jc(4," Your application status is in progress.\n"),b.Sb()),2&o){var r=b.rc(3);b.kc("nxPopoverTriggerFor",r)}},directives:[k.a,v.a,f.a],styles:["nx-icon.cdk-mouse-focused[_ngcontent-%COMP%]{outline:none}"]}),c),y=t("e2XY");function P(o,e){1&o&&b.Ob(0,"img",3)}var S,O,C,w,F,_,M,J,B=((F=function e(){o(this,e)}).\u0275fac=function(o){return new(o||F)},F.\u0275cmp=b.Hb({type:F,selectors:[["popover-lazyload-example"]],decls:5,vars:1,consts:[["nxButton","primary small","nxPopoverDirection","right","nxPopoverTrigger","click","type","button",3,"nxPopoverTriggerFor"],["popoverCustomLazyloadedContent",""],["nxPopoverContent",""],["src","docs-assets/images/adli-wahid-eagle-unsplash-large.jpg","alt","An eagle sitting on a branch and thinking. Photo made by Adli Wahid",1,"popover-demo__img"]],template:function(o,e){if(1&o&&(b.Tb(0,"button",0),b.Jc(1,"click\n"),b.Sb(),b.Tb(2,"nx-popover",null,1),b.Hc(4,P,1,0,"ng-template",2),b.Sb()),2&o){var r=b.rc(3);b.kc("nxPopoverTriggerFor",r)}},directives:[u.a,v.a,f.a,y.a],styles:[".popover-demo__img[_ngcontent-%COMP%]{width:200px;height:160px}"]}),F),D=((w=function e(){o(this,e)}).\u0275fac=function(o){return new(o||w)},w.\u0275cmp=b.Hb({type:w,selectors:[["popover-modal-example"]],decls:6,vars:1,consts:[["nxButton","primary small","nxPopoverDirection","right","nxPopoverTrigger","click","nxPopoverModal","true",3,"nxPopoverTriggerFor"],["modalPopover",""]],template:function(o,e){if(1&o&&(b.Tb(0,"button",0),b.Jc(1," Modal popover\n"),b.Sb(),b.Tb(2,"nx-popover",null,1),b.Tb(4,"span"),b.Jc(5,"Modal popover"),b.Sb(),b.Sb()),2&o){var r=b.rc(3);b.kc("nxPopoverTriggerFor",r)}},directives:[u.a,v.a,f.a],styles:[""]}),w),I=((C=function e(){o(this,e)}).\u0275fac=function(o){return new(o||C)},C.\u0275cmp=b.Hb({type:C,selectors:[["popover-positioning-example"]],decls:24,vars:4,consts:[["nxButton","primary small","nxPopoverDirection","top","nxPopoverTrigger","click","type","button",1,"nx-margin-right-2xs",3,"nxPopoverTriggerFor"],["popoverTopAnchor",""],["nxButton","primary small","nxPopoverDirection","right","nxPopoverTrigger","click","type","button",1,"nx-margin-right-2xs",3,"nxPopoverTriggerFor"],["popoverRightAnchor",""],["nxButton","primary small","nxPopoverDirection","bottom","nxPopoverTrigger","click","type","button",1,"nx-margin-right-2xs",3,"nxPopoverTriggerFor"],["popoverBottomAnchor",""],["nxButton","primary small","nxPopoverDirection","left","nxPopoverTrigger","click","type","button",3,"nxPopoverTriggerFor"],["popoverLeftAnchor",""]],template:function(o,e){if(1&o&&(b.Tb(0,"button",0),b.Jc(1," Top\n"),b.Sb(),b.Tb(2,"nx-popover",null,1),b.Tb(4,"span"),b.Jc(5,"A popover pointing to the top side of the target"),b.Sb(),b.Sb(),b.Tb(6,"button",2),b.Jc(7," Right\n"),b.Sb(),b.Tb(8,"nx-popover",null,3),b.Tb(10,"span"),b.Jc(11,"A popover pointing right side of the target"),b.Sb(),b.Sb(),b.Tb(12,"button",4),b.Jc(13," Bottom\n"),b.Sb(),b.Tb(14,"nx-popover",null,5),b.Tb(16,"span"),b.Jc(17,"A popover pointing bottom side of the target"),b.Sb(),b.Sb(),b.Tb(18,"button",6),b.Jc(19," Left\n"),b.Sb(),b.Tb(20,"nx-popover",null,7),b.Tb(22,"span"),b.Jc(23,"A popover pointing bottom side of the target"),b.Sb(),b.Sb()),2&o){var r=b.rc(3),n=b.rc(9),t=b.rc(15),i=b.rc(21);b.kc("nxPopoverTriggerFor",r),b.Bb(6),b.kc("nxPopoverTriggerFor",n),b.Bb(6),b.kc("nxPopoverTriggerFor",t),b.Bb(6),b.kc("nxPopoverTriggerFor",i)}},directives:[u.a,v.a,f.a],styles:[".btn-spacing[_ngcontent-%COMP%]{margin-right:10px}"]}),C),A=((O=function e(){o(this,e)}).\u0275fac=function(o){return new(o||O)},O.\u0275cmp=b.Hb({type:O,selectors:[["popover-scroll-example"]],decls:17,vars:2,consts:[["cdkScrollable","",1,"popover-demo__scroll-panel"],["nxButton","primary small","nxPopoverScrollStrategy","close","nxPopoverTrigger","click","type","button",3,"nxPopoverTriggerFor"],["popoverStrategyClose",""],["nxButton","primary small","nxPopoverScrollStrategy","reposition","nxPopoverTrigger","click","type","button",3,"nxPopoverTriggerFor"],["popoverStrategyReposition",""]],template:function(o,e){if(1&o&&(b.Tb(0,"span",0),b.Tb(1,"p"),b.Jc(2,"sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."),b.Sb(),b.Tb(3,"div"),b.Tb(4,"button",1),b.Jc(5," Click "),b.Sb(),b.Tb(6,"nx-popover",null,2),b.Tb(8,"span"),b.Jc(9,"Close"),b.Sb(),b.Sb(),b.Ob(10,"br"),b.Tb(11,"button",3),b.Jc(12," Click "),b.Sb(),b.Tb(13,"nx-popover",null,4),b.Tb(15,"span"),b.Jc(16,"Reposition"),b.Sb(),b.Sb(),b.Sb(),b.Sb()),2&o){var r=b.rc(7),n=b.rc(14);b.Bb(4),b.kc("nxPopoverTriggerFor",r),b.Bb(7),b.kc("nxPopoverTriggerFor",n)}},directives:[u.a,v.a,f.a],styles:[".popover-demo__scroll-panel[_ngcontent-%COMP%]{border:1px solid;overflow:scroll;width:200px;height:150px;display:flex;justify-content:center;align-items:center;padding:10px;margin-right:20px}"]}),O),H=((S=function e(){o(this,e)}).\u0275fac=function(o){return new(o||S)},S.\u0275cmp=b.Hb({type:S,selectors:[["popover-scrollable-example"]],decls:19,vars:2,consts:[[2,"display","flex"],[1,"popover-demo__scroll-panel"],["nxButton","primary small","nxPopoverTrigger","click","type","button",3,"nxPopoverTriggerFor"],["popoverScroll",""],["cdkScrollable","",1,"popover-demo__scroll-panel"],["popoverScroll2",""]],template:function(o,e){if(1&o&&(b.Tb(0,"div",0),b.Tb(1,"span",1),b.Tb(2,"p"),b.Jc(3,"sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."),b.Sb(),b.Tb(4,"button",2),b.Jc(5," Click "),b.Sb(),b.Tb(6,"nx-popover",null,3),b.Tb(8,"span"),b.Jc(9,"Scroll"),b.Sb(),b.Sb(),b.Sb(),b.Tb(10,"span",4),b.Tb(11,"p"),b.Jc(12,"sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."),b.Sb(),b.Tb(13,"button",2),b.Jc(14," Click "),b.Sb(),b.Tb(15,"nx-popover",null,5),b.Tb(17,"span"),b.Jc(18,"Scroll"),b.Sb(),b.Sb(),b.Sb(),b.Sb()),2&o){var r=b.rc(7),n=b.rc(16);b.Bb(4),b.kc("nxPopoverTriggerFor",r),b.Bb(9),b.kc("nxPopoverTriggerFor",n)}},directives:[u.a,v.a,f.a],styles:[".popover-demo__scroll-panel[_ngcontent-%COMP%]{border:1px solid;overflow:scroll;width:200px;height:150px;display:flex;justify-content:center;align-items:center;padding:10px;margin-right:20px}"]}),S),q=t("NeKR"),j=((_=function e(){o(this,e),this.data=[{nxDirection:"top",fallback1:"top-left",fallback2:"top-right",fallback3:"bottom",fallback4:"bottom-left",fallback5:"bottom-right",fallback6:"left",fallback7:"right"},{nxDirection:"bottom",fallback1:"bottom-left",fallback2:"bottom-right",fallback3:"top",fallback4:"top-left",fallback5:"top-right",fallback6:"left",fallback7:"right"},{nxDirection:"left",fallback1:"right",fallback2:"bottom",fallback3:"bottom-left",fallback4:"bottom-right",fallback5:"top",fallback6:"top-left",fallback7:"top-right"},{nxDirection:"right",fallback1:"left",fallback2:"bottom",fallback3:"bottom-left",fallback4:"bottom-right",fallback5:"top",fallback6:"top-left",fallback7:"top-right"}],this.displayedColumns=[{title:"nxDirection",key:"nxDirection",type:"string"},{title:"fallback\xa01",key:"fallback1",type:"string"},{title:"fallback\xa02",key:"fallback2",type:"string"},{title:"fallback\xa03",key:"fallback3",type:"string"},{title:"fallback\xa04",key:"fallback4",type:"string"},{title:"fallback\xa05",key:"fallback5",type:"string"},{title:"fallback\xa06",key:"fallback6",type:"string"},{title:"fallback\xa07",key:"fallback7",type:"string"}]}).\u0275fac=function(o){return new(o||_)},_.\u0275cmp=b.Hb({type:_,selectors:[["popover-table-example"]],decls:1,vars:2,consts:[[3,"nxData","nxDisplayedColumns"]],template:function(o,e){1&o&&b.Ob(0,"nx-dynamic-table",0),2&o&&b.kc("nxData",e.data)("nxDisplayedColumns",e.displayedColumns)},directives:[q.a],styles:[""]}),_),N=t("fAiE"),z=["clickTriggerIcon"],K=["manualTriggerIcon"],L=((J=function(){function e(r){o(this,e),this._focusMonitor=r,this.popoverManualOpenFlag=!1}return r(e,[{key:"ngAfterViewInit",value:function(){this._focusMonitor.monitor(this._clickTriggerIcon),this._focusMonitor.monitor(this._manualTriggerIcon)}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._clickTriggerIcon),this._focusMonitor.stopMonitoring(this._manualTriggerIcon)}},{key:"handleKeydown",value:function(o){switch(o.keyCode){case N.o:case N.f:this.popoverManualOpenFlag=!this.popoverManualOpenFlag;break;default:return}}}]),e}()).\u0275fac=function(o){return new(o||J)(b.Nb(d.g))},J.\u0275cmp=b.Hb({type:J,selectors:[["popover-trigger-example"]],viewQuery:function(o,e){var r;1&o&&(b.Nc(z,!0),b.Nc(K,!0)),2&o&&(b.qc(r=b.bc())&&(e._clickTriggerIcon=r.first),b.qc(r=b.bc())&&(e._manualTriggerIcon=r.first))},decls:17,vars:3,consts:[["aria-label","trigger by click","name","info-circle-o","size","s","nxPopoverTrigger","click","tabindex","0","role","button",3,"nxPopoverTriggerFor"],["clickTriggerIcon",""],["popoverClick",""],["name","info-circle-o","size","s","nxPopoverDirection","top","nxPopoverTrigger","manual","tabindex","0","aria-label","trigger manually","role","button",3,"nxPopoverTriggerFor","nxPopoverShow","nxPopoverShowChange","click","keydown"],["manualTriggerIcon","","popoverTrigger","nxPopoverTrigger"],["popoverManual",""]],template:function(o,e){if(1&o&&(b.Tb(0,"p"),b.Ob(1,"nx-icon",0,1),b.Jc(3," Triggered by click\n"),b.Sb(),b.Tb(4,"nx-popover",null,2),b.Tb(6,"span"),b.Jc(7,"Trigger by click"),b.Sb(),b.Sb(),b.Tb(8,"p"),b.Tb(9,"nx-icon",3,4),b.ac("nxPopoverShowChange",(function(o){return e.popoverManualOpenFlag=o}))("click",(function(){return e.popoverManualOpenFlag=!e.popoverManualOpenFlag}))("keydown",(function(o){return e.handleKeydown(o)})),b.Sb(),b.Jc(12," Triggered manually\n"),b.Sb(),b.Tb(13,"nx-popover",null,5),b.Tb(15,"span"),b.Jc(16,"Trigger manually"),b.Sb(),b.Sb()),2&o){var r=b.rc(5),n=b.rc(14);b.Bb(1),b.kc("nxPopoverTriggerFor",r),b.Bb(8),b.kc("nxPopoverTriggerFor",n)("nxPopoverShow",e.popoverManualOpenFlag)}},directives:[k.a,v.a,f.a],styles:["nx-icon[_ngcontent-%COMP%]{color:var(--interactive-primary,#27abd6);vertical-align:middle;cursor:pointer}nx-icon[_ngcontent-%COMP%]:hover{color:var(--hover-primary,#3bb4db)}nx-icon.cdk-mouse-focused[_ngcontent-%COMP%]{outline:none}"]}),J),E=((M=function(){function e(){o(this,e)}return r(e,null,[{key:"components",value:function(){return{"popover-click-outside":m,"popover-custom":x,"popover-hover":h,"popover-lazyload":B,"popover-modal":D,"popover-positioning":I,"popover-scroll":A,"popover-scrollable":H,"popover-table":j,"popover-trigger":L}}}]),e}()).\u0275mod=b.Lb({type:M}),M.\u0275inj=b.Kb({factory:function(o){return new(o||M)},imports:[[g.a,s.b,p.c,a.a]]}),M)}}])}();