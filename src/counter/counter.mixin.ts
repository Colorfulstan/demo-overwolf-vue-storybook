import { Component, Inject, Vue } from 'vue-property-decorator';
import { CounterService }         from '@/counter/counter.service';

@Component({
  name: 'counter-mixin'
})
export class CounterMixin extends Vue {
  public counter                         = -999;
  public counter2                        = -999;
  private teardownFns: Array<() => void> = [];

  @Inject() private counterService!: CounterService;

  public increment(): unknown {
    return this.counterService.increment();
  }

  public decrement(): unknown {
    return this.counterService.decrement();
  }

  private created() {
    this.teardownFns.push(
      this.counterService.watchCounter((newCounter) => { this.counter = newCounter; }),
      this.counterService.watchCounter2((newCounter) => { this.counter2 = newCounter; })
    );
  }

  private beforeDestroy() {
    this.teardownFns.forEach((teardown) => teardown());
  }
};
