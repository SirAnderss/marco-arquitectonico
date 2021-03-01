import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadFirebase from '../firebase.config';
import jsonToHtml from './jsonToHtml';
import Editor from 'vue-editor-js/src'
// import VueGtag from "vue-gtag";

Vue.mixin(jsonToHtml)
const firebase = loadFirebase();
// Vue.prototype.$analytics = firebase.analytics();
Vue.config.productionTip = false

// Vue.use(VueGtag, {
//   config: { id: "UA-1234567-1" }
// });

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