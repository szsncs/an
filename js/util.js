

var https="https://szsncs.github.io/an/js/"
var js=".js";
var jquery_2_1_4="jquery-2.1.4.min";
var jquery="jquery.min";
var summer="summer";
var frameworks_core="Frameworks/iuapmobile.frameworks.core";
var frameworks_ui="Frameworks/iuapmobile.frameworks.ui";
var islider="islider";
var knockout="knockout";
var knockout_2_2_0="knockout-2.2.0";
var frameworks_listview="Frameworks/iuapmobile.frameworks.listview";
var frameworks_listgroup="Frameworks/iuapmobile.frameworks.listgroup-2.7.0";
var frameworks_sortlist="Frameworks/iuapmobile.frameworks.sortlist-2.7.0";
var common="common";
var font="font";

var yonyou_js=[https+summer+js,https+frameworks_core+js,https+frameworks_ui+js];
var jquery_min=[https+jquery+js];
var jquery_min_2_1_4=[https+jquery_2_1_4+js]

function getEquipmentMaintenanceInfo_js(url){//引入已到饲料查询js	7
	var equipmentMaintenanceInfo_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(equipmentMaintenanceInfo_js));				
}

function getEquipmentMaintenance_js(url){//引入已到饲料查询js	7
	var equipmentMaintenance_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(equipmentMaintenance_js));				
}

function getEquipmentFirstList_js(url){//引入已到饲料查询js	7
	var equipmentFirstList_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(getEquipmentFirstList_js));				
}

function getEateryaccountInfo_js(url){//引入已到饲料查询js	7
	var eateryaccountInfo_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js,
					https+frameworks_sortlist+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(getEateryaccountInfo_js));				
}

function getEateryaccountFirstList_js(url){//引入已到饲料查询js	7
	var eateryaccountFirstList_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(eateryaccountFirstList_js));			
}

function getEateryaccount_js(url){//引入已到饲料查询js	7
	var eateryaccount_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js,
					https+frameworks_sortlist+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(eateryaccount_js));			
}

function getConsumableList_js(url){//引入已到饲料查询js	7
	var consumableList_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(consumableList_js));				
}

function getConsumableInfo_js(url){//引入已到饲料查询js	7
	var consumableInfo_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(consumableInfo_js));		
}

function getConsumable_js(url){//引入已到饲料查询js	7
	var consumable_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(consumable_js));				
}

function getWeekWeighing_js(url){//引入已到饲料查询js	7
	var weekWeighing_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(weekWeighing_js));					
}

function getUseGas_js(url){//引入已到饲料查询js	7
	var useGas_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(useGas_js));					
}

function getUseElectricity_js(url){//引入已到饲料查询js	7
	var useElectricity_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(useElectricity_js));			
}

function getSecondList_js(url){//引入已到饲料查询js	7
	var secondList_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(secondList_js));				
}

function getPluckFoodWater_js(url){//引入已到饲料查询js	7
	var pluckFoodWater_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(pluckFoodWater_js));				
}

function getInChick_js(url){//引入已到饲料查询js	7
	var inChick_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(inChick_js));				
}

function getEstimateAlive_js(url){//引入已到饲料查询js	7
	var estimateAlive_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(estimateAlive_js));				
}

function getDeathElimination_js(url){//引入已到饲料查询js	7
	var deathElimination_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(deathElimination_js));				
}

function getDailyReportList_js(url){//引入已到饲料查询js	7
	var dailyReportList_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(dailyReportList_js));				
}

function getMedicineReceive_js(url){//引入已到饲料查询js	7
	var medicineReceive_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js,
					https+frameworks_sortlist+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(medicineReceive_js));				
}

function getMedicineList_js(url){//引入已到饲料查询js	5
	var medicineList_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(medicineList_js));				
}


function getMedicineConfirmation_js(url){//引入已到饲料查询js	7
	var medicineConfirmation_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js,
					https+frameworks_sortlist+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(medicineConfirmation_js));				
}

function getLoimialist_js(url){
	var loimialist_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(loimialist_js));		
}

function getLoimiaInfo_js(url){
	var loimiaInfo_js = [
					https+url+js,
					https+common+js,
					https+font+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min.concat(yonyou_js.concat(loimiaInfo_js));			
}

function getList_js(url){
	var list_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(list_js));				
}

function getIllnessChange_js(url){
	var illnessChange_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(illnessChange_js));				
}

function getSilverskinConfirmation_js(url){
	var silverskinConfirmation_js = [https+url+js];
	return jquery_min_2_1_4.concat(yonyou_js.concat(silverskinConfirmation_js));				
}

function getSilverskinArrived_js(url){
	var silverskinArrived_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(silverskinArrived_js));				
}

function getNotApprvoeSuppliesInfo_js(url){
	var notApprvoeSuppliesInfo_js = [
					https+utl+js
					];
	return jquery_min.concat(yonyou_js.concat(notApprvoeSuppliesInfo_js));				
}

