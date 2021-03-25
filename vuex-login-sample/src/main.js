import Vue from 'vue'
import './plugins/vuetify'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import * as firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDxIld6mN-AuzPMl_ktgKgtiGlSxarBF00",
	authDomain: "linkchattest.firebaseapp.com",
	databaseURL: "https://linkchattest.firebaseio.com",
	projectId: "linkchattest",
	storageBucket: "linkchattest.appspot.com",
	messagingSenderId: "798585863063",
	appId: "1:798585863063:web:080699a1f00cca2b4c22d2"
}
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

