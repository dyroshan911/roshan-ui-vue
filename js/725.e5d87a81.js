"use strict";(self["webpackChunkroshan_ui_vue"]=self["webpackChunkroshan_ui_vue"]||[]).push([[725,951],{1951:function(e,t,l){l.r(t),l.d(t,{TablePart:function(){return n},UseEventTable:function(){return c}});var n,r=l(8473),s=l(1426),a=l(176),o=l(4759),u=l(4188);(function(e){e[e["head"]=0]="head",e[e["body"]=1]="body"})(n||(n={}));const c=(0,s.Z)({name:"use-event-table",provideRefer:!0,emits:{scroll:(e,t)=>!0},components:{UseEventTableHeader:a.UseEventTableHeader,UseEventTableBody:o.UseEventTableBody},setup({setupContext:e,event:t}){const l=(0,u.qj)({hoverPart:null}),{slots:n}=e;return{refer:{state:l,event:t},render:()=>(0,r.Wm)("div",{class:"use-event-table"},[(0,r.Wm)((0,r.up)("use-event-table-header"),null,{default:()=>[n.header?n.header():""]}),(0,r.Wm)((0,r.up)("use-event-table-body"),null,{default:()=>[n.body?n.body():""]})])}}})},4759:function(e,t,l){l.r(t),l.d(t,{UseEventTableBody:function(){return o}});var n=l(8473),r=l(1426),s=l(4188),a=l(1951);const o=(0,r.Z)({name:"use-event-table-body",setup:({setupContext:e})=>{const t=a.UseEventTable.use.inject(),l=(0,s.iH)(null),{slots:r}=e,o={scroll:e=>{t.event.emit.scroll(e,a.TablePart.body)},tableScroll:(e,t)=>{t===a.TablePart.head&&(l.value.scrollLeft=e.target.scrollLeft)}};return(0,n.Ah)(t.event.on.scroll(o.tableScroll)),{render:()=>(0,n.Wm)("div",{ref:l,onScroll:o.scroll,class:"use-table-body"},[r.default()])}}})},176:function(e,t,l){l.r(t),l.d(t,{UseEventTableHeader:function(){return o}});var n=l(8473),r=l(1426),s=l(4188),a=l(1951);const o=(0,r.Z)({name:"use-event-table-header",setup:({setupContext:e})=>{const{slots:t}=e,l=(0,s.iH)(null),r=a.UseEventTable.use.inject(),o={tableScroll:(e,t)=>{t===a.TablePart.body&&(l.value.scrollLeft=e.target.scrollLeft),console.log(e.target.scrollLeft)},scroll:e=>{r.event.emit.scroll(e,a.TablePart.head)}};return(0,n.Ah)(r.event.on.scroll(o.tableScroll)),{render:()=>(0,n.Wm)("div",{ref:l,onScroll:o.scroll,class:"use-table-head"},[t.default?t.default():""])}}})},7725:function(e,t,l){l.r(t),l.d(t,{default:function(){return v}});var n=l(8473);const r=(0,n._)("div",null,"use event",-1),s=(0,n._)("div",{class:"use-table-head-inner"},"Header",-1),a=(0,n._)("div",{class:"use-table-body-inner"},"body",-1);function o(e,t,l,o,u,c){const d=(0,n.up)("use-event-table");return(0,n.wg)(),(0,n.iD)(n.HY,null,[r,(0,n.Wm)(d,{class:"use-event-table"},{header:(0,n.w5)((()=>[s])),body:(0,n.w5)((()=>[a])),_:1})],64)}var u=l(1951),c={name:"demo-use-event",components:{UseEventTable:u.UseEventTable}},d=l(5312);const b=(0,d.Z)(c,[["render",o]]);var v=b}}]);
//# sourceMappingURL=725.e5d87a81.js.map