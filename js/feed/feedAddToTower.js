var feedAddToTower = {
	data:{},
	viewid : "com.sunnercn.feed.FeedAddToTowerController",
	init:function(){
		var data = $cache.read("logininfo");
		var logininfo = JSON.parse(data);
		var json = {
			logininfo:logininfo
		}
		summer.showProgress({
	           // "title" : "加载中..."
	    });
	    callAction(feedAddToTower.viewid,"addFeedInfoInit",json,"callBack");
	},
	bindEvent:function(){
		$(".allTower li").hide();
			$(".btn").on('click',function(){
				$(this).parent().parent().find("ul li").stop().slideToggle(400);
			});
			$(".ti-plus").on('click',function(){
				// to do 行数限制
				var li = "<li class='towers'>";
				li+=$($(".towers")[0]).html();
				li+="</li>";
				$(this).parent().parent().before($(li));
			});
			$(".ti-minus").on('click',function(){
				// to do 行数限制
				var lis = $(".towers");
				lis.length>1?lis[lis.length-1].remove():UM.alert("对不起！至少一个料塔！");
			});
		$(".um-back").click(function(){
			summer.closeWin();
		});
		
		$(".ti-home").unbind().on("click",function(){
			//保存按钮
			summer.openWin({
                "id" : 'home',
                "url" : 'html/main.html'
            });
		});
		$(".ti-home").click(function(){
			summer.closeWin();
		});

	},
	initsiloSelect:function(){
		var logininfo = $cache.read("logininfo");
		var json = JSON.parse(logininfo);
		var siloinfoList = json.siloinfo;
		$(".siloSelect").html("");
		var optionhtml= '<option>-请选择料塔-</option>';
		for(var i=0;i<siloinfoList.length;i++){
			optionhtml+='<option pk_silo="'+siloinfoList[i].pk_silo+'">'+siloinfoList[i].silo_name+'</option>'
		}
		$(".siloSelect").append(optionhtml);
	},
	loadPage:function(data){
		$("#inbillListul").html("");
		var html = "";
		var inbill = data.billinfo.inbill;
		if(inbill.length>0){
			for(var i=0;i<inbill.length;i++){
				html+='<li class="um-list-item">'
					+'<label class="um-check-inline">'
                    +'<input name="um-checkbox-inline" type="checkbox">'
                    +'<span class="um-icon-checkbox um-css3-vc"></span>'
                    +'</label>'
					+'<a href="javascript:;" class="btn">'
					+'<div class="um-media-body">'
					+'<h4>车牌号：'+inbill[i].carno+'</h4>'
					+'<p>'
					+'未打料数量：<span>'+inbill[i].notInTower+'</span>吨'
					+'</p>'
					+'</div> </a>'
					+'</li>'
					+'<ul class="um-list allTower">'
					+'<li class="towers">'
					+'<div class="tower">'
					+'<select class ="siloSelect"></select>'
					+'</div>'
					+'<div class="num">'
					+'数量 <input type="number"/> 吨'
					+'</div>'
					+'</li>'
			}
			html+='<li>'
            +'<div>'
            +'<a href="#" class="ti-plus"></a>'
            +'</div>'
			+'<div>'
			+'<a href="#" class="ti-minus"></a>'
			+'</div>'
			+'</li>'
			+'</ul>';
		}else{//无列表信息弹出提示并绘制空列表
			html+='<a href="#"  class="um-list-item list_item" >'
					+'		<div class="um-list-item-media">'
					+'		</div>'
					+'		<div class="um-list-item-inner">'
					+'			<div class="um-list-item-body">'
					+'				<h4 class="um-media-heading f18" style="color:red">当前场内所有饲料已经打入料塔</h4>'
					+'			</div>'
					+'		</div> </a>'
		}
		$("#inbillListul").html(html);
		feedAddToTower.initsiloSelect();
	}
}
/**
 * 接口回调模块 
 */
function callBack(args){
	summer.hideProgress();
	if(args.status == "0"){
		feedAddToTower.loadPage(args.data);
	}else if(args.status == "1"){
		alert("初始化失败:"+args.message);
		summer.closeWin();
	} else {
		alert(args.message);	
		summer.closeWin();
	}		
}
function erresg(arg){
	summer.hideProgress();
	UM.alert("网络异常！");
}
summerready = function(){
	feedAddToTower.init();
	feedAddToTower.bindEvent();
};
