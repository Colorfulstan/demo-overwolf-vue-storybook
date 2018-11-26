import { Module }   from 'vuex';
import { AppState } from '@/store';

export const namespaceCounter = 'counter';

export interface StatePartial {
  [namespaceCounter]: CounterState
}

export interface CounterState {
  counter: number
  nested: {
    counter: number
  }
}

export const stateInitial: CounterState = {
  counter: 10,
  nested : {
    counter: 5
  }
};

export const CounterStoreModule: Module<{ counter: number, nested: any }, AppState> = {
  namespaced: true,
  state     : () => stateInitial,
  mutations : {
    increment(state) {
      state.counter++;
      state.nested.counter++;
    },
    decrement(state) {
      state.counter--;
      state.nested.counter--;
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
