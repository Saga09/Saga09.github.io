(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,t,a){e.exports=a(54)},42:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),i=a.n(o),c=(a(42),a(8)),s=a(9),l=a(11),u=a(10),h=a(22),m=a(2),v=a(14),p=a(17),d=a(18),f=a.n(d),b=a(28),D=a.n(b),O=a(19),E=a.n(O);E.a.fcRoot(f.a,D.a);var g=fetch("https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/ohlc-chart-schema.json").then((function(e){return e.json()})),j={chart:{},caption:{text:"UPSTOX Composite Index"},subcaption:{text:"From 2005 -  2014"},yaxis:[{plot:[{value:{open:"Open",high:"High",low:"Low",close:"Close"},type:"ohlc"}],title:"Index Value"}]},y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={timeseriesDs:{type:"timeseries",renderAt:"container",width:"100%",height:"500",dataSource:j}},n.onFetchData=n.onFetchData.bind(Object(v.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.data;this.onFetchData(e)}},{key:"componentWillReceiveProps",value:function(e){this.onFetchData(e.data)}},{key:"onFetchData",value:function(e){var t=this,a=this.getDataArrayToObject(e),n=this.convertToOHLC(a);Promise.all([n,g]).then((function(e){var a=e[0],n=e[1],r=(new f.a.DataStore).createDataTable(a,n),o=Object.assign({},t.state.timeseriesDs);o.dataSource.data=r,t.setState({timeseriesDs:o})}))}},{key:"getDataArrayToObject",value:function(e){var t=[];for(var a in e){var n=e[a].split(","),r={timestamp:n[0],open:n[1],high:n[2],low:n[3],close:n[4],volume:n[5]};t.push(r)}return t}},{key:"timeConverter",value:function(e){var t=new Date(1e3*e);return t.getFullYear()+"-"+["01","02","03","04","05","06","07","08","09","10","11","12"][t.getMonth()]+"-"+t.getDate()}},{key:"convertToOHLC",value:function(e){var t=[];for(var a in e){var n=this.timeConverter(e[a].timestamp/1e3);t[a]=[n,Number(e[a].open),Number(e[a].high),Number(e[a].low),Number(e[a].close),Number(e[a].volume)]}return t}},{key:"render",value:function(){return console.log("----"),r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"page--title"},"UPSTOX OVERVIEWS"),this.state.timeseriesDs.dataSource.data?r.a.createElement(E.a,this.state.timeseriesDs):r.a.createElement("div",{className:"bt-spinner"}))}}]),a}(r.a.Component),S=Object(p.b)((function(e){return{data:e.upstoxState.data,intervel:e.intervel}}))(y),C=a(26),k=a(12),w={data:{},intervel:1,liveData:{}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA_SUCCESS":return Object.assign({},e,{data:t.data});case"GET_LIVE_DATA_SUCCESS":return console.log("actionTypeintervel",e.intervel),Object.assign({},e,{liveData:t.data,intervel:e.intervel+1})}return e},N=Object(k.c)({upstoxState:T}),A=a(36),x=Object(k.d)(N,Object(k.a)(A.a));function F(e){return{type:"GET_DATA_SUCCESS",data:e}}function I(e){return function(t,a){var n="http://kaboom.rksv.net/api/historical?interval="+e;console.log("newUrl",n),fetch(n).then((function(a){return a.json().then((function(a){t(L(a)),function(e){var t="http://kaboom.rksv.net/api/historical?interval="+e;console.log("frequitlyFetchDataContinue",t),fetch(t).then((function(t){return t.json().then((function(t){x.dispatch(L(t)),setTimeout((function(){x.dispatch(I(e+1))}),5e3)}))}))}(e+1)}))}))}}function L(e){return{type:"GET_LIVE_DATA_SUCCESS",data:e}}E.a.fcRoot(f.a,D.a);var U=fetch("https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/ohlc-chart-schema.json").then((function(e){return e.json()})),_={chart:{},caption:{text:"UPSTOX Composite Live Index"},subcaption:{text:"From 2005 -  2014"},yaxis:[{plot:[{value:{open:"Open",high:"High",low:"Low",close:"Close"},type:"ohlc"}],title:"Index Value"}]},H=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={data:[],timeseriesDs:{type:"timeseries",renderAt:"container",width:"100%",height:"500",dataSource:_}},n.onFetchData=n.onFetchData.bind(Object(v.a)(n)),n}return Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.onFetchData(e.data)}},{key:"componentDidMount",value:function(){var e=this.props.data;this.onFetchData(e),this.props.dispatch(I(this.props.intervel))}},{key:"onFetchData",value:function(e){var t=this,a=this.getDataArrayToObject(e),n=this.convertToOHLC(a);Promise.all([n,U]).then((function(e){var a=e[0],n=e[1],r=(new f.a.DataStore).createDataTable(a,n),o=Object.assign({},t.state.timeseriesDs);o.dataSource.data=r,t.setState({timeseriesDs:o})}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"getDataArrayToObject",value:function(e){var t=[];for(var a in e){var n=e[a].split(","),r={timestamp:n[0],open:n[1],high:n[2],low:n[3],close:n[4],volume:n[5]};t.push(r)}return t}},{key:"timeConverter",value:function(e){var t=new Date(1e3*e);return t.getFullYear()+"-"+["01","02","03","04","05","06","07","08","09","10","11","12"][t.getMonth()]+"-"+t.getDate()}},{key:"convertToOHLC",value:function(e){var t=[];for(var a in e){var n=this.timeConverter(e[a].timestamp/1e3);t[a]=[n,Number(e[a].open),Number(e[a].high),Number(e[a].low),Number(e[a].close),Number(e[a].volume)]}return t}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"page--title"},"UPSTOX LIVE CHART"),this.state.timeseriesDs.dataSource.data?r.a.createElement(E.a,this.state.timeseriesDs):r.a.createElement("div",{className:"bt-spinner"}))}}]),a}(r.a.Component),P=Object(C.a)((function(e){return{data:e.upstoxState.liveData,intervel:e.upstoxState.intervel}}))(H),M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"navMenu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/liveChart"}," Live Chart")))))}}]),a}(r.a.Component),V=(a(53),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:"",price:"",date:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;this.props.dispatch((e=this.props.intervel,function(t,a){var n="http://kaboom.rksv.net/api/historical?interval="+e;console.log("newUrl",n),fetch(n).then((function(e){return e.json().then((function(e){t(F(e))}))}))})),console.log("data ",this.props.data)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(M,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/home:activeTab?",component:S}),r.a.createElement(m.b,{path:"/liveChart:activeTab?",component:P}),r.a.createElement(m.a,{to:"/home"})))))}}]),a}(r.a.Component)),R=Object(p.b)((function(e){return{data:e.upstoxState.data}}))(V);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p.a,{store:x},r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.844d9a5e.chunk.js.map