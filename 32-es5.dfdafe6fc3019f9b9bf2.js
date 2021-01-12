!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],i=!0,a=!1,o=void 0;try{for(var c,r=t[Symbol.iterator]();!(i=(c=r.next()).done)&&(e.push(c.value),!n||e.length!==n);i=!0);}catch(s){a=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return e}(t,n)||e(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||e(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,n){if(t){if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,n):void 0}}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function a(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,n,e){return n&&a(t.prototype,n),e&&a(t,e),t}function c(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"4TwE":function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i,a=e("EM62"),o=((i=function t(){c(this,t)}).\u0275mod=a.Lb({type:i}),i.\u0275inj=a.Kb({factory:function(t){return new(t||i)}}),i);e("VqxJ")},UcN8:function(t,e,i){"use strict";i.r(e),i.d(e,"NotificationExamplesModule",(function(){return $}));var a,r,s,l,f,u,b,h,p=i("ukXx"),m=i("sEIs"),d=i("0FLW"),x=i("ZhfD"),g=i("EM62"),y=((a=function t(){c(this,t)}).\u0275mod=g.Lb({type:a}),a.\u0275inj=g.Kb({factory:function(t){return new(t||a)},providers:[],imports:[[x.a,m.i]]}),a),v=i("J+dc"),k={direction:"bottom-start",fallbackOrientation:"vertical",autoFocus:!0,offset:8},T=((r=function(){function t(n,e,i){c(this,t),this._nxOverlay=n,this._element=e,this._triggerButton=i}return o(t,[{key:"open",value:function(){var t=this;if(!this._overlayRef){var n=Object.assign(Object.assign({},k),{triggerButton:this._triggerButton});this._overlayRef=this._nxOverlay.open(this._panelTemplate,this._element,n),this._overlayRef.afterClosed().pipe(Object(v.a)(1)).subscribe((function(){return t.close()}))}}},{key:"close",value:function(){this._overlayRef&&(this._overlayRef.close(),this._overlayRef=null)}},{key:"notificationPanel",set:function(t){this._panelTemplate=t},get:function(){return this._panelTemplate}}]),t}()).\u0275fac=function(t){return new(t||r)(g.Nb(x.b),g.Nb(g.l),g.Nb(x.c,10))},r.\u0275dir=g.Ib({type:r,selectors:[["","nxNotificationPanelTriggerFor",""]],hostBindings:function(t,n){1&t&&g.ac("click",(function(){return n.open()}))},inputs:{notificationPanel:["nxNotificationPanelTriggerFor","notificationPanel"]}}),r),w=i("sg/T"),S=i("g6G6"),_=i("5XID"),O=i("ZTXN"),P=[[["nx-notification-item-metadata"]],[["nx-notification-item-content"]],"*",[["nx-notification-item-actions"]]],M=["nx-notification-item-metadata","nx-notification-item-content","*","nx-notification-item-actions"],N=((s=function(){function t(n,e){c(this,t),this._elementRef=n,this._focusMonitor=e,this._read=!1,this._clickable=!0,this._hasFocus=!1,this.focused=new O.a,this._focusMonitor.monitor(this._elementRef)}return o(t,[{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}},{key:"focus",value:function(t){void 0!==t||this._hasFocus||(this.focused.next(this),this._hasFocus=!0,this._focusMonitor.focusVia(this._elementRef,"keyboard")),this._hasFocus||(this._elementRef.nativeElement.focus(),this._hasFocus=!0)}},{key:"_blur",value:function(){this._hasFocus=!1}},{key:"read",set:function(t){this._read=Object(_.b)(t)},get:function(){return this._read}},{key:"clickable",set:function(t){this._clickable=Object(_.b)(t)},get:function(){return this._clickable}}]),t}()).\u0275fac=function(t){return new(t||s)(g.Nb(g.l),g.Nb(w.g))},s.\u0275cmp=g.Hb({type:s,selectors:[["nx-notification-panel-item"],["","nxNotificationPanelItem",""]],hostAttrs:["tabindex","0"],hostVars:4,hostBindings:function(t,n){1&t&&g.ac("focus",(function(){return n.focus()}))("blur",(function(){return n._blur()})),2&t&&g.Fb("nx-notification-item--read",n.read)("nx-notification-item--clickable",n.clickable)},inputs:{read:"read",clickable:"clickable"},ngContentSelectors:M,decls:4,vars:0,template:function(t,n){1&t&&(g.jc(P),g.ic(0),g.ic(1,1),g.ic(2,2),g.ic(3,3))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;background-color:var(--notification-panel-item-unread-background-color);padding:16px 24px;margin:0 -24px}.nx-notification-item--read[_nghost-%COMP%]{background-color:var(--notification-panel-item-read-background-color)}[_nghost-%COMP%]:focus{outline:none}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-inset-box-shadow)}@media screen and (-ms-high-contrast:active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:inset 0 0 0 4px windowText,inset 0 0 0 6px background}}  nx-notification-item-metadata{font-size:14px;font-weight:400;line-height:20px;letter-spacing:.2px;margin-bottom:4px;display:flex;align-items:center}  nx-notification-item-actions,   nx-notification-item-content{font-size:16px;font-weight:400;line-height:24px}  nx-notification-item-actions{display:flex;justify-content:space-between;padding-top:8px}.nx-notification-item--clickable[_nghost-%COMP%]{cursor:pointer}.nx-notification-item--clickable[_nghost-%COMP%]:hover{background-color:var(--notification-panel-item-unread-hover-background-color)}.nx-notification-item--clickable[_nghost-%COMP%]:active{background-color:var(--notification-panel-item-unread-active-background-color)}.nx-notification-item--clickable.nx-notification-item--read[_nghost-%COMP%]:hover{background-color:var(--notification-panel-item-read-hover-background-color)}.nx-notification-item--clickable.nx-notification-item--read[_nghost-%COMP%]:active{background-color:var(-notification-panel-item-read-active-background-color)}"]}),s),J=["*"],C=((h=function(){function t(){c(this,t)}return o(t,[{key:"ngAfterContentInit",value:function(){this._initKeyManager()}},{key:"_initKeyManager",value:function(){var t=this;this._keyManager=new w.f(this.items).withVerticalOrientation().withHorizontalOrientation("ltr"),this.items.length>0&&Object(S.a).apply(void 0,n(this.items.map((function(t){return t.focused})))).subscribe((function(n){t._keyManager.updateActiveItem(n)}))}},{key:"_handleKeydown",value:function(t){this._keyManager.onKeydown(t)}}]),t}()).\u0275fac=function(t){return new(t||h)},h.\u0275cmp=g.Hb({type:h,selectors:[["nx-notification-panel"]],contentQueries:function(t,n,e){var i;1&t&&g.Gb(e,N,!0),2&t&&g.qc(i=g.bc())&&(n.items=i)},viewQuery:function(t,n){var e;1&t&&g.Nc(g.N,!0),2&t&&g.qc(e=g.bc())&&(n.templateRef=e.first)},hostVars:2,hostBindings:function(t,n){1&t&&g.ac("keydown",(function(t){return n._handleKeydown(t)})),2&t&&g.Fb("nx-notification-panel",!0)},exportAs:["nxNotificationPanel"],ngContentSelectors:J,decls:1,vars:0,template:function(t,n){1&t&&(g.jc(),g.ic(0))},styles:["[_nghost-%COMP%]{padding:16px 24px;display:flex;flex-direction:column;background-color:var(--notification-panel-background-color);max-height:740px;height:100%;width:400px;overflow-y:auto;box-shadow:0 8px 24px rgba(65,65,65,.35);border-radius:8px}[_nghost-%COMP%]:focus{outline:none}  nx-notification-header{display:flex;justify-content:space-between;padding:16px 0 8px}  nx-notification-header:first-child{padding-top:0}"]}),h),I=((b=function t(){c(this,t)}).\u0275fac=function(t){return new(t||b)},b.\u0275dir=g.Ib({type:b,selectors:[["nx-notification-item-metadata"]]}),b),j=((u=function t(){c(this,t)}).\u0275fac=function(t){return new(t||u)},u.\u0275dir=g.Ib({type:u,selectors:[["nx-notification-item-content"]]}),u),F=((f=function t(){c(this,t)}).\u0275fac=function(t){return new(t||f)},f.\u0275dir=g.Ib({type:f,selectors:[["nx-notification-item-actions"]]}),f),B=((l=function t(){c(this,t)}).\u0275fac=function(t){return new(t||l)},l.\u0275dir=g.Ib({type:l,selectors:[["nx-notification-header"]]}),l),R=i("q+Ep"),A=i("wdC9"),E=i("VKQk"),L=i("VqxJ"),z=i("sPAl"),H=i("BHU2");function K(t,n){1&t&&(g.Tb(0,"nx-notification-panel"),g.Tb(1,"nx-notification-header"),g.Tb(2,"h3",3),g.Jc(3,"Unread "),g.Sb(),g.Tb(4,"button",4),g.Jc(5,"Mark all as read "),g.Ob(6,"nx-icon",5),g.Sb(),g.Sb(),g.Tb(7,"a",6),g.Tb(8,"nx-notification-item-metadata"),g.Ob(9,"nx-icon",7),g.Jc(10,"File lock release \xb7 16:53 "),g.Sb(),g.Tb(11,"nx-notification-item-content"),g.Tb(12,"span",8),g.Jc(13,"The file you tried to edit (XY12345) is now available."),g.Sb(),g.Sb(),g.Tb(14,"nx-notification-item-actions"),g.Tb(15,"nx-link"),g.Tb(16,"a",9),g.Jc(17,"Edit file"),g.Sb(),g.Sb(),g.Tb(18,"button",10),g.Ob(19,"nx-icon",11),g.Sb(),g.Sb(),g.Sb(),g.Tb(20,"div",6),g.Tb(21,"nx-notification-item-metadata"),g.Ob(22,"nx-icon",12),g.Jc(23,"Callback \xb7 11:35 "),g.Sb(),g.Tb(24,"nx-notification-item-content",13),g.Tb(25,"span",8),g.Jc(26,"Please call back James Erwin at 15:00"),g.Sb(),g.Tb(27,"button",14),g.Ob(28,"nx-icon",11),g.Sb(),g.Sb(),g.Sb(),g.Tb(29,"nx-notification-header"),g.Tb(30,"h3",3),g.Jc(31,"Read "),g.Sb(),g.Sb(),g.Tb(32,"div",15),g.Tb(33,"nx-notification-item-metadata"),g.Jc(34,"Offers \xb7 Yesterday "),g.Sb(),g.Tb(35,"nx-notification-item-content"),g.Tb(36,"span",8),g.Jc(37,"Mary London"),g.Sb(),g.Jc(38," - Note created "),g.Sb(),g.Sb(),g.Sb()),2&t&&(g.Bb(7),g.Cb("href",null,g.yc))}var V,q=((V=function t(){c(this,t)}).\u0275fac=function(t){return new(t||V)},V.\u0275cmp=g.Hb({type:V,selectors:[["notification-panel-actions-example"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",1,"nx-margin-0",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-margin-0","nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","clickable","false"],["size","s","name","lock-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"nx-font-weight-semibold"],["href","#file-link"],["nxPlainButton","small","type","button","title","Delete"],["name","trash-o","aria-hidden","true"],["size","s","name","phone-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"inline-delete"],["nxPlainButton","small","type","button","title","Delete",1,""],["nxNotificationPanelItem","","read","","clickable","false"]],template:function(t,n){if(1&t&&(g.Tb(0,"button",0),g.Ob(1,"nx-icon",1),g.Sb(),g.Hc(2,K,39,1,"ng-template",null,2,g.Ic)),2&t){var e=g.rc(3);g.kc("nxNotificationPanelTriggerFor",e)}},directives:[A.a,T,E.a,C,B,L.a,z.a,N,I,j,F,H.a],styles:[".inline-delete[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),V);function D(t,n){1&t&&(g.Tb(0,"nx-notification-panel"),g.Tb(1,"nx-notification-header"),g.Tb(2,"h3",3),g.Jc(3,"Unread "),g.Sb(),g.Tb(4,"button",4),g.Jc(5,"Mark all as read "),g.Ob(6,"nx-icon",5),g.Sb(),g.Sb(),g.Tb(7,"a",6),g.Tb(8,"nx-notification-item-metadata"),g.Jc(9,"Tasks \xb7 5 minutes ago "),g.Sb(),g.Tb(10,"nx-notification-item-content"),g.Tb(11,"span",7),g.Jc(12,"Frank Loyd"),g.Sb(),g.Jc(13," - created new offer "),g.Sb(),g.Sb(),g.Tb(14,"a",8),g.Tb(15,"nx-notification-item-metadata"),g.Jc(16,"Offers \xb7 11:45 "),g.Sb(),g.Tb(17,"nx-notification-item-content"),g.Tb(18,"span",7),g.Jc(19,"Susi M\xfcller"),g.Sb(),g.Jc(20," - Offer status has changed "),g.Sb(),g.Sb(),g.Tb(21,"nx-notification-header"),g.Tb(22,"h3",3),g.Jc(23,"Read "),g.Sb(),g.Sb(),g.Tb(24,"a",9),g.Tb(25,"nx-notification-item-metadata"),g.Jc(26,"Offers \xb7 Yesterday "),g.Sb(),g.Tb(27,"nx-notification-item-content"),g.Tb(28,"span",7),g.Jc(29,"Mary London"),g.Sb(),g.Jc(30," - Note created "),g.Sb(),g.Sb(),g.Sb())}var U,Y=((U=function t(){c(this,t)}).\u0275fac=function(t){return new(t||U)},U.\u0275cmp=g.Hb({type:U,selectors:[["notification-panel-clickable-example"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",1,"nx-margin-0",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-margin-0","nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","routerLink","#clickable-notification1"],[1,"nx-font-weight-semibold"],["nxNotificationPanelItem","","routerLink","#clickable-notification2"],["nxNotificationPanelItem","","read","","routerLink","#clickable-notification3"]],template:function(t,n){if(1&t&&(g.Tb(0,"button",0),g.Ob(1,"nx-icon",1),g.Sb(),g.Hc(2,D,31,0,"ng-template",null,2,g.Ic)),2&t){var e=g.rc(3);g.kc("nxNotificationPanelTriggerFor",e)}},directives:[A.a,T,E.a,C,B,L.a,z.a,m.h,N,I,j],styles:[""]}),U);function X(t,n){1&t&&(g.Tb(0,"nx-notification-panel"),g.Tb(1,"nx-notification-header"),g.Tb(2,"h3",3),g.Jc(3,"Unread "),g.Sb(),g.Tb(4,"button",4),g.Jc(5,"Mark all as read "),g.Ob(6,"nx-icon",5),g.Sb(),g.Sb(),g.Tb(7,"a",6),g.Tb(8,"nx-notification-item-metadata"),g.Ob(9,"nx-icon",7),g.Jc(10,"File lock release \xb7 16:53 "),g.Sb(),g.Tb(11,"nx-notification-item-content"),g.Tb(12,"span",8),g.Jc(13,"The file you tried to edit (XY12345) is now available."),g.Sb(),g.Sb(),g.Sb(),g.Tb(14,"a",9),g.Tb(15,"nx-notification-item-metadata"),g.Ob(16,"nx-icon",10),g.Jc(17,"Callback \xb7 11:35 "),g.Sb(),g.Tb(18,"nx-notification-item-content"),g.Tb(19,"span",8),g.Jc(20,"Please call back James Erwin at 15:00"),g.Sb(),g.Sb(),g.Sb(),g.Tb(21,"nx-notification-header"),g.Tb(22,"h3",3),g.Jc(23,"Read "),g.Sb(),g.Sb(),g.Tb(24,"div",11),g.Tb(25,"nx-notification-item-metadata"),g.Jc(26,"Offers \xb7 Yesterday "),g.Sb(),g.Tb(27,"nx-notification-item-content"),g.Tb(28,"span",8),g.Jc(29,"Mary London"),g.Sb(),g.Jc(30," - Note created "),g.Sb(),g.Sb(),g.Sb()),2&t&&(g.Bb(14),g.kc("routerLink",null))}var Q,G,Z=((Q=function t(){c(this,t)}).\u0275fac=function(t){return new(t||Q)},Q.\u0275cmp=g.Hb({type:Q,selectors:[["notification-panel-mixed-example"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",1,"nx-margin-0",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-margin-0","nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","routerLink","#clickable-notification1"],["size","s","name","lock-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"nx-font-weight-semibold"],["nxNotificationPanelItem","","clickable","false",3,"routerLink"],["size","s","name","phone-o","aria-hidden","true",1,"nx-margin-right-2xs"],["nxNotificationPanelItem","","read","","routerLink","#clickable-notification3"]],template:function(t,n){if(1&t&&(g.Tb(0,"button",0),g.Ob(1,"nx-icon",1),g.Sb(),g.Hc(2,X,31,1,"ng-template",null,2,g.Ic)),2&t){var e=g.rc(3);g.kc("nxNotificationPanelTriggerFor",e)}},directives:[A.a,T,E.a,C,B,L.a,z.a,m.h,N,I,j,m.f],styles:[""]}),Q),W=i("t3RA"),$=((G=function(){function t(){c(this,t)}return o(t,null,[{key:"components",value:function(){return{"notification-panel-actions":q,"notification-panel-clickable":Y,"notification-panel-mixed":Z}}}]),t}()).\u0275mod=g.Lb({type:G}),G.\u0275inj=g.Kb({factory:function(t){return new(t||G)},imports:[[R.a,y,d.c,m.i,p.a,W.a]]}),G)},VqxJ:function(n,e,i){"use strict";i.d(e,"a",(function(){return l}));var a=i("EM62"),r=["nxCopytext",""],s=["*"],l=function(){var n=function(){function n(){c(this,n),this.type="normal",this.negative=!1}return o(n,[{key:"classNames",set:function(n){if(this._classNames!==n){this._classNames=n;var e=t(this._classNames.match(/small|medium|normal|large/)||["normal"],1)[0],i=void 0===e?null:e;this.type=i,this.negative=!!this._classNames.match(/negative/)}},get:function(){return this._classNames}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.Hb({type:n,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(t,n){2&t&&a.Fb("nx-copy",!0)("nx-copy--small","small"===n.type)("nx-copy--medium","medium"===n.type)("nx-copy--normal","normal"===n.type)("nx-copy--large","large"===n.type)("nx-copy--negative",n.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:r,ngContentSelectors:s,decls:1,vars:0,template:function(t,n){1&t&&(a.jc(),a.ic(0))},styles:["[_nghost-%COMP%]{margin:0 0 32px;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),n}()},t3RA:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var i=e("ohqM"),a=e("4TwE"),o=e("aln5"),r=e("kPBv"),s=e("2kYt"),l=e("nIj0"),f=e("EM62"),u=function(){var t=function t(){c(this,t)};return t.\u0275mod=f.Lb({type:t}),t.\u0275inj=f.Kb({factory:function(n){return new(n||t)},imports:[[],s.c,l.k,l.v,r.b,o.a,a.a,i.a]}),t}()}}])}();