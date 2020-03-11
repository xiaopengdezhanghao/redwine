import Vue from 'vue'
import App from './App'
//引入vuex
import store from './store'
import footerNav from './components/footer_nav.vue'
import loading_component from "components/loading.vue";
//接口文档
import $ajax from "./common/ajax.js";
import service from './common/service.js';


//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.prototype.$ajax = $ajax
Vue.prototype.$service = service
Vue.config.productionTip = false
Vue.component("footer-nav",footerNav);
Vue.component("fr-loading",loading_component);
App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
