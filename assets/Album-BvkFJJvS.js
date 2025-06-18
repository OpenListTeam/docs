import{B as n,n as C,D as Q,E as W,p as y,a3 as J,q as h,t as k,u as X,v as A,H as Y,e as S,x as Z,aq as $,A as w,a2 as ee,r as x,Q as re,_ as oe,R as p,o as g,m as a,h as s,S as B,k as T,l as m,T as z,g as te,ar as ne,O as le}from"./app-T-xmD80c.js";import{N as ae}from"./Select-Bq1bwSvg.js";import{B as de}from"./Button-Cidx7hP9.js";import{N as se}from"./Input-s-mq-pg7.js";import{N as ie}from"./Alert-DyFVtUX_.js";const ce=n([C("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[n("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[n("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),n("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[n("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),y("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[n("tr",[n("&:last-child",[n("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),y("single-line",[n("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),n("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),y("single-column",[n("tr",[n("&:not(:last-child)",[n("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),y("striped",[n("tr:nth-of-type(even)",[n("td","background-color: var(--n-td-color-striped)")])]),J("bottom-bordered",[n("tr",[n("&:last-child",[n("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),Q(C("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[n("th",`
 background-color: var(--n-th-color-modal);
 `),n("td",`
 background-color: var(--n-td-color-modal);
 `)])),W(C("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[n("th",`
 background-color: var(--n-th-color-popover);
 `),n("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),ue=Object.assign(Object.assign({},A.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),be=h({name:"Table",props:ue,setup(i){const{mergedClsPrefixRef:r,inlineThemeDisabled:v,mergedRtlRef:e}=X(i),_=A("Table","-table",ce,$,i,r),N=Y("Table",e,r),b=S(()=>{const{size:u}=i,{self:{borderColor:c,tdColor:f,tdColorModal:o,tdColorPopover:d,thColor:t,thColorModal:P,thColorPopover:R,thTextColor:I,tdTextColor:E,borderRadius:M,thFontWeight:U,lineHeight:V,borderColorModal:L,borderColorPopover:O,tdColorStriped:j,tdColorStripedModal:D,tdColorStripedPopover:F,[w("fontSize",u)]:H,[w("tdPadding",u)]:q,[w("thPadding",u)]:G},common:{cubicBezierEaseInOut:K}}=_.value;return{"--n-bezier":K,"--n-td-color":f,"--n-td-color-modal":o,"--n-td-color-popover":d,"--n-td-text-color":E,"--n-border-color":c,"--n-border-color-modal":L,"--n-border-color-popover":O,"--n-border-radius":M,"--n-font-size":H,"--n-th-color":t,"--n-th-color-modal":P,"--n-th-color-popover":R,"--n-th-font-weight":U,"--n-th-text-color":I,"--n-line-height":V,"--n-td-padding":q,"--n-th-padding":G,"--n-td-color-striped":j,"--n-td-color-striped-modal":D,"--n-td-color-striped-popover":F}}),l=v?Z("table",S(()=>i.size[0]),b,i):void 0;return{rtlEnabled:N,mergedClsPrefix:r,cssVars:v?void 0:b,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var i;const{mergedClsPrefix:r}=this;return(i=this.onRender)===null||i===void 0||i.call(this),k("table",{class:[`${r}-table`,this.themeClass,{[`${r}-table--rtl`]:this.rtlEnabled,[`${r}-table--bottom-bordered`]:this.bottomBordered,[`${r}-table--bordered`]:this.bordered,[`${r}-table--single-line`]:this.singleLine,[`${r}-table--single-column`]:this.singleColumn,[`${r}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),ge=h({name:"Tbody",render(){return k("tbody",null,this.$slots)}}),me=h({name:"Td",render(){return k("td",null,this.$slots)}}),he=h({name:"Th",render(){return k("th",null,this.$slots)}}),ve=h({name:"Thead",render(){return k("thead",null,this.$slots)}}),fe=h({name:"Tr",render(){return k("tr",null,this.$slots)}}),pe=h({__name:"Album",setup(i,{expose:r}){r();const v=new URL(window.location.href),e=ee({client_id:"",client_secret:"",access_token:v.searchParams.get("access_token")||"",refresh_token:""}),_=x("access_token"),N=x(),b=x();let l=x([]);const u=async()=>{const d=new URLSearchParams;d.append("client_id",e.client_id),d.append("client_secret",e.client_secret),d.append("grant_type","refresh_token"),d.append("refresh_token",e.refresh_token),fetch("https://www.googleapis.com/oauth2/v4/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:d}).then(t=>t.json()).then(t=>{console.log(t),N.value=t,(typeof t.error>"u"||!t.error)&&(e.access_token=t.access_token,typeof t.access_token<"u"&&t.access_token&&c(null))})},c=async d=>{d==null&&(d=""),fetch(`https://photoslibrary.googleapis.com/v1/albums?pageToken=${d}&pageSize=50`,{method:"GET",headers:{Authorization:`Bearer ${e.access_token}`}}).then(t=>t.json()).then(t=>{console.log(t),b.value=t,(typeof t.error>"u"||!t.error)&&(l.value=l.value.concat(t.albums),console.log(l),typeof t.nextPageToken<"u"&&t.nextPageToken&&c(t.nextPageToken))})};e.access_token&&c(null);function f(){l.value=[],_.value=="refresh_token"?u():c(null)}const o={url:v,data:e,way:_,token:N,album:b,get albums(){return l},set albums(d){l=d},getToken:u,getAlbum:c,fetchAlbum:f,get NAlert(){return ie},get NSpace(){return re},get NTable(){return be},get NInput(){return se},get NButton(){return de},get NSelect(){return ae},get NThead(){return ve},get NTbody(){return ge},get NTh(){return he},get NTd(){return me},get NTr(){return fe}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function ke(i,r,v,e,_,N){return g(),p(e.NSpace,{vertical:"",size:"large"},{default:a(()=>{var b,l,u,c,f;return[s(e.NSelect,{value:e.way,"onUpdate:value":r[0]||(r[0]=o=>e.way=o),size:"large",options:[{label:"Access token",value:"access_token"},{label:"Client & Refresh token",value:"refresh_token"}]},null,8,["value"]),e.way=="refresh_token"?(g(),p(e.NSpace,{key:0,vertical:"",size:"large"},{default:a(()=>[r[5]||(r[5]=T("h4",null,"client_id",-1)),s(e.NInput,{size:"large",value:e.data.client_id,"onUpdate:value":r[1]||(r[1]=o=>e.data.client_id=o)},null,8,["value"]),r[6]||(r[6]=T("h4",null,"client_secret",-1)),s(e.NInput,{size:"large",value:e.data.client_secret,"onUpdate:value":r[2]||(r[2]=o=>e.data.client_secret=o)},null,8,["value"]),r[7]||(r[7]=T("h4",null,"refresh_token",-1)),s(e.NInput,{size:"large",value:e.data.refresh_token,"onUpdate:value":r[3]||(r[3]=o=>e.data.refresh_token=o)},null,8,["value"])]),_:1})):(g(),p(e.NSpace,{key:1,vertical:"",size:"large"},{default:a(()=>[r[8]||(r[8]=T("h4",null,"access_token",-1)),s(e.NInput,{size:"large",value:e.data.access_token,"onUpdate:value":r[4]||(r[4]=o=>e.data.access_token=o)},null,8,["value"])]),_:1})),s(e.NButton,{size:"large",type:"primary",block:"",onClick:e.fetchAlbum},{default:a(()=>r[9]||(r[9]=[m("Fetch Album")])),_:1}),(b=e.token)!=null&&b.error||(l=e.token)!=null&&l.error_description?(g(),p(e.NAlert,{key:2,title:(u=e.token)==null?void 0:u.error,type:"error"},{default:a(()=>{var o;return[m(z((o=e.token)==null?void 0:o.error_description),1)]}),_:1},8,["title"])):B("",!0),(c=e.album)!=null&&c.error?(g(),p(e.NAlert,{key:3,title:(f=e.album)==null?void 0:f.error.status,type:"error"},{default:a(()=>{var o;return[m(z((o=e.album)==null?void 0:o.error.message),1)]}),_:1},8,["title"])):B("",!0),r[12]||(r[12]=T("h4",null,"Albums",-1)),s(e.NTable,{size:"large"},{default:a(()=>[s(e.NThead,null,{default:a(()=>[s(e.NTr,null,{default:a(()=>[s(e.NTh,null,{default:a(()=>r[10]||(r[10]=[m("Album Title")])),_:1}),s(e.NTh,null,{default:a(()=>r[11]||(r[11]=[m("Album ID")])),_:1})]),_:1})]),_:1}),s(e.NTbody,null,{default:a(()=>[(g(!0),te(le,null,ne(e.albums,(o,d)=>(g(),p(e.NTr,null,{default:a(()=>[s(e.NTd,null,{default:a(()=>[m(z(o.title),1)]),_:2},1024),s(e.NTd,null,{default:a(()=>[m(z(o.id),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]}),_:1})}const ze=oe(pe,[["render",ke],["__scopeId","data-v-1f1deabd"],["__file","Album.vue"]]);export{ze as A};
