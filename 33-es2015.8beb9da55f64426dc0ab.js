(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"4TwE":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("EM62");let i=(()=>{class e{}return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)}}),e})();n("VqxJ")},"4y46":function(e,t,n){"use strict";n.r(t),n.d(t,"NumberExamplesModule",(function(){return ce}));var r=n("q+Ep"),i=n("I5hw"),s=n("pT7h"),a=n("0FLW"),p=n("ZTXN"),l=n("EM62");let o=(()=>{class e{constructor(){this.changes=new p.a,this.decrementAriaLabel="Decrement",this.incrementAriaLabel="Increment"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=l.Jb({token:e,factory:e.\u0275fac}),e})();var u=n("2kYt"),c=n("kPBv"),b=n("6c6m"),m=n("nIj0");let h=(()=>{class e{}return e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({factory:function(t){return new(t||e)},providers:[o],imports:[[b.b,m.k,a.c,c.b,u.c]]}),e})();var g=n("5XID"),d=n("JNA7"),x=n("N1r4");let _=(()=>{class e{constructor(e,t,n){this._element=e,this._renderer=t,this._cdr=n,this._resize=!0,this.updateInputWidth=this.updateInputWidth.bind(this)}set resize(e){this._resize=Object(g.b)(e),this._resize?(this._addEventListener(),this.updateInputWidth()):this._removeEventListener()}get resize(){return this._resize}ngAfterViewInit(){this.resize&&this._addEventListener()}ngOnDestroy(){this._removeEventListener()}updateInputWidth(){const e=this._renderer.createElement("canvas").getContext("2d"),t=window.getComputedStyle(this._element.nativeElement);e.font=Object(d.g)(t);const n=e.measureText(this._element.nativeElement.value),r=this.sumStyles(t.paddingLeft,t.paddingRight),i=this.sumStyles(t.borderLeftWidth,t.borderRightWidth),s=n.width+r+i+16,a=parseFloat(t.minWidth);this.width=Math.max(Number.isNaN(a)?0:a,s),this._cdr.markForCheck()}_addEventListener(){this._element.nativeElement.addEventListener("input",this.updateInputWidth,!0),this._element.nativeElement.addEventListener("change",this.updateInputWidth,!0)}_removeEventListener(){this._element.nativeElement.removeEventListener("input",this.updateInputWidth,!0),this._element.nativeElement.removeEventListener("change",this.updateInputWidth,!0)}sumStyles(e,t){return e=parseInt(e,10),t=parseInt(t,10),(e=Number.isNaN(e)?0:e)+(Number.isNaN(t)?0:t)}}return e.\u0275fac=function(t){return new(t||e)(l.Nb(l.l),l.Nb(l.G),l.Nb(l.h))},e.\u0275dir=l.Ib({type:e,selectors:[["input","nxAutoResize",""]],hostVars:2,hostBindings:function(e,t){2&e&&l.Ec("width",t.width,"px")},inputs:{resize:["nxAutoResize","resize"]}}),e})();var f=n("oeuD"),v=n("tPQ2"),C=n("VKQk");const w=["customLabel"],y=["nativeInput"];function O(e,t){if(1&e&&(l.Tb(0,"div",12),l.Tb(1,"label",13),l.Jc(2),l.Sb(),l.Sb()),2&e){const e=l.ec();l.Bb(1),l.kc("for",e.inputId),l.Bb(1),l.Lc(" ",e.label," ")}}function S(e,t){if(1&e&&(l.Tb(0,"div",14,15),l.ic(2,2),l.Sb()),2&e){const e=l.ec();l.kc("id",e.ariaDescribedBy)}}const M=[[["nx-number-stepper-prefix"]],[["nx-number-stepper-suffix"]],"*"],L=["nx-number-stepper-prefix","nx-number-stepper-suffix","*"],k={big:"nx-stepper--big",normal:""},z=["nx-stepper"],N=["nx-stepper__input"],T=new RegExp(/^-?[0-9]\d*(\.\d+)?$/g),P={provide:m.n,useExisting:Object(l.V)(()=>D),multi:!0},A={provide:m.m,useExisting:Object(l.V)(()=>D),multi:!0};let I=0,D=(()=>{class e extends x.a{constructor(e,t,n,r){super(k,z,n,t),this._changeDetectorRef=e,this._intl=r,this._step=1,this._min=0,this._max=100,this._value=0,this._label=null,this._incrementAriaLabel="",this._decrementAriaLabel="",this._inputAriaLabel="",this._resize=!1,this._negative=!1,this._leadingZero=!0,this._disabled=!1,this.inputClassNames=Object(d.h)("regular",N),this.inputId="nx-number-stepper-"+I++,this.ariaDescribedBy=null,this.valueChange=new l.o,this.onChangeCallback=e=>{},this.onTouchedCallback=()=>{},this._intlSubscription=this._intl.changes.subscribe(()=>this._changeDetectorRef.markForCheck())}set resize(e){this._resize=Object(g.b)(e),this._changeDetectorRef.markForCheck()}get resize(){return this._resize}get label(){return this._label}set label(e){this._label!==e&&(this._label=e,this._changeDetectorRef.markForCheck())}set incrementAriaLabel(e){this._incrementAriaLabel=e}get incrementAriaLabel(){return this._incrementAriaLabel}set decrementAriaLabel(e){this._decrementAriaLabel=e}get decrementAriaLabel(){return this._decrementAriaLabel}set inputAriaLabel(e){this._inputAriaLabel=e}get inputAriaLabel(){return this._inputAriaLabel}set step(e){this._step=Number(e)}get step(){return this._step}set min(e){this._min=Number(e)}get min(){return this._min}set max(e){this._max=Number(e)}get max(){return this._max}get value(){return this._value}set value(e){this._value=e,this.setInputValue(null!==this._value?this._value:0),this._changeDetectorRef.markForCheck()}set negative(e){this._negative!==e&&(this._negative=Object(g.b)(e),this._changeDetectorRef.markForCheck())}get negative(){return this._negative}set leadingZero(e){this._leadingZero!==e&&(this._leadingZero=Object(g.b)(e),this.setInputValue(this.value),this._changeDetectorRef.markForCheck())}get leadingZero(){return this._leadingZero}set disabled(e){this._disabled=Object(g.b)(e)}get disabled(){return this._disabled}ngAfterViewInit(){this.ngContentWrapper&&(this.ariaDescribedBy=this.ngContentWrapper.nativeElement.children.length>0?"label-for-"+this.inputId:null),this.setInputValue(this._value)}ngOnDestroy(){this._intlSubscription.unsubscribe()}setInputValue(e){const t=null!==e?e:0;this.numberInputValue=this.leadingZero?Object(d.i)(t.toString(),2):t.toString(),this.nativeInput&&(this.nativeInput.nativeElement.value=this.numberInputValue),setTimeout(()=>{this.triggerResize()})}writeValue(e){this.value=e}registerOnChange(e){this.onChangeCallback=e}registerOnTouched(e){this.onTouchedCallback=e}setDisabledState(e){this._disabled=e,this._changeDetectorRef.markForCheck()}onInputChange(e){this._value=this.validateUserInput(e.target.value)?Number(e.target.value):null,null!==this._value&&this.setInputValue(this._value),this.valueChange.emit(this._value),this.onChangeCallback(this._value)}validateUserInput(e){return!!e.match(T)}incrementOnClick(){this._increment(),this.onTouchedCallback()}incrementOnKey(e){this._increment(),e.preventDefault()}_increment(){let e;e=this.isBetweenLimits(this._value)?this.getNextGreaterValue(this._value):this.enforceLimits(this._value),this.value=e,this.setInputValue(this.value),this.valueChange.emit(this._value),this.onChangeCallback(this._value)}triggerResize(){this.resize&&(this.autoResize.updateInputWidth(),this._changeDetectorRef.markForCheck())}decrementOnClick(){this._decrement(),this.onTouchedCallback()}decrementOnKey(e){this._decrement(),e.preventDefault()}_decrement(){let e;e=this.isBetweenLimits(this._value)?this.getNextLowerValue(this._value):this.enforceLimits(this._value),this.value=e,this.setInputValue(this.value),this.valueChange.emit(this._value),this.onChangeCallback(this._value)}enforceLimits(e){return e>this._max?this._max:e<this._min?this._min:e}getNextLowerValue(e){let t;return e||(e=0),t=this.isValidStep(e)?new f.Decimal(e).minus(new f.Decimal(this._step)).toNumber():new f.Decimal(e).toNearest(this._step,f.Decimal.ROUND_DOWN).toNumber(),this.enforceLimits(t)}getNextGreaterValue(e){let t;return e||(e=0),t=this.isValidStep(e)?new f.Decimal(e).plus(new f.Decimal(this._step)).toNumber():new f.Decimal(e).toNearest(this._step,f.Decimal.ROUND_UP).toNumber(),this.enforceLimits(t)}isBetweenLimits(e){return e<=this._max&&e>=this._min}isMinimum(){return this._value===this._min}isMaximum(){return this._value===this._max}isValidStep(e){null===e&&(e=new f.Decimal(0));const t=new f.Decimal(this._min),n=new f.Decimal(e),r=t.minus(n).mod(new f.Decimal(this._step)).toNumber();return!(!this.isBetweenLimits(e)||!this.isMinimum()&&!this.isMaximum()&&0!==r)}userInputToNumber(e){return parseInt(""===e?0:e,10)}_validateFn(){return this.isValidStep(this._value)?null===this._value?{nxNumberStepperFormatError:"Not a valid number"}:null:{nxNumberStepperStepError:"Value is not a valid step"}}validate(e){return this._validateFn()}get _buttonType(){return"secondary"+(this.negative?" negative":"")}}return e.\u0275fac=function(t){return new(t||e)(l.Nb(l.h),l.Nb(l.G),l.Nb(l.l),l.Nb(o))},e.\u0275cmp=l.Hb({type:e,selectors:[["nx-number-stepper"]],viewQuery:function(e,t){var n;1&e&&(l.Nc(w,!0),l.Cc(_,!0),l.Nc(y,!0)),2&e&&(l.qc(n=l.bc())&&(t.ngContentWrapper=n.first),l.qc(n=l.bc())&&(t.autoResize=n.first),l.qc(n=l.bc())&&(t.nativeInput=n.first))},hostVars:4,hostBindings:function(e,t){2&e&&l.Fb("is-negative",t.negative)("is-disabled",t.disabled)},inputs:{classNames:["nxSize","classNames"],resize:["nxResize","resize"],label:["nxLabel","label"],incrementAriaLabel:"incrementAriaLabel",decrementAriaLabel:"decrementAriaLabel",inputAriaLabel:"inputAriaLabel",step:["nxStep","step"],min:["nxMin","min"],max:["nxMax","max"],value:["nxValue","value"],negative:"negative",leadingZero:"leadingZero",disabled:["nxDisabled","disabled"]},outputs:{valueChange:"nxValueChange"},features:[l.Ab([P,A]),l.yb],ngContentSelectors:L,decls:14,vars:14,consts:[["class","nx-stepper__label",4,"ngIf"],["class","nx-stepper__label",3,"id",4,"ngIf"],[1,"nx-stepper__input-container"],["type","button",1,"nx-stepper__down","nx-stepper__control",3,"nxButton","disabled","click"],["name","minus","size","s"],[1,"nx-stepper__input-wrapper"],[1,"nx-stepper__inner-wrapper"],["type","number","spellcheck","false",3,"nxAutoResize","id","ngClass","disabled","input","blur","keydown.arrowup","keydown.arrowdown"],["nativeInput",""],[1,"nx-stepper__input-underline"],["type","button",1,"nx-stepper__up","nx-stepper__control",3,"nxButton","disabled","click"],["name","plus","size","s"],[1,"nx-stepper__label"],[3,"for"],[1,"nx-stepper__label",3,"id"],["customLabel",""]],template:function(e,t){1&e&&(l.jc(M),l.Hc(0,O,3,2,"div",0),l.Hc(1,S,3,1,"div",1),l.Tb(2,"div",2),l.Tb(3,"button",3),l.ac("click",(function(){return t.decrementOnClick()})),l.Ob(4,"nx-icon",4),l.Sb(),l.Tb(5,"div",5),l.Tb(6,"div",6),l.ic(7),l.Tb(8,"input",7,8),l.ac("input",(function(e){return t.onInputChange(e)}))("blur",(function(){return t.onTouchedCallback()}))("keydown.arrowup",(function(e){return t.incrementOnKey(e)}))("keydown.arrowdown",(function(e){return t.decrementOnKey(e)})),l.Sb(),l.ic(10,1),l.Sb(),l.Ob(11,"div",9),l.Sb(),l.Tb(12,"button",10),l.ac("click",(function(){return t.incrementOnClick()})),l.Ob(13,"nx-icon",11),l.Sb(),l.Sb()),2&e&&(l.kc("ngIf",t.label),l.Bb(1),l.kc("ngIf",!t.label),l.Bb(2),l.kc("nxButton",t._buttonType)("disabled",t.disabled||t.value<=t.min),l.Cb("aria-label",t.decrementAriaLabel||t._intl.decrementAriaLabel),l.Bb(5),l.kc("nxAutoResize",t.resize)("id",t.inputId)("ngClass",t.inputClassNames)("disabled",t.disabled),l.Cb("aria-describedby",t.ariaDescribedBy)("aria-label",t.inputAriaLabel),l.Bb(4),l.kc("nxButton",t._buttonType)("disabled",t.disabled||t.value>=t.max),l.Cb("aria-label",t.incrementAriaLabel||t._intl.incrementAriaLabel))},directives:[u.t,v.a,C.a,_,u.q],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_nghost-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}[_nghost-%COMP%]   input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}[_nghost-%COMP%]   input[type=number][_ngcontent-%COMP%]:invalid{box-shadow:none}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{padding:0}.nx-stepper__input-container[_ngcontent-%COMP%]{align-items:flex-end;display:flex;margin-top:12px}.nx-stepper__label[_ngcontent-%COMP%]{display:flex;font-size:var(--number-stepper-label-font-size);line-height:var(--number-stepper-label-line-height);font-weight:var(--number-stepper-label-font-weight);letter-spacing:var(--number-stepper-label-letter-spacing)}.nx-stepper__control[_ngcontent-%COMP%]{width:32px;height:32px;min-height:32px;font-size:24px;margin:0;padding:0}.nx-stepper__input[_ngcontent-%COMP%]{width:56px;min-width:56px}.nx-stepper__input[_ngcontent-%COMP%]:disabled{color:var(--number-stepper-disabled-color);-webkit-text-fill-color:var(--number-stepper-disabled-color);cursor:not-allowed}.nx-stepper__input[_ngcontent-%COMP%],   .nx-stepper__prefix,   .nx-stepper__suffix{font-size:var(--number-stepper-small-font-size);line-height:var(--number-stepper-small-line-height);font-weight:var(--number-stepper-small-font-weight);letter-spacing:var(--number-stepper-small-letter-spacing);color:var(--number-stepper-color);background:0 0;outline:0;border:0;text-align:center}  .nx-stepper__suffix{margin-left:4px}[dir=rtl][_nghost-%COMP%]     .nx-stepper__suffix, [dir=rtl]   [_nghost-%COMP%]     .nx-stepper__suffix{margin-left:0;margin-right:4px}  .nx-stepper__prefix{margin-right:4px}[dir=rtl][_nghost-%COMP%]     .nx-stepper__prefix, [dir=rtl]   [_nghost-%COMP%]     .nx-stepper__prefix{margin-right:0;margin-left:4px}.nx-stepper__input-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;margin:0 16px}.nx-stepper__inner-wrapper[_ngcontent-%COMP%]{height:28px;display:flex;align-items:baseline}.nx-stepper__input-underline[_ngcontent-%COMP%]{width:100%;margin-top:2px;height:2px;background:var(--number-stepper-underline-color)}.nx-stepper__input-underline--disabled[_ngcontent-%COMP%]{background:var(--number-stepper-disabled-underline-color)}.nx-stepper--big[_nghost-%COMP%]   .nx-stepper__control[_ngcontent-%COMP%]{width:72px;min-height:48px;margin-bottom:0}.nx-stepper--big[_nghost-%COMP%]   .nx-stepper__input[_ngcontent-%COMP%]{width:72px;min-width:72px}.nx-stepper--big[_nghost-%COMP%]   .nx-stepper__input[_ngcontent-%COMP%], .nx-stepper--big[_nghost-%COMP%]     .nx-stepper__prefix, .nx-stepper--big[_nghost-%COMP%]     .nx-stepper__suffix{font-size:var(--number-stepper-large-font-size);line-height:var(--number-stepper-large-line-height);font-weight:var(--number-stepper-large-font-weight);letter-spacing:var(--number-stepper-large-letter-spacing);height:48px;padding:0;margin-bottom:0}.nx-stepper--big[_nghost-%COMP%]   .nx-stepper__input-wrapper[_ngcontent-%COMP%]{margin:0 24px}.nx-stepper--big[_nghost-%COMP%]   .nx-stepper__input-underline[_ngcontent-%COMP%]{margin-top:-2px}.nx-stepper--big[_nghost-%COMP%]   .nx-stepper__inner-wrapper[_ngcontent-%COMP%]{height:48px}.is-negative[_nghost-%COMP%]   .nx-stepper__input[_ngcontent-%COMP%], .is-negative[_nghost-%COMP%]   .nx-stepper__label[_ngcontent-%COMP%], .is-negative[_nghost-%COMP%]     .nx-stepper__prefix, .is-negative[_nghost-%COMP%]     .nx-stepper__suffix{color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-stepper__input-underline[_ngcontent-%COMP%]{background:var(--negative)}.is-disabled[_nghost-%COMP%]   .nx-stepper__input-underline[_ngcontent-%COMP%]{background:var(--number-stepper-disabled-underline-color)}.is-disabled[_nghost-%COMP%]     .nx-stepper__prefix, .is-disabled[_nghost-%COMP%]     .nx-stepper__suffix{color:var(--number-stepper-disabled-color)}@media screen and (-ms-high-contrast:active){button.nx-stepper__control[_ngcontent-%COMP%]:disabled{border-color:GrayText;color:GrayText;opacity:1}.nx-stepper__input[_ngcontent-%COMP%]{color:buttonText}  .nx-stepper__prefix,   .nx-stepper__suffix, .nx-stepper--big[_nghost-%COMP%]     .nx-stepper__prefix, .nx-stepper--big[_nghost-%COMP%]     .nx-stepper__suffix{-ms-high-contrast-adjust:none;color:windowText}.nx-stepper__inner-wrapper[_ngcontent-%COMP%]{background:buttonFace}.nx-stepper__input-underline[_ngcontent-%COMP%]{background:buttonText}}"],changeDetection:0}),e})(),E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=l.Ib({type:e,selectors:[["nx-number-stepper-prefix"]],hostAttrs:[1,"nx-stepper__prefix"]}),e})(),V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=l.Ib({type:e,selectors:[["nx-number-stepper-suffix"]],hostAttrs:[1,"nx-stepper__suffix"]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-a11y-example"]],decls:3,vars:0,consts:[["inputAriaLabel","Number of travellers","incrementAriaLabel","Increase number of travellers","decrementAriaLabel","Decrease number of travellers"]],template:function(e,t){1&e&&(l.Tb(0,"nx-number-stepper",0),l.Tb(1,"label"),l.Jc(2,"Number of travellers"),l.Sb(),l.Sb())},directives:[D],styles:[""]}),e})(),R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-additions-example"]],decls:6,vars:0,consts:[["nxResize","true","leadingZero","false","inputAriaLabel","Sum of Expenses"],["nxSize","big","nxResize","true","leadingZero","false","inputAriaLabel","Sum of Expenses"]],template:function(e,t){1&e&&(l.Tb(0,"nx-number-stepper",0),l.Tb(1,"nx-number-stepper-suffix"),l.Jc(2,"$"),l.Sb(),l.Sb(),l.Tb(3,"nx-number-stepper",1),l.Tb(4,"nx-number-stepper-prefix"),l.Jc(5,"\u20ac"),l.Sb(),l.Sb())},directives:[D,V,E],styles:[""]}),e})(),F=(()=>{class e{constructor(){this.number=1e3}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-auto-resizing-example"]],decls:2,vars:1,consts:[["nxResize","true","nxSize","big","nxStep","1000","nxMax","10000000","inputAriaLabel","Number of Kilometers",3,"ngModel","ngModelChange"],["nxResize","true","nxSize","big","nxStep","0.03","nxMin","0.06","inputAriaLabel","Distance in Meters"]],template:function(e,t){1&e&&(l.Tb(0,"nx-number-stepper",0),l.ac("ngModelChange",(function(e){return t.number=e})),l.Sb(),l.Ob(1,"nx-number-stepper",1)),2&e&&l.kc("ngModel",t.number)},directives:[D,m.p,m.s],styles:[""]}),e})();var J=n("kMq3"),H=n("dWOj");let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-custom-label-example"]],decls:9,vars:1,consts:[["nxSize","big","name","testStepper","inputAriaLabel","Number of travellers"],["nxPopoverTrigger","hover","name","info-circle-o","size","s",1,"info-icon","nx-margin-left-2xs",3,"nxPopoverTriggerFor"],["popoverHover",""]],template:function(e,t){if(1&e&&(l.Tb(0,"nx-number-stepper",0),l.Tb(1,"label"),l.Jc(2,"Number of travellers"),l.Sb(),l.Ob(3,"nx-icon",1),l.Sb(),l.Tb(4,"nx-popover",null,2),l.Tb(6,"div"),l.Tb(7,"span"),l.Jc(8,"Custom help text as popover"),l.Sb(),l.Sb(),l.Sb()),2&e){const e=l.rc(5);l.Bb(3),l.kc("nxPopoverTriggerFor",e)}},directives:[D,C.a,J.a,H.a],styles:[".info-icon[_ngcontent-%COMP%]{align-self:center}"]}),e})(),W=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-disabled-explicit-example"]],decls:6,vars:2,consts:[["nxSize","big","inputAriaLabel","Sum of Expenses",3,"nxDisabled"],["nxSize","normal","inputAriaLabel","Sum of Expenses",3,"nxDisabled"]],template:function(e,t){1&e&&(l.Tb(0,"nx-number-stepper",0),l.Tb(1,"nx-number-stepper-suffix"),l.Jc(2,"$"),l.Sb(),l.Sb(),l.Tb(3,"nx-number-stepper",1),l.Tb(4,"nx-number-stepper-prefix"),l.Jc(5,"\u20ac"),l.Sb(),l.Sb()),2&e&&(l.kc("nxDisabled",!0),l.Bb(3),l.kc("nxDisabled",!0))},directives:[D,V,E],styles:[""]}),e})(),q=(()=>{class e{constructor(){this.fb=new m.h({amount:new m.e({value:"",disabled:!0})})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-disabled-implicit-example"]],decls:7,vars:1,consts:[[3,"formGroup"],["formControlName","amount","nxSize","big","inputAriaLabel","Sum of Expenses"],["formControlName","amount","nxSize","normal","inputAriaLabel","Sum of Expenses"]],template:function(e,t){1&e&&(l.Tb(0,"form",0),l.Tb(1,"nx-number-stepper",1),l.Tb(2,"nx-number-stepper-suffix"),l.Jc(3,"$"),l.Sb(),l.Sb(),l.Tb(4,"nx-number-stepper",2),l.Tb(5,"nx-number-stepper-prefix"),l.Jc(6,"\u20ac"),l.Sb(),l.Sb(),l.Sb()),2&e&&l.kc("formGroup",t.fb)},directives:[m.A,m.q,m.i,D,m.p,m.g,V,E],styles:[""]}),e})(),Z=(()=>{class e{constructor(){this.number=0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-floating-point-example"]],decls:2,vars:0,consts:[["nxSize","big","nxStep","0.5","nxMin","0.5","inputAriaLabel","Distance in meters"],["nxSize","big","nxStep","0.03","nxMin","0.06","inputAriaLabel","Distance in meters"]],template:function(e,t){1&e&&(l.Ob(0,"nx-number-stepper",0),l.Ob(1,"nx-number-stepper",1))},directives:[D],styles:[""]}),e})();var G=n("VqxJ");let K=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-formatting-example"]],decls:7,vars:0,consts:[["nxCopytext","large",1,"label"],["nxSize","normal","inputAriaLabel","Number of travellers"],["nxSize","normal","leadingZero","false","inputAriaLabel","Number of travellers"]],template:function(e,t){1&e&&(l.Tb(0,"p",0),l.Jc(1," With leading zero:"),l.Sb(),l.Ob(2,"nx-number-stepper",1),l.Ob(3,"br"),l.Tb(4,"p",0),l.Jc(5," Without leading zero:"),l.Sb(),l.Ob(6,"nx-number-stepper",2))},directives:[G.a,D],styles:[".label[_ngcontent-%COMP%]{margin-bottom:8px}"]}),e})(),U=(()=>{class e extends o{constructor(){super(...arguments),this.decrementAriaLabel="verringern",this.incrementAriaLabel="erh\xf6hen"}}return e.\u0275fac=function(t){return $(t||e)},e.\u0275prov=l.Jb({token:e,factory:e.\u0275fac}),e})();const $=l.Vb(U);let Q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-localize-example"]],features:[l.Ab([{provide:o,useClass:U}])],decls:1,vars:0,template:function(e,t){1&e&&l.Ob(0,"nx-number-stepper")},directives:[D],styles:[""]}),e})(),X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-negative-example"]],decls:3,vars:0,consts:[[1,"docs-inverse-container"],["nxSize","big","negative","true","nxLabel","Number of travellers",1,"nx-margin-bottom-s"],["nxSize","normal","negative","true","nxLabel","Number of travellers"]],template:function(e,t){1&e&&(l.Tb(0,"div",0),l.Ob(1,"nx-number-stepper",1),l.Ob(2,"nx-number-stepper",2),l.Sb())},directives:[D],styles:[""]}),e})(),Y=(()=>{class e{constructor(e){this.fb=e,this.testForm=this.fb.group({stepperTestReactive:3})}}return e.\u0275fac=function(t){return new(t||e)(l.Nb(m.d))},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-reactive-example"]],decls:10,vars:11,consts:[[3,"formGroup"],["nxLabel","Number of travellers","nxSize","big","formControlName","stepperTestReactive",3,"nxStep","nxMin","nxMax"]],template:function(e,t){1&e&&(l.Tb(0,"form",0),l.Ob(1,"nx-number-stepper",1),l.Tb(2,"p"),l.Jc(3),l.fc(4,"json"),l.Sb(),l.Tb(5,"p"),l.Jc(6),l.Sb(),l.Tb(7,"p"),l.Jc(8),l.fc(9,"json"),l.Sb(),l.Sb()),2&e&&(l.kc("formGroup",t.testForm),l.Bb(1),l.kc("nxStep",1)("nxMin",-3)("nxMax",20),l.Bb(2),l.Lc("Form value: ",l.gc(4,7,t.testForm.value)," "),l.Bb(3),l.Lc("Form status: ",t.testForm.status," "),l.Bb(2),l.Lc("Form errors: ",l.gc(9,9,t.testForm.controls.stepperTestReactive.errors),""))},directives:[m.A,m.q,m.i,D,m.p,m.g],pipes:[u.k],styles:[""]}),e})(),ee=(()=>{class e{constructor(){this.number=1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-simple-binding-example"]],decls:3,vars:2,consts:[["nxSize","big","nxStep","2","inputAriaLabel","Number of travellers",3,"nxValue","nxValueChange"]],template:function(e,t){1&e&&(l.Tb(0,"nx-number-stepper",0),l.ac("nxValueChange",(function(e){return t.number=e})),l.Sb(),l.Tb(1,"p"),l.Jc(2),l.Sb()),2&e&&(l.kc("nxValue",t.number),l.Bb(2),l.Lc("Value is: ",t.number,""))},directives:[D],styles:[""]}),e})(),te=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-sizes-example"]],decls:2,vars:0,consts:[["nxSize","big","inputAriaLabel","Number of travellers"],["nxSize","normal","inputAriaLabel","Number of travellers"]],template:function(e,t){1&e&&(l.Ob(0,"nx-number-stepper",0),l.Ob(1,"nx-number-stepper",1))},directives:[D],styles:[""]}),e})(),ne=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-standalone-example"]],decls:1,vars:0,consts:[["nxLabel","Number of travellers","nxSize","big","name","testStepper"]],template:function(e,t){1&e&&l.Ob(0,"nx-number-stepper",0)},directives:[D],styles:[""]}),e})(),re=(()=>{class e{constructor(){this.number=3}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-template-driven-example"]],decls:4,vars:2,consts:[["nxLabel","Number of travellers","nxSize","big","name","testStepper",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(l.Tb(0,"form"),l.Tb(1,"nx-number-stepper",0),l.ac("ngModelChange",(function(e){return t.number=e})),l.Sb(),l.Tb(2,"p"),l.Jc(3),l.Sb(),l.Sb()),2&e&&(l.Bb(1),l.kc("ngModel",t.number),l.Bb(2),l.Lc("Current value: ",t.number,""))},directives:[m.A,m.q,m.r,D,m.p,m.s],styles:[""]}),e})();var ie=n("vMP+"),se=n("yUsN");function ae(e,t){1&e&&(l.Tb(0,"nx-message",4),l.Jc(1," This is a hint. This message will disappear once you get an error from parsing or when the input is missing altogether.\n"),l.Sb())}function pe(e,t){1&e&&(l.Tb(0,"nx-error"),l.Jc(1," That's not a valid step\n"),l.Sb())}function le(e,t){1&e&&(l.Tb(0,"nx-error"),l.Jc(1," That's not a valid number\n"),l.Sb())}let oe=(()=>{class e{constructor(){this.number=0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["number-stepper-validation-example"]],decls:5,vars:4,consts:[["nxSize","big","nxStep","2","inputAriaLabel","Number of travellers",3,"ngModel","ngModelChange"],["stepperValidModel","ngModel"],["nxContext","info",4,"ngIf"],[4,"ngIf"],["nxContext","info"]],template:function(e,t){if(1&e&&(l.Tb(0,"nx-number-stepper",0,1),l.ac("ngModelChange",(function(e){return t.number=e})),l.Sb(),l.Hc(2,ae,2,0,"nx-message",2),l.Hc(3,pe,2,0,"nx-error",3),l.Hc(4,le,2,0,"nx-error",3)),2&e){const e=l.rc(1);l.kc("ngModel",t.number),l.Bb(2),l.kc("ngIf",!e.errors),l.Bb(1),l.kc("ngIf",e.errors&&e.errors.nxNumberStepperStepError),l.Bb(1),l.kc("ngIf",e.errors&&e.errors.nxNumberStepperFormatError)}},directives:[D,m.p,m.s,u.t,ie.a,se.b],styles:[""]}),e})();var ue=n("t3RA");let ce=(()=>{class e{static components(){return{"number-stepper-a11y":B,"number-stepper-additions":R,"number-stepper-auto-resizing":F,"number-stepper-custom-label":j,"number-stepper-disabled-explicit":W,"number-stepper-disabled-implicit":q,"number-stepper-floating-point":Z,"number-stepper-formatting":K,"number-stepper-localize":Q,"number-stepper-negative":X,"number-stepper-reactive":Y,"number-stepper-simple-binding":ee,"number-stepper-sizes":te,"number-stepper-standalone":ne,"number-stepper-template-driven":re,"number-stepper-validation":oe}}}return e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({factory:function(t){return new(t||e)},imports:[[h,a.c,s.a,i.c,r.a,ue.a]]}),e})()},VqxJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("EM62");const i=["nxCopytext",""],s=["*"];let a=(()=>{class e{constructor(){this.type="normal",this.negative=!1}set classNames(e){if(this._classNames===e)return;this._classNames=e;const[t=null]=this._classNames.match(/small|medium|normal|large/)||["normal"];this.type=t,this.negative=!!this._classNames.match(/negative/)}get classNames(){return this._classNames}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Hb({type:e,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(e,t){2&e&&r.Fb("nx-copy",!0)("nx-copy--small","small"===t.type)("nx-copy--medium","medium"===t.type)("nx-copy--normal","normal"===t.type)("nx-copy--large","large"===t.type)("nx-copy--negative",t.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:i,ngContentSelectors:s,decls:1,vars:0,template:function(e,t){1&e&&(r.jc(),r.ic(0))},styles:["[_nghost-%COMP%]{margin:0 0 32px;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),e})()},t3RA:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("ohqM"),i=n("4TwE"),s=n("aln5"),a=n("kPBv"),p=n("2kYt"),l=n("nIj0"),o=n("EM62");let u=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},imports:[[],p.c,l.k,l.v,a.b,s.a,i.a,r.a]}),e})()}}]);