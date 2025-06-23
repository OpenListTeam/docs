import{m as ee,n as oe,F as re,p as t,q as C,u as ne,v as te,x as ae,y as l,z as s,k,A as h,B as T,D as S,E as de,G as y,H as E,N as ie,J as se,K as m,L as le,M as ce}from"./app-CTn4Lgwz.js";function ve(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}function P(e,...o){if(Array.isArray(e))e.forEach(d=>P(d,...o));else return e(...o)}function b(e){return e.some(o=>ee(o)?!(o.type===oe||o.type===re&&!b(o.children)):!0)?e:null}function xe(e,o,d){return e&&b(e(o))||d(o)}function x(e,o){const d=e&&b(e());return o(d||null)}function Ce(e,o,d){const r=e&&b(e(o));return d(r||null)}function ze(e){return!(e&&b(e()))}const fe=t([C("card",`
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
 `,[ae({background:"var(--n-color-modal)"}),l("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),l("content-segmented",[t(">",[s("content",{paddingTop:"var(--n-padding-bottom)"})])]),l("content-soft-segmented",[t(">",[s("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),l("footer-segmented",[t(">",[s("footer",{paddingTop:"var(--n-padding-bottom)"})])]),l("footer-soft-segmented",[t(">",[s("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[C("card-header",`
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
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),s("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),C("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),l("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),l("action-segmented",[t(">",[s("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("content-segmented, content-soft-segmented",[t(">",[s("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("footer-segmented, footer-soft-segmented",[t(">",[s("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("embedded",`
 background-color: var(--n-color-embedded);
 `)]),ne(C("card",`
 background: var(--n-color-modal);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),te(C("card",`
 background: var(--n-color-popover);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),be={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},ge=Object.assign(Object.assign({},S.props),be),ye=k({name:"Card",props:ge,slots:Object,setup(e){const o=()=>{const{onClose:a}=e;a&&P(a)},{inlineThemeDisabled:d,mergedClsPrefixRef:r,mergedRtlRef:g}=T(e),f=S("Card","-card",fe,se,e,r),c=de("Card",g,r),p=y(()=>{const{size:a}=e,{self:{color:n,colorModal:u,colorTarget:z,textColor:v,titleTextColor:$,titleFontWeight:w,borderColor:R,actionColor:B,borderRadius:F,lineHeight:_,closeIconColor:O,closeIconColorHover:j,closeIconColorPressed:W,closeColorHover:H,closeColorPressed:V,closeBorderRadius:M,closeIconSize:N,closeSize:I,boxShadow:L,colorPopover:A,colorEmbedded:D,colorEmbeddedModal:K,colorEmbeddedPopover:q,[m("padding",a)]:G,[m("fontSize",a)]:J,[m("titleFontSize",a)]:Q},common:{cubicBezierEaseInOut:U}}=f.value,{top:X,left:Y,bottom:Z}=le(G);return{"--n-bezier":U,"--n-border-radius":F,"--n-color":n,"--n-color-modal":u,"--n-color-popover":A,"--n-color-embedded":D,"--n-color-embedded-modal":K,"--n-color-embedded-popover":q,"--n-color-target":z,"--n-text-color":v,"--n-line-height":_,"--n-action-color":B,"--n-title-text-color":$,"--n-title-font-weight":w,"--n-close-icon-color":O,"--n-close-icon-color-hover":j,"--n-close-icon-color-pressed":W,"--n-close-color-hover":H,"--n-close-color-pressed":V,"--n-border-color":R,"--n-box-shadow":L,"--n-padding-top":X,"--n-padding-bottom":Z,"--n-padding-left":Y,"--n-font-size":J,"--n-title-font-size":Q,"--n-close-size":I,"--n-close-icon-size":N,"--n-close-border-radius":M}}),i=d?E("card",y(()=>e.size[0]),p,e):void 0;return{rtlEnabled:c,mergedClsPrefix:r,mergedTheme:f,handleCloseClick:o,cssVars:d?void 0:p,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{segmented:e,bordered:o,hoverable:d,mergedClsPrefix:r,rtlEnabled:g,onRender:f,embedded:c,tag:p,$slots:i}=this;return f==null||f(),h(p,{class:[`${r}-card`,this.themeClass,c&&`${r}-card--embedded`,{[`${r}-card--rtl`]:g,[`${r}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:o,[`${r}-card--hoverable`]:d}],style:this.cssVars,role:this.role},x(i.cover,a=>{const n=this.cover?b([this.cover()]):a;return n&&h("div",{class:`${r}-card-cover`,role:"none"},n)}),x(i.header,a=>{const{title:n}=this,u=n?b(typeof n=="function"?[n()]:[n]):a;return u||this.closable?h("div",{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},h("div",{class:`${r}-card-header__main`,role:"heading"},u),x(i["header-extra"],z=>{const v=this.headerExtra?b([this.headerExtra()]):z;return v&&h("div",{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},v)}),this.closable&&h(ie,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),x(i.default,a=>{const{content:n}=this,u=n?b(typeof n=="function"?[n()]:[n]):a;return u&&h("div",{class:[`${r}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},u)}),x(i.footer,a=>{const n=this.footer?b([this.footer()]):a;return n&&h("div",{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},n)}),x(i.action,a=>{const n=this.action?b([this.action()]):a;return n&&h("div",{class:`${r}-card__action`,role:"none"},n)}))}}),he=C("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[t("&:first-child",{marginTop:0}),l("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[l("align-text",{paddingLeft:0},[t("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),t("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),t("&::before",{backgroundColor:"var(--n-bar-color)"})])]),ue=Object.assign(Object.assign({},S.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),me=e=>k({name:`H${e}`,props:ue,setup(o){const{mergedClsPrefixRef:d,inlineThemeDisabled:r}=T(o),g=S("Typography","-h",he,ce,o,d),f=y(()=>{const{type:p}=o,{common:{cubicBezierEaseInOut:i},self:{headerFontWeight:a,headerTextColor:n,[m("headerPrefixWidth",e)]:u,[m("headerFontSize",e)]:z,[m("headerMargin",e)]:v,[m("headerBarWidth",e)]:$,[m("headerBarColor",p)]:w}}=g.value;return{"--n-bezier":i,"--n-font-size":z,"--n-margin":v,"--n-bar-color":w,"--n-bar-width":$,"--n-font-weight":a,"--n-text-color":n,"--n-prefix-width":u}}),c=r?E(`h${e}`,y(()=>o.type[0]),f,o):void 0;return{mergedClsPrefix:d,cssVars:r?void 0:f,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var o;const{prefix:d,alignText:r,mergedClsPrefix:g,cssVars:f,$slots:c}=this;return(o=this.onRender)===null||o===void 0||o.call(this),h(`h${e}`,{class:[`${g}-h`,`${g}-h${e}`,this.themeClass,{[`${g}-h--prefix-bar`]:d,[`${g}-h--align-text`]:r}],style:f},c)}}),Se=me("1");export{Se as N,ve as a,ye as b,P as c,xe as d,Ce as e,ze as i,x as r};
