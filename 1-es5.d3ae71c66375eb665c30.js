!function(){function e(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,i){(null==i||i>e.length)&&(i=e.length);for(var n=0,t=new Array(i);n<i;n++)t[n]=e[n];return t}function n(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function t(e,i,t){return i&&n(e.prototype,i),t&&n(e,t),e}function o(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2LE5":function(e,i,n){"use strict";n.d(i,"a",(function(){return r}));var t=n("EM62"),r=function(){var e=function e(){o(this,e)};return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=t.Ib({type:e,selectors:[["","nxFormfieldSuffix",""]]}),e}()},"8FrJ":function(e,i,n){"use strict";n.d(i,"a",(function(){return r}));var t=n("EM62"),r=function(){var e=function e(){o(this,e)};return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=t.Ib({type:e,selectors:[["nx-formfield-label"]]}),e}()},B79f:function(e,i,n){"use strict";n.d(i,"d",(function(){return r.a})),n.d(i,"c",(function(){return l.a})),n.d(i,"a",(function(){return a.a})),n.d(i,"b",(function(){return a.b})),n.d(i,"e",(function(){return c})),n("qH3y");var t,r=n("MXpF"),l=n("wGdT"),a=n("PCf9"),f=n("2kYt"),s=n("I5hw"),d=n("EM62"),c=((t=function e(){o(this,e)}).\u0275mod=d.Lb({type:t}),t.\u0275inj=d.Kb({factory:function(e){return new(e||t)},imports:[[f.c],s.c,s.e]}),t);n("TdcJ"),n("8FrJ"),n("jyNi"),n("PMum"),n("2LE5")},I5hw:function(e,i,n){"use strict";n.d(i,"c",(function(){return d})),n.d(i,"a",(function(){return c.a})),n.d(i,"b",(function(){return c.b})),n.d(i,"e",(function(){return h})),n.d(i,"d",(function(){return u.a}));var t,r,l=n("2kYt"),a=n("0FLW"),f=n("q+Ep"),s=n("EM62"),d=((t=function e(){o(this,e)}).\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[l.c,a.c,f.a]]}),t),c=n("yUsN"),h=((r=function e(){o(this,e)}).\u0275mod=s.Lb({type:r}),r.\u0275inj=s.Kb({factory:function(e){return new(e||r)},imports:[[l.c]]}),r),u=n("LoTN")},LoTN:function(e,i,n){"use strict";n.d(i,"a",(function(){return c}));var r=n("EM62"),l=n("5XID"),a=n("ZTXN"),f=["*"],s=0,d=new r.r("LABEL_DEFAULT_OPTIONS"),c=function(){var e=function(){function e(i){o(this,e),this._defaultOptions=i,this._stateChanges=new a.a,this._disabled=!1,this._negative=!1,this._id="nx-label-"+s++}return t(e,[{key:"disabled",set:function(e){this._disabled=Object(l.b)(e),this._stateChanges.next()},get:function(){return this._disabled}},{key:"negative",set:function(e){this._negative=Object(l.b)(e),this._stateChanges.next()},get:function(){return this._negative}},{key:"id",set:function(e){this._id!==e&&(this._id=e)},get:function(){return this._id}},{key:"size",set:function(e){this._size=e,this._stateChanges.next()},get:function(){return this._size||this._defaultOptions&&this._defaultOptions.size||"large"}}]),e}();return e.\u0275fac=function(i){return new(i||e)(r.Nb(d,8))},e.\u0275cmp=r.Hb({type:e,selectors:[["nx-label"]],hostVars:9,hostBindings:function(e,i){2&e&&(r.Cb("disabled",i.disabled)("aria-labelledby",i.id||null)("id",i.id),r.Fb("nx-label--negative",i.negative)("nx-label--large","large"===i.size)("nx-label--small","small"===i.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size"},ngContentSelectors:f,decls:2,vars:0,consts:[[1,"nx-label__content"]],template:function(e,i){1&e&&(r.jc(),r.Tb(0,"label",0),r.ic(1),r.Sb())},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),e}()},MXpF:function(e,i,n){"use strict";n.d(i,"a",(function(){return l}));var t=n("EM62"),r=0,l=function(){var e=function e(){o(this,e),this.id="nx-formfield-error-"+r++};return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=t.Ib({type:e,selectors:[["","nxFormfieldError",""],["","nxError",""]],hostAttrs:["role","alert"],hostVars:1,hostBindings:function(e,i){2&e&&t.Cb("id",i.id)},inputs:{id:"id"}}),e}()},PCf9:function(i,n,r){"use strict";r.d(n,"a",(function(){return M})),r.d(n,"b",(function(){return P}));var l=r("EM62"),a=r("jIqt"),f=r("JNA7"),s=r("TdcJ"),d=r("jyNi"),c=r("MXpF"),h=r("wGdT"),u=r("2LE5"),m=r("PMum"),p=r("qH3y"),x=r("8FrJ"),g=r("2kYt"),_=["connectionContainer"];function b(e,i){1&e&&(l.Tb(0,"div",15),l.ic(1,2),l.Sb())}function v(e,i){if(1&e&&(l.Rb(0),l.Jc(1),l.Qb()),2&e){var n=l.ec();l.Bb(1),l.Lc(" ",n.label," ")}}function w(e,i){1&e&&(l.Tb(0,"div",16),l.ic(1,3),l.Sb())}function y(e,i){1&e&&(l.Tb(0,"div",17),l.ic(1,4),l.Sb())}function k(e,i){1&e&&(l.Tb(0,"div",18),l.ic(1,5),l.Sb())}function C(e,i){1&e&&(l.Tb(0,"div",19),l.ic(1,6),l.Sb())}function z(e,i){1&e&&(l.Tb(0,"div",19),l.ic(1,7),l.Sb())}var O=[[["nx-formfield-label"]],"*",[["","nxFormfieldPrefix",""]],[["","nxFormfieldSuffix",""]],[["","nxFormfieldHint",""]],[["","nxFormfieldAppendix",""]],[["","nxFormfieldError",""]],[["","nxFormfieldNote",""]]],I=["nx-formfield-label","*","[nxFormfieldPrefix]","[nxFormfieldSuffix]","[nxFormfieldHint]","[nxFormfieldAppendix]","[nxFormfieldError]","[nxFormfieldNote]"],F={negative:"nx-formfield--negative"},T=0,M=new l.r("FORMFIELD_DEFAULT_OPTIONS"),P=function(){var i=function(){function i(e,n,t,r){o(this,i),this.elementRef=e,this.renderer=n,this._changeDetectorRef=t,this._defaultOptions=r,this._styles="",this._subscriptions=[],this.labelId="nx-formfield-label-"+T++}return t(i,[{key:"ngAfterContentInit",value:function(){var e,i=this,n=[];this._validateControlChild(),this._control.controlType&&this.elementRef.nativeElement.classList.add("nx-formfield--type-"+this._control.controlType),e=this._control.stateChanges.pipe(Object(a.a)(null)).subscribe((function(){Promise.resolve().then((function(){i._syncDescribedByIds(),i._changeDetectorRef.markForCheck()}))})),n.push(e),e=this._hintChildren.changes.pipe(Object(a.a)(null)).subscribe((function(){i._changeDetectorRef.markForCheck()})),n.push(e),e=this._errorChildren.changes.pipe(Object(a.a)(null)).subscribe((function(){Promise.resolve().then((function(){i._syncDescribedByIds(),i._changeDetectorRef.markForCheck()}))})),n.push(e),this._subscriptions=n}},{key:"ngAfterContentChecked",value:function(){this._validateControlChild()}},{key:"ngOnDestroy",value:function(){this._subscriptions.forEach((function(e){return e.unsubscribe()}))}},{key:"getDisplayedMessage",value:function(){return this._control.errorState&&this._errorChildren&&this._errorChildren.length>0?"error":this._noteChildren&&this._noteChildren.length>0?"note":""}},{key:"_syncDescribedByIds",value:function(){if(this._control){var i=[];i=this._hintChildren.map((function(e){return e.id})),"note"===this.getDisplayedMessage()?i=[].concat(e(this._noteChildren.map((function(e){return e.id}))),e(i)):this._errorChildren&&(i=[].concat(e(this._errorChildren.map((function(e){return e.id}))),e(i))),this._control.setDescribedByIds(i)}}},{key:"_validateControlChild",value:function(){if(!this._control)throw new Error("Formfield must contain a NxFormfieldControl like input[nxInput] or a custom implementation")}},{key:"getConnectedOverlayOrigin",value:function(){return this._connectionContainerRef||this.elementRef}},{key:"_hasLabel",value:function(){return!!this._labelChild||!!this.label}},{key:"_hideControlPlaceholder",value:function(){return!this.shouldLabelFloat&&this._hasLabel()||!1===this._control.empty}},{key:"floatLabel",get:function(){return this._floatLabel||this._defaultOptions&&this._defaultOptions.nxFloatLabel||"auto"},set:function(e){e!==this._floatLabel&&(this._floatLabel=e||"auto",this._changeDetectorRef.markForCheck())}},{key:"styles",set:function(e){var i=this;this._styles!==e&&(Object(f.f)(e,F).forEach((function(e){i.renderer.addClass(i.elementRef.nativeElement,e)})),this._styles=e)}},{key:"appearance",set:function(e){this._appearance!==e&&(this._appearance=e,this._changeDetectorRef.markForCheck())},get:function(){return this._appearance||this._defaultOptions&&this._defaultOptions.appearance||"auto"}},{key:"_shouldAlwaysFloat",get:function(){return"always"===this.floatLabel}},{key:"shouldLabelFloat",get:function(){return this._control.shouldLabelFloat||this._shouldAlwaysFloat}},{key:"control",get:function(){return this._control}}]),i}();return i.\u0275fac=function(e){return new(e||i)(l.Nb(l.l),l.Nb(l.G),l.Nb(l.h),l.Nb(M,8))},i.\u0275cmp=l.Hb({type:i,selectors:[["nx-formfield"]],contentQueries:function(e,i,n){var t;1&e&&(l.Gb(n,h.a,!0),l.Gb(n,x.a,!0),l.Gb(n,s.a,!1),l.Gb(n,d.a,!1),l.Gb(n,c.a,!1),l.Gb(n,u.a,!1),l.Gb(n,m.a,!1),l.Gb(n,p.a,!1)),2&e&&(l.qc(t=l.bc())&&(i._control=t.first),l.qc(t=l.bc())&&(i._labelChild=t.first),l.qc(t=l.bc())&&(i._hintChildren=t),l.qc(t=l.bc())&&(i._noteChildren=t),l.qc(t=l.bc())&&(i._errorChildren=t),l.qc(t=l.bc())&&(i._suffixChildren=t),l.qc(t=l.bc())&&(i._prefixChildren=t),l.qc(t=l.bc())&&(i._appendixChildren=t))},viewQuery:function(e,i){var n;1&e&&l.Cc(_,!0),2&e&&l.qc(n=l.bc())&&(i._connectionContainerRef=n.first)},hostVars:18,hostBindings:function(e,i){2&e&&l.Fb("nx-formfield",!0)("is-disabled",i._control.disabled)("is-readonly",i._control.readonly)("is-filled",!1===i._control.empty)("is-focused",i._control.focused)("is-floating",i.shouldLabelFloat)("has-error",i._control.errorState)("has-outline","outline"===i.appearance)("has-hint",(null==i._hintChildren?null:i._hintChildren.length)>0)},inputs:{label:["nxLabel","label"],floatLabel:["nxFloatLabel","floatLabel"],styles:["nxStyle","styles"],appearance:"appearance"},ngContentSelectors:I,decls:18,vars:11,consts:[[1,"nx-formfield__wrapper"],[1,"nx-formfield__row"],["connectionContainer",""],[1,"nx-formfield__flexfield"],[1,"nx-formfield__input-container"],["class","nx-formfield__prefix",4,"ngIf"],[1,"nx-formfield__input"],[1,"nx-formfield__label-holder"],[1,"nx-formfield__label",3,"id"],[4,"ngIf"],["class","nx-formfield__suffix",4,"ngIf"],["class","nx-formfield__hints",4,"ngIf"],["class","nx-formfield__appendix",4,"ngIf"],[3,"ngSwitch"],["class","nx-formfield__message",4,"ngSwitchCase"],[1,"nx-formfield__prefix"],[1,"nx-formfield__suffix"],[1,"nx-formfield__hints"],[1,"nx-formfield__appendix"],[1,"nx-formfield__message"]],template:function(e,i){1&e&&(l.jc(O),l.Tb(0,"div",0),l.Tb(1,"div",1,2),l.Tb(3,"div",3),l.Tb(4,"div",4),l.Hc(5,b,2,0,"div",5),l.Tb(6,"div",6),l.Tb(7,"span",7),l.Tb(8,"label",8),l.Hc(9,v,2,1,"ng-container",9),l.ic(10),l.Sb(),l.Sb(),l.ic(11,1),l.Sb(),l.Hc(12,w,2,0,"div",10),l.Sb(),l.Hc(13,y,2,0,"div",11),l.Sb(),l.Hc(14,k,2,0,"div",12),l.Sb(),l.Rb(15,13),l.Hc(16,C,2,0,"div",14),l.Hc(17,z,2,0,"div",14),l.Qb(),l.Sb()),2&e&&(l.Bb(5),l.kc("ngIf",i._prefixChildren.length),l.Bb(3),l.kc("id",i.labelId),l.Cb("aria-owns",i._control.id)("for",i._control.id),l.Bb(1),l.kc("ngIf",!i._labelChild),l.Bb(3),l.kc("ngIf",i._suffixChildren.length),l.Bb(1),l.kc("ngIf",i._hintChildren.length),l.Bb(1),l.kc("ngIf",i._appendixChildren.length),l.Bb(1),l.kc("ngSwitch",i.getDisplayedMessage()),l.Bb(1),l.kc("ngSwitchCase","error"),l.Bb(1),l.kc("ngSwitchCase","note"))},directives:[g.t,g.x,g.y],styles:['.nx-formfield{display:block;color:var(--text-01)}.nx-formfield__wrapper{padding-bottom:var(--formfield-bottom-padding);padding-top:var(--formfield-label-height)}.has-hint .nx-formfield__wrapper{padding-bottom:0}.nx-formfield__row{min-height:var(--formfield-control-height);background-color:var(--formfield-background-color);display:flex;align-items:stretch;width:100%}.nx-formfield__row:after{content:"";font-size:0;display:block;min-height:inherit}.nx-formfield__flexfield{font-size:var(--formfield-control-font-size);line-height:var(--formfield-control-line-height);font-weight:var(--formfield-control-font-weight);letter-spacing:var(--formfield-control-letter-spacing);align-items:stretch;flex-direction:column;display:inline-flex;width:100%;position:relative;min-width:0;flex:0 1 auto}.nx-formfield__input-container{display:flex;border-bottom:var(--formfield-border-width) solid var(--formfield-border-color);height:var(--formfield-control-height);flex:auto;padding:var(--formfield-input-padding)}.nx-formfield__input{position:relative;flex:auto;min-width:0;display:flex;text-align:left}[dir=rtl] .nx-formfield__input{text-align:right}.nx-formfield__label-holder{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10}[dir=rtl] .nx-formfield__label-holder{right:0;left:auto}.nx-formfield__label{font-size:var(--formfield-placeholder-label-font-size);line-height:var(--formfield-placeholder-label-line-height);font-weight:var(--formfield-placeholder-label-font-weight);letter-spacing:var(--formfield-placeholder-label-letter-spacing);color:var(--formfield-label-color);display:block;position:absolute;left:0;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .15s ease-out,font-size .15s ease-out;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;text-align:left}[dir=rtl] .nx-formfield__label{right:0;left:auto;text-align:right}.nx-formfield__appendix,.nx-formfield__prefix,.nx-formfield__suffix{align-items:center;flex:none;white-space:nowrap;color:var(--formfield-control-color)}.nx-formfield__appendix nx-icon.nx-icon--auto,.nx-formfield__prefix nx-icon.nx-icon--auto,.nx-formfield__suffix nx-icon.nx-icon--auto{font-size:var(--formfield-icon-size)}.nx-formfield__appendix nx-icon,.nx-formfield__prefix nx-icon,.nx-formfield__suffix nx-icon{display:block}.nx-formfield__prefix,.nx-formfield__suffix{display:inline-flex}.nx-formfield__appendix{height:var(--formfield-control-height);margin-left:8px;display:flex;border-bottom:var(--formfield-border-width) solid transparent;padding:var(--formfield-input-padding)}[dir=rtl] .nx-formfield__appendix{margin-right:8px;margin-left:0}.nx-formfield__prefix{margin-right:8px}[dir=rtl] .nx-formfield__prefix{margin-right:0;margin-left:8px}.nx-formfield__suffix{margin-left:8px}[dir=rtl] .nx-formfield__suffix{margin-right:8px;margin-left:0}.nx-formfield__hints{color:var(--text-01);font-size:var(--formfield-hint-font-size);line-height:var(--formfield-hint-line-height);font-weight:var(--formfield-hint-font-weight);letter-spacing:var(--formfield-hint-letter-spacing);padding-top:8px;text-align:right}[dir=rtl] .nx-formfield__hints{text-align:left}[nxformfieldhint]{display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.nx-formfield__message{margin-top:4px}.nx-formfield:not(.nx-formfield--negative) .nx-formfield__appendix nx-icon{color:var(--formfield-active-color)}.nx-formfield.is-focused .nx-formfield__label{text-overflow:ellipsis}.nx-formfield.is-focused:not(.nx-formfield--negative):not(.has-error){color:var(--formfield-active-color)}.nx-formfield.is-focused:not(.nx-formfield--negative):not(.has-error) .nx-formfield__input-container{border-bottom-color:var(--formfield-active-border-color)}.nx-formfield.is-focused:not(.nx-formfield--negative):not(.has-error).nx-formfield--negative{color:var(--negative)}.nx-formfield:not(.nx-formfield--negative):not(.has-error):not(.is-disabled):not(.is-focused):not(.has-outline) .nx-formfield__row:hover .nx-formfield__input-container{border-bottom-color:var(--formfield-hover-border-color)}.nx-formfield.is-focused:not(.nx-formfield--negative).has-outline .nx-formfield__input-container{border-color:var(--formfield-outline-active-border-color);box-shadow:var(--formfield-outline-focus-box-shadow)}@media screen and (-ms-high-contrast:active){.nx-formfield.is-focused:not(.nx-formfield--negative).has-outline .nx-formfield__input-container{box-shadow:0 0 0 2px windowText}}.nx-formfield.is-focused:not(.nx-formfield--negative).has-outline.has-error .nx-formfield__input-container{border-bottom-color:var(--danger)}.nx-formfield.has-outline{font-size:var(--formfield-outline-control-font-size);line-height:var(--formfield-outline-control-line-height);font-weight:var(--formfield-outline-control-font-weight);letter-spacing:var(--formfield-outline-control-letter-spacing)}.nx-formfield.has-outline.nx-formfield--type-textarea .nx-formfield__input-container{height:auto}.nx-formfield.has-outline .nx-formfield__wrapper{padding-top:var(--formfield-outline-label-height)}.nx-formfield.has-outline .nx-formfield__row{min-height:var(--formfield-outline-control-height)}.nx-formfield.has-outline .nx-formfield__flexfield{font-size:var(--formfield-outline-control-font-size);line-height:var(--formfield-outline-control-line-height);font-weight:var(--formfield-outline-control-font-weight);letter-spacing:var(--formfield-outline-control-letter-spacing);padding:0}.nx-formfield.has-outline .nx-formfield__input-container{padding:0;background-color:var(--formfield-outline-background-color);border:var(--formfield-border-width) solid var(--formfield-outline-border-color);border-radius:4px;height:var(--formfield-outline-control-height)}.nx-formfield.has-outline input,.nx-formfield.has-outline nx-dropdown .nx-dropdown__container{padding:0 7px}.nx-formfield.has-outline .nx-formfield__suffix{margin-right:7px;margin-left:0}.nx-formfield.has-outline .nx-formfield__prefix,[dir=rtl] .nx-formfield.has-outline .nx-formfield__suffix{margin-right:0;margin-left:7px}[dir=rtl] .nx-formfield.has-outline .nx-formfield__prefix{margin-right:7px;margin-left:0}.nx-formfield.has-outline .nx-formfield__input textarea[nxInput]{line-height:24px;padding:7px}.nx-formfield.has-outline .nx-formfield__appendix{height:var(--formfield-outline-control-height);margin-left:8px;display:flex;border-top:var(--formfield-border-width) solid transparent;border-bottom:var(--formfield-border-width) solid transparent;padding:0}[dir=rtl] .nx-formfield.has-outline .nx-formfield__appendix{margin-left:0;margin-right:8px}.nx-formfield.has-outline .nx-formfield__hints{text-align:left;font-size:var(--formfield-outline-hint-font-size);line-height:var(--formfield-outline-hint-line-height);font-weight:var(--formfield-outline-hint-font-weight);letter-spacing:var(--formfield-outline-hint-letter-spacing)}[dir=rtl] .nx-formfield.has-outline .nx-formfield__hints{text-align:right}.nx-formfield.has-outline input::placeholder{font-size:var(--formfield-outline-input-native-placeholder-font-size);line-height:var(--formfield-outline-input-native-placeholder-line-height);font-weight:var(--formfield-outline-input-native-placeholder-font-weight);letter-spacing:var(--formfield-outline-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color)}.nx-formfield.has-outline input::-moz-placeholder{font-size:var(--formfield-outline-input-native-placeholder-font-size);line-height:var(--formfield-outline-input-native-placeholder-line-height);font-weight:var(--formfield-outline-input-native-placeholder-font-weight);letter-spacing:var(--formfield-outline-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color)}.nx-formfield.has-outline input::-webkit-input-placeholder{font-size:var(--formfield-outline-input-native-placeholder-font-size);line-height:var(--formfield-outline-input-native-placeholder-line-height);font-weight:var(--formfield-outline-input-native-placeholder-font-weight);letter-spacing:var(--formfield-outline-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color)}.nx-formfield.has-outline input:-ms-input-placeholder{font-size:var(--formfield-outline-input-native-placeholder-font-size);line-height:var(--formfield-outline-input-native-placeholder-line-height);font-weight:var(--formfield-outline-input-native-placeholder-font-weight);letter-spacing:var(--formfield-outline-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color)}.nx-formfield.has-outline input::-moz-placeholder{line-height:calc(var(--formfield-outline-control-height) - 2 * var(--formfield-border-width))}.nx-formfield.has-outline.is-readonly .nx-formfield__input-container{border-color:var(--formfield-readonly-border-color);background-color:var(--formfield-readonly-background-color)}.nx-formfield.is-floating .nx-formfield__label{transform:translateY(var(--formfield-floating-distance));font-size:var(--formfield-label-font-size);line-height:var(--formfield-label-line-height);font-weight:var(--formfield-label-font-weight);letter-spacing:var(--formfield-label-letter-spacing)}.nx-formfield.is-floating.is-filled .nx-formfield__label{transition:none}.nx-formfield.is-floating.has-outline .nx-formfield__label{padding-top:0;transform:translateY(var(--formfield-outline-floating-distance));font-size:var(--formfield-outline-label-font-size);line-height:var(--formfield-outline-label-line-height);font-weight:var(--formfield-outline-label-font-weight);letter-spacing:var(--formfield-outline-label-letter-spacing)}.nx-formfield.is-floating.has-outline .nx-formfield__prefix~.nx-formfield__input .nx-formfield__label{padding:0}.nx-formfield.is-floating.has-outline .nx-formfield__input-container{position:relative}.nx-formfield.is-floating.has-outline .nx-formfield__input{position:unset}.nx-formfield.has-error:not(.has-outline) .nx-formfield__input input[nxInput],.nx-formfield.has-error:not(.has-outline) .nx-formfield__prefix,.nx-formfield.has-error:not(.has-outline) .nx-formfield__suffix,.nx-formfield.has-error:not(.has-outline):not(.is-floating) .nx-formfield__label{font-weight:var(--formfield-error-input-font-weight)}.nx-formfield.has-error:not(.nx-formfield--negative),.nx-formfield.has-error:not(.nx-formfield--negative):not(.has-outline) .nx-formfield__label,.nx-formfield.has-error:not(.nx-formfield--negative):not(.has-outline) .nx-formfield__prefix,.nx-formfield.has-error:not(.nx-formfield--negative):not(.has-outline) .nx-formfield__suffix{color:var(--danger)}.nx-formfield.has-error:not(.nx-formfield--negative) .nx-formfield__input-container{border-bottom-color:var(--danger)}.nx-formfield.has-error:not(.nx-formfield--negative).is-floating .nx-formfield__label{color:var(--formfield-label-color)}.nx-formfield.has-error:not(.nx-formfield--negative).has-outline{color:var(--text-01)}.nx-formfield.has-error:not(.nx-formfield--negative).has-outline .nx-formfield__input-container{border-color:var(--danger)}.nx-formfield.is-disabled{color:var(--formfield-disabled-text-color);-webkit-text-fill-color:var(--formfield-disabled-text-color);cursor:not-allowed}.nx-formfield.is-disabled .nx-formfield__hints{color:inherit}.nx-formfield.is-disabled .nx-formfield__input-container{border-bottom-color:var(--formfield-disabled-border-color)}.nx-formfield.is-disabled.has-outline .nx-formfield__input-container{border-color:var(--formfield-disabled-border-color)}.nx-formfield.is-disabled nx-datepicker-toggle button,.nx-formfield.is-readonly nx-datepicker-toggle button{color:var(--formfield-disabled-text-color)}.nx-formfield--negative{color:var(--negative)}.nx-formfield--negative .nx-formfield__hints{color:inherit}.nx-formfield--negative.has-outline .nx-formfield__input-container,.nx-formfield--negative .nx-formfield__input-container{border-color:var(--negative)}.nx-formfield--negative .nx-formfield__appendix,.nx-formfield--negative .nx-formfield__label,.nx-formfield--negative .nx-formfield__prefix,.nx-formfield--negative .nx-formfield__suffix{color:var(--negative)}.nx-formfield--type-nx-dropdown .nx-formfield__label{width:calc(100% - var(--formfield-icon-size))}.nx-formfield__input textarea[nxInput]{vertical-align:bottom}@media screen and (-ms-high-contrast:active){.nx-formfield__input-container{border-bottom-color:buttonText}.nx-formfield.has-outline .nx-formfield__input-container{border-color:buttonText}.nx-formfield.has-outline .nx-formfield__appendix{border-bottom-color:window;border-top-color:window}.nx-formfield.is-disabled{color:GrayText;-webkit-text-fill-color:GrayText}.nx-formfield.is-disabled .nx-formfield__input-container{border-bottom-color:GrayText}.nx-formfield.is-disabled .nx-formfield__hints{color:windowText}.nx-formfield.is-disabled.has-outline .nx-formfield__input-container{border-color:GrayText}.nx-formfield.is-focused:not(.has-outline) .nx-formfield__input-container{border-bottom-color:highlight}.nx-formfield:not(.nx-formfield--negative) .nx-formfield__appendix nx-icon{color:inherit}}.nx-formfield--type-textarea .nx-formfield__flexfield{padding:0}.nx-formfield--type-textarea .nx-formfield__input-container{height:auto}input:-webkit-autofill{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s}input:-webkit-autofill:first-line{font-size:var(--formfield-control-font-size);line-height:var(--formfield-control-line-height);font-weight:var(--formfield-control-font-weight);letter-spacing:var(--formfield-control-letter-spacing);font-family:var(--font-family)}',"@-webkit-keyframes cdk-text-field-autofill-start{\n  /*!*/}@keyframes cdk-text-field-autofill-start{\n  /*!*/}@-webkit-keyframes cdk-text-field-autofill-end{\n  /*!*/}@keyframes cdk-text-field-autofill-end{\n  /*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation:cdk-text-field-autofill-start 0s 1ms;animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation:cdk-text-field-autofill-end 0s 1ms;animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.c-input{text-align:inherit;font-size:inherit;font-weight:inherit;background:0 0;color:inherit;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%}.c-input::-ms-clear{display:none}.c-input::-webkit-search-cancel-button,.c-input::-webkit-search-decoration,.c-input::-webkit-search-results-button,.c-input::-webkit-search-results-decoration{display:none;-webkit-appearance:none}.c-input::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:var(--formfield-input-native-placeholder-font-size);line-height:var(--formfield-input-native-placeholder-line-height);font-weight:var(--formfield-input-native-placeholder-font-weight);letter-spacing:var(--formfield-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color);transition:color .1s ease-in .2s}.c-input::placeholder:-ms-input-placeholder{-ms-user-select:text}.c-input::-moz-placeholder{-moz-user-select:none;user-select:none;font-size:var(--formfield-input-native-placeholder-font-size);line-height:var(--formfield-input-native-placeholder-line-height);font-weight:var(--formfield-input-native-placeholder-font-weight);letter-spacing:var(--formfield-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color);-moz-transition:color ease-in .1s .2s;transition:color .1s ease-in .2s}.c-input::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.c-input::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;font-size:var(--formfield-input-native-placeholder-font-size);line-height:var(--formfield-input-native-placeholder-line-height);font-weight:var(--formfield-input-native-placeholder-font-weight);letter-spacing:var(--formfield-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color);-webkit-transition:color .1s ease-in .2s;transition:color .1s ease-in .2s}.c-input::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.c-input:-ms-input-placeholder{-ms-user-select:none;user-select:none;font-size:var(--formfield-input-native-placeholder-font-size);line-height:var(--formfield-input-native-placeholder-line-height);font-weight:var(--formfield-input-native-placeholder-font-weight);letter-spacing:var(--formfield-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color);-ms-transition:color ease-in .1s .2s;transition:color .1s ease-in .2s}.c-input:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.c-input::-moz-placeholder{line-height:calc(var(--formfield-control-height) - var(--formfield-border-width))}textarea.c-input{height:auto;font-family:inherit}.c-input.is-focused{border:none;outline:none;box-shadow:none}.c-input.is-focused::placeholder{opacity:1;transition:opacity .2s ease-in .15s}.c-input.is-focused::-moz-placeholder{opacity:1;-moz-transition:opacity ease-in .2s .15s;transition:opacity .2s ease-in .15s}.c-input.is-focused::-webkit-input-placeholder{opacity:1;-webkit-transition:opacity .2s ease-in .15s;transition:opacity .2s ease-in .15s}.c-input.is-focused:-ms-input-placeholder{opacity:1;-ms-transition:opacity ease-in .2s .15s;transition:opacity .2s ease-in .15s}.c-input.is-disabled{cursor:not-allowed}textarea.nx-input-element{resize:vertical;overflow:auto}.c-input:invalid,.c-input:required{box-shadow:none}"],encapsulation:2,changeDetection:0}),i}()},PMum:function(e,i,n){"use strict";n.d(i,"a",(function(){return r}));var t=n("EM62"),r=function(){var e=function e(){o(this,e)};return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=t.Ib({type:e,selectors:[["","nxFormfieldPrefix",""]]}),e}()},TdcJ:function(e,i,n){"use strict";n.d(i,"a",(function(){return l}));var t=n("EM62"),r=0,l=function(){var e=function e(){o(this,e),this.id="nx-formfield-hint-"+r++};return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=t.Ib({type:e,selectors:[["","nxFormfieldHint",""]],hostVars:1,hostBindings:function(e,i){2&e&&t.Cb("id",i.id)},inputs:{id:"id"}}),e}()},jyNi:function(e,i,n){"use strict";n.d(i,"a",(function(){return l}));var t=n("EM62"),r=0,l=function(){var e=function e(){o(this,e),this.id="nx-formfield-note-"+r++};return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=t.Ib({type:e,selectors:[["","nxFormfieldNote",""]],hostVars:1,hostBindings:function(e,i){2&e&&t.Cb("id",i.id)},inputs:{id:"id"}}),e}()},qH3y:function(e,i,n){"use strict";n.d(i,"a",(function(){return l}));var t=n("EM62"),r=0,l=function(){var e=function e(){o(this,e),this.id="nx-formfield-appendix-"+r++};return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=t.Ib({type:e,selectors:[["","nxFormfieldAppendix",""]],hostVars:1,hostBindings:function(e,i){2&e&&t.Cb("id",i.id)},inputs:{id:"id"}}),e}()},wGdT:function(e,i,n){"use strict";n.d(i,"a",(function(){return r}));var t=n("EM62"),r=function(){var e=function e(){o(this,e)};return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=t.Ib({type:e}),e}()},yUsN:function(e,i,n){"use strict";n.d(i,"a",(function(){return _})),n.d(i,"b",(function(){return b}));var r=n("EM62"),l=n("5XID"),a=n("ZTXN"),f=n("kuMc"),s=n("2kYt"),d=n("VKQk"),c=n("vMP+");function h(e,i){1&e&&r.Ob(0,"nx-icon",7),2&e&&r.kc("name","exclamation-triangle")}function u(e,i){if(1&e&&(r.Rb(0),r.Hc(1,h,1,1,"nx-icon",3),r.Tb(2,"div",4),r.Tb(3,"div",5),r.Pb(4,6),r.Sb(),r.Sb(),r.Qb()),2&e){var n=r.ec(),t=r.rc(3);r.Bb(1),r.kc("ngIf",n.showIcon),r.Bb(3),r.kc("ngTemplateOutlet",t)}}function m(e,i){if(1&e&&(r.Tb(0,"nx-message",8),r.Pb(1,6),r.Sb()),2&e){r.ec();var n=r.rc(3);r.Bb(1),r.kc("ngTemplateOutlet",n)}}function p(e,i){1&e&&r.ic(0)}var x=["*"],g=0,_=new r.r("ERROR_DEFAULT_OPTIONS"),b=function(){var e=function(){function e(i,n){var t=this;o(this,e),this._changeDetectorRef=i,this._defaultOptions=n,this._showIcon=!0,this._id="nx-error-"+g++,this._destroyed=new a.a,this._defaultOptions&&this._defaultOptions.changes&&this._defaultOptions.changes.pipe(Object(f.a)(this._destroyed)).subscribe((function(){t._changeDetectorRef.markForCheck()}))}return t(e,[{key:"ngOnDestroy",value:function(){this._destroyed.next(),this._destroyed.complete()}},{key:"showIcon",set:function(e){this._showIcon=Object(l.b)(e),this._changeDetectorRef.markForCheck()},get:function(){return this._showIcon}},{key:"id",set:function(e){e&&e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())},get:function(){return this._id}},{key:"appearance",set:function(e){e!==this.appearance&&(this._appearance=e,this._changeDetectorRef.markForCheck())},get:function(){return this._appearance||this._defaultOptions&&this._defaultOptions.appearance||"message"}}]),e}();return e.\u0275fac=function(i){return new(i||e)(r.Nb(r.h),r.Nb(_,8))},e.\u0275cmp=r.Hb({type:e,selectors:[["nx-error"]],hostVars:4,hostBindings:function(e,i){2&e&&(r.Cb("role","alert")("id",i.id),r.Fb("nx-error--message","message"==i.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:x,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(e,i){1&e&&(r.jc(),r.Hc(0,u,5,2,"ng-container",0),r.Hc(1,m,2,1,"nx-message",1),r.Hc(2,p,1,0,"ng-template",null,2,r.Ic)),2&e&&(r.kc("ngIf","text"===i.appearance),r.Bb(1),r.kc("ngIf","message"===i.appearance))},directives:[s.t,s.A,d.a,c.a],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%], [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{line-height:var(--base-error-simple-line-height)}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);margin-right:8px}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:0;margin-left:8px}.nx-error--message[_nghost-%COMP%]{margin:12px 0}.nx-error--message[_nghost-%COMP%]   nx-message[_ngcontent-%COMP%]{margin:0}"],changeDetection:0}),e}()}}])}();