function getNotApprvoeSupplies_js(url){
	var notApprvoeSupplies_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(notApprvoeSupplies_js));						
}

function getTransferSummary_js(url){
	var transferSummary_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(transferSummary_js));			
}


function getFeedTransfer_js(url){
	var feedTransfer_js = [https+utl+js];
	return jquery_min.concat(yonyou_js.concat(feedTransfer_js));				
}

function getFeedSummary_js(url){
	var feedSummary_js = [
					https+jquery+js,
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(feedSummary_js));				
}

function getFeedDetails_js(url){
	var feedDetails_js = [https+url+js,];
	return jquery_min_2_1_4.concat(yonyou_js.concat(feedDetails_js));				
}

function getFeedConfirmation_js(url){
	var feedConfirmation_js = [https+url+js];
	return jquery_min_2_1_4.concat(yonyou_js.concat(feedConfirmation_js));				
}

function getLoginSetting_js(url){
	var loginSetting_js = [https+url+js];
	return jquery_min_2_1_4.concat(yonyou_js.concat(loginSetting_js));				
}

function getFeedApply_js(url){
	var feedApply_js = [https+utl+js];
	return jquery_min.concat(yonyou_js.concat(feedApply_js));				
}

function getFeedArrived_js(url){
	var feedArrived_js = [
						https+url+js,
						https+knockout_2_2_0+js,
						https+frameworks_listgroup+js
						];
	return jquery_min_2_1_4.concat(yonyou_js.concat(feedArrived_js));				
}

function getMain_js(url){//引入已到饲料查询js	5
	var main_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+islider+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(main_js));				
}

function getIndex_js(url){//引入登录界面js	2
	var index_js = [https+url+js];
	return jquery_min_2_1_4.concat(index_js.concat(yonyou_js));				
}


/**
 * 调用接口方法 对$summer.callAction({})的封装 
 * @param {Object} viewid
 * 			后台带包名的Controller名
 * @param {Object} action
 * 			方法名
 * @param {Object} params
 * 			自定义参数
 * @param {Object} callback
 * 			成功回调函数
 */
function callAction(viewid,action,params,callback){
	$service.callAction({
		"viewid" : viewid, //后台带包名的Controller名
		"action" : action, //方法名
		"params" : params, //自定义参数
		"callback" : callback+"()", //成功回调函数
		"error" : "erresg()",//失败回调函数
		"timeout":"40"//超时40s
	});
}
/**
 * 调用接口方法 对$summer.callAction({})的封装 
 * @param {Object} viewid
 * 			后台带包名的Controller名
 * @param {Object} action
 * 			方法名
 * @param {Object} filepath
 * 			文件路径
 * @param {Object} params
 * 			自定义参数
 * @param {Object} callback
 * 			成功回调函数
 */
function callActionContainsFile(viewid,action,filepath,params,callback){
	$service.callAction({
		"viewid" : viewid, //后台带包名的Controller名
		"action" : action, //方法名,
		"mauploadpath" : filepath,
		"params" : params, //自定义参数
		"callback" : callback+"()", //请求回来后执行的ActionID
		"error" : "erresg()",//失败回调的ActionId
		"timeout":"40"//超时40s
	});
}

/**
 * 关闭刷新方法
 * @param {Object} jsfun 
 * 					调用刷新方法名
 * @param {Object} url 
 * 					包名
 * @param {Object} html 
 * 					文件名
 */
function lastPageRefresh(jsfun,url,html){
	var jsfun = ""+jsfun+"();";
	var id = "/"+url+"/"+html+".html"
	summer.execScript({
	    winId: id,
	    script: jsfun
	});
}
/**
 * 获取手机时间
 * 年-月-日 
 */
function getNowFormatDate() {//获取年月日
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            /*+ " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();*/
    return currentdate;
}
/**
 * 获取手机时间
 * 年-月-日 时:分:秒
 */
function getNowFormatDateTime() {//获取年月日 时分秒
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}

/**
 *物理返回键监听 
 */
function onDeviceReady(fun,url,html) { 
	// 按钮事件 
	document.addEventListener("backbutton", eventBackButton(fun,url,html), false); // 返回键 
} 

function eventBackButton(fun,url,html) { 
	lastPageRefresh(fun,url,html);
	summer.closeWin();
}

/**
 * 跨界面刷新方法
 * @param {Object} jsfun 
 * 					调用刷新方法名
 * @param {Object} url 
 * 					包名
 * @param {Object} html 
 * 					文件名
 */
function lastPageRefresh(jsfun,url,html){
	var jsfun = ""+jsfun+"();";
	var id = "/"+url+"/"+html+".html"
	summer.execScript({
	    winId: id,
	    script: jsfun
	});
}

/**
 * 四舍五入
 */
function round(num,d){
 
	//Step1:将num放大10的d次方倍
	 
	num*=Math.pow(10,d);
	 
	//Step2:对num四舍五入取整
	 
	num = Math.round(num);
	 
	//Step：返回num缩小10的d次方倍，获得最终结果
	 
	return num/Math.pow(10,d);
 
}
