import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入其他组件文件
import './Plugin/anime'
// 初始化
Vue.config.productionTip = false;
// 启动
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');