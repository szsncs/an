
var silverskinConfirmation = {
	data:{},
	viewid : "com.sunnercn.silverskin.TransferEntryController",
	init:function(){
			var data = $cache.read("logininfo");
			var lonininfo = JSON.parse(data);
			var json = {
				logininfo:lonininfo
			}
			summer.showProgress({
	            "title" : "加载中..."
	        });
	        callAction(silverskinConfirmation.viewid,"confirmInitSilverskin",json,"callBack");
	},
	bindEvent:function(){
		$(".um-back").click(function(){
			summer.closeWin();
		});
		$("#confirm").unbind().on("click",function(){
			//保存按钮
			silverskinConfirmation.confirmClick();	
		});
	},
	daynamicBind : function(){
			//失去焦点是触发
		$(".focusevet").bind("blur", function() {
			var val=$(this).val();
			if(val==""){
				$(this).val("0.00")
			}
		});
		//获取焦点是触发
		$(".focusevet").bind("focus", function() {
			var val=parseInt($(this).val());
			if(val=="0"){
				$(this).val("")
			}
		});
		
		//敲击按键时触发
		$(".confirm_num").bind("keypress", function(event) {
			var event = event || window.event;
			var getValue = $(this).val();
			//控制第一个不能输入小数点"."
			if (getValue.length == 0 && event.which == 46) {
				alert("第一位不能输入小数点！")
				event.preventDefault();
				return;
			}
			//控制只能输入一个小数点"."
			if (getValue.indexOf('.') != -1 && event.which == 46) {
				event.preventDefault();
				alert("只允许输入一个小数点！")
				return;
			}
			//控制只能输入的值
			if (event.which && (event.which < 48 || event.which > 57) && event.which != 8 && event.which != 46) {
				event.preventDefault();
				return;
			}
		})
		//失去焦点是触发
		$(".confirm_num").bind("blur", function(event) {
			var value = $(this).val(),
			    reg = /\.$/;
			if (reg.test(value)) {
				value = value.replace(reg, "");
				$(this).val(value);
			}
		})
	},
	confirmClick :function(){
		var array = [];
		var isPlan;
		if($(".um-tabbar").find(".active a").html().trim()==="期初申请"){
			isPlan = ".plan";
		}else{
			isPlan = ".supplement";
		}
		$(isPlan).each(function(){
			if($(this).find(".sk-checked")[0].checked){
				var pk_inbill = $(this).find(".um-check-inline input").attr('pk_inbill');
				var num = $(this).find(".confirm_num").val();
			 	var obj={
					pk_inbill:pk_inbill,						
					num:num
				}
				array.push(obj); 
			}
		});
		if(array.length>0){
			var data = $cache.read("logininfo");
			var lonininfo = JSON.parse(data);
			var json={
				billinfo:array,
				logininfo:lonininfo
			}
			summer.showProgress({
	            "title" : "加载中..."
	        });
			//确认收货 请求
			callAction(silverskinConfirmation.viewid,"confirmSilverskin",json,"confirmcallBack");
		}else{
			UM.alert("请先选择确认信息！");
		}
		
	},
	loadPage:function(data){
		var inbill = data;
		if(inbill.length>0){
			silverskinConfirmation.initBillList(inbill);
			silverskinConfirmation.daynamicBind();
		}else{
			$("#inbillListul").html("");
			$("#inbillListul").html("<div>当前无物流将要到货</div>");
		}
	},
	initBillList:function(list){
		$("#inbillListul").html("");
		var html = "";
		for(var i=0;i<list.length;i++){
			 html +='<li class="applyli '+list[i].isPlan+'">'
				  +'	<div class="um-list-item">'
				  +'		<div class="w50">'
				  +'			<label class="um-check-inline">'
                  +'				<input name="um-checkbox-inline" type="checkbox" pk_inbill="'+list[i].pk_inbill+'" class="sk-checked"  value="">'
                  +'					<span class="um-icon-checkbox um-css3-vc"></span>'
                  +'			</label>'
				  +'		</div>'
				  +'	<div class="um-list-item-inner">'
				  +'<div class="um-list-item-left">'
				  +'<div class="che f14">'
				  +'车牌号：<span>'+list[i].carno+'</span>'
				  +'</div>'
				  +'<div class="feed f14">'
				  +'过磅货量：<span>'+list[i].num+'</span>吨'
				  +'</div>'
				  +'</div>'
				  +'<div class="um-list-item-right">'
				  +'<div class="feed feed_date f14">'
				  +'到货时间：<span>'+list[i].dbizdate+'</span>'
				  +'</div>'
				  +'<div class="feed f14">'
				  +'验收货量：'
				  +'<input type="number"  class="confirm_num focusevet" value="'+list[i].num+'" >'
				  +'吨'
				  +'</div>'
				  +'</div>'
				  +'</div>'
				  +'</div>'
				  +'</li>';
		}
		$("#confirm").show();
		$("#inbillListul").html(html);	
		var isPlan;
		if($(".um-tabbar").find(".active a").html().trim()==="期初申请"){
			isPlan = ".supplement";
		}else{
			isPlan = ".plan";
		}	
		$(isPlan).hide();
		$("#plan").on('click',function(){
			$(".plan").show();
			$(".supplement").hide();
		});
		$("#supplement").on('click',function(){
			$(".plan").hide();
			$(".supplement").show();
		});
	},
	
};
/**
 * 接口回调模块 
 */
function callBack(args){
	summer.hideProgress();
	if(args.status == "0"){
		var inbill= args.data.billinfo.inbill;
		silverskinConfirmation.loadPage(inbill);
	}else if(args.status == "1"){
		alert("初始化失败:"+args.message);
		//lastPageRefresh("refresh","html","main");
		summer.closeWin();
	} else {
		alert(args.message);	
		//lastPageRefresh("refresh","html","main");
		summer.closeWin();
	}		
}
function confirmcallBack(arg){
	summer.hideProgress();
	if(arg.status == "0"){
		silverskinConfirmation.init();
		UM.alert("确认成功");
	}else{
		$("#inbillListul").html("");
		UM.alert("确认失败");
	}
}

function erresg(arg){
	summer.hideProgress();
	UM.alert("系统运行异常");
}


summerready = function () {    
    
    silverskinConfirmation.init();
	silverskinConfirmation.bindEvent();
};