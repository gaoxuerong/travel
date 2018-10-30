import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
