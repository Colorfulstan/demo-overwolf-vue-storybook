import Vue                    from 'vue';
import Vuex                   from 'vuex';

declare const overwolf: any;

Vue.use(Vuex);

export interface AppState {
  [key: string]: any
}

// To share our state with other windows, we store our state on the main overwolf-window, reusing that reference.
const mainWindow = overwolf.windows.getMainWindow();
mainWindow.store = mainWindow.store || new Vuex.Store<AppState>({
  state: {}
});

export default mainWindow.store;
