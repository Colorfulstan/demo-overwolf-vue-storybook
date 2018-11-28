// @ts-ignore
// import devtools from '@vue/devtools'

import Vue         from 'vue';
import App         from './Sub.window.vue';
// import router from './router';
import { provide } from '@/provide';

Vue.config.productionTip = false;

// if (process.env.NODE_ENV === 'development') {
//   devtools.connect(/* host, port */)
// }

new Vue({
  // router,
  provide,
  render: (h) => h(App),
}).$mount('#app');
