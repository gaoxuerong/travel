import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city: '上海'
  },
  // actions: {
  //   handlecityname (ctx,cityname) {
  //     console.log(cityname)
  //     ctx.commit('handlecityname', cityname)
  //   }
  // },
  mutations: {
    handlecityname (state, cityname) {
      state.city = cityname
    }
  }
})
