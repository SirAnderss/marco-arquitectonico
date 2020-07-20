import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics'
import loadFirebase from '../firebase.config';

const firebase = loadFirebase();

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-XXX-X'
})

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.info('Authenticated');
  } else {
    console.info('Guest');
  }
  new Vue({
    router,
    store,
    firebase,
    render: h => h(App)
  }).$mount('#app');
})