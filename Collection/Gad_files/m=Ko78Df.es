this._s=this._s||{};(function(_){var window=this;
try{
_.q("Ko78Df");
var xcy=class{constructor(a){this.state=a}getId(){return this.state.id}getPushId(){return this.state.pushId}getUrl(){return this.state.url}getUserData(){return this.state.userData}};
_.Vo(_.DXa,class extends _.To{static Ra(){return{service:{history:_.I7a}}}constructor(a){super();this.history=a.service.history;this.Sr=document.body;this.oa=new Map;this.history.addListener((b,c,d)=>{if(d.baa)for(const e of d.baa)if(this.oa.has(e.id)){const f=this.oa.get(e.id);f&&_.Bn(()=>{f(e.XEa)});this.oa.delete(e.id)}d.userInitiated&&this.Sr.dispatchEvent(new CustomEvent("FWkcec"))})}pushAsync(a,b,c,d){a=d?this.history.oa(a,b):this.history.pushAsync(a,b);return Promise.resolve(a.then(e=>{c&&
this.oa.set(e.id,c);return e.id}))}pop(a,b){a=b?this.history.Ca(a):this.history.pop(a);return Promise.resolve(a.then(c=>c?new xcy(c):null))}getState(){const a=this.history.getState();return a?new xcy(a):null}getCurrentUrl(){return this.history.getCurrentUrl()}getEventTarget(){return this.Sr}});
_.u();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
