"use strict";(self["webpackChunkfilet"]=self["webpackChunkfilet"]||[]).push([[294],{8339:function(t,a,e){e.r(a),e.d(a,{default:function(){return k}});var r,s,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-dashboard app-card-list"},[e("div",{staticClass:"app-card"},[e("p",{staticClass:"title"},[t._v("Total Value Locked")]),e("p",{staticClass:"sub-title"},[t._v(" "+t._s(t.numeral(t.totalAsset).format("0,0.00",Math.floor))+" USDT ")]),e("div",{staticClass:"chart"},[e("doughnut-chart",{attrs:{chartData:t.doughnutChartData,chartOptions:t.doughnutChartOptions}})],1)]),e("div",{staticClass:"app-card"},[t._m(0),e("div",{staticClass:"content"},[e("product-info")],1)]),e("div",{staticClass:"app-card large"},[e("p",{staticClass:"title"},[t._v("Total Value Locked")]),e("div",{staticClass:"chart"},[e("line-chart",{attrs:{chartData:t.lineChartData,chartOptions:t.lineChartOptions}})],1)])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"title"},[e("span",{staticClass:"dot"}),t._v(" Fixed Interest ")])}],l=e(4367),o=(e(1249),e(4665)),c=e(1977),u=e.n(c),h=e(6455),d=e(1252),p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"line-chart"},[e("line-chart-base",{attrs:{width:t.width,height:t.height,chartData:t.chartData,chartOptions:t.chartOptions}})],1)},C=[],f=(e(9653),e(5170)),v={extends:f.x1,props:{chartData:{type:Array|Object,required:!0},chartOptions:{type:Object,required:!1}},mounted:function(){this.renderChart(this.chartData,this.chartOptions)}},b=v,g=e(1001),m=(0,g.Z)(b,r,s,!1,null,null,null),D=m.exports,L={components:{LineChartBase:D},props:{chartData:{type:Array|Object,required:!0},chartOptions:{type:Object,required:!1},width:{type:Number,default:null},height:{type:Number,default:212}}},y=L,O=(0,g.Z)(y,p,C,!1,null,null,null),T=O.exports,_={name:"AppDashboard",components:{DoughnutChart:h.Z,ProductInfo:d.Z,LineChart:T},computed:(0,l.Z)((0,l.Z)((0,l.Z)({},(0,o.rn)(["tvl","product","tvlHistory","token"])),(0,o.Se)(["totalAsset"])),{},{doughnutChartData:function(){return{labels:["Total Deposit","Fixed Interest"],datasets:[{data:[this.tvl.deposit,this.tvl.interest],backgroundColor:["#A81B15","#EDC612"],borderWidth:0,cutout:"80%"}]}},doughnutChartOptions:function(){return{maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}}}},lineChartLabelList:function(){return this.tvlHistory.map((function(t){return t.date})).reverse()},lineChartDataList:function(){return this.tvlHistory.map((function(t){return t.price})).reverse()},lineChartData:function(){return{labels:this.lineChartLabelList,datasets:[{data:this.lineChartDataList,fill:!1,borderWidth:2,borderColor:"#4312ED",tension:.4}]}},lineChartOptions:function(){return{maintainAspectRatio:!1,plugins:{legend:{display:!1}}}}}),created:function(){var t=this;this.getTVL().then((function(a){return t.setTVL(a.data)})),this.getProduct({id:"0"}).then((function(a){return t.setProduct(a.data)})),this.getTVLHistory().then((function(a){return t.setTVLHistory(a.data)}))},methods:(0,l.Z)((0,l.Z)((0,l.Z)({},(0,o.nv)(["getTVL","getTVLHistory","getProduct"])),(0,o.OI)(["setTVL","setTVLHistory","setProduct"])),{},{numeral:u()})},Z=_,V=(0,g.Z)(Z,n,i,!1,null,null,null),k=V.exports}}]);
//# sourceMappingURL=294-legacy.1cdd1200.js.map