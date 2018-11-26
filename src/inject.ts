// @ts-ignore
import injector from 'vue-inject';
import Vue      from 'vue';

// https://www.npmjs.com/package/vue-inject
Vue.use(injector);

class TestService {
  constructor() {
    console.log('TestService constructor');

  }

  hi() {
    console.log('hi');
  }
}

class TestService2 {
  constructor(private test: TestService) {
    console.log('TestService2 constructor');
  }

  hi2() {
    return Promise.resolve()
  }
}


injector.service('test', TestService);
injector.service('test2', 'test', TestService2);
// @ts-ignore
window['injectorInstance'] = injector
