import{n as ce,p as t,G as h,a3 as z,B as y,q as ae,t as g,N as te,r as le,u as se,v as M,a4 as ie,a5 as de,H as he,e as P,x as ge,a6 as be,a7 as ue,A as c,K as ve}from"./app-esb2I_zW.js";import{r as I,c as fe}from"./resolve-slot-dwppq-H0.js";import{c as _}from"./color-to-class-B0iQgAn2.js";const ke={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Ce=ce("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[t("strong",`
 font-weight: var(--n-font-weight-strong);
 `),h("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),h("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),h("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),h("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),t("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[h("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),h("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),t("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),t("icon, avatar",[t("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),t("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),t("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-hover-checkable);",[z("checked","color: var(--n-text-color-hover-checkable);")]),y("&:active","background-color: var(--n-color-pressed-checkable);",[z("checked","color: var(--n-text-color-pressed-checkable);")])]),t("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-checked-hover);"),y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),pe=Object.assign(Object.assign(Object.assign({},M.props),ke),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),me=be("n-tag"),Be=ae({name:"Tag",props:pe,slots:Object,setup(r){const s=le(null),{mergedBorderedRef:o,mergedClsPrefixRef:b,inlineThemeDisabled:u,mergedRtlRef:B}=se(r),f=M("Tag","-tag",Ce,ue,r,b);ie(me,{roundRef:de(r,"round")});function v(){if(!r.disabled&&r.checkable){const{checked:e,onCheckedChange:n,onUpdateChecked:d,"onUpdate:checked":l}=r;d&&d(!e),l&&l(!e),n&&n(!e)}}function k(e){if(r.triggerClickOnClose||e.stopPropagation(),!r.disabled){const{onClose:n}=r;n&&fe(n,e)}}const C={setTextContent(e){const{value:n}=s;n&&(n.textContent=e)}},p=he("Tag",B,b),a=P(()=>{const{type:e,size:n,color:{color:d,textColor:l}={}}=r,{common:{cubicBezierEaseInOut:m},self:{padding:T,closeMargin:w,borderRadius:O,opacityDisabled:S,textColorCheckable:j,textColorHoverCheckable:H,textColorPressedCheckable:F,textColorChecked:N,colorCheckable:E,colorHoverCheckable:U,colorPressedCheckable:K,colorChecked:D,colorCheckedHover:V,colorCheckedPressed:A,closeBorderRadius:W,fontWeightStrong:q,[c("colorBordered",e)]:G,[c("closeSize",n)]:L,[c("closeIconSize",n)]:J,[c("fontSize",n)]:Q,[c("height",n)]:$,[c("color",e)]:X,[c("textColor",e)]:Y,[c("border",e)]:Z,[c("closeIconColor",e)]:R,[c("closeIconColorHover",e)]:ee,[c("closeIconColorPressed",e)]:oe,[c("closeColorHover",e)]:re,[c("closeColorPressed",e)]:ne}}=f.value,x=ve(w);return{"--n-font-weight-strong":q,"--n-avatar-size-override":`calc(${$} - 8px)`,"--n-bezier":m,"--n-border-radius":O,"--n-border":Z,"--n-close-icon-size":J,"--n-close-color-pressed":ne,"--n-close-color-hover":re,"--n-close-border-radius":W,"--n-close-icon-color":R,"--n-close-icon-color-hover":ee,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":R,"--n-close-margin-top":x.top,"--n-close-margin-right":x.right,"--n-close-margin-bottom":x.bottom,"--n-close-margin-left":x.left,"--n-close-size":L,"--n-color":d||(o.value?G:X),"--n-color-checkable":E,"--n-color-checked":D,"--n-color-checked-hover":V,"--n-color-checked-pressed":A,"--n-color-hover-checkable":U,"--n-color-pressed-checkable":K,"--n-font-size":Q,"--n-height":$,"--n-opacity-disabled":S,"--n-padding":T,"--n-text-color":l||Y,"--n-text-color-checkable":j,"--n-text-color-checked":N,"--n-text-color-hover-checkable":H,"--n-text-color-pressed-checkable":F}}),i=u?ge("tag",P(()=>{let e="";const{type:n,size:d,color:{color:l,textColor:m}={}}=r;return e+=n[0],e+=d[0],l&&(e+=`a${_(l)}`),m&&(e+=`b${_(m)}`),o.value&&(e+="c"),e}),a,r):void 0;return Object.assign(Object.assign({},C),{rtlEnabled:p,mergedClsPrefix:b,contentRef:s,mergedBordered:o,handleClick:v,handleCloseClick:k,cssVars:u?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender})},render(){var r,s;const{mergedClsPrefix:o,rtlEnabled:b,closable:u,color:{borderColor:B}={},round:f,onRender:v,$slots:k}=this;v==null||v();const C=I(k.avatar,a=>a&&g("div",{class:`${o}-tag__avatar`},a)),p=I(k.icon,a=>a&&g("div",{class:`${o}-tag__icon`},a));return g("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:b,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:f,[`${o}-tag--avatar`]:C,[`${o}-tag--icon`]:p,[`${o}-tag--closable`]:u}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},p||C,g("span",{class:`${o}-tag__content`,ref:"contentRef"},(s=(r=this.$slots).default)===null||s===void 0?void 0:s.call(r)),!this.checkable&&u?g(te,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:f,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?g("div",{class:`${o}-tag__border`,style:{borderColor:B}}):null)}});export{Be as N};
