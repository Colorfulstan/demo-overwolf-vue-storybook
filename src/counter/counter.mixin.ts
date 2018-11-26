export const CounterMixin = {
  inject : ['counterService'],
  data   : () => {
    return {
      counter           : -999,
      counter2          : -999,
      teardownCounterFns: []
    };
  },
  methods: {
    increment(): any {
      // @ts-ignore
      return this.counterService.increment();
    },
    decrement(): any {
      // @ts-ignore
      return this.counterService.decrement();
    }
  },
  created() {
    // @ts-ignore
    this.teardownCounterFns.push(
      // @ts-ignore
      this.counterService.watchCounter((newCounter) => { this.counter = newCounter; }),
      // @ts-ignore
      this.counterService.watchCounter2((newCounter) => { this.counter2 = newCounter; })
    );
  },
  beforeDestroy() {
    // @ts-ignore
    this.teardownCounterFns.forEach((teardown) => teardown());
  }
};
