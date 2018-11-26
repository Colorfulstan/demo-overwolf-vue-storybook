import { HasStore }                                                         from '@/hasStore';
import { CounterState, CounterStoreModule, namespaceCounter, StatePartial } from '@/counter/counter.store.module';
import { Store }                                                            from 'vuex';
import { AppState }                                                         from '@/store';

const actions = {
  INCREMENT_COUNTER: 'counter/increment',
  DECREMENT_COUNTER: 'counter/decrement'
};

export class CounterService extends HasStore<CounterState, AppState> {
  protected moduleDefinition = CounterStoreModule;
  protected namespace        = namespaceCounter;

  constructor(protected store: Store<AppState&StatePartial>) { // TODO: typing
    super();
    this.registerModule();
  }

  public get counter(): number {
    return this.store.state[this.namespace].counter;
  }

  public watchCounter(cb: (counter: number) => void): () => void {
    return this.store.watch(
      (state) => state[this.namespace].counter,
      cb,
      { immediate: true }
    );
    // return this.store.subscribe((mutation, state) => {
    //   console.log('mutation subscribtion for counter', mutation, state);
    //   cb(state[this.namespace].counter);
    // });
  }

  public watchCounter2(cb: (counter: number) => void): () => void {
    return this.store.watch(
      (state) => state[this.namespace].nested.counter,
      cb,
      { immediate: true }
    );
    // return this.store.subscribe((mutation, state) => {
    //   console.log('mutation subscribtion for counter2', mutation, state);
    //   cb(state[this.namespace].nested.counter);
    // });
  }

  public get counter2(): number {
    return this.store.state[this.namespace].nested.counter;
  }

  public increment() {
    return this.store.dispatch(actions.INCREMENT_COUNTER);
  }

  public decrement() {
    return this.store.dispatch(actions.DECREMENT_COUNTER);
  }
}
