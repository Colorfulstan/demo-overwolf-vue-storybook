import { CounterState } from '@/counter/counter.store.module';

// implementing class also should have getters for each of their data attributes
export abstract class HasStore<DataAttributes, RootState> {
  protected abstract moduleDefinition: any; // TODO: typing
  protected abstract namespace: string;
  protected abstract store: any; // TODO: typing

  protected constructor() {}

  public getState(): CounterState {
    return this.store.state[this.namespace];
  }

  public registerModule() {
    if (typeof this.store.state[this.namespace] === 'undefined') {
      this.store.registerModule(this.namespace, this.moduleDefinition);
    }
  }

  protected unRegisterModule() {
    this.store.unregisterModule(this.namespace);
  }
}
