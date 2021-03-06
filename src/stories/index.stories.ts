/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action }    from '@storybook/addon-actions';
import AdminWindow   from '../Admin.window.vue';
import SubWindow     from '../Sub.window.vue';
import MainWindow    from '../Main.window.vue';
import OwHeader      from '../shared/overwolf/ow.header.vue';
import store         from '../store';
import Vue from 'vue'
//
// // NOTE: for storybook to work, we need to set the store on the component, not only on the main Vue Instance
// MainWindow.store = store;
// SubWindow.store  = store;

Vue.prototype.$store = store

storiesOf('Windows', module)
  .add('MainWindow', () => ({
    components: { MainWindow },
    template  : '<main-window></main-window>',
    methods   : { action: action('clicked') }
  }))
  .add('SubWindow', () => ({
    components: { SubWindow },
    template  : '<sub-window></sub-window>',
    methods   : { action: action('clicked') }
  }))
  .add('AdminWindow', () => ({
    components: { AdminWindow },
    template  : '<admin-window></admin-window>',
    methods   : { action: action('clicked') }
  }));

storiesOf('Shared Components', module)
  .add('Overwolf Header', () => ({
    components: { OwHeader },
    template  : '<ow-header></ow-header>',
    methods   : {
      closeWindow   : action('closeWindow clicked'),
      minimize      : action('minimize clicked'),
      showSupport   : action('showSupport'),
      toggleMaximize: action('toggleMaximize')
    }
  }));
