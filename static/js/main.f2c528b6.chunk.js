(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,a){e.exports=a(47)},35:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(20),s=a.n(r),o=(a(35),a(3)),u=a(4),c=a(7),i=a(6),m=a(12),d=a(2),p=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"navMenu"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(m.b,{to:"/home"},"Home")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/admin"}," Admin")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/report"}," Report")))))}}]),a}(n.a.Component),f=a(5),v=a(16),h={guest:0,userDetails:[{id:1,full_name:"Con",dob:"11/20/2000",age:30,guest:1,profession:"Employed",locality:"Mumbai",address:"1PCZo1JCKiXLVTGDeTLHK8VRnDJxpdr47Q"},{id:2,full_name:"Terrance",dob:"9/11/1990",age:20,guest:1,profession:"Employed",locality:"Delhi",address:"18fxdiAN1XSTfEy6msC7rBP4TvYzTmaubd"},{id:3,full_name:"Lucais",dob:"2/3/1990",age:15,guest:2,profession:"Students",locality:"Pune",address:"1EhPi9utSmRVRPapmWkYRtbHKYT9Uvpy6v"},{id:4,full_name:"Georgi",dob:"8/9/1993",age:12,guest:1,profession:"Employed",locality:"Bangalore",address:"1LEn7jTuBspm1Pq78bnAFgnRQMbtQFLeeU"},{id:5,full_name:"Cathi",dob:"4/19/1992",age:45,guest:1,profession:"Employed",locality:"Mumbai",address:"1Ldo7treFd5Jh4drCeUmmhn8vQzhJkMkWJ"},{id:6,full_name:"Employed",dob:"5/8/1994",age:55,guest:2,profession:"Employed",locality:"Mumbai",address:"1B3MxUme1jVL69opMnPkRVM7Y5KKdgCq38"},{id:7,full_name:"Ailee",dob:"5/22/1991",age:22,guest:2,profession:"Students",locality:"Delhi",address:"1JhkoRmUBEjPKf95gxtf19MqxZLs8aMNmv"},{id:8,full_name:"Kristen",dob:"12/15/1992",age:68,guest:2,profession:"Students",locality:"Bangalore",address:"1EjkqUB5PXJdTKLy3ahD9Zq6YVXscF8my8"},{id:9,full_name:"Vaclav",dob:"4/19/1991",age:19,guest:2,profession:"Employed",locality:"Mumbai",address:"1FJvjzYrT8eeqZ9EceqocNgJywchibYrNP"},{id:10,full_name:"Paulie",dob:"9/13/1995",age:20,guest:1,profession:"Employed",locality:"Pune",address:"1K5QA55BQJSJ51dHs2ypE8XVzaMriowFfY"}],user:{}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENTAL_GUEST":return Object.assign({},e,{guest:e.guest+1});case"DECREMENTAL_GUEST":return Object.assign({},e,{guest:e.guest-1});case"GET_USER_DATA":return Object.assign({},e,{user:t.user})}return e},b=Object(v.c)({eduvanzState:E}),g=a(29),y=Object(v.d)(b,Object(v.a)(g.a));function N(e,t,a){return a=void 0!=a&&a,void 0==e||void 0==t||void 0==e[t]||""===e[t]?a:e[t]}var O=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).incrementValue=function(){l.props.dispatch({type:"INCREMENTAL_GUEST"});var e=l.props.guest,t=l.state.form;t.guest=e,l.setState({form:t})},l.decreaseValue=function(){l.props.dispatch({type:"DECREMENTAL_GUEST"});var e=l.props.guest,t=l.state.form;t.guest=e,l.setState({form:t})},l.state={form:{},errors:[],modal:!1},l}return Object(u.a)(a,[{key:"validation",value:function(e,t){var a=this.state.errors;""!=t&&void 0!=t?delete a[e]:a[e]="This field is required",this.setState({errors:a})}},{key:"changeFormDetails",value:function(e,t){var a=e.target.value,l=this.state.form;l[t]=a,this.setState({form:l}),this.validation(t,a)}},{key:"validateRequiredFields",value:function(){var e=["fullName","age","DOB","profession","locality","address"],t=this.state.form;for(var a in console.log("validation ",t),e){var l=N(t,e[a],"");console.log("fieldsToValidate[i] ",e[a]),console.log("formDetails[i] ",t[a]),console.log("formDetails----- ",l),this.validation(e[a],l)}}},{key:"handelSubmit",value:function(){this.validateRequiredFields();var e=this.state.errors;0===Object.keys(e).length?this.setState({modal:!this.state.modal}):console.log(!1)}},{key:"handelSubmitNModal",value:function(){var e=this.state.form;this.props.dispatch({type:"GET_USER_DATA",user:e}),this.setState({modal:!this.state.modal})}},{key:"closeModal",value:function(){this.setState({modal:!1})}},{key:"render",value:function(){var e=this,t=this.state.form,a=this.state.errors,l=N(a,"fullName",""),r=N(a,"age",""),s=N(a,"DOB",""),o=N(a,"profession",""),u=N(a,"locality",""),c=N(a,"address","");return console.log("user",this.props.user),console.log("formDetails",t),n.a.createElement("div",{className:"form"},!this.state.modal&&n.a.createElement("div",{className:"form--wrapper"},n.a.createElement("div",{className:"header-text"},n.a.createElement("h1",null,"Booking Form")),n.a.createElement("div",{className:"form--group"},n.a.createElement("label",null,"Full Name"),n.a.createElement("input",{type:"text",className:"form-textbox",value:N(t,"fullName",""),onChange:function(t){return e.changeFormDetails(t,"fullName")}}),""!=l&&n.a.createElement("p",{className:"error"},l)),n.a.createElement("div",{className:"form--group"},n.a.createElement("label",null,"Age"),n.a.createElement("input",{type:"number",className:"form-textbox",value:N(t,"age",""),onChange:function(t){return e.changeFormDetails(t,"age")}}),""!=r&&n.a.createElement("p",{className:"error"},r)),n.a.createElement("div",{className:"form--group"},n.a.createElement("label",null,"D.O.B"),n.a.createElement("input",{type:"date",className:"form-number-input form-textbox",onChange:function(t){return e.changeFormDetails(t,"DOB")},value:N(t,"DOB","")}),""!=s&&n.a.createElement("p",{className:"error"},s)),n.a.createElement("div",{className:"form--group"},n.a.createElement("label",null,"Profession"),n.a.createElement("div",{className:"select-wrapper"},n.a.createElement("select",{value:N(t,"profession",""),className:"form-dropdown",onChange:function(t){return e.changeFormDetails(t,"profession")}},n.a.createElement("option",{value:"Employed"},"Employed"),n.a.createElement("option",{value:"Student"},"Student"))),""!=o&&n.a.createElement("p",{className:"error"},o)),n.a.createElement("div",{className:"form--group"},n.a.createElement("label",null,"Locality"),n.a.createElement("input",{type:"text",className:"form-textbox",value:N(t,"locality",""),onChange:function(t){return e.changeFormDetails(t,"locality")}}),""!=u&&n.a.createElement("p",{className:"error"},u)),n.a.createElement("div",{className:"form--group"},n.a.createElement("label",null,"Number of Guests"),n.a.createElement("div",{className:"form-spinner-input"},n.a.createElement("button",{onClick:this.decreaseValue},"-"),n.a.createElement("span",null,this.props.guest),n.a.createElement("button",{onClick:this.incrementValue},"+"))),n.a.createElement("div",{className:"form--group"},n.a.createElement("label",null,"Address"),n.a.createElement("textarea",{className:"form-textarea",value:N(t,"address",""),onChange:function(t){return e.changeFormDetails(t,"address")},maxLength:"50"}),""!=c&&n.a.createElement("p",{className:"error"},c)),n.a.createElement("div",{className:"form--group submit--form"},n.a.createElement("span",{className:"submit-button",onClick:function(){return e.handelSubmit()}},"Submit"))),this.state.modal&&n.a.createElement("div",{className:"modal"},n.a.createElement("h1",null,"Are your sure"),n.a.createElement("div",{className:"admin--panel user--details"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("label",null,"Full Name:")," ",n.a.createElement("span",null,t.fullName)),n.a.createElement("li",null,n.a.createElement("label",null,"Age:")," ",n.a.createElement("span",null,t.age)),n.a.createElement("li",null,n.a.createElement("label",null,"Date Of Birth:")," ",n.a.createElement("span",null,t.DOB)),n.a.createElement("li",null,n.a.createElement("label",null,"Guest:")," ",n.a.createElement("span",null,t.guest)),n.a.createElement("li",null,n.a.createElement("label",null,"Locality:")," ",n.a.createElement("span",null,t.locality)),n.a.createElement("li",null,n.a.createElement("label",null,"Profession:")," ",n.a.createElement("span",null,t.profession)),n.a.createElement("li",null,n.a.createElement("label",null,"Address:")," ",n.a.createElement("span",null,t.address)))),n.a.createElement("div",{className:"submit-buttons"},n.a.createElement("span",{onClick:function(){return e.closeModal()}},"Edit"),n.a.createElement("span",{onClick:function(){return e.handelSubmitNModal()}},"Submit"))))}}]),a}(n.a.Component),D=Object(f.b)((function(e){return{guest:e.eduvanzState.guest,user:e.eduvanzState.user}}))(O),j=a(18),S=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).state={form:{},errors:[],users:[],searchValue:""},l.filterList=l.filterList.bind(Object(j.a)(l)),l.handelSearch=l.handelSearch.bind(Object(j.a)(l)),l.getUserDetails=l.getUserDetails.bind(Object(j.a)(l)),l}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({users:this.props.userDetails})}},{key:"componentWillReceiveProps",value:function(e){this.setState({users:e.userDetails})}},{key:"filterList",value:function(e){var t=this.state.users;t=t.filter((function(e){})),this.setState({users:t})}},{key:"handelSearch",value:function(e){var t=e.target.value;this.setState({searchValue:t})}},{key:"getAge",value:function(e){var t=new Date,a=new Date(e),l=t.getFullYear()-a.getFullYear(),n=t.getMonth()-a.getMonth();return(n<0||0===n&&t.getDate()<a.getDate())&&l--,l}},{key:"getUserDetails",value:function(){var e=this.state.users,t=[],a=this.state.searchValue;for(var l in e){var r=e[l].id,s=e[l].full_name;s=s.toLowerCase(),a.length>0&&!s.includes(a.toLowerCase())||t.push(n.a.createElement("tr",{key:e[l].id},n.a.createElement("td",null,e[l].id),n.a.createElement("td",null,n.a.createElement(m.b,{to:"/user?="+r},e[l].full_name)),n.a.createElement("td",null,this.getAge(e[l].dob)),n.a.createElement("td",null,e[l].dob),n.a.createElement("td",null,e[l].profession),n.a.createElement("td",null,e[l].locality),n.a.createElement("td",null,e[l].address)))}return t}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"admin--panel"},n.a.createElement("div",{className:"search"},n.a.createElement("input",{type:"text",placeholder:"Search by name",onChange:function(t){return e.handelSearch(t)}})),n.a.createElement("div",{className:"user--details-table"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Id"),n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Age"),n.a.createElement("th",null,"D.O.B"),n.a.createElement("th",null,"Profession"),n.a.createElement("th",null,"Locality"),n.a.createElement("th",null,"Address")),this.getUserDetails())))}}]),a}(n.a.Component),k=Object(f.b)((function(e){return{userDetails:e.eduvanzState.userDetails}}))(S),w=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).state={form:{},errors:[],users:[],searchValue:""},l}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=N(window.location.hash.split("="),"1",""),t=this.props.userDetails.find((function(t){return t.id==e}));return console.log("item ",t),n.a.createElement("div",{className:"admin--panel user--details"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("label",null,"Full Name:")," ",n.a.createElement("span",null,t.full_name)),n.a.createElement("li",null,n.a.createElement("label",null,"Age:")," ",n.a.createElement("span",null,t.age)),n.a.createElement("li",null,n.a.createElement("label",null,"Date Of Birth:")," ",n.a.createElement("span",null,t.dob)),n.a.createElement("li",null,n.a.createElement("label",null,"Guest:")," ",n.a.createElement("span",null,t.guest)),n.a.createElement("li",null,n.a.createElement("label",null,"Locality:")," ",n.a.createElement("span",null,t.locality)),n.a.createElement("li",null,n.a.createElement("label",null,"Profession:")," ",n.a.createElement("span",null,t.profession)),n.a.createElement("li",null,n.a.createElement("label",null,"Address:")," ",n.a.createElement("span",null,t.address))))}}]),a}(n.a.Component),C=Object(f.b)((function(e){return{userDetails:e.eduvanzState.userDetails}}))(w),M=a(13),A=a.n(M),T=a(14),x=a.n(T),F=a(15),L=a.n(F);x()(A.a);var _=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.userDetails;console.log("userDetails ",e);var t=[],a=[],l=[];for(var r in e)e[r].age>=13&&e[r].age<=18&&t.push(e[r].age);for(var s in e)e[s].age>=18&&e[s].age<=25&&a.push(e[s].age);for(var o in e)e[o].age<=25&&l.push(e[o].age);var u={chart:{caption:"Number of people in a given age range",plottooltext:"<b>$percentValue</b> of people in $label date range",showlegend:"1",showpercentvalues:"1",legendposition:"bottom",usedataplotcolorforlabels:"1",theme:"fusion"},data:[{label:"13-18",value:t.length},{label:"18-25",value:a.length},{label:"25+",value:l.length}]};return n.a.createElement("div",{className:"chart--wrapper"},n.a.createElement(L.a,{type:"pie2d",width:"100%",dataFormat:"JSON",dataSource:u}))}}]),a}(n.a.Component),B=Object(f.b)((function(e){return{userDetails:e.eduvanzState.userDetails}}))(_);x()(A.a);var V=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.userDetails;console.log("userDetails ",e);var t=[],a=[];for(var l in e)1==e[l].guest&&t.push(e[l].guest);for(var r in e)2==e[r].guest&&a.push(e[r].guest);var s={chart:{caption:"Number of people in a given age range",plottooltext:"<b>$percentValue</b> of guest count $label",showlegend:"1",showpercentvalues:"1",legendposition:"bottom",usedataplotcolorforlabels:"1",theme:"fusion"},data:[{label:"Guest 1",value:t.length},{label:"Guest 2",value:a.length}]};return n.a.createElement("div",{className:"chart--wrapper"},n.a.createElement(L.a,{type:"pie2d",width:"100%",dataFormat:"JSON",dataSource:s}))}}]),a}(n.a.Component),P=Object(f.b)((function(e){return{userDetails:e.eduvanzState.userDetails}}))(V);x()(A.a);var R=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"compressArray",value:function(e){for(var t=[],a=e.slice(0),l=0;l<e.length;l++){for(var n=0,r=0;r<a.length;r++)e[l]==a[r]&&(n++,delete a[r]);if(n>0){var s=new Object;s.value=e[l],s.count=n,t.push(s)}}return t}},{key:"render",value:function(){var e=this.props.userDetails;console.log("userDetails ",e);for(var t=[],a=0;a<e.length;a++){var l=e[a].locality;t.push(l)}var r=this.compressArray(t);console.log("newArray ",r);var s=[];for(var o in r)s.push({label:r[o].value,value:r[o].count});var u={chart:{caption:"Number of people by localities",plottooltext:"<b>$value</b> peoples from $label",showlegend:"1",showpercentvalues:"1",legendposition:"bottom",usedataplotcolorforlabels:"1",theme:"fusion"},data:s};return n.a.createElement("div",{className:"chart--wrapper"},n.a.createElement(L.a,{type:"pie2d",width:"100%",dataFormat:"JSON",dataSource:u}))}}]),a}(n.a.Component),J=Object(f.b)((function(e){return{userDetails:e.eduvanzState.userDetails}}))(R);x()(A.a);var U=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.userDetails;console.log("userDetails ",e);var t=[],a=[];for(var l in e)"Employed"==e[l].profession&&t.push(e[l].profession);for(var r in e)"Students"==e[r].profession&&a.push(e[r].profession);var s={chart:{caption:"Number of people in a given age range",plottooltext:"<b>$percentValue</b> of people count $label",showlegend:"1",showpercentvalues:"1",legendposition:"bottom",usedataplotcolorforlabels:"1",theme:"fusion"},data:[{label:"Employed",value:t.length},{label:"Student",value:a.length}]};return n.a.createElement("div",{className:"chart--wrapper"},n.a.createElement(L.a,{type:"pie2d",width:"100%",dataFormat:"JSON",dataSource:s}))}}]),a}(n.a.Component),z=Object(f.b)((function(e){return{userDetails:e.eduvanzState.userDetails}}))(U),G=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).state={},l}return Object(u.a)(a,[{key:"shouldComponentUpdate",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props.userDetails;return console.log("userDetails ",e),n.a.createElement("div",{className:"report--details"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement(J,null)),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement(B,null)),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement(P,null)),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement(z,null))))}}]),a}(n.a.Component),q=Object(f.b)((function(e){return{userDetails:e.eduvanzState.userDetails}}))(G),Y=(a(46),function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).state={name:"",price:"",date:""},l}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(m.a,null,n.a.createElement(p,null),n.a.createElement(d.d,null,n.a.createElement(d.b,{path:"/home:activeTab?",component:D}),n.a.createElement(d.b,{path:"/admin:activeTab?",component:k}),n.a.createElement(d.b,{path:"/user/:id?",component:C}),n.a.createElement(d.b,{path:"/report",component:q}),n.a.createElement(d.a,{to:"/home"})))))}}]),a}(n.a.Component)),K=Object(f.b)((function(e){return{guest:e.eduvanzState.guest}}))(Y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(f.a,{store:y},n.a.createElement(n.a.StrictMode,null,n.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.f2c528b6.chunk.js.map