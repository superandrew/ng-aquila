!function(){function n(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function e(e,o,t){return o&&n(e.prototype,o),t&&n(e,t),e}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{Mf7q:function(n,t,i){"use strict";i.r(t),i.d(t,"DropdownExamplesModule",(function(){return sn}));var r=i("B79f"),d=i("ydLu"),a=i("EM62"),b=i("+K2D"),l=i("6DsR"),c=i("xRDo"),u=i("PCf9"),x=i("6+vd"),p=i("nIj0"),s=i("AYJ2"),m=i("2kYt"),f=i("XiE1");function w(n,e){if(1&n&&(a.Tb(0,"span"),a.Jc(1),a.Sb()),2&n){var o=a.ec();a.Bb(1),a.Kc(null==o.customLabelDropdownValue?null:o.customLabelDropdownValue.prefix)}}function T(n,e){if(1&n&&(a.Tb(0,"nx-dropdown-item",7),a.Jc(1),a.Sb()),2&n){var o=e.$implicit;a.kc("nxValue",o),a.Bb(1),a.Mc(" ",o.prefix," (",o.countryId,") ")}}var S,v,g=((v=function n(){o(this,n),this.telPrefixDemoData=[{prefix:"+1",countryId:"United States of America"},{prefix:"+49",countryId:"Germany"},{prefix:"+41",countryId:"Switzerland"}]}).\u0275fac=function(n){return new(n||v)},v.\u0275cmp=a.Hb({type:v,selectors:[["dropdown-custom-label-example"]],decls:7,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 4"],["nxLabel","Country Code"],[3,"ngModel","ngModelChange"],["nxClosedLabel",""],[3,"nxValue",4,"ngFor","ngForOf"],[3,"nxValue"]],template:function(n,e){1&n&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"nx-formfield",3),a.Tb(4,"nx-dropdown",4),a.ac("ngModelChange",(function(n){return e.customLabelDropdownValue=n})),a.Hc(5,w,2,1,"ng-template",5),a.Hc(6,T,2,3,"nx-dropdown-item",6),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&n&&(a.Bb(4),a.kc("ngModel",e.customLabelDropdownValue),a.Bb(2),a.kc("ngForOf",e.telPrefixDemoData))},directives:[b.a,l.a,c.a,u.b,x.a,p.p,p.s,s.a,m.s,f.a],styles:[""]}),v),V=((S=function n(){o(this,n)}).\u0275fac=function(n){return new(n||S)},S.\u0275cmp=a.Hb({type:S,selectors:[["dropdown-disabled-items-example"]],decls:31,vars:1,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 4"],["nxLabel","Disabled dropdown"],["nxDisabled","true"],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],["nxLabel","With disabled item"],["disabled","true","nxValue","BMW"],["nxLabel","With disabled multi item"],[3,"nxIsMultiselect"]],template:function(n,e){1&n&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"nx-formfield",3),a.Tb(4,"nx-dropdown",4),a.Tb(5,"nx-dropdown-item",5),a.Jc(6,"B"),a.Sb(),a.Tb(7,"nx-dropdown-item",6),a.Jc(8,"A"),a.Sb(),a.Tb(9,"nx-dropdown-item",7),a.Jc(10,"V"),a.Sb(),a.Tb(11,"nx-dropdown-item",8),a.Jc(12,"M"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(13,"div",2),a.Tb(14,"nx-formfield",9),a.Tb(15,"nx-dropdown"),a.Tb(16,"nx-dropdown-item",10),a.Jc(17,"B"),a.Sb(),a.Tb(18,"nx-dropdown-item",6),a.Jc(19,"A"),a.Sb(),a.Tb(20,"nx-dropdown-item",7),a.Jc(21,"V"),a.Sb(),a.Tb(22,"nx-dropdown-item",8),a.Jc(23,"M"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(24,"div",2),a.Tb(25,"nx-formfield",11),a.Tb(26,"nx-dropdown",12),a.Ob(27,"nx-dropdown-item",10),a.Ob(28,"nx-dropdown-item",6),a.Ob(29,"nx-dropdown-item",7),a.Ob(30,"nx-dropdown-item",8),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&n&&(a.Bb(26),a.kc("nxIsMultiselect",!0))},directives:[b.a,l.a,c.a,u.b,x.a,f.a],styles:[""]}),S);function y(n,e){1&n&&a.Ob(0,"nx-dropdown-item",6),2&n&&a.kc("nxValue",e.$implicit)}var O,h=((O=function n(){o(this,n),this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}).\u0275fac=function(n){return new(n||O)},O.\u0275cmp=a.Hb({type:O,selectors:[["dropdown-filter-example"]],decls:6,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["nxLabel","Car brand"],["nxFilterPlaceholder","Type to search car",3,"nxShowFilter"],[3,"nxValue",4,"ngFor","ngForOf"],[3,"nxValue"]],template:function(n,e){1&n&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"nx-formfield",3),a.Tb(4,"nx-dropdown",4),a.Hc(5,y,1,1,"nx-dropdown-item",5),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&n&&(a.Bb(4),a.kc("nxShowFilter",!0),a.Bb(1),a.kc("ngForOf",e.demoData))},directives:[b.a,l.a,c.a,u.b,x.a,m.s,f.a],styles:[""]}),O);function M(n,e){1&n&&a.Ob(0,"nx-dropdown-item",6),2&n&&a.kc("nxValue",e.$implicit)}var B,F,k=((B=function(){function n(){o(this,n),this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}return e(n,[{key:"myFilter",value:function(n,e){return null!==e.match(new RegExp("^"+n,"g"))}}]),n}()).\u0275fac=function(n){return new(n||B)},B.\u0275cmp=a.Hb({type:B,selectors:[["dropdown-filter-custom-example"]],decls:6,vars:3,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["nxLabel","Car brand"],["nxFilterPlaceholder","Type to search car",3,"nxShowFilter","filterFn"],[3,"nxValue",4,"ngFor","ngForOf"],[3,"nxValue"]],template:function(n,e){1&n&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"nx-formfield",3),a.Tb(4,"nx-dropdown",4),a.Hc(5,M,1,1,"nx-dropdown-item",5),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&n&&(a.Bb(4),a.kc("nxShowFilter",!0)("filterFn",e.myFilter),a.Bb(1),a.kc("ngForOf",e.demoData))},directives:[b.a,l.a,c.a,u.b,x.a,m.s,f.a],styles:[""]}),B),C=i("dba+"),L=((F=function n(){o(this,n),this.testBind="Catfish"}).\u0275fac=function(n){return new(n||F)},F.\u0275cmp=a.Hb({type:F,selectors:[["dropdown-group-example"]],decls:13,vars:1,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["nxLabel","Animals"],[3,"nxValue","nxValueChange"],["nxLabel","Birds"],["disabled","true","nxValue","Parrot"],["nxValue","Pidgin"],["nxValue","Swallow"],["nxLabel","Fish"],["nxValue","Salmon"],["nxValue","Mackerel"],["nxValue","Catfish"]],template:function(n,e){1&n&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"nx-formfield",3),a.Tb(4,"nx-dropdown",4),a.ac("nxValueChange",(function(n){return e.testBind=n})),a.Tb(5,"nx-dropdown-group",5),a.Ob(6,"nx-dropdown-item",6),a.Ob(7,"nx-dropdown-item",7),a.Ob(8,"nx-dropdown-item",8),a.Sb(),a.Tb(9,"nx-dropdown-group",9),a.Ob(10,"nx-dropdown-item",10),a.Ob(11,"nx-dropdown-item",11),a.Ob(12,"nx-dropdown-item",12),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&n&&(a.Bb(4),a.kc("nxValue",e.testBind))},directives:[b.a,l.a,c.a,u.b,x.a,C.a,f.a],styles:[""]}),F);function D(n,e){1&n&&a.Ob(0,"nx-dropdown-item",12),2&n&&a.kc("nxValue",e.$implicit)}var J,A,W=((A=function(){function n(){o(this,n),this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}return e(n,[{key:"toText",value:function(n){return n?n.toUpperCase():null}},{key:"toTextMulti",value:function(n){return n?Array.isArray(n)?n.map((function(n){return n.toUpperCase()})).join(", "):n.toUpperCase():""}},{key:"myFilter",value:function(n,e){return null!==e.match(new RegExp("^"+n,"g"))}}]),n}()).\u0275fac=function(n){return new(n||A)},A.\u0275cmp=a.Hb({type:A,selectors:[["dropdown-multi-select-example"]],decls:24,vars:5,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 4"],["nxLabel","Car brand"],[3,"nxValueFormatter","nxIsMultiselect"],[3,"nxValue",4,"ngFor","ngForOf"],[3,"nxIsMultiselect"],["disabled","true","nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],["nxValue","BMW"],[3,"nxValue"]],template:function(n,e){1&n&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"nx-formfield",3),a.Tb(4,"nx-dropdown",4),a.Hc(5,D,1,1,"nx-dropdown-item",5),a.Sb(),a.Sb(),a.Sb(),a.Tb(6,"div",2),a.Tb(7,"nx-formfield",3),a.Tb(8,"nx-dropdown",6),a.Tb(9,"nx-dropdown-item",7),a.Jc(10,"B"),a.Sb(),a.Tb(11,"nx-dropdown-item",8),a.Jc(12,"A"),a.Sb(),a.Tb(13,"nx-dropdown-item",9),a.Jc(14,"V"),a.Sb(),a.Tb(15,"nx-dropdown-item",10),a.Jc(16,"M"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(17,"div",2),a.Tb(18,"nx-formfield",3),a.Tb(19,"nx-dropdown",6),a.Ob(20,"nx-dropdown-item",11),a.Ob(21,"nx-dropdown-item",8),a.Ob(22,"nx-dropdown-item",9),a.Ob(23,"nx-dropdown-item",10),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&n&&(a.Bb(4),a.kc("nxValueFormatter",e.toTextMulti)("nxIsMultiselect",!0),a.Bb(1),a.kc("ngForOf",e.demoData),a.Bb(3),a.kc("nxIsMultiselect",!0),a.Bb(11),a.kc("nxIsMultiselect",!0))},directives:[b.a,l.a,c.a,u.b,x.a,m.s,f.a],styles:[""]}),A),P=((J=function n(){o(this,n)}).\u0275fac=function(n){return new(n||J)},J.\u0275cmp=a.Hb({type:J,selectors:[["dropdown-negative-example"]],decls:17,vars:1,consts:[[1,"docs-inverse-container"],["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["nxLabel","Car brand","nxStyle","negative"],["nxStyle","negative"],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],["nxStyle","negative",3,"nxDisabled"]],template:function(n,e){1&n&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"div",3),a.Tb(4,"nx-formfield",4),a.Tb(5,"nx-dropdown",5),a.Ob(6,"nx-dropdown-item",6),a.Ob(7,"nx-dropdown-item",7),a.Ob(8,"nx-dropdown-item",8),a.Ob(9,"nx-dropdown-item",9),a.Sb(),a.Sb(),a.Sb(),a.Tb(10,"div",3),a.Tb(11,"nx-formfield",4),a.Tb(12,"nx-dropdown",10),a.Ob(13,"nx-dropdown-item",6),a.Ob(14,"nx-dropdown-item",7),a.Ob(15,"nx-dropdown-item",8),a.Ob(16,"nx-dropdown-item",9),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&n&&(a.Bb(12),a.kc("nxDisabled",!0))},directives:[b.a,l.a,c.a,u.b,x.a,f.a],styles:[""]}),J),H=i("ImiB");function R(n,e){1&n&&a.Ob(0,"nx-dropdown-item",12),2&n&&a.kc("nxValue",e.$implicit)}function I(n,e){1&n&&a.Ob(0,"nx-dropdown-item",12),2&n&&a.kc("nxValue",e.$implicit)}function U(n,e){1&n&&a.Ob(0,"nx-dropdown-item",12),2&n&&a.kc("nxValue",e.$implicit)}function $(n,e){1&n&&a.Ob(0,"nx-dropdown-item",12),2&n&&a.kc("nxValue",e.$implicit)}function K(n,e){if(1&n&&(a.Tb(0,"nx-dropdown-group",13),a.Hc(1,$,1,1,"nx-dropdown-item",5),a.Sb()),2&n){var o=e.$implicit;a.kc("nxLabel",o.label),a.Bb(1),a.kc("ngForOf",o.items)}}var E,j=((E=function n(){o(this,n),this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"],this.demoGroupData=[{label:"Birds",items:["Parrot","Pidgin","Swallow"]},{label:"Fish",items:["Salmon","Mackerel","Catfish"]}],this.testBind="Catfish"}).\u0275fac=function(n){return new(n||E)},E.\u0275cmp=a.Hb({type:E,selectors:[["dropdown-outline-example"]],features:[a.Ab([{provide:r.a,useValue:{appearance:"outline",nxFloatLabel:"always"}}])],decls:27,vars:7,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 6"],["nxHeadline","subsection-xsmall"],["nxLabel","Car brand"],[3,"nxValue",4,"ngFor","ngForOf"],[3,"nxIsMultiselect"],["nxCol","12,12,6"],["nxFilterPlaceholder","Type to search car",3,"nxShowFilter"],["nxLabel","Animals"],[3,"nxValue","nxValueChange"],[3,"nxLabel",4,"ngFor","ngForOf"],[3,"nxValue"],[3,"nxLabel"]],template:function(n,e){1&n&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"h4",3),a.Jc(4,"Standard dropdown"),a.Sb(),a.Tb(5,"nx-formfield",4),a.Tb(6,"nx-dropdown"),a.Hc(7,R,1,1,"nx-dropdown-item",5),a.Sb(),a.Sb(),a.Sb(),a.Tb(8,"div",2),a.Tb(9,"h4",3),a.Jc(10,"Multi select dropdown"),a.Sb(),a.Tb(11,"nx-formfield",4),a.Tb(12,"nx-dropdown",6),a.Hc(13,I,1,1,"nx-dropdown-item",5),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(14,"div",1),a.Tb(15,"div",7),a.Tb(16,"h4",3),a.Jc(17,"Filter dropdown"),a.Sb(),a.Tb(18,"nx-formfield",4),a.Tb(19,"nx-dropdown",8),a.Hc(20,U,1,1,"nx-dropdown-item",5),a.Sb(),a.Sb(),a.Sb(),a.Tb(21,"div",7),a.Tb(22,"h4",3),a.Jc(23,"Group dropdown"),a.Sb(),a.Tb(24,"nx-formfield",9),a.Tb(25,"nx-dropdown",10),a.ac("nxValueChange",(function(n){return e.testBind=n})),a.Hc(26,K,2,2,"nx-dropdown-group",11),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&n&&(a.Bb(7),a.kc("ngForOf",e.demoData),a.Bb(5),a.kc("nxIsMultiselect",!0),a.Bb(1),a.kc("ngForOf",e.demoData),a.Bb(6),a.kc("nxShowFilter",!0),a.Bb(1),a.kc("ngForOf",e.demoData),a.Bb(5),a.kc("nxValue",e.testBind),a.Bb(1),a.kc("ngForOf",e.demoGroupData))},directives:[b.a,l.a,c.a,H.a,u.b,x.a,m.s,f.a,C.a],styles:["[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:12px}"]}),E);function _(n,e){1&n&&a.Ob(0,"nx-dropdown-item",7),2&n&&a.kc("nxValue",e.$implicit)}function q(n,e){1&n&&a.Ob(0,"nx-dropdown-item",7),2&n&&a.kc("nxValue",e.$implicit)}var G,N,Y=((G=function n(){o(this,n),this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}).\u0275fac=function(n){return new(n||G)},G.\u0275cmp=a.Hb({type:G,selectors:[["dropdown-placeholder-example"]],decls:10,vars:2,consts:[["nxLayout","grid"],["nxRow","",2,"align-items","flex-end"],["nxCol","12, 12, 6"],["nxLabel","Car brand"],["placeholder","Choose a car brand"],[3,"nxValue",4,"ngFor","ngForOf"],["nxLabel","Car brand","appearance","outline"],[3,"nxValue"]],template:function(n,e){1&n&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"nx-formfield",3),a.Tb(4,"nx-dropdown",4),a.Hc(5,_,1,1,"nx-dropdown-item",5),a.Sb(),a.Sb(),a.Sb(),a.Tb(6,"div",2),a.Tb(7,"nx-formfield",6),a.Tb(8,"nx-dropdown",4),a.Hc(9,q,1,1,"nx-dropdown-item",5),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&n&&(a.Bb(5),a.kc("ngForOf",e.demoData),a.Bb(4),a.kc("ngForOf",e.demoData))},directives:[b.a,l.a,c.a,u.b,x.a,m.s,f.a],styles:[""]}),G),X=i("yUsN"),z=i("MXpF"),Q=i("jyNi"),Z=i("tPQ2"),nn=((N=function(){function n(){o(this,n),this.form=(new p.d).group({dropdown:["BMW",p.y.required]})}return e(n,[{key:"patch",value:function(n){this.form.patchValue({dropdown:n})}}]),n}()).\u0275fac=function(n){return new(n||N)},N.\u0275cmp=a.Hb({type:N,selectors:[["dropdown-reactive-example"]],decls:31,vars:7,consts:[[3,"formGroup"],["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["nxLabel","Car brand"],["formControlName","dropdown"],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],["nxFormfieldError",""],["nxContext","info","nxFormfieldNote",""],["nxCol","12"],[1,"update-container"],["type","text"],["reactiveInput",""],["nxButton","primary small","type","button",1,"nx-margin-bottom-0",3,"click"]],template:function(n,e){if(1&n){var o=a.Ub();a.Tb(0,"form",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"div",3),a.Tb(4,"nx-formfield",4),a.Tb(5,"nx-dropdown",5),a.Tb(6,"nx-dropdown-item"),a.Jc(7,"CLEAR VALUE"),a.Sb(),a.Ob(8,"nx-dropdown-item",6),a.Ob(9,"nx-dropdown-item",7),a.Ob(10,"nx-dropdown-item",8),a.Ob(11,"nx-dropdown-item",9),a.Sb(),a.Tb(12,"nx-error",10),a.Jc(13," Please select a value "),a.Sb(),a.Tb(14,"nx-message",11),a.Jc(15," This field is required "),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(16,"div",2),a.Tb(17,"div",12),a.Tb(18,"p"),a.Jc(19),a.fc(20,"json"),a.Sb(),a.Tb(21,"p"),a.Jc(22),a.fc(23,"json"),a.Sb(),a.Tb(24,"p"),a.Jc(25,"Try to set the value to BMW, Audi, Volvo or Mini."),a.Sb(),a.Tb(26,"div",13),a.Ob(27,"input",14,15),a.Tb(29,"button",16),a.ac("click",(function(){a.vc(o);var n=a.rc(28);return e.patch(n.value)})),a.Jc(30," Update "),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()}2&n&&(a.kc("formGroup",e.form),a.Bb(19),a.Lc("Form value: ",a.gc(20,3,e.form.value),""),a.Bb(3),a.Lc("Form status: ",a.gc(23,5,e.form.status),""))},directives:[p.A,p.q,p.i,b.a,l.a,c.a,u.b,x.a,p.p,p.g,f.a,X.b,z.a,Q.a,Z.a],pipes:[m.k],styles:["button[_ngcontent-%COMP%]{margin-left:4px}.update-container[_ngcontent-%COMP%]{display:flex}"]}),N);function en(n,e){1&n&&a.Ob(0,"nx-dropdown-item",10),2&n&&a.kc("nxValue",e.$implicit)}var on,tn,rn=((tn=function(){function n(){o(this,n),this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}return e(n,[{key:"toText",value:function(n){return n?n.toUpperCase():null}}]),n}()).\u0275fac=function(n){return new(n||tn)},tn.\u0275cmp=a.Hb({type:tn,selectors:[["dropdown-rendering-items-example"]],decls:24,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 4"],["nxLabel","Car brand"],[3,"nxValueFormatter"],[3,"nxValue",4,"ngFor","ngForOf"],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],[3,"nxValue"]],template:function(n,e){1&n&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"nx-formfield",3),a.Tb(4,"nx-dropdown",4),a.Hc(5,en,1,1,"nx-dropdown-item",5),a.Sb(),a.Sb(),a.Sb(),a.Tb(6,"div",2),a.Tb(7,"nx-formfield",3),a.Tb(8,"nx-dropdown"),a.Tb(9,"nx-dropdown-item",6),a.Jc(10,"B"),a.Sb(),a.Tb(11,"nx-dropdown-item",7),a.Jc(12,"A"),a.Sb(),a.Tb(13,"nx-dropdown-item",8),a.Jc(14,"V"),a.Sb(),a.Tb(15,"nx-dropdown-item",9),a.Jc(16,"M"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(17,"div",2),a.Tb(18,"nx-formfield",3),a.Tb(19,"nx-dropdown"),a.Ob(20,"nx-dropdown-item",6),a.Ob(21,"nx-dropdown-item",7),a.Ob(22,"nx-dropdown-item",8),a.Ob(23,"nx-dropdown-item",9),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&n&&(a.Bb(4),a.kc("nxValueFormatter",e.toText),a.Bb(1),a.kc("ngForOf",e.demoData))},directives:[b.a,l.a,c.a,u.b,x.a,m.s,f.a],styles:[""]}),tn),dn=((on=function n(){o(this,n),this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"],this.simpleBinding="Audi"}).\u0275fac=function(n){return new(n||on)},on.\u0275cmp=a.Hb({type:on,selectors:[["dropdown-simple-binding-example"]],decls:21,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["nxLabel","Car brand"],[3,"nxValue","nxValueChange"],["simpleDropdown",""],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],["nxCol","12"],[1,"update-container"],["type","text"],["simpleInput",""],["nxButton","primary small","type","button",1,"nx-margin-bottom-0",3,"click"]],template:function(n,e){if(1&n){var o=a.Ub();a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"nx-formfield",3),a.Tb(4,"nx-dropdown",4,5),a.ac("nxValueChange",(function(n){return e.simpleBinding=n})),a.Ob(6,"nx-dropdown-item",6),a.Ob(7,"nx-dropdown-item",7),a.Ob(8,"nx-dropdown-item",8),a.Ob(9,"nx-dropdown-item",9),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(10,"div",1),a.Tb(11,"div",10),a.Tb(12,"p"),a.Jc(13),a.Sb(),a.Tb(14,"p"),a.Jc(15,"Try to set the value to BMW, Audi, Volvo or Mini."),a.Sb(),a.Tb(16,"div",11),a.Ob(17,"input",12,13),a.Tb(19,"button",14),a.ac("click",(function(){a.vc(o);var n=a.rc(18);return e.simpleBinding=n.value})),a.Jc(20," Update "),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()}if(2&n){var t=a.rc(5);a.Bb(4),a.kc("nxValue",e.simpleBinding),a.Bb(9),a.Lc("Model value is: ",t.value,"")}},directives:[b.a,l.a,c.a,u.b,x.a,f.a,Z.a],styles:["button[_ngcontent-%COMP%]{margin-left:4px}.update-container[_ngcontent-%COMP%]{display:flex}"]}),on);function an(n,e){1&n&&a.Ob(0,"nx-dropdown-item",11),2&n&&a.kc("nxValue",e.$implicit)}var bn,ln,cn,un=((ln=function(){function n(){o(this,n),this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}return e(n,[{key:"toText",value:function(n){return n?n.toUpperCase():null}}]),n}()).\u0275fac=function(n){return new(n||ln)},ln.\u0275cmp=a.Hb({type:ln,selectors:[["dropdown-standard-example"]],decls:13,vars:3,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 6"],["nxLabel","Car brand"],[3,"nxValueFormatter"],[3,"nxValue",4,"ngFor","ngForOf"],[3,"nxDisabled"],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],[3,"nxValue"]],template:function(n,e){1&n&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"nx-formfield",3),a.Tb(4,"nx-dropdown",4),a.Hc(5,an,1,1,"nx-dropdown-item",5),a.Sb(),a.Sb(),a.Sb(),a.Tb(6,"div",2),a.Tb(7,"nx-formfield",3),a.Tb(8,"nx-dropdown",6),a.Ob(9,"nx-dropdown-item",7),a.Ob(10,"nx-dropdown-item",8),a.Ob(11,"nx-dropdown-item",9),a.Ob(12,"nx-dropdown-item",10),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&n&&(a.Bb(4),a.kc("nxValueFormatter",e.toText),a.Bb(1),a.kc("ngForOf",e.demoData),a.Bb(3),a.kc("nxDisabled",!0))},directives:[b.a,l.a,c.a,u.b,x.a,m.s,f.a],styles:[""]}),ln),xn=((bn=function n(){o(this,n),this.ngModelBinding="Mini"}).\u0275fac=function(n){return new(n||bn)},bn.\u0275cmp=a.Hb({type:bn,selectors:[["dropdown-template-driven-example"]],decls:25,vars:5,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["nxLabel","Car brand"],["name","test",3,"ngModel","ngModelChange"],["ngModelDropdown",""],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],["nxCol","12"],[1,"update-container"],["type","text"],["templateInput",""],["nxButton","primary small","type","button",1,"nx-margin-bottom-0",3,"click"]],template:function(n,e){if(1&n){var o=a.Ub();a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"form"),a.Tb(4,"nx-formfield",3),a.Tb(5,"nx-dropdown",4,5),a.ac("ngModelChange",(function(n){return e.ngModelBinding=n})),a.Ob(7,"nx-dropdown-item",6),a.Ob(8,"nx-dropdown-item",7),a.Ob(9,"nx-dropdown-item",8),a.Ob(10,"nx-dropdown-item",9),a.Sb(),a.Sb(),a.Sb(),a.Tb(11,"p"),a.Jc(12),a.Sb(),a.Tb(13,"p"),a.Jc(14),a.fc(15,"json"),a.Sb(),a.Sb(),a.Sb(),a.Tb(16,"div",1),a.Tb(17,"div",10),a.Tb(18,"p"),a.Jc(19,"Try to set the value to BMW, Audi, Volvo or Mini."),a.Sb(),a.Tb(20,"div",11),a.Ob(21,"input",12,13),a.Tb(23,"button",14),a.ac("click",(function(){a.vc(o);var n=a.rc(22);return e.ngModelBinding=n.value})),a.Jc(24," Update "),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()}if(2&n){var t=a.rc(6);a.Bb(5),a.kc("ngModel",e.ngModelBinding),a.Bb(7),a.Lc("Current Value: ",t.value,""),a.Bb(2),a.Lc("Model: ",a.gc(15,3,e.ngModelBinding),"")}},directives:[b.a,l.a,c.a,p.A,p.q,p.r,u.b,x.a,p.p,p.s,f.a,Z.a],pipes:[m.k],styles:["button[_ngcontent-%COMP%]{margin-left:4px}.update-container[_ngcontent-%COMP%]{display:flex}"]}),bn),pn=i("t3RA"),sn=((cn=function(){function n(){o(this,n)}return e(n,null,[{key:"components",value:function(){return{"dropdown-custom-label":g,"dropdown-disabled-items":V,"dropdown-filter":h,"dropdown-filter-custom":k,"dropdown-group":L,"dropdown-multi-select":W,"dropdown-negative":P,"dropdown-outline":j,"dropdown-placeholder":Y,"dropdown-reactive":nn,"dropdown-rendering-items":rn,"dropdown-simple-binding":dn,"dropdown-standard":un,"dropdown-template-driven":xn}}}]),n}()).\u0275mod=a.Lb({type:cn}),cn.\u0275inj=a.Kb({factory:function(n){return new(n||cn)},imports:[[d.b,r.e,pn.a]]}),cn)},t3RA:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var i=t("ohqM"),r=t("4TwE"),d=t("aln5"),a=t("kPBv"),b=t("2kYt"),l=t("nIj0"),c=t("EM62"),u=function(){var n=function n(){o(this,n)};return n.\u0275mod=c.Lb({type:n}),n.\u0275inj=c.Kb({factory:function(e){return new(e||n)},imports:[[],b.c,l.k,l.v,a.b,d.a,r.a,i.a]}),n}()}}])}();