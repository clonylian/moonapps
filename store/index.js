import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    txt: { home: "首页",welcomebot:'登录'  },
    ch: { home: "首页",welcomebot:'登录' },
    en: { home: "home",welcomebot:'login'  }
  },
  mutations: {
    changeyy(state, str) {
      console.log(state, str);
      state.txt = state[str];
      console.log(state[str]);
    },
  },
    actions: {}
})
export default store