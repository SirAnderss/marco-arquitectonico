import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics'
import loadFirebase from '../firebase.config';
import jsonToHtml from './jsonToHtml';
import Editor from 'vue-editor-js'

Vue.mixin(jsonToHtml)
const firebase = loadFirebase();

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-XXX-X'
})

Vue.use(Editor)

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.info('Warning don´t use this tool, be carefull');
  }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
})