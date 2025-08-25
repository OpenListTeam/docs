import{i as ee,C as oe,F as re,h as n,j as C,k as te,l as ne,m as ae,n as l,p as s,d as k,q as f,s as T,v as S,x as de,y as ie,z as y,A as m,B as se,D as E,N as le,E as ce}from"./app-BEieDpFY.js";function pe(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}function P(e,...o){if(Array.isArray(e))e.forEach(d=>P(d,...o));else return e(...o)}function h(e){return e.some(o=>ee(o)?!(o.type===oe||o.type===re&&!h(o.children)):!0)?e:null}function xe(e,o,d){return e&&h(e(o))||d(o)}function x(e,o){const d=e&&h(e());return o(d||null)}function Ce(e,o,d){const r=e&&h(e(o));return d(r||null)}function ze(e){return!(e&&h(e()))}const be=n([C("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[ae({background:"var(--n-color-modal)"}),l("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),l("content-segmented",[n(">",[s("content",{paddingTop:"var(--n-padding-bottom)"})])]),l("content-soft-segmented",[n(">",[s("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),l("footer-segmented",[n(">",[s("footer",{paddingTop:"var(--n-padding-bottom)"})])]),l("footer-soft-segmented",[n(">",[s("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),n(">",[C("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[s("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),s("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),s("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),s("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),s("content","flex: 1; min-width: 0;"),s("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[n("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),s("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),C("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[n("img",`
 display: block;
 width: 100%;
 `)]),l("bordered",`
 border: 1px solid var(--n-border-color);
 `,[n("&:target","border-color: var(--n-color-target);")]),l("action-segmented",[n(">",[s("action",[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("content-segmented, content-soft-segmented",[n(">",[s("content",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("footer-segmented, footer-soft-segmented",[n(">",[s("footer",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("embedded",`
 background-color: var(--n-color-embedded);
 `)]),te(C("card",`
 background: var(--n-color-modal);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),ne(C("card",`
 background: var(--n-color-popover);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),he={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},ge=Object.assign(Object.assign({},S.props),he),ye=k({name:"Card",props:ge,slots:Object,setup(e){const o=()=>{const{onClose:a}=e;a&&P(a)},{inlineThemeDisabled:d,mergedClsPrefixRef:r,mergedRtlRef:g}=T(e),b=S("Card","-card",be,de,e,r),c=ie("Card",g,r),v=y(()=>{const{size:a}=e,{self:{color:t,colorModal:u,colorTarget:z,textColor:p,titleTextColor:$,titleFontWeight:w,borderColor:R,actionColor:B,borderRadius:F,lineHeight:_,closeIconColor:O,closeIconColorHover:j,closeIconColorPressed:W,closeColorHover:V,closeColorPressed:H,closeBorderRadius:M,closeIconSize:N,closeSize:I,boxShadow:L,colorPopover:A,colorEmbedded:D,colorEmbeddedModal:q,colorEmbeddedPopover:K,[m("padding",a)]:G,[m("fontSize",a)]:J,[m("titleFontSize",a)]:Q},common:{cubicBezierEaseInOut:U}}=b.value,{top:X,left:Y,bottom:Z}=se(G);return{"--n-bezier":U,"--n-border-radius":F,"--n-color":t,"--n-color-modal":u,"--n-color-popover":A,"--n-color-embedded":D,"--n-color-embedded-modal":q,"--n-color-embedded-popover":K,"--n-color-target":z,"--n-text-color":p,"--n-line-height":_,"--n-action-color":B,"--n-title-text-color":$,"--n-title-font-weight":w,"--n-close-icon-color":O,"--n-close-icon-color-hover":j,"--n-close-icon-color-pressed":W,"--n-close-color-hover":V,"--n-close-color-pressed":H,"--n-border-color":R,"--n-box-shadow":L,"--n-padding-top":X,"--n-padding-bottom":Z,"--n-padding-left":Y,"--n-font-size":J,"--n-title-font-size":Q,"--n-close-size":I,"--n-close-icon-size":N,"--n-close-border-radius":M}}),i=d?E("card",y(()=>e.size[0]),v,e):void 0;return{rtlEnabled:c,mergedClsPrefix:r,mergedTheme:b,handleCloseClick:o,cssVars:d?void 0:v,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{segmented:e,bordered:o,hoverable:d,mergedClsPrefix:r,rtlEnabled:g,onRender:b,embedded:c,tag:v,$slots:i}=this;return b==null||b(),f(v,{class:[`${r}-card`,this.themeClass,c&&`${r}-card--embedded`,{[`${r}-card--rtl`]:g,[`${r}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:o,[`${r}-card--hoverable`]:d}],style:this.cssVars,role:this.role},x(i.cover,a=>{const t=this.cover?h([this.cover()]):a;return t&&f("div",{class:`${r}-card-cover`,role:"none"},t)}),x(i.header,a=>{const{title:t}=this,u=t?h(typeof t=="function"?[t()]:[t]):a;return u||this.closable?f("div",{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},f("div",{class:`${r}-card-header__main`,role:"heading"},u),x(i["header-extra"],z=>{const p=this.headerExtra?h([this.headerExtra()]):z;return p&&f("div",{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},p)}),this.closable&&f(le,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),x(i.default,a=>{const{content:t}=this,u=t?h(typeof t=="function"?[t()]:[t]):a;return u&&f("div",{class:[`${r}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},u)}),x(i.footer,a=>{const t=this.footer?h([this.footer()]):a;return t&&f("div",{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},t)}),x(i.action,a=>{const t=this.action?h([this.action()]):a;return t&&f("div",{class:`${r}-card__action`,role:"none"},t)}))}}),fe=C("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[n("&:first-child",{marginTop:0}),l("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[l("align-text",{paddingLeft:0},[n("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),n("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),n("&::before",{backgroundColor:"var(--n-bar-color)"})])]),ue=Object.assign(Object.assign({},S.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),me=e=>k({name:`H${e}`,props:ue,setup(o){const{mergedClsPrefixRef:d,inlineThemeDisabled:r}=T(o),g=S("Typography","-h",fe,ce,o,d),b=y(()=>{const{type:v}=o,{common:{cubicBezierEaseInOut:i},self:{headerFontWeight:a,headerTextColor:t,[m("headerPrefixWidth",e)]:u,[m("headerFontSize",e)]:z,[m("headerMargin",e)]:p,[m("headerBarWidth",e)]:$,[m("headerBarColor",v)]:w}}=g.value;return{"--n-bezier":i,"--n-font-size":z,"--n-margin":p,"--n-bar-color":w,"--n-bar-width":$,"--n-font-weight":a,"--n-text-color":t,"--n-prefix-width":u}}),c=r?E(`h${e}`,y(()=>o.type[0]),b,o):void 0;return{mergedClsPrefix:d,cssVars:r?void 0:b,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var o;const{prefix:d,alignText:r,mergedClsPrefix:g,cssVars:b,$slots:c}=this;return(o=this.onRender)===null||o===void 0||o.call(this),f(`h${e}`,{class:[`${g}-h`,`${g}-h${e}`,this.themeClass,{[`${g}-h--prefix-bar`]:d,[`${g}-h--align-text`]:r}],style:b},c)}}),Se=me("1");export{ye as N,P as a,Se as b,pe as c,xe as d,Ce as e,ze as i,x as r};
