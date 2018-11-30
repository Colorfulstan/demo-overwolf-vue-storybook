import { Component, Inject } from 'vue-property-decorator';
import { CounterService }    from '@/counter/counter.service';
import { ServiceMixinBase }  from '@/Service.mixin.base';

@Component({
  name: 'counter-mixin'
})
export class CounterMixin extends ServiceMixinBase {
  public counter                           = -999;
  public counter2                          = -999;
  protected teardownFns: Array<() => void> = [];

  @Inject() private counterService!: CounterService;

  public increment(): unknown {
    return this.counterService.increment();
  }

  public decrement(): unknown {
    return this.counterService.decrement();
  }

  protected created() {
    this.teardownFns.push(
      this.counterService.watchCounter((newCounter) => { this.counter = newCounter; }),
      this.counterService.watchCounter2((newCounter) => { this.counter2 = newCounter; })
    );
  }

  protected beforeDestroy() {
    this.teardownFns.forEach((teardown) => teardown());
  }
};
