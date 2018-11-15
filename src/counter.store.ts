import { Module }   from 'vuex';
import { AppState } from '@/store';

export const moduleName = 'CounterStore';

export const CounterStore: Module<{ counter: number, nested: any }, AppState> = {
  namespaced: true,
  // state     : (mainWindow as any).vuexAppWideModuleStates[moduleName],
  // state     : mainWindow.vuexAppWideModuleStates[moduleName],
  state     : {
    counter: 10,
    nested : {
      counter2: 5
    }
  },
  mutations : {
    increment(state) {
      state.counter++;
      state.nested.counter2++;
    },
    decrement(state) {
      state.counter--;
      state.nested.counter2--;
    }
  },
  actions   : {
    increment(context) {
      context.commit('increment');
    },
    decrement(context) {
      context.commit('decrement');
    }
  }
};
