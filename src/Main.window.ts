// @ts-ignore
import devtools from '@vue/devtools'
import Vue         from 'vue';
import App         from './Main.window.vue';
// import router from './router';
import { provide } from '@/provide';

if (process.env.NODE_ENV === 'development') {
  devtools.connect(/* host, port */)
}

Vue.config.productionTip = false;

new Vue({
  // router,
  // store,
  provide,
  render: (h) => h(App)
}).$mount('#app');
