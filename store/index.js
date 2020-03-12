import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const usertokenlocal = uni.getStorageSync('user_token');
const userinfolocal = uni.getStorageSync('userinfo');
 
const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
		forcedLogin: true,
		hasLogin: usertokenlocal ? true : false,
		userinfo: userinfolocal ? userinfolocal : {},
		show_loading:false,//调用接口时的统一loading
		is_beeting:false,//封盘
		expect:'',
		is_empty_beeting:false,
		footer_nav:[

		            {
		                name:'首页',
		                url:'/pages/home/home',
		                icon:'/static/icon/sy_wx@2x.png',
		                select_icon:'/static/icon/sy_yx@2x.png'
		            },
		            {
		                name:'消息',
		                url:'/pages/message/message',
		                icon:'/static/icon/xx_wx@2x.png',
		                select_icon:'/static/icon/xx_yx@2x.png'
		            },
		            {
		                name:'我的',
		                url:'/pages/user/user',
		                icon:'/static/icon/wd_wx@2x.png',
		                select_icon:'/static/icon/wd_yx@2x.png'
		            }
		            
		        ],
				now_page_index:2,
    },
    mutations: {
        login(state, usertoken) {
            state.usertoken = usertoken;
            state.hasLogin = true;
        },
        logout(state) {
					uni.removeStorageSync('userinfo');//用户信息
					uni.removeStorageSync('user_token');
					state.userinfo = "";
					state.hasLogin = false;
        },
		userinfoarr(state, userinfo) {
			state.userinfo = userinfo;
		},
		switch_loading(state,status){
			if(status == "change"){
				state.show_loading = !state.show_loading
			}
			state.show_loading = status;
		},
		change_page(state,index){
			state.now_page_index = index;
			let url = state.footer_nav[index].url;
			uni.switchTab({
				url:url
			})
		},
		switch_betting(state,status){
			state.is_beeting = status;
		}
    }
})
export default store

