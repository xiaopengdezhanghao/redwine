//本地
var ishttps = document.location.protocol;
var hostname = window.location.hostname;
// if(window.location.host.indexOf('localhost')!=-1||window.location.host.indexOf('192.')!=-1){
// 	var baseUrl = 'http://api2.hj10088.com/api/hbcloud/';
// 	var domain = 'hj10088.com';
// }else{
// 	var domain = hostname.substring(hostname.indexOf('.')+1,hostname.length);
// 	var baseUrl = ishttps+'//api2.'+domain+'/api/hbcloud/';  
// }
if(window.location.host.indexOf('localhost')!=-1||window.location.host.indexOf('192.')!=-1){
	// var baseUrl = 'http://api2.hengbocloud1.com/api/hbcloud/';
	var baseUrl = 'http://api2.long9028.com/api/hbcloud/';
	// var domain = '24030.com';
}else{
	var domain = hostname.substring(hostname.indexOf('.')+1,hostname.length);
	var baseUrl = ishttps+'//api2.'+domain+'/api/hbcloud/';  
}
const webSoketUrl = ishttps == 'https:' ? 'wss://api2.'+domain+':8282':'ws://api2.'+domain+':8282';
const api_domain = ishttps+'//api2.'+domain;
const app_domain = domain;
const api_baseurl = baseUrl;
const app_config = {
	"api_version" : '1.0.0',
	"version" : '1.0.0.20200220'
}
const api_lists = {
	"login":'Public/login',//登录 
	"userreg":'Public/register',//注册
	"update_password":'Members/editPassword',//修改登录密码
	"update_pay_password":'Members/edirtPayPassword',//修改支付密码
	"set_question":'Questions/setQuestions',//设置密保
	"sendcode":'Public/sendcode',//获取验证码
	"get_lottery_number":'Game/getLotteryNumber',//获取开奖结果
	"get_issue_number":'Game/getIssueNumber',//获取期号
	"get_old_game_info":'Game/getOldGameInfo',//	获取传统玩法游戏数据
	"history_results":'Game/history_results',// 获取一个彩种开奖记录
	"index":'Index/index',//首页
	"game_notes":'Game/get_game_notes',// 获取游戏说明
	"lottery_log":'Record/betRecord',// 投注记录
	"agent_commissionslog":'Agent/fanYongLists',// 返佣记录
	"add_invcode":'InvitationCode/addInviteCode',// 生成邀请码
	"invcode_lists":'InvitationCode/inviteCodes',// 邀请码列表
	"delone_invcode":'InvitationCode/delInviteCode',// 删除某个邀请码
	"agent_team":'Agent/teamLists',// 代理下的团队
	"agent_report":'Agent/teamReport',// 团队报表
	"agent_userreport":'Agent/downUserReport',// 下级报表
	"agent_game_report":'Agent/otherallReport',// 游戏报表
	"userinfo":'Members/index',//获取用户信息
	"member_update":'Members/update',//个人资料更新	
	"set_pay_password":'Members/setPayPassword',//设置支付密码
	"old_cp_buy":'Game/oldBuy',//投注
	"today_profit":'Statistics/todayLoss',// 今日盈亏
	"index":'Shop_goods/index',//首页
	"magse":"Shop_goods/details",//详情页
	"order":"Shop_order/buy_order",//确认订单
	"details":"Shop_order/details",//信息页面
	"addrea":"Shop_order/member_add_address",//添加用户
	"member": "Shop_order/member_address",
	"shop_order_index":"Shop_order/index",//获取订单信息


	"activity":'Activity/index',//活动列表
	"message":'Notice/index',//公告列表
	"bank_list":'UserCards/bankLists',//银行卡列表
	"bind_bank_list":'Public/sysBanks',//获取可以绑定的银行列表
	"bind_bank":'UserCards/bindBankCard',//绑定银行卡
	"bank_desc":'UserCards/cardBankInfo',//获取银行卡详情
	"update_bank":'UserCards/editBank',//更新银行卡详情
	"my_wallet":'Wallet/index',//	我的钱包
	"withdraw_config":'Withdraws/withdrawConfig',// 提现前的配置
	"withdraw_submit":'Withdraws/withdraw',// 提交提现
	"three_lottery_log":'Record/otherallBetRecord',// 第三方投注记录
	"capital_log":'Record/dealRecord',// 账变记录
	"recharge_log":'Record/payRecord',// 充值记录
	"withdraw_log":'Record/withdrawRecord',// 提现记录
	"news_details":'News/show',// 文章详情
	"news_category":'News/category',// 文章分类
	"articles":'News/index',// 文章
	"agent":'Agent/index',// 代理中心
	"agent_gameusers":'Agent/otheronReport',// 某个游戏报表
	"recharge_type":'Recharge/index',// 查看充值配置
	"recharge_sumbit":'Recharge/recharge',// 提交充值
	"check_recharge_sumbit":'Recharge/checkRecharge',// 检查某个充值是不是已经到账了
	"get_other_game_address":'Game/getOtherGameAddress',// 获得第三方url
	"tranfer_post":'Ng/transfer_accounts',// 获得第三方url
	"cancel_bet":'Game/cancelBet',// 撤单
	"get_game_balance":'Game/getOtherGameBalance',// 查询第三方余额
	"getOtherGameCode":'Game/getOtherGameCode',//获取平台游戏代码
}
const user_token = 'user-token';
const getUsers = function () {
    let ret = '';
    ret = uni.getStorageSync(user-token);
    if (!ret) {
        ret = '[]';
    }
    return JSON.parse(ret);
}
export const userinfo = ()=>{
	return axios.request({
		url:api_lists.userinfo,
		method:'get',
	})
}
const addUser = function (userInfo) {
    let users = getUsers();
    users.push({
        account: userInfo.account,
        password: userInfo.password
    });
    uni.setStorageSync(user-token, JSON.stringify(users));
}


export default {
    getUsers,
    addUser,
	api_baseurl,
	app_config,
	api_lists,
	app_domain,
	ishttps,
	hostname,
	api_domain,
	webSoketUrl
}
