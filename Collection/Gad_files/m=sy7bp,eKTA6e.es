this._s=this._s||{};(function(_){var window=this;
try{
_.lFx=_.w("eKTA6e",[_.Ro]);
}catch(e){_._DumpException(e)}
try{
_.q("eKTA6e");
var SbD=function(a){var b;const c=(b=a.Sw.find("#fbarcnt"))==null?void 0:b.qb();c!=null&&(b=c.getBoundingClientRect(),a.oa=b.top>=window.innerHeight?0:b.bottom<=window.innerHeight?c.offsetHeight:Math.abs(b.top-window.innerHeight))},TbD=function(a){const b=a.Sw.find("#searchform").qb();if(b!=null){let e;const f=(e=a.Sw.find("#UpCcGe"))==null?void 0:e.qb();if(f!=null&&f.getBoundingClientRect().bottom>=82||b.classList.contains("minidiv"))if(b.classList.contains("minidiv")){var c,d=(c=a.getRoot().parent())==
null?void 0:c.qb();c=d!=null?d.offsetWidth:0;d=a.getRoot().qb().getBoundingClientRect().y;a.getRoot().setStyle({top:"82px",position:"fixed",width:`${c}px`,height:`calc(100vh - ${d+a.oa+24}px)`})}else a.getRoot().setStyle({top:"0px",position:"",width:"",height:`calc(100vh - ${a.Aa+a.oa+24}px)`});else c=(d=a.getRoot().parent())==null?void 0:d.qb(),c=c!=null?c.offsetWidth:0,d=a.getRoot().qb().getBoundingClientRect().y,a.getRoot().setStyle({top:"94px",position:"fixed",width:`${c}px`,height:`calc(100vh - ${d+
a.oa+24}px)`})}},UbD=class extends _.zg{static Ra(){return{service:{window:_.Uo}}}constructor(a){super(a.Oa);this.oa=this.Aa=0;this.Sw=a.service.window;_.Ug(this.getData("esm"),!1)&&(SbD(this),this.Aa=this.getRoot().qb().getBoundingClientRect().y+window.scrollY,this.getRoot().setStyle({height:`calc(100vh - ${this.Aa+this.oa+24}px)`,"max-width":"100%"}),window.addEventListener("scroll",()=>{SbD(this);TbD(this)}),window.addEventListener("resize",()=>{SbD(this);TbD(this)}),_.Mf(document.body,_.EJf,()=>
{SbD(this);TbD(this)}))}Ba(){var a=this.Xa("Ij5xHc");a&&a.setStyle({opacity:"0",transition:"0.3s ease-out 0.5s",visibility:"hidden"});_.Ug(this.getData("esm"),!1)&&(a=this.Xa("Zaj5Ze"))&&a.setStyle({display:"none"})}};_.J(UbD.prototype,"szHr9c",function(){return this.Ba});_.P(_.lFx,UbD);
_.u();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
