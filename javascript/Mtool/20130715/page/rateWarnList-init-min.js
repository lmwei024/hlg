KISSY.add("utils/showPages/index",function(a){function e(a){var b=this;if(!(b instanceof e))return new e(a);this.pageNum=4,this.name=a,this.page=1,this.pageCount=200,this.argName="page"}var b=a.DOM,c=a.Event,d=document;return a.mix(e.prototype,{jump:function(){return undefined},checkPages:function(){isNaN(parseInt(this.page))&&(this.page=1),isNaN(parseInt(this.pageCount))&&(this.pageCount=1),this.page<1&&(this.page=1),this.pageCount<1&&(this.pageCount=1),this.page>this.pageCount&&(this.page=this.pageCount),this.page=parseInt(this.page),this.pageCount=parseInt(this.pageCount)},_createHtml:function(a){var b=this,c="",d=this.page-1,e=this.page+1;if(a==""||typeof a=="undefined")a=1;switch(a){case 1:c+='<span class="number">',this.page!=1&&(c+='<span title="Page 1"><a href="javascript:'+b.name+'.toPage(1);">1</a></span>'),this.page>=5&&(c+="<span>...</span>");if(this.pageCount>this.page+2)var f=this.page+2;else var f=this.pageCount;for(var g=this.page-2;g<=f;g++)g>0&&(g==this.page?c+='<span title="Page '+g+'">'+g+"</span>":g!=1&&g!=this.pageCount&&(c+='<span title="Page '+g+'"><a href="javascript:'+b.name+".toPage("+g+');">'+g+"</a></span>"));this.page+3<this.pageCount&&(c+="<span>...</span>"),this.page!=this.pageCount&&(c+='<span title="Page '+this.pageCount+'"><a href="javascript:'+b.name+".toPage("+this.pageCount+');">'+this.pageCount+"</a></span>"),c+="</span><br />";break;case 2:if(this.pageCount>1){c+='<div class="page-bottom"> <div class="sabrosus">',d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<a class="" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',this.page==1;if(this.page-2<=0){var h=1;if(this.pageCount>this.page+4)var f=this.page+4;else var f=this.pageCount}else if(this.page+2>=this.pageCount){var h=this.pageCount-4;if(this.pageCount>this.page+4)var f=this.page+4;else var f=this.pageCount}else{var h=this.page-2;if(this.pageCount>this.page+2)var f=this.page+2;else var f=this.pageCount}for(var g=h;g<=f;g++)g>0&&(g==this.page?c+='<span class="current a-padding">'+g+"</span>":c+='<a class="a-padding" href="javascript:'+b.name+".toPage("+g+');">'+g+"</a>");this.page+5<this.pageCount&&(c+='<a class="a-padding" title="" href="javascript:'+b.name+".toPage("+(this.page+3)+');">...</a>'),this.page==this.pageCount,e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a class="" href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',this.pageCount>5&&(c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;\u5230\u7b2c&nbsp;",this.page>=this.pageCount?c+='<input style="" type="text" class="page-pic-no w-30 bg-img" id="pageInput'+b.name+'"  value="'+this.pageCount+'" onkeypress="return window.'+b.name+'.formatInputPage(event);" onfocus="this.select()">&nbsp;\u9875':c+='<input style="" type="text" class="page-pic-no w-30 bg-img" id="pageInput'+b.name+'"  value="'+(this.page+1)+'" onkeypress="return window.'+b.name+'.formatInputPage(event);" onfocus="this.select()">&nbsp;\u9875',c+='<input type="button" value="" class="page-pic-no gray-btm-h-go w-30 btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);">',c+="</font>"),c+='<div style="clear:both"></div></div></div> '}break;case 3:c+='<div class="page-top"><div class="sabrosus"><span class="count">'+this.page+" / "+this.pageCount+"</span>",d<1?c+=' <span class="pre-none page-pic-no"></span>':c+='<a class="border-left-dedede" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',c+='<div style="clear:both"></div></div></div>'}return c},formatInputPage:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},toPage:function(a,b){var c=1,d=this;typeof a=="object"?c=a.options[a.selectedIndex].value:c=a,d.jump(c,b,"")},printHtml:function(a,c){return this.checkPages(),b.html(a,this._createHtml(c)),this},setPageCount:function(a){return this.pageCount=a,this},getPageCount:function(){return this.pageCount},setRender:function(a){return this.jump=a,this},setPageNum:function(a){return this.pageNum=a,this},setPage:function(a){return this.page=a,this}}),e}),KISSY.add("page/rateWarnList-init",function(a,b){var a=KISSY,c=a.DOM,d=a.Event,e=1;return rateWarnList={paginator:null,msg:null,init:function(){rateWarnList.getWarnList(),d.on("#J_SearchRateWarn","click",rateWarnList.getWarnList),d.on("#J_UpdateRate","click",rateWarnList.updateRateResult)},getWarnList:function(){var a=function(a){c.hide("#J_RightLoading"),c.show("#J_MainRightContent"),totalRecords=a.payload.totalRecords,totalRecords>0?(c.css(c.get("#J_Empty"),"display","none"),c.css(c.query(".J_PromotionItemBtnHolder"),"display","")):(c.css(c.get("#J_Empty"),"display",""),c.css(c.query(".J_PromotionItemBtnHolder"),"display","none")),c.html("#J_WarnList",a.payload.body);var d=Math.ceil(totalRecords/a.payload.pageSize);rateWarnList.paginator=(new b("rateWarnList.paginator")).setRender(rateWarnList.handlePagination).setPageCount(d).printHtml("#J_Paging",2)};if(c.val(c.get("#J_SearchTitle"))!="\u7528\u6237\u6635\u79f0\u6216\u59d3\u540d")var d=encodeURIComponent(c.val(c.get("#J_SearchTitle")));else var d="";var e=c.val(c.get("#J_Status")),f="buyer_nick="+d+"&status="+e+"&pageSize=10";c.show("#J_RightLoading"),c.hide("#J_MainRightContent"),(new H.widget.asyncRequest).setURI(getWarnListAjaxUrl).setMethod("POST").setHandle(a).setData(f).send()},handlePagination:function(a){pageId=a;var b=function(a){c.hide("#J_RightLoading"),c.show("#J_MainRightContent"),totalRecords=a.payload.totalRecords,c.css(c.get("#J_NoteIcon"),"display","none"),totalRecords>0?(c.css(c.get("#J_Empty"),"display","none"),c.css(c.query(".J_PromotionItemBtnHolder"),"display","")):(c.css(c.get("#J_Empty"),"display",""),c.css(c.query(".J_PromotionItemBtnHolder"),"display","none")),c.html("#J_WarnList",a.payload.body);var b=Math.ceil(totalRecords/a.payload.pageSize);rateWarnList.paginator.setPage(pageId).setPageCount(b).printHtml("#J_Paging",2)};if(c.val(c.get("#J_SearchTitle"))!="\u7528\u6237\u6635\u79f0\u6216\u59d3\u540d")var d=encodeURIComponent(c.val(c.get("#J_SearchTitle")));else var d="";var e=c.val(c.get("#J_Status")),f="buyer_nick="+d+"&status="+e+"&pageSize=10"+"&page_id="+pageId;c.show("#J_RightLoading"),c.hide("#J_MainRightContent"),(new H.widget.asyncRequest).setURI(getWarnListAjaxUrl).setMethod("POST").setHandle(b).setData(f).send()},updateRateResult:function(){var b=function(b){new H.widget.msgBox({type:"sucess",content:b.desc,dialogType:"msg",autoClose:!0,timeOut:800}),a.later(function(){window.location.reload()},800,!1)},c=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},d="";(new H.widget.asyncRequest).setURI(updateRateResultUrl).setMethod("POST").setHandle(b).setErrorHandle(c).setData(d).send()}}},{requires:["utils/showPages/index"]}); 