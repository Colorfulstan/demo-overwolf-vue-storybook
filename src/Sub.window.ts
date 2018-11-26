import Vue         from 'vue';
import App         from './Sub.window.vue';
// import router from './router';
import { provide } from '@/provide';

Vue.config.productionTip = false;

// @ts-ignore
Vue.prototype.$injector = overwolf.windows.getMainWindow()['injectorInstance'];

new Vue({
  // router,
  provide,
  render: (h) => h(App),
}).$mount('#app');
