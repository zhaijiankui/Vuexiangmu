// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import "@/assets/css/reset.css";
import "@/assets/js/resize.js";
Vue.config.productionTip = false
import Vuex from 'vuex'
Vue.use(Vuex);
const store=new Vuex.Store({
  state:{
    tabBarActive:0, // 底部索引
  },
  mutations:{
    changeTab(state, payload){
      state.tabBarActive = payload;
    }
  }
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
