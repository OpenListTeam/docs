import{a6 as ce,t as l,B as d,n,D as ae,E as le,p as b,G as t,ac as de,q as ie,ad as te,r as T,u as se,a5 as be,ae as ue,aa as he,v as V,H as fe,e as I,x as ke,af as xe,ag as ve,A as K}from"./app-DPlz1MvO.js";import{r as me,c as $}from"./resolve-slot-D4Ofmcf-.js";import{u as ge}from"./use-merged-state-DMC-ASEv.js";import{u as pe}from"./browser-CBVGoKEQ.js";import{o as Ce}from"./Input-CoQW3DYb.js";const we=ce("n-checkbox-group"),ye=()=>l("svg",{viewBox:"0 0 64 64",class:"check-icon"},l("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),ze=()=>l("svg",{viewBox:"0 0 100 100",class:"line-icon"},l("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Re=d([n("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[b("show-label","line-height: var(--n-label-line-height);"),d("&:hover",[n("checkbox-box",[t("border","border: var(--n-border-checked);")])]),d("&:focus:not(:active)",[n("checkbox-box",[t("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),b("inside-table",[n("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),b("checked",[n("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[n("checkbox-icon",[d(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),b("indeterminate",[n("checkbox-box",[n("checkbox-icon",[d(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),d(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),b("checked, indeterminate",[d("&:focus:not(:active)",[n("checkbox-box",[t("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),n("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[t("border",{border:"var(--n-border-checked)"})])]),b("disabled",{cursor:"not-allowed"},[b("checked",[n("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[t("border",{border:"var(--n-border-disabled-checked)"}),n("checkbox-icon",[d(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),n("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[t("border",`
 border: var(--n-border-disabled);
 `),n("checkbox-icon",[d(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),t("label",`
 color: var(--n-text-color-disabled);
 `)]),n("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),n("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[t("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),n("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[d(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),de({left:"1px",top:"1px"})])]),t("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[d("&:empty",{display:"none"})])]),ae(n("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),le(n("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Se=Object.assign(Object.assign({},V.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Ie=ie({name:"Checkbox",props:Se,setup(o){const a=he(we,null),u=T(null),{mergedClsPrefixRef:h,inlineThemeDisabled:m,mergedRtlRef:D}=se(o),w=T(o.defaultChecked),y=be(o,"checked"),z=ge(y,w),r=ue(()=>{if(a){const e=a.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return z.value===o.checkedValue}),g=pe(o,{mergedSize(e){const{size:i}=o;if(i!==void 0)return i;if(a){const{value:c}=a.mergedSizeRef;if(c!==void 0)return c}if(e){const{mergedSize:c}=e;if(c!==void 0)return c.value}return"medium"},mergedDisabled(e){const{disabled:i}=o;if(i!==void 0)return i;if(a){if(a.disabledRef.value)return!0;const{maxRef:{value:c},checkedCountRef:s}=a;if(c!==void 0&&s.value>=c&&!r.value)return!0;const{minRef:{value:x}}=a;if(x!==void 0&&s.value<=x&&r.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:p,mergedSizeRef:R}=g,S=V("Checkbox","-checkbox",Re,ve,o,h);function C(e){if(a&&o.value!==void 0)a.toggleCheckbox(!r.value,o.value);else{const{onChange:i,"onUpdate:checked":c,onUpdateChecked:s}=o,{nTriggerFormInput:x,nTriggerFormChange:M}=g,v=r.value?o.uncheckedValue:o.checkedValue;c&&$(c,v,e),s&&$(s,v,e),i&&$(i,v,e),x(),M(),w.value=v}}function f(e){p.value||C(e)}function N(e){if(!p.value)switch(e.key){case" ":case"Enter":C(e)}}function _(e){switch(e.key){case" ":e.preventDefault()}}const j={focus:()=>{var e;(e=u.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=u.value)===null||e===void 0||e.blur()}},E=fe("Checkbox",D,h),B=I(()=>{const{value:e}=R,{common:{cubicBezierEaseInOut:i},self:{borderRadius:c,color:s,colorChecked:x,colorDisabled:M,colorTableHeader:v,colorTableHeaderModal:F,colorTableHeaderPopover:H,checkMarkColor:P,checkMarkColorDisabled:U,border:A,borderFocus:L,borderDisabled:O,borderChecked:G,boxShadowFocus:W,textColor:q,textColorDisabled:Y,checkMarkColorDisabledChecked:J,colorDisabledChecked:Q,borderDisabledChecked:X,labelPadding:Z,labelLineHeight:ee,labelFontWeight:oe,[K("fontSize",e)]:re,[K("size",e)]:ne}}=S.value;return{"--n-label-line-height":ee,"--n-label-font-weight":oe,"--n-size":ne,"--n-bezier":i,"--n-border-radius":c,"--n-border":A,"--n-border-checked":G,"--n-border-focus":L,"--n-border-disabled":O,"--n-border-disabled-checked":X,"--n-box-shadow-focus":W,"--n-color":s,"--n-color-checked":x,"--n-color-table":v,"--n-color-table-modal":F,"--n-color-table-popover":H,"--n-color-disabled":M,"--n-color-disabled-checked":Q,"--n-text-color":q,"--n-text-color-disabled":Y,"--n-check-mark-color":P,"--n-check-mark-color-disabled":U,"--n-check-mark-color-disabled-checked":J,"--n-font-size":re,"--n-label-padding":Z}}),k=m?ke("checkbox",I(()=>R.value[0]),B,o):void 0;return Object.assign(g,j,{rtlEnabled:E,selfRef:u,mergedClsPrefix:h,mergedDisabled:p,renderedChecked:r,mergedTheme:S,labelId:xe(),handleClick:f,handleKeyUp:N,handleKeyDown:_,cssVars:m?void 0:B,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender})},render(){var o;const{$slots:a,renderedChecked:u,mergedDisabled:h,indeterminate:m,privateInsideTable:D,cssVars:w,labelId:y,label:z,mergedClsPrefix:r,focusable:g,handleKeyUp:p,handleKeyDown:R,handleClick:S}=this;(o=this.onRender)===null||o===void 0||o.call(this);const C=me(a.default,f=>z||f?l("span",{class:`${r}-checkbox__label`,id:y},z||f):null);return l("div",{ref:"selfRef",class:[`${r}-checkbox`,this.themeClass,this.rtlEnabled&&`${r}-checkbox--rtl`,u&&`${r}-checkbox--checked`,h&&`${r}-checkbox--disabled`,m&&`${r}-checkbox--indeterminate`,D&&`${r}-checkbox--inside-table`,C&&`${r}-checkbox--show-label`],tabindex:h||!g?void 0:0,role:"checkbox","aria-checked":m?"mixed":u,"aria-labelledby":y,style:w,onKeyup:p,onKeydown:R,onClick:S,onMousedown:()=>{Ce("selectstart",window,f=>{f.preventDefault()},{once:!0})}},l("div",{class:`${r}-checkbox-box-wrapper`}," ",l("div",{class:`${r}-checkbox-box`},l(te,null,{default:()=>this.indeterminate?l("div",{key:"indeterminate",class:`${r}-checkbox-icon`},ze()):l("div",{key:"check",class:`${r}-checkbox-icon`},ye())}),l("div",{class:`${r}-checkbox-box__border`}))),C)}});export{Ie as N};
