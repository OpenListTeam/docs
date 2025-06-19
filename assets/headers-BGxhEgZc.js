import{n as w,B as d,p as h,q as z,t as $,u as v,v as c,e as f,x as T,z as B,A as a}from"./app-Bg1o9gTo.js";const R=w("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[d("&:first-child",{marginTop:0}),h("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[h("align-text",{paddingLeft:0},[d("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),d("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),d("&::before",{backgroundColor:"var(--n-bar-color)"})])]),P=Object.assign(Object.assign({},c.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),W=n=>z({name:`H${n}`,props:P,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:s}=v(e),t=c("Typography","-h",R,B,e,i),o=f(()=>{const{type:l}=e,{common:{cubicBezierEaseInOut:g},self:{headerFontWeight:u,headerTextColor:p,[a("headerPrefixWidth",n)]:b,[a("headerFontSize",n)]:m,[a("headerMargin",n)]:x,[a("headerBarWidth",n)]:C,[a("headerBarColor",l)]:y}}=t.value;return{"--n-bezier":g,"--n-font-size":m,"--n-margin":x,"--n-bar-color":y,"--n-bar-width":C,"--n-font-weight":u,"--n-text-color":p,"--n-prefix-width":b}}),r=s?T(`h${n}`,f(()=>e.type[0]),o,e):void 0;return{mergedClsPrefix:i,cssVars:s?void 0:o,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{prefix:i,alignText:s,mergedClsPrefix:t,cssVars:o,$slots:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),$(`h${n}`,{class:[`${t}-h`,`${t}-h${n}`,this.themeClass,{[`${t}-h--prefix-bar`]:i,[`${t}-h--align-text`]:s}],style:o},r)}}),S=W("1");export{S as N};
