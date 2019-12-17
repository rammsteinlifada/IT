import Vue from 'vue';
import Vuex from 'vuex';
import App from './app.vue';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    products: [
      { id: 0, name: "apple", description: "green", image: "apple.jpg", price: 12 },
      { id: 1, name: "banana", description: "yellow", image: "banana.jpeg", price: 15 },
      { id: 2, name: "cucumber Rick", description: "cucumber Rick", image: "cucumber.jpg", price: 60 },
      { id: 3, name: "potato", description: "Belarusian gold", image: "potato.jpg", price: 70000 },
      { id: 4, name: "lemon", description: "sour", image: "lemon.jpg", price: 30 },
      { id: 5, name: "tomato", description: "red", image: "tomato.jpg", price: 21 },
      { id: 6, name: "lime", description: "very sour", image: "lime.jpg", price: 10000000 },
      { id: 7, name: "orange", description: "orange", image: "orange.jpeg", price: 1000 }
    ]
  },
  getters: {
    doneTodos: state =>{
      return state.products;
    }
  }
})

const router = new VueRouter({
  routes: [
    {path: "/", component: () => import('./components/main.vue')},
    {path: "/item/:id", component: () => import("./components/info.vue")}
  ]
})

router.push("/");

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')