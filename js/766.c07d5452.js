"use strict";(self["webpackChunkfilet"]=self["webpackChunkfilet"]||[]).push([[766],{1252:function(t,e,a){a.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-info",class:{"full-info":t.fullInfo}},[a("div",{staticClass:"info"},[t.fullInfo?[a("div",{staticClass:"rate"},[t._v(t._s(t.product.rates)+"%")]),a("div",{staticClass:"description"},[a("p",[t._v(" Period: "),a("em",[t._v(t._s(t.product.period))]),t._v(" Days ")]),a("p",[t._v(" Minimum Investment: "),a("em",[t._v(t._s(t.numeral(t.product.minimal).format("0,0.00",Math.floor)))]),t._v(" USDT ")]),a("p",[t._v(" Management Fee: "),a("em",[t._v(t._s(t.product.mfee))]),t._v(" % ")])]),a("div",{staticClass:"description"},[a("p",[t._v(" Performance Fee: "),a("em",[t._v(t._s(t.numeral(t.product.pfee).format("0,0.00",Math.floor)))]),t._v(" % ")]),t._m(0),a("p",[t._v(" Max Drawdown: "),a("em",[t._v(t._s(t.numeral(t.product.mdd).format("0,0.00")))]),t._v(" % ")])])]:[a("div",{staticClass:"rate"},[t._v(t._s(t.product.rates)+"%")]),a("div",{staticClass:"description"},[t.redeem?[a("p",[t._v(" Expect Interest: "),a("em",[t._v(" "+t._s(t.numeral(t.userFixedInterestRate.interest).format("0,0.00",Math.floor))+" ")]),t._v(" USDT ")]),a("p",[t._v(" Maturity Date: "),a("em",[t._v(" "+t._s(t.userFixedInterestRate.remainDay)+" ")]),t._v(" Day(s) Remain ")])]:[a("p",[t._v(" Period: "),a("em",[t._v(t._s(t.product.period))]),t._v(" Days ")]),a("p",[t._v(" Minimum: "),a("em",[t._v(t._s(t.numeral(t.product.minimal).format("0,0.00",Math.floor)))]),t._v(" USDT ")])]],2)]],2),a("div",{staticClass:"button-list"},[t.redeem?a("button",{staticClass:"btn-redeem",on:{click:t.handleRedeemClick}},[t._v(" Redeem ")]):t._e(),t.apply?a("button",{on:{click:t.handleApplyClick}},[t._v("Apply")]):t._e(),t.redeem||t.apply?t._e():a("router-link",{staticClass:"btn-more",attrs:{to:"products"}},[a("button",[t._v("More")])])],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Early Redemption Fee: "),a("em",[t._v("1")]),t._v(" % / Day")])}],n=a(4665),i=a(1977),d=a.n(i),l={name:"ProductInfo",props:{redeem:{type:Boolean,default:!1},apply:{type:Boolean,default:!1},fullInfo:{type:Boolean,default:!1}},computed:{...(0,n.rn)(["product","userAsset","userFixedInterestRate","token"])},methods:{...(0,n.OI)(["showAppModal"]),numeral:d(),handleRedeemClick(){this.showAppModal({type:"redeem",max:this.userFixedInterestRate.interest})},handleApplyClick(){this.token?this.showAppModal({type:"apply",max:this.userAsset.cash}):this.$router.push("login")}}},o=l,h=a(1001),c=(0,h.Z)(o,s,r,!1,null,"77a0291f",null),u=c.exports},6455:function(t,e,a){a.d(e,{Z:function(){return g}});var s,r,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"doughnut-chart"},[a("doughnut-chart-base",{attrs:{width:t.width,height:t.height,plugins:[t.htmlLegendPlugin],chartData:t.chartData,chartOptions:t.chartOptions}}),a("div",{staticClass:"more-info"},[a("div",{staticClass:"legend-container"}),t.enableActions?a("div",{staticClass:"button-list"},[a("button",{staticClass:"btn-withdraw",attrs:{disabled:t.isEmpty},on:{click:t.handleWithdrawClick}},[t._v(" Withdraw ")]),a("button",{staticClass:"btn-deposit",attrs:{disabled:!t.isLogin},on:{click:t.handleDepositClick}},[t._v(" Deposit ")])]):t._e()])],1)},i=[],d=a(4665),l=a(1977),o=a.n(l),h=a(5170),c={extends:h.$I,props:{chartData:{type:Array|Object,required:!0},chartOptions:{type:Object,required:!1}},mounted(){this.renderChart(this.chartData,this.chartOptions)}},u=c,p=a(1001),m=(0,p.Z)(u,s,r,!1,null,null,null),f=m.exports;const v=()=>{const t=document.querySelector(".legend-container");let e=t.querySelector("ul");return e||(e=document.createElement("ul"),t.appendChild(e)),e};var C={components:{DoughnutChartBase:f},props:{chartData:{type:Array|Object,required:!0},chartOptions:{type:Object,required:!1},width:{type:Number,default:175},height:{type:Number,default:175},hasButtons:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},enableActions:{type:Boolean,default:!1}},data(){return{htmlLegendPlugin:{id:"htmlLegend",afterUpdate(t){const e=v();while(e.firstChild)e.firstChild.remove();const a=t.options.plugins.legend.labels.generateLabels(t);a.forEach(((a,s)=>{if(!a.text)return;const r=document.createElement("li"),n=document.createElement("span"),i=document.createElement("p"),d=document.createElement("p"),l=document.createTextNode(a.text),h=document.createTextNode(`${o()(t.config.data.datasets[0].data[s]).format("0,0.00",Math.floor)} USDT`);n.style.backgroundColor=t?.config?.data?.datasets[0]?.backgroundColor[s],d.style.color="#292B2B",i.appendChild(n),i.appendChild(l),d.appendChild(h),r.appendChild(i),r.appendChild(d),e.appendChild(r)}))}}}},computed:{...(0,d.rn)(["userAsset"]),...(0,d.Se)(["isLogin"])},methods:{...(0,d.OI)(["showAppModal"]),numeral:o(),handleWithdrawClick(){this.showAppModal({type:"withdraw",max:this.userAsset.cash})},handleDepositClick(){this.showAppModal({type:"deposit"})}}},y=C,_=(0,p.Z)(y,n,i,!1,null,"771fd045",null),g=_.exports},5170:function(t,e,a){a.d(e,{$I:function(){return f},x1:function(){return v}});a(1703);var s,r=a(4647);function n(t,e,a,r){t(e,a),void 0!==r&&r.emit(s.ChartRendered)}function i(t,e){t.update(),void 0!==e&&e.emit(s.ChartUpdated)}function d(t,e){t.destroy(),void 0!==e&&e.emit(s.ChartDestroyed)}function l(t,e){const a={labels:"undefined"===typeof t.labels?[]:[...t.labels],datasets:[]};return o(a,{...t},e),a}function o(t,e,a){const s=[];t.datasets=e.datasets.map((e=>{const r=t.datasets.find((t=>t[a]===e[a]));return r&&e.data&&!s.includes(r)?(s.push(r),Object.assign(r,e),r):{...e}}))}function h(t,e,a){t.data.labels=e,void 0!==a&&a.emit(s.LabelsUpdated)}function c(t,e){const a=t.datasets.map((t=>t.label)),s=e.datasets.map((t=>t.label));return e.datasets.length===t.datasets.length&&a.every(((t,e)=>t===s[e]))}(function(t){t["ChartRendered"]="chart:rendered",t["ChartUpdated"]="chart:updated",t["ChartDestroyed"]="chart:destroyed",t["LabelsUpdated"]="labels:updated"})(s||(s={}));const u="Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components",p="annotation";function m(t,e,a){let m=null;return{props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}},datasetIdKey:{type:String,default:"label"},chartId:{type:String,default:t},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{type:String,default:""},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},data(){return{_chart:null}},computed:{hasAnnotationPlugin(){return Object.keys(this.chartOptions).length>0&&"plugins"in this.chartOptions&&Object.keys(this.chartOptions.plugins).length>0&&p in this.chartOptions.plugins}},created(){r.kL.register(a)},mounted(){m={current:null},"datasets"in this.chartData&&this.chartData.datasets.length>0&&(n(this.renderChart,this.chartData,this.chartOptions),this.$emit(s.ChartRendered))},watch:{chartData(t,e){this.chartDataHandler(t,e)}},methods:{renderChart(t,a){const n=this.getCurrentChart();if(null!==n&&(d(n),this.$emit(s.ChartDestroyed)),!this.$refs.canvas)throw new Error(u);{const s=l(t,this.datasetIdKey),n=this.$refs.canvas.getContext("2d");null!==n&&this.setCurrentChart(new r.kL(n,{type:e,data:s,options:a,plugins:this.plugins}))}},chartDataHandler(t,e){const a={...t},r={...e},l=this.getCurrentChart();if(Object.keys(r).length>0){const t=c(a,r);t&&null!==l?(o(l.data,a,this.datasetIdKey),void 0!==a.labels&&(h(l,a.labels),this.$emit(s.LabelsUpdated)),i(l),this.$emit(s.ChartUpdated)):(null!==l&&(d(l),this.$emit(s.ChartDestroyed)),n(this.renderChart,this.chartData,this.chartOptions),this.$emit(s.ChartRendered))}else null!==l&&(d(l),this.$emit(s.ChartDestroyed)),n(this.renderChart,this.chartData,this.chartOptions),this.$emit(s.ChartRendered)},getCurrentChart(){return this.hasAnnotationPlugin?m.current:this.$data._chart},setCurrentChart(t){this.hasAnnotationPlugin?m.current=t:this.$data._chart=t}},beforeDestroy(){const t=this.getCurrentChart();null!==t&&(d(t),this.$emit(s.ChartDestroyed))},render:function(t){return t("div",{style:this.styles,class:this.cssClasses},[t("canvas",{attrs:{id:this.chartId,width:this.width,height:this.height},ref:"canvas"})])}}}const f=m("doughnut-chart","doughnut",r.jI),v=m("line-chart","line",r.ST)}}]);
//# sourceMappingURL=766.c07d5452.js.map