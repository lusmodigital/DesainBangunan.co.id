!function(e){"use strict";var n=function(n,t,r){var i,a=e.document,o=a.createElement("link");if(t)i=t;else{var l=(a.body||a.getElementsByTagName("head")[0]).childNodes;i=l[l.length-1]}var s=a.styleSheets;o.rel="stylesheet",o.href=n,o.media="only x",function e(n){if(a.body)return n();setTimeout(function(){e(n)})}(function(){i.parentNode.insertBefore(o,t?i:i.nextSibling)});var c=function(e){for(var n=o.href,t=s.length;t--;)if(s[t].href===n)return e();setTimeout(function(){c(e)})};function d(){o.addEventListener&&o.removeEventListener("load",d),o.media=r||"all"}return o.addEventListener&&o.addEventListener("load",d),o.onloadcssdefined=c,c(d),o};"undefined"!=typeof exports?exports.loadCSS=n:e.loadCSS=n}("undefined"!=typeof global?global:this),jQuery(document).ready(function(e){"use strict";var n;if("undefined"!=typeof wbcr_clearfy_async_links&&Object.keys(wbcr_clearfy_async_links).length)for(n in wbcr_clearfy_async_links)wbcr_clearfy_async_links.hasOwnProperty(n)&&loadCSS(wbcr_clearfy_async_links[n])});;/*! This file is auto-generated */
window.addComment=function(v){var I,C,h,E=v.document,b={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver,r="querySelector"in E&&"addEventListener"in v,n=!!E.documentElement.dataset;function t(){d(),e&&new e(o).observe(E.body,{childList:!0,subtree:!0})}function d(e){if(r&&(I=g(b.cancelReplyId),C=g(b.commentFormId),I)){I.addEventListener("touchstart",l),I.addEventListener("click",l);var t=function(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return C.removeEventListener("keydown",t),e.preventDefault(),C.submit.click(),!1};C&&C.addEventListener("keydown",t);for(var n,d=function(e){var t=b.commentReplyClass;e&&e.childNodes||(e=E);t=E.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll("."+t);return t}(e),o=0,i=d.length;o<i;o++)(n=d[o]).addEventListener("touchstart",a),n.addEventListener("click",a)}}function l(e){var t,n,d=g(b.temporaryFormId);d&&h&&(g(b.parentIdFieldId).value="0",t=d.textContent,d.parentNode.replaceChild(h,d),this.style.display="none",n=(d=(n=g(b.commentReplyTitleId))&&n.firstChild)&&d.nextSibling,d&&d.nodeType===Node.TEXT_NODE&&t&&(n&&"A"===n.nodeName&&n.id!==b.cancelReplyId&&(n.style.display=""),d.textContent=t),e.preventDefault())}function a(e){var t=g(b.commentReplyTitleId),n=t&&t.firstChild.textContent,d=this,o=m(d,"belowelement"),i=m(d,"commentid"),r=m(d,"respondelement"),t=m(d,"postid"),n=m(d,"replyto")||n;o&&i&&r&&t&&!1===v.addComment.moveForm(o,i,r,t,n)&&e.preventDefault()}function o(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void d()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function g(e){return E.getElementById(e)}return r&&"loading"!==E.readyState?t():r&&v.addEventListener("DOMContentLoaded",t,!1),{init:d,moveForm:function(e,t,n,d,o){var i=g(e);h=g(n);var r,l,a,m,c,s=g(b.parentIdFieldId),y=g(b.postIdFieldId),p=(c=g(b.commentReplyTitleId))&&c.firstChild,u=p&&p.nextSibling;if(i&&h&&s){void 0===o&&(o=p&&p.textContent),m=h,e=b.temporaryFormId,n=g(e),c=(c=g(b.commentReplyTitleId))?c.firstChild.textContent:"",n||((n=E.createElement("div")).id=e,n.style.display="none",n.textContent=c,m.parentNode.insertBefore(n,m)),d&&y&&(y.value=d),s.value=t,I.style.display="",i.parentNode.insertBefore(h,i.nextSibling),p&&p.nodeType===Node.TEXT_NODE&&(u&&"A"===u.nodeName&&u.id!==b.cancelReplyId&&(u.style.display="none"),p.textContent=o),I.onclick=function(){return!1};try{for(var f=0;f<C.elements.length;f++)if(r=C.elements[f],l=!1,"getComputedStyle"in v?a=v.getComputedStyle(r):E.documentElement.currentStyle&&(a=r.currentStyle),(r.offsetWidth<=0&&r.offsetHeight<=0||"hidden"===a.visibility)&&(l=!0),"hidden"!==r.type&&!r.disabled&&!l){r.focus();break}}catch(e){}return!1}}}}(window);var astraGetParents=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;0<=--a&&t.item(a)!==this;);return-1<a});for(var a=[];e&&e!==document;e=e.parentNode)t&&!e.matches(t)||a.push(e);return a},getParents=function(e,t){console.warn("getParents() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraGetParents() instead."),astraGetParents(e,t)},astraToggleClass=function(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)},toggleClass=function(e,t){console.warn("toggleClass() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraToggleClass() instead."),astraToggleClass(e,t)},astraTriggerEvent=(function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(e,t){var a=new CustomEvent(t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:{});e.dispatchEvent(a)});!function(){function e(){var e=document.querySelector("body").style.overflow,t=(document.querySelector("body").style.overflow="hidden",window.innerWidth),a=(document.querySelector("body").style.overflow=e,astra.break_point),s=document.querySelectorAll(".main-header-bar-wrap");if(0<s.length)for(var n=0;n<s.length;n++)"DIV"==s[n].tagName&&s[n].classList.contains("main-header-bar-wrap")&&(a<t?(null!=r[n]&&r[n].classList.remove("toggled"),document.body.classList.remove("ast-header-break-point"),document.body.classList.add("ast-desktop"),astraTriggerEvent(document.body,"astra-header-responsive-enabled")):(document.body.classList.add("ast-header-break-point"),document.body.classList.remove("ast-desktop"),astraTriggerEvent(document.body,"astra-header-responsive-disabled")))}for(var t,a,s,n,r=document.querySelectorAll(".main-header-menu-toggle"),o={},l=(e(),AstraToggleSubMenu=function(){for(var e,t=this.parentNode,a=(t.classList.contains("ast-submenu-expanded")&&document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link")&&(this.classList.contains("ast-menu-toggle")||""===(e=t.querySelector("a").getAttribute("href"))&&"#"===e||(window.location=e)),t.querySelectorAll(".menu-item-has-children")),s=0;s<a.length;s++){a[s].classList.remove("ast-submenu-expanded");var n=a[s].querySelector(".sub-menu, .children");null!==n&&(n.style.display="none")}for(var o=t.parentNode.querySelectorAll(".menu-item-has-children"),s=0;s<o.length;s++)if(o[s]!=t){o[s].classList.remove("ast-submenu-expanded");for(var r=o[s].querySelectorAll(".sub-menu"),l=0;l<r.length;l++)r[l].style.display="none"}t.classList.contains("menu-item-has-children")&&(astraToggleClass(t,"ast-submenu-expanded"),t.classList.contains("ast-submenu-expanded")?t.querySelector(".sub-menu").style.display="block":t.querySelector(".sub-menu").style.display="none")},AstraNavigationMenu=function(e){console.warn("AstraNavigationMenu() function has been deprecated since version 1.6.5 or above of Astra Theme and will be removed in the future.")},AstraToggleMenu=function(e){if(console.warn("AstraToggleMenu() function has been deprecated since version 1.6.5 or above of Astra Theme and will be removed in the future. Use AstraToggleSubMenu() instead."),0<e.length)for(var t=0;t<e.length;t++)e[t].addEventListener("click",AstraToggleSubMenu,!1)},AstraToggleSetup=function(){var e=document.querySelectorAll(".main-header-bar-navigation");if(0<r.length)for(var t,a=0;a<r.length;a++)if(r[a].setAttribute("data-index",a),o[a]||(o[a]=r[a],r[a].addEventListener("click",astraNavMenuToggle,!1)),void 0!==e[a]&&0<(t=document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link")?e[a].querySelectorAll(".ast-header-break-point .main-header-menu .menu-item-has-children > .menu-link, .ast-header-break-point ul.main-header-menu .ast-menu-toggle"):e[a].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)for(var s=0;s<t.length;s++)t[s].addEventListener("click",AstraToggleSubMenu,!1)},astraNavMenuToggle=function(e){e.preventDefault();var e=document.querySelectorAll(".main-header-bar-navigation"),t=this.getAttribute("data-index");if(void 0===e[t])return!1;for(var a=e[t].querySelectorAll(".menu-item-has-children"),s=0;s<a.length;s++){a[s].classList.remove("ast-submenu-expanded");for(var n=a[s].querySelectorAll(".sub-menu"),o=0;o<n.length;o++)n[o].style.display="none"}-1!==(this.getAttribute("class")||"").indexOf("main-header-menu-toggle")&&(astraToggleClass(e[t],"toggle-on"),astraToggleClass(r[t],"toggled"),e[t].classList.contains("toggle-on")?(e[t].style.display="block",document.body.classList.add("ast-main-header-nav-open")):(e[t].style.display="",document.body.classList.remove("ast-main-header-nav-open")))},document.body.addEventListener("astra-header-responsive-enabled",function(){var e=document.querySelectorAll(".main-header-bar-navigation");if(0<e.length)for(var t=0;t<e.length;t++){null!=e[t]&&(e[t].classList.remove("toggle-on"),e[t].style.display="");for(var a=e[t].getElementsByClassName("sub-menu"),s=0;s<a.length;s++)a[s].style.display="";for(var n=e[t].getElementsByClassName("children"),o=0;o<n.length;o++)n[o].style.display="";for(var r=e[t].getElementsByClassName("ast-search-menu-icon"),l=0;l<r.length;l++)r[l].classList.remove("ast-dropdown-active"),r[l].style.display=""}},!1),window.addEventListener("resize",function(){"INPUT"!==document.activeElement.tagName&&(e(),AstraToggleSetup())}),document.addEventListener("DOMContentLoaded",function(){var e,t;for(AstraToggleSetup(),e=document.querySelectorAll(".navigation-accessibility"),t=0;t<=e.length-1;t++)e[t]&&!function(e){if(e){var t=e.getElementsByTagName("button")[0];if(void 0!==t||void 0!==(t=e.getElementsByTagName("a")[0])){var a=e.getElementsByTagName("ul")[0];if(void 0!==a){a.setAttribute("aria-expanded","false"),-1===a.className.indexOf("nav-menu")&&(a.className+=" nav-menu"),t.onclick=function(){-1!==e.className.indexOf("toggled")?(e.className=e.className.replace(" toggled",""),t.setAttribute("aria-expanded","false"),a.setAttribute("aria-expanded","false")):(e.className+=" toggled",t.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true"))};for(var s=a.getElementsByTagName("a"),n=a.getElementsByTagName("ul"),o=0,r=n.length;o<r;o++)n[o].parentNode.setAttribute("aria-haspopup","true");for(o=0,r=s.length;o<r;o++)s[o].addEventListener("focus",d,!0),s[o].addEventListener("blur",u,!0),s[o].addEventListener("click",c,!0)}else t.style.display="none"}}}(e[t])}),s=(a=navigator.userAgent).match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[],/trident/i.test(s[1])?t=/\brv[ :]+(\d+)/g.exec(a)||[]:"Chrome"===s[1]&&null!=(t=a.match(/\bOPR|Edge\/(\d+)/))||(s=s[2]?[s[1],s[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(t=a.match(/version\/(\d+)/i))&&s.splice(1,1,t[1]),a=document.body,"Safari"===s[0]&&s[1]<11&&a.classList.add("ast-safari-browser-less-than-11")),document.getElementsByClassName("astra-search-icon")),i=0;i<l.length;i++)l[i].onclick=function(e){var t;this.classList.contains("slide-search")&&(e.preventDefault(),(t=this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon")).classList.contains("ast-dropdown-active")?(""!==(t.querySelector(".search-field").value||"")&&t.querySelector(".search-form").submit(),t.classList.remove("ast-dropdown-active")):(t.classList.add("ast-dropdown-active"),t.querySelector(".search-field").setAttribute("autocomplete","off"),setTimeout(function(){t.querySelector(".search-field").focus()},200)))};function c(){var e=this||"";if(e&&!e.classList.contains("astra-search-icon")&&-1!==new String(e).indexOf("#")){var t=e.parentNode;if(!document.body.classList.contains("ast-header-break-point")||document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link")&&t.classList.contains("menu-item-has-children"))for(;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&-1!==e.className.indexOf("focus")&&(e.className=e.className.replace(" focus","")),e=e.parentElement;else{document.querySelector(".main-header-menu-toggle").classList.remove("toggled");(t=document.querySelector(".main-header-bar-navigation")).classList.remove("toggle-on"),t.style.display="none";var t=document.querySelector(".menu-below-header-toggle"),a=document.querySelector(".ast-below-header"),s=document.querySelector(".ast-below-header-actual-nav"),t=(t&&a&&s&&(t.classList.remove("toggled"),a.classList.remove("toggle-on"),s.style.display="none"),document.querySelector(".menu-above-header-toggle")),a=document.querySelector(".ast-above-header"),s=document.querySelector(".ast-above-header-navigation");t&&a&&s&&(t.classList.remove("toggled"),a.classList.remove("toggle-on"),s.style.display="none"),astraTriggerEvent(document.querySelector("body"),"astraMenuHashLinkClicked")}}}function d(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}function u(){var e=this||"";if(-1===new String(e).indexOf("#")||!document.body.classList.contains("ast-mouse-clicked"))for(;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}document.body.onclick=function(e){if(void 0!==e.target.classList&&!e.target.classList.contains("ast-search-menu-icon")&&0===astraGetParents(e.target,".ast-search-menu-icon").length&&0===astraGetParents(e.target,".ast-search-icon").length)for(var t=document.getElementsByClassName("ast-search-menu-icon"),a=0;a<t.length;a++)t[a].classList.remove("ast-dropdown-active")},"querySelector"in document&&"addEventListener"in window&&((n=document.body).addEventListener("mousedown",function(){n.classList.add("ast-mouse-clicked")}),n.addEventListener("keydown",function(){n.classList.remove("ast-mouse-clicked")}))}();(function($){'use strict';if(typeof wpcf7==='undefined'||wpcf7===null){return}
wpcf7=$.extend({cached:0,inputs:[]},wpcf7);$(function(){wpcf7.supportHtml5=(function(){var features={};var input=document.createElement('input');features.placeholder='placeholder' in input;var inputTypes=['email','url','tel','number','range','date'];$.each(inputTypes,function(index,value){input.setAttribute('type',value);features[value]=input.type!=='text'});return features})();$('div.wpcf7 > form').each(function(){var $form=$(this);wpcf7.initForm($form);if(wpcf7.cached){wpcf7.refill($form)}})});wpcf7.getId=function(form){return parseInt($('input[name="_wpcf7"]',form).val(),10)};wpcf7.initForm=function(form){var $form=$(form);wpcf7.setStatus($form,'init');$form.submit(function(event){if(!wpcf7.supportHtml5.placeholder){$('[placeholder].placeheld',$form).each(function(i,n){$(n).val('').removeClass('placeheld')})}
if(typeof window.FormData==='function'){wpcf7.submit($form);event.preventDefault()}});$('.wpcf7-submit',$form).after('<span class="ajax-loader"></span>');wpcf7.toggleSubmit($form);$form.on('click','.wpcf7-acceptance',function(){wpcf7.toggleSubmit($form)});$('.wpcf7-exclusive-checkbox',$form).on('click','input:checkbox',function(){var name=$(this).attr('name');$form.find('input:checkbox[name="'+name+'"]').not(this).prop('checked',!1)});$('.wpcf7-list-item.has-free-text',$form).each(function(){var $freetext=$(':input.wpcf7-free-text',this);var $wrap=$(this).closest('.wpcf7-form-control');if($(':checkbox, :radio',this).is(':checked')){$freetext.prop('disabled',!1)}else{$freetext.prop('disabled',!0)}
$wrap.on('change',':checkbox, :radio',function(){var $cb=$('.has-free-text',$wrap).find(':checkbox, :radio');if($cb.is(':checked')){$freetext.prop('disabled',!1).focus()}else{$freetext.prop('disabled',!0)}})});if(!wpcf7.supportHtml5.placeholder){$('[placeholder]',$form).each(function(){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld');$(this).focus(function(){if($(this).hasClass('placeheld')){$(this).val('').removeClass('placeheld')}});$(this).blur(function(){if(''===$(this).val()){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld')}})})}
if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.date){$form.find('input.wpcf7-date[type="date"]').each(function(){$(this).datepicker({dateFormat:'yy-mm-dd',minDate:new Date($(this).attr('min')),maxDate:new Date($(this).attr('max'))})})}
if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.number){$form.find('input.wpcf7-number[type="number"]').each(function(){$(this).spinner({min:$(this).attr('min'),max:$(this).attr('max'),step:$(this).attr('step')})})}
wpcf7.resetCounter($form);$form.on('change','.wpcf7-validates-as-url',function(){var val=$.trim($(this).val());if(val&&!val.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==val.indexOf('.')){val=val.replace(/^\/+/,'');val='http://'+val}
$(this).val(val)})};wpcf7.submit=function(form){if(typeof window.FormData!=='function'){return}
var $form=$(form);$('.ajax-loader',$form).addClass('is-active');wpcf7.clearResponse($form);var formData=new FormData($form.get(0));var detail={id:$form.closest('div.wpcf7').attr('id'),status:'init',inputs:[],formData:formData};$.each($form.serializeArray(),function(i,field){if('_wpcf7'==field.name){detail.contactFormId=field.value}else if('_wpcf7_version'==field.name){detail.pluginVersion=field.value}else if('_wpcf7_locale'==field.name){detail.contactFormLocale=field.value}else if('_wpcf7_unit_tag'==field.name){detail.unitTag=field.value}else if('_wpcf7_container_post'==field.name){detail.containerPostId=field.value}else if(field.name.match(/^_/)){}else{detail.inputs.push(field)}});wpcf7.triggerEvent($form.closest('div.wpcf7'),'beforesubmit',detail);var ajaxSuccess=function(data,status,xhr,$form){detail.id=$(data.into).attr('id');detail.status=data.status;detail.apiResponse=data;switch(data.status){case 'init':wpcf7.setStatus($form,'init');break;case 'validation_failed':$.each(data.invalid_fields,function(i,n){$(n.into,$form).each(function(){wpcf7.notValidTip(this,n.message);$('.wpcf7-form-control',this).addClass('wpcf7-not-valid');$('.wpcf7-form-control',this).attr('aria-describedby',n.error_id);$('[aria-invalid]',this).attr('aria-invalid','true')})});wpcf7.setStatus($form,'invalid');wpcf7.triggerEvent(data.into,'invalid',detail);break;case 'acceptance_missing':wpcf7.setStatus($form,'unaccepted');wpcf7.triggerEvent(data.into,'unaccepted',detail);break;case 'spam':wpcf7.setStatus($form,'spam');wpcf7.triggerEvent(data.into,'spam',detail);break;case 'aborted':wpcf7.setStatus($form,'aborted');wpcf7.triggerEvent(data.into,'aborted',detail);break;case 'mail_sent':wpcf7.setStatus($form,'sent');wpcf7.triggerEvent(data.into,'mailsent',detail);break;case 'mail_failed':wpcf7.setStatus($form,'failed');wpcf7.triggerEvent(data.into,'mailfailed',detail);break;default:wpcf7.setStatus($form,'custom-'+data.status.replace(/[^0-9a-z]+/i,'-'))}
wpcf7.refill($form,data);wpcf7.triggerEvent(data.into,'submit',detail);if('mail_sent'==data.status){$form.each(function(){this.reset()});wpcf7.toggleSubmit($form);wpcf7.resetCounter($form)}
if(!wpcf7.supportHtml5.placeholder){$form.find('[placeholder].placeheld').each(function(i,n){$(n).val($(n).attr('placeholder'))})}
$('.wpcf7-response-output',$form).html('').append(data.message).slideDown('fast');$('.screen-reader-response',$form.closest('.wpcf7')).each(function(){var $response=$(this);$('[role="status"]',$response).html(data.message);if(data.invalid_fields){$.each(data.invalid_fields,function(i,n){if(n.idref){var $li=$('<li></li>').append($('<a></a>').attr('href','#'+n.idref).append(n.message))}else{var $li=$('<li></li>').append(n.message)}
$li.attr('id',n.error_id);$('ul',$response).append($li)})}});if(data.posted_data_hash){$form.find('input[name="_wpcf7_posted_data_hash"]').first().val(data.posted_data_hash)}};$.ajax({type:'POST',url:wpcf7.apiSettings.getRoute('/contact-forms/'+wpcf7.getId($form)+'/feedback'),data:formData,dataType:'json',processData:!1,contentType:!1}).done(function(data,status,xhr){ajaxSuccess(data,status,xhr,$form);$('.ajax-loader',$form).removeClass('is-active')}).fail(function(xhr,status,error){var $e=$('<div class="ajax-error"></div>').text(error.message);$form.after($e)})};wpcf7.triggerEvent=function(target,name,detail){var event=new CustomEvent('wpcf7'+name,{bubbles:!0,detail:detail});$(target).get(0).dispatchEvent(event)};wpcf7.setStatus=function(form,status){var $form=$(form);var prevStatus=$form.attr('data-status');$form.data('status',status);$form.addClass(status);$form.attr('data-status',status);if(prevStatus&&prevStatus!==status){$form.removeClass(prevStatus)}}
wpcf7.toggleSubmit=function(form,state){var $form=$(form);var $submit=$('input:submit',$form);if(typeof state!=='undefined'){$submit.prop('disabled',!state);return}
if($form.hasClass('wpcf7-acceptance-as-validation')){return}
$submit.prop('disabled',!1);$('.wpcf7-acceptance',$form).each(function(){var $span=$(this);var $input=$('input:checkbox',$span);if(!$span.hasClass('optional')){if($span.hasClass('invert')&&$input.is(':checked')||!$span.hasClass('invert')&&!$input.is(':checked')){$submit.prop('disabled',!0);return!1}}})};wpcf7.resetCounter=function(form){var $form=$(form);$('.wpcf7-character-count',$form).each(function(){var $count=$(this);var name=$count.attr('data-target-name');var down=$count.hasClass('down');var starting=parseInt($count.attr('data-starting-value'),10);var maximum=parseInt($count.attr('data-maximum-value'),10);var minimum=parseInt($count.attr('data-minimum-value'),10);var updateCount=function(target){var $target=$(target);var length=$target.val().length;var count=down?starting-length:length;$count.attr('data-current-value',count);$count.text(count);if(maximum&&maximum<length){$count.addClass('too-long')}else{$count.removeClass('too-long')}
if(minimum&&length<minimum){$count.addClass('too-short')}else{$count.removeClass('too-short')}};$(':input[name="'+name+'"]',$form).each(function(){updateCount(this);$(this).keyup(function(){updateCount(this)})})})};wpcf7.notValidTip=function(target,message){var $target=$(target);$('.wpcf7-not-valid-tip',$target).remove();$('<span></span>').attr({'class':'wpcf7-not-valid-tip','aria-hidden':'true',}).text(message).appendTo($target);if($target.is('.use-floating-validation-tip *')){var fadeOut=function(target){$(target).not(':hidden').animate({opacity:0},'fast',function(){$(this).css({'z-index':-100})})};$target.on('mouseover','.wpcf7-not-valid-tip',function(){fadeOut(this)});$target.on('focus',':input',function(){fadeOut($('.wpcf7-not-valid-tip',$target))})}};wpcf7.refill=function(form,data){var $form=$(form);var refillCaptcha=function($form,items){$.each(items,function(i,n){$form.find(':input[name="'+i+'"]').val('');$form.find('img.wpcf7-captcha-'+i).attr('src',n);var match=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);$form.find('input:hidden[name="_wpcf7_captcha_challenge_'+i+'"]').attr('value',match[1])})};var refillQuiz=function($form,items){$.each(items,function(i,n){$form.find(':input[name="'+i+'"]').val('');$form.find(':input[name="'+i+'"]').siblings('span.wpcf7-quiz-label').text(n[0]);$form.find('input:hidden[name="_wpcf7_quiz_answer_'+i+'"]').attr('value',n[1])})};if(typeof data==='undefined'){$.ajax({type:'GET',url:wpcf7.apiSettings.getRoute('/contact-forms/'+wpcf7.getId($form)+'/refill'),beforeSend:function(xhr){var nonce=$form.find(':input[name="_wpnonce"]').val();if(nonce){xhr.setRequestHeader('X-WP-Nonce',nonce)}},dataType:'json'}).done(function(data,status,xhr){if(data.captcha){refillCaptcha($form,data.captcha)}
if(data.quiz){refillQuiz($form,data.quiz)}})}else{if(data.captcha){refillCaptcha($form,data.captcha)}
if(data.quiz){refillQuiz($form,data.quiz)}}};wpcf7.clearResponse=function(form){var $form=$(form);$form.siblings('.screen-reader-response').each(function(){$('[role="status"]',this).html('');$('ul',this).html('')});$('.wpcf7-not-valid-tip',$form).remove();$('[aria-invalid]',$form).attr('aria-invalid','false');$('.wpcf7-form-control',$form).removeClass('wpcf7-not-valid');$('.wpcf7-response-output',$form).hide().empty()};wpcf7.apiSettings.getRoute=function(path){var url=wpcf7.apiSettings.root;url=url.replace(wpcf7.apiSettings.namespace,wpcf7.apiSettings.namespace+path);return url}})(jQuery);(function(){if(typeof window.CustomEvent==="function")return!1;function CustomEvent(event,params){params=params||{bubbles:!1,cancelable:!1,detail:undefined};var evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt}
CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent})();/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);function lazyLoadThumb(e){var t='<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360">',a='<div class="play"></div>';return t.replace("ID",e)+a}function lazyLoadYoutubeIframe(){var e=document.createElement("iframe"),t="https://www.youtube.com/embed/ID?autoplay=1";t+=0===this.dataset.query.length?'':'&'+this.dataset.query;e.setAttribute("src",t.replace("ID",this.dataset.id)),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen","1"),this.parentNode.replaceChild(e,this)}document.addEventListener("DOMContentLoaded",function(){var e,t,a=document.getElementsByClassName("rll-youtube-player");for(t=0;t<a.length;t++)e=document.createElement("div"),e.setAttribute("data-id",a[t].dataset.id),e.setAttribute("data-query",a[t].dataset.query),e.innerHTML=lazyLoadThumb(a[t].dataset.id),e.onclick=lazyLoadYoutubeIframe,a[t].appendChild(e)});