(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e17d0"],{"7b3b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.list,"element-loading-text":"正在查询中。。。","row-key":"id",border:""}},[n("el-table-column",{attrs:{label:"区域名称",prop:"name"}}),t._v(" "),n("el-table-column",{attrs:{label:"区域类型",prop:"type"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("typeFilter")(e.row.type))+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"区域编码",prop:"code"}})],1)],1)},i=[],l=n("b775");function o(){return Object(l["a"])({url:"/region/list",method:"get"})}var r={name:"Region",filters:{typeFilter:function(t){var e={1:"省",2:"市",3:"区"};return e[t]}},data:function(){return{list:[],listLoading:!0,downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,o().then((function(e){t.list=e.data.data.list,t.listLoading=!1})).catch((function(){t.list=[],t.listLoading=!1}))}}},s=r,d=n("2877"),c=Object(d["a"])(s,a,i,!1,null,null,null);e["default"]=c.exports}}]);