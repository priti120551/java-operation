"use strict";loaded_1_15(function(_){var window=this;
_.p("uveYne");
var ARm=function(a,b,c){a.oa.set(b,c)},BRm=new function(){this.cache=new Set};_.I7=function(a){_.ni.call(this,a.Wa);this.oa=_.dv(a.model.Zh);this.Ym=a.service.Ym;this.La=a.service.Lnb};_.H(_.I7,_.ni);_.I7.Ka=function(){return{model:{Zh:_.cv},service:{Lnb:_.t4b,Ym:_.aw,tB:_.ZHe}}};
_.I7.prototype.Na=function(a){var b=this.getRoot().wb();ARm(this.La,this.oa,this.Ea());BRm.cache.has(this.oa)?b.style.animation="none":(BRm.cache.add(this.oa),b.addEventListener("animationend",function(){b.style.animation="none"}),b.addEventListener("animationcancel",function(){b.style.animation="none"}));a.data.yZc&&_.$7b(this.Ym,this.oa)};
_.I7.prototype.Ea=function(){var a={},b=_.Pt(_.op(this.getRoot(),"N9Xkfe"));b=_.gc(b);for(var c=b.next();!c.done;c=b.next()){var d=c.value;c=d.dataset.ved;d=d.dataset.tbnid;c&&d&&(a[d]=c)}return a};_.I7.prototype.Ha=function(a){_.$He(a.targetElement)};_.I7.prototype.Aa=function(){};_.L(_.I7.prototype,"NMdhcc",function(){return this.Aa});_.L(_.I7.prototype,"SjNcmb",function(){return this.Ha});_.L(_.I7.prototype,"Rq6fF",function(){return this.Ea});_.L(_.I7.prototype,"DmdRif",function(){return this.Na});
_.Nt(_.shb,_.I7);
_.r();
});
// Google Inc.
