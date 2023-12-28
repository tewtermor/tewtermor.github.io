import{L as F,M as g,N as D,r as L,O as qe,e as H,H as W,P as le,Q as Fe,R as P,c,S as O,T as be,U as ue,V as Je,W as Ke,X as Qe,z as f,Y as Ze,Z as ce,$ as M,a0 as E,a1 as A,a2 as xe,a3 as I,a4 as et,a5 as we,a6 as tt,a7 as nt,a8 as st,o as at,a9 as _e,aa as it,ab as ot,ac as rt,ad as lt,ae as S,af as J,ag as ut,ah as ct,ai as dt,aj as vt,ak as ft,F as ht,al as mt,am as gt,an as de,ao as pt,ap as yt,aq as ve,ar as Ct,as as bt,_ as xt,v as wt,x as j,at as fe,A as _t,t as St,B as kt}from"./entry.aa7f2912.js";const It=["top","bottom"],Tt=["start","end","left","right"];function Pt(e,t){let[s,n]=e.split(" ");return n||(n=F(It,s)?"start":F(Tt,s)?"top":"center"),{side:he(s,t),align:he(n,t)}}function he(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const G=g({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function N(e){const t=D("useRender");t.render=e}function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const s=L(),n=L();if(qe){const i=new ResizeObserver(a=>{e==null||e(a,i),a.length&&(t==="content"?n.value=a[0].contentRect:n.value=a[0].target.getBoundingClientRect())});H(()=>{i.disconnect()}),W(s,(a,o)=>{o&&(i.unobserve(le(o)),n.value=void 0),a&&i.observe(le(a))},{flush:"post"})}return{resizeRef:s,contentRect:Fe(n)}}const Se=g({border:[Boolean,Number,String]},"border");function ke(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{borderClasses:c(()=>{const n=O(e)?e.value:e.border,i=[];if(n===!0||n==="")i.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const a of String(n).split(" "))i.push(`border-${a}`);return i})}}const Bt=[null,"default","comfortable","compact"],Ie=g({density:{type:String,default:"default",validator:e=>Bt.includes(e)}},"density");function Te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const Pe=g({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ee(e){return{elevationClasses:c(()=>{const s=O(e)?e.value:e.elevation,n=[];return s==null||n.push(`elevation-${s}`),n})}}const Be=g({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Le(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{roundedClasses:c(()=>{const n=O(e)?e.value:e.rounded,i=[];if(n===!0||n==="")i.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const a of String(n).split(" "))i.push(`rounded-${a}`);return i})}}const U=g({tag:{type:String,default:"div"}},"tag");function Ve(e){return be(()=>{const t=[],s={};if(e.value.background)if(ue(e.value.background)){if(s.backgroundColor=e.value.background,!e.value.text&&Je(e.value.background)){const n=Ke(e.value.background);if(n.a==null||n.a===1){const i=Qe(n);s.color=i,s.caretColor=i}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(ue(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:s}})}function K(e,t){const s=c(()=>({text:O(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=Ve(s);return{textColorClasses:n,textColorStyles:i}}const Lt=["elevated","flat","tonal","outlined","text","plain"];function Vt(e,t){return f(Ze,null,[e&&f("span",{key:"overlay",class:`${t}__overlay`},null),f("span",{key:"underlay",class:`${t}__underlay`},null)])}const Re=g({color:String,variant:{type:String,default:"elevated",validator:e=>Lt.includes(e)}},"variant");function Rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();const s=c(()=>{const{variant:a}=ce(e);return`${t}--variant-${a}`}),{colorClasses:n,colorStyles:i}=Ve(c(()=>{const{variant:a,color:o}=ce(e);return{[["elevated","flat"].includes(a)?"background":"text"]:o}}));return{colorClasses:n,colorStyles:i,variantClasses:s}}const Ne=g({divided:Boolean,...Se(),...G(),...Ie(),...Pe(),...Be(),...U(),...M(),...Re()},"VBtnGroup"),me=E()({name:"VBtnGroup",props:Ne(),setup(e,t){let{slots:s}=t;const{themeClasses:n}=A(e),{densityClasses:i}=Te(e),{borderClasses:a}=ke(e),{elevationClasses:o}=Ee(e),{roundedClasses:d}=Le(e);xe({VBtn:{height:"auto",color:I(e,"color"),density:I(e,"density"),flat:!0,variant:I(e,"variant")}}),N(()=>f(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,a.value,i.value,o.value,d.value,e.class],style:e.style},s))}}),Nt=g({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),$t=g({value:null,disabled:Boolean,selectedClass:String},"group-item");function zt(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=D("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=et();we(Symbol.for(`${t.description}:id`),i);const a=tt(t,null);if(!a){if(!s)return a;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const o=I(e,"value"),d=c(()=>!!(a.disabled.value||e.disabled));a.register({id:i,value:o,disabled:d},n),H(()=>{a.unregister(i)});const r=c(()=>a.isSelected(i)),m=c(()=>r.value&&[a.selectedClass.value,e.selectedClass]);return W(r,p=>{n.emit("group:selected",{value:p})}),{id:i,isSelected:r,toggle:()=>a.select(i,!r.value),select:p=>a.select(i,p),selectedClass:m,value:o,disabled:d,group:a}}function Dt(e,t){let s=!1;const n=nt([]),i=st(e,"modelValue",[],l=>l==null?[]:$e(n,ot(l)),l=>{const u=Wt(n,l);return e.multiple?u:u[0]}),a=D("useGroup");function o(l,u){const y=l,h=Symbol.for(`${t.description}:id`),w=it(h,a==null?void 0:a.vnode).indexOf(u);w>-1?n.splice(w,0,y):n.push(y)}function d(l){if(s)return;r();const u=n.findIndex(y=>y.id===l);n.splice(u,1)}function r(){const l=n.find(u=>!u.disabled);l&&e.mandatory==="force"&&!i.value.length&&(i.value=[l.id])}at(()=>{r()}),H(()=>{s=!0});function m(l,u){const y=n.find(h=>h.id===l);if(!(u&&(y!=null&&y.disabled)))if(e.multiple){const h=i.value.slice(),x=h.findIndex(v=>v===l),w=~x;if(u=u??!w,w&&e.mandatory&&h.length<=1||!w&&e.max!=null&&h.length+1>e.max)return;x<0&&u?h.push(l):x>=0&&!u&&h.splice(x,1),i.value=h}else{const h=i.value.includes(l);if(e.mandatory&&h)return;i.value=u??!h?[l]:[]}}function p(l){if(e.multiple,i.value.length){const u=i.value[0],y=n.findIndex(w=>w.id===u);let h=(y+l)%n.length,x=n[h];for(;x.disabled&&h!==y;)h=(h+l)%n.length,x=n[h];if(x.disabled)return;i.value=[n[h].id]}else{const u=n.find(y=>!y.disabled);u&&(i.value=[u.id])}}const C={register:o,unregister:d,selected:i,select:m,disabled:I(e,"disabled"),prev:()=>p(n.length-1),next:()=>p(1),isSelected:l=>i.value.includes(l),selectedClass:c(()=>e.selectedClass),items:c(()=>n),getItemIndex:l=>Ht(n,l)};return we(t,C),C}function Ht(e,t){const s=$e(e,[t]);return s.length?e.findIndex(n=>n.id===s[0]):-1}function $e(e,t){const s=[];return t.forEach(n=>{const i=e.find(o=>_e(n,o.value)),a=e[n];(i==null?void 0:i.value)!=null?s.push(i.id):a!=null&&s.push(a.id)}),s}function Wt(e,t){const s=[];return t.forEach(n=>{const i=e.findIndex(a=>a.id===n);if(~i){const a=e[i];s.push(a.value!=null?a.value:i)}}),s}const ze=Symbol.for("vuetify:v-btn-toggle"),Ot=g({...Ne(),...Nt()},"VBtnToggle");E()({name:"VBtnToggle",props:Ot(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const{isSelected:n,next:i,prev:a,select:o,selected:d}=Dt(e,ze);return N(()=>{const r=me.filterProps(e);return f(me,rt({class:["v-btn-toggle",e.class]},r,{style:e.style}),{default:()=>{var m;return[(m=s.default)==null?void 0:m.call(s,{isSelected:n,next:i,prev:a,select:o,selected:d})]}})}),{next:i,prev:a,select:o}}});const Mt=g({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),X=E(!1)({name:"VDefaultsProvider",props:Mt(),setup(e,t){let{slots:s}=t;const{defaults:n,disabled:i,reset:a,root:o,scoped:d}=lt(e);return xe(n,{reset:a,root:o,scoped:d,disabled:i}),()=>{var r;return(r=s.default)==null?void 0:r.call(s)}}});const At=["x-small","small","default","large","x-large"],ee=g({size:{type:[String,Number],default:"default"}},"size");function te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return be(()=>{let s,n;return F(At,e.size)?s=`${t}--size-${e.size}`:e.size&&(n={width:S(e.size),height:S(e.size)}),{sizeClasses:s,sizeStyles:n}})}const Gt=g({color:String,start:Boolean,end:Boolean,icon:J,...G(),...ee(),...U({tag:"i"}),...M()},"VIcon"),q=E()({name:"VIcon",props:Gt(),setup(e,t){let{attrs:s,slots:n}=t;const i=L(),{themeClasses:a}=A(e),{iconData:o}=ut(c(()=>i.value||e.icon)),{sizeClasses:d}=te(e),{textColorClasses:r,textColorStyles:m}=K(I(e,"color"));return N(()=>{var C,l;const p=(C=n.default)==null?void 0:C.call(n);return p&&(i.value=(l=ct(p).filter(u=>u.type===dt&&u.children&&typeof u.children=="string")[0])==null?void 0:l.children),f(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",a.value,d.value,r.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[d.value?void 0:{fontSize:S(e.size),height:S(e.size),width:S(e.size)},m.value,e.style],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},{default:()=>[p]})}),{}}});function Ut(e,t){const s=L(),n=vt(!1);if(ft){const i=new IntersectionObserver(a=>{e==null||e(a,i),n.value=!!a.find(o=>o.isIntersecting)},t);H(()=>{i.disconnect()}),W(s,(a,o)=>{o&&(i.unobserve(o),n.value=!1),a&&i.observe(a)},{flush:"post"})}return{intersectionRef:s,isIntersecting:n}}const Yt=g({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...G(),...ee(),...U({tag:"div"}),...M()},"VProgressCircular"),jt=E()({name:"VProgressCircular",props:Yt(),setup(e,t){let{slots:s}=t;const n=20,i=2*Math.PI*n,a=L(),{themeClasses:o}=A(e),{sizeClasses:d,sizeStyles:r}=te(e),{textColorClasses:m,textColorStyles:p}=K(I(e,"color")),{textColorClasses:C,textColorStyles:l}=K(I(e,"bgColor")),{intersectionRef:u,isIntersecting:y}=Ut(),{resizeRef:h,contentRect:x}=Et(),w=c(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),v=c(()=>Number(e.width)),b=c(()=>r.value?Number(e.size):x.value?x.value.width:Math.max(v.value,32)),B=c(()=>n/(1-v.value/b.value)*2),T=c(()=>v.value/b.value*B.value),Y=c(()=>S((100-w.value)/100*i));return ht(()=>{u.value=a.value,h.value=a.value}),N(()=>f(e.tag,{ref:a,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":y.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},o.value,d.value,m.value,e.class],style:[r.value,p.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:w.value},{default:()=>[f("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${B.value} ${B.value}`},[f("circle",{class:["v-progress-circular__underlay",C.value],style:l.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":T.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),f("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":T.value,"stroke-dasharray":i,"stroke-dashoffset":Y.value},null)]),s.default&&f("div",{class:"v-progress-circular__content"},[s.default({value:w.value})])]})),{}}}),Xt=g({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function qt(e){return{dimensionStyles:c(()=>({height:S(e.height),maxHeight:S(e.maxHeight),maxWidth:S(e.maxWidth),minHeight:S(e.minHeight),minWidth:S(e.minWidth),width:S(e.width)}))}}const ge={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ft=g({location:String},"location");function Jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=mt();return{locationStyles:c(()=>{if(!e.location)return{};const{side:a,align:o}=Pt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function d(m){return s?s(m):0}const r={};return a!=="center"&&(t?r[ge[a]]=`calc(100% - ${d(a)}px)`:r[a]=0),o!=="center"?t?r[ge[o]]=`calc(100% - ${d(o)}px)`:r[o]=0:(a==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[a]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[a]),r})}}const Kt=g({loading:[Boolean,String]},"loader");function Qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{loaderClasses:c(()=>({[`${t}--loading`]:e.loading}))}}const Zt=["static","relative","fixed","absolute","sticky"],en=g({position:{type:String,validator:e=>Zt.includes(e)}},"position");function tn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{positionClasses:c(()=>e.position?`${t}--${e.position}`:void 0)}}function nn(){const e=D("useRoute");return c(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function sn(e,t){const s=gt("RouterLink"),n=c(()=>!!(e.href||e.to)),i=c(()=>(n==null?void 0:n.value)||de(t,"click")||de(e,"click"));if(typeof s=="string")return{isLink:n,isClickable:i,href:I(e,"href")};const a=e.to?s.useLink(e):void 0,o=nn();return{isLink:n,isClickable:i,route:a==null?void 0:a.route,navigate:a==null?void 0:a.navigate,isActive:a&&c(()=>{var d,r,m;return e.exact?o.value?((m=a.isExactActive)==null?void 0:m.value)&&_e(a.route.value.query,o.value.query):(r=a.isExactActive)==null?void 0:r.value:(d=a.isActive)==null?void 0:d.value}),href:c(()=>e.to?a==null?void 0:a.route.value.href:e.href)}}const an=g({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function on(e,t){W(()=>{var s;return(s=e.isActive)==null?void 0:s.value},s=>{e.isLink.value&&s&&t&&pt(()=>{t(!0)})},{immediate:!0})}const Q=Symbol("rippleStop"),rn=80;function pe(e,t){e.style.transform=t,e.style.webkitTransform=t}function Z(e){return e.constructor.name==="TouchEvent"}function De(e){return e.constructor.name==="KeyboardEvent"}const ln=function(e,t){var C;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!De(e)){const l=t.getBoundingClientRect(),u=Z(e)?e.touches[e.touches.length-1]:e;n=u.clientX-l.left,i=u.clientY-l.top}let a=0,o=.3;(C=t._ripple)!=null&&C.circle?(o=.15,a=t.clientWidth/2,a=s.center?a:a+Math.sqrt((n-a)**2+(i-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const d=`${(t.clientWidth-a*2)/2}px`,r=`${(t.clientHeight-a*2)/2}px`,m=s.center?d:`${n-a}px`,p=s.center?r:`${i-a}px`;return{radius:a,scale:o,x:m,y:p,centerX:d,centerY:r}},z={show(e,t){var u;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((u=t==null?void 0:t._ripple)!=null&&u.enabled))return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",s.class&&(n.className+=` ${s.class}`);const{radius:a,scale:o,x:d,y:r,centerX:m,centerY:p}=ln(e,t,s),C=`${a*2}px`;i.className="v-ripple__animation",i.style.width=C,i.style.height=C,t.appendChild(n);const l=window.getComputedStyle(t);l&&l.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),pe(i,`translate(${d}, ${r}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),pe(i,`translate(${m}, ${p}) scale3d(1,1,1)`)},0)},hide(e){var a;if(!((a=e==null?void 0:e._ripple)!=null&&a.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const s=t[t.length-1];if(s.dataset.isHiding)return;s.dataset.isHiding="true";const n=performance.now()-Number(s.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{s.classList.remove("v-ripple__animation--in"),s.classList.add("v-ripple__animation--out"),setTimeout(()=>{var d;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((d=s.parentNode)==null?void 0:d.parentNode)===e&&e.removeChild(s.parentNode)},300)},i)}};function He(e){return typeof e>"u"||!!e}function V(e){const t={},s=e.currentTarget;if(!(!(s!=null&&s._ripple)||s._ripple.touched||e[Q])){if(e[Q]=!0,Z(e))s._ripple.touched=!0,s._ripple.isTouch=!0;else if(s._ripple.isTouch)return;if(t.center=s._ripple.centered||De(e),s._ripple.class&&(t.class=s._ripple.class),Z(e)){if(s._ripple.showTimerCommit)return;s._ripple.showTimerCommit=()=>{z.show(e,s,t)},s._ripple.showTimer=window.setTimeout(()=>{var n;(n=s==null?void 0:s._ripple)!=null&&n.showTimerCommit&&(s._ripple.showTimerCommit(),s._ripple.showTimerCommit=null)},rn)}else z.show(e,s,t)}}function ye(e){e[Q]=!0}function _(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),z.hide(t)}}function We(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let R=!1;function Oe(e){!R&&(e.keyCode===ve.enter||e.keyCode===ve.space)&&(R=!0,V(e))}function Me(e){R=!1,_(e)}function Ae(e){R&&(R=!1,_(e))}function Ge(e,t,s){const{value:n,modifiers:i}=t,a=He(n);if(a||z.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=i.center,e._ripple.circle=i.circle,yt(n)&&n.class&&(e._ripple.class=n.class),a&&!s){if(i.stop){e.addEventListener("touchstart",ye,{passive:!0}),e.addEventListener("mousedown",ye);return}e.addEventListener("touchstart",V,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",We,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",V),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",Oe),e.addEventListener("keyup",Me),e.addEventListener("blur",Ae),e.addEventListener("dragstart",_,{passive:!0})}else!a&&s&&Ue(e)}function Ue(e){e.removeEventListener("mousedown",V),e.removeEventListener("touchstart",V),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",We),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",Oe),e.removeEventListener("keyup",Me),e.removeEventListener("dragstart",_),e.removeEventListener("blur",Ae)}function un(e,t){Ge(e,t,!1)}function cn(e){delete e._ripple,Ue(e)}function dn(e,t){if(t.value===t.oldValue)return;const s=He(t.oldValue);Ge(e,t,s)}const vn={mounted:un,unmounted:cn,updated:dn},fn=g({active:{type:Boolean,default:void 0},symbol:{type:null,default:ze},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:J,appendIcon:J,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Se(),...G(),...Ie(),...Xt(),...Pe(),...$t(),...Kt(),...Ft(),...en(),...Be(),...an(),...ee(),...U({tag:"button"}),...M(),...Re({variant:"elevated"})},"VBtn"),Ce=E()({name:"VBtn",directives:{Ripple:vn},props:fn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:s,slots:n}=t;const{themeClasses:i}=A(e),{borderClasses:a}=ke(e),{colorClasses:o,colorStyles:d,variantClasses:r}=Rt(e),{densityClasses:m}=Te(e),{dimensionStyles:p}=qt(e),{elevationClasses:C}=Ee(e),{loaderClasses:l}=Qt(e),{locationStyles:u}=Jt(e),{positionClasses:y}=tn(e),{roundedClasses:h}=Le(e),{sizeClasses:x,sizeStyles:w}=te(e),v=zt(e,e.symbol,!1),b=sn(e,s),B=c(()=>{var k;return e.active!==void 0?e.active:b.isLink.value?(k=b.isActive)==null?void 0:k.value:v==null?void 0:v.isSelected.value}),T=c(()=>(v==null?void 0:v.disabled.value)||e.disabled),Y=c(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),Ye=c(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function je(k){var $;T.value||b.isLink.value&&(k.metaKey||k.ctrlKey||k.shiftKey||k.button!==0||s.target==="_blank")||(($=b.navigate)==null||$.call(b,k),v==null||v.toggle())}return on(b,v==null?void 0:v.select),N(()=>{var ae,ie;const k=b.isLink.value?"a":e.tag,$=!!(e.prependIcon||n.prepend),Xe=!!(e.appendIcon||n.append),ne=!!(e.icon&&e.icon!==!0),se=(v==null?void 0:v.isSelected.value)&&(!b.isLink.value||((ae=b.isActive)==null?void 0:ae.value))||!v||((ie=b.isActive)==null?void 0:ie.value);return Ct(f(k,{type:k==="a"?void 0:"button",class:["v-btn",v==null?void 0:v.selectedClass.value,{"v-btn--active":B.value,"v-btn--block":e.block,"v-btn--disabled":T.value,"v-btn--elevated":Y.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},i.value,a.value,se?o.value:void 0,m.value,C.value,l.value,y.value,h.value,x.value,r.value,e.class],style:[se?d.value:void 0,p.value,u.value,w.value,e.style],disabled:T.value||void 0,href:b.href.value,onClick:je,value:Ye.value},{default:()=>{var oe;return[Vt(!0,"v-btn"),!e.icon&&$&&f("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?f(X,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):f(q,{key:"prepend-icon",icon:e.prependIcon},null)]),f("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&ne?f(q,{key:"content-icon",icon:e.icon},null):f(X,{key:"content-defaults",disabled:!ne,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var re;return[((re=n.default)==null?void 0:re.call(n))??e.text]}})]),!e.icon&&Xe&&f("span",{key:"append",class:"v-btn__append"},[n.append?f(X,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):f(q,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&f("span",{key:"loader",class:"v-btn__loader"},[((oe=n.loader)==null?void 0:oe.call(n))??f(jt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[bt("ripple"),!T.value&&e.ripple,null]])}),{}}}),hn={name:"pressure-canvas",data(){return{x:0,y:0,canvasLeft:null,canvasTop:null,currentLine:null,pressure:null,brushSize:8,lineWidth:0,isMousedown:!1,points:[],strokeHistory:[],imageId:1}},mounted(){this.canvas=this.$refs.canvas,this.canvasCtx=this.canvas.getContext("2d"),this.resizeEvents(),window.addEventListener("resize",this.resizeEvents),this.loadImage(this.imageId)},methods:{preventDefault(e){e.preventDefault()},loadImage(e){return new Promise((t,s)=>{const n=new Image;n.crossOrigin="Anonymous",n.src=`images/${e}.jpg`,n.onload=()=>{this.canvasCtx.beginPath(),this.canvasCtx.moveTo(15,0),this.canvasCtx.lineTo(this.canvas.width-64,0),this.canvasCtx.arcTo(this.canvas.width,0,this.canvas.width,64,64),this.canvasCtx.lineTo(this.canvas.width,this.canvas.height-64),this.canvasCtx.arcTo(this.canvas.width,this.canvas.height,this.canvas.width-64,this.canvas.height,64),this.canvasCtx.lineTo(64,this.canvas.height),this.canvasCtx.arcTo(0,this.canvas.height,0,this.canvas.height-64,64),this.canvasCtx.lineTo(0,64),this.canvasCtx.arcTo(0,0,64,0,64),this.canvasCtx.closePath(),this.canvasCtx.clip(),this.canvasCtx.drawImage(n,0,0,this.canvas.width,this.canvas.height),t()}})},drawOnCanvas(e){this.canvasCtx.strokeStyle="#572649",this.canvasCtx.lineCap="round",this.canvasCtx.lineJoin="round";const t=e.length-1;if(e.length>=3){const s=(e[t].x+e[t-1].x)/2,n=(e[t].y+e[t-1].y)/2;this.canvasCtx.lineWidth=e[t-1].lineWidth,this.canvasCtx.quadraticCurveTo(e[t-1].x,e[t-1].y,s,n),this.canvasCtx.stroke(),this.canvasCtx.beginPath(),this.canvasCtx.moveTo(s,n)}else{const s=e[t];this.canvasCtx.lineWidth=s.lineWidth,this.canvasCtx.strokeStyle=s.color,this.canvasCtx.beginPath(),this.canvasCtx.moveTo(s.x,s.y),this.canvasCtx.stroke()}},undoDraw(){this.strokeHistory.pop(),this.loadImage(2).then(e=>{this.strokeHistory.length!==0&&this.strokeHistory.map(t=>{this.canvasCtx.beginPath();let s=[];t.map(n=>{s.push(n),this.drawOnCanvas(s)})})})},resizeEvents(e){const{clientWidth:t,clientHeight:s,width:n,height:i}=this.canvas;(t!=n||s!=i)&&(this.canvas.width=window.innerWidth*2,this.canvas.height=window.innerHeight*2)},pointerDownHandler(e){let t=.1,s,n;e.pressure>0&&(t=e.pressure),s=e.pageX*2,n=e.pageY*2,this.isMousedown=!0,this.lineWidth=Math.log(t+1)*40,this.canvasCtx.lineWidth=this.lineWidth,this.points.push({x:s,y:n,lineWidth:this.lineWidth}),this.drawOnCanvas(this.points)},pointerMoveHandler(e){if(!this.isMousedown)return;e.preventDefault();let t=.1,s,n;e.pressure>0&&(t=e.pressure),s=e.pageX*2,n=e.pageY*2,this.lineWidth=Math.log(t+1)*40*.2+this.lineWidth*.8,this.points.push({x:s,y:n,lineWidth:this.lineWidth}),this.drawOnCanvas(this.points)},pointerUpHandler(e){e.pressure>0&&e.pressure,e.pageX*2,e.pageY*2,this.isMousedown=!1,this.strokeHistory.push([...this.points]),this.points=[],this.lineWidth=0},downloadToImage(){let e=this.canvas.toDataURL("image/jpeg",.8);const t=document.createElement("a");t.href=e;const s="Pena&Tewter"+new Date().toLocaleTimeString();t.download=s,t.click(),t.remove(),this.imageId++,this.imageId==6&&(this.imageId=1),this.loadImage(this.imageId)}}},mn={class:"parent"},gn={class:"action-btn"},pn={class:"download-btn"};function yn(e,t,s,n,i,a){return St(),wt("div",mn,[j("canvas",{ref:"canvas",class:"p-canvas",onTouchstart:t[0]||(t[0]=fe((...o)=>a.preventDefault&&a.preventDefault(...o),["prevent"])),onTouchmove:t[1]||(t[1]=fe((...o)=>a.preventDefault&&a.preventDefault(...o),["prevent"])),onPointerup:t[2]||(t[2]=(...o)=>a.pointerUpHandler&&a.pointerUpHandler(...o)),onPointermove:t[3]||(t[3]=(...o)=>a.pointerMoveHandler&&a.pointerMoveHandler(...o)),onPointerdown:t[4]||(t[4]=(...o)=>a.pointerDownHandler&&a.pointerDownHandler(...o))},null,544),j("div",gn,[f(Ce,{onClick:a.undoDraw,icon:"mdi-undo"},null,8,["onClick"])]),j("div",pn,[f(Ce,{onClick:a.downloadToImage},{default:_t(()=>[kt("download")]),_:1},8,["onClick"])])])}const bn=xt(hn,[["render",yn],["__scopeId","data-v-692b6c16"]]);export{bn as default};
