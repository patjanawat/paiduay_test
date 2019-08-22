import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let app = '';
const firebaseConfig = {
  apiKey: "AIzaSyBD-g-kl9mjJmz7KQ7T8OekrQcC9T-NUCw",
  authDomain: "pdktest-9211b.firebaseapp.com",
  databaseURL: "https://pdktest-9211b.firebaseio.com",
  projectId: "pdktest-9211b",
  storageBucket: "",
  messagingSenderId: "768549755599",
  appId: "1:768549755599:web:b80a10d77e17e684"
};


firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});