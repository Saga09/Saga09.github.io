(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,t,a){e.exports=a(54)},42:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),i=a.n(r),c=(a(42),a(8)),s=a(9),l=a(11),u=a(10),h=a(22),m=a(2),v=a(14),p=a(17),d=a(18),f=a.n(d),b=a(28),D=a.n(b),g=a(19),O=a.n(g);O.a.fcRoot(f.a,D.a);var j=fetch("https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/ohlc-chart-schema.json").then((function(e){return e.json()})),y={chart:{},caption:{text:"UPSTOX Composite Index"},subcaption:{text:"From 2005 -  2014"},yaxis:[{plot:[{value:{open:"Open",high:"High",low:"Low",close:"Close"},type:"ohlc"}],title:"Index Value"}]},E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={timeseriesDs:{type:"timeseries",renderAt:"container",width:"100%",height:"500",dataSource:y}},n.onFetchData=n.onFetchData.bind(Object(v.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.data;this.onFetchData(e)}},{key:"componentWillReceiveProps",value:function(e){this.onFetchData(e.data)}},{key:"onFetchData",value:function(e){var t=this,a=this.getDataArrayToObject(e),n=this.convertToOHLC(a);Promise.all([n,j]).then((function(e){var a=e[0],n=e[1],o=(new f.a.DataStore).createDataTable(a,n),r=Object.assign({},t.state.timeseriesDs);r.dataSource.data=o,t.setState({timeseriesDs:r})}))}},{key:"getDataArrayToObject",value:function(e){var t=[];for(var a in e){var n=e[a].split(","),o={timestamp:n[0],open:n[1],high:n[2],low:n[3],close:n[4],volume:n[5]};t.push(o)}return t}},{key:"timeConverter",value:function(e){var t=new Date(1e3*e);return t.getFullYear()+"-"+["01","02","03","04","05","06","07","08","09","10","11","12"][t.getMonth()]+"-"+t.getDate()}},{key:"convertToOHLC",value:function(e){var t=[];for(var a in e){var n=this.timeConverter(e[a].timestamp/1e3);t[a]=[n,Number(e[a].open),Number(e[a].high),Number(e[a].low),Number(e[a].close),Number(e[a].volume)]}return t}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"page--title"},"UPSTOX OVERVIEWS"),this.state.timeseriesDs.dataSource.data?o.a.createElement(O.a,this.state.timeseriesDs):"loading")}}]),a}(o.a.Component),S=Object(p.b)((function(e){return{data:e.upstoxState.data,intervel:e.intervel}}))(E),C=a(26),T=a(12),k={data:{},intervel:1,liveData:{}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA_SUCCESS":return Object.assign({},e,{data:t.data});case"GET_LIVE_DATA_SUCCESS":return console.log("actionTypeintervel",e.intervel),Object.assign({},e,{liveData:t.data,intervel:e.intervel+1})}return e},N=Object(T.c)({upstoxState:w}),A=a(36),x=Object(T.d)(N,Object(T.a)(A.a));function F(e){return{type:"GET_DATA_SUCCESS",data:e}}function I(e){return function(t,a){fetch("http://kaboom.rksv.net/api/historical?interval="+e,{headers:{"Content-Type":"application/json"},mode:"no-cors"}).then((function(a){return a.json().then((function(a){t(L(a)),function(e){fetch("http://kaboom.rksv.net/api/historical?interval="+e,{headers:{"Content-Type":"application/json"},mode:"no-cors"}).then((function(t){return t.json().then((function(t){x.dispatch(L(t)),setTimeout((function(){x.dispatch(I(e+1))}),5e3)}))}))}(e+1)}))}))}}function L(e){return{type:"GET_LIVE_DATA_SUCCESS",data:e}}O.a.fcRoot(f.a,D.a);var _=fetch("https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/ohlc-chart-schema.json").then((function(e){return e.json()})),H={chart:{},caption:{text:"UPSTOX Composite Live Index"},subcaption:{text:"From 2005 -  2014"},yaxis:[{plot:[{value:{open:"Open",high:"High",low:"Low",close:"Close"},type:"ohlc"}],title:"Index Value"}]},M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={data:[],timeseriesDs:{type:"timeseries",renderAt:"container",width:"100%",height:"500",dataSource:H}},n.onFetchData=n.onFetchData.bind(Object(v.a)(n)),n}return Object(s.a)(a,[{key:"handleData",value:function(e){var t=this.state.data;e=JSON.parse(e);var a=new Date,n=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+" "+(a.getHours()+":"+a.getMinutes()+":"+a.getSeconds());for(var o in e)if(void 0==t[e[o][0]])t[e[o][0]]={name:e[o][0],price:e[o][1],color:"",time:n,difference:0};else{var r="",i=t[e[o][0]],c=i.price-e[o][1];r=i.price>e[o][1]?"green":"red",t[e[o][0]]={name:e[o][0],price:e[o][1],color:r,time:n,difference:c}}this.setState({data:t})}},{key:"componentWillReceiveProps",value:function(e){this.onFetchData(e.data)}},{key:"componentDidMount",value:function(){var e=this.props.data;this.onFetchData(e),console.log("sssssssss"),this.props.dispatch(I(this.props.intervel))}},{key:"onFetchData",value:function(e){var t=this,a=this.getDataArrayToObject(e),n=this.convertToOHLC(a);Promise.all([n,_]).then((function(e){var a=e[0],n=e[1],o=(new f.a.DataStore).createDataTable(a,n),r=Object.assign({},t.state.timeseriesDs);r.dataSource.data=o,t.setState({timeseriesDs:r})}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"getDataArrayToObject",value:function(e){var t=[];for(var a in e){var n=e[a].split(","),o={timestamp:n[0],open:n[1],high:n[2],low:n[3],close:n[4],volume:n[5]};t.push(o)}return t}},{key:"timeConverter",value:function(e){var t=new Date(1e3*e);return t.getFullYear()+"-"+["01","02","03","04","05","06","07","08","09","10","11","12"][t.getMonth()]+"-"+t.getDate()}},{key:"convertToOHLC",value:function(e){var t=[];for(var a in e){var n=this.timeConverter(e[a].timestamp/1e3);t[a]=[n,Number(e[a].open),Number(e[a].high),Number(e[a].low),Number(e[a].close),Number(e[a].volume)]}return t}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"page--title"},"UPSTOX LIVE CHART"),this.state.timeseriesDs.dataSource.data?o.a.createElement(O.a,this.state.timeseriesDs):"loading")}}]),a}(o.a.Component),U=Object(C.a)((function(e){return{data:e.upstoxState.liveData,intervel:e.upstoxState.intervel}}))(M),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"navMenu"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(h.b,{to:"/home"},"Home")),o.a.createElement("li",null,o.a.createElement(h.b,{to:"/liveChart"}," Live Chart")))))}}]),a}(o.a.Component),V=(a(53),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:"",price:"",date:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;this.props.dispatch((e=this.props.intervel,function(t,a){fetch("http://kaboom.rksv.net/api/historical?interval="+e,{headers:{"Content-Type":"application/json"},mode:"no-cors"}).then((function(e){return e.json().then((function(e){t(F(e))}))}))})),console.log("data ",this.props.data)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(h.a,null,o.a.createElement(P,null),o.a.createElement(m.d,null,o.a.createElement(m.b,{path:"/home:activeTab?",component:S}),o.a.createElement(m.b,{path:"/liveChart:activeTab?",component:U}),o.a.createElement(m.a,{to:"/home"})))))}}]),a}(o.a.Component)),R=Object(p.b)((function(e){return{data:e.upstoxState.data}}))(V);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p.a,{store:x},o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.af3075f7.chunk.js.map