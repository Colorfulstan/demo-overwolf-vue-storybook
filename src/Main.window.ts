import Vue         from 'vue';
import App         from './Main.window.vue';
// import router from './router';
import { provide } from '@/provide';


require('./inject');

// @ts-ignore
Vue.prototype.$injector = window['injectorInstance']

Vue.config.productionTip = false;

new Vue({
  // router,
  // store,
  provide,
  render: (h) => h(App)
}).$mount('#app');
