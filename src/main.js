import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 数据请求测试
// import { request } from './network/request'
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })


Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  render: h => h(App),
}).$mount('#app')

// 多次点击路由报错解决方案
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

