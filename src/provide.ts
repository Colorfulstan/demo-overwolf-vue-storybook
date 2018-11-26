import { CounterService } from '@/counter/counter.service';

import store from './store';

export const provide = {
  counterService: new CounterService(store)
};
