import Vue              from 'vue';
import Vuex             from 'vuex';
import { CounterStore } from './counter.store';

declare const overwolf: any;

Vue.use(Vuex);

export interface AppState {}

// To share our state with other windows, we store our state on the main overwolf-window, reusing that reference.
const mainWindow            = overwolf.windows.getMainWindow();
mainWindow.vuexAppWideState = mainWindow.vuexAppWideState || {};

// If we would just pass the same store object to different Vue instances,
// only one of the apps can be registered to be watching the changes
// to prevent that, we still want to use a separate store instance per window/Vue App,
// but through the shared state object, we still achieve a window shared store.

// IMPORTANT NOTE: as of yet (15.11.2018 - v0.0.1) subscribing to the store actions and mutations is local to the
// subscribing window!
// most likely same issue with this.$store.watch
// it works if the mutation/action is triggered by the same window, but is not propagated to other windows.
// Workaround: use watcher to execute code when data in a component changes
// possible long term solutions:
// 1) implement proxy service, available on the main window, that subscribes to mutations/actions on each window's store
// and can be subscribed on from each window

// TODO: check if there are additional things that would need to be syncronized across the windows.
// replaceState?
// (un)registerModule?
// hotUpdate?
(window as any).vuexAppWideStore = new Vuex.Store<AppState>({
  state  : mainWindow.vuexAppWideState,
  modules: {
    CounterStore
  }
});

// needed to make it work cross window!
// modules need to be namespaced
// make state global for app and replace module's state
mainWindow.vuexAppWideModuleStates              = mainWindow.vuexAppWideModuleStates || {};
mainWindow.vuexAppWideModuleStates.CounterStore =
  mainWindow.vuexAppWideModuleStates.CounterStore || (window as any).vuexAppWideStore.state.CounterStore;

// For namespaced modules, we need to replace the respective state object here.
// simply replacing it with a reference on mainWindow within the Module file doesn't do the trick
// not sure why this is, but Vue propably creates a new state object for the module when it gets
(window as any).vuexAppWideStore.state.CounterStore = mainWindow.vuexAppWideModuleStates.CounterStore;

export default (window as any).vuexAppWideStore;
