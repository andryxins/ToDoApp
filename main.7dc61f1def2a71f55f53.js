(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{E6F0:function(t,e,n){var i=n("mp5j");t.exports=(i.default||i).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,i,o){return'<div class="create-item">\n    <p class="create-item__title">Enter your task</p>\n    <input class="create-item__input-title" type="text" value="" placeholder="put your title...">\n    <textarea class="create-item__input-description" type="text" value="" placeholder="put your description..."\n        maxlength="150"></textarea>\n    <div class="create-item__priority-group">\n        <input type="radio" name="priority" id="priorityLOW" value="low" checked>\n        <label for="priorityLOW">low</label>\n        <input type="radio" name="priority" id="priorityNORMAL" value="normal">\n        <label for="priorityNORMAL">normal</label>\n        <input type="radio" name="priority" id="priorityHIGH" value="high">\n        <label for="priorityHIGH">high</label>\n    </div>\n    <button class="create-item__button" data-action="createTask">add to list</button>\n</div>'},useData:!0})},L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO"),n("gWZt"),n("fF0f"),n("ZexH"),n("Wvq8"),n("t25L"),n("PzF0"),n("IlJM"),n("4owi"),n("ZXyM"),n("WoWj");var i=n("dcBu"),o=n("E6F0"),a=n.n(o),r=(n("hi3g"),n("8cZI"),n("lmye"),n("Tsb7"),n("aOEW"),n("wCa+"),n("Ur7o")),l=n.n(r),c=(n("lYjL"),n("IvQZ"),n("4NM0"),[]),u=(n("FWxf"),n("RtS0"),n("Xlt+"),n("3dw1"),n("jkRM")),s=n.n(u),d={addToTasks:function(t){c.push(t),this.updateLocalStorage()},deleteFromTasks:function(t){c.splice(c.findIndex((function(e){return e.id===t})),1),this.updateLocalStorage(),h.updatingToDoList(c)},updateStatus:function(t){c.forEach((function(e){return e.id===t?e.status="done":e})),this.updateLocalStorage(),h.updatingToDoList(c)},editTasks:function(t){var e=this,n=c.findIndex((function(e){return e.id===t})),o=i.create(s()(c[n]));o.show(),document.querySelectorAll("input[name=priority]").forEach((function(t){return t.value===c[n].priority?t.setAttribute("checked","checked"):t})),document.querySelector('button[data-action="editTaskBtn"]').addEventListener("click",(function(i){if(document.querySelector(".create-item__input-title").value){var a={title:document.querySelector(".create-item__input-title").value,description:document.querySelector(".create-item__input-description").value,priority:Array.from(document.querySelectorAll('input[name="priority"]')).find((function(t){return t.checked})).value,status:"open",id:t};c.splice(n,1,a),e.updateLocalStorage(),h.updatingToDoList(c),o.close()}}))},updateSortOrder:function(t){var e=t.oldIndex,n=t.newIndex;if(!(t.oldContainer.children.length-2<c.length)){var i=[].concat(c).reverse(),o=i.splice(e,1);i.splice.apply(i,[n,0].concat(o)),c.splice.apply(c,[0,c.length].concat(i.reverse())),this.updateLocalStorage()}},updateLocalStorage:function(){try{localStorage.setItem("arrOfTasks",JSON.stringify(c))}catch(t){console.log(t)}},getLocalStorageItems:function(){try{var t=localStorage.getItem("arrOfTasks");c.push.apply(c,JSON.parse(t))}catch(t){console.log(t)}}};document.addEventListener("DOMContentLoaded",(function(){d.getLocalStorageItems(),h.updatingToDoList(c)}));var p={form:document.querySelector("#searchForm"),toDosList:document.querySelector(".js-todo-list")},m={searchByTitle:function(t,e){return e?t.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())})):t},sortByStatus:function(t,e){return"all"!==e?t.filter((function(t){return t.status===e})):t},sortByPriority:function(t,e){return"all"!==e?t.filter((function(t){return t.priority===e})):t},sort:function(){var t=Array.from(p.form.elements).map((function(t){return t.value})),e=this.searchByTitle(c,t[0]),n=this.sortByStatus(e,t[1]);return this.sortByPriority(n,t[2])}};p.toDosList.addEventListener("click",(function(t){return t.target.dataset.action&&d[t.target.dataset.action](t.target.parentNode.dataset.id)})),p.form.addEventListener("input",(function(t){return h.updatingToDoList()}));var f=m,y={toDosList:document.querySelector(".js-todo-list")},h={createListMarkUp:function(t){return[].concat(t).reverse().map((function(t,e){return l()(Object.assign({positionNumber:e},t))})).join("")},updatingToDoList:function(){var t=this.createListMarkUp(f.sort());y.toDosList.innerHTML="",y.toDosList.insertAdjacentHTML("beforeend",t)}},v={createItem:function(t){var e=this,n=i.create(a()());n.show(),document.querySelector('button[data-action="createTask"]').addEventListener("click",(function(){document.querySelector(".create-item__input-title").value&&(e.createObjectOfItem(),n.close())}))},createObjectOfItem:function(){var t={title:document.querySelector(".create-item__input-title").value,description:document.querySelector(".create-item__input-description").value,priority:Array.from(document.querySelectorAll('input[name="priority"]')).find((function(t){return t.checked})).value,status:"open",id:Date.now()+""};d.addToTasks(t),h.updatingToDoList(c)}};({createBtn:document.querySelector(".js-createBtn")}).createBtn.addEventListener("click",v.createItem.bind(v));var _=n("fdv9");new(n.n(_).a)(document.querySelector(".js-todo-list"),{draggable:".todo-list__item",delay:200}).on("sortable:stop",(function(t){return d.updateSortOrder(t)}))},Ur7o:function(t,e,n){var i=n("mp5j");t.exports=(i.default||i).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,i,o){var a,r=null!=e?e:t.nullContext||{},l=t.hooks.helperMissing,c="function",u=t.escapeExpression;return'<li class="todo-list__item" data-id="'+u(typeof(a=null!=(a=n.id||(null!=e?e.id:e))?a:l)===c?a.call(r,{name:"id",hash:{},data:o,loc:{start:{line:1,column:37},end:{line:1,column:43}}}):a)+'" data-pos="'+u(typeof(a=null!=(a=n.positionNumber||(null!=e?e.positionNumber:e))?a:l)===c?a.call(r,{name:"positionNumber",hash:{},data:o,loc:{start:{line:1,column:55},end:{line:1,column:73}}}):a)+'">\n    <div class="item__priority priority-'+u(typeof(a=null!=(a=n.priority||(null!=e?e.priority:e))?a:l)===c?a.call(r,{name:"priority",hash:{},data:o,loc:{start:{line:2,column:40},end:{line:2,column:52}}}):a)+" status-"+u(typeof(a=null!=(a=n.status||(null!=e?e.status:e))?a:l)===c?a.call(r,{name:"status",hash:{},data:o,loc:{start:{line:2,column:60},end:{line:2,column:70}}}):a)+'" data-dragndrop="dragNdrop">'+u(typeof(a=null!=(a=n.priority||(null!=e?e.priority:e))?a:l)===c?a.call(r,{name:"priority",hash:{},data:o,loc:{start:{line:2,column:99},end:{line:2,column:111}}}):a)+'</div>\n    <h3 class="item__title">'+u(typeof(a=null!=(a=n.title||(null!=e?e.title:e))?a:l)===c?a.call(r,{name:"title",hash:{},data:o,loc:{start:{line:3,column:28},end:{line:3,column:37}}}):a)+'</h3>\n    <p class="item__desc">'+u(typeof(a=null!=(a=n.description||(null!=e?e.description:e))?a:l)===c?a.call(r,{name:"description",hash:{},data:o,loc:{start:{line:4,column:26},end:{line:4,column:41}}}):a)+'</p>\n    <div class="item__controls" data-id="'+u(typeof(a=null!=(a=n.id||(null!=e?e.id:e))?a:l)===c?a.call(r,{name:"id",hash:{},data:o,loc:{start:{line:5,column:41},end:{line:5,column:47}}}):a)+'">\n        <button class="controls__complete-btn" data-action="updateStatus">completed</button>\n        <button class="controls__delete-btn" data-action="deleteFromTasks">delete</button>\n        <button class="controls__edit-btn" data-action="editTasks">edit</button>\n    </div>\n</li>'},useData:!0})},Wvq8:function(t,e,n){},ZexH:function(t,e,n){},fF0f:function(t,e,n){},gWZt:function(t,e,n){},jkRM:function(t,e,n){var i=n("mp5j");t.exports=(i.default||i).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,i,o){var a,r=null!=e?e:t.nullContext||{},l=t.hooks.helperMissing,c=t.escapeExpression;return'<div class="create-item">\n    <p class="create-item__title">Edit your task</p>\n    <input class="create-item__input-title" type="text" value="'+c("function"==typeof(a=null!=(a=n.title||(null!=e?e.title:e))?a:l)?a.call(r,{name:"title",hash:{},data:o,loc:{start:{line:3,column:63},end:{line:3,column:72}}}):a)+'" placeholder="put your title...">\n    <textarea class="create-item__input-description" type="text" placeholder="put your description..."\n        maxlength="150">'+c("function"==typeof(a=null!=(a=n.description||(null!=e?e.description:e))?a:l)?a.call(r,{name:"description",hash:{},data:o,loc:{start:{line:5,column:24},end:{line:5,column:39}}}):a)+'</textarea>\n    <div class="create-item__priority-group">\n        <input type="radio" name="priority" id="priorityLOW" value="low">\n        <label for="priorityLOW">low</label>\n        <input type="radio" name="priority" id="priorityNORMAL" value="normal">\n        <label for="priorityNORMAL">normal</label>\n        <input type="radio" name="priority" id="priorityHIGH" value="high">\n        <label for="priorityHIGH">high</label>\n    </div>\n    <button class="create-item__button" data-action="editTaskBtn">EDIT</button>\n</div>'},useData:!0})},t25L:function(t,e,n){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.7dc61f1def2a71f55f53.js.map