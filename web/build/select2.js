/*
Copyright 2012 Igor Vaynberg
 
Version: 3.2 Timestamp: Mon Sep 10 10:38:04 PDT 2012

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in
compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is
distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

(function(e){"undefined"==typeof e.fn.each2&&e.fn.extend({each2:function(t){for(var n=e([0]),r=-1,i=this.length;++r<i&&(n.context=n[0]=this[r])&&!1!==t.call(n[0],r,n););return this}})})(jQuery),function(e,t){function n(e,t){var n=0,r=t.length,i;if("undefined"==typeof e)return-1;if(e.constructor===String){for(;n<r;n+=1)if(0===e.localeCompare(t[n]))return n}else for(;n<r;n+=1)if(i=t[n],i.constructor===String){if(0===i.localeCompare(e))return n}else if(i===e)return n;return-1}function r(e,n){return e===n?!0:e===t||n===t||null===e||null===n?!1:e.constructor===String?0===e.localeCompare(n):n.constructor===String?0===n.localeCompare(e):!1}function i(t,n){var r,i,s;if(null===t||1>t.length)return[];r=t.split(n),i=0;for(s=r.length;i<s;i+=1)r[i]=e.trim(r[i]);return r}function s(e,n,r){var r=r||t,i;return function(){var t=arguments;window.clearTimeout(i),i=window.setTimeout(function(){n.apply(r,t)},e)}}function o(e){e.preventDefault(),e.stopPropagation()}function u(e,t,n){var r=e.toUpperCase().indexOf(t.toUpperCase()),t=t.length;0>r?n.push(e):(n.push(e.substring(0,r)),n.push("<span class='select2-match'>"),n.push(e.substring(r,r+t)),n.push("</span>"),n.push(e.substring(r+t,e.length)))}function a(t){var n,r=0,i=null,s=t.quietMillis||100;return function(o){window.clearTimeout(n),n=window.setTimeout(function(){var n=r+=1,s=t.data,u=t.transport||e.ajax,a=t.traditional||!1,f=t.type||"GET",s=s.call(this,o.term,o.page,o.context);null!==i&&i.abort(),i=u.call(null,{url:t.url,dataType:t.dataType,data:s,type:f,traditional:a,success:function(e){n<r||(e=t.results(e,o.page),o.callback(e))}})},s)}}function f(t){var n=t,r,i=function(e){return""+e.text};return e.isArray(n)||(i=n.text,e.isFunction(i)||(r=n.text,i=function(e){return e[r]}),n=n.results),function(t){var r=t.term,s={results:[]},o;r===""?t.callback({results:n}):(o=function(n,s){var u,a,n=n[0];if(n.children){u={};for(a in n)n.hasOwnProperty(a)&&(u[a]=n[a]);u.children=[],e(n.children).each2(function(e,t){o(t,u.children)}),u.children.length&&s.push(u)}else t.matcher(r,i(n))&&s.push(n)},e(n).each2(function(e,t){o(t,s.results)}),t.callback(s))}}function l(n){return e.isFunction(n)?n:function(r){var i=r.term,s={results:[]};e(n).each(function(){var e=this.text!==t,n=e?this.text:this;(""===i||r.matcher(i,n))&&s.results.push(e?this:{id:this,text:this})}),r.callback(s)}}function c(t){if(e.isFunction(t))return!0;if(!t)return!1;throw Error("formatterName must be a function or a falsy value")}function h(t){return e.isFunction(t)?t():t}function p(t){var n=0;return e.each(t,function(e,t){t.children?n+=p(t.children):n++}),n}function d(e,n,i,s){var o=e,u=!1,a,f,l,c;if(!s.createSearchChoice||!s.tokenSeparators||1>s.tokenSeparators.length)return t;for(;;){u=-1,f=0;for(l=s.tokenSeparators.length;f<l&&!(c=s.tokenSeparators[f],u=e.indexOf(c),0<=u);f++);if(0>u)break;a=e.substring(0,u),e=e.substring(u+c.length);if(0<a.length&&(a=s.createSearchChoice(a,n),a!==t&&null!==a&&s.id(a)!==t&&null!==s.id(a))){u=!1,f=0;for(l=n.length;f<l;f++)if(r(s.id(a),s.id(n[f]))){u=!0;break}u||i(a)}}if(0!=o.localeCompare(e))return e}function v(t,n){var r=function(){};return r.prototype=new t,r.prototype.constructor=r,r.prototype.parent=t.prototype,r.prototype=e.extend(r.prototype,n),r}if(window.Select2===t){var m,g,y,b,w,E;m={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(e){e=e.which?e.which:e;switch(e){case m.LEFT:case m.RIGHT:case m.UP:case m.DOWN:return!0}return!1},isControl:function(e){switch(e.which){case m.SHIFT:case m.CTRL:case m.ALT:return!0}return e.metaKey?!0:!1},isFunctionKey:function(e){return e=e.which?e.which:e,112<=e&&123>=e}};var S=1;w=function(){return S++},e(document).delegate("body","mousemove",function(t){e.data(document,"select2-lastpos",{x:t.pageX,y:t.pageY})}),e(document).ready(function(){e(document).delegate("body","mousedown touchend",function(n){var r=e(n.target).closest("div.select2-container").get(0),i;r?e(document).find("div.select2-container-active").each(function(){this!==r&&e(this).data("select2").blur()}):(r=e(n.target).closest("div.select2-drop").get(0),e(document).find("div.select2-drop-active").each(function(){this!==r&&e(this).data("select2").blur()})),r=e(n.target),i=r.attr("for"),"LABEL"===n.target.tagName&&i&&0<i.length&&(r=e("#"+i),r=r.data("select2"),r!==t&&(r.focus(),n.preventDefault()))})}),g=v(Object,{bind:function(e){var t=this;return function(){e.apply(t,arguments)}},init:function(r){var i,u;this.opts=r=this.prepareOpts(r),this.id=r.id,r.element.data("select2")!==t&&null!==r.element.data("select2")&&this.destroy(),this.enabled=!0,this.container=this.createContainer(),this.containerId="s2id_"+(r.element.attr("id")||"autogen"+w()),this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId);var a=!1,f;this.body=function(){return!1===a&&(f=r.element.closest("body"),a=!0),f},r.element.attr("class")!==t&&this.container.addClass(r.element.attr("class").replace(/validate\[[\S ]+] ?/,"")),this.container.css(h(r.containerCss)),this.container.addClass(h(r.containerCssClass)),this.opts.element.data("select2",this).hide().before(this.container),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),this.dropdown.addClass(h(r.dropdownCssClass)),this.dropdown.data("select2",this),this.results=i=this.container.find(".select2-results"),this.search=u=this.container.find("input.select2-input"),u.attr("tabIndex",this.opts.element.attr("tabIndex")),this.resultsPage=0,this.context=null,this.initContainer(),this.initContainerWidth(),this.results.bind("mousemove",function(n){var r=e.data(document,"select2-lastpos");(r===t||r.x!==n.pageX||r.y!==n.pageY)&&e(n.target).trigger("mousemove-filtered",n)}),this.dropdown.delegate(".select2-results","mousemove-filtered",this.bind(this.highlightUnderEvent));var l=this.results,c=s(80,function(e){l.trigger("scroll-debounced",e)});l.bind("scroll",function(e){0<=n(e.target,l.get())&&c(e)}),this.dropdown.delegate(".select2-results","scroll-debounced",this.bind(this.loadMoreIfNeeded)),e.fn.mousewheel&&i.mousewheel(function(e,t,n,r){t=i.scrollTop(),0<r&&0>=t-r?(i.scrollTop(0),o(e)):0>r&&i.get(0).scrollHeight-i.scrollTop()+r<=i.height()&&(i.scrollTop(i.get(0).scrollHeight-i.height()),o(e))}),u.bind("keydown",function(){e.data(u,"keyup-change-value")===t&&e.data(u,"keyup-change-value",u.val())}),u.bind("keyup",function(){var n=e.data(u,"keyup-change-value");n!==t&&u.val()!==n&&(e.removeData(u,"keyup-change-value"),u.trigger("keyup-change"))}),u.bind("keyup-change",this.bind(this.updateResults)),u.bind("focus",function(){u.addClass("select2-focused")," "===u.val()&&u.val("")}),u.bind("blur",function(){u.removeClass("select2-focused")}),this.dropdown.delegate(".select2-results","mouseup",this.bind(function(t){0<e(t.target).closest(".select2-result-selectable:not(.select2-disabled)").length?(this.highlightUnderEvent(t),this.selectHighlighted(t)):this.focusSearch(),o(t)})),this.dropdown.bind("click mouseup mousedown",function(e){e.stopPropagation()}),e.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),(r.element.is(":disabled")||r.element.is("[readonly='readonly']"))&&this.disable()},destroy:function(){var e=this.opts.element.data("select2");e!==t&&(e.container.remove(),e.dropdown.remove(),e.opts.element.removeData("select2").unbind(".select2").show())},prepareOpts:function(n){var s,o,u;s=n.element,"select"===s.get(0).tagName.toLowerCase()&&(this.select=o=n.element),o&&e.each("id multiple ajax query createSearchChoice initSelection data tags".split(" "),function(){if(this in n)throw Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),n=e.extend({},{populateResults:function(r,i,s){var o,u=this.opts.id,a=this;o=function(r,i,f){var l,c,h,p,d,v,m;l=0;for(c=r.length;l<c;l+=1)h=r[l],p=u(h)!==t,d=h.children&&h.children.length>0,v=e("<li></li>"),v.addClass("select2-results-dept-"+f),v.addClass("select2-result"),v.addClass(p?"select2-result-selectable":"select2-result-unselectable"),d&&v.addClass("select2-result-with-children"),v.addClass(a.opts.formatResultCssClass(h)),p=e("<div></div>"),p.addClass("select2-result-label"),m=n.formatResult(h,p,s),m!==t&&p.html(a.opts.escapeMarkup(m)),v.append(p),d&&(d=e("<ul></ul>"),d.addClass("select2-result-sub"),o(h.children,d,f+1),v.append(d)),v.data("select2-data",h),i.append(v)},o(i,r,0)}},e.fn.select2.defaults,n),"function"!=typeof n.id&&(u=n.id,n.id=function(e){return e[u]}),o?(n.query=this.bind(function(n){var r={results:[],more:!1},i=n.term,o,u,a;a=function(e,t){var r;e.is("option")?n.matcher(i,e.text(),e)&&t.push({id:e.attr("value"),text:e.text(),element:e.get(),css:e.attr("class")}):e.is("optgroup")&&(r={text:e.attr("label"),children:[],element:e.get(),css:e.attr("class")},e.children().each2(function(e,t){a(t,r.children)}),r.children.length>0&&t.push(r))},o=s.children(),this.getPlaceholder()!==t&&o.length>0&&(u=o[0],e(u).text()===""&&(o=o.not(u))),o.each2(function(e,t){a(t,r.results)}),n.callback(r)}),n.id=function(e){return e.id},n.formatResultCssClass=function(e){return e.css}):"query"in n||("ajax"in n?((o=n.element.data("ajax-url"))&&0<o.length&&(n.ajax.url=o),n.query=a(n.ajax)):"data"in n?n.query=f(n.data):"tags"in n&&(n.query=l(n.tags),n.createSearchChoice=function(e){return{id:e,text:e}},n.initSelection=function(t,s){var o=[];e(i(t.val(),n.separator)).each(function(){var t=this,i=this,s=n.tags;e.isFunction(s)&&(s=s()),e(s).each(function(){if(r(this.id,t))return i=this.text,!1}),o.push({id:t,text:i})}),s(o)}));if("function"!=typeof n.query)throw"query function not defined for Select2 "+n.element.attr("id");return n},monitorSource:function(){this.opts.element.bind("change.select2",this.bind(function(){!0!==this.opts.element.data("select2-change-triggered")&&this.initSelection()}))},triggerChange:function(t){t=t||{},t=e.extend({},t,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(t),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},enable:function(){this.enabled||(this.enabled=!0,this.container.removeClass("select2-container-disabled"))},disable:function(){this.enabled&&(this.close(),this.enabled=!1,this.container.addClass("select2-container-disabled"))},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var t=this.container.offset(),n=this.container.outerHeight(),r=this.container.outerWidth(),i=this.dropdown.outerHeight(),s=e(window).scrollTop()+document.documentElement.clientHeight,n=t.top+n,o=t.left,s=n+i<=s,u=t.top-i>=this.body().scrollTop(),a=this.dropdown.hasClass("select2-drop-above"),f;"static"!==this.body().css("position")&&(f=this.body().offset(),n-=f.top,o-=f.left),a?(a=!0,!u&&s&&(a=!1)):(a=!1,!s&&u&&(a=!0)),a?(n=t.top-i,this.container.addClass("select2-drop-above"),this.dropdown.addClass("select2-drop-above")):(this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")),t=e.extend({top:n,left:o,width:r},h(this.opts.dropdownCss)),this.dropdown.css(t)},shouldOpen:function(){var t;return this.opened()?!1:(t=e.Event("open"),this.opts.element.trigger(t),!t.isDefaultPrevented())},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},open:function(){return this.shouldOpen()?(window.setTimeout(this.bind(this.opening),1),!0):!1},opening:function(){var t=this.containerId,n=this.containerSelector,r="scroll."+t,i="resize."+t;this.container.parents().each(function(){e(this).bind(r,function(){var t=e(n);0==t.length&&e(this).unbind(r),t.select2("close")})}),e(window).bind(i,function(){var t=e(n);0==t.length&&e(window).unbind(i),t.select2("close")}),this.clearDropdownAlignmentPreference()," "===this.search.val()&&this.search.val(""),this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.updateResults(!0),this.dropdown[0]!==this.body().children().last()[0]&&this.dropdown.detach().appendTo(this.body()),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active"),this.ensureHighlightVisible(),this.focusSearch()},close:function(){if(this.opened()){var t=this;this.container.parents().each(function(){e(this).unbind("scroll."+t.containerId)}),e(window).unbind("resize."+this.containerId),this.clearDropdownAlignmentPreference(),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),this.results.empty(),this.clearSearch(),this.opts.element.trigger(e.Event("close"))}},clearSearch:function(){},ensureHighlightVisible:function(){var t=this.results,n,r,i,s;r=this.highlight(),0>r||(0==r?t.scrollTop(0):(n=t.find(".select2-result-selectable"),i=e(n[r]),s=i.offset().top+i.outerHeight(),r===n.length-1&&(n=t.find("li.select2-more-results"),0<n.length&&(s=n.offset().top+n.outerHeight())),n=t.offset().top+t.outerHeight(),s>n&&t.scrollTop(t.scrollTop()+(s-n)),i=i.offset().top-t.offset().top,0>i&&t.scrollTop(t.scrollTop()+i)))},moveHighlight:function(t){for(var n=this.results.find(".select2-result-selectable"),r=this.highlight();-1<r&&r<n.length;){var r=r+t,i=e(n[r]);if(i.hasClass("select2-result-selectable")&&!i.hasClass("select2-disabled")){this.highlight(r);break}}},highlight:function(t){var r=this.results.find(".select2-result-selectable").not(".select2-disabled");if(0===arguments.length)return n(r.filter(".select2-highlighted")[0],r.get());t>=r.length&&(t=r.length-1),0>t&&(t=0),r.removeClass("select2-highlighted"),e(r[t]).addClass("select2-highlighted"),this.ensureHighlightVisible()},countSelectableResults:function(){return this.results.find(".select2-result-selectable").not(".select2-disabled").length},highlightUnderEvent:function(t){t=e(t.target).closest(".select2-result-selectable");if(0<t.length&&!t.is(".select2-highlighted")){var n=this.results.find(".select2-result-selectable");this.highlight(n.index(t))}else 0==t.length&&this.results.find(".select2-highlighted").removeClass("select2-highlighted")},loadMoreIfNeeded:function(){var e=this.results,t=e.find("li.select2-more-results"),n,r=this.resultsPage+1,i=this,s=this.search.val(),o=this.context;0!==t.length&&(n=t.offset().top-e.offset().top-e.height(),0>=n&&(t.addClass("select2-active"),this.opts.query({term:s,page:r,context:o,matcher:this.opts.matcher,callback:this.bind(function(n){i.opened()&&(i.opts.populateResults.call(this,e,n.results,{term:s,page:r,context:o}),!0===n.more?(t.detach().appendTo(e).text(i.opts.formatLoadMore(r+1)),window.setTimeout(function(){i.loadMoreIfNeeded()},10)):t.remove(),i.positionDropdown(),i.resultsPage=r)})})))},tokenize:function(){},updateResults:function(n){function i(){u.scrollTop(0),o.removeClass("select2-active"),l.positionDropdown()}function s(e){u.html(l.opts.escapeMarkup(e)),i()}var o=this.search,u=this.results,a=this.opts,f,l=this;if(!0===n||!1!==this.showSearchInput&&!!this.opened()){o.addClass("select2-active");if(1<=a.maximumSelectionSize&&(f=this.data(),e.isArray(f)&&f.length>=a.maximumSelectionSize&&c(a.formatSelectionTooBig,"formatSelectionTooBig"))){s("<li class='select2-selection-limit'>"+a.formatSelectionTooBig(a.maximumSelectionSize)+"</li>");return}o.val().length<a.minimumInputLength&&c(a.formatInputTooShort,"formatInputTooShort")?s("<li class='select2-no-results'>"+a.formatInputTooShort(o.val(),a.minimumInputLength)+"</li>"):(s("<li class='select2-searching'>"+a.formatSearching()+"</li>"),f=this.tokenize(),f!=t&&null!=f&&o.val(f),this.resultsPage=1,a.query({term:o.val(),page:this.resultsPage,context:null,matcher:a.matcher,callback:this.bind(function(f){var h;this.opened()&&((this.context=f.context===t?null:f.context,this.opts.createSearchChoice&&""!==o.val()&&(h=this.opts.createSearchChoice.call(null,o.val(),f.results),h!==t&&null!==h&&l.id(h)!==t&&null!==l.id(h)&&0===e(f.results).filter(function(){return r(l.id(this),l.id(h))}).length&&f.results.unshift(h)),0===f.results.length&&c(a.formatNoMatches,"formatNoMatches"))?s("<li class='select2-no-results'>"+a.formatNoMatches(o.val())+"</li>"):(u.empty(),l.opts.populateResults.call(this,u,f.results,{term:o.val(),page:this.resultsPage,context:null}),!0===f.more&&c(a.formatLoadMore,"formatLoadMore")&&(u.append("<li class='select2-more-results'>"+l.opts.escapeMarkup(a.formatLoadMore(this.resultsPage))+"</li>"),window.setTimeout(function(){l.loadMoreIfNeeded()},10)),this.postprocessResults(f,n),i()))})}))}},cancel:function(){this.close()},blur:function(){this.close(),this.container.removeClass("select2-container-active"),this.dropdown.removeClass("select2-drop-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){this.search.show(),this.search.focus(),window.setTimeout(this.bind(function(){this.search.show(),this.search.focus(),this.search.val(this.search.val())}),10)},selectHighlighted:function(){var e=this.highlight(),t=this.results.find(".select2-highlighted").not(".select2-disabled"),n=t.closest(".select2-result-selectable").data("select2-data");n&&(t.addClass("select2-disabled"),this.highlight(e),this.onSelect(n))},getPlaceholder:function(){return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder},initContainerWidth:function(){var n=function(){var n,r,i,s;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth()?"auto":this.opts.element.outerWidth()+"px";if("copy"===this.opts.width||"resolve"===this.opts.width){n=this.opts.element.attr("style");if(n!==t){n=n.split(";"),i=0;for(s=n.length;i<s;i+=1)if(r=n[i].replace(/\s/g,"").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/),null!==r&&1<=r.length)return r[1]}return"resolve"===this.opts.width?(n=this.opts.element.css("width"),0<n.indexOf("%")?n:0===this.opts.element.outerWidth()?"auto":this.opts.element.outerWidth()+"px"):null}return e.isFunction(this.opts.width)?this.opts.width():this.opts.width}.call(this);null!==n&&this.container.attr("style","width: "+n)}}),y=v(g,{createContainer:function(){return e("<div></div>",{"class":"select2-container"}).html("    <a href='#' onclick='return false;' class='select2-choice'>   <span></span><abbr class='select2-search-choice-close' style='display:none;'></abbr>   <div><b></b></div></a>    <div class='select2-drop select2-offscreen'>   <div class='select2-search'>       <input type='text' autocomplete='off' class='select2-input'/>   </div>   <ul class='select2-results'>   </ul></div>")},opening:function(){this.search.show(),this.parent.opening.apply(this,arguments),this.dropdown.removeClass("select2-offscreen")},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),this.dropdown.removeAttr("style").addClass("select2-offscreen").insertAfter(this.selection).show())},focus:function(){this.close(),this.selection.focus()},isFocused:function(){return this.selection[0]===document.activeElement},cancel:function(){this.parent.cancel.apply(this,arguments),this.selection.focus()},initContainer:function(){var e,t=this.dropdown;this.selection=e=this.container.find(".select2-choice"),this.search.bind("keydown",this.bind(function(e){if(this.enabled)if(e.which===m.PAGE_UP||e.which===m.PAGE_DOWN)o(e);else if(this.opened())switch(e.which){case m.UP:case m.DOWN:this.moveHighlight(e.which===m.UP?-1:1),o(e);break;case m.TAB:case m.ENTER:this.selectHighlighted(),o(e);break;case m.ESC:this.cancel(e),o(e)}else e.which===m.TAB||m.isControl(e)||m.isFunctionKey(e)||e.which===m.ESC||!1===this.opts.openOnEnter&&e.which===m.ENTER||this.open()})),this.search.bind("focus",this.bind(function(){this.selection.attr("tabIndex","-1")})),this.search.bind("blur",this.bind(function(){this.opened()||this.container.removeClass("select2-container-active"),window.setTimeout(this.bind(function(){this.selection.attr("tabIndex",this.opts.element.attr("tabIndex"))}),10)})),e.bind("mousedown",this.bind(function(){this.opened()?(this.close(),this.selection.focus()):this.enabled&&this.open()})),t.bind("mousedown",this.bind(function(){this.search.focus()})),e.bind("focus",this.bind(function(){this.container.addClass("select2-container-active"),this.search.attr("tabIndex","-1")})),e.bind("blur",this.bind(function(){this.opened()||this.container.removeClass("select2-container-active"),window.setTimeout(this.bind(function(){this.search.attr("tabIndex",this.opts.element.attr("tabIndex"))}),10)})),e.bind("keydown",this.bind(function(e){if(this.enabled)if(e.which===m.PAGE_UP||e.which===m.PAGE_DOWN)o(e);else if(e.which!==m.TAB&&!m.isControl(e)&&!m.isFunctionKey(e)&&e.which!==m.ESC&&(!1!==this.opts.openOnEnter||e.which!==m.ENTER))if(e.which==m.DELETE)this.opts.allowClear&&this.clear();else{this.open();if(e.which!==m.ENTER&&!(48>e.which)){var t=String.fromCharCode(e.which).toLowerCase();e.shiftKey&&(t=t.toUpperCase()),this.search.focus(),this.search.val(t)}o(e)}})),e.delegate("abbr","mousedown",this.bind(function(e){this.enabled&&(this.clear(),o(e),this.close(),this.triggerChange(),this.selection.focus())})),this.setPlaceholder(),this.search.bind("focus",this.bind(function(){this.container.addClass("select2-container-active")}))},clear:function(){this.opts.element.val(""),this.selection.find("span").empty(),this.selection.removeData("select2-data"),this.setPlaceholder()},initSelection:function(){if(""===this.opts.element.val())this.close(),this.setPlaceholder();else{var e=this;this.opts.initSelection.call(null,this.opts.element,function(n){n!==t&&null!==n&&(e.updateSelection(n),e.close(),e.setPlaceholder())})}},prepareOpts:function(){var t=this.parent.prepareOpts.apply(this,arguments);return"select"===t.element.get(0).tagName.toLowerCase()&&(t.initSelection=function(t,n){var r=t.find(":selected");e.isFunction(n)&&n({id:r.attr("value"),text:r.text()})}),t},setPlaceholder:function(){var e=this.getPlaceholder();""===this.opts.element.val()&&e!==t&&(!this.select||""===this.select.find("option:first").text())&&(this.selection.find("span").html(this.opts.escapeMarkup(e)),this.selection.addClass("select2-default"),this.selection.find("abbr").hide())},postprocessResults:function(t,n){var i=0,s=this,o=!0;this.results.find(".select2-result-selectable").each2(function(e,t){if(r(s.id(t.data("select2-data")),s.opts.element.val()))return i=e,!1}),this.highlight(i),!0===n&&(o=this.showSearchInput=p(t.results)>=this.opts.minimumResultsForSearch,this.dropdown.find(".select2-search")[o?"removeClass":"addClass"]("select2-search-hidden"),e(this.dropdown,this.container)[o?"addClass":"removeClass"]("select2-with-searchbox"))},onSelect:function(e){var t=this.opts.element.val();this.opts.element.val(this.id(e)),this.updateSelection(e),this.close(),this.selection.focus(),r(t,this.id(e))||this.triggerChange()},updateSelection:function(e){var n=this.selection.find("span");this.selection.data("select2-data",e),n.empty(),e=this.opts.formatSelection(e,n),e!==t&&n.append(this.opts.escapeMarkup(e)),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==t&&this.selection.find("abbr").show()},val:function(){var e,n=null,r=this;if(0===arguments.length)return this.opts.element.val();e=arguments[0];if(this.select)this.select.val(e).find(":selected").each2(function(e,t){return n={id:t.attr("value"),text:t.text()},!1}),this.updateSelection(n),this.setPlaceholder();else{if(this.opts.initSelection===t)throw Error("cannot call val() if initSelection() is not defined");e?(this.opts.element.val(e),this.opts.initSelection(this.opts.element,function(e){r.opts.element.val(e?r.id(e):""),r.updateSelection(e),r.setPlaceholder()})):this.clear()}},clearSearch:function(){this.search.val("")},data:function(e){var n;if(0===arguments.length)return n=this.selection.data("select2-data"),n==t&&(n=null),n;!e||""===e?this.clear():(this.opts.element.val(e?this.id(e):""),this.updateSelection(e))}}),b=v(g,{createContainer:function(){return e("<div></div>",{"class":"select2-container select2-container-multi"}).html("    <ul class='select2-choices'>  <li class='select2-search-field'>    <input type='text' autocomplete='off' class='select2-input'>  </li></ul><div class='select2-drop select2-drop-multi' style='display:none;'>   <ul class='select2-results'>   </ul></div>")},prepareOpts:function(){var t=this.parent.prepareOpts.apply(this,arguments);return"select"===t.element.get(0).tagName.toLowerCase()&&(t.initSelection=function(t,n){var r=[];t.find(":selected").each2(function(e,t){r.push({id:t.attr("value"),text:t.text()})}),e.isFunction(n)&&n(r)}),t},initContainer:function(){var t;this.searchContainer=this.container.find(".select2-search-field"),this.selection=t=this.container.find(".select2-choices"),this.search.bind("keydown",this.bind(function(e){if(this.enabled){if(e.which===m.BACKSPACE&&""===this.search.val()){this.close();var n;n=t.find(".select2-search-choice-focus");if(0<n.length){this.unselect(n.first()),this.search.width(10),o(e);return}n=t.find(".select2-search-choice"),0<n.length&&n.last().addClass("select2-search-choice-focus")}else t.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");if(this.opened())switch(e.which){case m.UP:case m.DOWN:this.moveHighlight(e.which===m.UP?-1:1),o(e);return;case m.ENTER:case m.TAB:this.selectHighlighted(),o(e);return;case m.ESC:this.cancel(e),o(e);return}e.which!==m.TAB&&!m.isControl(e)&&!m.isFunctionKey(e)&&e.which!==m.BACKSPACE&&e.which!==m.ESC&&(!1!==this.opts.openOnEnter||e.which!==m.ENTER)&&(this.open(),(e.which===m.PAGE_UP||e.which===m.PAGE_DOWN)&&o(e))}})),this.search.bind("keyup",this.bind(this.resizeSearch)),this.search.bind("blur",this.bind(function(e){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.clearSearch(),e.stopImmediatePropagation()})),this.container.delegate(".select2-choices","mousedown",this.bind(function(t){this.enabled&&!(0<e(t.target).closest(".select2-search-choice").length)&&(this.clearPlaceholder(),this.open(),this.focusSearch(),t.preventDefault())})),this.container.delegate(".select2-choices","focus",this.bind(function(){this.enabled&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())})),this.clearSearch()},enable:function(){this.enabled||(this.parent.enable.apply(this,arguments),this.search.removeAttr("disabled"))},disable:function(){this.enabled&&(this.parent.disable.apply(this,arguments),this.search.attr("disabled",!0))},initSelection:function(){""===this.opts.element.val()&&(this.updateSelection([]),this.close(),this.clearSearch());if(this.select||""!==this.opts.element.val()){var e=this;this.opts.initSelection.call(null,this.opts.element,function(n){n!==t&&n!==null&&(e.updateSelection(n),e.close(),e.clearSearch())})}},clearSearch:function(){var e=this.getPlaceholder();e!==t&&0===this.getVal().length&&!1===this.search.hasClass("select2-focused")?(this.search.val(e).addClass("select2-default"),this.resizeSearch()):this.search.val(" ").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")?this.search.val("").removeClass("select2-default"):" "===this.search.val()&&this.search.val("")},opening:function(){this.parent.opening.apply(this,arguments),this.clearPlaceholder(),this.resizeSearch(),this.focusSearch()},close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(t){var r=[],i=[],s=this;e(t).each(function(){0>n(s.id(this),r)&&(r.push(s.id(this)),i.push(this))}),t=i,this.selection.find(".select2-search-choice").remove(),e(t).each(function(){s.addSelectedChoice(this)}),s.postprocessResults()},tokenize:function(){var e=this.search.val(),e=this.opts.tokenizer(e,this.data(),this.bind(this.onSelect),this.opts);null!=e&&e!=t&&(this.search.val(e),0<e.length&&this.open())},onSelect:function(e){this.addSelectedChoice(e),this.select&&this.postprocessResults(),this.opts.closeOnSelect?(this.close(),this.search.width(10)):0<this.countSelectableResults()?(this.search.width(10),this.resizeSearch(),this.positionDropdown()):this.close(),this.triggerChange({added:e}),this.focusSearch()},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(t){var n=e("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),r=this.id(t),i=this.getVal(),s;s=this.opts.formatSelection(t,n),n.find("div").replaceWith("<div>"+this.opts.escapeMarkup(s)+"</div>"),n.find(".select2-search-choice-close").bind("mousedown",o).bind("click dblclick",this.bind(function(t){this.enabled&&(e(t.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect(e(t.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),this.close(),this.focusSearch()})).dequeue(),o(t))})).bind("focus",this.bind(function(){this.enabled&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))})),n.data("select2-data",t),n.insertBefore(this.searchContainer),i.push(r),this.setVal(i)},unselect:function(e){var t=this.getVal(),r,i,e=e.closest(".select2-search-choice");if(0===e.length)throw"Invalid argument: "+e+". Must be .select2-search-choice";r=e.data("select2-data"),i=n(this.id(r),t),0<=i&&(t.splice(i,1),this.setVal(t),this.select&&this.postprocessResults()),e.remove(),this.triggerChange({removed:r})},postprocessResults:function(){var e=this.getVal(),t=this.results.find(".select2-result-selectable"),r=this.results.find(".select2-result-with-children"),i=this;t.each2(function(t,r){var s=i.id(r.data("select2-data"));0<=n(s,e)?r.addClass("select2-disabled").removeClass("select2-result-selectable"):r.removeClass("select2-disabled").addClass("select2-result-selectable")}),r.each2(function(e,t){0==t.find(".select2-result-selectable").length?t.addClass("select2-disabled"):t.removeClass("select2-disabled")}),t.each2(function(e,t){if(!t.hasClass("select2-disabled")&&t.hasClass("select2-result-selectable"))return i.highlight(0),!1})},resizeSearch:function(){var t,n,r,i,s=this.search.outerWidth()-this.search.width();t=this.search,E||(r=t[0].currentStyle||window.getComputedStyle(t[0],null),E=e("<div></div>").css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:r.fontSize,fontFamily:r.fontFamily,fontStyle:r.fontStyle,fontWeight:r.fontWeight,letterSpacing:r.letterSpacing,textTransform:r.textTransform,whiteSpace:"nowrap"}),e("body").append(E)),E.text(t.val()),t=E.width()+10,n=this.search.offset().left,r=this.selection.width(),i=this.selection.offset().left,n=r-(n-i)-s,n<t&&(n=r-s),40>n&&(n=r-s),this.search.width(n)},getVal:function(){var e;return this.select?(e=this.select.val(),null===e?[]:e):(e=this.opts.element.val(),i(e,this.opts.separator))},setVal:function(t){var r;this.select?this.select.val(t):(r=[],e(t).each(function(){0>n(this,r)&&r.push(this)}),this.opts.element.val(0===r.length?"":r.join(this.opts.separator)))},val:function(){var n,r=[],i=this;if(0===arguments.length)return this.getVal();if(n=arguments[0])if(this.setVal(n),this.select)this.select.find(":selected").each(function(){r.push({id:e(this).attr("value"),text:e(this).text()})}),this.updateSelection(r);else{if(this.opts.initSelection===t)throw Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(t){var n=e(t).map(i.id);i.setVal(n),i.updateSelection(t),i.clearSearch()})}else this.opts.element.val(""),this.updateSelection([]);this.clearSearch()},onSortStart:function(){if(this.select)throw Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var t=[],n=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){t.push(n.opts.id(e(this).data("select2-data")))}),this.setVal(t),this.triggerChange()},data:function(t){var n=this,r;if(0===arguments.length)return this.selection.find(".select2-search-choice").map(function(){return e(this).data("select2-data")}).get();t||(t=[]),r=e.map(t,function(e){return n.opts.id(e)}),this.setVal(r),this.updateSelection(t),this.clearSearch()}}),e.fn.select2=function(){var r=Array.prototype.slice.call(arguments,0),i,s,o,u,a="val destroy opened open close focus isFocused container onSortStart onSortEnd enable disable positionDropdown data".split(" ");return this.each(function(){if(0===r.length||"object"==typeof r[0])i=0===r.length?{}:e.extend({},r[0]),i.element=e(this),"select"===i.element.get(0).tagName.toLowerCase()?u=i.element.attr("multiple"):(u=i.multiple||!1,"tags"in i&&(i.multiple=u=!0)),s=u?new b:new y,s.init(i);else{if("string"!=typeof r[0])throw"Invalid arguments to select2 plugin: "+r;if(0>n(r[0],a))throw"Unknown method: "+r[0];o=t,s=e(this).data("select2");if(s!==t&&(o="container"===r[0]?s.container:s[r[0]].apply(s,r.slice(1)),o!==t))return!1}}),o===t?this:o},e.fn.select2.defaults={width:"copy",closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(e,t,n){return t=[],u(e.text,n.term,t),t.join("")},formatSelection:function(e){return e?e.text:t},formatResultCssClass:function(){return t},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(e,t){return"Please enter "+(t-e.length)+" more characters"},formatSelectionTooBig:function(e){return"You can only select "+e+" item"+(1==e?"":"s")},formatLoadMore:function(){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumSelectionSize:0,id:function(e){return e.id},matcher:function(e,t){return 0<=t.toUpperCase().indexOf(e.toUpperCase())},separator:",",tokenSeparators:[],tokenizer:d,escapeMarkup:function(e){return e&&"string"==typeof e?e.replace(/&/g,"&amp;"):e},blurOnChange:!1},window.Select2={query:{ajax:a,local:f,tags:l},util:{debounce:s,markMatch:u},"class":{"abstract":g,single:y,multi:b}}}}(jQuery);