import{r as I,e as _,ae as xe,a4 as un,q as se,aa as vn,t as c,W as mt,aN as Mn,ax as Le,aO as yt,aP as wt,a5 as ne,aQ as cn,aw as Be,ak as pn,aM as xt,w as Ce,aj as _n,n as K,G as H,B as de,X as An,u as Xe,v as be,x as Ye,aR as Ct,A as ge,aS as ke,aH as Bn,p as re,a3 as fn,an as St,H as En,aT as Rt,K as Ee,O as Tt,aU as Ot,aL as kt,aG as Ft,as as Pt,y as It,aJ as zt,aV as Mt}from"./app-D0FKodE1.js";import{c as Ge,a as Nn,i as bn,f as Ln,b as _t,N as At,B as Bt,V as Et,d as Nt,u as hn,e as yn}from"./Popover-D8D0nzr7.js";import{u as $n,S as Lt,W as $t,b as Dt,g as Kt}from"./Input-D8uoT4Pm.js";import{N as nn}from"./Tag-BFO1sFoV.js";import{V as wn,r as tn,u as Wt}from"./browser-CdsVojjU.js";import{r as xn,a as Vt,c as ce}from"./resolve-slot-DUjGdOs2.js";import{b as jt}from"./format-length-HZXLrAO-.js";import{h as Ne}from"./happens-in-CM8LO42l.js";import{u as Cn}from"./use-merged-state-BqH4jdZ6.js";function Sn(e){return e&-e}class Dn{constructor(n,t){this.l=n,this.min=t;const i=new Array(n+1);for(let l=0;l<n+1;++l)i[l]=0;this.ft=i}add(n,t){if(t===0)return;const{l:i,ft:l}=this;for(n+=1;n<=i;)l[n]+=t,n+=Sn(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:t,min:i,l}=this;if(n>l)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=n*i;for(;n>0;)s+=t[n],n-=Sn(n);return s}getBound(n){let t=0,i=this.l;for(;i>t;){const l=Math.floor((t+i)/2),s=this.sum(l);if(s>n){i=l;continue}else if(s<n){if(t===l)return this.sum(t+1)<=n?t+1:l;t=l}else return l}return t}}let He;function Ht(){return typeof document>"u"?!1:(He===void 0&&("matchMedia"in window?He=window.matchMedia("(pointer:coarse)").matches:He=!1),He)}let ln;function Rn(){return typeof document>"u"?1:(ln===void 0&&(ln="chrome"in window?window.devicePixelRatio:1),ln)}const Kn="VVirtualListXScroll";function Gt({columnsRef:e,renderColRef:n,renderItemWithColsRef:t}){const i=I(0),l=I(0),s=_(()=>{const u=e.value;if(u.length===0)return null;const d=new Dn(u.length,0);return u.forEach((p,S)=>{d.add(S,p.width)}),d}),r=xe(()=>{const u=s.value;return u!==null?Math.max(u.getBound(l.value)-1,0):0}),a=u=>{const d=s.value;return d!==null?d.sum(u):0},h=xe(()=>{const u=s.value;return u!==null?Math.min(u.getBound(l.value+i.value)+1,e.value.length-1):0});return un(Kn,{startIndexRef:r,endIndexRef:h,columnsRef:e,renderColRef:n,renderItemWithColsRef:t,getLeft:a}),{listWidthRef:i,scrollLeftRef:l}}const Tn=se({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:n,columnsRef:t,getLeft:i,renderColRef:l,renderItemWithColsRef:s}=vn(Kn);return{startIndex:e,endIndex:n,columns:t,renderCol:l,renderItemWithCols:s,getLeft:i}},render(){const{startIndex:e,endIndex:n,columns:t,renderCol:i,renderItemWithCols:l,getLeft:s,item:r}=this;if(l!=null)return l({itemIndex:this.index,startColIndex:e,endColIndex:n,allColumns:t,item:r,getLeft:s});if(i!=null){const a=[];for(let h=e;h<=n;++h){const u=t[h];a.push(i({column:u,left:s(h),item:r}))}return a}return null}}),Ut=Ge(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Ge("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Ge("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),qt=se({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=Mn();Ut.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Nn,ssr:n}),Le(()=>{const{defaultScrollIndex:g,defaultScrollKey:R}=e;g!=null?W({index:g}):R!=null&&W({key:R})});let t=!1,i=!1;yt(()=>{if(t=!1,!i){i=!0;return}W({top:T.value,left:r.value})}),wt(()=>{t=!0,i||(i=!0)});const l=xe(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let g=0;return e.columns.forEach(R=>{g+=R.width}),g}),s=_(()=>{const g=new Map,{keyField:R}=e;return e.items.forEach(($,G)=>{g.set($[R],G)}),g}),{scrollLeftRef:r,listWidthRef:a}=Gt({columnsRef:ne(e,"columns"),renderColRef:ne(e,"renderCol"),renderItemWithColsRef:ne(e,"renderItemWithCols")}),h=I(null),u=I(void 0),d=new Map,p=_(()=>{const{items:g,itemSize:R,keyField:$}=e,G=new Dn(g.length,R);return g.forEach((Z,U)=>{const q=Z[$],V=d.get(q);V!==void 0&&G.add(U,V)}),G}),S=I(0),T=I(0),x=xe(()=>Math.max(p.value.getBound(T.value-cn(e.paddingTop))-1,0)),z=_(()=>{const{value:g}=u;if(g===void 0)return[];const{items:R,itemSize:$}=e,G=x.value,Z=Math.min(G+Math.ceil(g/$+1),R.length-1),U=[];for(let q=G;q<=Z;++q)U.push(R[q]);return U}),W=(g,R)=>{if(typeof g=="number"){b(g,R,"auto");return}const{left:$,top:G,index:Z,key:U,position:q,behavior:V,debounce:Q=!0}=g;if($!==void 0||G!==void 0)b($,G,V);else if(Z!==void 0)O(Z,V,Q);else if(U!==void 0){const v=s.value.get(U);v!==void 0&&O(v,V,Q)}else q==="bottom"?b(0,Number.MAX_SAFE_INTEGER,V):q==="top"&&b(0,0,V)};let k,F=null;function O(g,R,$){const{value:G}=p,Z=G.sum(g)+cn(e.paddingTop);if(!$)h.value.scrollTo({left:0,top:Z,behavior:R});else{k=g,F!==null&&window.clearTimeout(F),F=window.setTimeout(()=>{k=void 0,F=null},16);const{scrollTop:U,offsetHeight:q}=h.value;if(Z>U){const V=G.get(g);Z+V<=U+q||h.value.scrollTo({left:0,top:Z+V-q,behavior:R})}else h.value.scrollTo({left:0,top:Z,behavior:R})}}function b(g,R,$){h.value.scrollTo({left:g,top:R,behavior:$})}function y(g,R){var $,G,Z;if(t||e.ignoreItemResize||ae(R.target))return;const{value:U}=p,q=s.value.get(g),V=U.get(q),Q=(Z=(G=($=R.borderBoxSize)===null||$===void 0?void 0:$[0])===null||G===void 0?void 0:G.blockSize)!==null&&Z!==void 0?Z:R.contentRect.height;if(Q===V)return;Q-e.itemSize===0?d.delete(g):d.set(g,Q-e.itemSize);const w=Q-V;if(w===0)return;U.add(q,w);const j=h.value;if(j!=null){if(k===void 0){const le=U.sum(q);j.scrollTop>le&&j.scrollBy(0,w)}else if(q<k)j.scrollBy(0,w);else if(q===k){const le=U.sum(q);Q+le>j.scrollTop+j.offsetHeight&&j.scrollBy(0,w)}te()}S.value++}const N=!Ht();let E=!1;function X(g){var R;(R=e.onScroll)===null||R===void 0||R.call(e,g),(!N||!E)&&te()}function Y(g){var R;if((R=e.onWheel)===null||R===void 0||R.call(e,g),N){const $=h.value;if($!=null){if(g.deltaX===0&&($.scrollTop===0&&g.deltaY<=0||$.scrollTop+$.offsetHeight>=$.scrollHeight&&g.deltaY>=0))return;g.preventDefault(),$.scrollTop+=g.deltaY/Rn(),$.scrollLeft+=g.deltaX/Rn(),te(),E=!0,jt(()=>{E=!1})}}}function L(g){if(t||ae(g.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(g.contentRect.height===u.value)return}else if(g.contentRect.height===u.value&&g.contentRect.width===a.value)return;u.value=g.contentRect.height,a.value=g.contentRect.width;const{onResize:R}=e;R!==void 0&&R(g)}function te(){const{value:g}=h;g!=null&&(T.value=g.scrollTop,r.value=g.scrollLeft)}function ae(g){let R=g;for(;R!==null;){if(R.style.display==="none")return!0;R=R.parentElement}return!1}return{listHeight:u,listStyle:{overflow:"auto"},keyToIndex:s,itemsStyle:_(()=>{const{itemResizable:g}=e,R=Be(p.value.sum());return S.value,[e.itemsStyle,{boxSizing:"content-box",width:Be(l.value),height:g?"":R,minHeight:g?R:"",paddingTop:Be(e.paddingTop),paddingBottom:Be(e.paddingBottom)}]}),visibleItemsStyle:_(()=>(S.value,{transform:`translateY(${Be(p.value.sum(x.value))})`})),viewportItems:z,listElRef:h,itemsElRef:I(null),scrollTo:W,handleListResize:L,handleListScroll:X,handleListWheel:Y,handleItemResize:y}},render(){const{itemResizable:e,keyField:n,keyToIndex:t,visibleItemsTag:i}=this;return c(wn,{onResize:this.handleListResize},{default:()=>{var l,s;return c("div",mt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?c("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[c(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:r,renderItemWithCols:a}=this;return this.viewportItems.map(h=>{const u=h[n],d=t.get(u),p=r!=null?c(Tn,{index:d,item:h}):void 0,S=a!=null?c(Tn,{index:d,item:h}):void 0,T=this.$slots.default({item:h,renderedCols:p,renderedItemWithCols:S,index:d})[0];return e?c(wn,{key:u,onResize:x=>this.handleItemResize(u,x)},{default:()=>T}):(T.key=u,T)})}})]):(s=(l=this.$slots).empty)===null||s===void 0?void 0:s.call(l)])}})}}),he="v-hidden",Xt=Ge("[v-hidden]",{display:"none!important"}),On=se({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=I(null),i=I(null);function l(r){const{value:a}=t,{getCounter:h,getTail:u}=e;let d;if(h!==void 0?d=h():d=i.value,!a||!d)return;d.hasAttribute(he)&&d.removeAttribute(he);const{children:p}=a;if(r.showAllItemsBeforeCalculate)for(const O of p)O.hasAttribute(he)&&O.removeAttribute(he);const S=a.offsetWidth,T=[],x=n.tail?u==null?void 0:u():null;let z=x?x.offsetWidth:0,W=!1;const k=a.children.length-(n.tail?1:0);for(let O=0;O<k-1;++O){if(O<0)continue;const b=p[O];if(W){b.hasAttribute(he)||b.setAttribute(he,"");continue}else b.hasAttribute(he)&&b.removeAttribute(he);const y=b.offsetWidth;if(z+=y,T[O]=y,z>S){const{updateCounter:N}=e;for(let E=O;E>=0;--E){const X=k-1-E;N!==void 0?N(X):d.textContent=`${X}`;const Y=d.offsetWidth;if(z-=T[E],z+Y<=S||E===0){W=!0,O=E-1,x&&(O===-1?(x.style.maxWidth=`${S-Y}px`,x.style.boxSizing="border-box"):x.style.maxWidth="");const{onUpdateCount:L}=e;L&&L(X);break}}}}const{onUpdateOverflow:F}=e;W?F!==void 0&&F(!0):(F!==void 0&&F(!1),d.setAttribute(he,""))}const s=Mn();return Xt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Nn,ssr:s}),Le(()=>l({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:i,sync:l}},render(){const{$slots:e}=this;return pn(()=>this.sync({showAllItemsBeforeCalculate:!1})),c("div",{class:"v-overflow",ref:"selfRef"},[xt(e,"default"),e.counter?e.counter():c("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Wn(e,n){n&&(Le(()=>{const{value:t}=e;t&&tn.registerHandler(t,n)}),Ce(e,(t,i)=>{i&&tn.unregisterHandler(i)},{deep:!1}),_n(()=>{const{value:t}=e;t&&tn.unregisterHandler(t)}))}const Yt=new WeakSet;function Zt(e){Yt.add(e)}function kn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function on(e){const n=e.filter(t=>t!==void 0);if(n.length!==0)return n.length===1?n[0]:t=>{e.forEach(i=>{i&&i(t)})}}const Jt=se({name:"Checkmark",render(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},c("g",{fill:"none"},c("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Qt=se({name:"Empty",render(){return c("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),c("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),ei=se({props:{onFocus:Function,onBlur:Function},setup(e){return()=>c("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Fn(e){return Array.isArray(e)?e:[e]}const gn={STOP:"STOP"};function Vn(e,n){const t=n(e);e.children!==void 0&&t!==gn.STOP&&e.children.forEach(i=>Vn(i,n))}function ni(e,n={}){const{preserveGroup:t=!1}=n,i=[],l=t?r=>{r.isLeaf||(i.push(r.key),s(r.children))}:r=>{r.isLeaf||(r.isGroup||i.push(r.key),s(r.children))};function s(r){r.forEach(l)}return s(e),i}function ti(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function ii(e){return e.children}function li(e){return e.key}function oi(){return!1}function ri(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function ai(e){return e.disabled===!0}function si(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function rn(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function an(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function di(e,n){const t=new Set(e);return n.forEach(i=>{t.has(i)||t.add(i)}),Array.from(t)}function ui(e,n){const t=new Set(e);return n.forEach(i=>{t.has(i)&&t.delete(i)}),Array.from(t)}function ci(e){return(e==null?void 0:e.type)==="group"}function fi(e){const n=new Map;return e.forEach((t,i)=>{n.set(t.key,i)}),t=>{var i;return(i=n.get(t))!==null&&i!==void 0?i:null}}class hi extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function gi(e,n,t,i){return Ue(n.concat(e),t,i,!1)}function vi(e,n){const t=new Set;return e.forEach(i=>{const l=n.treeNodeMap.get(i);if(l!==void 0){let s=l.parent;for(;s!==null&&!(s.disabled||t.has(s.key));)t.add(s.key),s=s.parent}}),t}function pi(e,n,t,i){const l=Ue(n,t,i,!1),s=Ue(e,t,i,!0),r=vi(e,t),a=[];return l.forEach(h=>{(s.has(h)||r.has(h))&&a.push(h)}),a.forEach(h=>l.delete(h)),l}function sn(e,n){const{checkedKeys:t,keysToCheck:i,keysToUncheck:l,indeterminateKeys:s,cascade:r,leafOnly:a,checkStrategy:h,allowNotLoaded:u}=e;if(!r)return i!==void 0?{checkedKeys:di(t,i),indeterminateKeys:Array.from(s)}:l!==void 0?{checkedKeys:ui(t,l),indeterminateKeys:Array.from(s)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(s)};const{levelTreeNodeMap:d}=n;let p;l!==void 0?p=pi(l,t,n,u):i!==void 0?p=gi(i,t,n,u):p=Ue(t,n,u,!1);const S=h==="parent",T=h==="child"||a,x=p,z=new Set,W=Math.max.apply(null,Array.from(d.keys()));for(let k=W;k>=0;k-=1){const F=k===0,O=d.get(k);for(const b of O){if(b.isLeaf)continue;const{key:y,shallowLoaded:N}=b;if(T&&N&&b.children.forEach(L=>{!L.disabled&&!L.isLeaf&&L.shallowLoaded&&x.has(L.key)&&x.delete(L.key)}),b.disabled||!N)continue;let E=!0,X=!1,Y=!0;for(const L of b.children){const te=L.key;if(!L.disabled){if(Y&&(Y=!1),x.has(te))X=!0;else if(z.has(te)){X=!0,E=!1;break}else if(E=!1,X)break}}E&&!Y?(S&&b.children.forEach(L=>{!L.disabled&&x.has(L.key)&&x.delete(L.key)}),x.add(y)):X&&z.add(y),F&&T&&x.has(y)&&x.delete(y)}}return{checkedKeys:Array.from(x),indeterminateKeys:Array.from(z)}}function Ue(e,n,t,i){const{treeNodeMap:l,getChildren:s}=n,r=new Set,a=new Set(e);return e.forEach(h=>{const u=l.get(h);u!==void 0&&Vn(u,d=>{if(d.disabled)return gn.STOP;const{key:p}=d;if(!r.has(p)&&(r.add(p),a.add(p),si(d.rawNode,s))){if(i)return gn.STOP;if(!t)throw new hi}})}),a}function bi(e,{includeGroup:n=!1,includeSelf:t=!0},i){var l;const s=i.treeNodeMap;let r=e==null?null:(l=s.get(e))!==null&&l!==void 0?l:null;const a={keyPath:[],treeNodePath:[],treeNode:r};if(r!=null&&r.ignored)return a.treeNode=null,a;for(;r;)!r.ignored&&(n||!r.isGroup)&&a.treeNodePath.push(r),r=r.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(h=>h.key),a}function mi(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function yi(e,n){const t=e.siblings,i=t.length,{index:l}=e;return n?t[(l+1)%i]:l===t.length-1?null:t[l+1]}function Pn(e,n,{loop:t=!1,includeDisabled:i=!1}={}){const l=n==="prev"?wi:yi,s={reverse:n==="prev"};let r=!1,a=null;function h(u){if(u!==null){if(u===e){if(!r)r=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!u.disabled||i)&&!u.ignored&&!u.isGroup){a=u;return}if(u.isGroup){const d=mn(u,s);d!==null?a=d:h(l(u,t))}else{const d=l(u,!1);if(d!==null)h(d);else{const p=xi(u);p!=null&&p.isGroup?h(l(p,t)):t&&h(l(u,!0))}}}}return h(e),a}function wi(e,n){const t=e.siblings,i=t.length,{index:l}=e;return n?t[(l-1+i)%i]:l===0?null:t[l-1]}function xi(e){return e.parent}function mn(e,n={}){const{reverse:t=!1}=n,{children:i}=e;if(i){const{length:l}=i,s=t?l-1:0,r=t?-1:l,a=t?-1:1;for(let h=s;h!==r;h+=a){const u=i[h];if(!u.disabled&&!u.ignored)if(u.isGroup){const d=mn(u,n);if(d!==null)return d}else return u}}return null}const Ci={getChild(){return this.ignored?null:mn(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Pn(this,"next",e)},getPrev(e={}){return Pn(this,"prev",e)}};function Si(e,n){const t=n?new Set(n):void 0,i=[];function l(s){s.forEach(r=>{i.push(r),!(r.isLeaf||!r.children||r.ignored)&&(r.isGroup||t===void 0||t.has(r.key))&&l(r.children)})}return l(e),i}function Ri(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function jn(e,n,t,i,l,s=null,r=0){const a=[];return e.forEach((h,u)=>{var d;const p=Object.create(i);if(p.rawNode=h,p.siblings=a,p.level=r,p.index=u,p.isFirstChild=u===0,p.isLastChild=u+1===e.length,p.parent=s,!p.ignored){const S=l(h);Array.isArray(S)&&(p.children=jn(S,n,t,i,l,p,r+1))}a.push(p),n.set(p.key,p),t.has(r)||t.set(r,[]),(d=t.get(r))===null||d===void 0||d.push(p)}),a}function Ti(e,n={}){var t;const i=new Map,l=new Map,{getDisabled:s=ai,getIgnored:r=oi,getIsGroup:a=ci,getKey:h=li}=n,u=(t=n.getChildren)!==null&&t!==void 0?t:ii,d=n.ignoreEmptyChildren?b=>{const y=u(b);return Array.isArray(y)?y.length?y:null:y}:u,p=Object.assign({get key(){return h(this.rawNode)},get disabled(){return s(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return ti(this.rawNode,d)},get shallowLoaded(){return ri(this.rawNode,d)},get ignored(){return r(this.rawNode)},contains(b){return Ri(this,b)}},Ci),S=jn(e,i,l,p,d);function T(b){if(b==null)return null;const y=i.get(b);return y&&!y.isGroup&&!y.ignored?y:null}function x(b){if(b==null)return null;const y=i.get(b);return y&&!y.ignored?y:null}function z(b,y){const N=x(b);return N?N.getPrev(y):null}function W(b,y){const N=x(b);return N?N.getNext(y):null}function k(b){const y=x(b);return y?y.getParent():null}function F(b){const y=x(b);return y?y.getChild():null}const O={treeNodes:S,treeNodeMap:i,levelTreeNodeMap:l,maxLevel:Math.max(...l.keys()),getChildren:d,getFlattenedNodes(b){return Si(S,b)},getNode:T,getPrev:z,getNext:W,getParent:k,getChild:F,getFirstAvailableNode(){return mi(S)},getPath(b,y={}){return bi(b,y,O)},getCheckedKeys(b,y={}){const{cascade:N=!0,leafOnly:E=!1,checkStrategy:X="all",allowNotLoaded:Y=!1}=y;return sn({checkedKeys:rn(b),indeterminateKeys:an(b),cascade:N,leafOnly:E,checkStrategy:X,allowNotLoaded:Y},O)},check(b,y,N={}){const{cascade:E=!0,leafOnly:X=!1,checkStrategy:Y="all",allowNotLoaded:L=!1}=N;return sn({checkedKeys:rn(y),indeterminateKeys:an(y),keysToCheck:b==null?[]:Fn(b),cascade:E,leafOnly:X,checkStrategy:Y,allowNotLoaded:L},O)},uncheck(b,y,N={}){const{cascade:E=!0,leafOnly:X=!1,checkStrategy:Y="all",allowNotLoaded:L=!1}=N;return sn({checkedKeys:rn(y),indeterminateKeys:an(y),keysToUncheck:b==null?[]:Fn(b),cascade:E,leafOnly:X,checkStrategy:Y,allowNotLoaded:L},O)},getNonLeafKeys(b={}){return ni(S,b)}};return O}const Oi=K("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[H("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[de("+",[H("description",`
 margin-top: 8px;
 `)])]),H("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),H("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),ki=Object.assign(Object.assign({},be.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Fi=se({name:"Empty",props:ki,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedComponentPropsRef:i}=Xe(e),l=be("Empty","-empty",Oi,Ct,e,n),{localeRef:s}=$n("Empty"),r=_(()=>{var d,p,S;return(d=e.description)!==null&&d!==void 0?d:(S=(p=i==null?void 0:i.value)===null||p===void 0?void 0:p.Empty)===null||S===void 0?void 0:S.description}),a=_(()=>{var d,p;return((p=(d=i==null?void 0:i.value)===null||d===void 0?void 0:d.Empty)===null||p===void 0?void 0:p.renderIcon)||(()=>c(Qt,null))}),h=_(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:p},self:{[ge("iconSize",d)]:S,[ge("fontSize",d)]:T,textColor:x,iconColor:z,extraTextColor:W}}=l.value;return{"--n-icon-size":S,"--n-font-size":T,"--n-bezier":p,"--n-text-color":x,"--n-icon-color":z,"--n-extra-text-color":W}}),u=t?Ye("empty",_(()=>{let d="";const{size:p}=e;return d+=p[0],d}),h,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:a,localizedDescription:_(()=>r.value||s.value.description),cssVars:t?void 0:h,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:t}=this;return t==null||t(),c("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?c("div",{class:`${n}-empty__icon`},e.icon?e.icon():c(An,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?c("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?c("div",{class:`${n}-empty__extra`},e.extra()):null)}}),In=se({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:t,nodePropsRef:i}=vn(bn);return{labelField:t,nodeProps:i,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:t,nodeProps:i,tmNode:{rawNode:l}}=this,s=i==null?void 0:i(l),r=n?n(l,!1):ke(l[this.labelField],l,!1),a=c("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),r);return l.render?l.render({node:a,option:l}):t?t({node:a,option:l,selected:!1}):a}});function Pi(e,n){return c(Bn,{name:"fade-in-scale-up-transition"},{default:()=>e?c(An,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>c(Jt)}):null})}const zn=se({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:t,multipleRef:i,valueSetRef:l,renderLabelRef:s,renderOptionRef:r,labelFieldRef:a,valueFieldRef:h,showCheckmarkRef:u,nodePropsRef:d,handleOptionClick:p,handleOptionMouseEnter:S}=vn(bn),T=xe(()=>{const{value:k}=t;return k?e.tmNode.key===k.key:!1});function x(k){const{tmNode:F}=e;F.disabled||p(k,F)}function z(k){const{tmNode:F}=e;F.disabled||S(k,F)}function W(k){const{tmNode:F}=e,{value:O}=T;F.disabled||O||S(k,F)}return{multiple:i,isGrouped:xe(()=>{const{tmNode:k}=e,{parent:F}=k;return F&&F.rawNode.type==="group"}),showCheckmark:u,nodeProps:d,isPending:T,isSelected:xe(()=>{const{value:k}=n,{value:F}=i;if(k===null)return!1;const O=e.tmNode.rawNode[h.value];if(F){const{value:b}=l;return b.has(O)}else return k===O}),labelField:a,renderLabel:s,renderOption:r,handleMouseMove:W,handleMouseEnter:z,handleClick:x}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:t,isPending:i,isGrouped:l,showCheckmark:s,nodeProps:r,renderOption:a,renderLabel:h,handleClick:u,handleMouseEnter:d,handleMouseMove:p}=this,S=Pi(t,e),T=h?[h(n,t),s&&S]:[ke(n[this.labelField],n,t),s&&S],x=r==null?void 0:r(n),z=c("div",Object.assign({},x,{class:[`${e}-base-select-option`,n.class,x==null?void 0:x.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:l,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:s}],style:[(x==null?void 0:x.style)||"",n.style||""],onClick:on([u,x==null?void 0:x.onClick]),onMouseenter:on([d,x==null?void 0:x.onMouseenter]),onMousemove:on([p,x==null?void 0:x.onMousemove])}),c("div",{class:`${e}-base-select-option__content`},T));return n.render?n.render({node:z,option:n,selected:t}):a?a({node:z,option:n,selected:t}):z}}),Ii=K("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[K("scrollbar",`
 max-height: var(--n-height);
 `),K("virtual-list",`
 max-height: var(--n-height);
 `),K("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[H("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),K("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),K("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),H("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),H("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),H("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),H("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),K("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),K("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[re("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),de("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),de("&:active",`
 color: var(--n-option-text-color-pressed);
 `),re("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),re("pending",[de("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),re("selected",`
 color: var(--n-option-text-color-active);
 `,[de("&::before",`
 background-color: var(--n-option-color-active);
 `),re("pending",[de("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),re("disabled",`
 cursor: not-allowed;
 `,[fn("selected",`
 color: var(--n-option-text-color-disabled);
 `),re("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),H("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Ln({enterScale:"0.5"})])])]),zi=se({name:"InternalSelectMenu",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=Xe(e),i=En("InternalSelectMenu",t,n),l=be("InternalSelectMenu","-internal-select-menu",Ii,Rt,e,ne(e,"clsPrefix")),s=I(null),r=I(null),a=I(null),h=_(()=>e.treeMate.getFlattenedNodes()),u=_(()=>fi(h.value)),d=I(null);function p(){const{treeMate:v}=e;let w=null;const{value:j}=e;j===null?w=v.getFirstAvailableNode():(e.multiple?w=v.getNode((j||[])[(j||[]).length-1]):w=v.getNode(j),(!w||w.disabled)&&(w=v.getFirstAvailableNode())),R(w||null)}function S(){const{value:v}=d;v&&!e.treeMate.getNode(v.key)&&(d.value=null)}let T;Ce(()=>e.show,v=>{v?T=Ce(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?p():S(),pn($)):S()},{immediate:!0}):T==null||T()},{immediate:!0}),_n(()=>{T==null||T()});const x=_(()=>cn(l.value.self[ge("optionHeight",e.size)])),z=_(()=>Ee(l.value.self[ge("padding",e.size)])),W=_(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),k=_(()=>{const v=h.value;return v&&v.length===0});function F(v){const{onToggle:w}=e;w&&w(v)}function O(v){const{onScroll:w}=e;w&&w(v)}function b(v){var w;(w=a.value)===null||w===void 0||w.sync(),O(v)}function y(){var v;(v=a.value)===null||v===void 0||v.sync()}function N(){const{value:v}=d;return v||null}function E(v,w){w.disabled||R(w,!1)}function X(v,w){w.disabled||F(w)}function Y(v){var w;Ne(v,"action")||(w=e.onKeyup)===null||w===void 0||w.call(e,v)}function L(v){var w;Ne(v,"action")||(w=e.onKeydown)===null||w===void 0||w.call(e,v)}function te(v){var w;(w=e.onMousedown)===null||w===void 0||w.call(e,v),!e.focusable&&v.preventDefault()}function ae(){const{value:v}=d;v&&R(v.getNext({loop:!0}),!0)}function g(){const{value:v}=d;v&&R(v.getPrev({loop:!0}),!0)}function R(v,w=!1){d.value=v,w&&$()}function $(){var v,w;const j=d.value;if(!j)return;const le=u.value(j.key);le!==null&&(e.virtualScroll?(v=r.value)===null||v===void 0||v.scrollTo({index:le}):(w=a.value)===null||w===void 0||w.scrollTo({index:le,elSize:x.value}))}function G(v){var w,j;!((w=s.value)===null||w===void 0)&&w.contains(v.target)&&((j=e.onFocus)===null||j===void 0||j.call(e,v))}function Z(v){var w,j;!((w=s.value)===null||w===void 0)&&w.contains(v.relatedTarget)||(j=e.onBlur)===null||j===void 0||j.call(e,v)}un(bn,{handleOptionMouseEnter:E,handleOptionClick:X,valueSetRef:W,pendingTmNodeRef:d,nodePropsRef:ne(e,"nodeProps"),showCheckmarkRef:ne(e,"showCheckmark"),multipleRef:ne(e,"multiple"),valueRef:ne(e,"value"),renderLabelRef:ne(e,"renderLabel"),renderOptionRef:ne(e,"renderOption"),labelFieldRef:ne(e,"labelField"),valueFieldRef:ne(e,"valueField")}),un(_t,s),Le(()=>{const{value:v}=a;v&&v.sync()});const U=_(()=>{const{size:v}=e,{common:{cubicBezierEaseInOut:w},self:{height:j,borderRadius:le,color:Se,groupHeaderTextColor:Re,actionDividerColor:fe,optionTextColorPressed:oe,optionTextColor:Te,optionTextColorDisabled:ve,optionTextColorActive:Fe,optionOpacityDisabled:Pe,optionCheckColor:Ie,actionTextColor:ze,optionColorPending:me,optionColorActive:ye,loadingColor:Me,loadingSize:_e,optionColorActivePending:Ae,[ge("optionFontSize",v)]:Oe,[ge("optionHeight",v)]:we,[ge("optionPadding",v)]:ie}}=l.value;return{"--n-height":j,"--n-action-divider-color":fe,"--n-action-text-color":ze,"--n-bezier":w,"--n-border-radius":le,"--n-color":Se,"--n-option-font-size":Oe,"--n-group-header-text-color":Re,"--n-option-check-color":Ie,"--n-option-color-pending":me,"--n-option-color-active":ye,"--n-option-color-active-pending":Ae,"--n-option-height":we,"--n-option-opacity-disabled":Pe,"--n-option-text-color":Te,"--n-option-text-color-active":Fe,"--n-option-text-color-disabled":ve,"--n-option-text-color-pressed":oe,"--n-option-padding":ie,"--n-option-padding-left":Ee(ie,"left"),"--n-option-padding-right":Ee(ie,"right"),"--n-loading-color":Me,"--n-loading-size":_e}}),{inlineThemeDisabled:q}=e,V=q?Ye("internal-select-menu",_(()=>e.size[0]),U,e):void 0,Q={selfRef:s,next:ae,prev:g,getPendingTmNode:N};return Wn(s,e.onResize),Object.assign({mergedTheme:l,mergedClsPrefix:n,rtlEnabled:i,virtualListRef:r,scrollbarRef:a,itemSize:x,padding:z,flattenedNodes:h,empty:k,virtualListContainer(){const{value:v}=r;return v==null?void 0:v.listElRef},virtualListContent(){const{value:v}=r;return v==null?void 0:v.itemsElRef},doScroll:O,handleFocusin:G,handleFocusout:Z,handleKeyUp:Y,handleKeyDown:L,handleMouseDown:te,handleVirtualListResize:y,handleVirtualListScroll:b,cssVars:q?void 0:U,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender},Q)},render(){const{$slots:e,virtualScroll:n,clsPrefix:t,mergedTheme:i,themeClass:l,onRender:s}=this;return s==null||s(),c("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,l,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},xn(e.header,r=>r&&c("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},r)),this.loading?c("div",{class:`${t}-base-select-menu__loading`},c(St,{clsPrefix:t,strokeWidth:20})):this.empty?c("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Vt(e.empty,()=>[c(Fi,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty,size:this.size})])):c(Lt,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?c(qt,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:r})=>r.isGroup?c(In,{key:r.key,clsPrefix:t,tmNode:r}):r.ignored?null:c(zn,{clsPrefix:t,key:r.key,tmNode:r})}):c("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(r=>r.isGroup?c(In,{key:r.key,clsPrefix:t,tmNode:r}):c(zn,{clsPrefix:t,key:r.key,tmNode:r})))}),xn(e.action,r=>r&&[c("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},r),c(ei,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Mi=de([K("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[K("base-loading",`
 color: var(--n-loading-color);
 `),K("base-selection-tags","min-height: var(--n-height);"),H("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),H("state-border",`
 z-index: 1;
 border-color: #0000;
 `),K("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[H("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),K("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[H("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),K("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[H("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),K("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),K("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[K("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[H("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),H("render-label",`
 color: var(--n-text-color);
 `)]),fn("disabled",[de("&:hover",[H("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),re("focus",[H("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),re("active",[H("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),K("base-selection-label","background-color: var(--n-color-active);"),K("base-selection-tags","background-color: var(--n-color-active);")])]),re("disabled","cursor: not-allowed;",[H("arrow",`
 color: var(--n-arrow-color-disabled);
 `),K("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[K("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),H("render-label",`
 color: var(--n-text-color-disabled);
 `)]),K("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),K("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),K("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[H("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),H("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>re(`${e}-status`,[H("state-border",`border: var(--n-border-${e});`),fn("disabled",[de("&:hover",[H("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),re("active",[H("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),K("base-selection-label",`background-color: var(--n-color-active-${e});`),K("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),re("focus",[H("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),K("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),K("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[de("&:last-child","padding-right: 0;"),K("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[H("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),_i=se({name:"InternalSelection",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=Xe(e),i=En("InternalSelection",t,n),l=I(null),s=I(null),r=I(null),a=I(null),h=I(null),u=I(null),d=I(null),p=I(null),S=I(null),T=I(null),x=I(!1),z=I(!1),W=I(!1),k=be("InternalSelection","-internal-selection",Mi,Ot,e,ne(e,"clsPrefix")),F=_(()=>e.clearable&&!e.disabled&&(W.value||e.active)),O=_(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ke(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),b=_(()=>{const f=e.selectedOption;if(f)return f[e.labelField]}),y=_(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function N(){var f;const{value:C}=l;if(C){const{value:J}=s;J&&(J.style.width=`${C.offsetWidth}px`,e.maxTagCount!=="responsive"&&((f=S.value)===null||f===void 0||f.sync({showAllItemsBeforeCalculate:!1})))}}function E(){const{value:f}=T;f&&(f.style.display="none")}function X(){const{value:f}=T;f&&(f.style.display="inline-block")}Ce(ne(e,"active"),f=>{f||E()}),Ce(ne(e,"pattern"),()=>{e.multiple&&pn(N)});function Y(f){const{onFocus:C}=e;C&&C(f)}function L(f){const{onBlur:C}=e;C&&C(f)}function te(f){const{onDeleteOption:C}=e;C&&C(f)}function ae(f){const{onClear:C}=e;C&&C(f)}function g(f){const{onPatternInput:C}=e;C&&C(f)}function R(f){var C;(!f.relatedTarget||!(!((C=r.value)===null||C===void 0)&&C.contains(f.relatedTarget)))&&Y(f)}function $(f){var C;!((C=r.value)===null||C===void 0)&&C.contains(f.relatedTarget)||L(f)}function G(f){ae(f)}function Z(){W.value=!0}function U(){W.value=!1}function q(f){!e.active||!e.filterable||f.target!==s.value&&f.preventDefault()}function V(f){te(f)}const Q=I(!1);function v(f){if(f.key==="Backspace"&&!Q.value&&!e.pattern.length){const{selectedOptions:C}=e;C!=null&&C.length&&V(C[C.length-1])}}let w=null;function j(f){const{value:C}=l;if(C){const J=f.target.value;C.textContent=J,N()}e.ignoreComposition&&Q.value?w=f:g(f)}function le(){Q.value=!0}function Se(){Q.value=!1,e.ignoreComposition&&g(w),w=null}function Re(f){var C;z.value=!0,(C=e.onPatternFocus)===null||C===void 0||C.call(e,f)}function fe(f){var C;z.value=!1,(C=e.onPatternBlur)===null||C===void 0||C.call(e,f)}function oe(){var f,C;if(e.filterable)z.value=!1,(f=u.value)===null||f===void 0||f.blur(),(C=s.value)===null||C===void 0||C.blur();else if(e.multiple){const{value:J}=a;J==null||J.blur()}else{const{value:J}=h;J==null||J.blur()}}function Te(){var f,C,J;e.filterable?(z.value=!1,(f=u.value)===null||f===void 0||f.focus()):e.multiple?(C=a.value)===null||C===void 0||C.focus():(J=h.value)===null||J===void 0||J.focus()}function ve(){const{value:f}=s;f&&(X(),f.focus())}function Fe(){const{value:f}=s;f&&f.blur()}function Pe(f){const{value:C}=d;C&&C.setTextContent(`+${f}`)}function Ie(){const{value:f}=p;return f}function ze(){return s.value}let me=null;function ye(){me!==null&&window.clearTimeout(me)}function Me(){e.active||(ye(),me=window.setTimeout(()=>{y.value&&(x.value=!0)},100))}function _e(){ye()}function Ae(f){f||(ye(),x.value=!1)}Ce(y,f=>{f||(x.value=!1)}),Le(()=>{kt(()=>{const f=u.value;f&&(e.disabled?f.removeAttribute("tabindex"):f.tabIndex=z.value?-1:0)})}),Wn(r,e.onResize);const{inlineThemeDisabled:Oe}=e,we=_(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:C},self:{fontWeight:J,borderRadius:Ze,color:Je,placeholderColor:$e,textColor:De,paddingSingle:Ke,paddingMultiple:Qe,caretColor:en,colorDisabled:We,textColorDisabled:pe,placeholderColorDisabled:o,colorActive:m,boxShadowFocus:P,boxShadowActive:D,boxShadowHover:A,border:M,borderFocus:B,borderHover:ee,borderActive:ue,arrowColor:Gn,arrowColorDisabled:Un,loadingColor:qn,colorActiveWarning:Xn,boxShadowFocusWarning:Yn,boxShadowActiveWarning:Zn,boxShadowHoverWarning:Jn,borderWarning:Qn,borderFocusWarning:et,borderHoverWarning:nt,borderActiveWarning:tt,colorActiveError:it,boxShadowFocusError:lt,boxShadowActiveError:ot,boxShadowHoverError:rt,borderError:at,borderFocusError:st,borderHoverError:dt,borderActiveError:ut,clearColor:ct,clearColorHover:ft,clearColorPressed:ht,clearSize:gt,arrowSize:vt,[ge("height",f)]:pt,[ge("fontSize",f)]:bt}}=k.value,Ve=Ee(Ke),je=Ee(Qe);return{"--n-bezier":C,"--n-border":M,"--n-border-active":ue,"--n-border-focus":B,"--n-border-hover":ee,"--n-border-radius":Ze,"--n-box-shadow-active":D,"--n-box-shadow-focus":P,"--n-box-shadow-hover":A,"--n-caret-color":en,"--n-color":Je,"--n-color-active":m,"--n-color-disabled":We,"--n-font-size":bt,"--n-height":pt,"--n-padding-single-top":Ve.top,"--n-padding-multiple-top":je.top,"--n-padding-single-right":Ve.right,"--n-padding-multiple-right":je.right,"--n-padding-single-left":Ve.left,"--n-padding-multiple-left":je.left,"--n-padding-single-bottom":Ve.bottom,"--n-padding-multiple-bottom":je.bottom,"--n-placeholder-color":$e,"--n-placeholder-color-disabled":o,"--n-text-color":De,"--n-text-color-disabled":pe,"--n-arrow-color":Gn,"--n-arrow-color-disabled":Un,"--n-loading-color":qn,"--n-color-active-warning":Xn,"--n-box-shadow-focus-warning":Yn,"--n-box-shadow-active-warning":Zn,"--n-box-shadow-hover-warning":Jn,"--n-border-warning":Qn,"--n-border-focus-warning":et,"--n-border-hover-warning":nt,"--n-border-active-warning":tt,"--n-color-active-error":it,"--n-box-shadow-focus-error":lt,"--n-box-shadow-active-error":ot,"--n-box-shadow-hover-error":rt,"--n-border-error":at,"--n-border-focus-error":st,"--n-border-hover-error":dt,"--n-border-active-error":ut,"--n-clear-size":gt,"--n-clear-color":ct,"--n-clear-color-hover":ft,"--n-clear-color-pressed":ht,"--n-arrow-size":vt,"--n-font-weight":J}}),ie=Oe?Ye("internal-selection",_(()=>e.size[0]),we,e):void 0;return{mergedTheme:k,mergedClearable:F,mergedClsPrefix:n,rtlEnabled:i,patternInputFocused:z,filterablePlaceholder:O,label:b,selected:y,showTagsPanel:x,isComposing:Q,counterRef:d,counterWrapperRef:p,patternInputMirrorRef:l,patternInputRef:s,selfRef:r,multipleElRef:a,singleElRef:h,patternInputWrapperRef:u,overflowRef:S,inputTagElRef:T,handleMouseDown:q,handleFocusin:R,handleClear:G,handleMouseEnter:Z,handleMouseLeave:U,handleDeleteOption:V,handlePatternKeyDown:v,handlePatternInputInput:j,handlePatternInputBlur:fe,handlePatternInputFocus:Re,handleMouseEnterCounter:Me,handleMouseLeaveCounter:_e,handleFocusout:$,handleCompositionEnd:Se,handleCompositionStart:le,onPopoverUpdateShow:Ae,focus:Te,focusInput:ve,blur:oe,blurInput:Fe,updateCounter:Pe,getCounter:Ie,getTail:ze,renderLabel:e.renderLabel,cssVars:Oe?void 0:we,themeClass:ie==null?void 0:ie.themeClass,onRender:ie==null?void 0:ie.onRender}},render(){const{status:e,multiple:n,size:t,disabled:i,filterable:l,maxTagCount:s,bordered:r,clsPrefix:a,ellipsisTagPopoverProps:h,onRender:u,renderTag:d,renderLabel:p}=this;u==null||u();const S=s==="responsive",T=typeof s=="number",x=S||T,z=c($t,null,{default:()=>c(Dt,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var k,F;return(F=(k=this.$slots).arrow)===null||F===void 0?void 0:F.call(k)}})});let W;if(n){const{labelField:k}=this,F=g=>c("div",{class:`${a}-base-selection-tag-wrapper`,key:g.value},d?d({option:g,handleClose:()=>{this.handleDeleteOption(g)}}):c(nn,{size:t,closable:!g.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(g)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>p?p(g,!0):ke(g[k],g,!0)})),O=()=>(T?this.selectedOptions.slice(0,s):this.selectedOptions).map(F),b=l?c("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),c("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,y=S?()=>c("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},c(nn,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let N;if(T){const g=this.selectedOptions.length-s;g>0&&(N=c("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},c(nn,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${g}`})))}const E=S?l?c(On,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:O,counter:y,tail:()=>b}):c(On,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:O,counter:y}):T&&N?O().concat(N):O(),X=x?()=>c("div",{class:`${a}-base-selection-popover`},S?O():this.selectedOptions.map(F)):void 0,Y=x?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},h):null,te=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},c("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,ae=l?c("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},E,S?null:b,z):c("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:i?void 0:0},E,z);W=c(Tt,null,x?c(At,Object.assign({},Y,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ae,default:X}):ae,te)}else if(l){const k=this.pattern||this.isComposing,F=this.active?!k:!this.selected,O=this.active?!1:this.selected;W=c("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:kn(this.label)},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),O?c("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},c("div",{class:`${a}-base-selection-overlay__wrapper`},d?d({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):ke(this.label,this.selectedOption,!0))):null,F?c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,z)}else W=c("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?c("div",{class:`${a}-base-selection-input`,title:kn(this.label),key:"input"},c("div",{class:`${a}-base-selection-input__content`},d?d({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):ke(this.label,this.selectedOption,!0))):c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),z);return c("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},W,r?c("div",{class:`${a}-base-selection__border`}):null,r?c("div",{class:`${a}-base-selection__state-border`}):null)}});function qe(e){return e.type==="group"}function Hn(e){return e.type==="ignored"}function dn(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Ai(e,n){return{getIsGroup:qe,getIgnored:Hn,getKey(i){return qe(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[n]}}}function Bi(e,n,t,i){if(!n)return e;function l(s){if(!Array.isArray(s))return[];const r=[];for(const a of s)if(qe(a)){const h=l(a[i]);h.length&&r.push(Object.assign({},a,{[i]:h}))}else{if(Hn(a))continue;n(t,a)&&r.push(a)}return r}return l(e)}function Ei(e,n,t){const i=new Map;return e.forEach(l=>{qe(l)?l[t].forEach(s=>{i.set(s[n],s)}):i.set(l[n],l)}),i}const Ni=de([K("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),K("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Ln({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Li=Object.assign(Object.assign({},be.props),{to:hn.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),qi=se({name:"Select",props:Li,slots:Object,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,namespaceRef:i,inlineThemeDisabled:l}=Xe(e),s=be("Select","-select",Ni,Mt,e,n),r=I(e.defaultValue),a=ne(e,"value"),h=Cn(a,r),u=I(!1),d=I(""),p=It(e,["items","options"]),S=I([]),T=I([]),x=_(()=>T.value.concat(S.value).concat(p.value)),z=_(()=>{const{filter:o}=e;if(o)return o;const{labelField:m,valueField:P}=e;return(D,A)=>{if(!A)return!1;const M=A[m];if(typeof M=="string")return dn(D,M);const B=A[P];return typeof B=="string"?dn(D,B):typeof B=="number"?dn(D,String(B)):!1}}),W=_(()=>{if(e.remote)return p.value;{const{value:o}=x,{value:m}=d;return!m.length||!e.filterable?o:Bi(o,z.value,m,e.childrenField)}}),k=_(()=>{const{valueField:o,childrenField:m}=e,P=Ai(o,m);return Ti(W.value,P)}),F=_(()=>Ei(x.value,e.valueField,e.childrenField)),O=I(!1),b=Cn(ne(e,"show"),O),y=I(null),N=I(null),E=I(null),{localeRef:X}=$n("Select"),Y=_(()=>{var o;return(o=e.placeholder)!==null&&o!==void 0?o:X.value.placeholder}),L=[],te=I(new Map),ae=_(()=>{const{fallbackOption:o}=e;if(o===void 0){const{labelField:m,valueField:P}=e;return D=>({[m]:String(D),[P]:D})}return o===!1?!1:m=>Object.assign(o(m),{value:m})});function g(o){const m=e.remote,{value:P}=te,{value:D}=F,{value:A}=ae,M=[];return o.forEach(B=>{if(D.has(B))M.push(D.get(B));else if(m&&P.has(B))M.push(P.get(B));else if(A){const ee=A(B);ee&&M.push(ee)}}),M}const R=_(()=>{if(e.multiple){const{value:o}=h;return Array.isArray(o)?g(o):[]}return null}),$=_(()=>{const{value:o}=h;return!e.multiple&&!Array.isArray(o)?o===null?null:g([o])[0]||null:null}),G=Wt(e),{mergedSizeRef:Z,mergedDisabledRef:U,mergedStatusRef:q}=G;function V(o,m){const{onChange:P,"onUpdate:value":D,onUpdateValue:A}=e,{nTriggerFormChange:M,nTriggerFormInput:B}=G;P&&ce(P,o,m),A&&ce(A,o,m),D&&ce(D,o,m),r.value=o,M(),B()}function Q(o){const{onBlur:m}=e,{nTriggerFormBlur:P}=G;m&&ce(m,o),P()}function v(){const{onClear:o}=e;o&&ce(o)}function w(o){const{onFocus:m,showOnFocus:P}=e,{nTriggerFormFocus:D}=G;m&&ce(m,o),D(),P&&fe()}function j(o){const{onSearch:m}=e;m&&ce(m,o)}function le(o){const{onScroll:m}=e;m&&ce(m,o)}function Se(){var o;const{remote:m,multiple:P}=e;if(m){const{value:D}=te;if(P){const{valueField:A}=e;(o=R.value)===null||o===void 0||o.forEach(M=>{D.set(M[A],M)})}else{const A=$.value;A&&D.set(A[e.valueField],A)}}}function Re(o){const{onUpdateShow:m,"onUpdate:show":P}=e;m&&ce(m,o),P&&ce(P,o),O.value=o}function fe(){U.value||(Re(!0),O.value=!0,e.filterable&&Ke())}function oe(){Re(!1)}function Te(){d.value="",T.value=L}const ve=I(!1);function Fe(){e.filterable&&(ve.value=!0)}function Pe(){e.filterable&&(ve.value=!1,b.value||Te())}function Ie(){U.value||(b.value?e.filterable?Ke():oe():fe())}function ze(o){var m,P;!((P=(m=E.value)===null||m===void 0?void 0:m.selfRef)===null||P===void 0)&&P.contains(o.relatedTarget)||(u.value=!1,Q(o),oe())}function me(o){w(o),u.value=!0}function ye(){u.value=!0}function Me(o){var m;!((m=y.value)===null||m===void 0)&&m.$el.contains(o.relatedTarget)||(u.value=!1,Q(o),oe())}function _e(){var o;(o=y.value)===null||o===void 0||o.focus(),oe()}function Ae(o){var m;b.value&&(!((m=y.value)===null||m===void 0)&&m.$el.contains(Kt(o))||oe())}function Oe(o){if(!Array.isArray(o))return[];if(ae.value)return Array.from(o);{const{remote:m}=e,{value:P}=F;if(m){const{value:D}=te;return o.filter(A=>P.has(A)||D.has(A))}else return o.filter(D=>P.has(D))}}function we(o){ie(o.rawNode)}function ie(o){if(U.value)return;const{tag:m,remote:P,clearFilterAfterSelect:D,valueField:A}=e;if(m&&!P){const{value:M}=T,B=M[0]||null;if(B){const ee=S.value;ee.length?ee.push(B):S.value=[B],T.value=L}}if(P&&te.value.set(o[A],o),e.multiple){const M=Oe(h.value),B=M.findIndex(ee=>ee===o[A]);if(~B){if(M.splice(B,1),m&&!P){const ee=f(o[A]);~ee&&(S.value.splice(ee,1),D&&(d.value=""))}}else M.push(o[A]),D&&(d.value="");V(M,g(M))}else{if(m&&!P){const M=f(o[A]);~M?S.value=[S.value[M]]:S.value=L}De(),oe(),V(o[A],o)}}function f(o){return S.value.findIndex(P=>P[e.valueField]===o)}function C(o){b.value||fe();const{value:m}=o.target;d.value=m;const{tag:P,remote:D}=e;if(j(m),P&&!D){if(!m){T.value=L;return}const{onCreate:A}=e,M=A?A(m):{[e.labelField]:m,[e.valueField]:m},{valueField:B,labelField:ee}=e;p.value.some(ue=>ue[B]===M[B]||ue[ee]===M[ee])||S.value.some(ue=>ue[B]===M[B]||ue[ee]===M[ee])?T.value=L:T.value=[M]}}function J(o){o.stopPropagation();const{multiple:m}=e;!m&&e.filterable&&oe(),v(),m?V([],[]):V(null,null)}function Ze(o){!Ne(o,"action")&&!Ne(o,"empty")&&!Ne(o,"header")&&o.preventDefault()}function Je(o){le(o)}function $e(o){var m,P,D,A,M;if(!e.keyboard){o.preventDefault();return}switch(o.key){case" ":if(e.filterable)break;o.preventDefault();case"Enter":if(!(!((m=y.value)===null||m===void 0)&&m.isComposing)){if(b.value){const B=(P=E.value)===null||P===void 0?void 0:P.getPendingTmNode();B?we(B):e.filterable||(oe(),De())}else if(fe(),e.tag&&ve.value){const B=T.value[0];if(B){const ee=B[e.valueField],{value:ue}=h;e.multiple&&Array.isArray(ue)&&ue.includes(ee)||ie(B)}}}o.preventDefault();break;case"ArrowUp":if(o.preventDefault(),e.loading)return;b.value&&((D=E.value)===null||D===void 0||D.prev());break;case"ArrowDown":if(o.preventDefault(),e.loading)return;b.value?(A=E.value)===null||A===void 0||A.next():fe();break;case"Escape":b.value&&(Zt(o),oe()),(M=y.value)===null||M===void 0||M.focus();break}}function De(){var o;(o=y.value)===null||o===void 0||o.focus()}function Ke(){var o;(o=y.value)===null||o===void 0||o.focusInput()}function Qe(){var o;b.value&&((o=N.value)===null||o===void 0||o.syncPosition())}Se(),Ce(ne(e,"options"),Se);const en={focus:()=>{var o;(o=y.value)===null||o===void 0||o.focus()},focusInput:()=>{var o;(o=y.value)===null||o===void 0||o.focusInput()},blur:()=>{var o;(o=y.value)===null||o===void 0||o.blur()},blurInput:()=>{var o;(o=y.value)===null||o===void 0||o.blurInput()}},We=_(()=>{const{self:{menuBoxShadow:o}}=s.value;return{"--n-menu-box-shadow":o}}),pe=l?Ye("select",void 0,We,e):void 0;return Object.assign(Object.assign({},en),{mergedStatus:q,mergedClsPrefix:n,mergedBordered:t,namespace:i,treeMate:k,isMounted:zt(),triggerRef:y,menuRef:E,pattern:d,uncontrolledShow:O,mergedShow:b,adjustedTo:hn(e),uncontrolledValue:r,mergedValue:h,followerRef:N,localizedPlaceholder:Y,selectedOption:$,selectedOptions:R,mergedSize:Z,mergedDisabled:U,focused:u,activeWithoutMenuOpen:ve,inlineThemeDisabled:l,onTriggerInputFocus:Fe,onTriggerInputBlur:Pe,handleTriggerOrMenuResize:Qe,handleMenuFocus:ye,handleMenuBlur:Me,handleMenuTabOut:_e,handleTriggerClick:Ie,handleToggle:we,handleDeleteOption:ie,handlePatternInput:C,handleClear:J,handleTriggerBlur:ze,handleTriggerFocus:me,handleKeydown:$e,handleMenuAfterLeave:Te,handleMenuClickOutside:Ae,handleMenuScroll:Je,handleMenuKeydown:$e,handleMenuMousedown:Ze,mergedTheme:s,cssVars:l?void 0:We,themeClass:pe==null?void 0:pe.themeClass,onRender:pe==null?void 0:pe.onRender})},render(){return c("div",{class:`${this.mergedClsPrefix}-select`},c(Bt,null,{default:()=>[c(Et,null,{default:()=>c(_i,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),c(Nt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===hn.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>c(Bn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,t;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Ft(c(zi,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,l;return[(l=(i=this.$slots).empty)===null||l===void 0?void 0:l.call(i)]},header:()=>{var i,l;return[(l=(i=this.$slots).header)===null||l===void 0?void 0:l.call(i)]},action:()=>{var i,l;return[(l=(i=this.$slots).action)===null||l===void 0?void 0:l.call(i)]}}),this.displayDirective==="show"?[[Pt,this.mergedShow],[yn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[yn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{qi as N};
