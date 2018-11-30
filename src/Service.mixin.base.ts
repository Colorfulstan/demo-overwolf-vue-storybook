import { Vue } from 'vue-property-decorator';

export abstract class ServiceMixinBase extends Vue {
  protected abstract teardownFns: Array<() => void> = [];

  protected abstract created(): unknown;

  protected abstract beforeDestroy(): unknown;
}
