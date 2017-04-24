var feedAddToTower = {
	data:{},
	viewid : "com.sunnercn.silverskin.FeedAddToTowerController",
	init:function(){
		//var data = $cache.read("logininfo");
		//var lonininfo = JSON.parse(data);
		//var json = {
			//logininfo:lonininfo
		//}
		//summer.showProgress({
	           // "title" : "加载中..."
	        //});
	        //callAction(silverskinArrived.viewid,"addFeedInfoInit",json,"callBack");
	},
	bindEvent:function(){
		$(".allTower li").hide();
			$(".btn").on('click',function(){
				$(this).parent().parent().find("ul li").stop().slideToggle(400);
			});
			//$(".ti-plus").on();
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
}
summerready = function(){
	feedAddToTower.init();
	feedAddToTower.bindEvent();
};
