(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},20:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),o=(a(19),a(13)),i=a(1),s=a(2),u=a(5),m=a(3),d=a(6),h=a(4),b=(a(20),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"page-header"},l.a.createElement("h1",null,"Project 01 - ToDo List ",l.a.createElement("small",null,"ReactJS"))))}}]),t}(n.Component)),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={strSeach:""},a.handleSearch=a.handleSearch.bind(Object(d.a)(a)),a.handleClear=a.handleClear.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleTextChangeOnSearch",value:function(e){this.setState({strSeach:e.target.value})}},{key:"handleSearch",value:function(){this.props.onClickGo(this.state.strSeach)}},{key:"handleClear",value:function(){this.setState({strSeach:""}),this.props.onClickGo("")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{value:this.state.strSeach,name:"textSearch",onChange:function(t){return e.handleTextChangeOnSearch(t)},type:"text",className:"form-control",placeholder:"Search for..."}),l.a.createElement("span",{className:"input-group-btn"},l.a.createElement("button",{onClick:this.handleSearch,className:"btn btn-info",type:"button"},"Go!"),l.a.createElement("button",{onClick:this.handleClear,className:"btn btn-success",type:"button"},"Clear"))))}}]),t}(n.Component),v=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleSort",value:function(e,t){this.props.onClickSort(e,t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.orderBy+" - "+t.orderDir;return l.a.createElement("div",{className:"col-xs-3 col-sm-3 col-md-3 col-lg-3"},l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"btn btn-default dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"},"Sort by ",l.a.createElement("span",{className:"caret"})),l.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return e.handleSort("name","asc")},role:"button"},"Name ASC")),l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return e.handleSort("name","desc")},role:"button"},"Name DESC")),l.a.createElement("li",{role:"separator",className:"divider"}),l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return e.handleSort("level","asc")},role:"button"},"Level ASC")),l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return e.handleSort("level","desc")},role:"button"},"Level DESC"))),l.a.createElement("span",{className:"label label-success label-medium"},a)))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleAdd=a.handleAdd.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleAdd",value:function(){this.props.onClickAdd()}},{key:"render",value:function(){var e=this.props,t=e.orderBy,a=e.orderDir,n=l.a.createElement("button",{onClick:this.handleAdd,type:"button",className:"btn btn-info btn-block"},"Add Task");return this.props.isShowForm&&(n=l.a.createElement("button",{onClick:this.handleAdd,type:"button",className:"btn btn-success btn-block"},"Close Form")),l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement(p,{onClickGo:this.props.onClickSearchGo}),l.a.createElement(v,{onClickSort:this.props.onClickSort,orderBy:t,orderDir:a}),l.a.createElement("div",{className:"col-xs-5 col-sm-5 col-md-5 col-lg-5"},n)))}}]),t}(n.Component),f=a(12),k=(a(8),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={task_id:"",task_Name:"",task_Level:0},a.handleCancel=a.handleCancel.bind(Object(d.a)(a)),console.log(a.props.itemSelected),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.itemSelected;this.updateItem(e)}},{key:"componentWillReceiveProps",value:function(e){var t=e.itemSelected;this.updateItem(t)}},{key:"updateItem",value:function(e){null!==e&&this.setState({task_id:e.id,task_Name:e.name,task_Level:e.level})}},{key:"handleCancel",value:function(){this.props.onClickCancel()}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(f.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t={id:this.state.task_id,name:this.state.task_Name,level:this.state.task_Level};this.props.onClickAdd(t),e.preventDefault()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-offset-7 col-md-5"},l.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"form-inline"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"sr-only"},"label"),l.a.createElement("input",{value:this.state.task_Name,onChange:function(t){return e.handleChange(t)},name:"task_Name",type:"text",className:"form-control",placeholder:"Task Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"sr-only"},"label"),l.a.createElement("select",{value:this.state.task_Level,name:"task_Level",id:"inputDs",className:"form-control",required:"required",onChange:function(t){return e.handleChange(t)}},l.a.createElement("option",{value:0},"Small"),l.a.createElement("option",{value:1},"Medium"),l.a.createElement("option",{value:2},"High"))),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),l.a.createElement("button",{onClick:this.handleCancel,type:"button",className:"btn btn-default"},"Cancel")))))}}]),t}(n.Component)),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleEdit=function(e){a.props.onClickEdit(e)},a.handleDelete=function(e){a.props.onClickDelete(e)},a.state={},a.handleDelete=a.handleDelete.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"showLevelElement",value:function(e){var t=l.a.createElement("span",{className:"label label-default"},"Small");return 1===e&&(t=l.a.createElement("span",{className:"label label-info"},"Medium")),2===e&&(t=l.a.createElement("span",{className:"label label-danger"},"High")),t}},{key:"render",value:function(){var e=this,t=this.props.item,a=this.props.index;return l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},a),l.a.createElement("td",null,t.name," - ",t.id),l.a.createElement("td",{className:"text-center"},this.showLevelElement(t.level)),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.handleEdit(t)},type:"button",className:"btn btn-warning"},"Edit"),l.a.createElement("button",{onClick:function(){return e.handleDelete(t.id)},type:"button",className:"btn btn-danger"},"Delete")))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.map(function(t,a){return l.a.createElement(S,{key:a,item:t,index:a,onClickDelete:e.props.onClickDelete,onClickEdit:e.props.onClickEdit})});return l.a.createElement("div",null,l.a.createElement("div",{className:"panel panel-success"},l.a.createElement("div",{className:"panel-heading"},"List Task"),l.a.createElement("table",{className:"table table-hover "},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{width:"10%"},className:"text-center"},"#"),l.a.createElement("th",null,"Task"),l.a.createElement("th",{style:{width:"20%"},className:"text-center"},"Level"),l.a.createElement("th",{style:{width:"20%"}},"Action"))),l.a.createElement("tbody",null,t))))}}]),t}(n.Component),O=a(8),y=(O(),O(),O(),O(),O(),a(7)),j=a(8),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleAdd=function(e){var t=a.state.items,n=null;""!==e.id?(t=Object(y.reject)(t,{id:e.id}),n=e.id):n=j(),t.push({id:n,name:e.name,level:+e.level}),a.setState({items:t}),localStorage.setItem("tasks",JSON.stringify(t))},a.handleEdit=function(e){console.log("item = "+e),a.setState({isShowForm:!0,itemSelected:e})},a.state={items:[],isShowForm:!1,strSearch:"",orderBy:"level",orderDir:"asc",itemSelected:null},a.handleToggle=a.handleToggle.bind(Object(d.a)(a)),a.closeForm=a.closeForm.bind(Object(d.a)(a)),a.handleSearch=a.handleSearch.bind(Object(d.a)(a)),a.handleSort=a.handleSort.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleToggle",value:function(){this.setState({isShowForm:!this.state.isShowForm,itemSelected:null})}},{key:"closeForm",value:function(){this.setState({isShowForm:!1})}},{key:"handleSearch",value:function(e){this.setState({strSearch:e})}},{key:"handleSort",value:function(e,t){this.setState({orderBy:e,orderDir:t}),console.log(e,t,"ahihihihi")}},{key:"handleDelete",value:function(e){var t=this.state.items;Object(y.remove)(t,function(t){return t.id===e}),this.setState({items:t}),localStorage.setItem("tasks",JSON.stringify(t))}},{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("tasks"));this.setState({items:e})}},{key:"render",value:function(){var e=this,t=null,a=null!==this.state.items?Object(o.a)(this.state.items):[],n=[],r=this.state,c=r.orderBy,i=r.orderDir,s=r.isShowForm,u=r.strSearch,m=r.itemSelected;return n=Object(y.filter)(a,function(e){return Object(y.includes)(e.name.toLowerCase(),u.toLowerCase())}),n=Object(y.orderBy)(n,[c],[i]),s&&(t=l.a.createElement(k,{itemSelected:m,onClickCancel:this.closeForm,onClickAdd:function(t){return e.handleAdd(t)}})),l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(E,{orderBy:c,orderDir:i,onClickSort:this.handleSort,onClickSearchGo:this.handleSearch,onClickAdd:this.handleToggle,isShowForm:s}),t,l.a.createElement(C,{items:n,onClickDelete:function(t){return e.handleDelete(t)},onClickEdit:function(t){return e.handleEdit(t)}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("main-contain")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.da4eb704.chunk.js.map