import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    services: false,
    mainMenu: false
  },
  mutations: {
    openServices(state){
      state.services = !state.services
    },
    openMenu(state){
      state.mainMenu = !state.mainMenu
      state.services = false
    },
    closeMenu(state){
      if (state.mainMenu){
        state.mainMenu = false
      }
    },
    scrollToTop(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
