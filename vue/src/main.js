import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//分辨率适配
// import "lib-flexible";
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
